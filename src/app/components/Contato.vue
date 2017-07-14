<template>
  <transition name="component-fade" mode="out-in">
    <div id="contato">
      <h1 class="contato-title">Sugestões, Críticas?</h1>

      <div class="submitted" v-if="submitted">
        <h2 class="submitted-text">Obrigado! <img class="submitted-img-smile" src="./../../../static/utils/happy.svg" alt=""></h2>
        
        <img class="submitted-img" src="./../../../static/utils/send.svg" alt="Mensagem enviada com sucesso!">
      </div>

      <form class="contato-form" v-if="!submitted"> 
        <h2 class="contato-subtitle">Sua opinião é muito importante para nós! Deixe seu recado!</h2>
        <label required>E-mail</label>
        <input v-model="contato.email" type="text" placeholder="Seu e-mail" required>
        <label>Mensagem</label>
        <textarea v-model="contato.mensagem" cols="57" rows="7" placeholder="Sua linda mensagem" required></textarea>
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
        mensagem: '',
        dia: '',
        hora: ''
      },
      submitted: false
    }
  },
  methods: {
    postmsg() {
      let dd = new Date().getDate();
      let mm = new Date().getMonth() + 1;
      let yyyy = new Date().getFullYear();
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      if (dd < 10) {
        dd = '0' + dd
      } 
      if (mm < 10) {
          mm = '0' + mm
      } 
      if (hour < 10) {
        hour = '0' + hour
      } 
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      this.contato.dia = dd + '/' + mm + '/' + yyyy;
      this.contato.hora = hour + ':' + minutes

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
  color: $offwhite;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  .contato-title {
    font-family: $fontHeading;
    line-height: .3;
    text-transform: uppercase;
  }
  .submitted {
    .submitted-img {
      width: 6rem;
      height: auto;
      animation-name: plane;
      animation-duration: 2.2s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(1.000, -0.050, 1.000, 0.965);
    }
    .submitted-img-smile {
      width: 1.8rem;
      height: auto;
    }
    .submitted-text {
      margin-top: 7rem;
      animation-name: thanks;
      animation-duration: 5s;
      animation-fill-mode: forwards;
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
      background-color: $honeydew;
      color: $grey;
      width: 40%;
      border-radius: .3rem;
      border: none;
      padding: .2rem .5rem;
    }
    textarea {
      background-color: $honeydew;
      color: $grey;
      border-radius: .3rem;
      border: none;
      padding: .5rem;
      resize: none;
    }
    .contato-subtitle {
      margin-top: 2rem;
    }
    .contato-submit {
      cursor: pointer;
      width: 3.7rem;
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
  60% { transform: translate(140rem, -70rem)}
  100% { transform: translate(100rem, -70rem)}
}
@keyframes thanks {
  0% { opacity: 0}
  100% { opacity: 1}
}
</style>
