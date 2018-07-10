<template>
	<div class="AddressBook">
		<div class="fix">
			<div v-for="(item,index) in idArr" class="addressPer">
				<div class="addList">
					<p>Amanda</p>
					<p>15637849685</p>
					<p>154520620@qq.com</p>
					<p>上海市黄浦区蒙自路169号</p>
				</div>		
		    <div class="addBottom">
					<div class="addDefault">
						<input class="defaultRadio" type="radio" :id="item" :value="item" v-model="picked" @change="setDefault(item)">
		       	<label :for="item">Default</label>
					</div>
					<div class="addChange">
						<span><i class="iconfont icon-bianji">Edit</i></span>
						<span @click="setDelete(item)"><i class="iconfont icon-shanchu">Delete</i></span>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<router-link to='/'>+Add New Shipping Address</router-link>
		</div>
	</div>
</template>
<script>
	Array.prototype.remove = function(val) { 
		var index = this.indexOf(val); 
		if (index > -1) { 
		this.splice(index, 1); 
		} 
	};
	export default {
		name: 'AddressBook',
		data () {
			return {
				picked: '',
				idArr: [1,2,3,4,5,6]
			}
		},
		mounted () {
			this.picked=2;
		},
		methods:{
			setDefault(id) {
				// console.log(id)

			},
			setDelete(id) {
				this.idArr.remove(id);
			}

	  }

	}
</script>
<style scoped>
	.addressPer {
		background: #fff;
		margin: 10px;
		border-radius: 4px;
		padding: 15px;
		box-sizing: border-box;
	}
	.addressPer .addList p {
		line-height: 25px;
	}
	.addressPer .addList {
		margin-bottom: 10px;
	}
	.addBottom {
		overflow: hidden;
	}
	.addBottom .addDefault {
		float: left;
	}
	.addBottom .addChange {
		float: right;
	}
	.addChange span:nth-child(2) {
		margin-left: 20px;
	}
	.addChange .iconfont:before {
		padding-right: 5px;
		color: #999;
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
    border: 1px solid #f9421e
  }
  .bottom {
  	position: fixed;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	height: 40px;
  	line-height: 40px;
  	text-align: center;
  	background: #f9421e;
  }
  .bottom a {
    color: #fff;
  }
  .fix .addressPer:last-child {
		margin-bottom: 50px;
  }
</style>