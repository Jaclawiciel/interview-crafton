<template>
  <nav class="mobile-menu" :class="{'open': isOpen}">
    <nav>
      <router-link class="menu-item" v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">{{menuItem.label}}</router-link>
    </nav>
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
    },
    menuItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-menu {
  position: fixed;
  top: 85px;
  color: $font-dark;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transform: translateX(100%);
  transition: transform .25s .10s;
  &.open {
    transform: translateX(0);
  }

  nav {
    width: 90%;
    background: white;
    padding: 20px;

    .menu-item {
      display: block;
      color: $font-dark;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
}

@include media('>=tablet') {
  .mobile-menu {
    display: none;
  }
}
</style>
