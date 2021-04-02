<template>
  <div class="default-layout">
    <div class="top-layout-container">
      <nav class="menu">Menu</nav>
      <main class="content">
        <slot/>
      </main>
    </div>
    <transition name="fade" mode="out-in" :duration="300">
    <Suspense>
        <template #default>
          <page-footer/>
<!--                  <Loader name="FooterLoader"/>-->
        </template>
        <template #fallback>
          <Loader name="FooterLoader"/>
        </template>
    </Suspense>
    </transition>
  </div>
</template>

<script>
import PageFooter from "@/components/page-footer";
import Loader from "@/components/loaders/Loader";
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";

export default {
  name: 'AppLayoutDefault',
  components: {Loader, PageFooter},
  // components: {Loader},
  setup () {
    const store = useStore()
    const loading = computed(() => store.state['loaders']['footer'].isLoading)
    return {loading}
  }
}
</script>

<style scoped lang="scss">
</style>
