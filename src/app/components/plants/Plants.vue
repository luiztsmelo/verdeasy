<template>
<transition name="component-fade" mode="out-in">
  <div class="home">

    <!--HERO-->
    <div id="hero">
      <h2 class="title">MORA EM APARTAMENTO?</h2>
      <h2 class="subtitle">Não sabe como, e o quê plantar?</h2>
      
    </div><!--HERO-->

    <!--PLANTS CONTAINER-->
    <div class="container-card">

      
      <!--FILTER-->
      <div id="filter" @click="showFilter = !showFilter">
        <h3 class="filter-title">FILTRAR</h3>
        <img class="filter-img" src="./../../../../static/utils/filter.svg" alt="Filtrar">
      </div>
      <!--Filter Modal-->
      <transition name="filter-animation">
        <div class="filter-modal" v-if="showFilter" @click="showFilter = !showFilter">
          <div class="filter-modal-body" @click.stop>
            <h1>Sol</h1>
            <input class="slider" type="range" min="1" max="10">
          </div>
        </div>
      </transition><!--FILTER-->


      <!--ERVAS AROMÁTICAS-->
      <div class="arrow-left-1" @click="moveCardsRight1" v-show="moveCardsLeftWidth1 < 0">
        <img :src="leftArrowImgSrc">
      </div>

      <div class="container-title">
        <img class="container-title-img" src="./../../../../static/utils/EA.svg" alt="Ervas Aromáticas">
        <h2>Ervas Aromáticas</h2>
      </div>

      <div class="carousel-container">
        <ul class="carousel" :style="{ 'transform': 'translate(' + moveCardsLeftWidth1 + 'rem)' }">
        
          <li class="card" 
            v-for="plant in EAFilter" 
            :style="{ 'background-image': 'url(' + plant.img + ')' }">
            
            <div class="card-content">
              <h3 class="card-title">{{ plant.name }}</h3>
                
              <div class="card-bar">
                <div id="progress-bar-sun" :style="'width:' + (plant.sol * 10) + '%'"></div>
                <p id="less">-</p>
                <h4 class="card-subtitle">Sol</h4>
                <p id="more">+</p>
              </div>

              <div class="card-bar">
                <div id="progress-bar-water" :style="'width:' + (plant.rega * 10) + '%'"></div>
                <p id="less">-</p>
                <h4 class="card-subtitle">Rega</h4>
                <p id="more">+</p>
              </div>

              <div class="card-bar">
                <div id="progress-bar-care" :style="'width:' + (plant.dif * 10) + '%'"></div>
                <p id="less">-</p>
                <h4 class="card-subtitle">Cuidados</h4>
                <p id="more">+</p>
              </div>

              <div class="card-footer">
                <h4 class="footer-subtitle" @click="plantModal = plant">Mais informações</h4>
              </div>
          
            </div>
          </li>
        </ul>  
      </div>

      <div class="arrow-right-1" @click="moveCardsLeft1">
        <img :src="rightArrowImgSrc">
      </div><!--ERVAS AROMÁTICAS-->
      

      <!--PLANTAS MEDICINAIS-->
      <div class="arrow-left-2" @click="moveCardsRight2" v-show="moveCardsLeftWidth2 < 0">
        <img :src="leftArrowImgSrc">
      </div>

      <div class="container-title">
        <img class="container-title-img" src="./../../../../static/utils/MED.svg" alt="Ervas Aromáticas">
        <h2>Plantas Medicinais</h2>
      </div>
      
      <div class="carousel-container">
        <ul class="carousel" :style="{ 'transform': 'translate(' + moveCardsLeftWidth2 + 'rem)' }">
        
          <li class="card" 
            v-for="plant in MEDFilter" 
            :style="{ 'background-image': 'url(' + plant.img + ')' }">
            
            <div class="card-content">
              <h3 class="card-title">{{ plant.name }}</h3>
                
              <div class="card-bar">
                <div id="progress-bar-sun" :style="'width:' + (plant.sol * 10) + '%'"></div>
                <p id="less">-</p>
                <h4 class="card-subtitle">Sol</h4>
                <p id="more">+</p>
              </div>

              <div class="card-bar">
                <div id="progress-bar-water" :style="'width:' + (plant.rega * 10) + '%'"></div>
                <p id="less">-</p>
                <h4 class="card-subtitle">Rega</h4>
                <p id="more">+</p>
              </div>

              <div class="card-bar">
                <div id="progress-bar-care" :style="'width:' + (plant.dif * 10) + '%'"></div>
                <p id="less">-</p>
                <h4 class="card-subtitle">Cuidados</h4>
                <p id="more">+</p>
              </div>

              <div class="card-footer">
                <h4 class="footer-subtitle" @click="plantModal = plant">Mais informações</h4>
              </div>
          
            </div>
          </li>
        </ul>  
      </div>

      <div class="arrow-right-2" @click="moveCardsLeft2">
        <img :src="rightArrowImgSrc">
      </div><!--PLANTAS MEDICINAIS-->
      
      
    </div><!--PLANTS CONTAINER-->


    <!--MODAL-->
    <transition name="modal-animation">
      <div id="modal" v-if="plantModal" @click="plantModal = null">
        <img class="modal-exit" src="./../../../../static/utils/exit.svg" alt="">
        <div class="modal-body" @click.stop>

          <!--Modal Sidebar-->
          <div class="modal-sidebar">
            <div class="modal-plant-name-box">
              <h1 class="modal-plant-name">{{ plantModal.name }}</h1>
            </div>
            <img class="modal-plant-img" :src="plantModal.img" :alt="plantModal.name">
          </div><!--Modal Sidebar-->

          <!--Modal Data-->
          <div class="modal-data">
            <div class="modal-menu">

              <div class="modal-menu-stats" @click="">
                <img class="modal-menu-img" src="./../../../../static/utils/stats.svg" alt="">
                <h2 class="modal-menu-title">Características</h2>
              </div>

              <div class="modal-menu-howtogrow" @click="">
                <img class="modal-menu-img" src="./../../../../static/utils/howtogrow.svg" alt="">
                <h2 class="modal-menu-title">Como plantar</h2>
              </div>
            </div>

            <div class="modal-stats">
              <div>Sol</div>
            </div>
          </div><!--Modal Data-->
          
        </div>
      </div>
    </transition><!--MODAL-->

  </div> 
