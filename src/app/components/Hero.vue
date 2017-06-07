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


<style lang="scss">
@import "./../../scss/style.scss";

.hero {
  display: flex;
  padding: 6rem;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  flex-wrap: wrap;

  .hero-info {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 0px 20px 20px 20px
  }

  .title {
    color: white;
    font-size: 5rem;
    font-weight: 700;
    text-align: center;
    color: $white;
    font-family: $fontHero;
  }

  .subtitle {
    color: white;
    font-size: 3.2rem;
    text-align: center;
    color: $white;
    line-height: 0.7;
    font-family: $fontHero;
  }
}

@media screen and (max-width: 1024px){
  .hero {
    margin: 0;
  }

  .msg {
    font-size: 4rem;
  }

  .msg2 {
    font-size: 3rem;
  }
}

@media screen and (max-width: 768px){
  .hero {
    margin: 0;
  }

  .msg {
    font-size: 2.5rem;
    line-height: 1;
  }

  .msg2 {
    font-size: 2rem;
    line-height: 1;
  }
}
</style>
