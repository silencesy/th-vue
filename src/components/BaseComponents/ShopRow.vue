<template>
	<div class="ShopRow">
		<ul class="shop-container">
			<li class="shop-item" v-for="(item,index) in shopData">
				<div class="img-box">
					<img :src="item.pic" alt="">
				</div>
				<div class="name">
					{{item.title}}
				</div>
			</li>
			
		</ul>
	</div>
</template>
<script>
	export default {
		name: "ShopRow",
		props: {
			shopData: {
			type: Array,
				default: function () {  
			      return []  
			    } 
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	.shop-container,.shop-item {
		list-style: none;
	}
	.shop-container {
		padding: 15px;
		display: flex;
		flex-wrap: wrap;
	}
	.shop-container .shop-item {
		width: 50%;
		box-sizing: border-box;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 10px;
		/*border: 1px solid #dfdfdf;*/
	}
	.shop-container .shop-item:nth-child(2n-1) {
		border-right: 7px solid #eee;
	}
	.shop-container .shop-item:nth-child(2n) {
		border-left: 7px solid #eee;
	}
	.shop-container .shop-item img {
		width: 100%;
		height: auto;
		display: block;
	}
	.shop-item .name {
		text-align: center;
		background-color: #fff;
		padding-bottom: 10px;
	}
</style>