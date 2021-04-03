<template>
  <button class="hamburger"
          :class="{isOpen: isMenuOpen}"
          @click="setMenu(!isMenuOpen)"
  ></button>
</template>

<script>
export default {
  name: "hamburger",
  props: {
    isMenuOpen: Boolean // previously was `value: String`
  },
  emits: ['update:isMenuOpen'],
  methods: {
    setMenu(isMenuOpen) {
      this.$emit('update:isMenuOpen', isMenuOpen) // previously was `this.$emit('input', title)`
    }
  }
}
</script>

<style scoped lang="scss">
.hamburger {
  background: transparent;
  position: relative;
  display: flex;
  height: 60px;
  width: 60px;
  border: 0;
  cursor: pointer;
  pointer-events: all;
  outline: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 20px;
    left: 10px;
    background: white;
    width: 40px;
    height: 4px;
    transition: transform 300ms ease-out;
  }

  &:after {
    top: auto;
    bottom: 20px;
  }

  &.isOpen {
    &:before {
      transform: translateY(8px) rotate(135deg);
    }

    &:after {
      transform: translateY(-8px) rotate(45deg);
    }
  }
}

@include media('>=tablet') {
  .hamburger {
    display: none;
  }
}
</style>
