<template>
  <My-Marker />
</template>
<script>
import {provide,ref,toRefs,readonly} from "vue"
import MyMarker from './MyMarker'
export default {
  components:{MyMarker},
  // provide: {
  //   location: 'North Pole',
  //   geolocation: {
  //     longitude: 90,
  //     latitude: 135
  //   }
  // },
  setup() {
    const location = ref('North pole');
    const geolocation = toRefs({
      logitude: 90,
      latitude: 135
    })
    const updateLocation = () => {
      location.value = 'South Pole'
    }
    provide("location",readonly(location));
    provide('geolocation',readonly(geolocation));
    provide('updateLocation',updateLocation);
  },
}
</script>