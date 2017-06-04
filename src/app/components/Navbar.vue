<template>
  <header>
    <img class="logo" src="./../../assets/verdeasyW.png" alt="verdeasy logo">
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
  flex: 0 1 25%;
  flex-wrap: wrap;
  background: rgba(80, 80, 80, 0.9);
  padding: 0.9rem 3rem 0.3rem 3rem;
}
  .logo {
    width: 3.4rem;
    height: auto;
    margin-right: 0.2cm;
  }
  a {
    text-decoration: none;
  }
  .brand {
    color: $white;
    margin: 0;
    font-size: 2.4rem;
    font-family: $fontBrand;
  }
  nav {
    flex: 0 1 75%;
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
      font-size: 1.1rem;
      font-family: $fontHeading;
    }
    .link:hover {
      color: $lightgreen;
    }

@media screen and (max-width: 768px){
  
}

</style>
