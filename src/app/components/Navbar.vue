<template>
  <header>
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
  padding: 0.5rem 4rem 0.5rem 4rem;
}
a {
  text-decoration: none;
}

.brand {
  margin: 0;
  font-size: 2.7rem;
  font-family: $fontBrand;
  color: white;
}
nav {
  flex: 3 0 0;
}

ul {
  display: flex;
  list-style: none;
  justify-content: flex-end;
}
.link {
  padding: 0 0.7rem;
  color: white;
  font-size: 1.15rem;
  font-weight: $fontThin;
  transition: .222s ease-in-out;
}
.link:hover {
  color: $lightgreen;
}

</style>
