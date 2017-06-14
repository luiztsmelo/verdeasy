<template>
  <footer>
    <p>&copy <span>Verdeasy 2017</span>. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

footer {
  display: flex;
  justify-content: center;
  background: $green;
  color: $offwhite;
  position: absolute; 
  left: 0 ; right: 0; bottom: 0; 
  height: 3rem;

  p {
    font-family: $fontMain;
    font-size: 1.1rem;
  }

  span {
    font-weight: $fontThin;
  }
}
</style>
