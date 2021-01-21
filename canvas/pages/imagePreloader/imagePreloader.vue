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
			<image src="https://i.loli.net/2021/01/18/DQBKjOXLMS3bcNA.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/pnZBQ1qoD5MYF87.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/wizVWItSTM4xuf1.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/bR8v4ZVhyI2ewFz.png" @load="loadImages"></image>
			<!-- 3 -->
			<image src="https://i.loli.net/2021/01/18/VL3tn6xXvh5Rrs9.gif" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/wDYRCUVNHOyg2Ib.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/WZ7wRUTducJ4stC.png" @load="loadImages"></image>
			<image src="https://i.loli.net/2021/01/18/lqLdMPX5YI4W9VS.png" @load="loadImages"></image>
		</view>
		<view v-if="loadedImg == 23" class="prompt fade-in">资源加载完毕</view>
		<view v-else class="prompt">资源加载中请耐心等候...</view>
		<view>
			<!-- <view class="bar"></view> -->
			<view class="bar overflow"></view>
		</view>
		<!-- <view v-for="(img, index) in imgList" :key="index">
			<image v-if="{{ img.loaded }}" src="{{ img.url }}" />
		</view>
		<button @click="loadImages">Click To Load Images</button> -->
		<!-- 		<image v-for="{{ imgLoadList }}" :key="*this" src="{{ item }}" data-src="{{ item }}" bindload="_imgOnLoad" binderror="_imgOnLoadError"
		 style="width:0;height:0;opacity:0" /> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadedImg: 0,
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
				if (this.loadedImg == 23) {
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/JanToApril/JanToApril'
						});
					}, 2000)
				}
				console.log(event.detail.height)
				//同时发起全部图片的加载
				// this.imgList.forEach(item => {
				// 	this.load(item.url)
				// })
			},

			//加载完成后的回调
			imageOnLoad(err, data) {
				console.log('图片加载完成', err, data.src)

				this.imgList = this.imgList.map(item => {
					if (item.url == data.src)
						item.loaded = true
					return item
				})
				// this.setData({
				// 	imgList
				// })
			},

			/**
			 * 加载图片
			 *
			 * @param  {String}   src      图片地址
			 */
			load(src) {
				if (!src) return;

				let list = this.imgLoadList,
					imgInfo = this.imgInfo[src]

				//已经加载成功过的，直接回调
				if (imgInfo) {
					this._runCallback(null, {
						src: src,
						width: imgInfo.width,
						height: imgInfo.height
					})

					//新的未在下载队列中的
				} else if (list.indexOf(src) == -1) {
					list.push(src)
					this.imgLoadList = list
					// this.page.setData({
					// 	'imgLoadList': list
					// })
				}
			},

			_imgOnLoad(ev) {
				let src = ev.currentTarget.dataset.src,
					width = ev.detail.width,
					height = ev.detail.height

				//记录已下载图片的尺寸信息
				this.imgInfo[src] = {
					width,
					height
				}
				this._removeFromLoadList(src)

				this._runCallback(null, {
					src,
					width,
					height
				})
			},

			_imgOnLoadError(ev) {
				let src = ev.currentTarget.dataset.src
				this._removeFromLoadList(src)
				this._runCallback('Loading failed', {
					src
				})
			},

			//将图片从下载队列中移除
			_removeFromLoadList(src) {
				let list = this.imgLoadList
				list.splice(list.indexOf(src), 1)
				this.imgLoadList = list
				// this.page.setData({
				// 	'imgLoadList': list
				// })
			},

			//执行回调
			_runCallback(err, data) {
				// let callback = this.callbacks[data.src] || this.defaultCallback
				// callback(err, data)
				this.imageOnLoad(err, data)
				// delete this.callbacks[data.src]
			},

			//生成一些测试数据
			genImgListData() {
				let images = [
					'http://img10.360buyimg.com/img/s600x600_jfs/t3586/215/2086933702/144606/c5885c8b/583e2f08N13aa7762.png',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3643/111/394078676/159202/a59f6b72/5809b3ccN41e5e01f.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3388/167/1949827805/115796/6ad813/583660fbNe5c34eae.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3163/281/5203602423/192427/db09be58/5865cb7eN808cc6f4.png',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3634/225/410542226/185677/c17f0ecf/5809b073N364fe77e.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3808/206/329427377/119593/a8cf7470/580df323Nb641ab96.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3805/133/325945617/116002/e90e0bdf/580df2b5Ncb04c5ac.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3046/316/3037048447/184004/706c779e/57eb584fN4f8b6502.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3580/212/1841964843/369414/e78739fb/58351586Ne20ac82a.jpg',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3274/70/4925773051/133266/fae6e84/585c9890Na19001c8.png',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3157/27/5204515328/123020/5f061d81/5865cbcaNfdf0557f.png',
					'http://img10.360buyimg.com/img/s600x600_jfs/t3265/341/5152556931/143928/bdf279a4/5865cb96Nff26fc5d.png'
				]
				images = images.concat(images.slice(0, 4))
				return images.map(item => {
					return {
						url: item,
						loaded: false
					}
				})
			}
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

	.bar {
		position: relative;
		width: 80vw;
		height: 50upx;
		margin: auto;
		border-radius: 30upx;
		// border: 1px solid #000;
		background: #ffba01;

		&::before {
			position: absolute;
			content: "";
			top: 0;
			left: 0;
			width: 80vw;
			height: 85px;
			background: repeating-linear-gradient(45deg, #f06a0e, #f06a0e 10px, transparent 11px, transparent 19px, #f06a0e 20px);
			background-position: 0 0;
			background-repeat: no-repeat;
			animation: move 1s linear infinite;
		}

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
