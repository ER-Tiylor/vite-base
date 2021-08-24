<template>
<div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <el-row>
  <el-col :span="22" :offset="1">
    <NavBar/>
  </el-col>  
  </el-row>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <router-link :to="{ name: 'about'}">关于</router-link>&nbsp; -->
  <!-- <router-link :to="{ name: 'home'}">首页</router-link> -->
  <router-view></router-view>
</div>
  
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
