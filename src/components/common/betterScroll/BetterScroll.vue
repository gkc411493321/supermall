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
    data(){
      return{
        wrapper: null
      }
    },
    mounted() {
      this.wrapper = new BScroll(this.$refs.wrapper,{
        click:true
      })
    },
    methods:{
      scrollTo(x, y, time=500){
        this.wrapper.scrollTo(x, y, time)
      }
    }
  }
</script>

<style>
</style>
