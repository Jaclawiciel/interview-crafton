<template>
  <footer class="main-footer loader">
    <div class="content">
      <div class="section company-details">
        <p class="address">
          <text-loader size="l"/>
          <text-loader size="l"/>
          <text-loader size="m"/>
        </p>
        <div class="map loader">
          <shape-loader shape="square"/>
        </div>
      </div>

      <div class="section sitemap">
        <div class="section-col" v-for="n in 5" :key="n">
          <list-loader />
        </div>
      </div>
    </div>
    <div class="copyright"><text-loader size="m"/></div>
  </footer>
</template>

<script>
import TextLoader from "@/components/loaders/helpers/text-loader";
import ShapeLoader from "@/components/loaders/helpers/shape-loader";
import ListLoader from "@/components/loaders/helpers/list-loader";
export default {
  name: "FooterLoader",
  components: {ListLoader, ShapeLoader, TextLoader}
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/components/footer.scss";
</style>
