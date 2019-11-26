import Vue from 'vue'
import Router from 'vue-router'
import Home from '.././components/home/home'
import Collect from '.././components/collect/collect'
import NewsDetail from '.././components/news-detail/news-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/news-detail/:id',
      name: 'news-detail',
      component: NewsDetail
    }
  ]
})
