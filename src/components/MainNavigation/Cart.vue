<template>  
  <div class="Cart">  
    Cart
    {{$store.state.count}}
  </div>  
</template>  
  
<script> 
import store from '@/vuex/store'
export default {  
  name: 'Cart',  
  data() {  
    return {  
       
    };  
  },
  store
};  
</script>  
  
<style scoped>
	
</style>  