<template>
  <div class="container">
    <h2>PLANTAS QUE EXIGEM POUCO SOL</h2>
    <div class="figure">
      <p>Hortelã</p>
    </div>
    <div class="figure">
      <p>Menta</p>
    </div>
    
    <h2>ERVAS AROMÁTICAS</h2>
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
  display: flex;
  background: rgba(20, 20, 20, 0.9);
  color: white;
  padding: 0 3rem;
  flex-direction: column; 
  h2 {
    margin: 0;
    padding: 1.4rem 0 0.7rem 0;
    color: rgb(200, 200, 200);
    font-size: 1.4rem;
    font-family: $fontText;
  }
  .figure {
    margin: 0;
    padding: 0;
    background-image: url(https://thebmaa.files.wordpress.com/2014/10/b049f-esol3lo.jpg);
    min-height: 16rem;
    max-width: 14rem;
    box-shadow: 4px 6px 10px 1px rgba(0,0,0,0.7);
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

</style>
