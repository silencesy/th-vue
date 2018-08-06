<template>
	<div class="BaseSwiper">
		<swiper :options="swiperOption"  ref="baseSwiper">
			<swiper-slide v-for="(item,index) in swiperData" :key="index">
				<div v-if="item.url">
					<!-- <router-link :to='item.url'> -->
					<a :href="[item.url]">
						<img :src="item.pic" alt="">
					</a>
						
					<!-- </router-link> -->
				</div>
				<div v-if="!item.url">
					<img :src="item" alt="">
				</div>
				
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
				loop: true
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
.BaseSwiper img {
	width: 100%;
	display: block;
}

</style>