<template>
	<div class="Paid">
		<p class="iconfont icon-duihao"></p>
		<p>Payment Success</p>
		<div class="paidBox">
			<div class="info">
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
			<div class="btnList">
				<router-link to='/' class="btn">Order List</router-link>
				<router-link to='/home' class="btn">Home</router-link>
			</div>
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
	.Paid > p {
		text-align: center;
	}
	.Paid > p:nth-of-type(1) {
		margin: 25px 0 10px 0;
		color: rgb(60, 171, 33);
		font-size: 35px;
	}
	.Paid > p:nth-of-type(2) {
		margin-bottom: 25px;
	}
	.paidBox {
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
	.info .payList:last-child span:nth-child(2) {
		color: #F9421E;
	}
	.btnList {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
	}
	.btn {
		width: 47%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #dfdfdf;
		border-radius: 30px;
	}
</style>