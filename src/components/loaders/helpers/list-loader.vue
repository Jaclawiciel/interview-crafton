<template>
  <ul>
    <li><text-loader size="l"/></li>
    <li><text-loader size="s"/></li>
    <li><text-loader size="m"/></li>
    <li><text-loader size="s"/></li>
    <li><text-loader size="s"/></li>
  </ul>
</template>

<script>
import TextLoader from "@/components/loaders/helpers/text-loader";
export default {
  name: "list-loader",
  components: {TextLoader},
  props: {

  }
}
</script>

<style scoped lang="scss">
</style>
