import Vue from 'vue'
import Router from 'vue-router'
// 主页
import BaseHome from '@/components/Home/BaseHome'
// import GoodsDetails from '@/components/Pages/GoodsDetails'
// import CouponsList from '@/components/Pages/CouponsList'




// 主页tab栏
import Home from '@/components/MainNavigation/Home'
import Categories from '@/components/MainNavigation/Categories'
import Guide from '@/components/MainNavigation/Guide'
import Cart from '@/components/MainNavigation/Cart'
import MyAccount from '@/components/MainNavigation/MyAccount'
// Router.prototype.goBack = function () { 
// 　　this.isBack = true
// 　　window.history.go(-1)
// }

Router.prototype.goBack = function () {
  this.fallback = true;
  // window.history.go(-1);
}
Vue.use(Router)

var router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
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
          component: Home
          // meta: {
          //   keepAlive: true
          // },
          // component(resolve) {
          //   require.ensure([], () => resolve(require('@/components/MainNavigation/Home')), 'Home')
          // }
        },
        {
          path: '/Categories',
          name: 'Categories',
          // meta: {
          //   keepAlive: false
          // },
          component: Categories
          // component(resolve) {
          //   require.ensure([], () => resolve(require('@/components/MainNavigation/Categories')), 'Categories')
          // }
        },
        {
          path: '/Guide',
          name: 'Guide',
          // meta: {
          //   keepAlive: false
          // },
          component: Guide
          // component(resolve) {
          //   require.ensure([], () => resolve(require('@/components/MainNavigation/Guide')), 'Guide')
          // }
        },
        {
          path: '/Cart',
          name: 'Cart',
          // meta: {
          //   keepAlive: false
          // },
          component: Cart
          // component(resolve) {
          //   require.ensure([], () => resolve(require('@/components/MainNavigation/Cart')), 'Cart')
          // }
        },
        {
          path: '/MyAccount',
          name: 'MyAccount',
          // meta: {
          //   keepAlive: false
          // },
          component: MyAccount
          // component(resolve) {
          //   require.ensure([], () => resolve(require('@/components/MainNavigation/MyAccount')), 'MyAccount')
          // }
        }
      ]
    },
    {
      path: "/HomeSearch",
      name: "HomeSearch",
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Search/HomeSearch')), 'HomeSearch')
      }
    },
    {
    	path: "/GoodsDetails",
    	name: "GoodsDetails",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/GoodsDetails/GoodsDetails')), 'GoodsDetails')
      }
    },
    {
      path: "/CouponsList",
      name: "CouponsList",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Coupons/CouponsList')), 'CouponsList')
      }
    },
    {
      path: "/WishList",
      name: "WishList",
      meta: {
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/WishList/WishList')), 'WishList')
      }
    },
    {
      path: "/AddressBook",
      name: "AddressBook",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Address/AddressBook')), 'AddressBook')
      }
    },
    {
      path: "/Contact",
      name: "Contact",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Contact/Contact')), 'Contact')
      }
    },
    {
      path: "/CouponsGoods",
      name: "CouponsGoods",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Coupons/CouponsGoods')), 'CouponsGoods')
      }
    },
    {
      path: "/Login",
      name: "Login",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Login/Login')), 'Login')
      }
    },
    {
      path: "/OrderConfirmation",
      name: "OrderConfirmation",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Order/OrderConfirmation')), 'OrderConfirmation')
      }
    },
    {
      path: "/Pay",
      name: "Pay",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Pay/Pay')), 'Pay')
      }
    },
    {
      path: "/Unpaid",
      name: "Unpaid",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Pay/Unpaid')), 'Unpaid')
      }
    },
    {
      path: "/Paid",
      name: "Paid",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Pay/Paid')), 'Paid')
      }
    },
    {
      path: "/ArticleDetail",
      name: "ArticleDetail",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Article/ArticleDetail')), 'ArticleDetail')
      }
    },
    {
      path: "/AddAddress",
      name: "AddAddress",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Address/AddAddress')), 'AddAddress')
      }
    },
    {
      path: "/SignUp",
      name: "SignUp",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Login/SignUp')), 'SignUp')
      }
    },
    {
      path: "/RePassword",
      name: "RePassword",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Login/RePassword')), 'RePassword')
      }
    },
    {
      path: "/ForgotPassword",
      name: "ForgotPassword",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Login/ForgotPassword')), 'ForgotPassword')
      }
    },
    {
      path: "/BindMobile",
      name: "BindMobile",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Login/BindMobile')), 'BindMobile')
      }
    },
    {
      path: "/GoodsList",
      name: "GoodsList",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/GoodsList/GoodsList')), 'GoodsList')
      }
    },
    {
      path: "/groupBuying",
      name: "groupBuying",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/groupBuying/groupBuying')), 'groupBuying')
      }
    },
    {
      path: "/ShopHome",
      name: "ShopHome",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Shop/ShopHome')), 'ShopHome')
      }
    },
    {
      path: "/Invest",
      name: "Invest",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/Invest')), 'Invest')
      }
    },
    {
      path: "/InvestEn",
      name: "InvestEn",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/InvestEn')), 'InvestEn')
      }
    },
    {
      path: "/Cost",
      name: "Cost",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/Cost')), 'Cost')
      }
    },
    {
      path: "/CostEn",
      name: "CostEn",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CostEn')), 'CostEn')
      }
    },
    {
      path: "/CaseFirst",
      name: "CaseFirst",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CaseFirst')), 'CaseFirst')
      }
    },
    {
      path: "/CaseSecond",
      name: "CaseSecond",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CaseSecond')), 'CaseSecond')
      }
    },
    {
      path: "/CaseThird",
      name: "CaseThird",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CaseThird')), 'CaseThird')
      }
    },
    {
      path: "/CaseFirstEn",
      name: "CaseFirstEn",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CaseFirstEn')), 'CaseFirstEn')
      }
    },
    {
      path: "/CaseSecondEn",
      name: "CaseSecondEn",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CaseSecondEn')), 'CaseSecondEn')
      }
    },
    {
      path: "/CaseThirdEn",
      name: "CaseThirdEn",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Invest/CaseThirdEn')), 'CaseThirdEn')
      }
    },
    {
      path: "/AddressTest",
      name: "AddressTest",
      meta: {
        keepAlive: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Address/AddressTest')), 'AddressTest')
      }
    },
    {
      path: "/ShopGoodsList",
      name: "ShopGoodsList",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Shop/ShopGoodsList')), 'ShopGoodsList')
      }
    },
    {
      path: "/ShopSearch",
      name: "ShopSearch",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Shop/ShopSearch')), 'ShopSearch')
      }
    },
    {
      path: "/ShopList",
      name: "ShopList",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Shop/ShopList')), 'ShopList')
      }
    },
    {
      path: "/PersonalInfo",
      name: "PersonalInfo",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/PersonalInfo/PersonalInfo')), 'PersonalInfo')
      }
    },
    {
      path: "/OrderDetailsPaid",
      name: "OrderDetailsPaid",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Order/OrderDetailsPaid')), 'OrderDetailsPaid')
      }
    },
    {
      path: "/OrderDetailsUnpaid",
      name: "OrderDetailsUnpaid",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Order/OrderDetailsUnpaid')), 'OrderDetailsUnpaid')
      }
    },
    {
      path: "/OrderDetailsInProress",
      name: "OrderDetailsInProress",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Order/OrderDetailsInProress')), 'OrderDetailsInProress')
      }
    },
    {
      path: "/OrderDetailsDelivered",
      name: "OrderDetailsDelivered",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Order/OrderDetailsDelivered')), 'OrderDetailsDelivered')
      }
    },
    {
      path: "/OrderList",
      name: "OrderList",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Order/OrderList')), 'OrderList')
      }
    },
    {
      path: "/alipay",
      name: "alipay",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Pay/alipay')), 'alipay')
      }
    },
    {
      path: "/logistics",
      name: "logistics",
      meta: {
        keepAlive: false,
        MustLogin: true
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/Logistics/Logistics')), 'alipay')
      }
    },
    {
      path: "/error",
      name: "error",
      meta: {
        keepAlive: false
      },
      component(resolve) {
        require.ensure([], () => resolve(require('@/components/Pages/error/error')), 'error')
      }
    }
  ]
})

// 如果去的页面必须登录
router.beforeEach((to, from, next) => {
  if (to.meta.MustLogin) {
    var token = localStorage.getItem("token") || null;
    if (token) {
      next();
    } else {
      localStorage.setItem('goback',window.location.href);
      next('/Login');
    }
  } else {
    next();
  }

  
})
export default router;


