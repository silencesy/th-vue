<template>  
  <div class="Guide">  
    <div class="nav">  
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>  
    </div>  
      
    <div class="page-tab-container">  
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
        <mt-tab-container-item id="tab-container1">  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>  
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container2">  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>  
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container3">  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>  
        </mt-tab-container-item>  
      </mt-tab-container>  
    </div>  
  </div>  
</template>    
  
<script>  
  export default {  
    name: 'page-tab-container',  
    data() {  
      return {  
        active: 'tab-container1'  
      };  
    }  
  };  
</script>   
  
<style lang="css" scoped>  
  .item {  
    display: inline-block;  
  }    
  .nav {  
    padding: 10px;  
  }    
  .link {  
    color: inherit;  
    padding: 20px;  
    display: block;  
  }  
  .nav[data-v-988a9306] {
  	padding: 0;
  	background: #fff;
  	display: flex;
  	border-bottom: 1px solid #dfdfdf;
  }
  .mint-button--small {
  	background: #fff;
  	height: 40px;
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
</style> 