<template>
  <transition name="component-fade" mode="out-in">
    <div id="contato">
      <h1 class="contato-title">Sugestões, Críticas?</h1>

      <div class="submitted" v-if="submitted">
        <h2 class="submitted-text">Aviãozinho da mensagem enviado! Obrigado! :)</h2>
        <img class="submitted-img" src="./../../../static/utils/send.svg" alt="Mensagem enviada com sucesso!">
      </div>

      <form class="contato-form" v-if="!submitted"> 
        <h2 class="contato-subtitle">Sua opinião é muito importante para nós! Deixe seu recado!</h2>
        <label required>E-mail</label>
        <input v-model="contato.email" type="text" placeholder="Seu e-mail" required>
        <label>Mensagem</label>
        <textarea v-model="contato.mensagem" name="" id="" cols="57" rows="7" placeholder="Sua linda mensagem" required></textarea>
        <img class="contato-submit" src="./../../../static/utils/send.svg" alt="Enviar mensagem!" @click.prevent="postmsg">
      </form>  
    </div>
  </transition>  
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

.component-fade-enter-active,  {
  transition: $comptransition;
}
.component-fade-enter, .component-fade-leave-to, .component-fade-leave-active {
  opacity: 0;
}

#contato {
  display: flex;
  color: white;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  .contato-title {
    font-family: $fontHeading;
    line-height: .3;
  }
  .submitted {
    .submitted-img {
      width: 6rem;
      height: auto;
      animation-name: plane;
      animation-duration: 4s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    }
  }
  .contato-form {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    label {
      font-family: $fontMain;
      padding: .3rem 0;
    }
    input {
      width: 40%;
      border-radius: .7rem 0;
      border: none;
      padding: .2rem .5rem;
    }
    textarea {
      border-radius: .7rem 0;
      border: none;
      padding: .5rem;
      resize: none;
    }
    .contato-submit {
      cursor: pointer;
      width: 3.5rem;
      height: auto;
      transform: rotate(17deg);
      padding: .5rem 0 0 0;
      transition: transform .3s cubic-bezier(.23,1.51,.99,1.03);
      &:hover {
        transform: rotate(0deg);
      }
    }
  }
}

@keyframes plane {
  0% { transform: translateX(0rem)}
  100% { transform: translate(70rem, -70rem)}
}
</style>
