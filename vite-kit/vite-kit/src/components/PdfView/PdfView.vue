<template>
  <div class="pdf-view">
    <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>
  </div>
</template>
<script>
import PDFJS from "pdfjs-dist";
import { onMounted, toRefs } from "@vue/runtime-core";
export default {
	props:{
		url:{
			type:String,
			default:"https://jiayuan-api-dev.vchangyi.com/storage/uploads/20211102113221cf8d93e894150766abfcf65a623d788f.pdf"
		}
	},
	setup(props) {
		const {url} = toRefs(props);
		const _renderPage  = (num)=> {
			this.pdfDoc.getPage(num).then((page) => {
				let canvas = document.getElementById("the-canvas" + num);
				let ctx = canvas.getContext("2d");
				let dpr = window.devicePixelRatio || 1;
				let bsr = ctx.webkitBackingStorePixelRatio ||
         ctx.mozBackingStorePixelRatio ||
         ctx.msBackingStorePixelRatio ||
         ctx.oBackingStorePixelRatio ||
         ctx.backingStorePixelRatio || 1;
				let ratio = dpr / bsr;
				let viewport = page.getViewport(screen.availWidth / page.getViewport(1).width);
				canvas.width = viewport.width * ratio;
				canvas.height = viewport.height * ratio;
				canvas.style.width = viewport.width + "px";
				canvas.style.height = viewport.height + "px";
				ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
				let renderContext = {
					canvasContext: ctx,
					viewport: viewport
				};
				page.render(renderContext);
				if (this.pages > num) {
					_renderPage(num + 1);
				}
			});
		};
		const _loadFile =  (url)=> {
			PDFJS.getDocument(url).then((pdf) => {
				this.pdfDoc = pdf;
				console.log(pdf);
				this.pages = this.pdfDoc.numPages;
				this.$nextTick(() => {
					_renderPage(1);
				});
			});
		};
		onMounted(()=>{
			_loadFile(url.value);
		});
	},
};
</script>
<style lang="scss" scoped>

</style>