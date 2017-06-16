<template>
  <div id="single-blog">
    <div class="box">
      <h1 class="blog-title">{{ blog.title }}</h1>
      <article class="blog-article">{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://verdeasy-d832a.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
    });
  }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#single-blog {
  display: flex;
  flex-flow: column wrap;
  background: rgba(0, 0, 0, .2);
  .box {
    background-color: white;
    margin: .7rem auto;
    width: 60%;
    .blog-title {
    padding: 0 1rem;
    line-height: 1;
    font-size: 2rem;
    font-weight: 500;
    color: black;
    font-family: $fontHeading;
    }
    .blog-article {
      padding: 0 1rem 1rem;
      color: $offblack;
    }
  }
}
</style>
