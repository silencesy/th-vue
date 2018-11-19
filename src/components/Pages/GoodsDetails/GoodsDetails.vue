<template>
	<div class="goods" v-show="goodsData.id">
		<GoodsSwiper :swiperData="goodsData.figure"/>
		<div class="groupBuy">
			<div class="left">
				<div class="leftPrice">
					<span class="price">￥20</span>
					<span class="price"><del>￥16</del></span>
				</div>
				<div class="triangle-left"></div>
			</div>
			<div class="right">
				<!-- 倒计时 -->
				<div class="rightBox">
					12:11:09:56
				</div>
			</div>
		</div>
		<div class="title-info">
			<p class="name">{{goodsData.title}}</p>
			<p class="price theme_color">￥{{goodsData.price}}</p>
			<p class="price" v-show="goodsData.coupon_price"><del>￥{{goodsData.max_price}}</del></p>
			<p>* This product ships to Mainland China only.(An extra shipping fee will be charged for HKSAR,MCSAR and other countries/regions)</p>
		</div>
		<div class="row-line" @click="showBuy('specifications')">
			Specifications <i class="icon-combinedshapefuben iconfont"></i>
		</div>
		<div class="row-line">
			Details
		</div>
		<div class="content-info" v-html="goodsData.detail"></div>
		<div class="bottom-banner">
			<div class="features">
				<div class="icon-box">
					<i class="iconfont icon-shanghu1" @click="backHome"></i>
					<div>Home</div>
				</div>
				<div class="icon-box">
					<i class="iconfont icon-kefu"></i>
					<div>Chat</div>
				</div>
				<div class="icon-box" @click="save">
					<i class="iconfont icon-shoucang1" :class="{theme_color: goodsData.isCollect==1}"></i>
					<div>Save</div>
				</div>
			</div>
			<div class="cart-buy">
				<div @click="showBuy('cart')">Add To Cart</div>
				<div @click="showBuy('buy')">Buy Now</div>
			</div>
		</div>
		<div class="layer-container">
			<div v-show="layerBox" class="layer-bg" @click="close"></div>
			<div class="buy-goods-info" :style="{bottom: bottom}">
				<div class="single-sku-info">
					<div v-if="!singleSkuInfo">
						<div class="sku-info-img">
							<img :src="goodsData.pic" alt="">
						</div>
						<div class="sku-info-text">
							<p class="price theme_color">{{goodsData.minPrice}} - {{goodsData.maxPrice}}</p>
							<p class="chooseattr">Please select goods</p>
							<p class="stock">Stock: {{goodsData.sumStock}}</p>
							<i class="iconfont icon-guanbi" @click="close"></i>
						</div>
					</div>
					<div v-if="singleSkuInfo">
						<div class="sku-info-img">
							<img :src="singleSkuInfo.pic" alt="">
						</div>
						<div class="sku-info-text">
							<p class="price theme_color">{{singleSkuInfo.price}}</p>
							<p class="chooseattr">
								<span class="choose-arr" v-for="(item,index) in singleSkuInfo.propName">
									{{item[0]}}
								</span>
							</p>
							<p class="stock">Stock: {{singleSkuInfo.stock}}</p>
							<i class="iconfont icon-guanbi" @click="close"></i>
						</div>
					</div>
				</div>
				<ScrollView ref="ScrollView" height="290" :loadding="loadding" :open="open">
					<div class="choose-sku">
						<div class="classification" v-for="item, key in list.result">
							<div class="title">{{key}}</div>
							<div class="Option-box clearfix">
								<span class="Option-item" v-for="value in item" v-bind:class="{active: value.active, disabled: !value.active && value.disabled}"  @click="handleActive(key, value)">{{ value.name }}</span>
								
							</div>

						</div>
					</div>
	        	</ScrollView>
	        	<div class="quantity">
	        		<span>quantity</span>
	        		<span>
	        			<Count @add="add" @less="less" :number="number" :yanse="yanse" />
	        		</span>
	        	</div>
	        	<div class="btn-box">
	        		<div v-show="showRowBtn=='specifications'" class="btn specifications">
	        			<div @click="addCart">Add To Cart</div>
	        			<div @click="goBuy">Buy Now</div>
	        		</div>
	        		<div v-show="showRowBtn=='cart'"  @click="addCart" class="btn add-cart-btn">Done</div>
	        		<div v-show="showRowBtn=='buy'" @click="goBuy" class="btn">Done</div>
	        	</div>
			</div>
		</div>
		<BackToTop />
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'goods',
		data() {
			return {
				// 商品信息
				goodsData: {},
				// 购买弹出框
				layerBox: false,
				// 基于定位实现动画
				bottom: "-700px",
				// bottom: "0",
				// 滑动区块的高度
				scrollViewHeight: 100,
				// 不需要加载
				loadding: false,
				// 开启区块
				open: false,
				// 购买数量
				number: 1,
				// 控制显示弹出框底部按钮
				showRowBtn: "specifications",
				// 更改加减组件的颜色
				yanse: true,
				// sku分类数据源 从后台获取
				// skuDataList: [],
				data: [],
                skuId: "",
                skuName: "skuId",
                // 属性名称信息
                keys: [],
                // 数据集合{list.result list.items}
                list: {},
                // 分隔符
                spliter: '\u2299',
                result: {},
                message: "",
                highKeys: {},
                singleSkuInfo: null
			}
		},
		components: {
			GoodsSwiper: r => { require.ensure([], () => r(require('@/components/BaseComponents/BaseSwiper')), 'GoodsSwiper') },
			BackToTop: r => { require.ensure([], () => r(require('@/components/BaseComponents/BackToTop')), 'BackToTop') },
			ScrollView: r => { require.ensure([], () => r(require('@/components/BaseComponents/ScrollView')), 'ScrollView') },
			Count: r => { require.ensure([], () => r(require('@/components/BaseComponents/Count')), 'Count') },
		},
		mounted() {
  		// console.log(this.$route.query.id);
	  		this.getData();
	  		// console.log(this.urls.productDetails)
	  	},
	  	methods: {
	  		getData() {
	  			let that = this;
	  			that.$http.post(that.urls.productDetails,{id:that.$route.query.id})
		        .then(function (response) {
		        	console.log(response);
					that.goodsData = response.data.data;
					that.skuInitData(response.data.data.skuList);
					that.getTextareaData();
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
	  		},
            // 获取单个sku信息
            getSkuId(id) {
            	let that = this;
	  			that.$http.post(that.urls.Skudetail,{
		          id:id
		        })
		        .then(function (response) {
		        	console.log(response);
		        	that.singleSkuInfo = response.data.data;
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
            },
	  		go() {
	  			this.$router.go(-1);
	  		},
	  		showBuy(flag) {
	  			this.layerBox = true;
	  			this.bottom = 0;
	  			// 开启类型滑块
	  			if (!this.open) {
	  				this.open = true;
	  			}
	  			this.showRowBtn =flag;
	  		},
	  		// 添加购物车
	  		addCart() {
	  			let that = this;
	  			// 如果没有登录则跳转登录并且设置回跳地址
	  			
	  			// 必须选完全才能加入购物车或者购买
	  			if (that.mustChooseAll()) {
	  				that.isLogin();
	  				that.$http.post(that.urls.addCart,{
			          // goodsId: that.$route.params.id,
						goodsId: 4,
						skuId: that.singleSkuInfo.id,
						number: that.number
			        })
			        .then(function (response) {
			        	console.log(response);
			        	// that.singleSkuInfo = response.data.data;
			        	that.close();
			        })
			        .catch(function (error) {
			          // console.log(error);
			          	that.close();
			        });
	  			} else {
	  				Toast("Please select goods");
	  			}
	  		},
	  		// 下单
	  		// 添加购物车
	  		goBuy() {
	  			let that = this;
	  			// 如果没有登录则跳转登录并且设置回跳地址
	  			
	  			// 必须选完全才能加入购物车或者购买
	  			if (that.mustChooseAll()) {
  					if (!that.getToken()) {
		  				that.close();
		  				that.setlocalStorage("goback",window.location.href);
	  					that.$router.push({name: 'Login'});
		  			} else {
		  				that.close();
						that.$router.push({name:'OrderConfirmation',query: {skuId: that.singleSkuInfo.id,
						number: that.number}})
		  			}
					
	  			} else {
	  				Toast("Please select goods");
	  			}
	  		},
	  		// 如果没有登录则跳转登录并且设置回跳地址
	  		isLogin() {
	  			let that = this;
	  			// 如果没有登录则跳转登录并且设置回跳地址
	  			if (!that.getToken()) {
	  				that.close();
	  				that.setlocalStorage("goback",window.location.href);
  					that.$router.push({name: 'Login'});
	  			}
	  			return false;
	  		},
	  		// 必须选完全才能加入购物车或者购买
	  		mustChooseAll() {
	  			var chooseNumer = 0;
	  			for (var key in this.list.result) {
	  				for(var key2 in this.list.result[key]) {
	  					for(var key3 in this.list.result[key][key2]) {
	  						if (key3 == 'active' && this.list.result[key][key2][key3]) {
	  							chooseNumer++;
	  						}
	  					}
	  				}
	  			}
	  			return this.keys.length == chooseNumer? true: false;
	  		},
	  		close() {
	  			this.layerBox = false;
	  			this.bottom = "-700px";
	  		},
	  		add() {
	  			// 如果超过库存就不往上加并且提示用户
	  			if (this.singleSkuInfo && this.number>this.singleSkuInfo.stock-1 ) {
	  				alert("The quantity of goods selected exceeds the stock");
	  				return false;
	  			}
	  			this.number++;
	  			if (this.yanse) {
	  				this.yanse = false;
	  			}
	  			
	  		},
	  		less() {
	  			if (this.number == 1) {
	  				return false;
	  			} else {
	  				this.number--;
	  				if (this.number == 1) {
	  					this.yanse = true;
	  				}
	  			}
	  			
	  		},
	  		// 初始化sku列表
	  		skuInitData (skuData) {
	  			for (var i = 0; i < skuData.length; i++) {
	  				var skuItem = {};
	  				skuItem['skuId'] = skuData[i].id;
	  				for(var key in skuData[i].propName) {
	  					skuItem[key] = skuData[i].propName[key][0];
	  				}
	  				this.data.push(skuItem);
	  			}
	  		},
	  		/**
             * 初始化数据
             * @return 
             */
            powerset(arr) {
                let ps = [[]];
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0, len = ps.length; j < len; j++) {
                        ps.push(ps[j].concat(arr[i]));
                    }
                }

                return ps;
            },

            /**
             * 初始化数据
             * @return 
             */
            initData() {
                this.result = {};
                this.keys = this.getAllKeys();
                for (let i = 0; i < this.keys.length; i ++) {
                    this.highKeys[this.keys[i]] = false;
                }

                this.list = this.combineAttr(this.data, this.keys);
                this.initSeleted(this.skuId);
                this.buildResult(this.list.items)
                this.updateStatus(this.getSelectedItem());
                this.showResult();
            },

            /**
             * 获取输入表单中的数据进行初始化
             * @return
             */
            getTextareaData() {
                	// 默认选中则打开注释
                    // 定义一个flag
                    // let isHas = false;
                    // let skuId = '';
                    // for (let i = 0; i < this.data.length; i ++) {
                    //     if (skuId == this.data[i][this.skuName]) {
                    //         isHas = true;
                    //         break
                    //     }
                    // }

                    // this.skuId = isHas ? skuId : this.data[0][this.skuName];
                    this.initData();
            },

            /**
             * 正常属性点击
             */
            handleNormalClick(key, value) {
                for (let i in this.list.result[key]) {
                    if (i != value.name) {
                        this.list.result[key][i].active = false;
                    } else {
                        this.list.result[key][i].active = true;
                    }
                }
            },

            /**
             * 无效属性点击
             */
            handleDisableClick(key, value) {
                this.list.result[key][value.name]["disabled"] = false;
                // 清空高亮行的已选属性状态（因为更新的时候默认会跳过已选状态）
                for (let i in this.list.result) {
                    if (i != key) {
                        for (let x in this.list.result[i]) {
                            this.list.result[i][x].active = false;
                        }
                    }
                }

                this.updateStatus(this.getSelectedItem());
            },

            /**
             * 高亮行
             */
            highAttributes: function() {
                for (let key in this.list.result) {
                    this.highKeys[key] = true;
                    for (let attr in this.list.result[key]) {
                        if (this.list.result[key][attr].active === true) {
                            this.highKeys[key] = false;
                            break;
                        }
                    }
                }
            },

            /**
             * 点击事件处理
             * @param  key   点击的行
             * @param  value 点击的按钮的数据
             */
            handleActive: function(key, value) {
                if (value.active == true) {
                    return false;
                }

                this.handleNormalClick(key, value);
                if (value.disabled === true) {
                    this.handleDisableClick(key, value);
                }

                this.updateStatus(this.getSelectedItem());
                this.highAttributes();
                this.showResult();
            },

            /**
             * 计算属性
             * @param  {[type]} data [description]
             * @param  {[type]} keys [description]
             * @return {[type]}      [description]
             */
            combineAttr(data, keys) {
                let allKeys = []
                let result = {}

                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    let values = []

                    for (let j = 0; j < keys.length; j++) {
                        let key = keys[j]
                        if (!result[key]) {
                            result[key] = {};
                        }

                        if (!result[key][item[key]]) {
                            result[key][item[key]] = {"name": item[key], "active": false, "disabled": true};
                        }

                        values.push(item[key]);
                    }

                    allKeys.push({
                        path: values.join(this.spliter),
                        sku: item['skuId']
                    });
                }

                return {
                    result: result,
                    items: allKeys
                }
            },

            /**
             * 获取所有属性
             * @return {[type]} [description]
             */
            getAllKeys() {
                let arrKeys = [];
                for (let attribute in this.data[0]) {
                    if (!this.data[0].hasOwnProperty(attribute)) {
                        continue;
                    } 

                    if (attribute !== this.skuName) {
                        arrKeys.push(attribute);
                    }
                }

                return arrKeys;
            },

            getAttruites(arr) {
                let result = []
                for (let i = 0; i < arr.length; i++) { 
                    result.push(arr[i].path) 
                }

                return result
            },

            /**
             * 生成所有子集是否可选、库存状态 map
             */
            buildResult(items) {
                let allKeys = this.getAttruites(items)

                for (let i = 0; i < allKeys.length; i++) {
                    let curr = allKeys[i];
                    let sku = items[i].sku;
                    let values = curr.split(this.spliter);
                    let allSets = this.powerset(values);

                    // 每个组合的子集
                    for (let j = 0; j < allSets.length; j++) {
                        let set = allSets[j]
                        let key = set.join(this.spliter)

                        if (this.result[key]) {
                            this.result[key].skus.push(sku)
                        } else {
                            this.result[key] = {
                                skus: [sku]
                            }
                        }
                    }
                }
            },

            /**
             * 获取选中的信息
             * @return Array 
             */
            getSelectedItem() {
                let result = [];
                for (let attr in this.list.result) {
                    let attributeName = '';
                    for (let attribute in this.list.result[attr]) {
                        if (this.list.result[attr][attribute].active === true) {
                            attributeName = attribute;
                        }
                    }

                    result.push(attributeName);
                }

                return result
            },

            /**
             * 更新所有属性状态
             */
            updateStatus(selected) {
                for (let i = 0; i < this.keys.length; i++) {
                    let key = this.keys[i],
                        data = this.list.result[key],
                        hasActive = !!selected[i],
                        copy = selected.slice();

                    for (let j in data) {
                        let item = data[j]["name"];
                        if (selected[i] == item) {
                            continue
                        }

                        copy[i] = item
                        let curr = this.trimSpliter(copy.join(this.spliter), this.spliter);
                        this.list.result[key][j]["disabled"]  = this.result[curr] ? false : true;
                    }
                }
            },

            trimSpliter(str, spliter) {
                // ⊙abc⊙ => abc
                // ⊙a⊙⊙b⊙c⊙ => a⊙b⊙c
                let reLeft    = new RegExp('^' + spliter + '+', 'g');
                let reRight   = new RegExp(spliter + '+$', 'g');
                let reSpliter = new RegExp(spliter + '+', 'g');
                return str.replace(reLeft, '')
                    .replace(reRight, '')
                    .replace(reSpliter, spliter)
            },

            /**
             * 初始化选中
             * @param  mixed|Int|String skuId 需要选中的skuId
             * @return {[type]}       [description]
             */
            initSeleted(skuId) {
                for (let i in this.data) {
                    if (this.data[i][this.skuName] == skuId) {
                        for (let x in this.data[i]) {
                            if (x !== this.skuName) {
                                this.list.result[x][this.data[i][x]].active = true;
                            }
                        }
                        break;
                    }
                }
            },

            /**
             * 显示选中的信息
             * @return 
             */
            showResult() {
                let result = this.getSelectedItem()
                let s = []
                for (let i = 0; i < result.length; i++) {
                    let item = result[i];
                    if (!!item) {
                        s.push(item)
                    }
                }

                if (s.length == this.keys.length) {
                    let curr = this.result[s.join(this.spliter)]
                    if (curr) {
                        s = s.concat(curr.skus)
                        this.skuId = curr.skus[0];
                    }

                    this.message = s.join('-');
                }
            },

            //点击Home回首页
            backHome() {
            	this.$router.push({path: "/"})
            },

            // 收藏商品
            save() {
            	let that = this;
            	let params = {
            		type: 1,
            		contentId: 4,
            		isCollect: that.goodsData.isCollect==1?0:1
            	}
	  			// 如果没有登录则跳转登录并且设置回跳地址
	  			that.isLogin();
	  			that.$http.post(that.urls.collect,params)
		        .then(function (response) {
		        	that.goodsData.isCollect = that.goodsData.isCollect==1?0:1;
		        })
		        .catch(function (error) {
		          console.log(error);
		        });

            }

	  	},
	  	watch: {
            skuId: function(newVal,oldVal) {
            	this.number = 1;
            	this.getSkuId(newVal);
            }
	  	}
	}
