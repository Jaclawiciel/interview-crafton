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
.header {
  position: fixed;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  transition: all .25s;
  z-index: 1000;

  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo {
      transition: width .25s;
      width: 100px;
    }
  }

  &.not-on-top-or-open {
    .main-content {
      background-color: $header-overlap;
      box-shadow: 0 0 12px 5px rgba(0, 0, 0, .5);
      padding: 10px;

      @supports (backdrop-filter: blur(6px)) {
        backdrop-filter: blur(6px);
      }

      @supports not (backdrop-filter: blur(6px)) {
        background-color: rgba(0, 0, 0, .75);
      }
    }

    .logo {
      width: 40px;
    }
  }
}

@include media(">=tablet") {
  .header {
    .main-content {
      .menu-items {
        display: flex;
        justify-content: space-evenly;

        .menu-item {
          color: $menu-items;
          text-align: center;
          margin: 0 20px;
        }
      }
    }

    &.not-on-top-or-open {
      .main-content {
        padding: 20px;
      }
    }
  }
}

</style>
