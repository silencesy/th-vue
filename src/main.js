// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// axios封装（请求拦截 响应拦截 错误统一处理）
import http from "./utils/http"

// 自定义工具库
import utils from "./utils/utils"

// api地统一址入口
import urls from "./utils/interface"
Vue.use(urls);

console.log(router);
Vue.use(Vuex);
Vue.use(http);
Vue.use(utils);

//fastClick (消除移动端300毫秒延迟)
import FastClick from 'fastclick'
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach(document.body);
	}, false);
}

// 轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// mint-ui框架
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'


// 图片懒加载
Vue.use(Mint, {
  lazyload: {
    preLoad: 5000,
    error: 'http://api.mall.thatsmags.com/Public/ckfinder/images/grey.jpg',
    loading: '',
    attempt: 1,
    filter: {
      webp(listener, options) {
      	
      },
    },
  },
});

// rem
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      screenWidth: document.documentElement.clientWidth || 0,
      screenHeight: document.documentElement.clientHeight,
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    back(url) {
      this.$router.back()
    },
    //返回首页
    toHome() {
      router.goBack("/")
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
