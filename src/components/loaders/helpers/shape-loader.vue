<template>
  <div class="shape-loader loader-element animate" :class="shape"></div>
</template>

<script>
export default {
  name: "shape-loader",
  props: {
    shape: {
      type: String,
      default: "square"
    }
  }
}
</script>

<style scoped lang="scss">
.shape-loader {
  width: 100%;
  height: 100%;

  &.square {
    border-radius: 4px;
  }

  &.circle {
    border-radius: 50%;
  }
}
</style>
