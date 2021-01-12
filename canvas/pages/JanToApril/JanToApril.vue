<template>
	<view>
		<view class="background">
			推迟开学
			<view class="button" @click="scrollToCourse">scroll</view>
			<view class="message">新增病例人数</view>
			<view class="message">推迟开学邮件</view>
		</view>
		<view id="course" class="background background2">
			网课
			<view class="button" @click="scrollToFee">scroll</view>
			<view class="progress-bar">flipgrid下载进度条</view>
		</view>
		<view id="fee" class="background background3">
			捐学费
			<view class="button" @click="navigateToNext">navigate</view>
			<view class="article-list">公众号推文</view>
		</view>
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

			}
		},
		computed: {
			
		},
		onReady() {
			
		},
		methods: {

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
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		padding-top: 100upx;
		background-color: #007AFF;
	}

	.background2 {
		background-color: #4CD964;
	}

	.background3 {
		background-color: #DD524D;
	}

	.button {
		width: 100upx;
		height: 50upx;
		background-color: #FFFFFF;
	}

	.message {
		width: 100vw;
		height: 300upx;
		background-color: #F0AD4E;
	}

	.progress-bar {
		width: 100vw;
		height: 300upx;
		background-color: #F0AD4E;
	}
	
	.article-list {
		width: 100vw;
		height: 300upx;
		background-color: #F0AD4E;
	}
</style>
