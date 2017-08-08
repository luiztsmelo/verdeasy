<template>
  <div id="plants-list"> 
    <h1 class="title">Plants List <span class="addplant" @click="addPlant(plant)">+</span></h1>
    <table>
      <tr>
        <th>Img.</th>
        <th>Nome</th>
        <th>Sci.</th> 
        <th>Class.</th>
        <th>Facil.</th>
        <th>Sol</th>
        <th>Rega</th>
        <th>Praga</th>
        <th>Germ.</th>
        <th>Cresc.</th>
        <th>Alt.</th>
        <th>Temp.</th>
        <th>Solo</th>
        <th>Cult.</th>
        <th>Usos</th>
        <th>Del.</th>
      </tr>

      <tr v-for="plant in nameOrder">
        <td><img class="plant-img" :src="'./../../../static/plants/' + plant.name + '.jpg'" alt=""></td>
        <td><input type="text" :value="plant.name" @input="updateName(plant, $event.target.value)"></td>
        <td><input type="text" :value="plant.sci" @input="updateSci(plant, $event.target.value)" class="sci-text"></td>
        <td><input type="text" :value="plant.class" @input="updateClass(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.facil" @input="updateFacil(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.sol" @input="updateSol(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.rega" @input="updateRega(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.prag" @input="updatePrag(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.germ" @input="updateGerm(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.cresc" @input="updateCresc(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.alt" @input="updateAlt(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.temp" @input="updateTemp(plant, $event.target.value)"></td>
        <td><input type="number" min="1" max="10" :value="plant.solo" @input="updateSolo(plant, $event.target.value)"></td>
        <td><img class="cultivo-img" src="./../../../../static/utils/cultivo.svg" @click="plantModalCult = plant"></td>
        <td><img class="usos-img" src="./../../../../static/utils/usos.svg" @click="plantModalUsos = plant"></td>
        <td><img class="del-img" src="./../../../../static/utils/delete.svg" @click="removePlant(plant)"></td>
        
      </tr>

    </table>

    <div class="modal-cultivo" v-if="plantModalCult" @click="plantModalCult = null">
      <div class="body-modal-cultivo" @click.stop>
        <h1>Cultivo {{ plantModalCult.name }}</h1>
        <textarea class="box-text-cultivo" @input="updateCultivo(plantModalCult, $event.target.value)">{{ plantModalCult.cultivo }}</textarea>
      </div>
    </div>

    <div class="modal-usos" v-if="plantModalUsos" @click="plantModalUsos = null">
      <div class="body-modal-usos" @click.stop>
        <h1>Usos {{ plantModalUsos.name }}</h1>
        <textarea class="box-text-usos" @input="updateUsos(plantModalUsos, $event.target.value)">{{ plantModalUsos.usos }}</textarea>
      </div>
    </div>

  </div>
</template>

<script>
import { orderBy } from 'lodash'
import { db } from './../../firebase';

export default {
  data() {
    return {
      plants: {},
      plant: '',
      plantModalCult: '',
      plantModalUsos: '',
    }
  },
  firebase: {
    plants: {
      source: db.ref('plants'),
    }
  },
  computed: {
    nameOrder() {
      return _.orderBy(this.plants, ['name'], ['asc']);
    },
  },
  methods: {
    // UPDATE STATS PLANT
    updateName: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('name').set(newAttr);
    },
    updateSci: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('sci').set(newAttr);
    },
    updateClass: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('class').set(newAttr);
    },
    updateFacil: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('facil').set(newAttr);
    },
    updateSol: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('sol').set(newAttr);
    },
    updateRega: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('rega').set(newAttr);
    },
    updatePrag: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('prag').set(newAttr);
    },
    updateGerm: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('germ').set(newAttr);
    },
    updateCresc: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('cresc').set(newAttr);
    },
    updateAlt: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('alt').set(newAttr);
    },
    updateTemp: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('temp').set(newAttr);
    },
    updateSolo: function (plant, newAttr) {
      this.$firebaseRefs.plants.child(plant['.key']).child('solo').set(newAttr);
    },

    updateCultivo: function (plantModalCult, newAttr) {
      this.$firebaseRefs.plants.child(plantModalCult['.key']).child('cultivo').set(newAttr);
    },
    updateUsos: function (plantModalUsos, newAttr) {
      this.$firebaseRefs.plants.child(plantModalUsos['.key']).child('usos').set(newAttr);
    },

    // REMOVE PLANT
    removePlant: function (plant) {
      this.$firebaseRefs.plants.child(plant['.key']).remove()
      .then(() => {
        alert(plant.name + ' removido(a) com sucesso!');
      })
    },
    addPlant: function (plant) {
      this.$firebaseRefs.plants.push({
        name: this.plant
      })
    }
  }
}  
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#plants-list {
  display: flex;
  color: $offwhite;
  text-align: center;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  .addplant {
    cursor: pointer;
    color: rgb(200, 200, 200);
    font-size: 2.5rem;
    transition: .2s ease;
    &:hover {
      color: $green;
    }
  }


  /* MODAL CULTIVO */
  .modal-cultivo {
    background: rgba(0, 0, 0, 0.8);
    width:  100%;
    height: 100%;
    position: fixed;
    top:  0;
    left: 0;
    z-index: 7777;
    color: $offwhite;
    .body-modal-cultivo {
      display: flex;
      flex-flow: column;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 55%;
      height: 75%;
      transform: translateX(-50%) translateY(-50%);
      .box-text-cultivo {
        padding: 1rem;
        width: 100%;
        height: 100%;
      }
    }
  }
  .modal-usos {
    background: rgba(0, 0, 0, 0.8);
    width:  100%;
    height: 100%;
    position: fixed;
    top:  0;
    left: 0;
    z-index: 7777;
    color: $offwhite;
    .body-modal-usos {
      display: flex;
      flex-flow: column;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 55%;
      height: 75%;
      transform: translateX(-50%) translateY(-50%);
      .box-text-usos {
        padding: 1rem;
        width: 100%;
        height: 100%;
      }
    }
  }


  /* TABLE */
  table {
    cursor: default;
    font-family: $fontMain;
    font-size: 1.1rem;
    width: 90%;
    border-collapse: collapse;
    background: rgba($offblack, .3);
    margin-bottom: 2rem;
    
    th {
      cursor: default;
      background: rgba($offblack, .9);
      padding: .5rem 0;
    }
    td {
      height: 100%;
      input {
        cursor: default;
        padding: .2rem 0;
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        text-align: center;
        color: $offwhite;
      }
      .sci-text {
        font-style: italic;
        font-size: 1.1rem;
      }
      input[type=number] {
        width: 3.7rem;
      }
      &:hover {
        background: rgba($green, .8);
      }
      .update-img {
        cursor: pointer;
        width: 1.3rem;
        height: auto;
        margin: 0 1rem;
      }
      .plant-img {
        width: 3.7rem;
        height: auto;
        margin: 0 1rem 0 0;
        transition: transform .1s ease;
        &:hover {
          transform: scale(2.2);
        }
      }
      .cultivo-img {
        cursor: pointer;
        width: 1.6rem;
        height: auto;
        margin: 0 1rem;
      }
      .usos-img {
        cursor: pointer;
        width: 1.6rem;
        height: auto;
        margin: 0 1rem;
      }
      .del-img {
        cursor: pointer;
        width: .9rem;
        height: auto;
        margin: 0 1rem;
      }
    }
    tr:nth-child(even) {
      background: rgba($offblack, .4);
    }
  }
}

</style>
