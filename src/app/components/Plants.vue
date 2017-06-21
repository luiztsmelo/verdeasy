<template>
  <div class="home">

    <!--HERO-->
    <div class="hero">
      <h2 class="title">MORA EM APARTAMENTO?</h2>
      <h2 class="subtitle">Não sabe como, e o quê plantar?</h2>
    </div><!--HERO-->

    <!--PLANTS-->
    <div class="container-card">
      
      <div class="arrow-left" @click="moveCardsRight" v-show="moveCardsLeftWidth < 0">
        <img src="./../../../static/utils/arrowL.png">
      </div>
      
      <!--ERVAS AROMÁTICAS-->
      <h2 class="title-row">Ervas Aromáticas</h2>
      
      <div class="carousel-container">
        <ul class="carousel" :style="{ 'transform': 'translate(' + moveCardsLeftWidth + 'rem)' }">
        
          <li class="card" 
            v-for="plant in plants" 
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
                <h4 id="footer-subtitle" @click="showModal = !showModal">Mais informações</h4>
              </div>
          
            </div>
          </li>
        </ul>  
      </div><!--ERVAS AROMÁTICAS-->
      
      <div class="arrow-right" @click="moveCardsLeft">
        <img src="./../../../static/utils/arrowR.png">
      </div>
      
    </div><!--PLANTS-->

    <!--MODAL-->
    <transition name="modal-animation">
      <div id="modal" v-show="showModal" @click="showModal = !showModal">
        <div class="modal-body" @click.stop>
          <h1>MODAL FODA!!</h1>
        </div>
      </div>
    </transition><!--MODAL-->

  </div> 
</template>

<script>
import { plantsData } from './plantsData'

export default {

  mixins: [plantsData],

  data() {
    return {
      showModal: false,
      moveCardsLeftWidth: '',
    }
  },

  methods: {
    moveCardsLeft() {
      this.moveCardsLeftWidth -= 60
      return moveCardsLeftWidth;
    },
    moveCardsRight() {
      this.moveCardsLeftWidth += 60
      return moveCardsLeftWidth;
    }
  },
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
  .title-row {
    margin: 0;
    padding: 1.6rem 0 0 3rem;
    text-transform: uppercase;
    font-weight: 400;
    font-style: $fontHeading;
    line-height: .4rem;
    color: white;
    font-size: 1.4rem;
  }
  .arrow-left {
    margin: 3rem 0 0 0;
    align-self: flex-start;
    position: absolute;
    cursor: pointer;
    height: 10.5rem;
    transition: .3s ease;
    z-index: 2;
    img {
      margin: 4rem 0;
      width: 3rem;
      height: 3rem;
      opacity: 1;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
    &:hover img {
      opacity: 1;
    }
  }
  .arrow-right {
    margin: 3rem 0 0 0;
    align-self: flex-end;
    position: absolute;
    cursor: pointer;
    height: 10.5rem;
    transition: .3s ease;
    z-index: 2;
    img {
      margin: 4rem 0;
      width: 3rem;
      height: 3rem;
      opacity: 1;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  .carousel-container
    .carousel {
      position: relative;
      display: flex;
      transition: all .6s ease;
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
        will-change: auto;
        &:hover .card-content {
          transform: translate(0, -83%);
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
// MODAL COMPONENT
//******************************************//
#modal {
  background: rgba(0, 0, 0, 0.7);
  width:  100%;
  height: 100%;
  position: fixed;
  top:  0;
  left: 0;
  z-index: 9998;
  .modal-body {
    position: absolute;
    background: white;
    top:  50%;
    left: 50%;
    padding: 2em;
    transform: translateX(-50%) translateY(-50%);
  }
}

// TRANSITION
.modal-animation-enter {
  opacity: 0;
}

.modal-animation-enter-active {
  transition: all 0.3s;
}

.modal-animation-leave-active {
  transition: all 0.4s;
  opacity: 0;
  transform: scale(1.1);
}

//******************************************//
// HERO COMPONENT
//******************************************//
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
//******************************************//
// MEDIA QUERIES
//******************************************//

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
@media screen and (max-width: 380px){
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
  .carousel {
    /*flex-flow: column;*/
  }
}  
</style>
