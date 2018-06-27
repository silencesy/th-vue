<template>
	<div class="WishList">
		<p>{{ $route.params.GoodsId}}</p>
	</div>
</template>
<script>
	export default {
		name: 'WishList',
		data(){
			return {

			}
		},
		mounted() {
  			console.log(this.$route.params.GoodsId);
  		}
	}
</script>
<style scoped>
	
</style>