<template>  
  <div class="home">  
    <div class="nav-swiper">
      <BaseSwiper :swiperData="homeData.figure" />
    </div>
    <HomeSection :sectionData="homeData.deal"/>
    <BaseArticle :articleData="homeData.article"></BaseArticle>
  </div>

</template>  
  
<script>
import HomeSection from "../BaseComponents/HomeSection";
import BaseSwiper from "../BaseComponents/BaseSwiper";
import BaseArticle from "../BaseComponents/BaseArticle";
export default {  
  name: 'home',  
  data() {  
    return {  
       homeData: {}
    };  
  },
  components: {
    HomeSection,
    BaseSwiper,
    BaseArticle
  },
  mounted() {
  	var that = this;
  	that.$axios.post('http://api.mall.thatsmags.com/Api/Public/home')
  	.then(function (response) {
  		console.log(response);
  		that.homeData = response.data.data;
  	})
  	.catch(function (error) {
  		console.log(error);
  	});
  },
  methods: {
    go() {
      this.$router.push('/GoodsDetails');
    }
  }
};  
</script>  
  
<style scoped>
  .home {
    padding-bottom: 65px;
  }
</style>  