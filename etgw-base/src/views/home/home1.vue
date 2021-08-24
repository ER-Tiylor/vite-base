<template>
<div class="about">
  首页
  <el-button>111</el-button>
  <!-- <router-view></router-view> -->
  <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  <img :src="logo" alt="">
  <!-- <router-link :to="{ name: 'homesub1'}">首页子页面1</router-link> -->
</div>
</template>
<script>
import logo from "../../assets/logo.png"
export default {
  setup() {
    // const internalInstance = getCurrentInstance();
    // console.log(internalInstance)
    console.log('setup')
  },
  data(){
    return{
      logo: logo
    }
  },
  mounted(){
    console.log("mounted")
    // console.log(this)
  }
}
</script>
<style lang="sass" scoped>
.el-carousel__item
  h3 
    color: #475669
    font-size: 14px
    opacity: 0.75
    line-height: 150px
    margin: 0
.el-carousel__item:nth-child(2n) 
  background-color: #99a9bf
.el-carousel__item:nth-child(2n+1) 
  background-color: #d3dce6
  
</style>
