<template>
  <div class="container">
    <iframe :src="embedLink"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: "YouTubeVideo",
  props: {
    embedLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
