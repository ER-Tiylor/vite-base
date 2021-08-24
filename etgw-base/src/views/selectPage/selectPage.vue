<template>
<div class="about">
  select
  <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="数据筛选" name="1">
    <el-row :gutter="20">
      <el-col :span="2">
        <span>材质</span>
      </el-col>
      <el-col :span="20">
        <ul class="ul-items flex">
          <li>全部</li>
          <li>PI</li>
          <li>PET</li>
        </ul>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">
        <span>涂层</span>
      </el-col>
      <el-col :span="20">
        <ul class="ul-items flex">
          <li>全部</li>
          <li>白色亮面</li>
          <li>白色哑面</li>
        </ul>
      </el-col>
    </el-row>
  </el-collapse-item>
  </el-collapse>
</div>
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    let activeNames=ref(['1'])
    return {
      activeNames
    }
  },
  data(){
    return{
      // logo: logo
    }
  },
  mounted(){
    console.log("mounted")
  }
}
</script>
<style lang="sass" scoped>
ul,li
  list-style: none
.ul-items
  li
    margin-right: 20px
</style>
