<template>
	<div class="Unpaid">
		<div class="payBox">
			<div class="info">
				<div class="payList">
					<span>Status :</span>
					<span>Unpaid</span>
				</div>
				<div class="payList">
					<span>Order No. :</span>
					<span>2017121245326</span>
				</div>
				<div class="payList">
					<span>Ordered:</span>
					<span>2018-07-04 12:00:03</span>
				</div>
				<div class="payList">
					<span>Receiver:</span>
					<span>Amanda &nbsp;136****3567</span>
				</div>
				<div class="payList">
					<span>Address:</span>
					<span>中国上海市黄浦区蒙自路169号2号楼305室<br>Room 305-306, 169 Mengzi Lu, Huangpu District, Shanghai</span>
				</div>
				<div class="payList">
					<span>Final Price：</span>
					<span>¥ 652</span>
				</div>		
			</div>
			<div class="alipayBtn" id="alipayBtn"><img src="static/images/common/alipay.svg" alt=""></div>
			<div class="wechatBtn" id="wechatBtn"><img src="static/images/common/wechat.svg" alt=""></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {

			}
		},
		mounted () {
			
		}
	}
</script>
<style scoped>
	.payBox {
		background: #fff;
		margin: 10px;
		border-radius: 4px;
		padding: 10px;
		box-sizing: border-box;
	}
	.payList {
		line-height: 30px;
		overflow: hidden;
	}
	.payList span {
		float: left;
	}
	.payList span:first-child {
		width: 34%;
		color: #999;
	}
	.payList span:nth-child(2) {
		width: 66%;
	}
	.info .payList:first-child span:nth-child(2) {
		color: #F9421E;
	}
	.info .payList:last-child span:nth-child(2) {
		color: #F9421E;
	}
	.alipayBtn {
		width: 75%;
		height: 36px;
		line-height: 49px;
		text-align: center;
		background: #00A8F2;
		border-radius: 30px;
		margin: 20px auto;
	}
	.wechatBtn {
		width: 75%;
		height: 36px;
		line-height: 48px;
		text-align: center;
		background: #00B700;
		border-radius: 30px;
		margin: 10px auto;
	}
</style>