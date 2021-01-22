<template>
	<view class="wrapper">
		<image class="background" src="https://i.loli.net/2021/01/22/YxW53C6ck8javLf.jpg"></image>
		<image class="transfer" src="../../static/phase4/transfer.png" mode="aspectFill"></image>
		<view>
			<slot-machine class="slot-machine" ref="trigger1"></slot-machine>
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

			}
		},
		onBackPress(option) {
			// 屏蔽安卓返回物理按键
			if (option.from === 'backbutton') {
				return true
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
	
	.transfer {
		position: fixed;
		bottom: 1vh;
		width: 800upx;
		height: 200upx;
	}
	
	.slot-machine {
		width: 70vw;
		height: 200upx;
	}
</style>
