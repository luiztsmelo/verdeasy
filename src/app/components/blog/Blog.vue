<template>
  <transition name="blog-animation">
    <div id="blog">
      <div class="blog-card" v-for="blog in blogs">
        <router-link :to="'/blog/' + blog.id"><h1 class="blog-title">{{ blog.title }}</h1></router-link> 
        <article class="blog-article">{{ blog.content | snippet }}</article>
      </div>
    </div>
  </transition>  
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://verdeasy-d832a.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      let blogsArray = [];
      for (let key in data){
        data[key].id = key
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray
    });
  },
  filters: {
    snippet(value){
      return value.slice(1, 200) + '...';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/style.scss";

#blog {
  display: flex;
  flex-flow: column;
  background: $bgopacity;
  height: 100%;
  .blog-card {
    margin: .7rem auto;
    width: 60%;
    background-color: white;
    .blog-title {
      padding: 0 1rem;
      line-height: 1;
      font-weight: 500;
      font-size: $fontSizeBlogTitle;
      color: $grey;
      font-family: $fontHeading;
    }
    .blog-article {
      padding: 0 1rem 1rem;
      color: $offblack;
      font-size: $fontSizeBlogArticle;
    }
  }
}

.blog-animation-enter {
  opacity: 0;
}

.blog-animation-enter-active {
  transition: all 1.3s;
}

.blog-animation-leave-active {
  transition: all 1.3s;
  opacity: 0;
}
</style>
