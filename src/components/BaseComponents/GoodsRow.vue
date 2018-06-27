<template>
	<div class="GoodRow">
		<slot name="banner-img"></slot>
		<ul class="goods-container">
			<li class="goods-item" v-for="(item,index) in goodsData" :key="index" :style="{width: width}">
				<router-link :to="{name: 'GoodsDetails', params: {GoodsId:item.id}}">
					<div class="img-box">
						<img v-lazy.container="item.coverpic" alt="">
					</div>
					<div class="good-info">
						<div class="goods-name line2">
							{{item.goods_name}}
						</div>
						<div class="goods-price">
							<div class="theme_color">
								{{item.goods_price}}
							</div>
							<div>
								<del>{{item.goods_price}}</del>
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
		}
	},
	data() {  
    return {  
     	width: 0
    }  
	},
	mounted() {
		this.width = 100 / this.Columns + "%";
		// console.log();
	}
}
</script>
<style scoped>
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
	}
	.goods-name {
		height: 38px;
	}
	.goods-price {
		display: flex;
	}
	.goods-price > div {
		flex: 1;
		text-align: center;
	}
</style>