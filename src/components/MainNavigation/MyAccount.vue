<template>  
  <div class="MyAccount">  
  	<div class="title">
	    <div class="touxiang"> 
				<img src="static/images/common/home-cover.png" alt="">
				<span>xiaoxiedai</span>
	 		</div>
	  	<router-link to="/" class="edit">Edit</router-link>
		</div>
		<div class="state">
			<router-link to="/" class="stateTitle">
				<div>Orders</div>
				<div>All <span class="iconfont icon-combinedshapefuben"></span></div>
			</router-link>
			<div class="status">
				<router-link to="/">
					<span class="iconfont icon-daifukuan"></span>
					<p>Unpaid</p>
				</router-link>
				<router-link to="/">
					<span class="iconfont icon-fahuo"></span>
					<p>Paid</p>
				</router-link>
				<router-link to="/">
					<span class="iconfont icon-daishouhuo"></span>
					<p>Shipped</p>
				</router-link>
			</div>
		</div>
		<div class="myItem">
			<router-link :to="{name:'AddressBook',params:{GoodsId:'1'}}">
				<span class="iconfont icon-shouhuodizhi"></span>
				<p>Address Book</p>
			</router-link>
			<router-link :to="{name: 'WishList',params: {GoodsId:'123123'}}">
				<span class="iconfont icon-shoucang"></span>
				<p>Wishlist</p>
			</router-link>
			<router-link to="/CouponsList">
				<span class="iconfont icon-youhuiquan"></span>
				<p>thMart-Coupons</p>
			</router-link>
			<router-link to="/">
				<span class="iconfont icon-shouhou"></span>
				<p>Customer Service</p>
			</router-link>
		</div>
  </div>  
</template>  
  
<script>  
export default {  
  name: 'MyAccount',  
  data() {  
    return {  
       
    };  
  }  
};  
</script>  
  
<style scoped>
	.title {
		background: #fff;
		margin-bottom: 15px;
		display: flex;
		padding: 15px;
		box-sizing: border-box;
		align-items: center;
	}
	.edit {
		display: block;
	}
	.touxiang {
		flex: 1;
	}
	.touxiang img {
		width: 50px;
		height: 50px;
		padding-right: 5px;
		vertical-align: middle;
		border-radius: 50%;
	}
	.state {
		background: #fff;
		margin-bottom: 15px;
	}
	.stateTitle {
		display: block;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #dfdfdf;
		padding: 0 15px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.status {
		display: flex;
		text-align: center;
	}
	.status > a {
		flex: 1;
		padding: 15px 0;
		color: #f6442b;
		display: block;
	}
	.status .iconfont {
		font-size: 30px;
	}
	.status p {
		margin: 0;
		padding-top: 5px;
	}
	.myItem {
		background: #fff;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 15px 15px 0 15px;
		justify-content: space-between;
		text-align: center;
		flex-wrap: wrap;
	}
	.myItem > a {
		width: 48%;
		margin-bottom: 15px;
		background: #f2f2f2;
		display: block;
		padding: 15px 0;
	}
/*	.myItem > a:nth-child(2n-1) {
		margin-right: 15px;
	}*/
	.myItem p {
		margin: 0;
		padding-top: 15px;
	}
	.myItem .iconfont {
		font-size: 30px;
		color: #999;
	}

</style>  