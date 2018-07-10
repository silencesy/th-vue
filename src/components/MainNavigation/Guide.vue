<template>  
  <div>  
    <div class="nav">  
      <mt-button class="nav-item" size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>  
      <mt-button class="nav-item" size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>  
      <mt-button class="nav-item" size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>  
    </div>  
      
    <div class="page-tab-container">  
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
        <mt-tab-container-item class="item-container wrapper" id="tab-container1">
          <ScrollView>
          </ScrollView>
        </mt-tab-container-item>  
        <mt-tab-container-item class="item-container" id="tab-container2">  
          
        </mt-tab-container-item>  
        <mt-tab-container-item class="item-container" id="tab-container3">  
          
        </mt-tab-container-item>  
      </mt-tab-container>   
    </div>  
  </div>  
</template>    
  
<script>  
import BaseArticle from "../BaseComponents/BaseArticle";
import ScrollView from '../BaseComponents/ScrollView.vue';
let articleData = {
      "list": [
        {
          "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Article/614103700.png",
          "set_id": "16",
          "article_name": "Keep Your Kitchen Nice and Tidy with These Innovative Items",
          "create_time": "2018-06-11",
          "description": null,
          "coverpic": "http://api.mall.thatsmags.com"
        },
        {
          "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/toys/NERF/A4492/A449295111.jpg",
          "set_id": "9",
          "article_name": "Your Kids Will Love These Fun NERF Toys",
          "create_time": "2018-05-25",
          "description": null,
          "coverpic": "http://api.mall.thatsmags.com"
        },
        {
          "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Article/cook.jpg",
          "set_id": "13",
          "article_name": "Cooking Made Easy With This Premium Kitchenware",
          "create_time": "2018-06-05",
          "description": null,
          "coverpic": "http://api.mall.thatsmags.com"
        },
        {
          "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Article/1.jpg",
          "set_id": "17",
          "article_name": "Baby-Proof Your Home with These Safe Cleaning Products",
          "create_time": "2018-06-11",
          "description": null,
          "coverpic": "http://api.mall.thatsmags.com"
        }
      ]
    }
export default {  
  name: 'page-tab-container',  
  data() {  
    return {  
      active: 'tab-container1',
      height: 0,
      articleData: articleData,
      articleItemStyleObj: {
        'border': '1px solid #dfdfdf',
        'padding': '10px'
      },
      pullup: true,
      pulldown: true
    };  
  },
  components: {
    BaseArticle,
    ScrollView
  },
  mounted() {
    var that = this;
    that.height = that.screenHeight-95;
  },
  methods: {
    refresh() {
      console.log(123);
      this.$refs.pullrefresh.$emit('pullrefresh.finishLoad');
    },
    load() {
      console.log(456);
      this.$refs.pullrefresh.$emit('infinitescroll.loadedDone');
    }
  }
};  
</script>  

<style lang="css" scoped>  
  .nav {
    display: flex;
    border-bottom: 1px solid #dfdfdf;
  }
  .nav > .nav-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 0;
    border-width: 0;
    box-shadow: none;
  }
  .item-container {
    background-color: #fff;
 
  }
  .active-bttom {
    border-bottom: 1px solid #f6442b;
  }
	.mint-button--default {
		box-shadow: none;
		flex: 1;
		box-sizing: border-box;
		font-size: 16px;
	}	
	.mint-button::after {
		background: rgba(0,0,0,0);
		border-bottom: 2px solid #f6442b; 
	}
  .page-tabbar-tab-container {
    position: fixed;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 55px;
  }
  .item-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style> 