</script>
<style scoped>
	.groupBuy {
		height: 40px;
		overflow: hidden;
	}
	.groupBuy .left, .groupBuy .right {
		float: left;
		width: 50%;
		height: 40px;
		box-sizing: border-box;
		overflow: hidden;
	}	
	.groupBuy .left {
		background-color: #f6442b;
		padding-left: 15px;
	}
	.groupBuy .right {
		background-color: #FFB510;
		padding-right: 15px;
	}
	.groupBuy .left .leftPrice {
		float: left;
		width: 85%;
		height: 40px;
		line-height: 40px;
	}
	.groupBuy .leftPrice span {
		color: #fff;
		font-size: 22px;
		padding-right: 5px;
	}
	.groupBuy .leftPrice del {
		color: #fff;
		font-size: 18px;
	}
	.triangle-left {
		float: right;
		width: 0;   
		height: 0;   
		border-top: 20px solid transparent;   
		border-bottom: 20px solid transparent;   
		border-right: 20px solid #FFB510;
	}
	.groupBuy .rightBox {
		display: inline-block;
		height: 40px;
		line-height: 40px;
		float: right;
	}
	.goods {
		width: 100%;
		background-color: #E8E8E8;
	}
	.title-info {
		margin-top: 10px;
		background-color: #fff;
	}
	.name {
		font-weight: 900;
		font-size: 18px;
	}
	.price del {
		font-size: 12px;
	}
	.title-info {
		padding: 15px;
	}
	.row-line {
		margin-top: 10px;
		height: 44px;
		line-height: 44px;
		background-color: #fff;
		padding: 0 10px;
	}
	.mint-cell:last-child {
		background-image: none;
	}
	.content-info {
		border-top: 1px solid #dfdfdf;
		padding: 10px;
		background-color: #fff;
		margin-bottom: 50px;
	}
	.content-info >>> img {
		display: block;
		width: 100% !important;
		height: auto !important;
	}
	.bottom-banner {
		height: 50px;
		max-width: 750px;
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		top: auto;
		right: 0;
		margin: auto;
		display: flex;
		box-shadow: 0 0 2px #dedede;
		z-index: 1;
		cursor: pointer;
	}
	.bottom-banner > div {
		height: 50px;
		line-height: 50px;
	}
	.bottom-banner .features {
		display: flex;
		flex: 1;
	}
	.bottom-banner .features .icon-box {
		height: 50px;
		text-align: center;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.icon-box i {
		color: #919191;
		height: 25px;
		line-height: 32px;
		font-size: 22px;
	}
	.icon-box div {
		height: 25px;
		line-height: 25px;
		text-align: center;
		font-size: 12px;
	}
	.bottom-banner .cart-buy {
		display: flex;
		flex: 1;
	}
	.bottom-banner .cart-buy > div {
		text-align: center;
		color: #fff;
		font-size: 16px;
	}
	.bottom-banner .cart-buy > div:nth-child(1) {
		background-color: #f6b12b;
		flex: 1.3;
	}
	.bottom-banner .cart-buy > div:nth-child(2) {
		background-color: #f6442b;
		flex: 1;
	}
	.layer-bg {
		width: 750px;
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(0,0,0,0.45);
		z-index: 100;
	}
	.buy-goods-info {
		position: fixed;
		height: 480px;
		max-width: 750px;
		background-color: #fff;
		left: 0;
		bottom: '-700px';
		top: auto;
		right: 0;
		margin: auto;
		z-index: 200;
		transition: all 0.3s ease; 
	}
	.single-sku-info {
		padding: 0 10px;
		box-sizing: border-box;
	}
	.single-sku-info .sku-info-img {
		position: relative;
		width: 100px;
	}
	.single-sku-info .sku-info-img img {
		width: 100%;
		position: absolute;
		left: 0;
		top: -20px;
		border-radius: 8px;
		box-shadow: 1px 0px 10px rgba(0,0,0,0.2);
	} 
	.single-sku-info .sku-info-text {
		padding-left: 110px;
		color: '#666';
		position: relative;
		box-sizing: border-box;
		border-bottom: 1px solid #DFDFDF;
		padding-bottom: 12px
	}
	.single-sku-info .sku-info-text p {
		padding: 2px 0;
	}
	.iconfont.icon-guanbi {
		position: absolute;
		right: 0;
		top: 10px;
		color: #999;
		font-size: 24px;
	}
	.choose-sku {
		padding: 5px 10px;
	}
	.classification {
		padding: 5px 0;
		border-bottom: 1px solid #DFDFDF;
	}
	.classification span {
		font-size: 14px;
	}
	.Option-box {
		padding: 5px 0;
	}
	.Option-item {
		display: inline-block;
		padding: 5px 8px;
		border-radius: 4px;
		background-color: #DFDFDF;
		float: left;
		margin-right: 10px;
	}
	.Option-item.active {
		background-color: #F9421E;
		color: #fff;
	}
	.quantity {
		display: flex;
		padding: 10px;
	}
	.quantity > span {
		flex: 1;
	}
	.btn-box {
		padding: 0 10px;
	}
	.btn-box .btn {
		display: inline-block;
		width: 100%;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background-color: #F9421E;
		color: #fff;
		border-radius: 18px;
	}
	.btn.add-cart-btn {
		background-color: #f6b12b;
	}
	.btn-box .specifications {
		display: flex;
	}
	.specifications > div {
		flex: 1;
		color: #fff;
		height: 36px;
		line-height: 36px;
	}
	.specifications > div:nth-child(1) {
		background-color: #f6b12b;
		border-top-left-radius: 18px;
		border-bottom-left-radius: 18px;
	}
	.specifications > div:nth-child(2) {
		background-color: #F9421E;
		border-top-right-radius: 18px;
		border-bottom-right-radius: 18px;
	}
	.icon-combinedshapefuben.iconfont {
		float: right;
		color: #dfdfdf;
	}
	.disabled {
        color:#aaa;
    }
    .active {
        color: red;
    }
    .choose-arr {
    	margin-right: 2px;
    }
    .chooseattr,.stock, .chooseattr span {
    	color: #666;
    }
</style>