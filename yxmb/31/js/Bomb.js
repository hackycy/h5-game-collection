
/**
 * 飞机爆炸的动画
 */
var Bomb = function(imgArr,x,y,w,h,gameStart){
	// 图片
	this.img_arry = imgArr;
	// 坐标
    this.x_int = x;
    this.y_int = y;
    // 大小
    this.w_int = w;
    this.h_int = h;
    // 引用
    this.gs = gameStart;
    // 计数帧数
    this.fps_num = 0;
}
Bomb.prototype = {
	//绘制
	draw:function(){
		var img_arry = this.img_arry;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		// 绘图
		this.gs.context.drawImage(img_arry[this.fps_num++],x,y,w,h);
		// 动画结束后从集合种删除此对象
		if (this.fps_num==img_arry.length) {
			this.gs.bo_set.delete(this);
		}
	}
};