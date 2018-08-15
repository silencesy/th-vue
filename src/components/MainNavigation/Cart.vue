<template>  
  <div class="Cart">  
    <div class="cart-container" v-show="showGoods">
    	<div class="shop-item" v-for="(item,index) in dataList">
    		<div class="title">
    			<div class="item-input">
		    		<input class="defaultCheckbox" type="checkbox" :id="item.brandId" value="item" v-model="item.shopAll" @click="shopAll(item.data,item.shopAll)">
					<label :for="item.brandId"><i class="placeholder-ele">.</i></label>
		    	</div>
		    	<div class="go-shop" @click="goShop(item.brandId)">
		    		<div class="shop-name-box">
			    		<i class="iconfont icon-shanghu1"></i> <span class="shop-name">{{item.brandName}}</span>
			    	</div>
			    	<div class="right-arrow">
			    		<i class="iconfont icon-combinedshapefuben"></i>
			    	</div>
		    	</div>
    		</div> 
    		<div v-for="(couponval,index) in item.data">
    			<div class="goods-container">
	    			<div class="goods-item" v-for="(goodsval,index) in couponval.data">
	    				<div class="item-input">
				    		<input class="defaultCheckbox" type="checkbox" :id="goodsval.skuId" v-model="goodsval.isSelect" @click="selectGoods(goodsval)">
							<label :for="goodsval.skuId"><i class="placeholder-ele">.</i></label>
				    	</div>
	    				<div class="img-box">
	    					<router-link :to="{name: 'GoodsDetails', params: {id:goodsval.goodsId}}">
	    						<img :src="goodsval.pic" height="200" width="200" alt="">
	    					</router-link>
	    				</div>
	    				<div class="info">
	    					<router-link :to="{name: 'GoodsDetails', params: {id:goodsval.goodsId}}">
		    					<div class="name">{{goodsval.goodsName}}</div>
		    					<div class="flag">
		    						<span v-for="(val,key) in goodsval.prop">{{val[0]}}</span>
		    					</div>
		    				</router-link>
	    					<div class="bottom-info">
	    						<span class="theme_color">￥{{goodsval.price}}</span>
	    						<Count @add="add(goodsval.number,goodsval.cartId)" @less="less(goodsval.number,goodsval.cartId)" :number="Number(goodsval.number)" :yanse="goodsval.number==1?true:false"/>
	    						<i class="iconfont icon-shanchu" @click="deleteCart(goodsval.cartId)"></i>
	    					</div>
	    					
	    				</div>
	    			</div>
	    		</div>
	    		<div class="full-reduction theme_color">
	    			{{couponval.couponName}}
	    		</div>
    		</div>
    		
    	</div>
    </div>
    <div class="bottom-row" v-show="showGoods">
    	<div class="check-all">
    		<input class="defaultCheckbox" type="checkbox" id="all" value="item" v-model="allSelect" @click="allSelectFun(allSelect)">
			<label for="all">All</label>
    	</div>
    	<div class="right">
    		<div class="price">
    			<div class="price-number ">
    				<div class="clearfix">
    					<div class="price-title">Total:</div><div class="final-price theme_color">￥ {{total}}</div>
    				</div>
    				<div class="offer theme_color" v-show="couponPrice">优惠 ¥ {{couponPrice}}</div>
    			</div>
    		</div>
    		<div class="buy-btn">
    			<span>Checkout Now</span>
    		</div>
    	</div>
    </div>
    <div class="login unite" v-show="isEmpty">
    	<div class="title">Your cart is current</div>
    	<router-link to="/">
    		<div class="info">
    			<span>Start Shopping</span>
    		</div>
    	</router-link>
    </div>
    <div class="shopping unite" v-show="isLogin">
    	<div class="title">Please log in first!</div>
    	<div class="info">
    		<span @click="login">LOG IN / SIGN UP</span>
    	</div>
    </div>
  </div>  
</template>  
  
<script> 

