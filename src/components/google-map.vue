<template>
  <div class="map" id="map">
    <iframe
        frameborder="0" style="border:0"
        :src="mapsSrc"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "google-map",
  props: {
    apiKey: {
      type: String,
      required: true
    },
    placeID: {
      type: String,
      required: true
    },
    zoom: {
      type: Number,
      required: false,
      default: 13
    }
  },
  setup(props) {
    const baseURL = "https://www.google.com/maps/embed/v1/place";
    const apiKeyParam = `key=${props.apiKey}`;
    const placeParam = `q=place_id:${props.placeID}`;
    const zoomParam = `zoom=${props.zoom}`;

    const mapsSrc = `${baseURL}?${apiKeyParam}&${placeParam}&${zoomParam}`
    return {mapsSrc}
  }
}
</script>

<style scoped lang="scss">
.map {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
  border-radius: 4px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .hide-map-details {
    .place-card {
      display: none;
    }
  }
}
</style>
