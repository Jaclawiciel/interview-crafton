<template>
  <header class="header" :class="{'not-on-top-or-open': !isOnTop || isMenuOpen}">
    <div class="main-content">
      <img class="logo" src="../assets/img/logo.png" alt="Logo">
      <hamburger v-model:isMenuOpen="isMenuOpen" />
    </div>
    <mobile-menu :is-open="isMenuOpen" />
  </header>

</template>

<script>
import Hamburger from "@/components/hamburger";
import MobileMenu from "@/components/mobile-menu";
import {handleScrollMixin} from "@/mixins/handleScrollMixin";

export default {
  name: "page-header",
  components: {MobileMenu, Hamburger},
  mixins: [handleScrollMixin],
  data() {
    return {
      isOnTop: true,
      isMenuOpen: false,
    }
  },
  // loadingComponent: LoadingComponent,
  // errorComponent: ErrorComponent,
  // delay: 200, // default: 200
  // timeout: 3000, // default: Infinity
  // suspensible: false, // default: true
  // onError(error, retry, fail, attempts) {
  //   if (error.message.match(/fetch/) && attempts <= 3) {
  //     retry();
  //   } else {
  //     fail();
  //   }
  // }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  transition: all .25s;
  z-index: 1000;

  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo {
      transition: width .25s;
      width: 100px;
    }
  }

  &.not-on-top-or-open {
    .main-content {
      background-color: rgba(0, 0, 0, .5);
      box-shadow: 0 0 12px rgba(0,0,0, 1);;
      padding: 10px;

      @supports (backdrop-filter: blur(6px)) {
        backdrop-filter: blur(6px);
      }

      @supports not (backdrop-filter: blur(6px)) {
        background-color: rgba(0, 0, 0, .75);
      }
    }

    .logo {
      width: 40px;
    }
  }






}

</style>
