<template>
  <div id="addplant">
    <h1 class="title" v-if="!submitted">Add Plant</h1>
    <router-link to="/plantslist" class="plantslist-return"><h3 v-if="!submitted">< Voltar</h3></router-link>

    <div class="submitted" v-if="submitted">
      <h2>Planta adicionada com sucesso!</h2>
      <button @click="submitted = false">Adicionar mais!</button>
      <button class="list-btn"><router-link to="/plantslist">Ver lista</router-link></button>
    </div>

    <div class="form" v-if="!submitted">

      <div class="form-basic-info">
        <div class="attrs-div">
          <label>Nome:</label>
          <input type="text" class="name" v-model="plants.name">
        </div>
        <div class="attrs-div">
          <label>Sci:</label>
          <input type="text" class="name" v-model="plants.sci">
        </div>  
        <div class="attrs-div">
          <label>Class:</label>
          <select class="select-class" v-model="plants.class"><option v-for="classe in classes">{{ classe.class }}</option></select>
        </div>
        <div class="attrs-div">
          <label>Facil:</label>
          <select v-model="plants.facil"><option v-for="n in 10">{{ n }}</option></select>
        </div>
        <div class="attrs-div">
          <label>Sol:</label>
          <select v-model="plants.sol"><option v-for="n in 10">{{ n }}</option></select>
        </div>
        <div class="attrs-div">
          <label>Rega:</label>
          <select v-model="plants.rega"><option v-for="n in 10">{{ n }}</option></select>
        </div>  
        <div class="attrs-div">
          <label>Praga:</label>
          <select v-model="plants.prag"><option v-for="n in 10">{{ n }}</option></select>
        </div>  
        <div class="attrs-div">
          <label>Vel. Germ:</label>
          <select v-model="plants.germ"><option v-for="n in 10">{{ n }}</option></select>
        </div>  
        <div class="attrs-div">
          <label>Vel. Cresc:</label>
          <select v-model="plants.cresc"><option v-for="n in 10">{{ n }}</option></select>
        </div>  
        <div class="attrs-div">
          <label>Altura:</label>
          <select v-model="plants.alt"><option v-for="n in 10">{{ n }}</option></select>
        </div>  
        <div class="attrs-div">
          <label>Temperatura:</label>
          <select v-model="plants.temp"><option v-for="n in 10">{{ n }}</option></select>
        </div>  
        <div class="attrs-div">
          <label>Solo:</label>
          <select v-model="plants.solo"><option v-for="n in 10">{{ n }}</option></select>
        </div>  

      </div>

      <div class="form-text-info">
        <label>Cultivo:</label>
        <textarea v-model="plants.cultivo" name="" id="" cols="70" rows="8"></textarea>
        <label>Usos:</label>
        <textarea v-model="plants.usos" name="" id="" cols="70" rows="8"></textarea>
      </div>
    </div>

    <button @click.prevent="addPlant" @click="submitted = true" v-if="!submitted">Adicionar</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      
      plants: { name: '', sci: '', class: '', facil: '', sol: '', rega: '', prag: '', germ: '', cresc: '', alt: '', temp: '', solo: '', cultivo: '', usos: '', },
      
      classes: [
        { class: 'EA'},
        { class: 'MED'},
        { class: 'FRUT'},
        { class: 'SUC'},
        { class: 'HORT'},
        { class: 'DECOR'},
        { class: 'FLOR'},
      ]
    }
  },
  methods: {
    addPlant() {
      this.$http.post('https://verdeasy-d832a.firebaseio.com/plants.json', this.plants).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#addplant{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: center;
  .plantslist-return {
    position: absolute;
    color: rgb(200, 200, 200);
    left: 2.5%;
    bottom: 23%;
    transition: .2s ease;
    &:hover {
      color: $lightgreen;
    }
  }
  .title {
    color: white;
    text-align: center;
    margin: 0 1rem 0 2rem;
  }
  .submitted {
    position: absolute;
    left: 0%; 
    width: 100%;
    margin: 3rem 0;
    color: white;
    text-align: center;
    text-align: center;
    .list-btn {
      a {
        color: white;
        &:hover {
          color: $green;
          background: transparent;
        }
      }
      margin-top: 2rem;
    }
    button {
      position: absolute;
      margin: auto;
      background: transparent;
      border-radius: 1rem;
      left: 0; 
      width: 100%;
      height: 2rem;
      &:hover {
        color: $green;
        background: transparent;
      }
    }
  }
  .form {
    display: flex;
    color: white;
    flex-flow: row;
    align-items: center;
    margin: 0 1.5rem;
    .form-basic-info {
      flex: 1 0 0;
      .attrs-div {
        text-align: start;
        margin: .4rem 0;
        label {
          font-size: 1.25rem;
        }
        input{ 
          border-radius: 1rem;
          border: none;
          width: 100%;
          margin: .2rem 0;
          padding: .15rem .6rem;
        }
        .select-class {
          width: 5rem;
        }
        select {
          background: rgba(white, .1);
          width: 2.7rem;
          border: none;
          color: white;
          border-radius: 1rem;
          option {
            color: black;
          }
        }
      }
    }
    .form-text-info {
      flex: 3 0 0;
      align-content: center;
      align-items: center;
      text-align: center;
      label {
        display: block;
        margin: .2rem;
      }
      textarea {
        display: block;
        border-radius: 1rem;
        padding: 1rem;
        margin: auto;
      }
    }
  }

  button {
    cursor: pointer;
    align-self: center;
    width: 10rem;
    height: 2.7rem;
    border-radius: 0  3rem 3rem 0;
    border: none;
    background: $grey;
    color: white;
    margin: .7rem 0;
    transition: all .3s ease;
    &:hover {
      background-color: $green;
    }
  }
}
</style>
