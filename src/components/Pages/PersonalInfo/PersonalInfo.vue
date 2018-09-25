<template>
	<div class="PersonalInfo">
		<div class="container">
			<div>
				<div>Profile Picture</div>
				<div><img src="static/images/common/contactTwo.png" alt=""><i class="iconfont icon-combinedshapefuben"></i></div>
			</div>
			<div>
				<div>Username</div>
				<div>13923459281<i class="iconfont icon-combinedshapefuben"></i></div>
			</div>
			<mt-cell @click.native="unbind">
				<div>Change Password</div>
				<div><i class="iconfont icon-combinedshapefuben"></i></div>
			</mt-cell>
		</div>
		<div class="signOut"><button @click="signOut" class="btn">Sign out</button></div>
		
	</div>
</template>
<script>
	import {MessageBox} from 'mint-ui';
	import state from 'vuex';
	export default {
		name: 'PersonalInfo',
		data () {
			return {

			}
		},
		mounted () {
			console.log(state);
		},
		methods: {
			unbind: function () {
		        const htmls = `
		           <div class="box">
		            <div class="isunbind">Change the password</div>
		            <div class="inputBox"> 
									<input type="text" placeholder="Current password">
									<input type="text" placeholder="New password">
									<input type="text" placeholder="Please re-enter your password">
		            </div>
		          </div>
		        `;
		        MessageBox.confirm('', {
		          message: htmls,
		          title: '',
		          showConfirmButton:true,
		          showCancelButton:true,
		          cancelButtonClass:'cancelButton',
		          confirmButtonClass:'confirmButton',
		          confirmButtonText:'Done',
		          cancelButtonText:'Cancel'
		        }).then(action => {
		          if (action == 'confirm') {
		            console.log('abc');
		          }
		        }).catch(err => {
		          if (err == 'cancel') {
		            console.log('123');
		          }
		        });
		    },
		    signOut() {
		  		localStorage.removeItem("token");
		  		this.$router.push("/Login");
		  	}

		}
	}
</script>
<style scoped>
	.container {
		background: #fff;
		margin: 10px;
	}
	.container > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		border-bottom: 1px solid #dfdfdf;
		padding: 10px;
		box-sizing: border-box;
	}
	.container > div:first-child img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		vertical-align: middle;
	}
	.container > div:nth-child(2) div:nth-child(2) {
		color: #999;
	}
	.container > div i {
		padding-left: 10px;
	}

	.signOut {
		width: 100%;
		text-align: center;
	}
	.signOut .btn {
		width: 160px;
    background-color: #f6442b;
    color: #fff;
    border-width: 0;
    height: 36px;
    line-height: 36px;
    margin-top: 25px;
    border-radius: 30px;
	}


</style>