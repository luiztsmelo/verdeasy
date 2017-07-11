<template>
  <div id="plants-list"> 
    <h1 class="title">Plants List <router-link to="/addplant"><span class="addplant">+</span></router-link></h1>
    <table>
      <tr>
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
        <th>Solo.</th>
        <th>Del.</th>
      </tr>

      <tr v-for="plant in nameOrder">
        <td><input type="text" :value="plant.name" @input="updateName(plant, $event.target.value)"></td>
        <td><input type="text" :value="plant.sci" @input="updateSci(plant, $event.target.value)"></td>
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
        <td><img class="del-img" src="./../../../../static/utils/delete.svg" @click="removePlant(plant)"></td>
      </tr>

    </table>

  </div>
</template>

<script>
import { orderBy } from 'lodash'
import { db } from './../../firebase';

export default {
  data() {
    return {
      plants: {},
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
    // UPDATE PLANT
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
    // REMOVE PLANT
    removePlant: function (plant) {
      this.$firebaseRefs.plants.child(plant['.key']).remove()
      .then(() => {
        alert(plant.name + ' removida com sucesso!');
      })
    }
  }
}  
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#plants-list {
  display: flex;
  color: white;
  text-align: center;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  .addplant {
    color: rgb(200, 200, 200);
    font-size: 2.5rem;
    transition: .2s ease;
    &:hover {
      color: $green;
    }
  }
  table {
    cursor: text;
    font-family: $fontMain;
    font-size: 1.1rem;
    width: 84%;
    border-collapse: collapse;
    background: rgba(black, .1);
    margin-bottom: 2rem;
    th {
      background: rgba(black, .6);
      padding: .3rem 0;
    }
    td {
      input {
        padding: .2rem 0;
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        text-align: center;
        color: white;
        font-family: $fontMain;
      }
      input[type=number] {
        width: 5rem;
      }
      
      &:hover {
        background: rgba($lightgreen, .5);
      }
      .update-img {
        cursor: pointer;
        width: 1.3rem;
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
      background: rgba(black, .3);
    }
  }
}

</style>
