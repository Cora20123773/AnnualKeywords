<template>
	<div class="right-box">
		<canvas ref="canvasPerson" id="canvasPerson" width="1060" height="700"></canvas>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				x:0,
				y:0,
				ctx:null,
			}
		},
		mounted () {
			var that = this;
			var ctx = uni.createCanvasContext('canvasPerson',that);
			that.updatePage(ctx);
		},
		methods: {
			updatePage(ctx,sceneId){
				var that = this;
				var list = [];
				console.log(123);
				var personPicBlue = new Image();
				personPicBlue.src = url("../../static/blue.png");
				list.push(personPicBlue);
				var airport = new Image();
				airport.src  = url("../../static/logo.png");
				list.push(airport);
				
				//实现图片预加载
				var loadedImages = 0;    
				var numImages = list.length; 
				list.forEach(img =>{
				    img.onload = function(){ 
				      //当所有图片加载完成时，执行回调函数callback
				      if (++loadedImages >= numImages) {  
				        //设置定时器实现坐标的变化
				        if(this.densityTimer){
							clearInterval(this.densityTimer);
				        }else{
							this.densityTimer = setInterval(function(){
							ctx.clearRect(0,0,1060,700)
				            that.x = that.x+1;
				            that.y = that.y+1;
				            that.fillCanvas(ctx,0,0,1060,700);
				            var canvasWidth = 1060;
				            that.drawGlass(ctx,airport,0,0,1060,700);
				            that.drawPerson(ctx,personPicBlue,300,400,"lishi");   
				          },250*1)
				        }
				      }  
				    }
				})  
			},
			fillCanvas(ctx,poxS,poxE,poyS,poyE) {//填充canvas
				ctx.fillStyle = "rgba(255,255,255,0.1)";
				ctx.fillRect(poxS,poxE,poyS,poyE);
				console.log(canvas);
			},
			drawGlass(ctx,glassPic,poxS,poyS,width,height){//绘制背景
				ctx.drawImage(glassPic,poxS,poyS,width,height);
				console.log(background);
			},
			drawPerson(ctx,personPic,posX,posY,name){//绘制人物图标
				var that = this;
				ctx.drawImage(personPic,parseFloat(posX)+that.x,parseFloat(posY)+that.y,20, 27);
				ctx.font="11px Arial";
				ctx.fillStyle = "black"
				ctx.fillText(name,parseFloat(posX)+that.x+25,parseFloat(posY)+that.y+15);
				console.log(people);
			},
			beforeDestroy(){
				clearInterval(this.densityTimer);
			},
		},
	}
</script>

<style lang="less" scoped>
  .right-box{
    margin-top: 24px;
    margin-left: 100px;
    width: 375px;
    height: 600px;
    background: url(../../static/background.png) no-repeat no-repeat;
    background-size: cover;
    padding: 38px 27px 33px 34px;
  }
</style>