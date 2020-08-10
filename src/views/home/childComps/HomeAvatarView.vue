<template>
  <div class="avatar">
    <div class="avatar-bar" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <el-avatar :size="size" :src="item.image"></el-avatar>
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    data(){
      return{
        size: 70,
      }
    },
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      },
    }
  }
</script>

<style>
  .avatar {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
  }
  .avatar-bar {
    flex: 1;
  }
  .avatar-bar p{
    padding: 5px 0;
  }
</style>
