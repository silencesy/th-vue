<template>
	<div class="HomeSection">
		<div class="img-box">
			<img :src="sectionData.image" alt="">
		</div>
		<div class="swipe-box">
			<swiper :options="swiperOption"  ref="baseSwiper">
				<swiper-slide class="goods-item" v-for="(item,index) in sectionData.list" :key="index">
					<div class="img-box">
						<img :src="item.set_img" alt="">
					</div>
					<div class="">
						<div class="line2 goods-name">{{item.goods_name}}</div>
						<div class="price">
							<div>￥{{item.goods_price}}</div>
							<div>{{item.goods_sale_price}}</div>
						</div>
					</div>
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
			      spaceBetween: 10,
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
	.goods-item {
		box-sizing: border-box;
		border: 1px solid #dfdfdf;
		border-radius: 4px;
		overflow: hidden;
	}
	.goods-name {
		min-height: 34px;
		padding: 0 15px;
	}
	.img-box img {
		width: 100%;
		height: auto;
	}
	.swipe-box {
		padding: 10px 15px 15px 15px;
	}
	.swipe-box img {
		width: 100%;
	}
	.price {
		display: flex;
	}
	.price > div {
		flex: 1;
		text-align: center;
		padding-bottom: 8px;
	}
</style>