<template>
  <div class="container">
    <Carousel class="full-page" :items="carouselItems"/>
    <main-content :blocks="mainContentBlocks" />
    <ContactForm/>
  </div>
</template>

<script>
import {computed, ref} from "@vue/reactivity";
import {useStore} from "vuex";
import Carousel from "@/components/carousel";
import MainContent from "@/components/MainContent";
import ContactForm from "@/components/ContactForm";

export default {
  name: 'home',
  components: {ContactForm, Carousel, MainContent},
  async setup() {
    const store = useStore()
    const error = ref(null)
    const carouselItems = ref(null)
    const mainContentBlocks = ref(null)

    try {
      await store.dispatch("carousel/getContent")
      const carouselContent = computed(() => store.state['carousel'].content)
      carouselItems.value = carouselContent.value.sort((a, b) => a.order - b.order);

      await store.dispatch("main/getContent")
      const mainContent = computed(() => store.state['main'].content)
      mainContentBlocks.value = mainContent.value.sort((a, b) => a.order - b.order);
    } catch (e) {
      error.value = e;
    }


    return {error, carouselItems, mainContentBlocks}
  }
}
</script>

<style scoped lang="scss">
.full-page {
  height: 100vh;
  width: 100%;
}
</style>
