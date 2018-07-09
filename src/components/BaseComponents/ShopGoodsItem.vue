<template>
	<div class="ShopGoodsItem">
		<div class="container">
			<div class="title">
				<div>
					<i class="iconfont icon-shanghu1"></i>
					<span>thmart</span>
				</div>
				<div>
					<slot name="titleRight"></slot>
				</div>
			</div>
			<div class="content">
				
			</div>
			<slot name="bottom"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ShopGoodsItem',
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	.ShopGoodsItem {
		padding: 15px;
	}
	.container {
		border: 1px solid #dfdfdf;
		padding: 15px;
	}
	.title {
		display: flex;
	}
	.title > div {
		flex: 1;
	}
	.title > div:nth-child(2) {
		text-align: right;
	}
	.iconfont.icon-combinedshapefuben {
		color: #999;
	}
</style>