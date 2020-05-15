import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import trust from '@/pages/trust'
import ipfs from '@/pages/ipfs'
import ipfsDetail from '@/pages/ipfsDetail'
import goods from '@/pages/goods'
import about from '@/pages/about'
import callme from '@/pages/callme'
import otherServe from '@/pages/otherServe'
import question from '@/pages/question'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/trust',
      name: 'trust',
      component: trust,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/ipfs',
      name: 'ipfs',
      component: ipfs,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/ipfsDetail',
      name: 'ipfsDetail',
      component: ipfsDetail,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/callme',
      name: 'callme',
      component: callme,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/otherServe',
      name: 'otherServe',
      component: otherServe,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },
    {
      path: '/question',
      name: 'question',
      component: question,
      meta: {
        title: '首页',
        requireAuth:false
      }
    },


  ]
})
