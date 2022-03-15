// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'
import store from './store'
import api from './api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

console.log('环境变量', process.env.NODE_ENV)

Vue.use(store)
Vue.use(ElementUI);

Vue.prototype.$request = request
Vue.prototype.$storage = storage
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
