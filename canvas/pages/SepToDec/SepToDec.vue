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
				<view class="start-button-mask" @click="startTrigger(1)"></view>
				<image class="light" src="../../static/phase4/light.png"></image>
			</swiper-item>
			<!-- 在UNNC生存一天需要多少钱 -->
			<swiper-item>
				<slot-machine class="slot-machine" ref="trigger2" :result="end" alignmentOffset="35"></slot-machine>
				<image class="title" src="../../static/phase4/title2.png"></image>
				<image v-if="showGestureTwo" src="../../static/phase4/gesture.png" class="gesture heartbeat"></image>
				<image v-if="!lightTwo" class="start-button" src="../../static/phase4/startOff.png"></image>
				<image v-if="lightTwo" class="start-button fade-in" src="../../static/phase4/startOn.png"></image>
				<view class="start-button-mask" @click="startTrigger(2)"></view>
				<image class="light" src="../../static/phase4/light.png"></image>
			</swiper-item>
			<!-- Jerry卷 -->
			<swiper-item>
				<slot-machine class="slot-machine" ref="trigger3" :result="end" alignmentOffset="255"></slot-machine>
				<image class="title" src="../../static/phase4/title3.png"></image>
				<image v-if="showGestureThree" src="../../static/phase4/gesture.png" class="gesture heartbeat"></image>
				<image v-if="!lightThree" class="start-button" src="../../static/phase4/startOff.png"></image>
				<image v-if="lightThree" class="start-button fade-in" src="../../static/phase4/startOn.png"></image>
				<view class="start-button-mask" @click="startTrigger(3)"></view>
				<image class="light" src="../../static/phase4/light.png"></image>
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
		height: 700px;
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
</style>
