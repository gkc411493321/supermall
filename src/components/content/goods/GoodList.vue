<template>
  <el-row class="list" :gutter="2">
    <!-- <el-col class="card" :span="12" v-for=" item in pop">
      <good-item v-for="item in pop" :goodItem="item" />
    </el-col> -->
    <good-item  v-for="(item, index) in pop" :goodItem="item" :key="index+item.show.img" />

  </el-row>
</template>

<script>
  import GoodItem from './GoodItem.vue'

  export default {
    name: "GoodList",
    props: {
      pop: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components:{
      GoodItem
    }
  }
</script>

<style>
  .list{
    width: 100%;
  }
</style>
