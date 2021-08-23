<template>
<div class="about">
  用户名：{{name}}
  分数：{{scores}}
</div>
</template>
<script>
import userScore from '@/composables/useUserScore'
import searchScore from '@/composables/useSearchScore'
import { toRefs } from 'vue'
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
  setup(props) {
    const {name} = toRefs(props)
    const {scores,fetchScores} = userScore(name);
    const {searchQuery,scoresSearchQuery} = searchScore(scores)

    return {
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
