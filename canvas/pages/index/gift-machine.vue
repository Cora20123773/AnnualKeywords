<template>
	<view>
		<view class="machine">
			<image src="../../static/4/5ht/传送带.png" mode="aspectFit"></image>
		</view>
		<view class="box" style="height: 500px;" @click="popupMsg">
			<canvas canvas-id="canvass" id="canvass">
			</canvas>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popupEmail" type="center">
			<view class="msg1">
				<image class="email-image slide-in-blurred-top" src="../../static/4/“结婚”.png"></image>
			</view>
		</uni-popup>
		<uni-popup ref="popupDownload" type="center">
			<view class="msg2">
				<image src="../../static/4/“结婚" style="width: 250upx; height: 300upx; margin-bottom: 30upx;"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				x: 0.1,
				y: 0,
				z: 0,
				ctx: null,
				src: "../../static/4/5ht/猫咪.jpg",
				pos: {},
				mov: {},
				index: 0,
			}
		},
		mounted() {
			this.init(),
				this.drawCanvas(this.x, this.y);
			// this.init();


		},
		methods: {
			popupMsg(){
				this.index=this.index+1;
				openPopup(index);
			},
			openPopup(index) {
				switch (index) {
					case 1:
						this.$refs.popupEmail.open()
						break
					case 2:
						this.progress = true
						this.$refs.popupDownload.open()
						break
				}
				if (this.index==1){
					this.index=0
				}
			},

			init() {
				var that = this;
				var ctx = uni.createCanvasContext('canvass');
				ctx.clearRect(0, 0, 1060, 700);
			},

			drawCanvas(x, y) {
				var that = this;
				console.log(that.x, that.y)
				var ctx = uni.createCanvasContext('canvass');
				ctx.clearRect(0, 0, 1060, 700);
				ctx.drawImage(that.src, that.x, that.y, 50, 50);

				ctx.drawImage(that.src, that.x + 50, that.y + 25, 50, 50);

				ctx.drawImage(that.src, that.x + 100, that.y + 50, 50, 50);
				// //更新canvas图片的位置
				ctx.draw(true, () => {
					console.log('666')
				});
				if (that.x >= 100) {
					that.x = 0;
					that.y = 0;
					console.log(that.x);
				}

				setTimeout(function() {
					that.x = that.x + 0.05
					that.y = that.y + 0.025
					that.drawCanvas(ctx, that.x, that.y);
				}, 5)


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
	.machine {
		position: fixed;
	}
</style>
