import { ref,onMounted,watch } from 'vue'
import { getScore } from '@/api/user'

export default function userScore(name){
  let scores = ref([]);
  let fetchScores = ()=>{
    scores.value =  getScore(name.value)
  }
  onMounted(fetchScores)
  watch(name, fetchScores)

  return {
    scores,
    fetchScores,
  }
}