<template>
	<div class="ArticleDetail" v-if="articleData.title">
		<div class="article">
			<div class="content">
				<p class="title">{{articleData.title}}</p>
				<p class="date word">{{articleData.createTime}}</p>
				<!-- <img src="static/images/common/article.png" alt="">
				<p class="word"></p> -->
				<div class="content-html" v-html="articleData.article_content">
					
				</div>
			</div>
			<div class="goods">
				<router-link to="/">
					<div><img src="static/images/common/169.jpg" alt=""></div>
					<div>
						<p class="line2">EMSA FLOW Slim Friends Carafe with Cooling Station</p>
						<p>
							<span class="price">¥ 168</span>
							<span class="buy">Buy</span>
						</p>
					</div>
				</router-link>
			</div>
		</div>
		<p class="morePick"><span>More Editor's Pick</span></p>
		<div class="articlePick">
			<!-- <BaseArticle>
				
			</BaseArticle> -->
		</div>
		<BackToTop />
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {
				articleData: {},
			}
		},
		components: {
			BaseArticle: r => { require.ensure([], () => r(require('../../BaseComponents/BaseArticle')), 'BaseArticle') },
			BackToTop: r => { require.ensure([], () => r(require('../../BaseComponents/BackToTop')), 'BackToTop') }
		},
		mounted () {
			this.getData();
		},
		methods: {
			getData() {
				var that = this;
				that.$http.post(that.urls.articleDetail,{
					id: that.$route.query.id
				})
				.then(function (response) {
					that.articleData = response.data.data;
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	}
</script>
<style scoped>
	.article {
		background: #fff;
		padding: 10px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.content {
		line-height: 24px;
	}
	.title {
		font-size: 18px;
		font-weight: 600;
	}
	.date {
		margin-top: 7px;
	}
	.word {
		color: #999;
		font-size: 14px;
	}
	.content img {
		width: 100%;
		display: block;
		margin: 10px 0;
	}
	.goods {
		background: #eee;
		padding: 10px;
		box-sizing: border-box;
		margin-top: 10px;
	}
	.goods > a {
		display: flex;
		justify-content: space-between;

	}
	.goods > a img {
		width: 80px;
		height: 80px;
		padding-right: 10px;
	}
	.goods > a > div:nth-child(2) {
		line-height: 24px;
	}
	.goods > a > div:nth-child(2) p:first-child {
		min-height: 53px;
	}
	.goods > a > div:nth-child(2) p:nth-child(2) {
		display: flex;
		justify-content: space-between;
	}
	.price {
		color: #F9421E;
		font-size: 20px;
	}
	.buy {
		width: 80px;
		height: 28px;
		background: #F9421E;
		color: #fff;
		text-align: center;
		line-height: 28px;
		border-radius: 20px;
	}
	.morePick {
		margin-left: 10px;
		margin-bottom: 20px;
	}
	.morePick span {
		padding-bottom: 2px;
		color: #F9421E;
		border-bottom: 2px solid #F9421E;
	}
	.articlePick {
		margin: 10px;
	}
	.content-html >>> img {
		width: 100% !important;
		height: auto !important;
	}

</style>