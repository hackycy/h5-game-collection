function $(id){
    return document.getElementById(id);
}
var bodywidth,bodyheight;
var bgflag=true;
var planemove={y:150,shap:0,speed:0,blast:3,planeAngle:0};//plane Arr
var bgArr={x:0,border:0,borderspeed:3,bgspeed:3,rockynum:2,rocky:0,borderx:0,bgborderspeed:10};//bg arr
//var rockYarr=[20,200,300]
var upanddowntimer=null;
//键盘事件
var keyPressList=[];
var gametimer=null;
var bgtimer=null;
document.onkeydown=function(e){
	e=e?e:window.event;
	keyPressList[e.keyCode]=true;
}
document.onkeyup=function(e){
	e=e?e:window.event;
	keyPressList[e.keyCode]=false;
}
var planeimg0=new Image();
planeimg0.src="s0.png";
var planeimg1=new Image();
planeimg1.src="s1.png";
var planeimg2=new Image();
planeimg2.src="s2.png";
var planeimg3=new Image();
planeimg3.src="s3.png";
var bgimg=new Image();
bgimg.src="l2.jpg";
var bgtopimg=new Image();
bgtopimg.src="l2d.png";
var rockimg=new Image();
rockimg.src="r_0.png";
var bomb=false;
var planescore=0;
var downisflag=false;
var isTouch = 'ontouchstart' in window,
		START_EVENT = isTouch ? 'touchstart' : 'mousedown',
		MOVE_EVENT = isTouch ? 'touchmove' : 'mousemove',
		END_EVENT = isTouch ? 'touchend' : 'mouseup';
var istouchstart=false;	
var ondblclick=false;
