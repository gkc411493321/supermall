<template>
  <el-col class="card" :span="12">
    <div class="good-item">
      <img :src="goodItem.show.img" />
      <p class="title">{{goodItem.title}}</p>
      <div class="item-text">
        <span class="remake">限时抢</span>
        <span class="price">{{goodItem.orgPrice}}</span>
        <span class="collect">
          <i class="el-icon-star-off"></i>
          {{goodItem.cfav}}
        </span>
      </div>
    </div>
  </el-col>
</template>

<script>
  export default{
    name:"GoodItem",
    props: {
      goodItem: {
        type: Object,
        default(){
          return []
        }
      },
    },
  }
</script>

<style>
  .good-item{
    color: #606266;
  }
  .good-item img{
    width: 100%;
    height: 220px;
  }
  .title{
    text-align: left;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    margin-top: 5px;
  }
  .card{
    width: 46%;
    height: 260px;
    margin: 2% 2%;
  }
  .remake{
    color: var(--color-high-text);
    font-size: 12px;
    border: 1px solid var(--color-high-text);
    flex: 1;
    text-align: center;
  }
  .price{
    font-size: 12px;
    padding-right: 5px;
    flex: 1;
    text-align: left;
  }
  .collect{
    font-size: 12px;
    flex: 1;
    text-align: right;
  }
  .item-text{
    display: flex;
    margin-top: 5px;
    height: 15px;
    line-height: 15px;
  }
</style>
