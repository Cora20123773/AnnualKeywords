<template>
	<view class="container">
		<!-- <canvas type="2d" canvas-id="myCanvas" id="myCanvas" disable-scroll="true" @touchstart="touchStart" @touchmove="touchMove"
		 @touchend="touchEnd" @touchcancel="touchEnd">
		</canvas> -->
		<!-- <canvas type="2d" canvas-id="myCanvas" id="myCanvas" disable-scroll="true" width="500" height="400">
		</canvas> -->
		<!-- <view v-dragged="onDragged" style="position: absulote;">
			<image lazy-load="true" src="../../static/blue.png"></image>
		</view> -->
<!-- 		<movable-area class="movable" scale-area="true">
			<movable-view class="movable__element" direction="all" inertia="true" out-of-bounds="true" scale="true">
				<image style="width: 180vw; height: 130vh;" :style="{ transform: 'rotate(' + angle + 'deg)' }" lazy-load="true" src="../../static/blue.png"></image>
			</movable-view>
		</movable-area> -->
	</view>

</template>

<script src="../../common/js/hammer.min.js"></script>
<script>
	import anime from 'common/js/anime.min.js'
	// import interact from 'interactjs'
	// import VDragged from 'v-dragged'
	// import canvasDrag from 'wxa-comp-canvas-drag'

	export default {
		components: {},
		data() {
			return {
				angle: 0, // 旋转角度

				x: 0,
				y: 0,
				z: 0,
				ctx: null,
				src: '../../static/logo.png',
				pos: {},
				mov: {},
				R_init: 500,
				Sum: 360 / 10, //定义12个环形的圈圈
				Sumy: 360 / 10, //纵向也有12个圈圈
				radius: 2, //居中半径
				r_add: 2, //半径增量
				scen: 20, //视角长度
				off: 600, //canvas偏移
				R: 0, //定义大圆半径，随着视角变大而变小
				points: [],
				p: {},
				r: {},
			}
		},
		onReady() {
			// this.dragImage();
			// this.drawCanvas();
			// var myElement = document.getElementById('rotate-area');
			// var hammertime = new Hammer(myElement);
			// hammertime.get('rotate').set({ enable: true });
			// let that = this
			// hammertime.on('rortate', function(ev) {
			// 	that.angle += ev.angle;
			// });

			// let that = this;
			// interact('.movable').gesturable({
			//   listeners: {
			//     move (event) {
			//       that.angle += event.da
			//     }
			//   }
			// })
			
		},
		methods: {

			onDragged({
				el,
				deltaX,
				deltaY,
				offsetX,
				offsetY,
				clientX,
				clientY,
				first,
				last
			}) {
				if (first) {
					this.isDragging = true
					return
				}
				if (last) {
					this.isDragging = false
					return
				}
				var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
				var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
				el.style.left = l + deltaX + 'px'
				el.style.top = t + deltaY + 'px'
			},

			dragImage() {
				this.ctx = uni.createCanvasContext('myCanvas');
				// var ctx = canvas.getContext('2d');

				var img = new Image();
				img.src = '../../static/logo.png';

				// 图片加载完成
				img.onload = function() {
					// 要绘制的飞机的位置
					var x = 0;
					// 要绘制的飞机的位置
					var y = 0;
					// 监听鼠标在画布上方移动事件
					myCanvas.onmousemove = function(e) {
						// e.offsetX为事件相对事件源的坐标
						x = e.offsetX - img.width / 2;
						// e.offsetY为事件相对事件源的坐标
						y = e.offsetY - img.height / 2;
						console.log(x, y);
					};
					// 使用定时器，不停的清画布，重绘图片以实现类似拖拽的效果
					let that = this;
					setInterval(function() {
						that.ctx.clearRect(0, 0, 500, 400);
						that.ctx.drawImage(img, x, y);
					}, 20);
				}
			},

			init() {
				this.ctx = uni.createCanvasContext('myCanvas');
				this.ctx.lineWidth = 1;
				this.ctx.scale(2, 2);
				var x = this.x;
				var y = this.y;
				var z = this.z;
				var r = this.r;
				this.R = 500 / (this.scen + this.R_init) * 500
				for (var i = 0; i < this.Sum; i++) { //横坐标方向 12个 1
					for (var e = 0; e < this.Sumy; e++) { //纵坐标方向 12个 1
						x = Math.cos(i * Math.PI * 2 / this.Sum) * Math.sin(e * Math.PI * 2 / this.Sumy) * this.R
						y = Math.cos(e * Math.PI * 2 / this.Sumy) * this.R
						z = 0
						if ((e / this.Sumy > .5) || (i / this.Sum) > .5) {
							this.z = 0 - Math.sqrt(Math.pow(this.R, 2) - Math.pow(x, 2) - Math.pow(y, 2))
						} else {
							this.z = Math.sqrt(Math.pow(this.R, 2) - Math.pow(x, 2) - Math.pow(y, 2))
						}
						r = this.radius + this.r_add * Math.sqrt(Math.pow(this.R + this.scen - z, 2) + Math.pow(y, 2)) / (this.scen +
							this.R)

						this.point(x, y, z, r)
					}
				}
				this.ctx.strokeStyle = "#aaaaff"
				let that = this;
				this.points.forEach(function() {
					that.ctx.beginPath()
					that.ctx.arc(x + that.off, y + that.off, that.radius, 0, 2 * Math.PI)
					console.log(x + that.off, y + that.off, that.radius)
					that.ctx.stroke()
					that.ctx.draw()
				})
			},

			// drawCube() {
			// 	var this.ctx = uni.createCanvasContext('myCanvas');
			// 	var this = this;
			// 	this.ctx.lineWidth = 1;
			// 	this.ctx.scale(2, 2);
			// },
			//定义球体上的点
			point(x, y, z, radius) {
				this.p = {
					x: this.x,
					y: this.y,
					z: this.z,
					radius: this.radius
				};
				this.radius = this.radius + this.r_add * Math.sqrt(Math.pow(this.R + this.scen - z, 2) + Math.pow(y, 2)) / (this.scen +
					this.R);
				this.z = this.z - 1;
				this.points.push(this.p);
			},

			drawCanvas(x, y) {
				// this.ctx = uni.createCanvasContext('myCanvas');
				//var canvas=this.document.getElementById("canvas");
				this.ctx.clearRect(0, 0, 1060, 700);
				this.ctx.drawImage(this.src, this.x + this.mov.x, this.y + this.mov.y, 150, 150);
				// //更新canvas图片的位置
				this.ctx.draw(true, () => {
					console.log('666')
				});

				let that = this;
				// setTimeout(function() {
				// 	console.log('666')
				// 	that.ctx.clearRect(0, 0, 1060, 700);
				// 	that.x = that.x + 1;
				// 	that.y = that.y + 1;
				// 	that.drawCanvas(that.ctx, that.x, that.y);
				// }, 10)
				this.ctx.clearRect(0, 0, 200, 200)
				this.ctx.draw(false, setTimeout((res) => {
					console.log('cbk');
					console.log(res);
				}, 1000))
			},

			touchStart(event) {
				// this.ctx = uni.createCanvasContext('myCanvas');
				this.pos = {
					x: event.touches[0].x,
					y: event.touches[0].y
				}; //坐标转换，将窗口坐标转换成canvas的坐标
			},

			touchMove(event) { //移动
				// this.ctx = uni.createCanvasContext('myCanvas');

				this.mov = {
					x: (event.touches[0].x - this.pos.x),
					y: (event.touches[0].y - this.pos.y)
				};
				this.drawCanvas(); //重新绘制图片
			},

			touchEnd(event) {
				// this.ctx = uni.createCanvasContext('myCanvas');
				this.drawCanvas();

				this.x = this.x + this.mov.x;
				this.y = this.y + this.mov.y;
			},
			// 	this.ctx.onmouseup = function() {
			// 		this.ctx.onmousemove = null;
			// 		this.ctx.onmouseup = null;
			// 		this.ctx.style.cursor = 'default';
			// 	};

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
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 拖拽区域 */
	.movable {
		/* position: static; */
		width: 100vw;
		height: 100vh;
	}

	/* 被拖拽元素 */
	.movable__element {
		/* position: static; */
		top: -15vh;
		left: -40vw;
		width: 180vw;
		height: 130vh;
	}

	#myCanvas {
		height: 100%;
		width: 100%;
	}
</style>
