<template>
	<!-- <view class="box" style="height: 500px;" @click="changeLight">		
		<image src="../../static/2/宿舍楼.png" class="dorm">
		<view>
			<image src="../../static/2/亮窗1.png" class="windows win1">
			<image src="../../static/2/亮窗2.png" class="windows win2">
			<image src="../../static/2/亮窗1.png" class="windows win3">
			<image src="../../static/2/亮窗2.png" class="windows win4">
			<image src="../../static/2/亮窗1.png" class="windows win5">
			<image src="../../static/2/亮窗2.png" class="windows win6">
			<image src="../../static/2/亮窗1.png" class="windows win7">
			<image src="../../static/2/亮窗2.png" class="windows win8"></view>
		
	</canvas>
	</view> -->
	<view @click="start">
		<custom name="slot-machine" result="" ref="trigger"></custom>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				x: 0,
				y: 0,
				display:"true",
				src:"../../static/2/亮窗.png",
			}
		},
		mounted() {
		
		
		},

		methods: {
			// changeLight(){
				
			// }
			start(){
				console.log("dfdf")
				this.$refs.trigger.start()
			}
		}
}
</script>

<style>
	.dorm{
		position: relative;
		display: flex;
		height: 400px;
	}
	.windows{
		width: 50px;
		height: 50px;
		display: block;
		position: absolute;
	}
	.win1{
		margin-top: -200px;
		margin-left: 70px;
	}
	
	.win2{
		margin-top: -235px;
		margin-left: 90px;
	}
	.win3{
		margin-top: -160px;
		margin-left: 89px;
	}
	.win4{
		margin-top: -220px;
		margin-left: 126px;
	}
	.win5{
		margin-top: -145px;
		margin-left: 126px;
	}
	.win6{
		margin-top: -200px;
		margin-left: 185px;
	}
	.win7{
		margin-top: -235px;
		margin-left: 165px;
	}
	.win8{
		margin-top: -160px;
		margin-left: 165px;
	}
</style>
