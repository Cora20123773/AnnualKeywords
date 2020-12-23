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
				x: 0,
				y: 0,
				ctx: null,
			}
		},
		mounted() {				
			this.drawCanvas();

		},
		methods: {

			drawCanvas(x,y) {
				var ctx = uni.createCanvasContext('canvass');
				var that = this;
				//var canvas=this.document.getElementById("canvas");
				ctx.clearRect(0, 0, 1060, 700);
				ctx.drawImage('../../static/logo.png', that.x, that.y, 150, 150); //画背景图
				ctx.draw();
				console.log("1");

				setTimeout(function() {
					console.log('666')
					ctx.clearRect(0,0,1060,700)
					 that.x = that.x+1;
					 that.y= that.y+1;
					 that.drawCanvas(ctx,that.x, that.y);
				}, 2000)
				// context.clearRect(0, 0, 200, 200)
				// context.draw(false, setTimeout((res) => {
				// 	console.log('cbk');
				// 	console.log(res);
				// }, 1000))

			},

			// drawPic(ctx, personPic, posX, posY, name) { //绘制人物图标
			// 	var _this = this;
			// 	ctx.drawImage(personPic, parseFloat(posX) + _this.x, parseFloat(posY) + _this.y, 20, 27);
			// 	ctx.font = "11px Arial";
			// 	ctx.fillStyle = "black"
			// 	ctx.fillText(name, parseFloat(posX) + _this.x + 25, parseFloat(posY) + _this.y + 15);
			// },

			canvasIdErrorCallback: function(e) {
				console.log('cer');
				console.error(e)
				debugger;
			}
		}
	}
</script>
<style>
	#canvass {
		height: 100%;
		width: 100%;
	}
</style>
