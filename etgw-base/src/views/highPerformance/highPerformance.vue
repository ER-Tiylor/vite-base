<template>
<div class="about">
  高性能标签
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
