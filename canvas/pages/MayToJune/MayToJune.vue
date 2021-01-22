<template>
	<view class="wrapper">
		<image class="background" src="https://i.loli.net/2021/01/18/8xMDkqaAwzh5ibZ.jpg"></image>
		<!-- 四号门 -->
		<view v-if="scene == 1" class="scene">
			<image class="gate slide-in-top" src="https://i.loli.net/2021/01/18/wBL62QMY5bd4ypt.png" mode="aspectFit" @click="checkPic"></image>
			<view v-if="picChecked" class="footer fade-in" style="animation-delay: 2s;">
				<image src="../../static/phase2/arrowBack.png" style="width: 80upx; height: 80upx;" @click="goBack"></image>
				<image src="../../static/phase2/arrowNext.png" class="heartbeat" style="width: 80upx; height: 80upx; margin-left: 50upx;"
				 @click="transferScene"></image>
			</view>
			<view v-else class="fade-in" style="animation-delay: 0.7s;">
				<image class="gesture heartbeat" src="../../static/phase2/gesture.png"></image>
			</view>
			<view v-if="picChecked" class="form">
				<!-- 点击第一张SAMS表单出现SAMS2表单 -->
				<image class="form-element slide-in-blurred-top" src="https://i.loli.net/2021/01/18/YvDgidIUbWG6HCl.png" mode="aspectFit"></image>
				<image class="form-element slide-in-blurred-top" style="animation-delay: 0.5s;" src="https://i.loli.net/2021/01/18/9BTzP6OWkiFsCJv.png"
				 mode="aspectFit"></image>
				<image class="form-element fade-in" style="animation-delay: 1s;" src="../../static/phase2/sam3.png" mode="aspectFit"></image>
			</view>
		</view>
		<!-- 东城 -->
		<view v-if="scene == 2" class="scene">
			<image class="restuarant slide-in-top" src="https://i.loli.net/2021/01/18/IesKTtjAQdDkCaB.png" mode="aspectFit"
			 @click="checkPic"></image>
			<view v-if="picChecked" class="footer fade-in" style="animation-delay: 1s;">
				<image src="../../static/phase2/arrowBack.png" style="width: 80upx; height: 80upx;" @click="goBack"></image>
				<image src="../../static/phase2/arrowNext.png" class="heartbeat" style="width: 80upx; height: 80upx; margin-left: 50upx;"
				 @click="transferScene"></image>
			</view>
			<view v-else class="fade-in" style="animation-delay: 0.7s;">
				<image class="gesture heartbeat" src="../../static/phase2/gesture.png"></image>
			</view>
			<view v-if="picChecked" class="form">
				<image class="form-element slide-in-blurred-top" src="https://i.loli.net/2021/01/19/atVIiYeyHU5MoXP.png" mode="aspectFit"></image>
			</view>
		</view>
		<!-- 宿舍楼 -->
		<view v-if="scene > 2" class="scene">
			<image v-if="clickNum <= 1" class="dormitory slide-in-top" :class="{ dormitoryBg: picChecked }" src="https://i.loli.net/2021/01/18/wpvx1fIZCQ9rP3j.png"
			 mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum == 2" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="https://i.loli.net/2021/01/18/DQBKjOXLMS3bcNA.png"
			 mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum == 3" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="https://i.loli.net/2021/01/18/pnZBQ1qoD5MYF87.png"
			 mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum == 4" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="https://i.loli.net/2021/01/18/wizVWItSTM4xuf1.png"
			 mode="aspectFit" @click="checkDorm"></image>
			<image v-if="clickNum >= 5" class="dormitory dormitoryBg fade-in" style="right: -150upx; bottom: 0upx;" src="https://i.loli.net/2021/01/18/bR8v4ZVhyI2ewFz.png"
			 mode="aspectFit" @click="checkDorm"></image>
			<view v-if="picChecked && clickNum >= 5"  class="footer fade-in">
				<image src="../../static/phase2/arrowBack.png" style="width: 80upx; height: 80upx;" @click="goBack"></image>
				<image src="../../static/phase2/arrowNext.png" class="heartbeat" style="width: 80upx; height: 80upx; margin-left: 50upx;"
				 @click="transferScene"></image>
			</view>
			<view v-if="!picChecked" class="fade-in" style="animation-delay: 0.7s;">
				<image class="gesture heartbeat" src="../../static/phase2/gesture.png"></image>
			</view>
			<view v-else class="form" style="top: -100upx;">
				<image class="form-element slide-in-blurred-top" src="../../static/phase2/dormitory.png" mode="aspectFit"></image>
				<view class="form-prompt focus-in-expand-fwd" style="animation-delay: 0.3s;">试着点亮灯光吧!</view>
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
		onBackPress(option) {
			// 屏蔽安卓返回物理按键
			if (option.from === 'backbutton') {
				return true
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

			goBack() {
				uni.redirectTo({
					url: '/pages/MayToJune/MayToJune'
				});
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
