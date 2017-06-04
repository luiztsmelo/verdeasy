<template>
  <div class="hero">
    <div>
      <div>
        <h2 class="msg">Mora em apartamento?</h2>
      </div>
      <div>
        <h2 class="msg2">Não sabe como, e o quê plantar?</h2>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  
};
</script>


<style lang="scss">
@import "./../../scss/style.scss";

.hero {
  display: flex;
  padding-bottom: 8rem;
  background: rgba(30, 30, 30, 0.3);
  justify-content: center;
  flex-wrap: wrap;
}
  .msg {
    color: white;
    font-family: $fontHeading;
    font-size: 3.4rem;
    text-align: center;
  }
  .msg2 {
    color: white;
    font-family: $fontHeading;
    font-size: 2.3rem;
    text-align: center;
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
