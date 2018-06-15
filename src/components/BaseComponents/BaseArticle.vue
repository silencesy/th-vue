<template>
	<div class="BaseArticle">
		<slot>
			<div class="banner-img-box">
				<img class="banner-img" :src="articleData.image" alt="">
			</div>
		</slot>
		<div class="article-content">
			<div class="article-item" v-for="(item,index) in articleData.list" :key="index">
				<div class="img-box">
					<img :src="item.set_img" alt="">
				</div>
				<div class="article-info">
					<p>{{item.article_name}}</p>
					<span class="date">{{item.create_time}}</span>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
	name: 'BaseArticle',
	props: {
		articleData: {
			type: Object,
			default: function () {  
		      return {}
		    }  
		}
	},
	data() {  
	    return {  
	   	 
	    }
  	},
  	computed: {  
	    swiper() {  
	      return this.$refs.baseSwiper.swiper;  
	    }  
  	}
	}
</script>
<style scoped>
	.BaseArticle {
		background-color: #fff;
	}
	.banner-img {
		width: 100%;
		height: auto;
	}
	.article-item {
		display: flex;
	}
	.article-content {
		padding: 0 15px;
	}
	.article-item {
		border-bottom: 1px solid #dfdfdf;
		padding: 10px 0;
	}
	.article-item .img-box {
		flex: 1;
	}
	.article-item .img-box img {
		width: 100%;
		float: left;
	}
	.article-item .article-info {
		flex: 2;
		padding-left: 15px;
		position: relative;

	}
	.article-item .article-info .date {
		position: absolute;
		right: 15px;
		bottom: 0;
	}
</style>