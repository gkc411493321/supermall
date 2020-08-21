<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad"/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script >
  export default {
    name: "HomeCarouselView",
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      },
    },
    data(){
      return{
        isLoad: false
      }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('imgLoad')
          this.isLoad = !this.isLoad
        }
        
      }
    }
  }
</script>

<style scoped>
  .block img{
    width: 100%;
  }

</style>
