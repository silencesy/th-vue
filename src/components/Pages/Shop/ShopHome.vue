<template>
	<div class="ShopHome">
		<div class="header">
			<div>
				<img src="static/images/common/169.jpg" alt="">
				<span>Amor flora</span>
			</div>
			<div>
				<span class="iconfont icon-shoucang"></span>
				<router-link to="/" class="iconfont icon-sousuo"> </router-link>
			</div>
		</div>
		<div class="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/">All</router-link>
			<router-link to="/">New Arrivals</router-link>
		</div>
		<!-- 轮播开始 -->
		<BaseSwiper>

		</BaseSwiper>
		<!-- 轮播结束 -->
		<div class="content">
			<img src="static/images/common/shop.png" alt="">
			<img src="static/images/common/shop.png" alt="">
			<img src="static/images/common/shop.png" alt="">
		</div>
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

			}
		},
		components: {
			BaseSwiper: r => { require.ensure([], () => r(require('../../BaseComponents/BaseSwiper')), 'BaseSwiper') }
		},
		mounted () {
			
		}
	}
</script>
<style scoped>
	.header {
		width: 100%;
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: space-between;
		align-content: center;
		background: #F9421E;
		padding: 0 10px;
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