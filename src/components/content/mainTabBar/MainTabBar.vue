<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#d52a7e">
        <img src="~assets/img/tabbar/1.png" slot="item-icon" />
        <img src="~assets/img/tabbar/1.1.png" slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d52a7e">
        <img src="~assets/img/tabbar/2.png" slot="item-icon" />
        <img src="~assets/img/tabbar/2.1.png" slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#d52a7e">
        <img src="~assets/img/tabbar/3.png" slot="item-icon" />
        <img src="~assets/img/tabbar/3.1.png" slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#d52a7e">
        <img src="~assets/img/tabbar/4.png" slot="item-icon" />
        <img src="~assets/img/tabbar/4.1.png" slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem';

  export default{
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import url("~assets/css/base.css");
</style>
