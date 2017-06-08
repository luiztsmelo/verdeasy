<template>
  <section class="hero">
    <div class="hero-info">
      <h2 class="verdeasy">VERDEASY</h2>
      <h2 class="title">MORA EM APARTAMENTO?</h2>
      <h2 class="subtitle">Não sabe como, e o quê plantar?</h2>
    </div>
  </section>
</template>

<script>
export default {

};
</script>


<style lang="scss" scoped>
@import "./../scss/style.scss";

.hero {
  display: block;
  padding: 4rem 0 9rem 0;
  background: rgba(0, 0, 0, 0.2);
  justify-content: center;
  flex-wrap: wrap;
  .title {
    position: relative;
    color: white;
    font-size: 5rem;
    font-weight: 700;
    text-align: center;
    font-family: $fontHero;
    opacity: 0;
    z-index: 0;
    animation: titleAnimation 36s linear infinite 0s;
    animation-iteration-count: 1;  
  }
  .subtitle {
    position: relative;
    color: white;
    font-size: 3.2rem;
    text-align: center;
    line-height: 0.7;
    font-family: $fontHero;
    opacity: 0;
    z-index: 0;
    animation: subtitleAnimation 36s ease-in infinite 0s;
    animation-iteration-count: 1; 
  }
  .verdeasy {
    position: absolute;
    left: 38%;
    color: white;
    font-size: 8rem;
    font-family: $fontBrand;
    opacity: 0;
    z-index: 0;
    animation: verdeasyAnimation 30s ease-in infinite 0s;
  }
}
@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    14% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
@keyframes subtitleAnimation { 
    6% { opacity: 0 }
    15% { opacity: 1 }
    22% { opacity: 1 }
    27% { opacity: 0 }
    100% { opacity: 0 }
}
@keyframes verdeasyAnimation { 
    27% { opacity: 0; animation-timing-function: ease-in }
    45% { opacity: 1 }
    80% { opacity: 1 }
    100% { opacity: 0 }
}

@media screen and (max-width: 1024px){
  .hero {
    margin: 0;
    .title {
      font-size: 4rem;
    }
    .subtitle {
      font-size: 3rem;
    }
  }
}

@media screen and (max-width: 768px){
  .hero {
    margin: 0;
  }

  .title {
    font-size: 2.5rem;
    line-height: 1;
  }

  .subtitle {
    font-size: 2rem;
    line-height: 1.5;
  }
}
</style>
