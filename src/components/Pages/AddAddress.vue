<template>
	<div class="AddAddress">
		<div class="container">
			<div class="info">
				<div class="baseInfo">
					<div>
						<span><i>*</i> Full Name :</span>
						<input type="text" v-model='name'>
					</div>
					<div>
						<span><i>*</i> Phone nunber :</span>
						<input type="text" v-model='number'>
					</div>
					<div>
						<span><i>*</i> Email :</span>
						<input type="text" v-model='email'>
					</div>
				</div>
				<div class="address">
					<textarea rows="5" v-model='address' placeholder="* Please write down your detailed address in Chinese(city name is required)"> </textarea>
					<textarea rows="5" placeholder="Please write down your detailed address in English(city name is required)"> </textarea>
				</div>
				<div class="addDefault">
					<input class="defaultRadio" type="radio" id="item" value="item">
	       	<label for="item">Default</label>
				</div>
			</div>
			<div class="bottom" @click="AddAdress">Submit</div>
		</div>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui'
	export default {
		name: 'AddAdress',
		data () {
			return {
				name: "",
				number: "",
				email: "",
				address: ""
			}
		},
		mounted () {
			
		},
		methods: {
			AddAdress() {
				if(!this.name) {
					Toast('Please enter your name!');
				}
				else if(!this.number) {
					Toast('Please enter your number!');
				}
				else if(!this.email) {
					Toast('Please enter your email!');
				}
				else if(!this.email) {
					Toast('Please enter your email!');
				}
			}
		}
	}
</script>
<style scoped>
	.container {
		margin: 10px;
	}
	.info {
		background: #fff;
		margin-bottom: 56px;
	}
	.info input {
	    border: none;
	    outline: none;
	    color: #999;
	    padding-left: 8px;
	}
	.baseInfo > div {
		height: 60px;
		line-height: 60px;
		padding: 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #dfdfdf;
	}
	.info i {
		color: #F9421E;
	}
	.info span {
		color: #666;
	}
	.address {
		margin: 0 10px;
	}
	.address textarea:first-child {
		margin-top: 20px;
	}
	textarea {
    border: 1px solid #dfdfdf;
    width: 100%;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 15px;
    font: inherit;
    color: #999;
    line-height: 24px;
    outline: none;
    resize: none;
	}
	.defaultRadio {
	  position: absolute;
	  display: none;
	}
  .defaultRadio + label {
    position: relative;
    display: block;
    padding-left: 30px;
    cursor: pointer;
    vertical-align: middle;
  }
  .defaultRadio + label:hover:before {
    animation-duration: 0.4s;
    animation-fill-mode: both;
    animation-name: hover-color;
  }
  .defaultRadio + label:before {
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    width: 19px;
    height: 19px;
    content: '';
    border: 1px solid #c0c0c0;
  }
  .defaultRadio + label:after {
    position: absolute;
   	display: none;
    content: '';
  }
  .defaultRadio:checked + label:before {
    animation-name: none;
  }
  .defaultRadio:checked + label:after {
    display: block;
  }
  .defaultRadio + label:before {
    border-radius: 50%;
  }
  .defaultRadio + label:after {
    top: 7px;
    left: 7px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f9421e;
  }
  .defaultRadio:checked + label:before {
    border: 1px solid #f9421e;
  }
	.addDefault {
		margin-left: 10px;
		padding-bottom: 20px;
	}
	.bottom {
		position: fixed;
    display: block;
    height: 36px;
    line-height: 36px;
    background: #F9421E;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 10px 10px 10px;
    color: #fff;
    text-align: center;
    border-radius: 23px;
	}
</style>