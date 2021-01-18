<template>
	<view class="wrapper">
		<image class="background" lazy-load="true" src="../../static/phase2/background.jpg"></image>
		<view v-if="scene == 1" class="scene">
			<image class="gate slide-in-top" src="../../static/phase2/gate4.png" lazy-load="true" mode="aspectFit" @click="checkPic"></image>
			<view v-if="picChecked" class="footer">
				<view class="button" @click="transferScene">navigate</view>
			</view>
			<view v-else class="fade-in" style="animation-delay: 0.7s;">
				<image class="gesture heartbeat" lazy-load="true" src="../../static/phase2/gesture.png"></image>
			</view>
			<view v-if="picChecked" class="form">
				<!-- 点击第一张SAMS表单出现SAMS2表单 -->
				<image class="form-element slide-in-blurred-top" src="../../static/phase2/sam1.png" lazy-load="true" mode="aspectFit"></image>
				<image class="form-element slide-in-blurred-top" style="animation-delay: 0.5s;" src="../../static/phase2/sam2.png"
				 lazy-load="true" mode="aspectFit"></image>
				<image class="form-element fade-in" style="animation-delay: 1s;" src="../../static/phase2/sam3.png" lazy-load="true"
				 mode="aspectFit"></image>
			</view>
		</view>
		<view v-if="scene == 2" class="scene">
			<image class="restuarant slide-in-top" src="../../static/phase2/southCity.png" lazy-load="true" mode="aspectFit"
			 @click="checkPic"></image>
			<view v-if="picChecked" class="footer">
				<view class="button" @click="transferScene">navigate</view>
			</view>
			<view v-else class="fade-in" style="animation-delay: 0.7s;">
				<image class="gesture heartbeat" lazy-load="true" src="../../static/phase2/gesture.png"></image>
			</view>
			<view v-if="picChecked" class="form">
				<image class="form-element slide-in-blurred-top" src="../../static/phase2/food.png" lazy-load="true" mode="aspectFit"></image>
			</view>
		</view>
		<view v-if="scene > 2" class="scene">
			<image v-if="clickNum <= 1" class="dormitory slide-in-top" :class="{ dormitoryBg: picChecked }" src="../../static/phase2/dorm1.png"
			 lazy-load="true" mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum == 2" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="../../static/phase2/dorm2.png"
			 lazy-load="true" mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum == 3" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="../../static/phase2/dorm3.png"
			 lazy-load="true" mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum == 4" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="../../static/phase2/dorm4.png"
			 lazy-load="true" mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum >= 5" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="../../static/phase2/dorm5.png"
			 lazy-load="true" mode="aspectFit" @click="checkDorm"></image>
			<view v-if="picChecked && clickNum >= 5" class="footer">
				<view class="button" @click="transferScene">navigate</view>
			</view>
			<view v-if="!picChecked" class="fade-in" style="animation-delay: 0.7s;">
				<image class="gesture heartbeat" lazy-load="true" src="../../static/phase2/gesture.png"></image>
			</view>
			<view v-else class="form" style="top: -100upx;">
				<image class="form-element slide-in-blurred-top" src="../../static/phase2/dormitory.png" lazy-load="true" mode="aspectFit"></image>
				<view class="form-prompt focus-in-expand-fwd" style="animation-delay: 0.5s;">试着点亮灯光吧!</view>
			</view>
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
				scene: 1, // 1:四号门，2:东城，3:宿舍楼
				picChecked: false, // 是否已查看截图
				clickNum: 0, // 点击宿舍楼次数
			}
		},
		methods: {

			checkPic() {
				this.picChecked = true
			},

			checkDorm() {
				this.picChecked = true
				this.clickNum++
			},

			transferScene() {
				if (this.scene == 3) {
					uni.navigateTo({
						url: '/pages/JulToSep/JulToSep'
					});
				} else {
					this.picChecked = false
					this.scene++
				}
			},
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

	.scene {
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

	.dormitory,
	.restuarant {
		position: fixed;
		right: -50upx;
		bottom: 70upx;
	}

	.dormitoryBg {
		position: fixed;
		width: 1000upx;
		height: 800upx;
		right: -130upx;
		bottom: -80upx;
		transition: 0.5s;
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
	
	.form-prompt {
		position: absolute;
		bottom: 530upx;
		left: 50upx;
		width: 700upx;
		color: #FFFFFF;
		font-weight: 1000;
		letter-spacing: 5upx;
	}

	.button {
		width: 100upx;
		height: 50upx;
		background-color: #FFFFFF;
	}
</style>