export default {  
  name: 'Cart',  
  data() {  
    return {  
       isLogin: false,
       isEmpty: false,
       showGoods: false,
       dataList: [],
       couponPrice: '',
       total: '',
       allSelect: false,
       goodsCunt: 0,
       goodsSelectCount: 0
    }
  },
  mounted() {
  	// 页面加载判断用户是否登录
  	this.isLoginFun();
  	// 如果登录加载数据
  	if (!this.isLogin) this.getCartList();
  },
  components: {
  	Count: r => { require.ensure([], () => r(require('@/components/BaseComponents/Count')), 'Count') }
  },
  methods: {
  	// 跳转商户详情页
  	goShop(id) {
  		this.$router.push({ name: 'ShopHome', params: { id: id }})
  	},
  	// 跳转登录
  	login() {
  		// 设置回跳地址
  		this.setlocalStorage("goback",window.location.href);
  		this.$router.push({name: 'Login'});
  	},
  	// 获取购物车数据
  	getCartList() {
  		var that = this;
  		that.$http.post(this.urls.getCartList)
		.then(function (response) {
			// console.log(response);
			if (response.data.data.data.length==0) {
				that.isEmpty = true;
				that.showGoods = false;
			} else {
				// console.log(response.data.data.data);
				that.dataList = response.data.data.data;
				that.total = response.data.data.total;
				that.couponPrice = response.data.data.couponPrice;
				that.showGoods = true;
				that.initData();
			}
			
		});
  	},
  	// 判断是否登录
  	isLoginFun() {
  		// getToken 统一工具函数里面定义的
  		this.getToken()?this.isLogin=false:this.isLogin=true;
  	},
  	// 加数量（count组件）
  	add(number,cartId) {
  		number++;
		var that = this;
		that.$http.post(this.urls.CartEditNumber,{cartId: cartId,number: number})
		.then(function (response) {
			if (response.data.message == "success") {
				that.getCartList();
			}
		});
	},
	// 减数量（count组件）
	less(number,cartId) {
		number--;
		if (number == 0) {
			return false;
		}
		var that = this;
		that.$http.post(this.urls.CartEditNumber,{cartId: cartId,number: number})
		.then(function (response) {
			if (response.data.message == "success") {
				that.getCartList();
			}
		});
	},
	// 删除购物车
	deleteCart(id) {
		var that = this;
		that.$http.post(this.urls.Cartdelete,{cartId: id})
		.then(function (response) {
			if (response.data.message == "success") {
				that.getCartList();
			}
		});
	},
	// 选中单件商品
	selectGoods(goods) {
		var that = this;
		that.$http.post(this.urls.CartChangeSelectAndTotalPrice,{
			isSelect: goods.isSelect?0:1,
			cartIdArray: [goods.cartId]
		}).then(function (response) {
			// console.log(response);
			// that.getCartList();
			alert(response.data.message);

		});
	},
	// 选中一个商户关联商户下面的所有商户选中或者不选中
	shopAll(data,shopAll) {
		var that = this;
		console.log(!shopAll);
		var cartIdArray = []
		for (var key in data) {
			// console.log(data[key].data);
			if (Array.isArray(data[key].data) || typeof(data[key].data) == "object" && 
      Object.prototype.toString.call(data[key].data).toLowerCase() == "[object object]" && !data[key].data.length) {
				for (var key2 in data[key].data) {
					
					if (Array.isArray(data[key].data[key2]) || typeof(data[key].data[key2]) == "object" && 
      Object.prototype.toString.call(data[key].data[key2]).toLowerCase() == "[object object]" && !data[key].data[key2].length) {
						// console.log(data[key].data[key2].cartId);
						cartIdArray.push(data[key].data[key2].cartId);
					}
				}
			}
			
		}
		console.log(cartIdArray);
		that.$http.post(this.urls.CartChangeSelectAndTotalPrice,{
			isSelect: shopAll?0:1,
			cartIdArray: cartIdArray
		}).then(function (response) {
			// console.log(response);
			alert(response.data.message)
			// that.getCartList();
		});
	},
	// 所有全选和反选
	allSelectFun(allSelect) {
		var that = this;
  		if (!allSelect) {
			that.$http.post(this.urls.CartChangeSelectAndTotalPrice,{
				allSelect: 1
			}).then(function (response) {
				// that.getCartList();
			});
  		} else {
  			that.$http.post(this.urls.CartChangeSelectAndTotalPrice,{
				allSelect: 0
			}).then(function (response) {
				// that.getCartList();
			});
  		}
	},
	// 数据格式化initData
	initData(allTrue) {
		this.allSelect = false;
		this.goodsCunt = 0;
		this.goodsSelectCount = 0;
		var shopSelectTrueCount = 0;
		// console.log(this.dataList);
		// 第一层（商户）
		for(var key in this.dataList) {
			if (Array.isArray(this.dataList[key]) || typeof(this.dataList[key]) == "object" && 
      Object.prototype.toString.call(this.dataList[key]).toLowerCase() == "[object object]" && !this.dataList[key].length) {
				// console.log(this.dataList[key])
				// 第二层（商户满减层级）
				for(var key2 in this.dataList[key]) {
					// if (allTrue) {
					// 	this.dataList[key].shopAll = true;
					// } else {
					// 	this.dataList[key].shopAll = false;
					// }
					if (key2 == 'shopAll' && this.dataList[key].shopAll == true) {
						shopSelectTrueCount++
					}
					if (Array.isArray(this.dataList[key][key2]) || typeof(this.dataList[key][key2]) == "object" && 
      Object.prototype.toString.call(this.dataList[key][key2]).toLowerCase() == "[object object]" && !this.dataList[key][key2].length) {
						// console.log(this.dataList[key][key2]);
						// 第三层
						for (var key3 in this.dataList[key][key2]) {
							if (Array.isArray(this.dataList[key][key2][key3]) || typeof(this.dataList[key][key2][key3]) == "object" && 
      Object.prototype.toString.call(this.dataList[key][key2][key3]).toLowerCase() == "[object object]" && !this.dataList[key][key2][key3].length) {
								// console.log(this.dataList[key][key2][key3]);
								// 第四层
								for (var key4 in this.dataList[key][key2][key3]) {
									if (Array.isArray(this.dataList[key][key2][key3][key4]) || typeof(this.dataList[key][key2][key3][key4]) == "object" && 
      Object.prototype.toString.call(this.dataList[key][key2][key3][key4]).toLowerCase() == "[object object]" && !this.dataList[key][key2][key3][key4].length) {
										// console.log(this.dataList[key][key2][key3][key4])
										// 第五层（满减层）
										for (var key5 in this.dataList[key][key2][key3][key4]) {
											// console.log(this.dataList[key][key2][key3][key4][key5])
											if (Array.isArray(this.dataList[key][key2][key3][key4][key5]) || typeof(this.dataList[key][key2][key3][key4][key5]) == "object" && 
      Object.prototype.toString.call(this.dataList[key][key2][key3][key4][key5]).toLowerCase() == "[object object]" && !this.dataList[key][key2][key3][key4][key5].length) {
												// 第六层(商品数据)
												for (var key6 in this.dataList[key][key2][key3][key4][key5]) {
													// console.log(this.dataList[key][key2][key3][key4][key5][key6])
													if (key6 == 'isSelect') {
														// if (allTrue) {
														// 	this.dataList[key][key2][key3][key4][key5][key6] = true;
														// } else {
															this.dataList[key][key2][key3][key4][key5][key6]==1?this.dataList[key][key2][key3][key4][key5][key6]=true:this.dataList[key][key2][key3][key4][key5][key6]=false;
														// }
														
														
													}
												}
											}
										}
									}
									
								}
							}
							
						}
					}
				}
			}
			
		}
		console.log(shopSelectTrueCount);
		console.log(this.dataList.length);
		if (shopSelectTrueCount==this.dataList.length) {
			this.allSelect = true;
		} else {
			this.allSelect = false;
		}
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
		flex: 1.2;
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
		margin-right: 5px;
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
	.unite {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		max-width: 750px;
		text-align: center;
		margin: auto;
		height: 80px;

	}
	.unite .title {
		color: #999;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.unite .info span {
		background-color: #F9421E;
		color: #fff;
		font-size: 16px;
		display: inline-block;
		padding: 6px 15px;
		border-radius: 30px;
	}
	.bottom-info {
		display: flex;
		margin-top: 8px;
		justify-content: space-between;
	}
	.bottom-info > span {
		line-height: 32px;
		padding-right: 8px;
	}
	.iconfont.icon-shanchu {
		color: #aaa;
		align-self: center;
	}
</style>  