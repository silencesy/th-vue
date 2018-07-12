<template>
    <div class="ScrollView wrapper" ref="wrapper" :style="{width:'100%',height:height+'px',backgroundColor: color}">
        <div class="content">
            <slot></slot>
            <mt-spinner v-show="noDada" type="fading-circle" :size='18' color="#f24827"></mt-spinner>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
      name: 'ScrollView',
      props: {
        /**
         * 开启滑动滑动区块
         */
        open: {
          type: Boolean,
          dafualt: false
        },
        /**
         * 
        * 列表的数据
        */
        data: {
          type: Array,
          default: function () {
            return []
          }
        },
        /**
         * 请求成功
         */
        requestSuccess: {
          type: Boolean,
          dafualt: false
        },
        /**
        * 1 滚动的时候会派发scroll事件，会截流。
        * 2 滚动的时候实时派发scroll事件，不会截流。
        * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        */
        /**
         * 容器高度
         */
        height: {
          type: Number,
          default: 0
        },
        /**
         * 背景颜色
         */
        color: {
          type: String,
          default: '#fff'
        },
        probeType: {
          type: Number,
          default: 1
        },
        /**
        * 点击列表是否派发click事件
        */
        click: {
            type: Boolean,
            default: true
        },
        /**
        * 是否开启横向滚动
        */
        scrollX: {
          type: Boolean,
          default: false
        },
        /**
        * 是否派发滚动事件
        */
        listenScroll: {
          type: Boolean,
          default: false
        },
        /**
        * 是否派发滚动到底部的事件，用于上拉加载
        */
        pullup: {
          type: Boolean,
          default: false
        },
        /**
        * 是否派发顶部下拉的事件，用于下拉刷新
        */
        pulldown: {
          type: Boolean,
          default: false
        },
        /**
        * 是否派发列表滚动开始的事件
        */
        beforeScroll: {
          type: Boolean,
          default: false
        },
        /**
        * 当数据更新后，刷新scroll的延时。
        */
        refreshDelay: {
          type: Number,
          default: 20
        },
        /**
         * 加载完毕
         */
        noDada: {
          type: Boolean,
          default: true
        }
      },
      mounted() {
        var that = this;
        if(this.data.length=0) this.noDada=false
        that.$nextTick(() => {
          setTimeout(function(){
            that._initScroll();
          },50);
        });
      },
      methods: {
        _initScroll() {
          var that = this;
          // 没有获取到dom元素直接结束
          if (!that.$refs.wrapper) {
            return;
          }
          // better-scroll的初始化
          that.scroll = new BScroll(that.$refs.wrapper, {
            probeType: that.probeType,
            click: that.click,
            scrollX: that.scrollX,
            pullUpLoad: {
              threshold: 50
            }
          })

          

          // 是否派发滚动事件
          if(that.listenScroll){
            that.scroll.on('scroll',(pos) => {
              console.log(pos);
              if(that.listenScroll){
                that.$emit('scroll',pos)
              }
            })
            
          }

          // 是否派发滚动到底部事件，用于上拉加载
          if (that.pullup) {
            // that.scroll.on('pullingUp',function(){
            //   that.$emit('pullingUp');
              
            // })
            that.scroll.on('scrollEnd', () => {
              // 滚动到底部
              if (that.scroll.y <= (that.scroll.maxScrollY + 50)) {
                that.$emit('pullingUp')
              }
            })
          }
          
          // 是否派发顶部下拉事件，用于下拉刷新
          if (that.pulldown) {
            that.scroll.on('touchend', (pos) => {
              // 下拉动作
              if (pos.y > 50) {
                that.$emit('pulldown')
              }
            })

          }
          // 是否派发列表滚动开始的事件
          if (that.beforeScroll) {
            that.scroll.on('beforeScrollStart', () => {
              that.$emit('beforeScroll')
            })
          }
        },
        disable(){
          this.scroll && this.scroll.disable()  
        },
        enable(){
          this.scroll && this.scroll.enable()
        },
        refresh(){
          this.scroll && this.scroll.refresh()
        },
        scrollTo(){
          this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
          this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments) 
        },
        finishPullUp() {
          console.log(123);
          this.scroll.finishPullUp();
        }
      },
      watch: {
        open: function(newVal,oldVal) {
          if (newVal) {
            if (!this.$refs.wrapper) {
              return;
            }
            this._initScroll();
          }
        }
      }
    }
</script>
<style scoped>
    .wrapper {
      overflow: hidden;
      background-color: #eee;
    }
</style>