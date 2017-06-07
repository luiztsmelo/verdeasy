<template>
  <section class="hero">
    <div class="hero-info">
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
  display: flex;
  padding: 5rem 0 9rem 0;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  flex-wrap: wrap;
  .title {
    color: white;
    font-size: 5rem;
    font-weight: 700;
    text-align: center;
    font-family: $fontHero;
  }
  .subtitle {
    color: white;
    font-size: 3.2rem;
    text-align: center;
    line-height: 0.7;
    font-family: $fontHero;
  }
}

@media screen and (max-width: 1024px){
  .hero {
    margin: 0;
  }
  .title {
    font-size: 4rem;
  }

  .subtitle {
    font-size: 3rem;
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
