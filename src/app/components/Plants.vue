<template>
  <div class="container">
    <h2>PLANTAS QUE EXIGEM POUCO SOL</h2>
    <div class="row">
      <div class="figure">
        <p>Hortelã</p>
      </div>
      <div class="figure">
        <p>Menta</p>
      </div>
      <div class="figure">
        <p>Hortelã</p>
      </div>
      <div class="figure">
        <p>Menta</p>
      </div>
      <div class="figure">
        <p>Menta</p>
      </div>
      <div class="figure">
        <p>Menta</p>
      </div>
    </div>
    <h2>ERVAS AROMÁTICAS</h2>
    <div class="row">
      <div class="figure">
        <p>Hortelã</p>
      </div>
      <div class="figure">
        <p>Menta</p>
      </div>
      <div class="figure">
        <p>Hortelã</p>
      </div>
      <div class="figure">
        <p>Menta</p>
      </div>
      <div class="figure">
        <p>Hortelã</p>
      </div>
      <div class="figure">
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

.container {
  background: rgba(20, 20, 20, 0.9);
  color: white;
  padding: 0 3rem;
  h2 {
    margin: 0;
    padding: 1.4rem 0 0.7rem 0;
    color: rgb(200, 200, 200);
    font-size: 1.4rem;
    font-family: $fontText;
  }   
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
      .figure {
      margin-right: 0.7rem;
      background-image: url(https://thebmaa.files.wordpress.com/2014/10/b049f-esol3lo.jpg);
      height: 15rem;
      width: 12.32rem;
      box-shadow: 5px 7px 15px 2px rgba(0,0,0,0.8);
      p {
      margin: 0;
      padding: .4rem .4rem;
      background: rgba(0, 0, 0, 0.3);
      font-size: 1.5rem;
      font-family: $fontHeading;
      color: $white;
      }
    }
  }
}

</style>
