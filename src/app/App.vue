<template>
  <div id="app">

    <modal v-show="showModal">
      <app-plantmodal></app-plantmodal>
    </modal>

    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-hero></app-hero>
    <app-plants></app-plants>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plants from './components/Plants';
import Footer from './components/Footer';
import PlantModal from './components/PlantModal';

export default {
  name: 'app',
  components: {
    'app-navbar': Navbar,
    'app-hero': Hero,
    'app-plants': Plants,
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
  background-image: url('./../../static/bgimg2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
} 
</style>
