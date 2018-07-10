<template>
	<div class="Sort">
		<div :class="{active:index == 1}" @click="tab(1)">Latest</div>
		<div :class="{active:index == 2}" @click="tab(2)">Sale</div>
		<div :class="{active:index == 3}" @click="tab(3)">Price <span class="arrow-box"><i class="iconfont icon-xiangshangjiantou-copy-copy-copy-copy" :class="{active:index == 3 && lift == 3}"></i><i class="iconfont icon-xiangshangjiantou-copy-copy-copy" :class="{active:index == 3 && lift == 4}"></i></span></div>
	</div>
</template>
<script>
	/**
	 * index当前索引 用于选中当前项 
	 * lift升降序 向上和向下箭头高亮
	 * frist 当选择了price之后再切换latest和sale栏  然后再切回price的时候保持之前的price升降序
	 */
	export default {
		name: "Sort",
		props: {
			init: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				index: 1,
				lift: 4,
				frist: false
			}
		},
		methods: {
			tab(index) {
				var that = this;
				if (that.index!=index) {
					that.index = index;
					if (index == 1||index == 2) {
						that.$emit('Sort',index);
					}
				}
				setTimeout(function(){
					if(that.frist) {
						that.frist = false;
						that.$emit('Sort',that.lift);
					} else if (that.index == 3 && index == 3){
						if (that.lift == 3) {
							that.lift = 4;
							that.$emit('Sort',that.lift);
						} else {
							that.lift = 3;
							that.$emit('Sort',that.lift);
						}
					}
				},20);
			}
		},
		watch: {
			index: function(newVal,oldVal) {
				var that = this;
				if (newVal==3) {
					that.frist = true;
				} else {
					that.frist = false;
				}
			},
			init: function(newVal,oldVal) {
				if (newVal == true) {
					this.index = 1;
					this.lift =4;
					this.frist = false;
					this.init = false;
				}
			}
		}
	}
</script>
<style scoped>
	.Sort {
		display: flex;
		height: 40px;
		background-color: #fff;
	}
	.Sort > div {
		flex: 1;
		text-align: center;
		height: 40px;
		line-height: 40px;
		position: relative;
	}
	.Sort > div.active {
		color: #F9421E;
	}
	.Sort > div.active:after {
		position: absolute;
		top: auto;
	    bottom: 0px;
	    left: 0;
	    right: 0;
	    margin: auto;
	    content:"";
	    background-color: #F9421E;
	    font-weight:bold;
	    width: 35px;
	    height: 2px;
	}
	.arrow-box {
		display: inline-block;
		height: 10px;
		position: relative;
	}
	.arrow-box .iconfont {
		position: absolute;
		color: #999;
	}
	.arrow-box .icon-xiangshangjiantou-copy-copy-copy-copy {
		top: -18px;
		left: 0;
	}
	.arrow-box .icon-xiangshangjiantou-copy-copy-copy {
		left: 0;
		bottom: -18px;
	}
	.iconfont.active {
		color: #F9421E;
	}
</style>