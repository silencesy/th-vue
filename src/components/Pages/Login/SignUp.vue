<template>
	<div class="SignUp">
		<LoginSystem>		
			<div slot="info">
				<div class="content">
					<div class="contentInfo signInfo">
						<input type="text" v-model='number' placeholder="Enter phone number">
						<button class="code">Send Code</button>
					</div>
					<div class="contentInfo"><input type="password" v-model='code' placeholder="Enter verification code"></div>
					<div class="contentInfo"><input type="text" v-model='password' placeholder="Enter password"></div>
					<div class="contentInfo"><input type="password" v-model='repassword' placeholder="Please re-enter your password"></div>
					<div class="contentInfo"><button class="btn" @click="Btn">Submit</button></div>
				</div>
			</div>
		</LoginSystem>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui'
	export default {
		name: 'SignUp',
		data () {
			return {
				number: "",
				code: "",
				password: "",
				repassword: ""

			}
		},
		components: {
			LoginSystem: r => { require.ensure([], () => r(require('../../BaseComponents/LoginSystem')), 'LoginSystem') }
		},
		mounted () {
			
		},
		methods: {
			Btn() {
				if(!this.number) {
					Toast('Please enter your number!');
				} else if(!this.code) {
					Toast('Please enter the verification code!');
				} else if(!this.password) {
					Toast('Please enter your password!');
				} else if(!this.repassword) {
					Toast('Please re-enter your password!');
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