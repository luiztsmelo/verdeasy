<template>
  <div class="container">
    <h2>Melhores Ervas Aromáticas</h2>
    <div class="row">
      <div class="card" v-for="plant in plants">
        <div>
          <img :src="'./../../../static/plants/' + plant.name + '.jpg'" :alt="plant.name">
        </div>
        <div>
          <h3>{{ plant.name }}</h3>
        </div>
        <div class="overlay">
      
        </div>
      </div>
    </div>
    <h2>exigem pouco sol</h2>
    <div class="row">
      <div class="card" v-for="plant in plants">
        <div>
          <img :src="'./../../../static/plants/' + plant.name + '.jpg'" :alt="plant.name">
        </div>
        <div>
          <h3>{{ plant.name }}</h3>
        </div>
        <div class="overlay">
      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { plantsData } from './plantsData'

export default {
  mixins: [plantsData],

};
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";
@import "./../scss/mixinsPlants.scss";

.container {
  @include container();
}
.row {
  @include row();
  .overlay {
  
  }
  .card {
    margin-right: 0.7rem;
    margin-bottom: 2rem;
    height: 13.32rem;
    width: 14.3rem;
    box-shadow: 5px 7px 12px 5px rgba(0,0,0,0.8);
    cursor: pointer;
    transition: .3s ease-in-out;
    opacity: 0.75;
    &:hover {
      box-shadow: 0 0 0 0 rgba(174, 213, 129, 0.222);
      opacity: 1;
    }
    img {
      position: absolute;
      height: 11.32rem;
      width: 14.3rem;
    }
    h3 {
      position: relative;
      width: 100%;
      margin-top: 11.32rem;
      margin-bottom: 0;
      padding: .3rem 0;
      background: white;
      font-size: 1.3rem;
      font-family: $fontMain;
      font-weight: 300;
      text-align: center;
      color: black;
    }
  }
}
</style>
