
<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Map/>
</div>
  
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map.vue";
export default({
	components:{HelloWorld,Map},
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
