import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import personal from '../views/personal/index.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
