<template>
  <div id="add-blog">
    
    <h1>Adicionar Post</h1>
    <form action="">
      <label for="">Título</label>
      <input v-model.lazy="blog.title" type="text" required>
      <label for="">Conteúdo</label>
      <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="15"></textarea>
    </form>
    
    <div id="preview">
      <h2>Preview Post</h2>
      <h3>Título:</h3>
        <p>{{ blog.title }}</p>
      <h3>Conteúdo:</h3>
        <p>{{ blog.content }}</p>
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
        content: ''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/style.scss";

#add-blog {
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
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
  }
  #preview {
    margin: 2rem auto 1rem;
    width: 60%;
    padding: .5rem 1rem;
    background: white;
    color: black;
    text-align: left;
    border-radius: 20px;
    h2 {
      text-align: center;
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
}
</style>
