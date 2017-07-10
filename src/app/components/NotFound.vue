<template>
  <div id="notfound">
    <h1>Página não encontrada :(</h1>
    <button><router-link to="/" class="voltar">Voltar</router-link></button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

#notfound {
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    color: white;
  }
  button {
    cursor: pointer;
    width: 7rem;
    border-radius: 2rem;
    border: none;
    background: $green;
    margin: .7rem 0;
    transition: .3s ease;
    .voltar {
      color: white;
    }
    &:hover {
      background-color: rgb(141, 220, 92);
    }
  }
}

</style>
