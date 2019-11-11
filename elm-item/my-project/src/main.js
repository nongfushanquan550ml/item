import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import store from './stores'
// Require dependencies
// var Vue = require('vue');
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);
// axios.defaults.headers.post['Content-Type'] = 'text/plain';


Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
