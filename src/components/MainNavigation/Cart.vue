<template>  
  <div class="Cart">  
    <div class="cart-container">
    	<div class="shop-item" v-for="(item,index) in 3">
    		<div class="title">
    			<div class="item-input">
		    		<input class="defaultCheckbox" type="checkbox" :id="index" value="item" >
					<label :for="index"><i class="placeholder-ele">.</i></label>
		    	</div>
		    	<div class="go-shop" @click="goShop">
		    		<div class="shop-name-box">
			    		<i class="iconfont icon-shanghu1"></i> <span class="shop-name">Amor flora</span>
			    	</div>
			    	<div class="right-arrow">
			    		<i class="iconfont icon-combinedshapefuben"></i>
			    	</div>
		    	</div>
    		</div>
    		<div class="goods-container">
    			<div class="goods-item" v-for="(item,index) in 3">
    				<div class="item-input">
			    		<input class="defaultCheckbox" type="checkbox" id="1123123" value="item" >
						<label for="1123123"><i class="placeholder-ele">.</i></label>
			    	</div>
    				<div class="img-box">
    					<img src="../../assets/logo.png" height="200" width="200" alt="">
    				</div>
    				<div class="info">
    					<div class="name">EMSA FLOW Slim Friends Carafe with Cooling…</div>
    					<div class="flag">
    						<span>Green</span><span>180ml</span>
    					</div>
    					<div class="bottom-info">
    						<span class="theme_color">￥123</span>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="full-reduction theme_color">
    			满100减10元
    		</div>
    	</div>
    </div>
    <div class="bottom-row">
    	<div class="check-all">
    		<input class="defaultCheckbox" type="checkbox" id="all" value="item" >
			<label for="all">All</label>
    	</div>
    	<div class="right">
    		<div class="price">
    			<div class="price-number ">
    				<div class="clearfix">
    					<div class="price-title">Total:</div><div class="final-price theme_color">￥ 1231</div>
    				</div>
    				<div class="offer theme_color">优惠 ¥ 200</div>
    			</div>
    		</div>
    		<div class="buy-btn">
    			<span>Checkout Now</span>
    		</div>
    	</div>
    </div>
  </div>  
</template>  
  
<script> 

export default {  
  name: 'Cart',  
  data() {  
    return {  
       
    }
  },
  methods: {
  	goShop() {
  		alert(123);
  	}
  }
};  
</script>  
  
<style scoped>
	.iconfont.icon-shanghu1 {
		color: #999;
		margin-right: 5px;
	}
	.iconfont.icon-combinedshapefuben {
		color: #ccc;
	}
	.cart-container {
		padding: 10px 10px 110px 10px;
	}
	.shop-item {
		/*padding: 10px;*/
		border: 1px solid #dfdfdf;
		margin-bottom: 10px;
		background-color: #fff;
		border-radius: 4px;
	}
	.shop-item .title {
		height: 40px;
	}
	.go-shop {
		width: 100%;
		height: 40px;
	}
	.placeholder-ele {
		color: transparent;
	}
	.item-input {
		float: left;
	}

	.item-input .defaultCheckbox + label {
		color: #666;
		width: 10px;
		height: 40px;
		line-height: 40px;
	}
	.item-input .defaultCheckbox + label:before {
		top: 10px;
		left: 10px;
	}
	.item-input .defaultCheckbox + label:after {
		top: 10px;
		left: 10px;
	}
	.shop-name-box {
		line-height: 40px;
		float: left;
	}
	.shop-name {
		color: #666;
	}

	.right-arrow {
		float: right;
		height: 40px;
		line-height: 40px;
		margin-right: 10px;
	}


	.goods-container {
		background-color: #F9F9F9;
		padding: 5px 0;
	}

	.goods-item {
		display: flex;
		padding: 5px 0;
	}
	.goods-item .img-box {
		flex: 1.5;
	}
	.goods-item .img-box img {
		width: 100%;
		height: auto;
	}
	.goods-item .info {
		flex: 3;
		box-sizing: border-box;
		padding: 0 10px;
	}

	.goods-item .info .name {
		font-size: 16px;
	}
	.goods-item .info .flag span {
		color: #999;
		font-size: 14px;
	}

	.full-reduction {
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		padding-left: 40px;
	}


	.bottom-row {
		max-width: 750px;
		height: 55px;
		background-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: auto;
		bottom: 55px;
		margin: auto;
	    -webkit-box-shadow: 0 0 2px #dedede;
    	box-shadow: 0 0 2px #dedede;
	}
	.check-all {
		width: 80px;
		padding-left: 25px;
		float: left;
		height: 55px;
	}
	.bottom-row .defaultCheckbox + label {
		color: #666;
		height: 55px;
		line-height: 55px;
	}
	.bottom-row .defaultCheckbox + label:before {
		top: 15px;
	}
	.bottom-row .defaultCheckbox + label:after {
		top: 15px;
	}

	.right {
		height: 55px;
		display: flex;
	}
	.right > .price {
		flex: 1.2;
	}
	.right > .buy-btn {
		flex: 1;
	}
	.price {
		padding-top: 5px; 
	}
	.price-title {
		float: left;
	}
	.price-number > div {
		text-align: right;
	}
	.final-price {
		font-weight: 900;
		font-size: 14px
	}
	.offer {
		font-size: 12px;		
	}
	.buy-btn {
		padding: 8px 10px;
		text-align: center;
	}
	.buy-btn span {
		display: inline-block;
		width: 100%;
		height: 35px;
		line-height: 35px;
		background-color: #F9421E;
		color: #fff;
		border-radius: 16px;
		font-size: 14px;
	}
</style>  