<template>
<div class="about">
  关于页面
  <p>数值：{{this.$store.state.count}}</p>
  <button @click="add">增加</button>
  <user :name="userName"></user>
  <button @click="change">修改名称</button>
</div>
</template>
<script>
import User from "@/components/User.vue"
export default {
  components:{User},
  data(){
    return{
      userName:'zmm'
    }
  },
  setup() {
    
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    change(){
      this.userName = 'tyr'
    }
  }
}
</script>
