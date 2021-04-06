<template>
  <div class="carousel">
    <div class="carousel-items">
      <transition name="fade" :duration="1000">
        <carousel-item :key="activeItemIndex" :item="items[activeItemIndex]" />
      </transition>
<!--      <carousel-item :item="items[0]"/>-->
<!--      <carousel-item :item="items[1]"/>-->
    </div>

    <div class="carousel-nav">
      <div class="control-dot"
           v-for="(item, index) in items"
           :key="index"
           :class="{'active': index === activeItemIndex}"
           @click="activeItemIndex = index"
      >
        <div class="dot" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem";
import {ref} from "@vue/reactivity";
export default {
  name: "carousel",
  components: {CarouselItem},
  props: {
    items: {
      type: Array,
      required:true
    },
  },
  setup() {
    const activeItemIndex = ref(0)

    return {activeItemIndex}
  }
}
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  box-shadow: 0 0 inset $black-overlay;
  background-color: $carousel-overlay;

  .carousel-items {
    height: 100vh;
    width: 100vw;
    //display: flex;
    //flex-wrap: nowrap;
    position: absolute;
    top: 0;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    z-index: 2;

    .control-dot {
      margin: 15px 0;
      padding: 6px;
      cursor: pointer;

      .dot {
        opacity: 1;
        transition: all .25s;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #FFF;
      }

      &:hover {
        .dot {
          opacity: .75;
        }

      }

      &.active {
        .dot {
          background-color: $carousel-active-nav;
        }
      }
    }
  }
}

@include media(">=tablet") {
  .carousel {
    .carousel-nav {
      right: 50px;
    }
  }
}

@include media(">=desktop") {
  .carousel {
    .carousel-nav {
      right: 100px;
    }
  }
}
</style>
