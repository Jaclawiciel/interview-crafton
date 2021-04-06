<template>
  <button type="button" class="c-button" :class="styleType" :disabled="disabled">
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
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.c-button {
  border: none;
  border-radius: 50px;
  padding: 20px 33px;
  text-align: center;
  transition: opacity .25s;
  cursor: pointer;
  font-size: .875rem;
  text-transform: uppercase;

  &.fill {
    background: $button-fill;
    color: $button-fill-text;
  }

  &.outline {
    background: transparent;
    color: $button-outline-text;
    border: 1px solid $button-outline
  }

  &:hover {
    opacity: .8;
  }
}
</style>
