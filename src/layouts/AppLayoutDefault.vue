<template>
  <div class="default-layout">
    <div class="top-layout-container">
      <nav class="menu">Menu</nav>
      <main class="content">CONTENT</main>
    </div>
    <c-footer/>
  </div>
</template>

<script>
import CFooter from "@/components/c-footer";
export default {
  name: 'AppLayoutDefault',
  components: {CFooter},
}
</script>

<style scoped lang="scss">
</style>
