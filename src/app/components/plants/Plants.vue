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
          <img class="modal-exit" src="./../../../../static/utils/exit.svg" alt="Fechar">
          <div class="filter-modal-body" @click.stop>
            <div class="filter-modal-title">
              <h1>Filtrar por:</h1>
            </div>
            
            <div class="filter-modal-filters">
              <div class="filter-attr">
                <img class="filter-img" :src="solPath" alt="" @click="solFilter = !solFilter" :class="{ selectedfilter: solFilter }">
                <p class="attr-info">Necessidade de luz solar. Menos para mais</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="regaPath" alt="" @click="regaFilter = !regaFilter" :class="{ selectedfilter: regaFilter }">
                <p class="attr-info">Necessidade de rega. Menos para mais</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="pragPath" alt="" @click="pragFilter = !pragFilter" :class="{ selectedfilter: pragFilter }">
                <p class="attr-info">Resistência a pragas. Baixa para alta</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="germPath" alt="" @click="germFilter = !germFilter" :class="{ selectedfilter: germFilter }">
                <p class="attr-info">Velocidade de germinação. Lenta para Rápida</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="crescPath" alt="" @click="crescFilter = !crescFilter" :class="{ selectedfilter: crescFilter }">
                <p class="attr-info">Velocidade de crescimento. Lenta para Rápida</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="altPath" alt="" @click="altFilter = !altFilter" :class="{ selectedfilter: altFilter }">
                <p class="attr-info">Altura média em que alcança. Menor para maior</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="tempPath" alt="" @click="tempFilter = !tempFilter" :class="{ selectedfilter: tempFilter }">
                <p class="attr-info">Temperatura média agrádavel. Fria para quente</p>
              </div>
              <div class="filter-attr">
                <img class="filter-img" :src="soloPath" alt="" @click="soloFilter = !soloFilter" :class="{ selectedfilter: soloFilter }">
                <p class="attr-info">Tipo de solo. Arenoso para orgânico</p>
              </div>
    
            </div>
            <div class="filter-submit">
              <button @click="plantsFiltered = true, showFilter = !showFilter">Filtrar</button>
            </div>
          </div>
        </div>
      </transition><!--FILTER-->

      <!--PLANTAS FILTRADAS-->
      <div id="category-container" v-if="plantsFiltered">
        <div class="arrow-left" @click="moveCardsRight1" v-show="moveCardsLeftWidth1 < 0">
          <img :src="leftArrowImgSrc">
        </div>

        <div class="container-title">
          <img class="container-title-img" src="./../../../../static/utils/filter.svg" alt="Ervas Aromáticas">
          <h2>PLANTAS FILTRADAS</h2>
        </div>

        <div class="carousel-container">
          <ul class="carousel" :style="{ 'transform': 'translate(' + moveCardsLeftWidth1 + 'rem)' }">
          
            <li class="card" 
              v-for="plant in customFilter" 
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

        <div class="arrow-right" @click="moveCardsLeft1">
          <img :src="rightArrowImgSrc">
        </div>
      </div><!--PLANTAS FILTRADAS-->


      <!--ERVAS AROMÁTICAS-->
      <div id="category-container">
        <div class="arrow-left" @click="moveCardsRight2" v-show="moveCardsLeftWidth2 < 0">
          <img :src="leftArrowImgSrc">
        </div>

        <div class="container-title">
          <img class="container-title-img" src="./../../../../static/utils/EA.svg" alt="Ervas Aromáticas">
          <h2>Ervas Aromáticas</h2>
        </div>

        <div class="carousel-container">
          <ul class="carousel" :style="{ 'transform': 'translate(' + moveCardsLeftWidth2 + 'rem)' }">
          
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

        <div class="arrow-right" @click="moveCardsLeft2">
          <img :src="rightArrowImgSrc">
        </div>
      </div><!--ERVAS AROMÁTICAS-->
      

      <!--PLANTAS MEDICINAIS-->
      <div id="category-container">
        <div class="arrow-left" @click="moveCardsRight3" v-show="moveCardsLeftWidth3 < 0">
          <img :src="leftArrowImgSrc">
        </div>

        <div class="container-title">
          <img class="container-title-img" src="./../../../../static/utils/MED.svg" alt="Ervas Aromáticas">
          <h2>Plantas Medicinais</h2>
        </div>
        
        <div class="carousel-container">
          <ul class="carousel" :style="{ 'transform': 'translate(' + moveCardsLeftWidth3 + 'rem)' }">
          
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

        <div class="arrow-right" @click="moveCardsLeft3">
          <img :src="rightArrowImgSrc">
        </div><!--PLANTAS MEDICINAIS-->
      </div>
      
    </div><!--PLANTS CONTAINER-->


    <!--MODAL-->
    <transition name="modal-animation">
      <div id="modal" v-if="plantModal" @click="plantModal = null, showStats = true, showComoplantar = false, showUsos = false">
        <img class="modal-exit" src="./../../../../static/utils/exit.svg" alt="Fechar">
        <div class="modal-body" @click.stop>

          <!--Sidebar-->
          <div class="modal-sidebar">
            <div class="modal-plant-name-box">
              <h1 class="modal-plant-name">{{ plantModal.name }}</h1>
            </div>
            <img class="modal-plant-img" :src="plantModal.img" :alt="plantModal.name">
            <p class="modal-plant-sci"><i>{{ plantModal.sci }}</i></p>
          </div><!--Sidebar-->

          <!-- Data-->
          <div class="modal-data">
            <div class="modal-menu">

              <div class="modal-menu-stats" 
              @click="showStats = true, showComoplantar = false, showUsos = false" 
              :class="{ activetab: showStats }">
                <img class="modal-menu-img" src="./../../../../static/utils/stats.svg" alt="Características">
                <h2 class="modal-menu-title">Características</h2>
              </div>

              <div class="modal-menu-comoplantar" 
              @click="showStats = false, showComoplantar = true, showUsos = false"
              :class="{ activetab: showComoplantar }">
                <img class="modal-menu-img" src="./../../../../static/utils/comoplantar.svg" alt="Como plantar">
                <h2 class="modal-menu-title">Como plantar</h2>
              </div>
              
              <div class="modal-menu-usos" 
              @click="showStats = false, showComoplantar = false, showUsos = true"
              :class="{ activetab: showUsos }">
                <img class="modal-menu-img" src="./../../../../static/utils/usos.svg" alt="Usos">
                <h2 class="modal-menu-title">Usos</h2>
              </div>

            </div>

            <!--Stats-->
            <div class="stats" v-if="showStats">

              <img class="stats-img" id="sol" :src="solPath" alt="Sol">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.sol * 10) + '%; background: rgb(255, 238, 88);'"></div>
                <div class="reguas"><span id="regua1">2h</span><span id="regua2">4h</span><span id="regua3">6h</span></div>
              </div>
              

              <img class="stats-img" id="rega" :src="regaPath" alt="Rega">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.rega * 10) + '%; background: rgb(79, 195, 247);'"></div>
                <div class="reguas"><span id="regua1">2/sem.</span><span id="regua2">4/sem.</span><span id="regua3">6/sem.</span></div>
              </div>

              <img class="stats-img" id="prag" :src="pragPath" alt="Propensão a Pragas">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.prag * 10) + '%; background: rgb(229, 115, 115);'"></div>
                <div class="reguas"><span id="regua1">Baixa</span><span id="regua2">Média</span><span id="regua3">Alta</span></div>
              </div>

              <img class="stats-img" id="germ" :src="germPath" alt="Velocidade de Germinação">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.germ * 10) + '%; background: rgb(234, 224, 188);'"></div>
                <div class="reguas"><span id="regua1">1 sem.</span><span id="regua2">2 sem.</span><span id="regua3">3 sem.</span></div>
              </div>

              <img class="stats-img" id="cresc" :src="crescPath" alt="Velocidade de Crescimento">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.cresc * 10) + '%; background: rgb(174, 213, 129);'"></div>
                <div class="reguas"><span id="regua1">?</span><span id="regua2">?</span><span id="regua3">?</span></div>
              </div>

              <img class="stats-img" id="alt" :src="altPath" alt="Altura média">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.alt * 10) + '%; background: rgb(255, 183, 77);'"></div>
                <div class="reguas"><span id="regua1">30cm</span><span id="regua2">70cm</span><span id="regua3">150cm</span></div>
              </div>

              <img class="stats-img" id="temp" :src="tempPath" alt="Temperatura">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.temp * 10) + '%; background: rgb(77, 208, 225);'"></div>
                <div class="reguas"><span id="regua1">15ºC</span><span id="regua2">20ºC</span><span id="regua3">25ºC</span></div>
              </div>

              <img class="stats-img" id="solo" :src="soloPath" alt="Solo">
              <div class="stats-bar">
                <div class="progress-bar" :style="'width:' + (plantModal.solo * 10) + '%; background: rgb(161, 136, 127);'"></div>
                <div class="reguas"><span id="regua1">Arenoso</span><span id="regua2">Médio</span><span id="regua3">Orgânico</span></div>
              </div>

            </div><!--Stats-->

            <!--Como Plantar-->
            <div class="comoplantar" v-if="showComoplantar">
              <h1>Cultivo</h1>
              <p>{{ plantModal.cultivo }}</p> 
            </div><!--Como Plantar-->

            <!--Usos-->
            <div class="usos" v-if="showUsos">
              <h1>Usos</h1>
            </div><!--Usos-->

          </div><!--Data-->
          
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
      //Filters
      solFilter: false,
      regaFilter: false,
      pragFilter: false,
      germFilter: false,
      crescFilter: false,
      altFilter: false,
      tempFilter: false,
      soloFilter: false,

      //Modal Tabs
      showStats: true,
      showComoplantar: false,
      showUsos: false,

      showFilter: false,
      plantModal: null,

      leftArrowImgSrc: './../../../../static/utils/arrowL.svg',
      rightArrowImgSrc: './../../../../static/utils/arrowR.svg',
      solPath: './../../../../static/utils/sol.svg',
      regaPath: './../../../../static/utils/rega.svg',
      pragPath: './../../../../static/utils/praga.svg',
      germPath: './../../../../static/utils/germ.svg',
      crescPath: './../../../../static/utils/cresc.svg',
      altPath: './../../../../static/utils/alt.svg',
      tempPath: './../../../../static/utils/temp.svg',
      soloPath: './../../../../static/utils/solo.svg',
      
      moveCardsLeftWidth1: null,
      moveCardsLeftWidth2: null, 
      moveCardsLeftWidth3: null, 
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

    // FILTRO PERSONALIZADO
    customFilter() {
      return _.orderBy(this.plants, 'rega');
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
      return moveCardsLeftWidth2;
    },
    moveCardsRight2() {
      this.moveCardsLeftWidth2 += 50
      return moveCardsLeftWidth2;
    },
    moveCardsLeft3() {
      this.moveCardsLeftWidth3 -= 50
      return moveCardsLeftWidth3;
    },
    moveCardsRight3() {
      this.moveCardsLeftWidth3 += 50
      return moveCardsLeftWidth3;
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

#category-container {
  display: flex;
  flex-flow: column;
}

.container-card {
  padding: 1.2rem 0 0 0;
  background: rgba(0, 0, 0, 0.7);
-webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
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
  .arrow-left {
    @include arrowLeft;
    margin: 2.9rem 0 0 0;
  }
  .arrow-right {
    @include arrowRight;
    margin: 2.9rem 0 0 0;
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
      border-radius: .7rem;
      #progress-bar-sun {
        height: 1.2rem;
        background-color: rgba(255, 238, 88, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.4s ease;
        border-radius: .7rem;
      
      }
      #progress-bar-water {
        height: 1.2rem;
        background-color: rgba(79, 195, 247, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.6s ease;
        border-radius: .7rem;
      }
      #progress-bar-care {
        height: 1.2rem;
        background-color: rgba(239, 135, 105, 0.8);
        transform: translateX(-13.5rem);
        transition: all 0.8s ease;
        border-radius: .7rem;
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
