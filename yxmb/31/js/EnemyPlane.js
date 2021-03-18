/**
 * 敌军飞机
 */
var EnemyPlane = function(img,x,y,w,h,v,hp,hurt,score,gameStart){
	// 图片
	this.img = img;
	// 坐标
    this.x_int = x;
    this.y_int = y;
    // 大小
    this.w_int = w;
    this.h_int = h;
    // 速度
    this.v_float = v;
    // 血量
    this.hp_int = hp
    // 撞击产生的伤害值
    this.hurt_int = hurt;
    // 被消灭后得到的分数
    this.score = score;
    // 引用
    this.gs = gameStart;
};
EnemyPlane.prototype = {
	//移动
	move:function(fps){
		this.y_int += this.v_float/fps;
		//判断敌军飞机的死亡
		if(this.y_int>this.gs.cvHeight+this.h_int){
			this.hp_int = 0;
		}
	},
	//绘制
	draw:function(fps){
		var img = this.img;
		var x = this.x_int;
		var y = this.y_int;
		var w = this.w_int;
		var h = this.h_int;
		// 判断生命状态
		if (this.hp_int>0) {
			this.gs.context.drawImage(img,x,y,w,h);
			// 调用移动方法
			this.move(fps);
		} else {
			this.gs.ep_set.delete(this);// 将生命值为false的敌机从集合里面移除
			this.gs.score_int+=this.score;// 增加分数
			// 加入爆炸动画
			if(this.hp_int<=0&&y<this.gs.cvHeight){
				var bomb = new Bomb(this.gs.bomb_img,x,y,w,h,this.gs);
				this.gs.bo_set.add(bomb);
			}
		}
	},
	//得到当前飞机的矩形
	getRept:function(){
		return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];
	}
};