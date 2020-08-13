<template>
  <div class="home">
    <!-- 标题 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播 -->
    <home-carousel-view :banners="banners" />
    <!-- 推荐面板1 -->
    <home-avatar-view :recommends="recommends" />
    <!-- 推荐面板2 -->
    <feature-view />
    <!-- 控制栏 -->
    <tab-control class="tab-control" :tabControlText="tabControlText" @tabClick="tabClick"/>
    <!-- 商品列表 -->
    <good-list :pop="goods[currentType].list" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeAvatarView from './childComps/HomeAvatarView.vue';
  import HomeCarouselView from './childComps/HomeCarouselView.vue';
  import FeatureView from './childComps/FeatureView.vue';
  import TabControl from 'components/content/tabControl/TabControl.vue';
  import GoodList from 'components/content/goods/GoodList.vue';
  import {
    getHomeMultidata,
    getHomeData
  } from 'network/home';

  export default {
    name: "",
    components: {
      NavBar,
      HomeAvatarView,
      HomeCarouselView,
      FeatureView,
      TabControl,
      GoodList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        tabControlText: ['流行', '新款', '精选'],
        goods:{
          'pop':{page: 0, list:[]},
          'new':{page: 0, list:[]},
          'sell':{page: 0, list:[]},
        },
        currentType:'pop'
      }
    },
    //生命周期函数 创建完成时请求
    created() {
      //请求首页数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeData(type){
        const page = this.goods[type].page + 1
        getHomeData(type, page).then(res => {
          this.goods[type].page = page
          this.goods[type].list.push(...res.data.list)
        })
      },
      tabClick(index){
        switch (index){
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType = "new"
            break
          case 2:
            this.currentType = "sell"
            break
        }
      },
    }
  }
</script>

<style>
  .home {
    color: #FFFFFF;
    padding-top: 44px;
  }
  .home-nav{
    z-index: 9;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .block img {
    width: 100%;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
