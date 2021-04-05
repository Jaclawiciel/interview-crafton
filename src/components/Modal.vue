<template>
  <transition name="modal" mode="out-in">
    <div class="modal-mask">
      <div class="modal-wrapper">

        <button class="modal-close-button" @click="$emit('close')">
          x
        </button>

        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body"/>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $black-overlay;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-container {
  width: 100%;
  margin: 0 auto;
  background: #FFF;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 12px 15px -5px rgba(0, 0, 0, .35);
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-close-button {
  align-self: flex-end;
  text-align: center;
  width: 30px;
  height: 30px;
  margin-bottom: 30px;
  border: none;
  background: transparent;
  font-size: 30px;
  font-weight: 300;
  color: #FFF;
  cursor: pointer;
  transition: transform .25s;

  &:hover {
    transform: scale(1.1);
  }
}

.modal-body {

}


</style>
