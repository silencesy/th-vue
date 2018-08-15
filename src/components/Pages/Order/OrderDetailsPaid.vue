<template>
	<div class="OrderDetailsPaid">
		<OrderDetails >
			<div class="date" slot="date">
				<div>
					<p>Order No. :<span>1234567890123456</span></p>
					<p>Ordered :<span>2018-06-26 20:23:10</span></p>
				</div>
				<div>Copy</div>
			</div>
		</OrderDetails>
	</div>
</template>
<script>	
	export default {
		name: 'OrderDetailsPaid',
		data() {
			return {

			}
		},
		components: {
			OrderDetails: r => { require.ensure([], () => r(require('../../BaseComponents/OrderDetails')), 'OrderDetails') }
		}
	}
</script>



