<template>
  <transition name="component-fade" mode="out-in">
    <div id="app">

      <!--NAVBAR-->
      <header class="navbar">
        <router-link to="/"><img class="brand-img" src="./../../static/utils/verdeasyb.svg" alt="verdeasy"></router-link>
        <router-link to="/"><h1 class="brand">verdeasy</h1></router-link>
        <nav>
          <ul>
            <li><router-link class="link" to="/sobre">Sobre</router-link></li>
            <li><router-link class="link" to="/blog">Blog</router-link></li>
            <li><router-link class="link" to="/contato">Contato</router-link></li>
          </ul>
        </nav>
      </header> <!--NAVBAR-->
      
      <router-view></router-view>
      
      <app-footer></app-footer>

    </div>
  </transition>   
</template>

<script>
import Footer from './components/Footer';

export default {
  components: {
    'app-footer': Footer,
  },

  // VUE-META
  metaInfo: {
    title: 'Verdeasy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      
      // GOOGLE
      { name: 'description', content: 'Catálogo moderno e amigável de plantas, feito especialmente para pessoas leigas na arte do cultivo, e que não possuem uma grande área para plantar, como apartamentos.' },
      { name: 'google-site-verification', content: '2iVdMP9nUvh_ac45O4wSphuN20wbNCL6n8waEO4N7yc' },
      { name: 'google', content: 'notranslate' },
      
      // MOBILE THEMES
      // Chrome, Firefox OS and Opera / rgb(29, 29, 22)
      { name: 'theme-color', content: '#1d1d16' },
      // Windows Phone
      { name: 'msapplication-navbutton-color', content: '#1d1d16' },
      // iOS Safari
      { name: 'apple-mobile-web-app-status-bar-style', content: '#1d1d16' },
    ],
    link: [
 
      { rel: 'icon', type: 'image/png', sizes: '24x24', href: './../../static/utils/verdeasy24.png' },
    ],
    script: [

    ],
  },
}
</script>

<style lang="scss">
@import "./scss/style.scss";

.component-fade-enter-active,  {
  transition: $comptransition;
}
.component-fade-enter, .component-fade-leave-to, .component-fade-leave-active {
  opacity: 0;
}

body {
  background: url('../assets/bgimg/bgimg1.jpg');
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
.navbar {
  cursor: default;
  user-select: none;
  display: flex;
  padding: 0.5rem 3rem 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  flex-wrap: wrap;
  background: linear-gradient(rgba(black, .65), rgba(black, .0));
  .brand-img {
    width: 2.5rem;
    filter: invert(100%);
  }
  .brand {
    margin: 0;
    font-size: 2.5rem;
    font-family: $fontHeading;
    color: $offwhite;
    
  }
  nav {
    flex: 3 0 0;
    ul {
      display: flex;
      margin: 0;
      justify-content: flex-end;
      .link {
        padding: 0 0.7rem;
        color: $offwhite;
        font-size: 1.15rem;
        font-weight: 300;
        transition: .3s ease;

        &:hover {
          color: rgba(0, 0, 0, 0.8);
          background: $offwhite;
          border-radius: 0;
        }
      }
    }
  }
}

//MOBILE 
@media screen and (max-width: 425px){
  body {
    background-attachment: scroll;
  }
  #navbar {
    padding: 1rem;
    display: block;
    background: rgb(37, 37, 30);

    .brand {
      font-size: 2rem;
      line-height: .7;
    }
  }
  nav {
    display: none;
  }
}
</style>
