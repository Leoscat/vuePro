import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/My'
import Home from '@/components/Home'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
