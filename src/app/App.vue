<template>
  <div id="app">

    <!--NAVBAR-->
    <header>
      <router-link to="/"><h1 class="brand">verdeasy</h1></router-link>
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
    
    <router-view><app-quill-editor></app-quill-editor></router-view>
    
    <app-footer></app-footer>

  </div>
</template>

<script>
import Footer from './components/Footer';
import PlantModal from './components/PlantModal';
import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'app',
  components: {
    'app-footer': Footer,
    'app-plantmodal': PlantModal,
    'app-quill-editor': quillEditor,
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
  background-image: url('./../../static/bgimg/bgimg12b.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
} 

#app {
  flex: 1 0 auto;
  min-height: 100%;
}

// NAVBAR
header {
  display: flex;
  padding: 0.5rem 3.5rem 0.5rem 3.5rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  flex-wrap: wrap;
  background: $bgopacity;
  .brand {
    margin: 0;
    font-size: 2.5rem;
    font-family: $fontHeading;
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
        color: rgb(141, 222, 92);
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
