<template>
  <header>
    <img class="logo" src="./../../assets/verdeasyG.png" alt="verdeasy logo">
    <a href="/"><h1 class="brand">verdeasy</h1></a>
    <nav>
      <ul>
        <li><router-link class="link" to="#">Sobre</router-link></li>
        <li><router-link class="link" to="#">Blog</router-link></li>
        <li><router-link class="link" to="#">Contato</router-link></li>
      </ul>
    </nav>
  </header>  
</template>

<script>
export default {
  
};

</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 0 0;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.9rem 3rem 0.3rem 3rem;
}
  .logo {
    width: 4rem;
    height: auto;
  }
  a {
    text-decoration: none;
  }
  .brand {
    color: $white;
    margin: 0;
    font-size: 3rem;
    font-family: $fontBrand;
  }
  nav {
    flex: 3 0 0;
  }
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      list-style: none;
      justify-content: flex-end;
      align-items: center;
    }
    .link {
      padding: 0 0.7rem;
      color: $white;
      font-size: 1.15rem;
      transition: .5s ease;
    }
    .link:hover {
      color: $lightgreen;
    }

@media screen and (max-width: 768px){
  
}

</style>
