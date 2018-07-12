<template>
	<div class="ShopGoodsItem">
		<div class="title">
			<router-link to="/">
				<i class="iconfont icon-shanghu1"></i>
				<span>thmart</span>
			</router-link>
			<div>
				<slot name="titleRight"></slot>
			</div>
		</div>
		<div class="content">
			<div class="goods">
				<div>
					<img src="static/images/common/169.jpg" alt="">
				</div>
				<div class="goodsRight">
					<p class="line2">EMSA FLOW Slim Frien EMSA FLOW Slim Frien FLOW Slim Frien</p>
					<p>180ml,Green</p>
					<p>
						<span>¥168</span>
						<i>x2</i>
					</p>
				</div>
			</div>
			<div class="goods">
				<div>
					<img src="static/images/common/169.jpg" alt="">
				</div>
				<div class="goodsRight">
					<p class="line2">EMSA FLOW Slim Frien EMSA FLOW Slim Frien FLOW Slim Frien</p>
					<p>180ml,Green</p>
					<p>
						<span>¥168</span>
						<i>x2</i>
					</p>
				</div>
			</div>
		</div>
		<slot name="bottom"></slot>
	</div>
</template>
<script>
	export default {
		name: 'ShopGoodsItem',
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	.ShopGoodsItem {
		margin: 0 10px 10px 10px;
		border: 1px solid #dfdfdf;
		border-radius: 4px;
	}
	.title {
		display: flex;
		background: #fff;
		padding: 10px;
	}
	.title > div , .title > a {
		flex: 1;
	}
	.title > a i {
		color: #999;
    font-size: 18px;
    padding-right: 7px;
	}
	.title > a span {
		color: #666;
	}
	.title > div {
		text-align: right;
	}
	.iconfont.icon-combinedshapefuben {
		color: #999;
	}
	.content {
		background: #F9F9F9;
		padding: 10px 10px 0 10px;
		box-sizing: border-box;
	}
	.goods {
		display: flex;
		padding-bottom: 15px;
	}
	.goods > div:first-child {
		width: 30%;
	}
	.goods > div:nth-child(2) {
		width: 70%;
	}
	.goods > div:first-child img {
		width: 100%;
		max-height: 99px;
	}
	.goodsRight p {
		line-height: 25px;
		padding-left: 15px;
	}
	.goodsRight p:nth-child(1) {
		min-height: 50px;
	}
	.goodsRight p:nth-child(2) {
		color: #999;
		font-size: 14px;
	}
	.goodsRight p:nth-child(3) i , .goodsRight p:nth-child(3) span {
		font-size: 14px;
	}
	.goodsRight p:nth-child(3) span {
		color: #F9421E;
	}
	.goodsRight p:nth-child(3) {
		display: flex;
		justify-content: space-between;
	}
	.goodsRight p i {
		font-size: 14px;
	}


</style>