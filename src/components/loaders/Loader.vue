<template>
  <component :is="loader">
    <slot/>
  </component>
</template>

<script>

import {markRaw} from "vue";
import FooterLoader from "@/components/loaders/FooterLoader";

export default {
  name: "Loader",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let loader
    try {
      const component = import(`@/components/loaders/${props.name}.vue`)
      loader = markRaw(component?.default || FooterLoader)
    } catch (e) {
      loader = markRaw(FooterLoader)
    }
    return {loader}
  }
}
</script>
