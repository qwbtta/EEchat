import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Rem from './utils/rem';
import axios from "axios"


Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.prototype.axios = axios

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

Rem.setFontSize();