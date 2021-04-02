<template>
  <footer class="main-footer">
    <div class="content">
      <div class="section company-details">
        <p class="address" v-html="address"/>
        <google-map
            :api-key="mapDetails.apiKey"
            :place-i-d="mapDetails.placeID"
            :zoom="mapDetails.zoom"
        />
      </div>

      <div class="section sitemap">
        <div class="section-col" v-for="column in columns" :key="column.title">
          <ul>
            <li class="title">{{ column.title }}</li>
            <li v-for="link in column.links" :key="link.label">
              <router-link :to="link.url">{{link.label}}</router-link>
            </li>
          </ul>
        </div>
        <div class="copyright">{{ copyright }}</div>
      </div>

    </div>

  </footer>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";
import GoogleMap from "@/components/google-map";

export default {
  name: "page-footer",
  components: {GoogleMap},
  async setup() {
    const store = useStore()
    await store.dispatch("footer/getContent")
    const content = computed(() => store.state['footer'].content)
    console.log(content)
    const address = content.value.address;
    const copyright = content.value.copyright;
    const columns = content.value.columns;
    const mapDetails = content.value.map;

    return {address, copyright, columns, mapDetails}
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/components/footer.scss";
</style>
