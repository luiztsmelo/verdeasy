<template>
  <div id="add-blog">
    <h1>Adicionar Post</h1>

    <div class="submitted" v-if="submitted">
      <h1>Sucesso!</h1>
    </div>

    <form action="" v-if="!submitted">
      <label>Título</label>
      <input v-model.lazy="blog.title" type="text" required>
      <label>Conteúdo</label>
      
      <textarea v-model.lazy="blog.content" cols="30" rows="20"></textarea>

    </form>
    
    <div id="preview">
      <h2>Preview Post</h2>
      <h3>Título:</h3>
        <p>{{ blog.title }}</p>
      <h3>Conteúdo:</h3>
        <article>{{ blog.content }}</article>
    </div>

    <button @click.prevent="post">Submit</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        date: ''
      },
      submitted: false
    }
  },
  methods: {
    post() {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1;
      let yyyy = today.getFullYear();
        if (dd < 10) {
        dd = '0' + dd
      } 

      if (mm < 10) {
          mm = '0' + mm
      } 
      this.blog.date = dd + '/' + mm + '/' + yyyy;

      this.$http.post('https://verdeasy-d832a.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#add-blog {
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 100%;
  text-align: center;
  color: white;
  label {
    display: block;
    margin: .5rem 0 .5rem;
  }
  input {
    display: block;
    margin: auto;
    padding: .4rem;
    width: 40%;
  }
  textarea {
    display: block;
    margin: auto;
    padding: .4rem;
    width: 60%;
    outline: none;
  }
  #preview {
    margin: 5rem auto 1rem;
    width: 60%;
    padding: .5rem 1rem;
    background: white;
    color: black;
    text-align: left;
    border-radius: 20px;
    h2 {
      text-align: center;
    }
    h3 {
      font-weight: 500;
    }
  }
  button {
    margin: 0 auto 1rem;
    width: 11.7rem;
    height: 2.7rem;
    background-color: $offblack;
    border: none;
    font-size: 1.7rem;
    color: white;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    transition: all .1s ease;
    &:hover {
      background-color: rgb(60, 60, 60);
    }
    &:active {
      background-color: $green;
    }
  }
  .submitted {
    h1 {line-height: 0.4;}
  }
}
</style>
