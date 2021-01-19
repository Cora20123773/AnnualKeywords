<template>
	<view class="wrapper" :class="{ disableScroll: !hideLibrary }">
		<image class="background" src="https://i.loli.net/2021/01/18/VL3tn6xXvh5Rrs9.gif"></image>
		<view class="scene slideInRight" style="animation-delay: 5s;">
			<view class="scene" :class="{ slideOutLeft: scene > 1 }">
				<image class="scene-image" src="https://i.loli.net/2021/01/18/wDYRCUVNHOyg2Ib.png" mode="aspectFit"></image>
				<image class="scene-ball free-fall" style="animation-delay: 6s;" src="../../static/phase3/ball.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="scene" :class="{ slideInRight: scene == 2, hide: scene != 2 || hideLibrary }">
			<image class="scene-image" src="https://i.loli.net/2021/01/18/WZ7wRUTducJ4stC.png" mode="aspectFit" @click.once="scroll"></image>
			<image class="gesture heartbeat" src="../../static/phase3/gesture.png"></image>
		</view>
		<view v-if="scene == 2" class="placeholder"></view>
		<view v-if="scene >= 2">
			<view style="width: 100vw; height: 20vh;"></view>
			<image id="pyq" class="friend-circle" src="https://i.loli.net/2021/01/18/lqLdMPX5YI4W9VS.png" mode="widthFix"></image>
			<view style="width: 100vw; height: 50upx; background-color: #FFFFFF; margin-top: -30upx;"></view>
		</view>
		<view class="footer">
			<view class="button" @click="goBack">back</view>
			<view v-if="scene != 2" class="button" style="margin-left: 50upx;" @click="transferScene">navigate</view>
		</view>
		<!-- 		<view v-if="circle" class="header slide-in-top" :style="{ height: top + height + 5 + 'px' }">
			<view class="header-bar">Moments</view>
		</view>
		<view v-if="circle" class="article"></view>
		<view class="footer">
			<view class="button" @click="navigateToNext">navigate</view>
		</view>
		<view>
			<swiper class="scene-swiper bounce-in-top" :disable-touch="circle">
				<swiper-item>
					<image class="" src="../../static/phase3/tower.PNG" lazy-load="true" mode="aspectFit"></image>
					<view class="free-fall"></view>
				</swiper-item>
				<swiper-item>
					<image class="library" :class="{ libraryAfter: circle }" src="../../static/phase3/library.PNG" lazy-load="true"
					 mode="aspectFit" @click="showCircle"></image>
				</swiper-item>
			</swiper>
			<view v-if="circle" class="placeholder"></view>
			<view v-if="circle" class="swiper-mask"></view>
		</view> -->
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
				scene: 1, // 1:分数线，2:新图
				hideLibrary: false, //隐藏图书馆照片
			}
		},
		onLoad() {
			// this.top = uni.getMenuButtonBoundingClientRect().top
			// this.height = uni.getMenuButtonBoundingClientRect().height
		},
		methods: {

			transferScene() {
				if (this.scene == 3) {
					uni.navigateTo({
						url: '/pages/SepToDec/SepToDec'
					});
				} else {
					// this.picChecked = false
					this.scene++
				}
			},
			
			goBack() {
				uni.redirectTo({
					url: '/pages/MayToJune/MayToJune'
				});
			},

			scroll() {
				this.hideLibrary = true
				this.$nextTick(function(){
					uni.pageScrollTo({
						selector: '#pyq',
						duration: 1000,
						complete: () => {
							this.scene++
						}
					});
				})
			},
		}
	}
</script>

<style scoped>
	.wrapper {
		/* 		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh; */
	}

	.scene {
		/* 		display: flex;
		justify-content: center;
		align-items: center; */
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}

	.scene-image {
		/* 		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 3; */
		width: 100vw;
		height: 80vh;
	}
	
	.scene-ball {
		position: fixed;
		width: 50upx;
		height: 50upx;
	}

	.gesture {
		position: fixed;
		right: 250upx;
		bottom: 200upx;
		width: 90upx;
		height: 90upx;
	}

	.placeholder {
		width: 100vw;
		height: 100vh;
	}

	.button {
		width: 100upx;
		height: 50upx;
		background-color: #FFFFFF;
	}

	.friend-circle {
		width: 100vw;
		padding-top: 200upx;
	}
</style>
