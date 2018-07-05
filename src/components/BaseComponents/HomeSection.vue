<template>
	<div class="HomeSection">
		<div class="banner-img-box">
			<img :src="sectionData.image" alt="">
		</div>
		<div class="swipe-box">
			<swiper :options="swiperOption"  ref="baseSwiper">
				<swiper-slide class="goods-item" v-for="(item,index) in sectionData.list" :key="index">
					<router-link :to="{name: 'GoodsDetails', params: {GoodsId:item.id}}">
						<div class="img-box">
							<img v-lazy="item.set_img" alt="">
						</div>
						<div class="">
							<div class="line2 goods-name">{{item.goods_name}}</div>
							<div class="price">
								<div class="theme_color">￥{{item.goods_price}}</div>
								<div>{{item.goods_sale_price}}</div>
							</div>
						</div>
					</router-link>
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
import store from '../../vuex/store'
import { mapState } from 'vuex'
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
  	store,
	computed: {
		trigger() {
		  return this.$store.state.trigger;
		},
		swiper() {  
	      return this.$refs.baseSwiper.swiper;  
	    } 
	},
	watch: {
		trigger() {
		  var that = this;
		  if (that.trigger=="Home") {
		    console.log(1);
		    
		  }
		}
	},
  	methods: {
  		
  	}
	}
</script>
<style scoped>
	.HomeSection {
		background-color: #fff;
	}
	.swiper-container {
		padding-bottom: 35px;
	}
	.goods-item {
		box-sizing: border-box;
		border: 1px solid #dfdfdf;
		border-radius: 4px;
		overflow: hidden;
	}
	.goods-name {
		height: 38px;
		padding: 0 15px;
	}
	.banner-img-box {
		background-color: #e8e8e8;
		padding-top: 10px;
	}
	.banner-img-box img {
		width: 100%;
		height: auto;
		display: block;
	}
	.swipe-box {
		padding: 10px 15px 0px 15px;
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