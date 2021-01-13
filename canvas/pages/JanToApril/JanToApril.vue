<template>
	<view>
		<image class="background" lazy-load="true" src="../../static/phase1/background.png"></image>
		<view class="header focus-in-expand-fwd">2020</view>
		<view class="message-list">
			<view class="message-list__box scale-in-top" @click="openPopup(1)">
				推迟开学
			</view>
			<view class="message-list__box scale-in-top" style="animation-delay: .3s;" @click="openPopup(2)">
				网课
			</view>
			<view class="message-list__box scale-in-top" style="animation-delay: .5s;" @click="openPopup(3)">
				捐学费
			</view>
		</view>
		<view class="footer">
			<view class="button" @click="navigateToNext">navigate</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popupEmail" type="center">
			<view class="popup-box">
				推迟邮件
				<swiper class="scene-swiper">
					<swiper-item>
						<image class="" src="../../static/phase2/gate4.png" lazy-load="true" mode="aspectFit"></image>
					</swiper-item>
					<swiper-item>
						<image class="" src="../../static/phase2/southCity.png" lazy-load="true" mode="aspectFit"></image>
					</swiper-item>
				</swiper>
			</view>
		</uni-popup>
		<uni-popup ref="popupDownload" type="center">
			<view class="popup-box">
				网课下载进度条
				<progress v-if="progress" class="progress-bar" percent="80" activeColor="blue" active="true" stroke-width="8" show-info="true"
				 border-radius="10" duration="60" @activeend="showPrompt" />
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
</style>
