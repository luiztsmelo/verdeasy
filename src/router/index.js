import Vue from 'vue';
import Router from 'vue-router';

import Sobre from '../app/components/Sobre.vue';
import Blog from '../app/components/Blog.vue';

Vue.use(Router);

export const routes = [
  { path: '/sobre', component: Sobre },
  { path: '/blog', component: Blog },
];
