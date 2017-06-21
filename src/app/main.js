import Vue            from 'vue';
import VueRouter      from 'vue-router';
import VueResource    from 'vue-resource';
import App            from './App';
import { routes }     from './../router';

Vue.use(VueResource);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
