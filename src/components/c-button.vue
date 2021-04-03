<template>
  <button class="c-button" :class="styleType">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "c-button",
  props: {
    styleType: {
      type: String,
      required: false,
      default: "fill"
    }
  }
}
</script>

<style scoped lang="scss">
.c-button {
  border: none;
  border-radius: 20px;
  padding: 10px;
  text-align: center;

  &.fill {
    background: $button-fill;
    color: $button-fill-text;
  }

  &.outline {
    background: transparent;
    color: $button-outline-text;
    border: 1px solid $button-outline
  }
}
</style>
