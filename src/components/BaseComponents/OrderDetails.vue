<template>
	<div class="OrderDetails">
		<div class="notice">
			<p><i class="iconfont icon-xinxi"></i>Notice</p>
			<p>If you need after-sales service, please contact us within 7 days after you receive the parcel. We will not accept the request if overdue. Thanks for your cooperation and understanding.</p>
		</div>
		<div to="/" class="address">
			<div class="info">
				<p><i class="iconfont icon-shouhuodizhi"></i>Address</p>
				<p><span>Amanda</span><span>136****3567</span></p>
				<p>上海市黄浦区蒙自路169号2号楼305室</p>
			</div>
		</div>
		<div class="container">
			<ShopGoodsItem>
				<div slot="bottom" class="bottom">
					<p>
						<span>&nbsp;</span>
						<span><i>Total：</i>¥316 <b>(Shipping:¥5)</b></span>
					</p>
				</div>
			</ShopGoodsItem>
			<ShopGoodsItem>
				<div slot="bottom" class="bottom">
					<p>
						<span>&nbsp;</span>
						<span><i>Total：</i>¥316 <b>(Shipping:¥5)</b></span>
					</p>
				</div>
			</ShopGoodsItem>
		</div>
		<slot name="date"></slot>
		<slot name="distance"></slot>
		<slot name="fix"></slot>
	</div>
</template>
<script>	
	export default {
		name: 'OrderDetails',
		data() {
			return {

			}
		},
		components: {
			ShopGoodsItem: r => { require.ensure([], () => r(require('./ShopGoodsItem')), 'ShopGoodsItem') }
		}
	}
</script>
<style scoped>
	.notice {
		margin: 10px;
		padding: 10px;
		background: #fff;
		box-sizing: border-box;
		border: 1px solid #dfdfdf;
    border-radius: 4px;
	}
	.notice p {
		line-height: 25px;
		font-size: 14px;
		color: #666;
	}
	.notice p:first-child {
		color: #F9421E;
		font-size: 16px;
	}
	.notice i {
		color: #F9421E;
		padding-right: 10px;
	}
	.address {
		display: block;
		background: #fff;
		margin: 10px;
		border-radius: 4px;
		font-size: 0;
		border: 1px solid #dfdfdf;
    border-radius: 4px;
	}
	.info {
		padding: 10px;
		box-sizing: border-box;
		line-height: 30px;
	}
	.info p:first-child i {
		padding-right: 10px;
    font-size: 19px;
    color: #999;
	}
	.info p:nth-child(2) {
		color: #999;
		font-size: 14px;
	}
	.info p:nth-child(2) span:nth-child(1) {
		padding-right: 20px;
	}
	.info p:nth-child(3) {
		color: #666;
		font-size: 14px;
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
		font-size: 16px;
	}
	.bottom > p i {
		padding-left: 10px;
	}
	.bottom > p b {
		font-style: normal;
    font-weight: 400;
    color: #666;
    padding-left: 5px;
    font-size: 14px;
	} 
	.date {
		display: flex;
		justify-content: space-between;
		background: #fff;
		margin: 10px;
		padding: 10px;
		box-sizing: border-box;
		border: 1px solid #dfdfdf;
    border-radius: 4px;
	}
	.date div:nth-child(2) {
		border: 1px solid #dfdfdf;
    width: 70px;
    height: 30px;
    text-align: center;
    border-radius: 20px;
    line-height: 30px;
    color: #666;
    font-size: 14px;
	}
	.date div:first-child p {
		line-height: 25px;
		color: #666;
	}
	.date div:first-child span {
		color: #222;
	}
	.date div:first-child p:first-child span {
		padding-left: 2px;
	}
	.date div:first-child p:nth-child(2) span {
		padding-left: 15px;
	}
	.date div:first-child p:nth-child(3) span {
		padding-left: 7px;
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
</style>