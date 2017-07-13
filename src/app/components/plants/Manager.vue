<template>
  <div id="minhahorta">
    <h1 class="minhahorta-title">Minha Horta</h1>
    <ul>
      <li v-for="plant of plants">
        <p>{{plant.name}}</p>
      </li>
    </ul>
   
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    plants: [],
  }),
     
   
  created() {
    axios.get('https://verdeasy-d832a.firebaseio.com/plants.json')
    .then(response => {
      this.plants = response.data
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#minhahorta {
  display: flex;
  color: white;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  .minhahorta-title {
    font-family: $fontHeading;
    line-height: .3;
    text-transform: uppercase;
  }
}

</style>
