<template>
  <div class="blocks">
    <template v-for="(block, index) in blocks" :key="index">
      <div class="block">
        <div class="text-col">
          <h2 class="Title">{{block.text.title}}</h2>
          <div class="paragraphs" v-html="block.text.paragraph"></div>
        </div>
        <div class="media-col">
<!--          <h1>{{block.media.url}}</h1>-->
<!--          <img src="https://placeimg.com/640/480/people" alt="Promotional graphics">-->
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    blocks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
