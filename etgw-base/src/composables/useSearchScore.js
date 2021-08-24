import { ref, computed } from 'vue'

export default function searchScore(scores){
  const searchQuery = ref(0);
  const scoresSearchQuery = computed(()=>{
    return scores.value.filter(score => score > Number(searchQuery.value))
  })
  return {
    searchQuery,
    scoresSearchQuery
  }
}