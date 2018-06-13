import Vue from 'vue'
import Router from 'vue-router'
// 主页
import BaseHome from '@/components/Home/BaseHome'

// 主页tab栏
// import Home from '@/components/MainNavigation/Home'
// import Categories from '@/components/MainNavigation/Categories'
// import Guide from '@/components/MainNavigation/Guide'
// import Cart from '@/components/MainNavigation/Cart'
// import MyAccount from '@/components/MainNavigation/MyAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseHome',
      component: BaseHome,
  //     children: [
		// 	{
		// 		path: '/',
		// 		component: Home
		// 	},
		// 	{
		// 		path: 'Categories',
		// 		component: Categories
		// 	},
		// 	{
		// 		path: 'Guide',
		// 		component: Guide
		// 	},
		// 	{
		// 		path: 'Cart',
		// 		component: Cart
		// 	},
		// 	{
		// 		path: 'MyAccount',
		// 		component: MyAccount
		// 	}
		// ]
    }
  ]
})
