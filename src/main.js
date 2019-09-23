import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'amfe-flexible'
import './common/stylus/index.styl'
import fastClick from 'fastclick'

Vue.config.productionTip = false
// Vue.use(VueAxios, axios)
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
