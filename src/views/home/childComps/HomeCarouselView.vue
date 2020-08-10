<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
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
  }
</script>

<style>
</style>
