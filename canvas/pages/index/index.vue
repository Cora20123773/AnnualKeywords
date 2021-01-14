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
				x: 0,
				y: 0,
				z: 0,
				ctx: null,
				src: '../../static/logo.png',
				pos: {},
				mov: {},
				R_init: 50,
				Sum: 360 / 100, //定义12个环形的圈圈
				Sumy: 360 / 100, //纵向也有12个圈圈
				radius: 0.2, //居中半径
				r_add: 0.2, //半径增量
				scen: 2, //视角长度
				off: 60, //canvas偏移
				R: 0, //定义大圆半径，随着视角变大而变小
				points: [],
				p: {},
				r: {},

			}
		},
		mounted() {
			// this.drawCanvas();
			this.init();


		},
		methods: {

			// drawCube() {
			// 	var ctx = uni.createCanvasContext('canvass');
			// 	var that = this;
			// 	ctx.lineWidth = 1;
			// 	ctx.scale(2, 2);
			// },
			//定义球体上的点
			point(x, y, z, radius) {
				var that = this;

				that.p = {
					x: that.x,
					y: that.y,
					z: that.z,
					radius: that.radius
				};
				that.radius = that.radius + that.r_add * Math.sqrt(Math.pow(that.R + that.scen - z, 2) + Math.pow(y, 2)) / (that.scen +
					that.R);
				that.z = that.z - 1;
				that.points.push(that.p);

			},

			init() {
				var that = this;
				var ctx = uni.createCanvasContext('canvass');
				ctx.lineWidth = 1;
				ctx.scale(2, 2);
				var x = that.x;
				var y = that.y;
				var z = that.z;
				var r = that.r;
				that.R = 50 / (that.scen + that.R_init) * 50 
				for (var i = 0; i < that.Sum; i++) { //横坐标方向 12个 1
					for (var e = 0; e < that.Sumy; e++) { //纵坐标方向 12个 1
						x = Math.cos(i * Math.PI * 2 / that.Sum) * Math.sin(e * Math.PI * 2 / that.Sumy) * that.R
						y = Math.cos(e * Math.PI * 2 / that.Sumy) * that.R
						z = 0
						if ((e / that.Sumy > .5) || (i / that.Sum) > .5) {
							that.z = 0 - Math.sqrt(Math.pow(that.R, 2) - Math.pow(x, 2) - Math.pow(y, 2))
						} else {
							that.z = Math.sqrt(Math.pow(that.R, 2) - Math.pow(x, 2) - Math.pow(y, 2))
						}
						r = that.radius + that.r_add * Math.sqrt(Math.pow(that.R + that.scen - z, 2) + Math.pow(y, 2)) / (that.scen +
							that.R)

						that.point(x, y, z, r)
					}
				}
				ctx.strokeStyle = "#aaaaff"
				that.points.forEach(function() {
					ctx.beginPath()
					ctx.arc(x + that.off, y + that.off, that.radius, 0, 2 * Math.PI)
					console.log(x + that.off, y + that.off, that.radius)
					debugger;
					ctx.stroke()
					ctx.draw()
				})

			}


			// drawCanvas(x, y) {
			// 	var ctx = uni.createCanvasContext('canvass');
			// 	var that = this;
			// 	//var canvas=this.document.getElementById("canvas");
			// 	ctx.clearRect(0, 0, 1060, 700);
			// 	ctx.drawImage(that.src, that.x+that.mov.x, that.y+that.mov.y, 150, 150); 
			// 	// //更新canvas图片的位置
			// 	ctx.draw(true,()=>{
			// 		console.log('666')
			// 	});

			// 	// setTimeout(function() {
			// 	// 	console.log('666')
			// 	// 	ctx.clearRect(0,0,1060,700)
			// 	// 	 that.x = that.x+1;
			// 	// 	 that.y= that.y+1;
			// 	// 	 that.drawCanvas(ctx,that.x, that.y);
			// 	// }, 10)
			// 	// context.clearRect(0, 0, 200, 200)
			// 	// context.draw(false, setTimeout((res) => {
			// 	// 	console.log('cbk');
			// 	// 	console.log(res);
			// 	// }, 1000))


			// },

			// touchStart(event) {
			// 	var ctx = uni.createCanvasContext('canvass');
			// 	var that = this;
			// 	that.pos = {
			// 		x: event.touches[0].x,
			// 		y: event.touches[0].y
			// 	}; //坐标转换，将窗口坐标转换成canvas的坐标
			// },
			// touchMove(evt) { //移动
			// 	var ctx = uni.createCanvasContext('canvass');
			// 	var that = this;

			// 	that.mov = 
			// 	{
			// 		x: (evt.touches[0].x - that.pos.x),
			// 		y: (evt.touches[0].y - that.pos.y)
			// 	};
			// 	that.drawCanvas(); //重新绘制图片
			// },
			// touchEnd(e){
			// 	var ctx = uni.createCanvasContext('canvass');
			// 	var that = this;
			// 	that.drawCanvas(); 

			// 	that.x = that.x+that.mov.x;
			// 	that.y = that.y+that.mov.y;

			// },
			// // 	ctx.onmouseup = function() {
			// // 		ctx.onmousemove = null;
			// // 		ctx.onmouseup = null;
			// // 		ctx.style.cursor = 'default';
			// // 	};

			// 		canvasIdErrorCallback: function(e) {
			// 			console.log('cer');
			// 			console.error(e)
			// 			debugger;
			// 		}
			// }
		},
	}
</script>
<style>
	#canvass {
		height: 100%;
		width: 100%;
	}
</style>
