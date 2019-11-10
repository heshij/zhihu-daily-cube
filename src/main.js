import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'amfe-flexible'
import './common/stylus/index.styl'
import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import './register'

Vue.use(VueLazyLoad, {
  loading: require('./common/images/default.gif')
})

Vue.config.productionTip = false

Vue.use(VueResource)

// 此报错的vue-router版本是3.1.0，
// 而vue-router在3.1.0 版本的路由跳转使用的是 promise 的方式，可能是因为vue的官方人员没设计好而造成了BUG。
// 而方法二的npm i vue-router@3.0 -S 下载的是 3.0.x 的版本，路由跳转可能没有用到 promise ，所以可以解决此报错，
// 但使用的 3.0.x 版本的 vue-router 去引入方法三的 代码段，因可能此版本没用到 promise， 所以会报一下错误：
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 拦截器
Vue.http.interceptors.push(function (request, next) {
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
