<template> 
	<div class="ShopHome" v-if="shopData.pic">
		<div class="header">
			<div>
				<img :src="shopData.pic" alt="">
				<span>{{shopData.name}}</span>
			</div>
			<div>
				<span class="iconfont icon-shoucang"></span>
				<router-link :to="{path: '/ShopSearch', query: {id:shopData.id}}" class="iconfont icon-sousuo"> </router-link>
			</div>
		</div>
		<div class="nav">
			<router-link to="/">Home</router-link>
			<router-link :to="{path: '/ShopGoodsList', query: {id:shopData.id,flag: 'all'}}">All</router-link>
			<router-link :to="{path: '/ShopGoodsList', query: {id:shopData.id,flag: 'new'}}">New Arrivals</router-link>
		</div>
		<!-- 轮播开始 -->
		<BaseSwiper :swiperData="shopData.figure">

		</BaseSwiper>
		<!-- 轮播结束 -->
		<div class="content">
			<div v-for="(item,index) in shopData.content">
				<img :src="item.pic" alt="">
			</div>
		</div>
		<BackToTop />
		<div class="bottom">
			<router-link to="/"><i class="iconfont icon-shanghu1"></i>thMart-Home</router-link>
			<router-link to="/"><i class="iconfont icon-kefu"></i>Chat</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {
				shopData: {}
			}
		},
		components: {
			BaseSwiper: r => { require.ensure([], () => r(require('../../BaseComponents/BaseSwiper')), 'BaseSwiper') },
			BackToTop: r => { require.ensure([], () => r(require('../../BaseComponents/BackToTop')), 'BackToTop') }
		},
		mounted () {
			console.log(this.$route.query.id)
			this.getData();
		},
		methods: {
			getData() {
				var that = this;
				that.$http.post(this.urls.shopDetail,{id: that.$route.query.id})
				.then(function (response) {
					// that.categoryList = response.data.data;
					console.log(response)
					that.shopData = response.data.data;
				});
			}
		}
	}
</script>
<style scoped>
	.ShopHome {
		padding-bottom: 41px;
	}
	.header {
		width: 100%;
		height: 80px;
		line-height: 80px;
		display: flex;
		justify-content: space-between;
		align-content: center;
		background: #F9421E;
		padding: 9px 10px;
    	box-sizing: border-box;
	}
	.header div span {
		color: #fff;
	}
	.header div a {
		color: #fff;
		padding-left: 30px;
	}
	.header img {
		width: 40px;
		height: 40px;
		vertical-align: middle;
		padding-right: 20px;
	}
	.nav {
		width: 100%;
		background: #fff;
		overflow: hidden;
	}
	.nav a {
		width: 33.3%;
		height: 40px;
		line-height: 40px;
		display: inline-block;
		float: left;
		text-align: center;
	}
 	.nav a:after {
	    content: '|';
	    float: right;
	    color: #dfdfdf;
	}
	.nav a:last-child:after {
    	content: ' ';
	}
	.content img {
		width: 100%;
	}
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
		background: #fff;
		box-sizing: border-box;
	}
	.bottom a {
		display: inline-block;
		float: left;
		width: 50%;
		text-align: center;
	}
	.bottom i { 
		padding-right: 10px;
	}
	.bottom a:first-child:after {
	    content: '|';
	    float: right;
	    color: #dfdfdf;
	}
	.bottom .icon-kefu {
		font-size: 20px;
	}
</style>