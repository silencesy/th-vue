<template>  
  <div class="home">  
    <mt-swipe class="home-banner-swiper" :auto="4000">
	  <mt-swipe-item v-for="item in homeData.figure">
	  	<img class="banner-swiper-img" :src="item.set_img" alt="">
	  </mt-swipe-item>
	</mt-swipe>
  </div>  
</template>  
  
<script>  
export default {  
  name: 'home',  
  data() {  
    return {  
       homeData: {}
    };  
  },
  mounted() {
  	var that = this;
  	that.$axios.post('http://api.mall.thatsmags.com/Api/Public/home')
	.then(function (response) {
		console.log(response);
		that.homeData = response.data.data;
	})
	.catch(function (error) {
		console.log(error);
	});
  }
};  
</script>  
  
<style scoped>
  .home-banner-swiper {
  	height: 300px;
  }
  .banner-swiper-img {
  	width: 100%;
  	height: auto;
  }
</style>  