import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import personal from '../views/personal/index.vue'
import organ from '../views/organ/index.vue'
import organMore from '../views/organ/organMore.vue'


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
    },
    {
      path: '/organ',
      name: 'organ',
      component: organ
    },
    {
      path: '/organ/more',
      name: 'organMore',
      component: organMore
    }
  ]
})
