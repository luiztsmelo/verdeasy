<template>
  <header>
    <img class="logo" src="./../../assets/verdeasyW.png" alt="verdeasy logo">
    <a href="/"><h1 class="brand">VERDEASY</h1></a>
    <nav>
      <ul>
        <li><router-link class="link" to="#">SOBRE</router-link></li>
        <li><router-link class="link" to="#">BLOG</router-link></li>
        <button>Login</button>
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
  flex: 0 1 20%;
  flex-wrap: wrap;
  background: rgba(60, 60, 60, 0.95);
  padding: 0.9rem 4rem 0.3rem 4rem;
}
  .logo {
    width: 3.5rem;
    height: auto;
    margin: 0 0.5rem; 
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-family: $fontBrand;
    color: white;
    margin: 0;
    
  }
  nav {
    flex: 0 1 80%;
  }
    ul {
      display: flex;
      list-style: none;
      justify-content: flex-start;
      align-items: center;
    }
    .link {
      padding: 0 1rem;
      font-family: $fontHeading;
      font-size: 1.2rem;
      color: white;
    }
    .link:hover {
      color: lightgreen;
    }

</style>
