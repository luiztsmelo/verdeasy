<template>
  <div id="minhahorta">
    <h1 class="minhahorta-title">Minha Horta</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#minhahorta {
  display: flex;
  color: white;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  .minhahorta-title {
    font-family: $fontHeading;
    line-height: .3;
    text-transform: uppercase;
  }
}

</style>
