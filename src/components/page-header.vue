<template>
  <p class="error" v-if="error">{{ error }}</p>
  <header v-else class="header" :class="{'not-on-top-or-open': !isOnTop || isMenuOpen}">
    <div class="main-content">
      <img class="logo" src="../assets/img/logo.png" alt="Logo">
      <hamburger v-model:isMenuOpen="isMenuOpen"/>
      <div class="menu-items">
        <router-link class="menu-item strong" v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
          {{ menuItem.label }}
        </router-link>
      </div>
    </div>
    <mobile-menu :is-open="isMenuOpen" :menuItems="menuItems"/>
  </header>
</template>

<script>
import Hamburger from "@/components/hamburger";
import MobileMenu from "@/components/mobile-menu";
import {handleScrollMixin} from "@/mixins/handleScrollMixin";
import {computed, ref} from "@vue/reactivity";
import {useStore} from "vuex";

export default {
  name: "page-header",
  components: {MobileMenu, Hamburger},
  mixins: [handleScrollMixin],
  data() {
    return {
      isOnTop: true,
      isMenuOpen: false
    }
  },
  async setup() {
    const error = ref(null)
    const menuItems = ref(null)
    const store = useStore()

    try {
      await store.dispatch("header/getContent")
      const content = computed(() => store.state['header'].content)
      menuItems.value = content.value.menuItems;
    } catch (e) {
      error.value = e;
    }


    return {error, menuItems}
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/components/header";
</style>
