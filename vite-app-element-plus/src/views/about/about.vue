<template>
<div class="about">
  关于页面
  <p>数值：{{this.$store.state.count}}</p>
  <button @click="add">增加</button>
  <user name="zmm"></user>
</div>
</template>
<script>
import User from "@/components/User.vue"
export default {
  components:{User},
  setup() {
    
  },
  methods:{
    add(){
      this.$store.commit('increment')
    }
  }
}
</script>
