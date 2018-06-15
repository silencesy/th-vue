<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {  
    return {  
      
    };  
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    /*background: #E8E8E8;*/
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
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .4s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity 0;
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
  /*重置轮播图焦点样式*/
  .swiper-pagination-bullet {
    width: 10px;
    height: 2px;
    display: inline-block;
    border-radius: 0;
    /*background: #000;*/
    /*opacity: 0.2;*/
  }
  .swiper-pagination-bullet-active {
    background-color: #f24827;
    width: 18px;
    /*height: 4px;*/
  }
</style>
