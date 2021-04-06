<template>
  <div class="blocks">
    <template v-for="(block, index) in blocks" :key="index">
      <div class="block-wrapper">
        <div class="block">
          <div class="text-col col">
            <h2 class="title">{{ block.text.title }}</h2>
            <div class="paragraphs" v-html="block.text.paragraph"></div>
          </div>
          <div class="media-col col">
            <img v-if="block.media.type === 'image'" class="image" :class="block.media.type" :src="block.media.url"
                 alt="Promotional graphics">
            <template v-else-if="block.media.type === 'video'">
              <img @click="showVideos[index] = true"
                   class="image"
                   :class="block.media.type"
                   :src="block.media.url"
                   alt="Promotional video"
              >
              <transition name="modal" mode="out-in">
                <modal v-if="showVideos[index]" @close="showVideos[index] = false">
                  <template v-slot:header/>
                  <template v-slot:body>
                    <you-tube-video :embed-link="block.media.youTubeEmbedLink"/>
                  </template>
                  <template v-slot:footer/>
                </modal>
              </transition>
            </template>
          </div>
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
    const showVideos = ref(props.blocks.map(() => {
      return false
    }))

    return {showVideos}
  }
}
</script>

<style scoped lang="scss">
.blocks {
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: $mobile-content-width;

  .block {
    display: flex;
    flex-direction: column;
    margin: 30px auto;

    .text-col {
      line-height: 1.8;
    }

    .media-col {
      .image {
        width: 100%;
        box-shadow: 0 12px 15px -5px rgba(0, 0, 0, .35);

        &.video:hover {
          box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
          cursor: pointer;
          transition: all .25s;
        }
      }
    }
  }
}

@include media(">=tablet") {
  .blocks {
    margin: 40px auto;
    .block-wrapper {
      margin: 20px auto;
    }
  }
}

@include media(">=desktop") {
  .blocks {
    margin: 0 auto;
    width: $desktop-content-width;

    .block-wrapper {
      display: flex;
      align-items: center;
      margin: 5vh auto;
      min-height: 80vh;
      max-width: 1200px;

      &:nth-child(2n) {
        .block {
          flex-direction: row-reverse;
        }
      }

      &:nth-child(2n -1) {
        .text-col {
          margin-right: 60px;
        }
      }
      &:nth-child(2n) {
        .media-col {
          margin-right: 100px;
        }
      }
    }

    .block {
      flex-direction: row;
      justify-content: center;
      //margin: 50px auto;

      .col {
        //max-width: 50%;
        margin: 0;


        &.text-col {
          width: 50%;
          max-width: 650px;
        }

        &.media-col {
          width: 50%;
          max-width: 490px;
          max-height: 513px;
        }
      }
    }
  }
}

@include media(">=desktopHD") {
  .blocks {
    max-width: $desktopHD-content-max-width;
    width: $desktopHD-content-width;
  }
}
</style>
