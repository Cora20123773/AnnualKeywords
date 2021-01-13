<template>
	<view class="wrapper">
		<swiper class="scene-swiper">
			<swiper-item @click="openPopup">
				<image class="swirl-in-fwd" src="../../static/phase2/gate4.png" lazy-load="true" mode="aspectFit"></image>
			</swiper-item>
			<swiper-item>
				<image class="" src="../../static/phase2/southCity.png" lazy-load="true" mode="aspectFit"></image>
			</swiper-item>
			<swiper-item>
				<view class="scene">宿舍</view>
			</swiper-item>
		</swiper>
		<view class="footer">
			<view class="button" @click="navigateToNext">navigate</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popupForm" type="center">
			<view class="popup-box">
				SEM表单
			</view>
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

			}
		},
		methods: {

			openPopup() {
				this.$refs.popupForm.open()
			},

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
	}

	.scene-swiper {
		width: 100vw;
		height: 30vh;
	}

	swiper-item {
		display: flex;
		justify-content: center;
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

	.popup-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80vw;
		height: auto;
		padding: 50upx 0 50upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
	}
</style>
