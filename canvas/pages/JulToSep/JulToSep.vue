<template>
	<view class="wrapper">
		<view v-if="circle" class="header slide-in-top" :style="{ height: top + height + 5 + 'px' }">
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
		</view>
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
				top: 0,
				height: 0,
				circle: false, // 是否显示朋友圈
			}
		},
		onLoad() {
			this.top = uni.getMenuButtonBoundingClientRect().top
			this.height = uni.getMenuButtonBoundingClientRect().height
		},
		methods: {

			showCircle() {
				this.circle = true // 是否显示朋友圈
			},

			navigateToNext() {
				uni.navigateTo({
					url: '/pages/SepToDec/SepToDec'
				});
			}
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

	.placeholder {
		width: 100vw;
		height: 30vh;
	}

	.swiper-mask {
		position: fixed;
		z-index: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
	}

	.scene-swiper {
		/* 		position: fixed;
		z-index: -1;
		top: 0; */
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.scene {
		width: 500upx;
		height: 500upx;
	}

	.button {
		width: 100upx;
		height: 50upx;
		background-color: #FFFFFF;
	}

	.library {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: -1;
		transform: translate(-50%, -50%);
		transition: .5s ease;
	}

	.libraryAfter {
		top: 40%;
		left: 35%;
		transform: translate(-50%, -50%);
		transition: .5s ease;
	}

	.header {
		position: fixed;
		z-index: 1;
		top: 0;
		width: 100vw;
		background-color: #C0C0C0;
	}
	
	.header-bar {
		position: absolute;
		bottom: 10px;
	}

	.article {
		position: fixed;
		z-index: -2;
		top: 13vh;
		width: 100vw;
		height: 120vh;
		background-color: #FFFFFF;
	}
</style>
