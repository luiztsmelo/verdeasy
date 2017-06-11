<template>
  <div class="container-card">
    
    <h2 class="title-row">Ervas Aromáticas</h2>
    
    <div class="arrow-left">
      <img src="./../../../static/arrowL.png">
    </div>
    
    <div class="row-cards" :style="{ 'transform': 'translateX(' + moveCardsLeft + ')' }">
      
      <div class="card" v-for="plant in plants" :style="{ 'background-image': 'url(' + plant.img + ')' }">
        
        <div class="card-content">
          <h3 class="card-title">{{ plant.name }}</h3>
            
            <div class="card-bar">
              <div id="progress-bar-sun" :style="'width:' + (plant.sun * 10) + '%'"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Sol</h4>
              <p id="more">+</p>
            </div>

            <div class="card-bar">
              <div id="progress-bar-water" :style="'width:' + (plant.water * 10) + '%'"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Rega</h4>
              <p id="more">+</p>
            </div>

            <div class="card-bar">
              <div id="progress-bar-care" :style="'width:' + (plant.care * 10) + '%'"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Cuidados</h4>
              <p id="more">+</p>
            </div>

          <div class="card-footer">
            <h4 id="footer-subtitle">Mais informações</h4>
          </div>
        
        </div>
      </div>
    </div>
    
    <div class="arrow-right" @click="moveCardsLeft">
      <img src="./../../../static/arrowR.png">
    </div>
    <h2 class="title-row">Ervas Aromáticas</h2>
    
    <div class="arrow-left">
      <img src="./../../../static/arrowL.png">
    </div>
    
    <div class="row-cards" :style="{ 'transform': 'translateX(' + moveCardsLeft + ')' }">
      
      <div class="card" v-for="plant in plants" :style="{ 'background-image': 'url(' + plant.img + ')' }">
        
        <div class="card-content">
          <h3 class="card-title">{{ plant.name }}</h3>
            
            <div class="card-bar">
              <div id="progress-bar-sun" :style="'width:' + (plant.sun * 10) + '%'"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Sol</h4>
              <p id="more">+</p>
            </div>

            <div class="card-bar">
              <div id="progress-bar-water" :style="'width:' + (plant.water * 10) + '%'"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Rega</h4>
              <p id="more">+</p>
            </div>

            <div class="card-bar">
              <div id="progress-bar-care" :style="'width:' + (plant.care * 10) + '%'"></div>
              <p id="less">-</p>
                <h4 class="card-subtitle">Cuidados</h4>
              <p id="more">+</p>
            </div>

          <div class="card-footer">
            <h4 id="footer-subtitle">Mais informações</h4>
          </div>
        
        </div>
      </div>
    </div>
    
    <div class="arrow-right" @click="moveCardsLeft">
      <img src="./../../../static/arrowR.png">
    </div>

  </div> 
</template>

<script>
import { plantsData } from './plantsData'

export default {
  mixins: [plantsData],
  data() {
    return {
      moveCardsLeftWidth: '-55rem',
    }
  },
  methods: {
    moveCardsLeft() {
      this.moveCardsLeftWidth
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

.container-card {
  background: rgba(20, 20, 20, 0.93);
  color: white;
  padding: 0 0 0 .7rem;
  white-space: nowrap;
  width: 100%;
  overflow-x: hidden;
  
  .title-row {
    margin: 0;
    padding: 1.2rem 0 .8rem 3.3rem;
    text-transform: uppercase;
    font-weight: 600;
    color: $whitegreen;
  }
  .arrow-left {
    display: inline-block;
    position: absolute;
    float: left;
    cursor: pointer;
    height: 12rem;
    transition: .4s ease;
    img {
      margin: 5rem 0;
      width: 3rem;
      height: 3rem;
      opacity: 0;
    }
    &:hover {
      background-color: rgba(60, 60, 60, 0.3);
    }
    &:hover img {
      opacity: 1;
    }
  }
  .arrow-right {
    position: absolute;
    display: fixed;
    float: right;
    cursor: pointer;
    height: 12rem;
    transition: .4s ease;
    transform: translate(80.7rem, -14.25rem);
    img {
      margin: 5rem 0;
      width: 3rem;
      height: 3rem;
      opacity: 1;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
     &:hover img {
      opacity: 1;
    }
  }
  .row-cards {
    .card {
      display: inline-block;
      margin: 0 .3rem 2rem .3rem;
      height: 12rem;
      width: 14rem;
      cursor: pointer;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 100% 10rem;
      transition: .3s ease;
      transform: translateX(3rem);
   
      /*transform: translateX(-40.25rem);*/
      &:hover .card-content{
        transform: translate(0, -90%);
      }
      &:hover {
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
        background-size: 100% 13.3rem;
      }
    }
  }
}
.card-content {
  transition: all 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000);
  
  .card-title {
    margin-top: 10rem;
    margin-bottom: auto;
    padding: .2rem 0;
    background: $whitegreen;
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
    transform: translateY(-1.67rem);
  }
  #less {
    font-family: $fontText;
    float: left;
    margin: auto;
    padding: 0 .5rem;
    transform: translateY(-1.4rem);
  }
  #more {
    font-family: $fontText;
    float: right;
    margin: -1.7rem auto;
    padding: 0 .5rem;
    transform: translateY(-2rem);
  }
  .card-bar {
    position: relative;
    border-radius: 25px;
    margin: .85rem auto;
    width: 95%;
    height: 1.2rem;
    background-color: rgba(177, 177, 177, 0.4);
    #progress-bar-sun {
      height: 1.2rem;
      border-radius: 25px;
      background-color: rgba(255, 238, 88, 0.7);
    }
    #progress-bar-water {
      height: 1.2rem;
      border-radius: 25px;
      background-color: rgba(130, 177, 255, 0.7);
    }
    #progress-bar-care {
      height: 1.2rem;
      border-radius: 25px;
      background-color: rgba(255, 112, 67, 0.7);
    }
  }
}
 .card-footer {
    #footer-subtitle {
      margin: 1rem auto;
      padding: .2rem 0;
      text-align: center;
      width: 95%;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 25px;
    }
  }   
</style>
