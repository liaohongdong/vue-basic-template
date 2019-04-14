import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// import "@babel/polyfill";
import axios from 'axios'
import VueMeta from 'vue-meta'
import vSharp from 'v-sharp'

const FastClick = require('fastclick')
FastClick.attach(document.body)

console.log(vSharp)


Vue.config.productionTip = false
// console.log(axios.defaults);
//在Vue的原型上添加方法
Vue.prototype.$axios = axios
// vue spa title
Vue.use(VueMeta)
Vue.use(vSharp.Toast, {
  type: 'center',
  duration: 3000,
  wordWrap: true,
  width: '150px'
})

window._vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
