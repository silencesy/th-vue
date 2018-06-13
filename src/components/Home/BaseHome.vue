<template>
  <div id="home">
    <!-- <router-view/> -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="Home">
        <Home />
      </mt-tab-container-item>
      <mt-tab-container-item id="Categories">
        <Categories />
      </mt-tab-container-item>
      <mt-tab-container-item id="Guide">
        <Guide />
      </mt-tab-container-item>
      <mt-tab-container-item id="Cart">
        <Cart />
      </mt-tab-container-item>
      <mt-tab-container-item id="MyAccount">
        <MyAccount />
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed> 
      <mt-tab-item id="Home">
        <img slot="icon" :src="selected=='Home'?'static/images/common/home-cover.png':'static/images/common/home.png'">
        Home
      </mt-tab-item>
      <mt-tab-item id="Categories">  
        <img slot="icon" :src="selected=='Categories'?'static/images/common/category-cover.png':'static/images/common/Category.png'">  
        Categories
      </mt-tab-item>
      <mt-tab-item id="Guide">  
        <img slot="icon" :src="selected=='Guide'?'static/images/common/gudie-cover.png':'static/images/common/gudie.png'">  
        Guide  
      </mt-tab-item>
      <mt-tab-item id="Cart"> 
        <img slot="icon" :src="selected=='Cart'?'static/images/common/cart-cover.png':'static/images/common/cart.png'">  
        Cart
      </mt-tab-item>
      <mt-tab-item id="MyAccount">  
        <img slot="icon" :src="selected=='MyAccount'?'static/images/common/me-cover.png':'static/images/common/me.png'">  
        My Account
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Home from '../MainNavigation/Home'
export default {
  name: 'home',
  data() {  
    return {  
      selected: 'Home'  
    };  
  },
  components: {
    Home,
    //懒加载其他页面
    Home: r => { require.ensure([], () => r(require('../MainNavigation/Home')), 'Home') },
    Categories: r => { require.ensure([], () => r(require('../MainNavigation/Categories')), 'Categories') },
    Guide: r => { require.ensure([], () => r(require('../MainNavigation/Guide')), 'Guide') },
    Cart: r => { require.ensure([], () => r(require('../MainNavigation/Cart')), 'Cart') },
    MyAccount: r => { require.ensure([], () => r(require('../MainNavigation/MyAccount')), 'MyAccount') },
  }
}
</script>

<style>
  body {
    padding-bottom: 65px;
  }
  .mint-tabbar {
    background-image: none;
    background-color: #fff;
    -webkit-box-shadow: 0 0 2px #dedede;
    box-shadow: 0 0 2px #dedede;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    color: #f24827;
    background-color: #fff;
  }

</style>
