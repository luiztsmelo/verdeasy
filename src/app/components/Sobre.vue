<template>
  <transition name="component-fade" mode="out-in">
    <div id="sobre">
      <h1 class="sobre-title">Sobre</h1>
    </div>
  </transition>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

.component-fade-enter-active,  {
  transition: $comptransition;
}
.component-fade-enter, .component-fade-leave-to, .component-fade-leave-active {
  opacity: 0;
}

#sobre {
  display: flex;
  color: $offwhite;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  .sobre-title {
    font-family: $fontHeading;
    line-height: .3;
    text-transform: uppercase;
  }
}
</style>
