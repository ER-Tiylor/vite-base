<template>
<div id="map-container"></div>
</template>
<script>
import {onMounted,toRefs} from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

export default({
	data(){
		return{
			color: "red",
		};
	},
	props:{
		position:{
			type:Array
		},
		height:{
			type:String,
			default: "400px"
		},
		width:{
			type: String,
			default: "600px"
		}
	},
	setup(props) {
		const {position} = toRefs(props);
		// const style = computed(()=>{
		// 	return "";
		// });
		console.log(position.value);
		onMounted(()=>{
			AMapLoader.load({
				"key": "9866f8b589d15c14beb78cd54dad0c37",              // 申请好的Web端开发者Key，首次调用 load 时必填
				"version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
				"plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
				"AMapUI": {             // 是否加载 AMapUI，缺省不加载
					"version": "1.1",   // AMapUI 缺省 1.1
					"plugins":[],       // 需要加载的 AMapUI ui插件
				},
				"Loca":{                // 是否加载 Loca， 缺省不加载
					"version": "1.3.2"  // Loca 版本，缺省 1.3.2
				},
			}).then((AMap)=>{
				let map = new AMap.Map("map-container",{
					center:position.value.length>0?position.value: [108.93425, 34.23053],
					// viewMode:"3D",//使用3D视图
					zoom: 16,//设置地图级别范围
				});
				var marker = new AMap.Marker({
					// content: "目标位置名称",
					position:position.value.length>0?position.value: [108.93425, 34.23053],//位置
				});
				map.add(marker);//添加到地图
				//实时路况图层
				// var trafficLayer = new AMap.TileLayer.Traffic({
				// 	zIndex: 10
				// });
				// map.add(trafficLayer);//添加图层到地图
			}).catch(e => {
				console.log(e);
			});
		});
	},
});
</script>
<style lang="scss" scoped >
#map-container{
  width: v-bind(width);
  height: v-bind(height);
}
</style>
