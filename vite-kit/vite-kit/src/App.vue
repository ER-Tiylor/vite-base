
<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- <Map width="100%" height="500px" :position="[108.90773,34.239262]" locationName="测试名称"/> -->
  <PdfView></PdfView>
</div>
  
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map/Map.vue"; 
import PdfView from "./components/PdfView/PdfView.vue"; 
export default({
	components:{HelloWorld,Map,PdfView},
	setup() {
	},
});
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
