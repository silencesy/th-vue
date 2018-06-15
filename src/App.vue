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
  html,body {
    margin: 0;
    padding: 0;
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

</style>