</transition>  
</template>
_____________________________________________________________________
<script>
import { filter, orderBy } from 'lodash'
import { plantsData } from './plantsData'

export default {
  mixins: [plantsData],

  data() {
    return {
      showFilter: false,
      plantModal: null,
      leftArrowImgSrc: './../../../../static/utils/arrowL.svg',
      rightArrowImgSrc: './../../../../static/utils/arrowR.svg',
      moveCardsLeftWidth1: null,
      moveCardsLeftWidth2: null, 
    }
  },

  computed: {
    // FILTRAR ERVAS AROMÁTICAS
    EAFilter() {
      return _.filter(this.plants, ['class', 'EA'])
    },
    // FILTRAR PLANTAS MEDICINAIS
    MEDFilter() {
      return _.filter(this.plants, ['class', 'MED'])
    },

    // ORDENAR POR MENOR NECESSIDADE DE SOL
    solFilter() {
      return _.orderBy(this.plants, 'sol');
    }
  },

  methods: {
    moveCardsLeft1() {
      this.moveCardsLeftWidth1 -= 50
      return moveCardsLeftWidth1;
    },
    moveCardsRight1() {
      this.moveCardsLeftWidth1 += 50
      return moveCardsLeftWidth1;
    },
    moveCardsLeft2() {
      this.moveCardsLeftWidth2 -= 50
      return moveCardsLeftWidth1;
    },
    moveCardsRight2() {
      this.moveCardsLeftWidth2 += 50
      return moveCardsLeftWidth1;
    },
  },
};
</script>
_____________________________________________________________________
<style lang="scss" scoped>
@import "./../../scss/style.scss";
@import "./../../scss/_arrows.scss";
@import "./scss/_mediaQueries.scss";
@import "./scss/_modal.scss";
@import "./scss/filter.scss";

.component-fade-enter-active,  {
  transition: $comptransition;
}
.component-fade-enter, .component-fade-leave-to, .component-fade-leave-active {
  opacity: 0;
}

.container-card {
  padding: 1.2rem 0 0 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  white-space: nowrap;
  overflow-x: hidden;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  .container-title {
    margin: 0;
    padding: 0 0 0 3rem;
    h2 {
      padding: 0 0 0 .2rem;
      float: left;
      text-transform: uppercase;
      color: $offwhite;
      font-size: 1.2rem;
      line-height: 0;
      transform: translateY(1.1rem);
    }
    .container-title-img {
      float: left;
      width: 2.2rem;
      height: auto;
    }
  }
  
  .arrow-left-1 {
    @include arrowLeft;
    margin: 2.9rem 0 0 0;
  }
  .arrow-right-1 {
    @include arrowRight;
    margin: 2.9rem 0 0 0;
  }
  .arrow-left-2 {
    @include arrowLeft;
    margin: 17.2rem 0 0 0;
  }
  .arrow-right-2 {
    @include arrowRight;
    margin: 17.2rem 0 0 0;
  }
  .carousel-container {
    .carousel {
      position: relative;
      display: flex;
      transition: all .6s ease;
      margin: .7rem 0 0 0;
      .card {
        margin: 0 .2rem 1rem .2rem;
        height: 10.5rem;
        min-width: 13.5rem;
        cursor: default; 
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: 100% 8.5rem;
        transform: translateX(.3rem);
        transition: all 0.4s ease;
        &:hover .card-content {
          transform: translateY(-85.5%);
          
        }
        &:hover {
          box-shadow: inset 0 0 0 40rem rgba(0,0,0,.4);
          background-size: 100% 11.5rem;
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
  } 
  .card-content {
    transition: all 0.5s ease;
    .card-title {
      position: relative;
      margin-top: 8.5rem;
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
      margin: .85rem auto;
      width: 95%;
      height: 1.2rem;
      background-color: rgba(140, 140, 140, 0.5);
      #progress-bar-sun {
        height: 1.2rem;
        background-color: rgba(245, 231, 118, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.4s ease;
      
      }
      #progress-bar-water {
        height: 1.2rem;
        background-color: rgba(100, 181, 246, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.6s ease;
      }
      #progress-bar-care {
        height: 1.2rem;
        background-color: rgba(239, 135, 105, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.8s ease;
      }
    }
  }
  .card-footer {
    .footer-subtitle {
      cursor: pointer; 
      margin: 0 0 1rem 0;
      padding: 0;
      text-align: center;
      width: 95%;
      font-size: 1.1rem;
      transform: translateX(-.6rem);
    }
  }
}



//******************************************//
// HERO COMPONENT
//******************************************//
#hero {
  display: flex;
  flex-direction: column;
  padding: 5rem 0 8rem 0;
  position: relative;
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

</style>
