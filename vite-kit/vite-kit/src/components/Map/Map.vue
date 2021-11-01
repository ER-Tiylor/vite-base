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
		},
		locationName:{
			type: String,
			default: ""
		}
	},
	setup(props) {
		const {position,locationName} = toRefs(props);
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
				if(locationName.value){
					marker.setLabel({
						direction: "top",
						offset: new AMap.Pixel(0, 0),  //设置文本标注偏移量
						content: `<div class='info'>${locationName.value}</div>`, //设置文本标注内容
					});
				}
				map.add(marker);//添加到地图
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
  :deep(.amap-marker-label){
    border: none;
    padding: 0;
    background: transparent;
  }
  :deep(.info){
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    transform: translateY(-12px);
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #eee;
    border-bottom: transparent;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    &:after{
      position: absolute;
      content:'';
      top: 35px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      font-size: 0;
      display: block;
      border-width: 10px;
      border-color: #FFF transparent transparent transparent;
      border-style: solid dashed dashed dashed;
      // filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, .2));
    }
  }
}
</style>
