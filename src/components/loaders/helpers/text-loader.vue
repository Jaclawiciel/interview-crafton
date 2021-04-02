<template>
  <span class="text-loader loader-element animate" :class="size"></span>
</template>

<script>
export default {
  name: "text-loader",
  props: {
    size: {
      type: String,
      default: "l"
    }
  }
}
</script>

<style scoped lang="scss">
.text-loader {
  display: inline-block;
  height: 1rem;
  width: 100%;
  border-radius: 4px;

  &.xl {
    width: 100%;
  }

  &.l {
    width: 70%;
  }

  &.m {
    width: 40%;
  }

  &.s {
    width: 20%;
  }
}
</style>
