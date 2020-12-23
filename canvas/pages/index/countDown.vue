<template>
	<view class="content">
		<canvas class="showCanvas" canvas-id="canvasCount" id="canvasCount"></canvas>
	</view>
</template>

<script>
	// get digit array from external js file
	import { digit } from '../../static/js/digits.js'
	export default{
		data() {
			return {
				digit
			}
		},
		mounted () {
			var that = this;
			var ctx = uni.createCanvasContext('canvasCount',that);
			console.log('createcanvas');
			that.setPage(ctx);
		},
		methods:{
			setPage(ctx,sceneId){
				var WINDOW_WIDTH = 300;
				var WINDOW_HEIGHT = 200;
				ctx.width = WINDOW_WIDTH;
				ctx.height = WINDOW_HEIGHT;
				
				this.render(ctx);
			},
			render(ctx,sceneId){
				var hour = 12;
				var minute = 34;
				var second = 56;
				console.log('dudu');
				this.renderDigit(0, 0, parseInt(hour/10), ctx);
			},
			renderDigit(x, y, num, ctx){
				var RADIUS = 10;
				console.log(digit[num]);
				setTimeout(function() {
					console.log('666')
					for(var i = 0; i < digit[num].length; i++){
						for(var j = 0; j < digit[num][i].length; j++){
							if(digit[num][i][j] == 1){
								ctx.setStrokeStyle("#ff0000")
								ctx.setLineWidth(2)
								
								ctx.arc(x+j*2*(RADIUS + 1)+(RADIUS + 1), y+i*2*(RADIUS + 1)+(RADIUS + 1), RADIUS, 0, 2*Math.PI);
								
								ctx.stroke()
							}
						}
					}
					ctx.draw()
				}, 200)
			}
		}

	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
	
	.content{
		width: 100%;
		height: 100%;
	}
	
	.showCanvas{
		 width: 100%; 
		 height: 100%; 
		 display: visible;
	}
</style>
