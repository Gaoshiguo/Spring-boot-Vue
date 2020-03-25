import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Axios from 'axios'
import VueAxios from 'vue-axios'
import AV from 'leancloud-storage'
import VueResource from 'vue-resource';
Vue.use(AV);
Vue.use({ Axios, VueAxios});
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueResource);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
