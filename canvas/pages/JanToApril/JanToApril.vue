<template>
	<view>
		<image class="background" src="https://i.loli.net/2021/01/18/Ot2viGckofmsL4X.png"></image>
		<view class="header focus-in-expand-fwd">
			<view class="header-year">2020</view>
			<view class="header-season">Winter - Spring</view>
		</view>
		<view class="message-list">
			<view class="message-list__box scale-in-top" @click="openPopup(1)">
				<view class="message-list__line">
					<view class="message-list__type">
						<image src="../../static/phase1/Outlook.png" class="message-list__icon"></image>
						Outlook
					</view>
					<view class="message-list__time">2m ago</view>
				</view>
				<view class="message-list__content">推迟开学</view>
				<image v-if="hint == 1" src="../../static/phase1/gesture.png" class="message-list__gesture heartbeat"></image>
			</view>
			<view class="message-list__box scale-in-top" style="animation-delay: .3s;" @click="openPopup(2)">
				<view class="message-list__line">
					<view class="message-list__type">
						<image src="../../static/phase1/Flipgrid.png" class="message-list__icon"></image>
						Flipgrid
					</view>
					<view class="message-list__time">4m ago</view>
				</view>
				<view class="message-list__content">网课作业通知</view>
				<image v-if="hint == 2" src="../../static/phase1/gesture.png" class="message-list__gesture heartbeat"></image>
			</view>
			<view class="message-list__box scale-in-top" style="animation-delay: .5s;" @click="openPopup(3)">
				<view class="message-list__line">
					<view class="message-list__type">
						<image src="../../static/phase1/wechat.png" class="message-list__icon"></image>
						WeChat
					</view>
					<view class="message-list__time">6m ago</view>
				</view>
				<view class="message-list__content">"捐"学费</view>
				<image v-if="hint == 3" src="../../static/phase1/gesture.png" class="message-list__gesture heartbeat"></image>
			</view>
		</view>
		<view class="footer">
			<image v-if="hint == 0" src="../../static/phase1/arrow.png" class="heartbeat" style="width: 80upx; height: 80upx;"
			 @click="navigateToNext"></image>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popupEmail" type="center">
			<view class="email-container">
				<image class="email-image slide-in-blurred-top" src="../../static/phase1/1.1.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 40upx; left: 40upx; animation-delay: .5s;" src="../../static/phase1/1.2.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 70upx; left: 70upx; animation-delay: 1s;" src="../../static/phase1/1.3.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 100upx; left: 100upx; animation-delay: 1.5s;" src="../../static/phase1/1.4.png"></image>
				<image class="email-image slide-in-blurred-bottom" style="top: 300upx; left: 50upx; animation-delay: 2s;" src="https://i.loli.net/2021/01/18/HiznDvsMhL79UoW.png"></image>
				<image class="email-image fade-in" style="top: 300upx; left: 30upx; animation-delay: 2.5s;" src="https://i.loli.net/2021/01/18/WjYCH6PTOJ3g8qe.png"></image>
			</view>
		</uni-popup>
		<uni-popup ref="popupDownload" type="center">
			<view class="popup-box">
				<image src="../../static/phase1/download.png" style="width: 250upx; height: 300upx; margin-bottom: 30upx;"></image>
				视频上传中
				<progress v-if="progress" class="progress-bar" percent="80" activeColor="blue" active="true" stroke-width="8"
				 show-info="true" border-radius="10" duration="60" @activeend="showPrompt" />
				<view v-if="downloadPrompt" class="text-input">距下载完成还需1000分钟…</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupFee" type="center">
			<view class="email-container">
				<image class="email-image slide-in-blurred-top" src="../../static/phase1/2.1.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 50upx; left: 50upx; animation-delay: .5s;" src="https://i.loli.net/2021/01/18/TpGiHfDrK1WFbtE.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 100upx; left: 100upx; animation-delay: 1s;" src="https://i.loli.net/2021/01/18/iPap6GILOVYfXCh.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 400upx; animation-delay: 1.5s;" src="https://i.loli.net/2021/01/18/8uzl6CF5hgVxAvL.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 450upx; left: 50upx; animation-delay: 2s;" src="https://i.loli.net/2021/01/19/r29Ju8EtRwzgjG1.png"></image>
				<image class="email-image slide-in-blurred-top" style="top: 500upx; left: 100upx; animation-delay: 2.5s;" src="https://i.loli.net/2021/01/19/IQJHCY2GTtwpLVq.png"></image>
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
				hint: 1, // 用户当前应该点击的邮件 (0表示都已点击)
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

			navigateToNext() {
				uni.navigateTo({
					url: '/pages/MayToJune/MayToJune'
				});
			}
		}
	}
</script>

<style scoped>
	.header-year {
		font-size: 112upx;
		font-weight: 500;
		color: #F7F7F7;
		line-height: 17upx;
		letter-spacing: 10upx;
		margin-bottom: 100upx;
	}

	.header-season {
		font-size: 39upx;
		font-weight: 500;
		color: #F7F7F7;
		line-height: 11upx;
		letter-spacing: 5upx;
	}

	.message-list {
		/* width: 100vw; */
		height: 700upx;
		padding: 10upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.message-list__box {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 80vw;
		height: 130upx;
		padding: 40upx;
		/* background: #FFFFFF; */
		border-radius: 10px;
		color: #314877;
		font-weight: 550;
		font-size: 32upx;
		letter-spacing: 5upx;
		/* filter: blur(1px) opacity(0.4); */
		transition: 0.2s;
	}

	.message-list__box::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 10px;
		background-color: #FFFFFF;
		filter: opacity(0.5);
		z-index: -1;
	}
	
	.message-list__box:active {
		width: 75vw;
		height: 110upx;
		/* border: 8upx solid #e2f0ff; */
		transition: 0.2s;
	}

	.message-list__line {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30upx;
		height: 50upx;
	}

	.message-list__type {
		/* position: relative;
		left: 32upx;
		top: 40upx; */
		display: flex;
		align-items: center;
	}

	.message-list__icon {
		width: 50upx;
		height: 50upx;
		margin-right: 30upx;
	}

	.message-list__gesture {
		position: absolute;
		right: -20upx;
		bottom: -20upx;
		width: 90upx;
		height: 90upx;
	}

	.progress-bar {
		width: 62vw;
		margin-top: 30upx;
		margin-bottom: 30upx;
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

	.email-container {
		position: fixed;
		left: 0;
		top: 15vh;
		width: 100vw;
		height: auto;
	}

	.email-image {
		position: absolute;
		left: 10upx;
		top: 10upx;
	}
</style>
