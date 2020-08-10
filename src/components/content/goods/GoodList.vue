<template>
  <el-row :gutter="2">
    <!-- <el-col class="card" :span="12" v-for=" item in pop">
      <good-item v-for="item in pop" :goodItem="item" />
    </el-col> -->
    <good-item v-for="item in pop" :goodItem="item" />
    
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
</style>
