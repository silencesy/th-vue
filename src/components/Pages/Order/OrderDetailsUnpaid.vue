<template>
	<div class="OrderDetailsUnpaid">
		<OrderDetails >
			<div slot="fix" class="fix">
				<div>Total:<span>¥652</span></div>
				<div><router-link to="/">Pay</router-link></div>
			</div>
			<div slot="distance" class="distance"></div>
		</OrderDetails>
	</div>
</template>
<script>	
	export default {
		name: 'OrderDetailsUnpaid',
		data() {
			return {

			}
		},
		components: {
			OrderDetails: r => { require.ensure([], () => r(require('../../BaseComponents/OrderDetails')), 'OrderDetails') }
		}
	}
</script>
<style scoped>
	.distance {
		margin-bottom: 55px;
	}
</style>