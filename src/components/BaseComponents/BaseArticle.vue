<template>
	<div class="BaseArticle">
		<div class="banner-img-box" v-show="articleData.image">
			<img class="banner-img" :src="articleData.image" alt="">
		</div>
		<div class="article-content" :style="{backgroundColor:articleContentBg}">
			<div class="article-item" v-for="(item,index) in articleData.list" :key="index" :style="articleItemStyleObj">
				<div class="img-box">
					<img v-lazy="item.set_img" alt="">
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
		},
		articleItemStyleObj: {
			type: Object,
			default: function () {  
		      return {
		      	'borderBottom': '1px solid #dfdfdf'
		      }
		    }  
		},
		articleContentBg: {
			type: String,
			default: '#fff'
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
	.banner-img-box {
		background-color: #eee;
		padding-top: 10px;
	}
	.banner-img {
		width: 100%;
	    height: auto;
	    display: block;
	}
	.article-item {
		display: flex;
	}
	.article-content {
		padding: 10px 15px;
	}
	.article-item {
		box-sizing: border-box;
		padding: 10px 0;
		border-radius: 4px;
		margin-bottom: 10px;
		background-color: #fff;

	}
	.article-item:last-child {
		margin-bottom: 0px;
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
	img {
		width: 100%;
	}
</style>