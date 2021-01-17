<template>
	<view class="wrapper">
		<image class="background" lazy-load="true" src="../../static/phase2/background.jpg"></image>
		<view v-if="scene == 1" class="scene-gate">
			<image class="gate slide-in-top" src="../../static/phase2/gate4.png" lazy-load="true" mode="aspectFit"></image>
			<image class="gesture heartbeat" lazy-load="true" src="../../static/phase2/gesture.png"></image>
			<view class="form">
				<!-- 点击第一张SAMS表单出现SAMS2表单 -->
				<image class="form-element" src="../../static/phase2/sam1.png" lazy-load="true" mode="aspectFit"></image>
				<image class="form-element" src="../../static/phase2/sam2.png" lazy-load="true" mode="aspectFit"></image>
				<image class="form-element" src="../../static/phase2/sam3.png" lazy-load="true" mode="aspectFit"></image>
			</view>
			<view class="footer">
				<view class="button" @click="transferScene">navigate</view>
			</view>
		</view>
		<!-- 		<swiper class="scene-swiper">
			<swiper-item @click="openPopup">
			</swiper-item>
			<swiper-item>
				<image class="" src="../../static/phase2/southCity.png" lazy-load="true" mode="aspectFit"></image>
			</swiper-item>
			<swiper-item>
				<view class="scene">宿舍</view>
			</swiper-item>
		</swiper> -->
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
				scene: 1, // 1:四号门，2:东城，3:宿舍楼
			}
		},
		methods: {

			openPopup() {
				this.$refs.popupForm.open()
			},

			transferScene() {
				if (this.scene == 3) {
					uni.navigateTo({
						url: '/pages/JulToSep/JulToSep'
					});
				} else {
					this.scene++
				}
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

	.scene-gate {
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
		padding-top: 15vh;
		width: 100vw;
		height: 100vh;
	}

	.gate {
		position: fixed;
		left: -50upx;
		bottom: 70upx;
	}

	.gesture {
		position: fixed;
		right: 250upx;
		bottom: 200upx;
		width: 90upx;
		height: 90upx;
	}

	.form {
		position: relative;
		top: 0upx;
		left: 10upx;
	}

	.form-element {
		position: absolute;
		width: 700upx;
		height: 600upx;
	}

	.scene-swiper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
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
