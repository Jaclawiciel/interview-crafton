<template>
  <h1>HOME</h1>
</template>

<script>
import {computed, ref} from "@vue/reactivity";
import {useStore} from "vuex";

export default {
  name: 'home',
  async setup() {
    const error = ref(null)
    const carouselItems = ref(null)
    const store = useStore()

    try {
      await store.dispatch("carousel/getContent")
      const content = computed(() => store.state['carousel'].content)
      carouselItems.value = content.value;
    } catch (e) {
      error.value = e;
    }


    return {error, carouselItems}
  }
}
</script>

<style scoped lang="scss">
//.header-image {
//  height: 100vh;
//  width: 100%;
//  background-image: url("../assets/img/header-image.jpg");
//  background-position: center;
//  background-repeat: no-repeat;
//  background-size: cover;
//}
</style>
