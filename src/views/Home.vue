<template>
  <Carousel class="full-page" :items="carouselItems"/>
</template>

<script>
import {computed, ref} from "@vue/reactivity";
import {useStore} from "vuex";
import Carousel from "@/components/carousel";

export default {
  name: 'home',
  components: {Carousel},
  async setup() {
    const error = ref(null)
    const carouselItems = ref(null)
    const store = useStore()

    try {
      await store.dispatch("carousel/getContent")
      const content = computed(() => store.state['carousel'].content)
      console.log(content.value)
      console.log(content.value.sort((a, b) => a - b))
      carouselItems.value = content.value.sort((a, b) => a.order - b.order);
    } catch (e) {
      error.value = e;
    }


    return {error, carouselItems}
  }
}
</script>

<style scoped lang="scss">
.full-page {
  height: 100vh;
  width: 100%;
}
</style>
