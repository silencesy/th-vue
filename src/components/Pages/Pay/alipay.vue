<template>
	<div class="layer">
		<p>
			<img src="../../../assets/images/arrow.png" height="185" width="207" alt="">
		</p>
		<p>Please click the top right button to open the page in browser and process the payment</p>
	</div>
</template>
<script>
	export default {
		mounted() {
			this.pay();
		},
		methods: {
			pay() {
				// 不是微信执行
				if (!this.isWeiXin()) {
					console.log(123);
					window.location.href = 'https://' + this.formalTest() + 'Alipay/alipayapi?orderNumber=' + this.$route.query.orderNumber;
				}
			}
		}
	}
</script>
<style scoped>
	.layer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.45);
	}
	.layer p {
		padding: 30px 15px;
		color: #fff;
		font-size: 16px;
		overflow: hidden;
	}
	.layer img {
		width: 100px;
		height: auto;
		float: right;
	}
</style>