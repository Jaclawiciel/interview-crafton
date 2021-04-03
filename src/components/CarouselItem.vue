<template>
<div class="carousel-item">
  <div class="overlay"></div>
  <div class="content">
    <div class="title" v-html="item.title" />
    <div class="buttons">
      <c-button v-for="(button, index) in item.buttons" :key="index" :style-type="button.type">
        {{button.text}}
      </c-button>
    </div>
  </div>
  <div class="image" :style="{'background-image': `url(${item.background})`}" />
</div>
</template>

<script>
import CButton from "@/components/c-button";
export default {
  name: "CarouselItem",
  components: {CButton},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.carousel-item {
  height: 100%;
  width: 100%;
  position: absolute;

  .image {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .overlay {
    position: absolute;
    background: $carousel-overlay;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .content {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 30px;
    z-index: 2;

    .buttons {
      margin-bottom: 20vh;

      .c-button {
        &:not(:last-child) {
          margin-right: 12px;
          margin-bottom: 12px;
        }
      }
    }
  }
}

@include media(">=phoneS") {
  .carousel-item {
    .content {
      .buttons {
        margin-top: 20px;
        margin-bottom: 15vh;
      }
    }
  }
}

@include media(">=tablet") {
  .carousel-item {
    .content {
      margin: 0 50px;
      max-width: 500px;

      .buttons {
        margin-bottom: 30vh;
      }
    }
  }
}

@include media(">=desktop") {
  .carousel-item {
    .content {
      margin-left: 100px;
      max-width: 500px;

      .buttons {
        margin-bottom: 30vh;
      }
    }
  }
}
</style>
