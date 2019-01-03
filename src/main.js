import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import "@babel/polyfill";
import axios from 'axios'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
// console.log(axios.defaults);
//在Vue的原型上添加方法
Vue.prototype.$axios = axios
// vue spa title
Vue.use(VueMeta)

window._vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
