<template>  
  <div class="home" v-show="homeData.figure" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading"
  infinite-scroll-distance="0" infinite-scroll-immediate-check="false">  
    <div class="nav-swiper">
      <BaseSwiper :swiperData="homeData.figure" />
    </div>
    <HomeSection :sectionData="homeData.deal"/>
    <BaseArticle :articleData="homeData.article"></BaseArticle>
    <HomeSection :sectionData="homeData.ticketing"/>
    <HomeSection :sectionData="homeData.feature_products"/>
    <HomeSection :sectionData="homeData.houseware"/>
    <HomeSection :sectionData="homeData.motherandbaby"/>
    <HomeSection :sectionData="homeData.toys"/>
    <HomeSection :sectionData="homeData.coupon"/>
    <HomeSection :sectionData="homeData.coupon"/>
    <div v-show="homeData.figure">
      <GoodsRow :goodsData="hotData" :Columns="3">
        <img src="http://api.mall.thatsmags.com/Public/ckfinder/images/banner/floor/7hot.png" slot="banner-img" alt="">
      </GoodsRow>
    </div>
    <div class="more-icon" v-show="showMoreIcon">
      <mt-spinner type="fading-circle" :size='18' color="#f24827"></mt-spinner>
    </div>
  </div>
</template>  
   
<script>
import HomeSection from "../BaseComponents/HomeSection";
import BaseSwiper from "../BaseComponents/BaseSwiper";
import BaseArticle from "../BaseComponents/BaseArticle";
import GoodsRow from "../BaseComponents/GoodsRow";
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
      totalPages: -1
    };  
  },
  components: {
    HomeSection,
    BaseSwiper,
    BaseArticle,
    GoodsRow
  },
  mounted() {
  	this.getHomeData();
    this.getMoreData();
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
    }
  }
};  
</script>
<style>
  .more-icon {
    padding-top: 5px;
  }
  .mint-spinner-fading-circle {
    margin: 0 auto;
  }
</style>
  
<style scoped>
  .home {
    padding-bottom: 62px;
  }
</style>  