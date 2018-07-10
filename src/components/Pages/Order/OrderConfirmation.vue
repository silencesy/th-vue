<template>
	<div class="OrderConfirmation">
		<ShopGoodsItem>
			<i class="iconfont icon-combinedshapefuben" slot="titleRight"></i>
		</ShopGoodsItem>
	</div>
</template>
<script>	
	export default {
		name: 'OrderConfirmation',
		data() {
			return {

			}
		},
		components: {
			ShopGoodsItem: r => { require.ensure([], () => r(require('../../BaseComponents/ShopGoodsItem')), 'ShopGoodsItem') }
		}
	}
</script>
<style scoped>
	
</style>