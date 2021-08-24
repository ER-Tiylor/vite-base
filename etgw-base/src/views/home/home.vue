<template>
<div class="home">
  <el-row class="banner">
    <el-col :span="22" :offset="1">
      <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <el-row class="notice">
    <el-col :span="10" :offset="1">
      <el-carousel height="20px" direction="vertical" indicator-position="none" :autoplay="true">
        <el-carousel-item v-for="item in systemMsg" :key="item.id">
            <a href="javascript:void(0)" class="item">{{item.title}}</a>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <el-row class="m-b-30" type="flex" justify="space-between" >
    <el-col :offset="1" class="text-left" :span="15">不同行业/应用场景标签</el-col>
    <el-col :span="4" class="text-left">更多<i class='el-icon-arrow-right'></i></el-col>
  </el-row>
  <el-row type="flex" justify="space-between" class="m-b-20">
    <el-col :lg="5" :md="12" :xs="24">
      <div class="card">
        <div class="top"></div> 
        <div class="bottom flex-center">耐高温标识材料</div>
      </div>
    </el-col>
    <el-col :lg="5" :md="12" :xs="24">
      <div class="card">
        <div class="top"></div>
        <div class="bottom flex-center">耐高温标识材料</div>
      </div>
    </el-col>
    <el-col :lg="5" :md="12" :xs="24">
      <div class="card">
        <div class="top"></div>
        <div class="bottom flex-center">耐高温标识材料</div>
      </div>
    </el-col>
    <el-col :lg="5" :md="12" :xs="24">
      <div class="card">
        <div class="top"></div>
        <div class="bottom flex-center">耐高温标识材料</div>
      </div>
    </el-col>
  </el-row>
  <el-row class="product-show">
    <el-col>
      <el-carousel indicator-position="outside" :autoplay="false" :loop="false">
        <el-carousel-item>
          <el-col :lg="5" :md="12" :xs="24" class="m-r-20">
            <div class="card">
              <div class="top"></div> 
              <div class="bottom flex-center">耐高温标识材料</div>
            </div>
          </el-col>
          <el-col :lg="5" :md="12" :xs="24">
            <div class="card">
              <div class="top"></div>
              <div class="bottom flex-center">耐高温标识材料</div>
            </div>
          </el-col>
        </el-carousel-item>
        <el-carousel-item>
          <el-col :lg="5" :md="12" :xs="24" class="m-r-20">
            <div class="card">
              <div class="top"></div> 
              <div class="bottom flex-center">耐高温标识材料</div>
            </div>
          </el-col>
          <el-col :lg="5" :md="12" :xs="24">
            <div class="card">
              <div class="top"></div>
              <div class="bottom flex-center">耐高温标识材料</div>
            </div>
          </el-col>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</div>
</template>
<script>
import {ref,watch} from 'vue'
import logo from "../../assets/logo.png"
export default {
  setup() {
    const systemMsg= ref([
            {id:1,title:'入主白宫近10日 拜登做了10件大事'},
            {id:2,title:'全民带货？小红书外链淘宝权限将大范围开放'},
            {id:3,title:'贾跃亭FF将在纳斯达克上市 股票代码为FFIE'}])
    return{
      systemMsg
    }
  },
  data(){
    return{
      logo: logo
    }
  },
  mounted(){
    console.log("mounted")
  }
}
</script>
<style lang="sass" scoped>
.banner
  .el-carousel__item h3 
    color: #475669
    font-size: 18px
    opacity: 0.75
    line-height: 300px
    margin: 0
  .el-carousel__item:nth-child(2n) 
    background-color: #99a9bf
  .el-carousel__item:nth-child(2n+1) 
    background-color: #d3dce6
.card
  .top
    background: #CCCCCC
    width: 100%
    height: 100px
    background: url(../../assets/defaultImg.png) no-repeat center
    background-size: cover 
  .bottom
    background: #FFFFFF
    width: 100%
    height: 80px
</style>
