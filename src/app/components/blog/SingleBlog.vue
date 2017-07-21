<template>
  <transition name="component-fade" mode="in-out">
    <div id="single-blog">
      <div class="body">
        <h1 class="blog-title">{{ blog.title }}</h1>
        <article class="blog-article">{{ blog.content }}</article>
      </div>
    </div>
  </transition>   
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

.component-fade-enter-active,  {
  transition: $comptransition;
}
.component-fade-enter, .component-fade-leave-to, .component-fade-leave-active {
  opacity: 0;
}

#single-blog {
  display: flex;
  flex-flow: column wrap;
  .body {
    background-color: $offwhite;
    margin: .7rem auto;
    width: 60%;
    .blog-title {
    padding: 0 1rem;
    line-height: 1;
    font-size: $fontSizeBlogTitle;
    font-weight: 500;
    color: $grey;
    font-family: $fontHeading;
    text-transform: uppercase;
    }
    .blog-article {
      padding: 0 1rem 1rem;
      color: $offblack;
      font-size: $fontSizeBlogArticle;
    }
  }
}
</style>
