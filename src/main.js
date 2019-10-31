import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import VueResource from 'vue-resource'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'amfe-flexible'
import './common/stylus/index.styl'
import fastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.interceptors.push(function(request, next) { // 拦截器
  // 跨域携带cookie
  request.credentials = true
  next()
})

// Vue.use(VueAxios, axios)
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
