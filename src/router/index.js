import Vue from 'vue'
import Router from 'vue-router'
import Home from '.././components/home/home'
import NewsDetail from '.././components/news-detail/NewsDetail'

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
      path: '/NewsDetail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
