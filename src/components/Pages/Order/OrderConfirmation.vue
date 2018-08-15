<template>
	<div class="OrderConfirmation">
		<router-link to="/" class="address">
			<div class="info">
				<div>
					<p><span>Amanda</span><span>136****3567</span></p>
					<p>上海市黄浦区蒙自路169号2号楼305室</p>
				</div>
				<div class="iconfont icon-combinedshapefuben"></div>
			</div>
			<img src="static/images/common/letter.jpg" alt="">
		</router-link>
		<div class="container">
			<ShopGoodsItem>
				<i class="iconfont icon-combinedshapefuben" slot="titleRight"></i>
				<div slot="bottom" class="bottom">
					<p>
						<span>Shipping fee</span>
						<span class="fee">¥ 10</span>
					</p>
					<p>
						<span>thMart-Coupons</span>
						<span>- ¥ 10<i class="iconfont icon-combinedshapefuben"></i></span>
					</p>
					<p>
						<span>Quantity Discount</span>
						<span class="discount">- ¥ 10</span>
					</p>
					<p>
						<span>Remark</span>
						<input type="text" value="" name="">
					</p>
					<p>
						<span>&nbsp;</span>
						<span><i>Total：</i>¥316</span>
					</p>
				</div>
			</ShopGoodsItem>
		</div>
		<div class="fix">
			<div>Final Price：<span>¥ 652</span></div>
			<div><router-link to="/">Place Your Order</router-link></div>
		</div>
	</div>
</template>
<script>	
	export default {
		name: 'OrderConfirmation',
		data() {
			return {

			}
		},
		components: {
			ShopGoodsItem: r => { require.ensure([], () => r(require('../../BaseComponents/ShopGoodsItem')), 'ShopGoodsItem') }
		}
	}
</script>
<style scoped>
	.address {
		display: block;
		background: #fff;
		margin: 10px;
		border-radius: 4px;
		font-size: 0;
	}
	.info {
		padding: 10px;
		box-sizing: border-box;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.address img {
		width: 100%;
	}
	.info p:nth-child(2) {
		color: #999;
		font-size: 14px;
	}
	.info p:nth-child(1) span:nth-child(1) {
		padding-right: 20px;
	}
	.bottom {
		background: #fff;
	}	
	.bottom > p {
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #dfdfdf;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.bottom > p span:nth-child(2) {
		color: #F9421E;
		font-size: 14px;
	}
	.bottom > p i {
		padding-left: 10px;
	}
	.bottom > p:nth-child(4) span {
		width: 25%;
	}
	.bottom input {
		border: none;
		outline: none;
		color: #999;
		width: 75%;
	}
	.bottom > p:last-child span:nth-child(2) {
		font-size: 16px;
	}
	.fix {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		height: 45px;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.fix div span {
		color: #F9421E;
	}
	.fix div:nth-child(2) a {
		display: block;
		background: #F9421E;
		color: #fff;
		border-radius: 18px;
		text-align: center;
		width: 150px;
		height: 36px;
		line-height: 36px;
	}
	.container {
		margin-bottom: 55px;
	}
	.fee {
		padding-right: 27px;
	}
	.discount {
		padding-right: 27px;
	}
</style>