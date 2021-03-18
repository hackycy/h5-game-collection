/**
 * 我军子弹
 */
var Bullet = function(img,x,y,w,h,vx,vy,hurt,isLife,gameStart){
	// 背景图片
	this.img = img;
	// 坐标
    this.x_int = x;
    this.y_int = y;
    // 大小
    this.w_int = w;
    this.h_int = h;
    // 速度
    this.vx_float = vx;
    this.vy_float = vy;
    // 产生的伤害值
    this.hurt_int = hurt;
    // 生命状态
    this.isLife_bool = isLife;
    // 引用
    this.gs = gameStart;
}
Bullet.prototype = {
	// 移动
	move:function(fps){
		this.y_int -= this.vy_float/fps;
		this.x_int -= this.vx_float/fps;
		//判断子弹的死亡
		if(this.y_int<0-this.h_int){
			this.isLife_bool = false;
		}
	},
	// 绘制
	draw:function(fps){
		var img = this.img;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		// 判断生命状态
		if (this.isLife_bool) {
			this.gs.context.drawImage(img,x,y,w,h);
			// 调用移动方法
			this.move(fps);
		} else {
			this.gs.bt_set.delete(this);// 将生命值为false的子弹从集合里面移除
		}
	},
	//得到当前子弹的矩形
	getRept:function(){
		return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];
	},
	//检查我机与敌机是否发生碰撞
	checkToEpBump:function(){
		var o = this;
		this.gs.ep_set.forEach(function(item){
			if(Tools.checkIntersects(o.getRept(),item.getRept())&&item.hp_int>0&&o.isLife_bool){
				o.isLife_bool = false;
				item.hp_int -= o.hurt_int;
				o.gs.playAudio(o.gs.btToEp_audio);//播放子弹打击的音效
			}
		});
	}
};