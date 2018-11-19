<template>  
  <div class="home" v-show="homeData.figure" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading"
  infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
    <!-- Search -->
    <div class="search" :style="{backgroundColor: backgroundColor}">
      <router-link to="/HomeSearch">
        <span class="search-placeholder">Search</span>
        <div class="search-input"></div>
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
    <!-- figure -->
    <div class="nav-swiper">
      <BaseSwiper :swiperData="homeData.figure" />
    </div>
    <!-- deal -->
    <HomeSection :sectionData="homeData.deal" bannerId='17'/>
    <!-- shop -->
    <HomeSection :sectionData="homeData.shop" shop="shop"/>
    <div>123</div>
    <HomeSection  :sectionData="homeData.groupBuying"/>
    <div>123</div>
    <!-- ticketing -->
    <HomeSection :sectionData="homeData.ticketing" bannerId='1' :Categories="Categories"/>
    <HomeSection v-for="(item,index) in homeData.category" :sectionData="item" :bannerId='item.id' :Categories="Categories" :key="index"/>

    <!-- article -->
    <BaseArticle :articleData="homeData.article"></BaseArticle>
    <!-- hotProduct -->
    <div v-if="homeData.figure">
      <GoodsRow :goodsData="hotData">
        <div class="banner-img-box" slot="banner-img">
          <img class="banner-img" :src="homeData.hotProducts.pic"  alt="">
        </div>
      </GoodsRow>
    </div>
    <!-- more-icon -->
    <div class="more-icon" v-show="showMoreIcon">
      <mt-spinner type="fading-circle" :size='18' color="#f24827"></mt-spinner>
    </div>
    <!-- backtop -->
    <BackToTop />
  </div>
  
</template>  
   
<script>
import HomeSection from "../BaseComponents/HomeSection";
import BaseSwiper from "../BaseComponents/BaseSwiper";
import BaseArticle from "../BaseComponents/BaseArticle";
import GoodsRow from "../BaseComponents/GoodsRow";
import BackToTop from "../BaseComponents/BackToTop";
export default {  
  name: 'home',  
  data() {  
    return {
      // 首页数据
      homeData: {},
      // 加载图标
      showMoreIcon: true,
      // 分页参数
      pagePara: {
        id: 12,
        pageSize: 6,
        page: 0,
        sort: 'order_asc'
      },
      // hotgoods
      hotData: [],
      // 总共页数
      totalPages: -1,
      // 搜索渐变颜色
      backgroundColor: 'rgba(246,67,44,0)',
      // 是否是商户
      shop: true,
      // 是否是分类
      Categories: true
    };  
  },
  components: {
    HomeSection,
    BaseSwiper,
    BaseArticle,
    GoodsRow,
    BackToTop
  },
  created() {
    this.getHomeData();
    this.getMoreData();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    // 上拉加载
    loadMore() {
      this.getMoreData();
    },
    // 获取首页数据
    getHomeData() {
      var that = this;
      that.$http.post(that.urls.home)
      .then(function (response) {
        that.homeData = response.data.data;
        console.log(that.homeData)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    // 请求上拉加载分页数据
    getMoreData() { 
      var that = this;
      if (that.totalPages == that.pagePara.page || that.totalPages==0) {
        that.showMoreIcon = false;
      } else {
        that.pagePara.page++;
        that.$http.post(that.urls.hotGoods,that.pagePara)
        .then(function (response) {
          // console.log(response);
          that.hotData = that.hotData.concat(response.data.data.data);
          that.totalPages = response.data.data.totalPage;
          if (that.totalPages == that.pagePara.page || that.totalPages==0) {
            that.showMoreIcon = false;
          }
        })
        .catch(function (error) {
          that.showMoreIcon = false;
          console.log(error);
        });
      }
    },
    // 顶部搜索栏渐变
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var distance = 250;
      if(scrollTop > distance){
          this.backgroundColor = "rgba(246,67,44,0.95)";
      }
      else{
        var opacity = 0.95 * (scrollTop/distance);
        this.backgroundColor = "rgba(246,67,44,"+ opacity +")" ;
      }
    }
  }
};  
</script>
<style scoped>
  .home {
    padding-bottom: 55px;
  }
  .search {
    height: 50px;
    max-width: 750px;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    margin: auto;
    z-index: 10;
    padding: 10px;
    box-sizing: border-box;
  }
  .search-placeholder {
    color: #fff;
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
    background-color: rgba(255,255,255,0.6);
    padding-left: 20px;
    color: #fff;
    outline: none;
  }
  .iconfont.icon-sousuo {
    color: #fff;
    position: absolute;
    right: 24px;
    top: 16px;
  }
</style>  