<template>
	<div class="goods" v-show="goodsData.goods_name">
		<GoodsSwiper :swiperData="goodsData.figure"/>
		<div class="title-info">
			<p class="name">{{goodsData.goods_name}}</p>
			<p class="price theme_color">￥{{goodsData.max_sale_price}}</p>
			<p class="price"><del>￥{{goodsData.max_price}}</del></p>
			<p>* This product ships to Mainland China only.(An extra shipping fee will be charged for HKSAR,MCSAR and other countries/regions)</p>
		</div>
		<mt-cell class="row-line" title="Specifications" is-link></mt-cell>
		<mt-cell class="row-line" title="Details"></mt-cell>
		<div class="content-info" v-html="goodsData.goods_content"></div>
	</div>
</template>
<script>
	import GoodsSwiper from "../BaseComponents/BaseSwiper";
	export default {
		name: 'goods',
		data() {
			return {
				goodsData: {}
			}
		},
		components: {
		    GoodsSwiper
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
	}
	.content-info >>> img {
		display: block;
		width: 100% !important;
		height: auto !important;
	}
</style>