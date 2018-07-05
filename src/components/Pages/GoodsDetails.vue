<template>
	<div class="goods" v-show="goodsData.goods_name">
		<GoodsSwiper :swiperData="goodsData.figure"/>
		<div class="title-info">
			<p class="name">{{goodsData.goods_name}}</p>
			<p class="price theme_color">￥{{goodsData.max_sale_price}}</p>
			<p class="price"><del>￥{{goodsData.max_price}}</del></p>
			<p>* This product ships to Mainland China only.(An extra shipping fee will be charged for HKSAR,MCSAR and other countries/regions)</p>
		</div>
		<mt-cell class="row-line" @click="showBuy" title="Specifications" is-link></mt-cell>
		<mt-cell class="row-line" title="Details"></mt-cell>
		<div class="content-info" v-html="goodsData.goods_content"></div>
		<div class="bottom-banner">
			<div class="features">
				<div class="icon-box">
					<i class="iconfont icon-shanghu1"></i>
					<div>Home</div>
				</div>
				<div class="icon-box">
					<i class="iconfont icon-kefu"></i>
					<div>Chat</div>
				</div>
				<div class="icon-box">
					<i class="iconfont icon-shoucang1"></i>
					<div>Save</div>
				</div>
			</div>
			<div class="cart-buy">
				<div @click="showBuy">Add To Cart</div>
				<div @click="showBuy">Buy Now</div>
			</div>
		</div>
		<div class="layer-container">
			<div v-show="layerBox" class="layer-bg" @click="close"></div>
			<div class="buy-goods-info" :style="{bottom: bottom}"></div>
		</div>
		
		<BackToTop />
	</div>
</template>
<script>
	import GoodsSwiper from "../BaseComponents/BaseSwiper";
	import BackToTop from "../BaseComponents/BackToTop";
	export default {
		name: 'goods',
		data() {
			return {
				goodsData: {},
				layerBox: false,
				bottom: "-700px"
			}
		},
		components: {
		    GoodsSwiper,
		    BackToTop
		},
		mounted() {
  		console.log(this.$route.params.GoodsId);
  		this.getData();
  	},
  	methods: {
  		getData() {
  			let that = this;
  			that.$http.get('Api/Archive/getDetail',{
	          params: {id:that.$route.params.GoodsId}
	        })
	        .then(function (response) {
	        	console.log(response);
	          that.goodsData = response.data.data;
	        })
	        .catch(function (error) {
	          console.log(error);
	        });
  		},
  		go() {
  			this.$router.go(-1);
  		},
  		showBuy() {
  			this.layerBox = true;
  			this.bottom = 0;
  		},
  		close() {
  			this.layerBox = false;
  			this.bottom = "-700px";
  		}
  	}
	}
</script>
<style scoped>
	.goods {
		width: 100%;
		background-color: #E8E8E8;
	}
	.title-info {
		margin-top: 10px;
		background-color: #fff;
	}
	.name {
		font-weight: 900;
		font-size: 18px;
	}
	.price del {
		font-size: 12px;
	}
	.title-info {
		padding: 15px;
	}
	.row-line {
		margin-top: 10px;
	}
	.mint-cell:last-child {
		background-image: none;
	}
	.content-info {
		border-top: 1px solid #dfdfdf;
		padding: 10px;
		background-color: #fff;
		margin-bottom: 50px;
	}
	.content-info >>> img {
		display: block;
		width: 100% !important;
		height: auto !important;
	}
	.bottom-banner {
		height: 50px;
		max-width: 750px;
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		top: auto;
		right: 0;
		margin: auto;
		display: flex;
		box-shadow: 0 0 2px #dedede;
		z-index: 1;
		cursor: pointer;
	}
	.bottom-banner > div {

		height: 50px;
		line-height: 50px;
	}
	.bottom-banner .features {
		display: flex;
		flex: 1;
	}
	.bottom-banner .features .icon-box {
		height: 50px;
		text-align: center;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.icon-box i {
		color: #919191;
		height: 25px;
		line-height: 32px;
		font-size: 22px;
	}
	.icon-box div {
		height: 25px;
		line-height: 25px;
		text-align: center;
		font-size: 12px;
	}
	.bottom-banner .cart-buy {
		display: flex;
		flex: 1;
	}
	.bottom-banner .cart-buy > div {
		text-align: center;
		color: #fff;
		font-size: 16px;
	}
	.bottom-banner .cart-buy > div:nth-child(1) {
		background-color: #f6b12b;
		flex: 1.3;
	}
	.bottom-banner .cart-buy > div:nth-child(2) {
		background-color: #f6442b;
		flex: 1;
	}
	.layer-bg {
		width: 750px;
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(0,0,0,0.45);
		z-index: 100;
	}
	.buy-goods-info {
		position: fixed;
		height: 350px;
		width: 750px;
		background-color: red;
		left: 0;
		bottom: '-700px';
		top: auto;
		right: 0;
		margin: auto;
		z-index: 200;
		transition: all 0.3s ease; 
	}
</style>