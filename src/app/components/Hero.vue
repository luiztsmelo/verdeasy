<template>
  <div class="hero">
    <h2 class="verdeasy">VERDEASY</h2>
    <h2 class="title">MORA EM APARTAMENTO?</h2>
    <h2 class="subtitle">Não sabe como, e o quê plantar?</h2>
  </div>
</template>

<script>
export default {

};
</script>


<style lang="scss" scoped>
@import "./../scss/style.scss";

.hero {
  display: flex;
  flex-direction: column;
  padding: 0 0 7rem 0;
  
  background: rgba(0, 0, 0, 0.4);
  .title {
    color: white;
    font-size: 4.5rem;
    text-align: center;
    font-family: $fontHero;
    line-height: 0.7;
    opacity: 0;
    animation: titleAnimation 36s linear infinite 0s;
    animation-iteration-count: 1;  
  }
  .subtitle {
    color: white;
    font-size: 3rem;
    text-align: center;
    line-height: 0.7;
    font-family: $fontHero;
    opacity: 0;
    animation: subtitleAnimation 36s ease-in infinite 0s;
    animation-iteration-count: 1; 
  }
  .verdeasy {
    text-align: center;
    color: white;
    font-size: 6rem;
    font-family: $fontBrand;
    line-height: 0;
    opacity: 0;
    transform: translateY(12.3rem);
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
    .title {
      font-size: 2.5rem;
      line-height: 1;
    }
    .subtitle {
      font-size: 2rem;
      line-height: 1.5;
    }
    .verdeasy {
      font-size: 4rem;
    }
  }
}
</style>
