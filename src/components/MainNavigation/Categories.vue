<template>  
  <div class="Categories">
    <div class="search">
      <router-link to="/home/HomeSearch">
        <span class="search-placeholder">Search</span>
        <div class="search-input"></div>
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
    <div class="container">
      <div class="left" :style="{width:'100%',height:height+'px'}">
        <ScrollView :height="height" :noDada="noDada">
          <ul class="category-container">
            <li class="category-item" :class="item.id==categoryActive?'active':''" v-for="(item,index) in categoryList" @click="checkCategroy(item.id)">{{item.title}}</li>
          </ul>
        </ScrollView>
      </div>
      <div class="right" :style="{width:'100%',height:height-40+'px'}">
        <div class="sort-container">
          <Sort :init="init" @Sort="Sort"/>
        </div>
        <ScrollView :height="height-40" :pullup="pullup"  @pullingUp="loadData">
          <ul>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
            <li>123123</li>
          </ul>
        </ScrollView>
      </div>
    </div>
    <!-- <div class="left wrapper" ref="leftWrapper" :style="{width:'100%',height:height+'px'}">
      <div class="content">
        <mt-cell title="标题文字"  is-link v-for="(item,index) in 20" :key="index"></mt-cell>
      </div>
    </div>
    <div class="right wrapper" ref="rightWrapper" :style="{width:'100%',height:height+'px'}">
      <div class="content">
        <GoodsRow  :goodsData="goodsData" :Columns="2" backgroundColor="#eee"/>
        <div class="more-icon" v-show="showMoreIcon">
          <mt-spinner type="fading-circle" :size='18' color="#f24827"></mt-spinner>
        </div>
      </div>
    </div>
    <div class="right wrapper" ref="rightWrapper" :style="{width:'100%',height:height+'px'}">
      <ScrollView :pullup="pullup" @pullingUp="loadData">
        <GoodsRow  :goodsData="goodsData" :Columns="2" backgroundColor="#eee"/>
      </ScrollView>
    </div> -->
  </div>  
</template>  
  
<script>  
export default {  
  name: 'Categories',  
  data() {  
    return {  
      height: 0,
      goodsData: [],
      p: 0,
      pullup: true,
      noDada: false,
      selected: '1',
      categoryList: [],
      categoryActive: 1,
      init: false
    };
  },
  components: {
    GoodsRow: r => { require.ensure([], () => r(require('../BaseComponents/GoodsRow')), 'GoodsRow') },
    ScrollView: r => { require.ensure([], () => r(require('../BaseComponents/ScrollView')), 'ScrollView') },
    Sort: r => { require.ensure([], () => r(require('../BaseComponents/Sort')), 'Sort') }
  },
  mounted() {
    var that = this;
    that.$nextTick(() => {
      setTimeout(function(){
        that.height = document.documentElement.clientHeight-55-50;
      },20);
    });
    that.getCategory();
  },
  methods: {
    loadData() {
      console.log(1111);
    },
    getCategory() {
      var that = this;
      that.$http.post('Category/list',{fname: '0'})
      .then(function (response) {
        that.categoryList = response.data.message;
      });
    },
    checkCategroy(id) {
      if (this.categoryActive!=id) {
        this.categoryActive = id;
        this.init = true;
      }
    },
    lift() {
      console.log(0);
    },
    Sort(data) {
      console.log(data);
    }
  },
  watch: {
    selected: function (oldVal,newVal) {
      console.log(oldVal,newVal);
    }
  }
};  
</script>  
  
<style scoped>
  .search {
    height: 50px;
    max-width: 750px;
    background-color: #fff;
    z-index: 10;
    padding: 10px;
    box-sizing: border-box;
  }
  .search-placeholder {
    color: #999;
    position: absolute;
    left: 24px;
    top: 16px;
  }
  .search .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    border-width: 0;
    border-radius: 16px;
    background-color: #eee;
    padding-left: 20px;
    color: #999;
    outline: none;
  }
  .iconfont.icon-sousuo {
    color: #999;
    position: absolute;
    right: 24px;
    top: 16px;
  }
  .container {
    display: flex;
  }
  .left {
    flex: 1;
    box-sizing: border-box;
    border-top: 1px solid #dfdfdf;
    /*background-color: red;*/
  }
  .category-item {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    position: relative;
  }
  .category-container .active.category-item:before {
    position: absolute;
    top: 14px;
    left: 1px;
    content:"";
    background-color: #F9421E;
    font-weight:bold;
    width: 2px;
    height: 12px;
  }
  .category-container .active.category-item {
    color: #F9421E;
    background-color: #fff;
  }
  .right {
    flex: 2;
    box-sizing: border-box;
    /*background-color: blue;*/
  }
  .sort-container {
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  .mint-navbar .mint-tab-item {
    padding: 14px 0;
  }
  
  
</style>  