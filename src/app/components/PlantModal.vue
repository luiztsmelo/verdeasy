<template>
  <div class="plantmodal">
    <input id="toggler" class="modal-toggler" type="checkbox" checked aria-hidden="true">
    <section class="modal-container">
      <label for="toggler" class="modal  close-modal-area"></label>
      <div class="modal  modal-box">
        <h1>Modal Container without JS</h1>
        <label for="toggler" class="toggle-modal-button">Close Me</label>
      </div>
    </section>
    <section class="content">
      <label for="toggler" class="toggle-modal-button">Show It Again</label>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

*, *:before, *:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  background-color: mistyrose;
  position: relative;
  font-weight: bold;
}

h1 {
  line-height: 1;
}

p {
  margin: 0;
  line-height: 2;
}

.modal-toggler {
  display: none;
}

.modal-container {
  background: rgba(black, 0.75);
  opacity: 0;
  color: white;
  width:  100%;
  height: 100%;
  position: fixed;
  top:  0;
  left: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0s linear 0.5s;
  z-index: 2;
  
  .modal-toggler:checked + & {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s;
  }
}

.modal {
  position: absolute;
  top:  50%;
  left: 50%;
  padding: 2em;
  border-radius: 0.5em;
  transform: translateX(-50%) translateY(-50%);
  
  &.close-modal-area {
    width:  100%;
    height: 100%;
  }
  
  &.modal-box {
    background: indianred;
    text-align: center;
  }
  
  .content & {
    width: 100%;
    max-width: 40em;
  }
}

.toggle-modal-button {
  background-color: transparent;
  color: white;
  display: inline-block;
  padding: 1em;
  cursor: pointer;
  border-radius: 0.5em;
  box-shadow: inset 0 0 1px black;
  transition: background-color 0.2s, color 0.2s, transform 0.1s linear;
  
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(black, 0.25);
    box-shadow: none;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s linear;
  }
  
  &:active {
    transform: scale(1.2);
  }
  
  .content & {
    color: rgba(black, 0.75);
    margin-bottom: 1em;
  }
}

.content {
  color: peru;
  width: 90%;
  max-width: 600px;
  padding-top: 2em;
  margin: 0 auto;
}
</style>
