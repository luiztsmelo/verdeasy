<template>
  <header>
    <a href="/"><img class="logo" src="./../../../static/verdeasyG.png" alt="verdeasy logo"></a>
    <a href="/"><h1 class="brand">verdeasy</h1></a>
    <nav>
      <ul>
        <li><router-link class="link" to="/sobre">Sobre</router-link></li>
        <li><router-link class="link" to="/blog">Blog</router-link></li>
        <li><router-link class="link" to="#">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 3rem 0.5rem 3rem;
}
.logo {
  width: 4rem;
  height: auto;
  margin-left: 2rem;
}

a {
  text-decoration: none;
}

.brand {
  margin: 0;
  font-size: 2.8rem;
  font-family: $fontBrand;
}

nav {
  flex: 3 0 0;
}

ul {
  padding: 0;
  margin: 0 1.2rem 0 0;
  display: flex;
  list-style: none;
  justify-content: flex-end;
}
.link {
  padding: 0 0.7rem;
  color: $white;
  font-size: 1.15rem;
  font-weight: $fontThin;
  transition: .3s ease-in-out;
}

.link:hover {
  color: $lightgreen;
}
</style>
