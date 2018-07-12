<template>
	<div class="ArticleDetail">
		<div class="article">
			<div class="content">
				<p class="title">Add Essential Minerals to Your Water with this Stylish Pitcher</p>
				<p class="date word">2018-06-30</p>
				<img src="static/images/common/article.png" alt="">
				<p class="word">Aside from the fact that tap water in the PRC often has ‘funky’ taste, the water coming from the pipes in your apartment may also lack something your body needs daily: minerals, specifically magnesium. That’s why we’re excited to introduce you to Best Water Technology’s (BWT) magnesium mineralizing pitcher and filters, available right now on thMart.</p>
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
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {

			}
		},
		// components: {
		// 	BaseArticle: r => { require.ensure([], () => r(require('../../BaseComponents/BaseArticle')), 'BaseArticle') }
		// },
		mounted () {
			
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


</style>