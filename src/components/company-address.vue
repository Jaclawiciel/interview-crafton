<template>
  <Suspense>
    <template #default>
      <pre>{{address}}</pre>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";

export default {
  name: 'company-address',
  async setup() {
    const store = useStore()
    await store.dispatch("footer/getAddress")
    const address = computed(() => store.state['footer'].address)
    return {address}
  }
}
</script>

<style scoped lang="scss">

</style>
