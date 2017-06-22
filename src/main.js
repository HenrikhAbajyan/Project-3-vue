// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// Config vue
Vue.config.productionTip = false
Vue.use(VueRouter);

// Components
import App from './App';
import Home from './Home/Home';
import Products from './Products/Products';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products }
  ]
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
