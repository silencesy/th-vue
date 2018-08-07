<template>
	<div class="AddAddress">
		<div class="container">
			<div class="info">
				<div class="baseInfo">
					<div>
						<label for="name"><i>*</i> Full Name :</label> 
						<input type="text" v-model='name' id="name">					
					</div>
					<div>
						<label for="number"><i>*</i> Phone nunber :</label> 
						<input type="text" v-model='number' id="number">
					</div>
					<div>
						<label for="email"><i>*</i> Email :</label>
						<input type="text" v-model='email' id="email">
					</div>
					<div>
						<label for="add"><i>*</i> 选择地址：</label> 
						<span>{{myAddressProvince}} {{myAddressCity}} <!-- {{myAddresscounty}} --></span>
					</div>
					<div>
		        <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
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
			<div class="bottom">Submit</div>
		</div>
	</div>
</template>
<script>
	import { Picker } from 'mint-ui';
  import myaddress from './address.json';
	// import { Toast } from 'mint-ui';
	export default {
		name: 'AddAdress',
		components: {
      'mt-picker': Picker
    },
		data () {
			return {
       	myAddressSlots: [
          {
            flex: 1,
            defaultIndex: 1,    
            values: Object.keys(myaddress),  //省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        myAddressProvince:'省',
        myAddressCity:'市',
        myAddresscounty:'区/县',
			}
		},
		mounted () {
			this.$nextTick(() => {
        this.myAddressSlots[0].defaultIndex = 0    
      });
		},
		methods: {
			onMyAddressChange(picker, values) {
       if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
          this.myAddressProvince = values[0];
          this.myAddressCity = values[1];
          this.myAddresscounty = values[2];
        }
      },

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
	}
	.baseInfo > div {
		padding: 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #dfdfdf;
		overflow: hidden;
	}
	.baseInfo i {
		color: #F9421E;
	}
	.baseInfo label {
		color: #666;
		line-height: 40px;
		float: left;
	}
	.baseInfo input {
		height: 40px;
		float: left;
	}
	.baseInfo div:first-child label {
		width: 36%;
	}
	.baseInfo div:first-child input {
		width: 64%;
	}
	.baseInfo div:nth-child(2) label {
		width: 47%;
	}
	.baseInfo div:nth-child(2) input {
		width: 53%;
	}
	.baseInfo div:nth-child(3) label {
		width: 27%;
	}
	.baseInfo div:nth-child(3) input {
		width: 73%;
	}
	.baseInfo span {
		display: inline-block;
    line-height: 40px;
    color: #999;
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