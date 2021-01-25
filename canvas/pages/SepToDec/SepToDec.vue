<template>
	<view class="wrapper">
		<image class="background" src="https://i.loli.net/2021/01/22/YxW53C6ck8javLf.jpg"></image>
		<image class="transfer" src="../../static/phase4/transfer.jpg" mode="aspectFill"></image>
		<swiper class="slide-in-right">
			<!-- 新开张 -->
			<swiper-item>
				<slot-machine class="slot-machine" ref="trigger1" :result="end" alignmentOffset="155"></slot-machine>
				<image class="title" src="../../static/phase4/title1.png"></image>
				<image v-if="showGestureOne" src="../../static/phase4/gesture.png" class="gesture heartbeat"></image>
				<image v-if="!lightOne" class="start-button" src="../../static/phase4/startOff.png"></image>
				<image v-if="lightOne" class="start-button fade-in" src="../../static/phase4/startOn.png"></image>
				<view class="start-button-mask" @tap="startTrigger(1)"></view>
				<image class="light" src="../../static/phase4/light.png"></image>
			</swiper-item>
			<!-- 在UNNC生存一天需要多少钱 -->
			<swiper-item>
				<slot-machine class="slot-machine" ref="trigger2" :result="end" alignmentOffset="35"></slot-machine>
				<image class="title" src="../../static/phase4/title2.png"></image>
				<image v-if="showGestureTwo" src="../../static/phase4/gesture.png" class="gesture heartbeat"></image>
				<image v-if="!lightTwo" class="start-button" src="../../static/phase4/startOff.png"></image>
				<image v-if="lightTwo" class="start-button fade-in" src="../../static/phase4/startOn.png"></image>
				<view class="start-button-mask" @tap="startTrigger(2)"></view>
				<image class="light" src="../../static/phase4/light.png"></image>
			</swiper-item>
			<!-- Jerry卷 -->
			<swiper-item>
				<slot-machine class="slot-machine" ref="trigger3" :result="end" alignmentOffset="255"></slot-machine>
				<image class="title" src="../../static/phase4/title3.png"></image>
				<image v-if="showGestureThree" src="../../static/phase4/gesture.png" class="gesture heartbeat"></image>
				<image v-if="!lightThree" class="start-button" src="../../static/phase4/startOff.png"></image>
				<image v-if="lightThree" class="start-button fade-in" src="../../static/phase4/startOn.png"></image>
				<view class="start-button-mask" @tap="startTrigger(3)"></view>
				<image class="light" src="../../static/phase4/light.png"></image>
			</swiper-item>
			<!-- box1 -->
			<swiper-item>
				<image v-if="!boxOneOpen" class="box" src="https://i.loli.net/2021/01/24/VphRyNlTPOrKokn.png" mode="aspectFit"
				 @tap="openBox(1)"></image>
				<image v-if="boxOneOpen" class="box-open fade-in" src="https://i.loli.net/2021/01/24/7LuD4lfzGrwE91X.png" mode="aspectFit"></image>
				<image v-if="showGestureFour" src="../../static/phase4/gesture.png" class="gesture heartbeat" style="bottom: 350upx;"></image>
				<image v-if="boxOneOpen" class="balloon slide-in-blurred-bottom" style="animation-duration: 2s; animation-delay: .5s;"
				 src="../../static/phase4/redBalloon.png" mode="aspectFit"></image>
				<image v-if="boxOneOpen" class="text puff-in-center" style="animation-delay: 2s;" src="../../static/phase4/marriage.png"
				 mode="aspectFit"></image>
			</swiper-item>
			<!-- box2 -->
			<swiper-item>
				<image v-if="!boxTwoOpen" class="box" src="https://i.loli.net/2021/01/24/EItDRlCe3msahwK.png" mode="aspectFit"
				 @tap="openBox(2)"></image>
				<image v-if="boxTwoOpen" class="box-open fade-in" src="https://i.loli.net/2021/01/24/BanXMKYyjADWxZV.png" mode="aspectFit"></image>
				<image v-if="showGestureFive" src="../../static/phase4/gesture.png" class="gesture heartbeat" style="bottom: 350upx;"></image>
				<image v-if="boxTwoOpen" class="balloon slide-in-blurred-bottom" style="animation-duration: 2s; animation-delay: .5s;"
				 src="../../static/phase4/greenBalloon.png" mode="aspectFit"></image>
				<image v-if="boxTwoOpen" class="text puff-in-center" style="animation-delay: 2s;" src="../../static/phase4/offer.png"
				 mode="aspectFit"></image>
			</swiper-item>
			<!-- box3 -->
			<swiper-item>
				<image v-if="!boxThreeOpen" class="box" src="https://i.loli.net/2021/01/24/VphRyNlTPOrKokn.png" mode="aspectFit"
				 @tap="openBox(3)"></image>
				<image v-if="boxThreeOpen" class="box-open fade-in" src="https://i.loli.net/2021/01/24/7LuD4lfzGrwE91X.png" mode="aspectFit"></image>
				<image v-if="showGestureSix" src="../../static/phase4/gesture.png" class="gesture heartbeat" style="bottom: 350upx;"></image>
				<image v-if="boxThreeOpen" class="text puff-in-center" style="left: 55vw; animation-delay: 2s;" src="../../static/phase4/5-HT.png"
				 mode="aspectFit"></image>
				<image v-if="boxThreeOpen" class="cat fade-in-bottom" style="animation-delay: .5s;" src="https://i.loli.net/2021/01/24/lv8OV7jw4kqHmPJ.png"
				 mode="aspectFit"></image>
				<image v-if="boxThreeOpen" class="dog fade-in-bottom" style="animation-delay: 1s;" src="https://i.loli.net/2021/01/24/3TC5c1FreMkz4Id.png"
				 mode="aspectFit"></image>
				<image v-if="boxThreeOpen" class="bird fade-in-bottom" style="animation-delay: 1.5s;" src="https://i.loli.net/2021/01/24/QxfrMXzjpnLeqWm.png"
				 mode="aspectFit"></image>
			</swiper-item>
			<!-- ending -->
			<swiper-item class="ending">
				<image style="width: 500upx;" src="../../static/phase4/life.png" mode="aspectFit"></image>
				<image style="width: 400upx; margin-top: -130upx;" src="../../static/phase4/End.png" mode="aspectFit"></image>
				<image class="restart" src="../../static/phase4/restart.png" mode="aspectFit" @tap="restart"></image>
			</swiper-item>
		</swiper>
		<!-- 弹窗 -->
		<uni-popup ref="popupCard" type="center">
			<image src="../../static/phase4/card.png"></image>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				end: [1, 1, 1],
				lightOne: false,
				showGestureOne: true,
				lightTwo: false,
				showGestureTwo: true,
				lightThree: false,
				showGestureThree: true,
				boxOneOpen: false,
				showGestureFour: true,
				boxTwoOpen: false,
				showGestureFive: true,
				boxThreeOpen: false,
				showGestureSix: true,
			}
		},
		onBackPress(option) {
			// 屏蔽安卓返回物理按键
			if (option.from === 'backbutton') {
				return true
			}
		},
		onLoad() {},
		methods: {
			startTrigger(index) {
				if (index == 1) {
					this.lightOne = true
					this.showGestureOne = false
					this.$refs.trigger1.start()
				}
				if (index == 2) {
					this.lightTwo = true
					this.showGestureTwo = false
					this.$refs.trigger2.start()
				}
				if (index == 3) {
					this.lightThree = true
					this.showGestureThree = false
					this.$refs.trigger3.start()
					setTimeout(() => {
						this.$refs.popupCard.open()
					}, 3000)
				}
			},

			openBox(index) {
				if (index == 1) {
					this.boxOneOpen = true
					this.showGestureFour = false
				}
				if (index == 2) {
					this.boxTwoOpen = true
					this.showGestureFive = false
				}
				if (index == 3) {
					this.boxThreeOpen = true
					this.showGestureSix = false
				}
			},
			
			goBack() {
				uni.redirectTo({
					url: '/pages/SepToDec/SepToDec'
				});
			},
			
			restart() {
				uni.redirectTo({
					url: '/pages/JanToApril/JanToApril'
				});
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}

	.transfer {
		position: fixed;
		bottom: 15px;
		width: 800upx;
		height: 100px;
	}

	swiper {
		position: fixed;
		bottom: 0px;
		width: 100vw;
		height: 100vh;
	}

	swiper-item {
		position: relative;
		/* bottom: 0px; */
		/* width: 70vw; */
	}

	.slot-machine {
		position: absolute;
		bottom: 20px;
		z-index: 0;
		/* 		bottom: 30px;
			width: 70vw;
			height: 650px; */
	}

	/* 老虎机顶部文字 */
	.title {
		position: absolute;
		width: 260upx;
		height: 250upx;
		bottom: 1010upx;
		left: 260upx;
	}

	.gesture {
		position: absolute;
		left: 450upx;
		bottom: 850upx;
		width: 100upx;
		height: 100upx;
	}

	.start-button {
		position: absolute;
		width: 300upx;
		height: 300upx;
		bottom: 790upx;
		left: 235upx;
	}

	.start-button-mask {
		position: absolute;
		width: 300upx;
		height: 80upx;
		bottom: 910upx;
		left: 235upx;
	}

	.light {
		position: absolute;
		width: 300upx;
		height: 250upx;
		bottom: 590upx;
		left: 240upx;
	}

	.box {
		position: absolute;
		bottom: 100px;
		width: 500px;
		left: 50%;
		transform: translate(-50%, 0%);
		z-index: 0;
	}

	.box-open {
		position: absolute;
		bottom: 90px;
		width: 300px;
		left: 55%;
		transform: translate(-50%, 0%);
		z-index: 0;
	}

	.balloon {
		position: absolute;
		bottom: 50vh;
		width: 100px;
		left: 10vw
	}

	.text {
		position: absolute;
		bottom: 50vh;
		width: 350upx;
		left: 40vw
	}

	.cat {
		position: absolute;
		bottom: 190px;
		width: 200px;
		left: 18vw;
	}

	.dog {
		position: absolute;
		bottom: 300px;
		width: 170px;
		left: 22vw;
	}

	.bird {
		position: absolute;
		bottom: 400px;
		width: 170px;
		left: 23vw;
	}
	
	.ending {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		width: 100vw;
		height: 100vh;
		padding-top: 20vh;
	}
	
	.restart {
		margin-top: -50upx;
		width: 100upx;
		height: 100upx;
	}
</style>
