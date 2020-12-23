<template>
  <div class="right-box">
    <canvas ref="canvasPerson" id="canvass" width="1060" height="700"></canvas>
  </div>
</template>
<script>

// import InitWebSocket from '@/plugin/webSocket.js'
export default{
    

    components: {

    },
    data() {
      return {
        x:0,
        y:0,
        ctx:null,

      }
    },
   mounted () {
        let myCanvas = this.$refs.canvasPerson ;  
        var ctx = uni.createCanvasContext('canvass', this);
        console.log(ctx);
		this.updatePage(ctx)
    },

    methods: {
      updatePage(ctx,sceneId){
        var _this = this;
        var list = [];
        var personPicBlue = new Image();
        personPicBlue.src = "../../static/logo.png";
        list.push(personPicBlue);
        var airport = new Image();
        airport.src  = "../../static/logo.png";
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
                    _this.x = _this.x+1;
                    _this.y= _this.y+1;
                    _this.fillCanvas(ctx,0,0,1060,700);
                    var canvasWidth = 1060;
                    _this.drawGlass(ctx,airport,0,0,1060,700);
                    _this.drawPerson(ctx,personPicBlue,300,400,"lishi");   
                  },250*1)
                }
              }  
            }
        })  

       
      },
      fillCanvas(ctx,poxS,poxE,poyS,poyE) {//填充canvas
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(poxS,poxE,poyS,poyE);
      },

      drawGlass(ctx,glassPic,poxS,poyS,width,height){//绘制背景
        ctx.drawImage(glassPic,poxS,poyS,width,height);
      },

      drawPerson(ctx,personPic,posX,posY,name){//绘制人物图标
        var _this = this;
        ctx.drawImage(personPic,parseFloat(posX)+_this.x,parseFloat(posY)+_this.y,20, 27);
        ctx.font="11px Arial";
        ctx.fillStyle = "black"
        ctx.fillText(name,parseFloat(posX)+_this.x+25,parseFloat(posY)+_this.y+15);
      },

    },
    beforeDestroy(){
			clearInterval(this.densityTimer);
		},
   
  }
</script>
<style lang="less" scoped>
  .right-box{
     margin-top: 24px;
    margin-left: 100px;
    width: 336px;
    height: 374px;
    background: url(../../static/logo.png) no-repeat no-repeat;
    background-size: cover;
    padding: 38px 27px 33px 34px;
  }
</style>