<template>
  <div class="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <div v-if="multidata" class="block">
      <el-carousel height="150px">
        <el-carousel-item  v-for="item in multidata.banner.list" :key="item.image">
          <img :src="item.image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import {
    getHomeMultidata
  } from 'network/home';

  export default {
    name: "",
    components: {
      NavBar
    },
    data() {
      return {
        multidata: null,
      }
    },
    //生命周期函数 创建完成时请求
    created() {
      //请求首页数据
      getHomeMultidata().then(res => {
        this.multidata = res.data
        console.log(this.multidata)
      })
    }
  }
</script>

<style>
  .home {
    background-color: var(--color-tint);
    color: #FFFFFF;
  }

  .block img {
    width: 100%;
  }
</style>
