var $fn = {}
$fn = {
	/*
		元素移动函数	
		obj : 运动对象(元素)；
	   attr : 运动属性（左、右、上、下）;
	  speed : 每次移动的距离;
	 target : 运动的距离；
		 fn : 回调函数 到达距离执行的函数 可有可无
	*/
	Move : function(obj,attr,speed,target,fn){
		if(obj.timer) return
		var n = parseInt(getCss(obj,attr)); // 获取当前		
		speed = n > target ? -Math.abs(speed) : Math.abs(speed); //判断 speed 加等、减等  大于目标位置 speed 减等小于目标位置 speed 加等
		obj.timer = setInterval(function(){		 
			if(speed > 0 && n >= target || speed < 0 && n <= target){  //判断停止条件 如果到达目标点 n 等于目标点 清空定时器
				n = target
				obj.style[attr] = n + 'px';
				clearInterval(obj.timer)
				obj.timer = null
				fn && fn()
			}else{
				n += speed;
				obj.style[attr] = n + 'px'
			}		
		},30) 		
	},
	
	/*
		元素抖函数	
		obj : 抖动对象(元素)；
	   attr : 抖动属性（左、右、上、下）;
		  n : 每次抖动的距离;
		 fn : 回调函数 到达距离执行的函数 可有
	*/	
	shaKe : function (obj,attr,n,fn){
		if(obj.timer) return
		var arr = [],m = 0;
		for(var i = n; i >= 0; i -= 3) arr.push(i,-i)
		arr.push(0)		
		var iNum = parseInt(getCss(obj,attr))
		obj.timer = setInterval(function(){
			obj.style[attr] = iNum + arr[m++] + 'px';
			if(m > arr.length -1){
				clearInterval(obj.timer)
				obj.timer = null
				fn && fn();
			}
		},30)		
	},
	
	/*
		opacity 函数	
		e : 操作对象(元素)
		n : 透明度 0~1
	*/
	opacity : function (e,n){  //  0.6  
		var t = getCss(e,'opacity')*100; // 0
		var b = 0.1*100;
		n = n*100
		b = t < n ? Math.abs(b) : -Math.abs(b)
		e.timer = setInterval(function(){
			if(b > 0 && t >= n || b < 0 && t <= n ){
				t = n/100		 
				clearInterval(e.timer)
			}else{
				t += b
				e.style.opacity = t/100
			}		
		},50)	
	},
	random : function (arr){
		var max = Math.max(arr[0],arr[1]);
		var min = Math.min(arr[0],arr[1]);
		var b = max - min;
		var n = Math.round(Math.random()*b + min)
		return n
	}
}

/* $(id)*/
function $(n){
	return document.getElementById(n.slice(1))
}

/*getClass(document,'.class')*/
function getClass(n,k){
	for (var q = n.getElementsByTagName("*"),t = [], i = 0; i < q.length; i++){
		var e = q[i].className.split(' ');
		for(var j = 0; j < e.length; j++){
			if(k.slice(1) === e[j]){				
				t.push(q[i])				
				break
			}
		}		
	} 
	return t
}

/*getTag(document,'tagName')*/
function getTagName(n,k){
	return n.getElementsByTagName(k)
}

//获取非行间样式
function getCss(obj,attr){
	return obj.currenStyle ? obj.currenStyle[attr] : getComputedStyle(obj,false)[attr];
}

