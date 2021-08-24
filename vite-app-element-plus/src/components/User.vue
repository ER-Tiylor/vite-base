<template>
<div class="about">
  用户名：{{name}}
  分数：{{scores}}
  <div ref='root'>this is root element</div>
</div>
</template>
<script>
import userScore from '@/composables/useUserScore'
import searchScore from '@/composables/useSearchScore'
import { toRefs,toRef,ref,onMounted } from 'vue'
export default {
  name:'user',
  props:{
    name:{
      type: String,
      required: true
    }
  },
  data(){
    return{
    }
  },
  setup(props,{attrs,slots,emit}) {
    const root = ref(null)
    onMounted(()=>{
      console.log(11,root.value)
    })
    const name = toRef(props,'name')
    console.log(name.value)
    const {scores,fetchScores} = userScore(name);
    const {searchQuery,scoresSearchQuery} = searchScore(scores)
    return {
      root,
      scores: scoresSearchQuery,
      fetchScores,
      searchQuery
    }
  },
  mounted(){
    console.log(this.scores)
    this.searchQuery=70;
    // console.log("mounted")
    // // console.log(this)
    // console.log(this.nameLength,this.score)
  }
}
</script>
<style lang="sass" scoped>
  
</style>
