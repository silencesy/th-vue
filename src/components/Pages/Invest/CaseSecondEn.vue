<template>
	<div class="CaseFirst">
    <div class="anli bottomMargin">
      <img src="static/images/common/2_01.jpg" alt="">
      <img src="static/images/common/2_02.jpg" alt="">
      <img src="static/images/common/2_03.jpg" alt="">
      <img src="static/images/common/2_04.jpg" alt="">
      <img src="static/images/common/2_05.jpg" alt="">
    </div>

    <div class="fixBottom">
        <router-link to="/CostEn">Previous Page</router-link>
    </div>
	</div>
</template>
<script>
	export default {
	  name: 'CaseFirst',
	  data () {
	    return {

	    }
	  },
	  mounted() {
	    
	  }
	}
</script>
<style scoped>
	.fixBottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #f9421e;
		text-align: center;
	}
	.fixBottom a {
		color: #fff;
		font-weight: 600;
	}
	.bottomMargin {
		padding-bottom: 35px;
	}
	.anli {
		width: 100%;
	}
	.anli img {
		width: 100%;
	}
</style>