<template>
  <div class="home">

    <!--HERO-->
    <div class="hero">
      <h2 class="title">MORA EM APARTAMENTO?</h2>
      <h2 class="subtitle">Não sabe como, e o quê plantar?</h2>
    </div><!--HERO-->

    <!--PLANTS-->
    <div class="container-card">
      
      <h2 class="title-row">Ervas Aromáticas</h2>
      
      <div class="arrow-left" @click="moveCardsRight">
        <img src="./../../../static/utils/arrowL.png">
      </div>
      
      <div class="row-cards" 
        :style="{ 'transform': 'translate(' + moveCardsLeftWidth + ')' }">
        
        <div class="card" 
          v-for="plant in plants" 
          @click="showModal = !showModal" 
          :style="{ 'background-image': 'url(' + plant.img + ')' }">
          
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
      
      <div class="arrow-right" @click.capture="moveCardsLeft">
        <img src="./../../../static/utils/arrowR.png">
      </div>
    </div><!--PLANTS-->

  </div> 
</template>

<script>
import { plantsData } from './plantsData'

export default {
  mixins: [plantsData],
  data() {
    return {
      moveCardsLeftWidth: '',
    }
  },
  methods: {
    moveCardsLeft() {
      this.moveCardsLeftWidth = '-80%'
        return moveCardsLeftWidth;
    },
    moveCardsRight() {
      this.moveCardsLeftWidth = '0%'
        return moveCardsLeftWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

.container-card {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  white-space: nowrap;
  overflow-x: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  .title-row {
    margin: 0;
    padding: 1rem 0 .8rem 3.1rem;
    text-transform: uppercase;
    font-weight: 400;
    font-style: $fontHeading;
    color: white;
    font-size: 1.4rem;
  }
  .arrow-left {
    position: absolute;
    cursor: pointer;
    height: 10.5rem;
    transition: .3s ease;
    transform: translate(0, 3.4rem);
    z-index: 2;
    img {
      margin: 5rem 0;
      width: 3rem;
      height: 3rem;
      opacity: 0;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
    &:hover img {
      opacity: 1;
    }
  }
  .arrow-right {
    position: absolute;
    cursor: pointer;
    height: 10.5rem;
    transition: .3s ease;
    transform: translate(81.3rem, 3.4rem);
    z-index: 2;
    img {
      margin: 5rem 0;
      width: 3rem;
      height: 3rem;
      opacity: 1;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .row-cards {
    display: flex;
    transition: all .7s ease;
    .card {
      display: grid;
      margin: 0 .2rem 2rem .2rem;
      height: 10.5rem;
      min-width: 13.5rem;
      cursor: pointer; 
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 100% 8.5rem;
      transition: all 0.4s ease;
      transform: translateX(3rem);
      will-change: auto;
      &:hover .card-content {
        transform: translate(0, -43%);
      }
      &:hover {
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
        background-size: 100% 13.5rem;
      }
      &:hover #progress-bar-sun {
        transform: translateX(0);
      }
      &:hover #progress-bar-water {
        transform: translateX(0);
      }
      &:hover #progress-bar-care {
        transform: translateX(0);
      }
    }
  }
  .card-content {
    transition: all 0.4s ease;
    .card-title {
      position: relative;
      margin-top: 8.5rem;
      margin-bottom: 1.1rem;
      padding: .1rem 0;
      background: white;
      font-size: 1.3rem;
      font-weight: 300;
      text-align: center;
      color: $offblack;
    }
    .card-subtitle {
      position: relative;
      text-align: center;
      font-weight: 400;
      transform: translate(-.7rem, -1.67rem);
    }
    #less {
      font-family: $fontMain;
      float: left;
      margin: auto;
      padding: 0 .5rem;
      font-size: 1.7rem;
      transform: translateY(-1.7rem);
    }
    #more {
      font-family: $fontMain;
      float: right;
      margin: -1.7rem auto;
      padding: 0 .5rem;
      font-size: 1.5rem;
      transform: translateY(-2.2rem);
    }
    .card-bar {
      position: relative;
      margin: .85rem auto;
      width: 95%;
      height: 1.2rem;
      background-color: rgba(140, 140, 140, 0.5);
      #progress-bar-sun {
        height: 1.2rem;
        background-color: rgba(245, 231, 118, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.6s cubic-bezier(0.370, 0.000, 0.000, 1.235);
      
      }
      #progress-bar-water {
        height: 1.2rem;
        background-color: rgba(100, 181, 246, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.8s cubic-bezier(0.370, 0.000, 0.000, 1.235);
      }
      #progress-bar-care {
        height: 1.2rem;
        background-color: rgba(239, 135, 105, 0.8);
        transform: translateX(-13.5rem);
        transition: all 1s cubic-bezier(0.370, 0.000, 0.000, 1.235);
      }
    }
  }
  .card-footer {
    #footer-subtitle {
      margin: 1rem 0;
      padding: 0;
      text-align: center;
      width: 95%;
      font-size: 1.1rem;
      transform: translateX(-.6rem);
    }
  }
}

 
// HERO
.hero {
  display: flex;
  flex-direction: column;
  padding: 5rem 0 8rem 0;
  background: $bgopacity;
  .title {
    color: white;
    font-size: 4.2rem;
    text-align: center;
    font-family: $fontHeading;
    line-height: 0.7;
  }
  .subtitle {
    color: white;
    font-size: 2.8rem;
    text-align: center;
    line-height: 0.7;
    font-family: $fontHeading;
  }
}

//TABLET
@media screen and (max-width: 768px){
  .hero {
    margin: 0;
    .title {
      font-size: 3.3rem;
      line-height: 1;
    }
    .subtitle {
      font-size: 2.2rem;
      line-height: 1;
    }
  }
}

//SMARTPHONE L
@media screen and (max-width: 425px){
  .hero {
    margin: 0;
    .title {
      font-size: 3.2rem;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 2.2rem;
      line-height: 1.5;
    }
  }
}
</style>
