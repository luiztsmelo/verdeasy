<template>
  <section class="hero">
    <div>
      <div>
        <h2 class="msg">MORA EM APARTAMENTO?</h2>
      </div>
      <div>
        <h2 class="msg2">Não sabe como, e o quê plantar?</h2>
      </div>
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
  .msg {
    color: white;
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    color: $white;
  }
  .msg2 {
    color: white;
    font-size: 3rem;
    text-align: center;
    color: $white;
    line-height: 0.7;
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
