<template>  
  <div class="Categories">  
    Categories
    123123
  </div>  
</template>  
  
<script>  
export default {  
  name: 'Categories',  
  data() {  
    return {  
       
    };  
  },
  mounted() {
  	var that = this;
  	that.$axios.post('http://api.mall.thatsmags.com/Api/Public/home')
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
  }
};  
</script>  
  
<style scoped>
	
</style>  