<template>
  <div id="app">
    <app-navbar></app-navbar>
      <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  components: {
    'app-navbar': Navbar,

  },
  name: 'app',
};
</script>

<style lang="scss">
@import "./../scss/style.scss";

body {
  background-image: url('http://res.cloudinary.com/db79cecgq/image/upload/c_crop,h_845,w_1497,x_0,y_32/c_fill/v1431574992/incre%C3%ADbles-construcciones-verde-ciudad-1500-4.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

</style>
