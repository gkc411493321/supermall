<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default{
    name:"BetterScroll",
    props:{
      probeType:{
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        wrapper: null
      }
    },
    mounted() {
      //创建滚动对象
      this.wrapper = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动
      this.wrapper.on('scroll', position => {
        this.$emit('scroll', position)
      })

      //上拉加载
      this.wrapper.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x, y, time=500){
        this.wrapper.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.wrapper.finishPullUp()
      },
      refresh(){
        this.wrapper.refresh()
      }
    }
  }
</script>

<style>
</style>
