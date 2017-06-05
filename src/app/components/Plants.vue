<template>
  <div class="container">


    <h2>PLANTAS QUE EXIGEM POUCO SOL</h2>

    <div class="row">
      <div class="card-11">
        <p>Menta</p>
      </div>
      <div class="card-12">
        <p>Alecrim</p>
      </div>
      <div class="card-13">
        <p>Tomilho</p>
      </div>
      <div class="card-14">
        <p>Menta</p>
      </div>
      <div class="card-15">
        <p>Menta</p>
      </div>
      <div class="card-16">
        <p>Menta</p>
      </div>
    </div>


    <h2>ERVAS AROMÁTICAS</h2>

    <div class="row">
      <div class="card-21">
        <p>Hortelã</p>
      </div>
      <div class="card-22">
        <p>Menta</p>
      </div>
      <div class="card-23">
        <p>Hortelã</p>
      </div>
      <div class="card-24">
        <p>Menta</p>
      </div>
      <div class="card-25">
        <p>Hortelã</p>
      </div>
      <div class="card-26">
        <p>Menta</p>
      </div>


    </div>
  </div>
</template>

<script>
import { plantsMixin } from './plantsMixin';
export default {
  
};
</script>

<style lang="scss">
@import "./../../scss/style.scss";
@import "./../../scss/mixins.scss";

.container {
  background: rgba(20, 20, 20, 0.9);
  color: white;
  padding: 0 3rem;
  h2 {
    margin: 0;
    padding: 1.4rem 0 0.7rem 0;
    color: rgb(177, 177, 177);
    font-size: 1.4rem;
    font-weight: 700;
  }   
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .card-11 {
      @include card(menta, jpg);
    }
    .card-12 {
      @include card(alecrim, jpg);
    }
    .card-13 {
      @include card(tomilho, jpg);
    }
    .card-14 {
      @include card(alecrim, jpg);
    }
    .card-15 {
      @include card(menta, jpg);
    }
    .card-16 {
      @include card(alecrim, jpg);
    }
  }
}


</style>
