<template>
<div class="about">
  关于页面
  <p>数值：{{this.$store.state.count}}</p>
  <button @click="add">增加</button>
</div>
</template>
<script>
export default {
  setup() {
    
  },
  methods:{
    add(){
      this.$store.commit('increment')
    }
  }
}
</script>
