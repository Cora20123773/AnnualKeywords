<template>
	<view class="wrapper">
		<view class="hide">
			<!-- 1 -->
			<image src="https://i.loli.net/2021/01/18/Ot2viGckofmsL4X.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/HiznDvsMhL79UoW.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/WjYCH6PTOJ3g8qe.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/TpGiHfDrK1WFbtE.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/iPap6GILOVYfXCh.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/8uzl6CF5hgVxAvL.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/19/r29Ju8EtRwzgjG1.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/19/IQJHCY2GTtwpLVq.png" @load="loadImages"></image>
			<!-- 2 -->
			<image src="https://i.loli.net/2021/01/18/8xMDkqaAwzh5ibZ.jpg" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/wBL62QMY5bd4ypt.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/YvDgidIUbWG6HCl.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/9BTzP6OWkiFsCJv.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/IesKTtjAQdDkCaB.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/19/atVIiYeyHU5MoXP.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/wpvx1fIZCQ9rP3j.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/25/dxqG4iJzb8o5DIU.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/25/i1DmW57YTAgLfPZ.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/25/Tbr9i7jPJuf4E2x.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/25/bG3lWOTdH6PJ9hV.png" @load="loadImages"></image>
			<!-- 3 -->
			<image src="https://i.loli.net/2021/01/18/VL3tn6xXvh5Rrs9.gif" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/wDYRCUVNHOyg2Ib.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/WZ7wRUTducJ4stC.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/lqLdMPX5YI4W9VS.png" @load="loadImages"></image>
			<!-- 4 -->
			<image src="https://i.loli.net/2021/01/22/YxW53C6ck8javLf.jpg" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/20/S2Fo4IJQlTbrRya.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/VphRyNlTPOrKokn.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/7LuD4lfzGrwE91X.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/EItDRlCe3msahwK.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/BanXMKYyjADWxZV.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/lv8OV7jw4kqHmPJ.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/3TC5c1FreMkz4Id.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/24/QxfrMXzjpnLeqWm.png" @load="loadImages"></image>
		</view>
		<view v-if="loadedImg == imgNum" class="prompt fade-in">资源加载完毕</view>
		<view v-else class="prompt">资源加载中请耐心等候...</view>
		<view>
			<!-- <view class="bar"></view> -->
			<view class="bar overflow">
				<view class="pattern" :style="{ width: progress + 'vw' }"></view>
			</view>
		</view>
		<!-- <view v-for="(img, index) in imgList" :key="index">
			<image v-if="{{ img.loaded }}" src="{{ img.url }}" />
		</view>
		<button @tap="loadImages">Click To Load Images</button> -->
		<!-- 		<image v-for="{{ imgLoadList }}" :key="*this" src="{{ item }}" data-src="{{ item }}" bindload="_imgOnLoad" binderror="_imgOnLoadError"
		 style="width:0;height:0;opacity:0" /> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadedImg: 0,
				imgNum: 32,
				progress: 0, // 加载进度
				// imgLoadList: [],
				// imgInfo: [],
				// callbacks: {},
				// imgLoader: {},
				// imgList: []
			}
		},
		onLoad() {
			// this.imgList = this.genImgListData()
			//初始化图片预加载组件，并指定统一的加载完成回调
			// this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this))
		},
		methods: {

			loadImages(event) {
				this.loadedImg++
				this.progress += 80 / this.imgNum
				if (this.loadedImg == this.imgNum) {
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/JanToApril/JanToApril'
						});
					}, 1000)
				}
				// console.log(event.detail.height)
				//同时发起全部图片的加载
				// this.imgList.forEach(item => {
				// 	this.load(item.url)
				// })
			},
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}

	.prompt {
		margin-bottom: 30upx;
		color: #f06a0e;
		font-size: 1.2rem;
		font-weight: 1000;
		letter-spacing: 5upx;
	}
	
	.pattern {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		height: 85px;
		background: repeating-linear-gradient(45deg, #f06a0e, #f06a0e 10px, transparent 11px, transparent 19px, #f06a0e 20px);
		background-position: 0 0;
		background-repeat: no-repeat;
		animation: move 1s linear infinite;
	}

	.bar {
		position: relative;
		width: 80vw;
		height: 50upx;
		margin: auto;
		border-radius: 30upx;
		// border: 1px solid #000;
		background: #ffba01;

		// &::before {
		// 	position: absolute;
		// 	content: "";
		// 	top: 0;
		// 	left: 0;
		// 	width: 50vw;
		// 	height: 85px;
		// 	background: repeating-linear-gradient(45deg, #f06a0e, #f06a0e 10px, transparent 11px, transparent 19px, #f06a0e 20px);
		// 	background-position: 0 0;
		// 	background-repeat: no-repeat;
		// 	animation: move 1s linear infinite;
		// }

	}

	.overflow {
		overflow: hidden;
	}

	@keyframes move {
		from {
			background-position: 0 0;
		}

		to {
			background-position: 0 -56px;
		}
	}
</style>
