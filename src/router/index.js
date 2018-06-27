import Vue from 'vue'
import Router from 'vue-router'
// 主页
import BaseHome from '@/components/Home/BaseHome'
import GoodsDetails from '@/components/Pages/GoodsDetails'
// import CouponsList from '@/components/Pages/CouponsList'




// 主页tab栏
// import Home from '@/components/MainNavigation/Home'
// import Categories from '@/components/MainNavigation/Categories'
// import Guide from '@/components/MainNavigation/Guide'
// import Cart from '@/components/MainNavigation/Cart'
// import MyAccount from '@/components/MainNavigation/MyAccount'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  // mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        keepAlive: true
      },
      component: BaseHome,
      children: [
        { 
          path: '/',
          name: 'Home',
          component: () => import('@/components/MainNavigation/Home')
        },
        {
          path: '/Categories',
          name: 'Categories',
          component: () => import('@/components/MainNavigation/Categories')
        },
        {
          path: '/Guide',
          name: 'Guide',
          component: () => import('@/components/MainNavigation/Guide')
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: () => import('@/components/MainNavigation/Cart')
        },
        {
          path: '/MyAccount',
          name: 'MyAccount',
          component: () => import('@/components/MainNavigation/MyAccount')
        },
      ]
    },
    {
    	path: "/GoodsDetails/:GoodsId",
    	name: "GoodsDetails",
      meta: {
        keepAlive: false
      },
    	component: GoodsDetails
    },
    {
      path: "/CouponsList",
      name: "CouponsList",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/CouponsList')), 'CouponsList')
      }
    },
    {
      path: "/WishList/:GoodsId",
      name: "WishList",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/WishList')), 'WishList')
      }
    },
    {
      path: "/AddressBook/:GoodsId",
      name: "AddressBook",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/AddressBook')), 'AddressBook')
      }
    }
  ]
})
