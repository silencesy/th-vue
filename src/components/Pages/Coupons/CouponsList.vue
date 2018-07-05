<template>
	<div class="CouponsList" v-if="CouponsListData">
		<div v-for="(item,index) in CouponsListData">
			<router-link :to="{name: 'CouponsGoods',params:{CouponsId:item.id}}">
				<img :src="item.coverpic" alt="">
			</router-link>			
		</div>		
	</div>
</template>
<script>
	export default {
		name: 'CouponsList',
		data() {
			return {
				CouponsListData: []
			}
		},
		mounted() {
			this.getCouponsListData()  
		},
		methods: {
			getCouponsListData() {
	      var that = this;
	      that.$http.post('Api/Coupon/couponList')
	      .then(function (response) {
	      	console.log(response)
	        that.CouponsListData = response.data.data;
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	    }

		}
	}
</script>
<style scoped>
	.CouponsList {
		margin: 15px;
	}
	.CouponsList img {
		width: 100%;
		margin-bottom: 10px;
	}






</style>