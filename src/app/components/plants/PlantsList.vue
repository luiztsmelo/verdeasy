<template>
  <div id="plants-list"> 
    <h1 class="title">Plants List</h1>

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
        <th>Push.</th>
        <th>Del.</th>
      </tr>
      <tr v-for="plant in nameOrder">
        <td><input :value="plant.name"></td>
        <td><input :value="plant.sci"></td>
        <td><input :value="plant.class"></td>
        <td><input type="number" min="1" max="10" :value="plant.facil"></td>
        <td><input type="number" min="1" max="10" :value="plant.sol"></td>
        <td><input type="number" min="1" max="10" :value="plant.rega"></td>
        <td><input type="number" min="1" max="10" :value="plant.prag"></td>
        <td><input type="number" min="1" max="10" :value="plant.germ"></td>
        <td><input type="number" min="1" max="10" :value="plant.cresc"></td>
        <td><input type="number" min="1" max="10" :value="plant.alt"></td>
        <td><input type="number" min="1" max="10" :value="plant.temp"></td>
        <td><input type="number" min="1" max="10" :value="plant.solo"></td>
        <td><img class="update-img" src="./../../../../static/utils/update.svg" @click="updatePlant"></td>
        <td><img class="del-img" src="./../../../../static/utils/delete.svg" @click="removePlant"></td>
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
    }
  },
  methods: {
    updatePlant() {
      alert("Planta atualizada com sucesso!");
    },
    removePlant() {
      alert('Planta removida com sucesso!');
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
