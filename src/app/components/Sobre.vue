<template>
  <transition name="component-fade" mode="out-in">
    <div id="about">
      <h1>Sobre</h1>
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

#about {
  color: white;
}
</style>
