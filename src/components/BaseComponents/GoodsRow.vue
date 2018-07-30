<template>
	<div class="GoodRow">
		<slot name="banner-img"></slot>
		<ul class="goods-container" :style="{backgroundColor:backgroundColor}">
			<li class="goods-item" v-for="(item,index) in goodsData" :key="index" :style="{width: width}">
				<router-link :to="{name: 'GoodsDetails', params: {id:item.id}}">
					<div class="img-box">
						<img v-lazy="item.pic" alt="">
					</div>
					<div class="good-info">
						<div class="goods-name line2">
							{{item.title}}
						</div>
						<div class="goods-price">
							<div class="theme_color">
								￥{{item.price}}
							</div>
							<div>
								<del>{{item.coupon_price}}</del>
							</div>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'GoodRow',
	props: {
		goodsData: {
			type: Array,
			default: function () {  
		      return []  
		    } 
		},
		Columns: {
			type: Number,
			default: 3
		},
		backgroundColor: {
			type: String,
			default: '#fff'
		}
	},
	data() {  
    return {  
     	width: 0
    }  
	},
	mounted() {
		this.width = (100-this.Columns*2.6) / this.Columns + "%";
		// console.log();
	}
}
</script>
<style scoped>
	.banner-img-box {
		background-color: #eee;
		padding-top: 10px;
	}
	.banner-img {
		width: 100%;
	    height: auto;
	    display: block;
	}
	img {
		width: 100%;
		height: auto;
		display: block;
	}
	.goods-container,.goods-item {
		list-style: none;
	}
	.goods-container {
		box-sizing: border-box;
		font-size: 0;
	    display: block;
	    width: 100%;
	    white-space: normal;
	    position: relative;
	    margin-top: 0;
	    margin-bottom: 0;
	    background-color: #fff;
	    padding: 10px;
	}

	.goods-item {
		position: relative;
		font-size: 17px;
	    display: inline-block;
	    text-align: center;
	    vertical-align: middle;
	    background: 0 0;
	    box-sizing: border-box;
	    padding: 5px;
	    border: 1px solid #dfdfdf;
	    border-radius: 4px;
	    margin: 1.3%;
		background-color: #fff;
	}
	.goods-name {
		height: 38px;
		margin-bottom: 5px;
	}
	.goods-price {
		display: flex;
	}
	.goods-price > div {
		flex: 1;
		text-align: center;
	}
</style>