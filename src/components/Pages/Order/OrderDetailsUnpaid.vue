<template>
	<div class="OrderDetailsUnpaid" v-if="OrderDetailsData">
		<OrderDetails :OrderDetailsData= 'OrderDetailsData'>
			<div slot="fix" class="fix">
				<div>Total:<span> ¥{{OrderDetailsData.priceTotal}}</span></div>
				<div @click="pay"><a>Pay</a></div>
			</div>
		</OrderDetails>

	</div>
</template>
<script>	
	export default {
		name: 'OrderDetailsUnpaid',
		data() {
			return {
				OrderDetailsData: null
			}
		},
		components: {
			OrderDetails: r => { require.ensure([], () => r(require('../../BaseComponents/OrderDetails')), 'OrderDetails') }
		},
		created() {
			this.getData();
		},
		methods: {
			getData() {
				var that = this;
		        that.$http.post(that.urls.OrderDetail,{orderNumber: that.$route.query.orderNumber})
		        .then(function (response) {
		          console.log(response.data.data);
		          that.OrderDetailsData = response.data.data;
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
			},
			pay() {
				var that = this;
				var orderNumber = that.$route.query.orderNumber;
		        var apiAddr = that.formalTest();
		        var callbackAddress = window.location.origin + '/pay';
		        if (that.isWeiXin()) {
		          window.location.href = 'http://page.thatsmags.com/WebAccess/get-weixin-code.html?appid=wx06e97f4ed4ac07e3&scope=snsapi_base&state=STATE&redirect_uri=http%3A%2F%2F'+ apiAddr +'Wx%2FopenidPayPage%3ForderNumber='+ orderNumber + '%26callbackAddress=' + callbackAddress;
		        } else {
		          window.location.href = window.location.origin + '/Pay?orderNumber=' + orderNumber;
		        }
			}
		}
	}
</script>
<style scoped>
	.distance {
		margin-bottom: 55px;
	}
</style>