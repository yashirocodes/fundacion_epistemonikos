import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

//Pagination library component
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  
  render: h => h(App)
}).$mount('#app')
