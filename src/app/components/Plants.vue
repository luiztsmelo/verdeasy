<template>
  <div class="container">

    <h2>ERVAS AROMÁTICAS</h2>

    <div class="row">

      <div class="card" v-for="plant in plants">
        <div class="img">
          <img :src="plant.img" :alt="plant.name" class="image">
        </div>
        <div class="plantName">
          <h3>{{ plant.name }}</h3>
        </div>
        <div class="overlay">
          <h5>Sol: {{ plant.sun }}</h5>
          <h5>Rega: {{ plant.water }}</h5>
          <h5>Cuidados: {{ plant.care }}</h5>
        </div>
      </div>


    <h2>ERVAS AROMÁTICAS</h2>


    </div>
  </div>
</template>

<script>
import { plantsData } from './plantsData';
export default {
  mixins: [plantsData],
  computed: {

  }
};
</script>

<style lang="scss">
@import "./../../scss/style.scss";
@import "./../../scss/mixins.scss";

.container {
  @include container();
   
  .row {
    @include row(); 
      .overlay {
        h5 { margin:0; }
        margin: 0;
        padding: 0;
        width: 100%;
        height: 80%;
        opacity: 0;
        background: rgba(0, 0, 0, 0);
        transition: .4s ease;
        &:hover { 
          opacity: 1;
          background: rgba(0, 0, 0 , 0.3); 
        }
      }
    .card {
      margin-right: 0.7rem;
      height: 15rem;
      width: 12.32rem;
      box-shadow: 7px 10px 17px 3px rgba(0,0,0,0.8);
      img {

      }
      h3 {
        width: 100%;
        margin: 0;
        padding: .4rem .4rem;
        background: rgba(0, 0, 0, 0.3);
        font-size: 1.3rem;
        font-family: $fontMain;
        font-weight: 300;
        color: $white;
      }
    }
  }
};

</style>
