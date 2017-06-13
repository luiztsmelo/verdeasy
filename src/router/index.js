import Vue from 'vue';
import Router from 'vue-router';

import Plants from '../app/components/Plants.vue';
import Sobre from '../app/components/Sobre.vue';
import Blog from '../app/components/Blog.vue';
import AddBlog from '../app/components/AddBlog.vue';


Vue.use(Router);

export const routes = [
  { path: '/', component: Plants },
  { path: '/sobre', component: Sobre },
  { path: '/blog', component: Blog },
  { path: '/addblog', component: AddBlog },
];
