import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Demo from '@/views/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
