<template>
	<div class="BaseArticle">
		<div class="banner-img-box" v-show="articleData.pic">
			<img class="banner-img" :src="articleData.pic" alt="">
		</div>
		<div class="article-content" :style="{backgroundColor:articleContentBg}">
			<div class="article-item" v-for="(item,index) in articleData.data" :key="index" :style="articleItemStyleObj" @click="goDetails(item.id)">
				<div class="img-box">
					<img v-lazy="item.pic" alt="">
				</div>
				<div class="article-info">
					<p class="line2">{{item.title}}</p>
					<span class="date">{{item.createTime}}</span>
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
			type: [Object,Array],
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
  	},
  	methods: {
  		goDetails(id) {
  			this.$router.push({ name: 'ArticleDetail', params: { id: id}})
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