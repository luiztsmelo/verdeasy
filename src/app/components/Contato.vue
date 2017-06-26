<template>
  <div id="contato">
    <h1 class="contato-title">Sugestões, Críticas?</h1>

    <div class="submitted" v-if="submitted">
      <h2 class="submitted-text">Mensagem enviada com sucesso!</h2>
      <img class="submitted-img" src="./../../../static/utils/pomba.svg" alt="Mensagem enviada com sucesso!">
    </div>

    <form class="contato-form" v-if="!submitted"> 
      <h2 class="contato-subtitle">Sua opinião é muito importante para nós! Deixe seu recado!</h2>
      <label required>E-mail</label>
      <input v-model="contato.email" type="text" placeholder="Seu e-mail" required>
      <label>Mensagem</label>
      <textarea v-model="contato.mensagem" name="" id="" cols="57" rows="7" placeholder="Sua mensagem" required></textarea>
      <img class="contato-submit" src="./../../../static/utils/contato.svg" alt="Enviar mensagem!" @click.prevent="postmsg">
    </form>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      contato: {
        email: '',
        mensagem: ''
      },
      submitted: false
    }
  },
  methods: {
    postmsg() {
      this.$http.post('https://verdeasy-d832a.firebaseio.com/contato.json', this.contato).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

#contato {
  display: flex;
  color: white;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  .contato-title {
    font-family: $fontHeading;
    line-height: 0;
  }
  .submitted {
    .submitted-img {
      width: 10rem;
      height: auto;
    }
  }
  .contato-form {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .contato-subtitle {

   }
    label {
      font-family: $fontMain;
      padding: .8rem 0 0 0;
    }
    .contato-submit {
      cursor: pointer;
      width: 4rem;
      height: auto;
    }
  }
}

</style>
