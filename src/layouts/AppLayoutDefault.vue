<template>
  <div class="default-layout">
    <div class="top-layout-container">
      <transition name="fade" mode="out-in" :duration="300">
        <Suspense>
          <template #default>
            <page-header/>
          </template>
          <template #fallback>
            <header-loader/>
          </template>
        </Suspense>
      </transition>

      <main class="content">
        <slot/>
      </main>
    </div>
    <transition name="fade" mode="out-in" :duration="300">
      <Suspense>
        <template #default>
          <page-footer/>
        </template>
        <template #fallback>
          <footer-loader/>
        </template>
      </Suspense>
    </transition>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";
import PageFooter from "@/components/page-footer";
import FooterLoader from "@/components/loaders/FooterLoader";
import HeaderLoader from "@/components/loaders/HeaderLoader";
import PageHeader from "@/components/page-header";

export default {
  name: 'AppLayoutDefault',
  components: {PageHeader, HeaderLoader, FooterLoader, PageFooter},
  setup() {
    const store = useStore()
    const loading = computed(() => store.state['loaders']['footer'].isLoading)
    return {loading}
  }
}
</script>

<style scoped lang="scss">
</style>
