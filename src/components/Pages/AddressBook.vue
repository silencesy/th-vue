<template>
	<div class="AddressBook">
		{{$route.params.GoodsId}}
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {

			}
		},
		mounted () {
			console.log(this.$route.params.GoodsId);
		}
	}
</script>
<style scoped>
	
</style>