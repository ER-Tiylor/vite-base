<template>
  <nav class="nav flex">
    <div class="img">
      <slot name='logo'></slot>
    </div>
    <ul class="main-nav flex">
      <li class="flex-center border-box" v-for="item,index in navs" :key='index'>{{item}}</li>
    </ul>
    <div class="search"></div>
  </nav>
</template>
<script>
import {provide,ref,toRefs,readonly} from "vue"
export default {
  // components:{MyMarker},
  setup() {
    let navs=ref(['首页','全系产品','关于怡天']);
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
    return{
      navs
    }
  },
}
</script>
<style lang="sass" scoped>
.nav
  height: 100px
  .main-nav
    li
      height: 100%
      margin-right: 20px
    li:hover
      border-top: 1px solid #CC99CD
  
</style>