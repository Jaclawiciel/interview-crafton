<template>
  <footer class="main-footer">
    <p class="error" v-if="error">{{error}}</p>
    <div v-else class="content">
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
import {computed, ref} from "@vue/reactivity";
import GoogleMap from "@/components/google-map";

export default {
  name: "page-footer",
  components: {GoogleMap},
  async setup() {
    const error = ref(null)
    const address = ref(null)
    const copyright = ref(null)
    const columns = ref(null)
    const mapDetails = ref(null)
    const store = useStore()

    try {
      await store.dispatch("footer/getContent")
      const content = computed(() => store.state['footer'].content)
      address.value = content.value.address;
      copyright.value = content.value.copyright;
      columns.value = content.value.columns;
      mapDetails.value = content.value.map;
    } catch (e) {
      error.value = e;
    }


    return {address, copyright, columns, mapDetails, error}
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/components/footer.scss";
</style>
