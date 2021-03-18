/**
 * 画布基础类
 */
var Frame = function(cvWidth,cvHeight,allImgNum){
	// 定义画布大小
	this.cvWidth = cvWidth;
	this.cvHeight = cvHeight;
	this.canvas = document.getElementById('canvas');
	this.canvas.width = this.cvWidth;
	this.canvas.height = this.cvHeight;
	this.context = canvas.getContext('2d');
	// 表示加载进度的值（即当前已加载多少条资源，包括图片音频）
	this.progress_int = 0;
	// 总共需加载多少张图片
	this.allImgNum_int = allImgNum||0;
}
Frame.prototype = {
	/**
	 * 获取图片
	 */
	getImg:function(src){
		var o = this;
		var img = new Image();
		img.onload = function(){o.progress_int++};
		img.onerror = function(){alert('图片加载失败：'+src)};
		img.src = src;
		return img;
	},
	/**
	 * 获取音频文件
	 * @param loop:是否循环播放；autoplay:加载完是否立即播放
	 */
	getAudio:function(src,loop,autoplay){
		loop = loop||false;
		autoplay = autoplay||false;
		var o = this;
		var audio = document.createElement('audio');
		audio.loop = loop;
		audio.autoplay = autoplay;
		audio.onloadedmetadata = function(){o.progress_int++};
		audio.onerror = function(){o.progress_int++,alert('音频加载失败：'+src)};
		audio.src = src;
		return audio;
	},
	/**
	 * 播放音频
	 * 描述：当同一个音频对象需要同时实现多次播放是调用此方法
	 */
	playAudio:function(audio){
		if(audio.error!==null)return;
		var newAudio = document.createElement('audio');
		newAudio.loop = false;
		newAudio.autoplay = true;
		newAudio.onended=function(){newAudio=null};
		newAudio.src=audio.src;
		newAudio.play();
	},
	/**
	 * 绘制初始化-进度条
	 */
	_init:function(obj){
		var o = this;
		o.context.save();
		// 循环绘制画布
		animate();
		function animate() {
		    o._draw();
		    if(o.progress_int<o.allImgNum_int)Tools.requestAnimFrame( animate );
		    else {
				o.context.restore();
		    	obj.showFrame();//加载玩图片就进入游戏
		    }
		}
	},
	/**
	 * 绘制进度条
	 */
	_draw:function(){
		//进度条坐标及大小
		var x = this.cvWidth*0.2;
		var y = this.cvHeight*0.40;
		var w = this.cvWidth*0.6;
		var h = 24;
		var pro= this.progress_int/this.allImgNum_int;
		var progress = parseInt(w*pro);
		var ctx = this.context;
		ctx.shadowBlur=40;
		ctx.shadowColor='#afa';
		//绘制背景
		ctx.beginPath();
		ctx.fillStyle="#000";
		ctx.fillRect(0,0,this.cvWidth,this.cvHeight);
		ctx.closePath();
		//绘制进度条
		ctx.beginPath();
		ctx.lineJoin='round';
		var grd=ctx.createLinearGradient(0,y,0,y+h);
		grd.addColorStop(0,"#6f6");
		grd.addColorStop(0.4,"#afa");
		grd.addColorStop(1,"#6f6");
		ctx.fillStyle=grd;
		ctx.fillRect(x,y,progress,h);
		ctx.closePath();
		//绘制进度条边框
		ctx.beginPath();
		ctx.strokeStyle="#6f6";
		ctx.lineWidth=3;
		ctx.lineJoin='round';
		ctx.strokeRect(x,y,w,h);
		ctx.closePath();
		//绘制文字
		ctx.beginPath();
		grd=ctx.createLinearGradient(0,y+h*2,0,y+h*3);
		grd.addColorStop(0,"#6f6");
		grd.addColorStop(0.4,"#afa");
		grd.addColorStop(1,"#6f6");
		ctx.fillStyle=grd;
		ctx.textAlign="center";
		ctx.font="35px Arial";
		ctx.fillText(parseInt(pro*100)+'%',this.cvWidth*0.5,y+h*3);
		ctx.closePath();
	}
};