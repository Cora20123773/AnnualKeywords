<template>
	<view class="wrapper">
		<view v-if="circle" class="header slide-in-top">Moments</view>
		<view v-if="circle" class="article"></view>
		<view class="footer">
			<view class="button" @click="navigateToNext">navigate</view>
		</view>
		<view>
			<swiper class="scene-swiper bounce-in-top" :disable-touch="circle">
				<swiper-item>
					<image class="" src="../../static/phase3/tower.PNG" lazy-load="true" mode="aspectFit"></image>
				</swiper-item>
				<swiper-item>
					<image class="library" :class="{ libraryAfter: circle }" src="../../static/phase3/library.PNG" lazy-load="true" mode="aspectFit" @click="showCircle"></image>
				</swiper-item>
			</swiper>
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
				circle: false, // 是否显示朋友圈
			}
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
	
	.swiper-mask {
		position: fixed;
		z-index: 0;
		width: 100vw;
		height: 100vh;
	}
	
	.scene-swiper {
		position: fixed;
		z-index: -1;
		top: 0;
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
/* 		position: fixed;
		top: 0; */
		width: 100vw;
		height: 13vh;
		background-color: #C0C0C0;
	}
	
	.article {
		width: 100vw;
		height: 120vh;
		background-color: #C8C7CC;
	}
</style>
