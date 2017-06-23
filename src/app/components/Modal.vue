<template>
  <transition name="modal-animation">
    <div id="modal" @click="showModal = !showModal">
      <div class="modal-body" @click.stop>
        <h1>MODAL</h1>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

#modal {
  background: rgba(0, 0, 0, 0.7);
  width:  100%;
  height: 100%;
  position: fixed;
  top:  0;
  left: 0;
  z-index: 9998;
  color: black;
  .modal-body {
    position: absolute;
    background: white;
    top:  50%;
    left: 50%;
    padding: 2em;
    transform: translateX(-50%) translateY(-50%);
  }
}

// TRANSITIONS
.modal-animation-enter {
  opacity: 0;
}

.modal-animation-enter-active {
  transition: all 0.3s;
}

.modal-animation-leave-active {
  transition: all 0.4s;
  opacity: 0;
  transform: scale(1.1);
}
</style>
