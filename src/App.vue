<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <keep-alive>  
        <router-view class="Router" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view class="Router" v-if="!$route.meta.keepAlive"></router-view>
　　 </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {  
    return {  
      transitionName: 'slide-left'
    };  
  },
  watch: {
  '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }　　　
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #222;
  }
  a {
    text-decoration: none;
    color: #222;
  }
  .iconfont {
    font-size: 16px;
  }
  .theme_color {
    color: #f24827;
  }
  .line2 {
    display:-webkit-box;
    overflow:hidden;
    white-space:normal!important;
    text-overflow:ellipsis;
    word-wrap:break-word;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .line3 {
    display:-webkit-box;
    overflow:hidden;
    white-space:normal!important;
    text-overflow:ellipsis;
    word-wrap:break-word;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }
  body {
    background-color: #E8E8E8;
  }
  #app {
    max-width: 750px;
    margin: 0 auto;
  }
  .line2 {
    display:-webkit-box;
    overflow:hidden;
    white-space:normal!important;
    text-overflow:ellipsis;
    word-wrap:break-word;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .line3 {
    display:-webkit-box;
    overflow:hidden;
    white-space:normal!important;
    text-overflow:ellipsis;
    word-wrap:break-word;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 2px;
    display: inline-block;
    border-radius: 0;
    transition: all 0.2s ease;
  }
  .swiper-pagination-bullet-active {
    background-color: #f24827;
    width: 18px;
  }
  .clearfix:before,.clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .clearfix {
    zoom: 1;
  }
  .Router {
    position: absolute;
    max-width: 750px;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    margin: auto;
    transition: all .4s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
