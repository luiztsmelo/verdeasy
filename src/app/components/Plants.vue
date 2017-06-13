<template>
  <div class="home">

    <!--HERO-->
    <div class="hero">
      <h2 class="verdeasy">VERDEASY</h2>
      <h2 class="title">MORA EM APARTAMENTO?</h2>
      <h2 class="subtitle">Não sabe como, e o quê plantar?</h2>
    </div><!--HERO-->

    <!--PLANTS-->
    <div class="container-card">
      
      <h2 class="title-row">Ervas Aromáticas</h2>
      
      <div class="arrow-left" @click="moveCardsRight">
        <img src="./../../../static/arrowL.png">
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
        <img src="./../../../static/arrowR.png">
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
  background: $grey;
  color: $offwhite;
  white-space: nowrap;
  overflow-x: hidden;
  
  .title-row {
    margin: 0;
    padding: 1.2rem 0 .8rem 3.1rem;
    text-transform: uppercase;
    font-weight: 400;
    font-style: $fontBrand;
    color: $offwhite;
  }
  .arrow-left {
    position: absolute;
    cursor: pointer;
    height: 12rem;
    transition: .3s ease;
    z-index: 1;
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
    height: 12rem;
    transition: .3s ease;
    transform: translate(81.3rem, -14.3rem);
    z-index: 1;
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
    transition: all .7s ease;
    .card {
      display: inline-block;
      margin: 0 .2rem 2rem .2rem;
      height: 12rem;
      width: 14rem;
      cursor: pointer;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 100% 10rem;
      transition: all 0.4s ease;
      transform: translateX(3rem);
   
      /*transform: translateX(-40.25rem);*/
      &:hover .card-content{
        transform: translate(0, -85%);
      }
      &:hover {
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
        background-size: 100% 13.3rem;
      }
    }
  }
  .card-content {
    transition: all 0.4s ease;
    .card-title {
      margin-top: 10rem;
      margin-bottom: auto;
      padding: .2rem 0;
      background: $offwhite;
      font-size: 1.3rem;
      font-weight: 300;
      text-align: center;
      color: $offblack;
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
      transform: translateY(-1.3rem);
    }
    #more {
      font-family: $fontText;
      float: right;
      margin: -1.7rem auto;
      padding: 0 .5rem;
      transform: translateY(-1.9rem);
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
}

 
// HERO
.hero {
  display: flex;
  flex-direction: column;
  padding: 0 0 7rem 0;
  
  background: rgba(0, 0, 0, 0.3);
  .title {
    color: white;
    font-size: 4.5rem;
    text-align: center;
    font-family: $fontHero;
    line-height: 0.7;
    opacity: 0;
    animation: titleAnimation 36s linear infinite 0s;
    animation-iteration-count: 1;  
  }
  .subtitle {
    color: white;
    font-size: 3rem;
    text-align: center;
    line-height: 0.7;
    font-family: $fontHero;
    opacity: 0;
    animation: subtitleAnimation 36s ease-in infinite 0s;
    animation-iteration-count: 1; 
  }
  .verdeasy {
    text-align: center;
    color: white;
    font-size: 6rem;
    font-family: $fontBrand;
    line-height: 0;
    opacity: 0;
    transform: translateY(10.3rem);
    animation: verdeasyAnimation 30s ease-in infinite 0s;
  }
}
@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    14% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
@keyframes subtitleAnimation { 
    6% { opacity: 0 }
    15% { opacity: 1 }
    22% { opacity: 1 }
    27% { opacity: 0 }
    100% { opacity: 0 }
}
@keyframes verdeasyAnimation { 
    27% { opacity: 0; animation-timing-function: ease-in }
    45% { opacity: 1 }
    80% { opacity: 1 }
    100% { opacity: 0 }
}

@media screen and (max-width: 1024px){
  .hero {
    margin: 0;
    .title {
      font-size: 4rem;
    }
    .subtitle {
      font-size: 3rem;
    }
  }
}

@media screen and (max-width: 768px){
  .hero {
    margin: 0;
    .title {
      font-size: 2.5rem;
      line-height: 1;
    }
    .subtitle {
      font-size: 2rem;
      line-height: 1.5;
    }
    .verdeasy {
      font-size: 4rem;
    }
  }
}
</style>
