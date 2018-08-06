<template>
	<div class="ForgotPassword">
		<LoginSystem>		
			<div slot="info">
				<div class="content"> 
					<SendCode @numberChange="numberChange"/>
					<div class="contentInfo"><input type="text" v-model='code' placeholder="Enter verification code"></div>
					<div class="contentInfo"><button class="btn" @click="Btn">Done</button></div>
				</div>
			</div>
		</LoginSystem>
	</div>
</template>
<script> 
	import { Toast } from 'mint-ui'
	export default {
		name: 'ForgotPassword',
		data () {
			return {
				number: "",
				code: ""
			}
		},
		components: {
			LoginSystem: r => { require.ensure([], () => r(require('../../BaseComponents/LoginSystem')), 'LoginSystem') },
			SendCode: r => { require.ensure([], () => r(require('../../BaseComponents/SendCode')), 'SendCode') }
		},
		mounted () {
			
		},
		methods: {
			Btn() {
				var that = this;
				if(!that.number) {
					Toast('Please enter your number!');
					return false;
				} else if (!(/^1[34578]\d{9}$/.test(that.number))) {
					Toast('Please enter a 11-digit valid number!');
					return false;
				} else if(!that.code) {
					Toast('Please enter the verification code!');
					return false;
				}
				// 表单提交
				that.$http.post(this.urls.wxBindMobile,{
			    	mobile: that.number,
			    	code: that.code,
			    	openid: this.$route.query.openid,
			    	nickname: this.$route.query.nickname,
			    	sex: this.$route.query.sex,
			    	city: this.$route.query.city,
			    	province: this.$route.query.province,
			    	country: this.$route.query.country,
			    	headimgurl: this.$route.query.headimgurl,
			    	unionid: this.$route.query.unionid,
			    })
				.then(function (response) {
					this.loginCallBack(response);
				});
			},
			numberChange(data) {
				this.number = data;
			},
			loginCallBack(response) {
				console.log(response);
				localStorage.setItem('token',response.data.data.token);
				if (localStorage.getItem("goback")) {
					window.location.href = localStorage.getItem("goback");
					localStorage.removeItem("goback");
				} else {
					this.$router.push('/');
				}
			}
		}
	}
</script>
<style scoped>
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
		padding: 0 5px;
		box-sizing: border-box;
		background-color: #eee;
	    outline: 0;
	    border: none;
	    border-bottom: 1px solid #dfdfdf;
	}
	.contentInfo .btn {
		width: 160px;
	    background-color: #f6442b;
	    color: #fff;
	    border-width: 0;
	    height: 36px;
	    line-height: 36px;
	    margin-top: 25px;
	    border-radius: 30px;
	}

	.contentInfo {
		position: relative;
	}
	.code {
		position: absolute;
		color: #fff;
		background: #f6442b;
		border-width: 0;
		top: 0;
		right: 10px;
		width: 100px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		border-radius: 30px;
	}
</style>