/**
 * 合并对象
 */
window.extend = function(){
	if(arguments.length==0)return {};
	if(!Object.assign){
		var newObj = {};
		for(var i in arguments){
			for(var key in arguments[i]){
				newObj[key] = arguments[i][key];
			}
		}
		return newObj;
	}else{
		return Object.assign.apply({},arguments);
	}
};
/**
 * requestAnimationFrame兼容处理
 */
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
/**
 * Set
 */
window.Set = function(){
	this.arr = [];
};
Set.prototype = {
	size:function(){
		return this.arr.length;
	},
	add:function(item){
		var type = true;
		for(var i=0;i<this.size();i++){
			if(this.arr[i] === item){
				type = false;
				break;
			};
		}
		type&&this.arr.push(item);
	},
	delete:function(item){
		var newArr = [];
		this.forEach(function(v){
			(v===item)||newArr.push(v);
		});
		this.arr = newArr;
	},
	has:function(item){
		var type = null;
		for(var i=0;i<this.size();i++){
			if(this.arr[i] === item){
				type = item;
				break;
			};
		}
		return type===item;
	},
	clear:function(){
		this.arr.length = 0;
	},
	forEach:function(callback){
		this.arr.forEach(callback);
	}
};
/**
 * 工具
 */
window.Tools = {
	/**
	 * 碰撞检测
	 * @param 传入两个矩形(数组)，例如：[0,0,5,6],“0,0”代表坐标，“5,6”代表宽高
	 * @return boolen。true:相交
	 */
	checkIntersects:function(rept1,rept2) {
		var rept1_x0 = rept1[0],rept1_x2 = rept1[0]+rept1[2];
		var rept1_y0 = rept1[1],rept1_y2 = rept1[1]+rept1[3];
		var rept2_x0 = rept2[0],rept2_x2 = rept2[0]+rept2[2];
		var rept2_y0 = rept2[1],rept2_y2 = rept2[1]+rept2[3];
		return !(rept1_x0>rept2_x2||rept1_x2<rept2_x0||rept1_y0>rept2_y2||rept1_y2<rept2_y0);
	},
	/**
	 * 最近的一帧的时间
	 */
	fps_lastTime:0,
	/**
	 * requestAnimationFrame 的浏览器兼容性处理
	 */
	requestAnimFrame:function(callback,isPause){
		isPause=isPause||false;
		var spf = 1000 / 60;
		var thisTime = new Date().getTime();
		spf = Tools.fps_lastTime?(thisTime - Tools.fps_lastTime):spf;
		Tools.fps_lastTime = thisTime;
		callback&&requestAnimationFrame(function(){
			callback(thisTime,1000/spf);
		});
	}
}