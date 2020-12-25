<template>
	<view class="box" style="height: 500px;">
<<<<<<< HEAD
		<canvas canvas-id="canvass" id="canvass" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
		</canvas>

=======
		<canvas canvas-id="canvass" id="canvass" @error="canvasIdErrorCallback()">
		</canvas>
>>>>>>> 189542a2eb712d9126029cd3924474197d9678be
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
			this.canvasEventsInit();

		},
		methods: {

			drawCanvas(x, y) {
				var ctx = uni.createCanvasContext('canvass');
				var that = this;
				//var canvas=this.document.getElementById("canvas");
				ctx.clearRect(0, 0, 1060, 700);
				ctx.drawImage('../../static/logo.png', that.x, that.y, 150, 150); //画背景图
				ctx.draw();
				console.log("1");

				// setTimeout(function() {
				// 	console.log('666')
				// 	ctx.clearRect(0,0,1060,700)
				// 	 that.x = that.x+1;
				// 	 that.y= that.y+1;
				// 	 that.drawCanvas(ctx,that.x, that.y);
				// }, 10)
				// context.clearRect(0, 0, 200, 200)
				// context.draw(false, setTimeout((res) => {
				// 	console.log('cbk');
				// 	console.log(res);
				// }, 1000))

				
			},
			
			touchStart(event) {
				var ctx = uni.createCanvasContext('canvass');
				var that = this;
				var imgx = that.x;
				var imgy = that.y;
				console.log(event);
				var pos = {
					x: event.touches[0].x,
					y: event.touches[0].y
				}; //坐标转换，将窗口坐标转换成canvas的坐标
			// 	ctx.onmousemove = function(evt) { //移动
			// 		ctx.style.cursor = 'move';
			
			// 		var x = (evt.clientX - pos.x) * 2 + imgx;
			// 		var y = (evt.clientY - pos.y) * 2 + imgy;
			// 		that.x = x;
			// 		that.y = y;
			// 		that.drawImage(that.imgObject); //重新绘制图片
			// 	};
			// 	ctx.onmouseup = function() {
			// 		ctx.onmousemove = null;
			// 		ctx.onmouseup = null;
			// 		ctx.style.cursor = 'default';
			// 	};
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
	#canvass {
		height: 100%;
		width: 100%;
	}
</style>
