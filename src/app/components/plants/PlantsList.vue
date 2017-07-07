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
      </tr>
      <tr v-for="plant in plants">
        <td>{{ plant.name }}</td>
        <td><i>{{ plant.sci }}</i></td>
        <td>{{ plant.class }}</td>
        <td>{{ plant.facil }}</td>
        <td>{{ plant.sol }}</td>
        <td>{{ plant.rega }}</td>
        <td>{{ plant.prag }}</td>
        <td>{{ plant.germ }}</td>
        <td>{{ plant.cresc }}</td>
        <td>{{ plant.alt }}</td>
        <td>{{ plant.temp }}</td>
        <td>{{ plant.solo }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      plants: {},
      plantUpdate: null,
    }
  },
  created() {
    this.$http.get('https://verdeasy-d832a.firebaseio.com/plants.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.plants = data;
    });
  },
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
    font-family: $fontMain;
    font-size: 1.1rem;
    width: 80%;
    border-collapse: collapse;
    background: rgba(black, .1);
    font-weight: 300;
    margin-bottom: 2rem;
    input {
      background: transparent;
      border: none;
      border-bottom: rgba(black, .4) solid;
      color: white;
    }
    th {
      font-size: 1.15rem;
      background: rgba(black, .6);
      position: static;
      padding: .3rem 0;
      width: 3rem;
    }
    td {
      padding: .3rem 0;
      cursor: pointer;
      transition: all .07s ease;
      &:hover {
        background: rgba($lightgreen, .5);
      }
      
    }
    tr:nth-child(even) {
      background: rgba(black, .3);
    }
  }
}

</style>
