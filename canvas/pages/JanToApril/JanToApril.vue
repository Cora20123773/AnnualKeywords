<template>
	<view>
		<image class="background" lazy-load="true" src="../../static/phase1/background.png"></image>
		<view class="header focus-in-expand-fwd">2020</view>
		<view class="message-list">
			<view class="message-list__box scale-in-top" @click="openPopup(1)">
				<view>推迟开学</view>
				<view v-if="hint == 1">点我</view>
			</view>
			<view class="message-list__box scale-in-top" style="animation-delay: .3s;" @click="openPopup(2)">
				<view>网课</view>
				<view v-if="hint == 2">点我</view>
			</view>
			<view class="message-list__box scale-in-top" style="animation-delay: .5s;" @click="openPopup(3)">
				<view>捐学费</view>
				<view v-if="hint == 3">点我</view>
			</view>
		</view>
		<view class="footer">
			<view class="button" @click="navigateToNext">navigate</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popupEmail" type="center">
			<view class="email-container">
				<image class="email-image slide-in-blurred-top" src="../../static/phase1/1.1.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 40upx; left: 40upx; animation-delay: .5s;" src="../../static/phase1/1.2.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 70upx; left: 70upx; animation-delay: 1s;" src="../../static/phase1/1.3.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 100upx; left: 100upx; animation-delay: 1.5s;" src="../../static/phase1/1.4.png"></image>
				<image class="email-image slide-in-blurred-bottom" style="top: 300upx; left: 50upx; animation-delay: 2s;" src="../../static/phase1/1.5.png"></image>
				<image class="email-image fade-in" style="top: 300upx; left: 30upx; animation-delay: 2.5s;" src="../../static/phase1/watcher.png"></image>
			</view>
		</uni-popup>
		<uni-popup ref="popupDownload" type="center">
			<view class="popup-box">
				网课下载进度条
				<progress v-if="progress" class="progress-bar" percent="80" activeColor="blue" active="true" stroke-width="8"
				 show-info="true" border-radius="10" duration="60" @activeend="showPrompt" />
				<view v-if="downloadPrompt" class="text-input">距下载完成还需1000分钟…</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupFee" type="center">
			<view class="popup-box">
				学费推文
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
		mixins: [],
		props: {

		},
		data() {
			return {
				current: [0, 0, 0], // 邮件是否被点击
				hint: 1, // 用户当前应该点击的邮件
				progress: false, // 是否显示进度条
				downloadPrompt: false, // 是否显示下载提示
			}
		},
		computed: {

		},
		onReady() {

		},
		methods: {

			openPopup(index) {
				switch (index) {
					case 1:
						this.$refs.popupEmail.open()
						break
					case 2:
						this.progress = true
						this.$refs.popupDownload.open()
						break
					case 3:
						this.$refs.popupFee.open()
						break
				}
				this.current[index - 1] = 1
				this.showHint()
			},

			/**
			 * 显示下一个应该点击的邮件
			 */
			showHint() {
				let i = 0
				for (i; i < this.current.length; i++) {
					if (this.current[i] == 0) {
						this.hint = i + 1
						return
					}
				}
				this.hint = 0
			},

			showPrompt() {
				this.downloadPrompt = true
			},

			scrollToCourse() {
				uni.pageScrollTo({
					selector: '#course',
					duration: 1000
				});
			},

			scrollToFee() {
				uni.pageScrollTo({
					selector: '#fee',
					duration: 1000
				});
			},

			navigateToNext() {
				uni.navigateTo({
					url: '/pages/MayToJune/MayToJune'
				});
			}
		}
	}
</script>

<style scoped>
	.background {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: -99;
	}

	.button {
		width: 150upx;
		height: 50upx;
		background-color: #FFFFFF;
	}

	.message-list {
		/* 		width: 100vw; */
		height: 50vh;
		padding: 10upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.message-list__box {
		display: flex;
		flex-direction: column;
		width: 90vw;
		height: 15vh;
		background-color: #F0AD4E;
	}

	.progress-bar {
		width: 60vw;
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

	.scene-swiper {
		width: 80vw;
		height: 30vh;
	}

	swiper-item {
		display: flex;
		justify-content: center;
	}

	.email-container {
		position: fixed;
		left: 0;
		top: 20vh;
		width: 100vw;
		height: auto;
	}

	.email-image {
		position: absolute;
		left: 10upx;
		top: 10upx;
	}
</style>
