<template>
  <div class="container">
    <h2>Filtros</h2>
    <div class="figure">
      <p>Hortelã</p>
    </div>
    
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
@import "./../../scss/style.scss";

.container {
  background: rgba(60, 60, 60, 0.9);
  color: white;
  padding: 0 3rem;
  flex-direction: column; 
  h2 {
    margin: 0;
    padding: .5rem 0;
  }
  .figure {
    margin: 0;
    padding: 0;
    background-image: url(https://thebmaa.files.wordpress.com/2014/10/b049f-esol3lo.jpg);
    min-height: 16rem;
    max-width: 16rem;
    box-shadow: 4px 6px 10px 1px rgba(0,0,0,0.7);
    p {
    margin: 0 0 1rem 0;
    padding: .5rem .5rem;
    background: rgba(0, 0, 0, 0.3);
    font-size: 1.7rem;
    font-weight: $fontLight;
    }
  }
}

</style>
