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
import { quillEditor } from 'vue-quill-editor';

export default {
  components: {
    'app-footer': Footer,
    'app-quill-editor': quillEditor,
  },
  data() {
    return {
  
    }
  }
}
</script>

<style lang="scss">
@import "./scss/style.scss";

body {
  background-image: url('../assets/bgimg/bgimg1.jpg');
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
        transition: .3s ease;
        border-radius: 2rem 0;
      &:hover {
        color: rgba(0, 0, 0, 0.8);
        background: white;
        border-radius: 0;
        }
      }
      button {
      display: flex;
      justify-content: flex-end;
      background-color: rgb(110, 200, 80);;
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
