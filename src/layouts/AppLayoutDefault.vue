<template>
  <div class="default-layout">
    <div class="top-layout-container">
      <Suspense>
        <template #default>
          <page-header/>
        </template>
        <template #fallback>
          <Loader name="HeaderLoader"/>
        </template>
      </Suspense>

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
          <Loader name="FooterLoader"/>
        </template>
      </Suspense>
    </transition>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";
import PageFooter from "@/components/page-footer";
import PageHeader from "@/components/page-header";

export default {
  name: 'AppLayoutDefault',
  components: {PageHeader, PageFooter},
  setup() {
    const store = useStore()
    const loading = computed(() => store.state['loaders']['footer'].isLoading)
    return {loading}
  }
}
</script>

<style scoped lang="scss">
</style>
