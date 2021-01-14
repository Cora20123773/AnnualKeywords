<template>
	<view class="box" style="height: 500px;">
		<canvas canvas-id="canvass" id="canvass" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
		</canvas>
	</view>
	
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				x: 0.1,
				y: 0,
				z: 0,
				ctx: null,
				src:"../../static/4/Jerry学生卡.png"	,
				pos: {},
				mov: {},
			}
		},
		mounted() {
			this.init(),
			this.drawCanvas(this.x, this.y);
			// this.init();
	
	
		},
		methods: {
			init(){
				var that = this;
				var ctx = uni.createCanvasContext('canvass');
				ctx.clearRect(0, 0, 1060, 700);
			},
			
			drawCanvas(x, y) {
				var that = this;
				console.log(that.x,that.y)
				var ctx = uni.createCanvasContext('canvass');
				ctx.clearRect(0, 0, 1060, 700);
				ctx.drawImage(that.src, that.x, that.y, 150, 150); 
				// //更新canvas图片的位置
				ctx.draw(true,()=>{
					console.log('666')
				});
	
				setTimeout(function() {
					 that.x = that.x*1.02;
					 
					 that.drawCanvas(ctx,that.x, that.y);
				}, 10)
	
	
			},
	
	// 		touchStart(event) {
	// 			var ctx = uni.createCanvasContext('canvass');
	// 			var that = this;
	// 			that.pos = {
	// 				x: event.touches[0].x,
	// 				y: event.touches[0].y
	// 			}; //坐标转换，将窗口坐标转换成canvas的坐标
	// 		},
	// 		touchMove(evt) { //移动
	// 			var ctx = uni.createCanvasContext('canvass');
	// 			var that = this;
	
	// 			that.mov = 
	// 			{
	// 				x: (evt.touches[0].x - that.pos.x),
	// 				y: (evt.touches[0].y - that.pos.y)
	// 			};
	// 			that.drawCanvas(); //重新绘制图片
	// 		},
	// 		touchEnd(e){
	// 			var ctx = uni.createCanvasContext('canvass');
	// 			var that = this;
	// 			that.drawCanvas(); 
	
	// 			that.x = that.x+that.mov.x;
	// 			that.y = that.y+that.mov.y;
	
	// 		},
	// 		// 	ctx.onmouseup = function() {
	// 		// 		ctx.onmousemove = null;
	// 		// 		ctx.onmouseup = null;
	// 		// 		ctx.style.cursor = 'default';
	// 		// 	};
	
	// 				canvasIdErrorCallback: function(e) {
	// 					console.log('cer');
	// 					console.error(e)
	// 					debugger;
	// 				}
			}
	}
</script>

<style>
</style>
