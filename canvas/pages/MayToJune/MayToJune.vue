<template>
	<view class="wrapper">
		<view class="button" @click="navigateToNext">navigate</view>
		<swiper class="scene-swiper">
			<swiper-item>
				<view class="scene">4号门</view>
			</swiper-item>
			<swiper-item>
				<view class="scene">东城</view>
			</swiper-item>
			<swiper-item>
				<view class="scene">宿舍</view>
			</swiper-item>
		</swiper>
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

			}
		},
		methods: {
			navigateToNext() {
				uni.navigateTo({
					url: '/pages/JulToSep/JulToSep'
				});
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background-color: #808080;
	}
	
	.scene-swiper {
		width: 100vw;
	}
	
	swiper-item {
		display: flex;
		justify-content: center;
	}
	
	.scene {
		width: 500upx;
		height: 500upx;
		background-color: #4CD964;
	}
	
	.button {
		width: 100upx;
		height: 50upx;
		background-color: #FFFFFF;
	}
</style>
