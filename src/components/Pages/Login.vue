<template>
	<div class="Login">
		<div class="logo">
			<img src="static/images/common/Mart.svg" alt="">
		</div>
		<div class="content">
			<div class="contentInfo"><input type="text" v-model='name' placeholder="Enter phone number"></div>
			<div class="contentInfo"><input type="password" v-model='password' placeholder="Enter password"></div>
			<div class="tips">
				<router-link to='/'>Forgot password?</router-link>
				<router-link to='/'>Don't have an account?</router-link>
			</div>
			<div class="contentInfo"><button @click="Login">LOG IN</button></div>
		</div>
		<div class="wechat">
	   	<span class="line"></span>
	   	<span class="txt">Wechat Login</span>
	   	<span class="line"></span>
	   	<i class="iconfont icon-weixin1"></i>
		</div>
		<router-link to='/' class="invest">
			<img src="static/images/common/zhaoshang.jpg" alt="">
		</router-link>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui'
	export default {
		name: 'Login',
		data () {
			return {
				name: "",
				password: ""
			}
		},
		mounted () {
			
		},
		methods: {
			Login() {
				console.log(this.name,this.password)
				if(!this.name) {
					Toast('name empty');
					// Toast({
					//   message: 'name empty',
					//   iconClass: 'icon icon-success'
					// });
					// alert('w');
				} 
			}
		}
	}
</script>
<style scoped>
	.logo {
		width: 100%;
		text-align: center;
		margin: 10% 0 20% 0;
	}
	.logo img {
		width: 140px;
    height: 60px;
	}
	.contentInfo {
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}
	.contentInfo input {
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-bottom: 20px;
		padding: 15px;
		box-sizing: border-box;
		background-color: #E8E8E8;
		outline: 0;
		border: none;
	}
	.tips {
		width: 90%;
		margin: 0 auto;
		display: flex; 
		justify-content: space-between;
	}
	.tips a {
		font-size: 14px;
	}
	.tips a:first-child {
		font-size: 14px;
		padding-left: 15px;
	}
	.contentInfo button {
		padding: 6px 50px;
    background-color: #f6442b;
    color: #fff;
    border-width: 0;
    height: 40px;
    margin-top: 25px;
    border-radius: 4px;
	}
	.wechat {
   	text-align: center;
   	margin-top: 40px;
	}
 .wechat .line {
   	display: inline-block;
   	width: 50px;
   	border-top: 1px solid #666;
	}
	.wechat .txt {
  	vertical-align: middle;
  	padding: 0 20px;
  	display: inline-block;
    margin-top: 5px;
	}
	.wechat i {
		display: block;
		color: #34c159;
    font-size: 50px;
    margin: 20px 0 40px 0;
	}
	.invest {
		width: 100%;
	}
	.invest img {
		width: 100%;
	}
</style>