<template>
	<view class="box" style="height: 500px;">
		<canvas canvas-id="canvass" id="canvass" @error="canvasIdErrorCallback()">
		</canvas>
	</view>

</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		onReady() {
			this.createCanvas()
		},
		methods: {

			createCanvas() {
				var that = this;
				//var canvas=this.document.getElementById("canvas");
				var context = uni.createCanvasContext('canvass',that);
				console.log(context);
				//var ctx=this.canvas.getContext("2d");
				//draw a line, 从（100，100）的位置到（700，700）
				// context.moveto(100, 100)
				// context.lineto(700, 700)
				// context.stroke()//开始画
				// context.draw();
				context.setStrokeStyle("#00ff00")
				context.setLineWidth(5)
				context.rect(0, 0, 200, 200)
				context.stroke()
				context.setStrokeStyle("#ff0000")
				context.setLineWidth(2)
				context.moveTo(160, 100)
				context.arc(100, 100, 60, 0, 2 * Math.PI, true)
				context.moveTo(140, 100)
				context.arc(100, 100, 40, 0, Math.PI, false)
				context.moveTo(85, 80)
				context.arc(80, 80, 5, 0, 2 * Math.PI, true)
				context.moveTo(125, 80)
				context.arc(120, 80, 5, 0, 2 * Math.PI, true)
				context.stroke()
				//debugger;
				setTimeout(function() {
					console.log('666')
					context.draw(false, (res) => {
						console.log('cbk');
						console.log(res);
					})
				}, 10)
				// context.clearRect(0, 0, 200, 200)
				// context.draw(false, setTimeout((res) => {
				// 	console.log('cbk');
				// 	console.log(res);
				// }, 1000))

			},
			canvasIdErrorCallback: function(e) {
				console.log('cer');
				console.error(e)
				debugger;
			}
		}
	}
</script>
<style>
	#canvass{
		height: 100%;
		width: 100%;
	}
</style>



