<template>
	<view>
		<view @click="start" v-if="index<=3">
			<custom name="slot-machine" result="" ref="trigger"></custom>
		</view>
		<view @click="start" v-if="showJerry">
			<custom name="slot-machine" result="" ref="trigger"></custom>
		</view>
		<transition class="showQ">
			<view class="question" @click="goJerry" v-if="showWords" style="margin-top: 200px; text-align: center;">
				在UNNC生存一天，需要多少钱？
			</view>
		</transition>
		<view class="IDcard" v-if="index==7" @click="goToMachine">
			<image src="../../static/4/Jerry学生卡.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				index: 0, //点击次数
				showWords: true,
				showWords: false,
				showJerry: false
			}
		},

		methods: {
			start() {
				this.$refs.trigger.start()

				this.index = this.index + 1;
				if (this.index == 4) {
					this.showMachine = !this.showMachine;
					this.showWords = !this.showWords;

				}
				if (this.index == 5 || this.index == 6) {
					this.showJerry = true
				}
				if (this.index == 7) {
					this.showJerry = false
				}

			},
			//出现问题后回到老虎机，摇出jerry学生卡
			goJerry() {
				this.index = 5,
					this.showWords = false,
					this.showJerry = true,
					console.log(this.index)
			},

			goToMachine() {
				uni.navigateTo({
					url: '/pages/index/gift-machine'
				});
			}
		}
	}
</script>

<style scoped>
	.showQ-enter-active {
		transition: all 1s ease;
	}
</style>
