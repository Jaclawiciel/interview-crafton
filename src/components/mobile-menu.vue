<template>
  <nav class="mobile-menu" :class="{'open': isOpen}">
    <ul>
      <li>Strona 1</li>
      <li>Strona 1</li>
      <li>Strona 1</li>
      <li>Strona 1</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mobile-menu",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-menu {
  color: $font-dark;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transform: translateX(100%);
  transition: transform .25s .25s;
  &.open {
    transform: translateX(0);
  }

  ul {
    width: 90%;
    background: white;
    padding: 20px;
  }
}
</style>
