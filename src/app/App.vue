<template>
  <div id="app">

    <!--NAVBAR-->
    <header>
      <a href="/"><h1 class="brand">verdeasy</h1></a>
      <nav>
        <ul>
          <li><router-link class="link" to="/sobre">Sobre</router-link></li>
          <li><router-link class="link" to="/blog">Blog</router-link></li>
          <li><router-link class="link" to="#">Contato</router-link></li>
          <router-link to="/"><button class="login">Entrar</button></router-link>
        </ul>
      </nav>
    </header> <!--NAVBAR-->
    
    <app-plantmodal v-show="showModal"></app-plantmodal>
    
    <router-view></router-view>
    
    <app-footer></app-footer>

  </div>
</template>

<script>
import Footer from './components/Footer';
import PlantModal from './components/PlantModal';

export default {
  name: 'app',
  components: {
    'app-footer': Footer,
    'app-plantmodal': PlantModal,
  },
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style lang="scss">
@import "./scss/style.scss";

body {
  background-image: url('./../../static/bgimg6.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
} 

// NAVBAR
header {
  display: flex;
  padding: 0.5rem 4rem 0.5rem 4rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.2);
  .brand {
    margin: 0;
    font-size: 2.7rem;
    font-family: $fontBrand;
    color: white;
  }
  nav {
    flex: 3 0 0;
    ul {
      display: flex;
      margin: 0;
      justify-content: flex-end;
      padding: 1rem 0;
      .link {
        padding: 0 0.7rem;
        color: white;
        font-size: 1.15rem;
        font-weight: $fontThin;
        transition: .222s ease;
      &:hover {
        color: $lightgreen;
        }
      }
      button {
      display: flex;
      justify-content: flex-end;
      background-color: $green;
      border: none;
      font-weight: $fontThin;
      font-size: 1.25rem;
      color: white;
      text-align: center;
      cursor: pointer;
      transition: .222s ease;
      &:hover {
        background-color: rgb(141, 220, 92);
        }
      }
    }
  }
}








</style>
