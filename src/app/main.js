import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import { routes } from './../router';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
