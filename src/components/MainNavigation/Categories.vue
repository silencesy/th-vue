<template>  
  <div class="Categories">
    <SearchTop />
    <div class="container">
      <div class="left" :style="{width:'100%',height:height+'px'}">
        <ScrollView :height="height" :loadding="loadding" :isshowgoback="isshowgoback" color="#eee">
          <ul class="category-container">
            <li class="category-item line1" :class="item.id==categoryActive?'active':''" v-for="(item,index) in categoryList" @click="checkCategroy(item.id)">{{item.title}}</li>
          </ul>
        </ScrollView>
      </div>
      <div class="right" :style="{width:'100%',height:height-40+'px'}">
        <div class="sort-container">
          <Sort ref="Sort" @Sort="Sort"/>
        </div>
        <ScrollView ref="ScrollView" :height="height-40" :pullup="pullup" :data="goodsList"  @pullingUp="loadData">
          <GoodsRow  :goodsData="goodsList" :Columns="2"/>
        </ScrollView>
      </div>
    </div>
  </div>  
</template>  
  
<script>  
export default {  
  name: 'Categories',  
  data() {  
    return {  
      height: 0,
      page: 0,
      pageSize: 16,
      pullup: true,
      loadding: false,
      isshowgoback: false,
      categoryList: [],
      categoryActive: 1,
      goodsList: [],
      totalPage: 0,
      sort: 'createTime_desc'
    };
  },
  components: {
    GoodsRow: r => { require.ensure([], () => r(require('../BaseComponents/GoodsRow')), 'GoodsRow') },
    ScrollView: r => { require.ensure([], () => r(require('../BaseComponents/ScrollView')), 'ScrollView') },
    SearchTop: r => { require.ensure([], () => r(require('../BaseComponents/SearchTop')), 'SearchTop') },
    Sort: r => { require.ensure([], () => r(require('../BaseComponents/Sort')), 'Sort') }
  },
  mounted() {
    var that = this;
    localStorage.removeItem("classFlag");
    that.$nextTick(() => {
      setTimeout(function(){
        that.height = document.documentElement.clientHeight-55-50;
      },20);
    });
    that.getCategory();
    that.getActiveCategory();
    that.getGoodsData();
  },
  methods: {
    // 上拉加载
    loadData() {
      this.getGoodsData();
    },
    // 获取类别
    getCategory() {
      var that = this;
      that.$http.post(this.urls.categoryList,{fname: '0'})
      .then(function (response) {
        console.log(response);
        that.categoryList = response.data.data;
      });
    },
    //获取当前类别
    getActiveCategory() {
      var that = this;
      if (that.$route.query.id) {
        that.categoryActive = that.$route.query.id;
      } else {
        that.categoryActive = 0;
      }
    },
    // 切换分类
    checkCategroy(id) {
      if (this.categoryActive!=id) {
        this.categoryActive = id;
        // 触发Sort组件初始化
        this.$refs.Sort.init();
        this.initPara();
        this.getGoodsData();
      }
    },
    // 获取数据
    getGoodsData() {
      var that = this;
      // console.log({id: that.categoryActive,page: that.page,pageSize: that.pageSize,sort: that.sort});
      
      that.$http.post(this.urls.goodsList,{
        id: that.categoryActive,
        page: ++that.page,
        pageSize: that.pageSize,
        sort: that.sort
      })
      .then(function (response) {
        console.log(response);
        that.goodsList = that.goodsList.concat(response.data.data.data);
        if (response.data.data.totalPage == 0 || that.page >= response.data.data.totalPage) {
          that.$refs.ScrollView.endup();
        }
        that.totalPage = response.data.data.totalPage;
      });
    },
    // 改变排序
    Sort(data) {
      this.sort = data;
      this.initPara();
      this.getGoodsData();
    },
    // 初始化参数
    initPara() {
      this.page = 0;
      this.goodsList = [];
      this.totalPage = 0;
      this.$refs.ScrollView.scrollTo(0,0,0,'easing');
      this.$refs.ScrollView.startup();
    }
  },
  watch: {
    // selected: function (oldVal,newVal) {
    //   console.log(oldVal,newVal);
    // }
  }
};  
</script>  
  
<style scoped>
  
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