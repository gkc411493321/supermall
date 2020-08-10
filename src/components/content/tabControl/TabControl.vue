<template>
  <div class="tab">
    <div class="tab-item"
      v-for="(item,index) in tabControlText"
      :class="{active: isShowIndex == index}"
      @click="itemStyle(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name: "TabControl",
    props: {
      tabControlText: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isShowIndex:0
      }
    },
    methods:{
      itemStyle(index){
        this.isShowIndex = index
      }
    }
  }
</script>

<style>
  .tab{
    display: flex;
    z-index: 9;
    background-color: #FFFFFF;
  }
  .tab-item{
    flex: 1;
    color: #606266;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }
</style>
