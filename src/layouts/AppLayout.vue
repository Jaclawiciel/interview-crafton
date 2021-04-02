<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script>
import AppLayoutDefault from '@/layouts/AppLayoutDefault'
import {markRaw} from 'vue'

export default {
  name: "AppLayout",
  data: () => ({
    layout: markRaw(AppLayoutDefault)
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`)
          this.layout = markRaw(component?.default || AppLayoutDefault)
        } catch (e) {
          this.layout = markRaw(AppLayoutDefault)
        }
      }
    }
  }
}
</script>
