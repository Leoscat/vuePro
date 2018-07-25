// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
Vue.use(VueRouter)

import { XHeader } from 'vux'
Vue.component('x-header', XHeader)

import { Tabbar, TabbarItem } from 'vux'
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)

import { ViewBox } from 'vux'
Vue.component('view-box', ViewBox)

import router from './router/index'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
