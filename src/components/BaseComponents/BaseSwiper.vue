<template>
	<div class="BaseSwiper">
		<swiper :options="swiperOption"  ref="baseSwiper">
			<swiper-slide v-for="(item,index) in swiperData" :key="index">
				<img :src="item.set_img" alt="">
			</swiper-slide>  
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'BaseSwiper',
		props: {
			swiperData: {
				type: Array,
				default: function () {  
			      return []
			    }  
			}
		},
		data() {  
	    return {  
       	swiperOption: {  
       		
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      loop: true,
        }  
	    };  
  	},
  	computed: {  
	    swiper() {  
	      return this.$refs.baseSwiper.swiper;  
	    }  
  	}
	}
</script>
<style scoped>
.nav-swiper img {
	width: 100%;
}
</style>