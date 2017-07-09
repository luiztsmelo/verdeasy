import './firebase'
import Vue            from 'vue'
import VueRouter      from 'vue-router'
import VueResource    from 'vue-resource'
import VueFire        from 'vuefire'
import App            from './App'
import { routes }     from './../router'
import Meta           from 'vue-meta'

Vue.use(Meta)
Vue.use(VueResource)
Vue.use(VueFire)

Vue.config.productionTip = false

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