<template>
  <div class="container-card">
    
    <h2 class="title-row">Melhores Ervas Aromáticas</h2>

    <div class="row-cards">

      <div class="card" v-for="plant in plants">
        
        <img class="card-image" :src="'./../../../static/plants/' + plant.name + '.jpg'" :alt="plant.name">
        
        <div class="card-content">
          <h3 class="card-title">{{ plant.name }}</h3>
          <div class="card-overlay">
            
              <div class="card-bar-sun"><h4 class="card-subtitle">Sol</h4></div>

              <div class="card-bar-water"><h4 class="card-subtitle">Rega</h4></div>

              <div class="card-bar-care"><h4 class="card-subtitle">Cuidados</h4></div>

          </div>
        
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

.container-card {
  background: rgba(20, 20, 20, 0.9);
  color: white;
  padding: 0 3rem;
  .title-row {
    margin: 0;
    padding: 1.2rem 0 0.7rem 1.7rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    color: rgb(222, 222, 222);
  }
  .row-cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .card {
      margin-right: 0.7rem;
      margin-bottom: 2rem;
      height: 13.3rem;
      width: 14.3rem;
      cursor: pointer;
      overflow: hidden;

      &:hover .card-content{
        transform: translate(0, -110%);
      }
      &:hover .card-image {
        opacity: 0.222;
      } 
      &:hover .card-title {
     
      }
      .card-image {
        position: absolute;
        height: 11.3rem;
        width: 14.3rem;
        opacity: 1;
        transition: .5s ease;
      }
    }
  }
}
.card-content {
  transform: translateY(0);
  transition: all .777s cubic-bezier(0.000, 1.050, 0.315, 1.160);
  .card-title {
    margin-top: 11.32rem;
    margin-bottom: auto;
    padding: .3rem 0;
    background: white;
    font-size: 1.3rem;
    font-family: $fontMain;
    font-weight: 300;
    text-align: center;
    color: black;
  }
  .card-overlay {
    background-color: white;
    padding: .4rem 0;
    .card-subtitle {
      color: white;
      font-weight: $fontThin;
      text-align: center;
      
    }
    .card-bar-sun {
      margin: auto;
      width: 95%;
      height: 1.3rem;
      background-color: #FFEB3B;
    }
    .card-bar-water {
      margin: auto;
      width: 95%;
      height: 1.3rem;
      background-color: #82B1FF;
    }
    .card-bar-care {
      margin: auto;
      width: 95%;
      height: 1.3rem;
      background-color: #AED581;
    }
  }
}

</style>
