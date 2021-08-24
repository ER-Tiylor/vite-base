<template>
<div class="about">
  首页
  <router-view/>
</div>
</template>
<script>
import logo from "../../assets/logo.png"
export default {
  setup() {
    console.log('setup')
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
  
</style>
