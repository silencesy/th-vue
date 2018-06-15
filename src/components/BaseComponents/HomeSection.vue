<template>
	<div class="HomeSection">
		<div class="img-box">
			<img :src="sectionData.image" alt="">
		</div>
		<div class="swipe-box">
			<swiper :options="swiperOption"  ref="baseSwiper">
				<swiper-slide v-for="(item,index) in sectionData.list" :key="index">
					<img :src="item.set_img" alt="">
				</swiper-slide>  
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HomeSection',
		props: {
			sectionData: {
				type: Object,
				default: function () {  
			      return { message: 'hello' }  
			    }  
			}
		},
		data() {  
	    return {  
       	swiperOption: {  
       		slidesPerView: 3,
		      slidesPerColumn: 2,
		      spaceBetween: 30,
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      }
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
	.img-box img {
		width: 100%;
		height: auto;
	}
	.swipe-box {
		padding: 0 15px;
	}
	.swipe-box img {
		width: 100%;
	}
</style>