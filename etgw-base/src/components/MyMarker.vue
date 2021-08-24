<template>
  
</template>
<script>
import {inject} from 'vue'
export default {
  inject:['location','geolocation'],
  setup() {
    const userLocation = inject('location','the Universe');
    const userGeolocation = inject('geolocation')
    const updateUserLocation = inject('updateLocation')
    return {
      userLocation,
      userGeolocation,
      updateUserLocation
    }
  },
}
</script>