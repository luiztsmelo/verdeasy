<template>
  <div class="container-card">
    
    <h2 class="title-row">Ervas Aromáticas</h2>

    <div class="row-cards">

      <div class="card" v-for="plant in plants">
        
        <img class="card-image" :src="'./../../../static/plants/' + plant.name + '.jpg'" :alt="plant.name">
        
        <div class="card-content">
          <h3 class="card-title">{{ plant.name }}</h3>
            
            <div class="card-bar">
              <div id="progress-bar-sun" style="width: 90%"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Sol</h4>
              <p id="more">+</p>
            </div>

            <div class="card-bar">
              <div id="progress-bar-water" style="width: 40%"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Rega</h4>
              <p id="more">+</p>
            </div>

            <div class="card-bar">
              <div id="progress-bar-care" style="width: 70%"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Cuidados</h4>
              <p id="more">+</p>
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
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";
@import "./../scss/mixinsPlants.scss";

.container-card {
  background: rgba(30, 30, 30, 0.93);
  color: white;
  padding: 0 3rem;
  .title-row {
    margin: 0;
    padding: 1.2rem 0 .7rem 1.7rem;
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
      margin-right: .7rem;
      margin-bottom: 2rem;
      height: 13.3rem;
      width: 14.3rem;
      cursor: pointer;
      overflow: hidden;
      &:hover .card-content{
        transform: translate(0, -110%);
      }
      &:hover .card-image {
        opacity: .6;
        height: 13.4rem;
      } 
      &:hover .card-title {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }
      .card-image {
        position: absolute;
        height: 11.3rem;
        width: 14.3rem;
        transition: .7s ease;
      }
    }
  }
}
.card-content {
  transition: all 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000);
  
  .card-title {
    margin-top: 11.3rem;
    margin-bottom: auto;
    padding: .3rem 0;
    background: white;
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
    color: black;
    transition: .5s ease;
  }
  .card-subtitle {
    position: relative;
    text-align: center;
    font-weight: 400;
    transform: translateY(-1.8rem);
  }
  #less {
    font-weight: 600;
    float: left;
    margin: auto;
    padding: 0 .5rem;
    transform: translateY(-1.4rem);
  }
  #more {
    font-weight: 600;
    float: right;
    margin: -1.7rem auto;
    padding: 0 .5rem;
    transform: translateY(-2rem);
  }
  .card-bar {
    position: relative;
    border-radius: 25px;
    margin: .777rem auto;
    width: 95%;
    height: 1.4rem;
    background-color: rgba(177, 177, 177, 0.4);
    #progress-bar-sun {
      height: 1.4rem;
      border-radius: 25px;
      background-color: rgba(255, 238, 88, 0.7);
    }
    #progress-bar-water {
      height: 1.4rem;
      border-radius: 25px;
      background-color: rgba(130, 177, 255, 0.7);
    }
    #progress-bar-care {
      height: 1.4rem;
      border-radius: 25px;
      background-color: rgba(255, 112, 67, 0.7);
    }
  }
}

</style>
