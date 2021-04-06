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

            <div class="box" v-if="block.media.type === 'image'">
              <img class="image" :class="block.media.type" :src="block.media.url"
                   alt="Promotional graphics">
              <div v-show="block.media.showRibbon" class="ribbon ribbon-top-left"><span>Nowość</span></div>
            </div>

            <template v-else-if="block.media.type === 'video'">
              <div class="box" :class="block.media.type">
                <img @click="showVideos[index] = true"
                     class="image"
                     :src="block.media.url"
                     alt="Promotional video"
                >
                <div v-show="block.media.showRibbon" class="ribbon ribbon-top-left"><span>Nowość</span></div>
              </div>
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
      .video:hover {
        box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        cursor: pointer;
        transition: all .25s;
      }
      .image {
        width: 100%;
        box-shadow: 0 12px 15px -5px rgba(0, 0, 0, .35);
        position: relative;
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
      margin: 10vh auto;
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

@import url(https://fonts.googleapis.com/css?family=Lato:700);
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f0f0;
}

.box {
  position: relative;
}

/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}

.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  //border: 5px solid #2980b9;
}

.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background: linear-gradient(to right, #006F85, #01A6C9 60%);
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  text-align: center;
  font-size: 1.375rem;
  font-weight: 900;
}

/* top left*/
.ribbon-top-left {
  top: 0;
  left: 0;
}

.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}

.ribbon-top-left::before {
  top: 0;
  right: 0;
}

.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}

.ribbon-top-left span {
  right: -15px;
  top: 25px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}

.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}

.ribbon-top-right::before {
  top: 0;
  left: 0;
}

.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}

.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}

.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}

.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}

.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}

.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}

.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}

.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}

.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
}
</style>
