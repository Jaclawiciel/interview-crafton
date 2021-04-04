<template>
  <div class="blocks">
    <template v-for="(block, index) in blocks" :key="index">
      <div class="block">
        <div class="text-col">
          <h2 class="Title">{{ block.text.title }}</h2>
          <div class="paragraphs" v-html="block.text.paragraph"></div>
        </div>
        <div class="media-col">
          <img v-if="block.media.type === 'image'" class="image" :src="block.media.url" alt="Promotional graphics">
          <template v-else-if="block.media.type === 'video'">
            <img @click="showVideos[index] = true"
                 class="image"
                 :src="block.media.url"
                 alt="Promotional video"
            >
            <transition name="modal" mode="out-in">
              <modal v-if="showVideos[index]" @close="showVideos[index] = false">
                <template v-slot:header/>
                <template v-slot:body>
                  <you-tube-video :embed-link="block.media.youTubeEmbedLink" />
                </template>
                <template v-slot:footer/>
              </modal>
            </transition>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import YouTubeVideo from "@/components/YouTubeVideo";
import {ref} from "@vue/reactivity";

export default {
  name: "MainContent",
  components: {YouTubeVideo, Modal},
  data() {
    return {
      showVideo: true
    }
  },
  props: {
    blocks: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const showVideos = ref(props.blocks.map(() => {return false}))

    return {showVideos}
  }
}
</script>

<style scoped lang="scss">
.blocks {
  display: flex;
  flex-direction: column;

  .block {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 30px auto;

    .text-col {
      line-height: 1.8;
    }

    .media-col {
      .image {
        max-width: 100%;
        box-shadow: 0 12px 15px -5px rgba(0, 0, 0, .35);
      }
    }
  }
}
</style>
