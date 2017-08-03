import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import profile from '@/components/profile'
import portfolio from '@/components/portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    }
  ]
})
