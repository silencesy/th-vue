<template>  
  <div class="home" v-show="homeData.figure" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading"
  infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
    <div class="search" :style="{backgroundColor: backgroundColor}">
      <router-link to="/home/HomeSearch">
        <span class="search-placeholder">Search</span>
        <div class="search-input"></div>
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
    <div class="nav-swiper">
      <BaseSwiper :swiperData="homeData.figure" />
    </div>
    <HomeSection :sectionData="homeData.deal"/>
    <HomeSection :sectionData="homeData.ticketing"/>
    <HomeSection :sectionData="homeData.feature_products"/>
    <HomeSection :sectionData="homeData.houseware"/>
    <HomeSection :sectionData="homeData.motherandbaby"/>
    <HomeSection :sectionData="homeData.toys"/>
    <HomeSection :sectionData="homeData.coupon"/>
    <HomeSection :sectionData="homeData.coupon"/>
    <BaseArticle :articleData="homeData.article"></BaseArticle>
    <div v-show="homeData.figure">
      <GoodsRow :goodsData="hotData">
        <div class="banner-img-box" slot="banner-img">
          <img class="banner-img" src="http://api.mall.thatsmags.com/Public/ckfinder/images/banner/floor/7hot.png"  alt="">
        </div>
      </GoodsRow>
    </div>
    <div class="more-icon" v-show="showMoreIcon">
      <mt-spinner type="fading-circle" :size='18' color="#f24827"></mt-spinner>
    </div>
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
      homeData: {},
      showMoreIcon: true,
      pagePara: {
        set_position: 12,
        pageSize: 30,
        p: 0
      },
      hotData: [],
      totalPages: -1,
      backgroundColor: 'rgba(246,67,44,0)'
    };  
  },
  components: {
    HomeSection,
    BaseSwiper,
    BaseArticle,
    GoodsRow,
    BackToTop
  },
  mounted() {
  	this.getHomeData();
    this.getMoreData();
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    loadMore() {
      this.getMoreData();
    },
    getHomeData() {
      var that = this;
      // that.$axios.post('http://api.mall.thatsmags.com/Api/Public/home')
      // .then(function (response) {
      //   console.log(response);
      //   that.homeData = response.data.data;
      //   Indicator.close();
      // })
      // .catch(function (error) {
      //   console.log(error);
      //   Indicator.close();
      // });
      // console.log(that.$http);
      that.$http.post('Api/Public/home')
      .then(function (response) {
        that.homeData = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getMoreData() { 
      var that = this;
      if (that.totalPages == that.pagePara.p || that.totalPages==0) {
        that.showMoreIcon = false;
      } else {
        that.pagePara.p++;
        that.$http.get('Api/Set/getList',{
          params: that.pagePara
        })
        .then(function (response) {
          that.hotData = that.hotData.concat(response.data.data.goods);
          that.totalPages = response.data.data.totalPages;
          if (that.totalPages == that.pagePara.p || that.totalPages==0) {
            that.showMoreIcon = false;
          }
        })
        .catch(function (error) {
          that.showMoreIcon = false;
          console.log(error);
        });
      }
    },
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
  input::-webkit-input-placeholder {
    color: #fff;
  }
  input:-moz-placeholder {
    color: #fff; 
  }
  input::-moz-placeholder {
    color: #fff;
  }
  input:-ms-input-placeholder {
    color: #fff;
  }
</style>  