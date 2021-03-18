var progress=document.querySelector('.pros');
var start=document.querySelector('.start');
var pros=document.getElementsByClassName('pro')[0];
var over=document.getElementsByClassName('over')[0];
var restart=document.getElementsByClassName('restart')[0];
var container=document.querySelector('.container');
var scores=document.querySelector('h1');
var s=0;
var rules=document.querySelector('.rules');
var rule=document.querySelector('.rule');
var close=document.querySelector('a');
// 开始游戏
start.onclick=function(){
	// 按钮移除
	this.remove();
	// 进度条
	var proLeft=0;
	var timer_pro=setInterval(function(){
		proLeft-=0.045;
		pros.style.backgroundPositionX=proLeft+'px';
		if (proLeft<=-270) {
			clearInterval(timer_pro);
			clearInterval(circle);
			over.style.display='block';
			restart.style.display='block';
		}
	},5)
	star();	// 第一次游戏的函数
	res();	// 调用重新开始的函数
}

// 游戏开始函数
function star(){
	//=============================================================================游戏进行时
	circle=setInterval(function(){
	//灰太狼随机出现的位置
	var arrPos = [
		{left:"170px",top:"210px"},
		{left:"50px",top:"280px"},
		{left:"45px",top:"370px"},
		{left:"70px",top:"480px"},
		{left:"200px",top:"450px"},
		{left:"330px",top:"480px"},
		{left:"320px",top:"356px"},
		{left:"305px",top:"250px"},
		{left:"200px",top:"450px"}
	];
	// 将图片存进数组
	var wolf_1=['img/h0.png','img/h1.png','img/h2.png','img/h3.png','img/h4.png','img/h5.png','img/h6.png','img/h7.png','img/h8.png','img/h9.png'];
	var wolf_2=['img/x0.png','img/x1.png','img/x2.png','img/x3.png','img/x4.png','img/x5.png','img/x6.png','img/x7.png','img/x8.png','img/x9.png'];
	var appearWolf=['img/h0.png','img/x0.png'];
	var newImg=document.createElement('img');
	container.appendChild(newImg);
	var wfLocation=rand(0,8);	// 狼的随机位置
	newImg.style.left=arrPos[wfLocation].left;
	newImg.style.top=arrPos[wfLocation].top;
	newImg.style.position='relative';
	var X=rand(0,2);		// 选择灰太狼还是小灰灰
	if (X<2){
		X='h';
	}else{
		X='x';
	}
	var y=0;
		newImg.style.display='block';
		var appear0=setInterval(function(){
			newImg.src='img/'+X+y+'.png';
			y++;
			var indexs=0;
			newImg.onclick=function(){
				indexs++;
				if (indexs>1) {
					return false;		// 鼠标只能点击1次 而不能无限点
				}
				y=5;
				for (var i=0;i<4;i++) {
					y++;
					newImg.src=wolf_1[y];
					if(y>9){
						y--;
					}
				}
				if (X=='h') {
					s+=10;
					scores.innerHTML=s;
				}else if (X=='x'){
					s-=10;
					if (s<=0) {
						s=0;
					}
					scores.innerHTML=s;
				}
			}
			if (y>5) {
				clearInterval(appear0);
				setTimeout(function(){
					y=5;
					var appear1=setInterval(function(){
						newImg.src='img/'+X+y+'.png';
						console.log(y);
						y--;
						if (y<0) {
							clearInterval(appear1);
							// newImg.style.display='none';
							newImg.remove();
						}
					},50)
				},stay)
			}
		},50);
},secs)
	s=0;
	scores.innerHTML=s;
//=============================================================================游戏结束
}
// 重新开始函数
function res(){
	restart.onclick=function(){
		// 按钮移除
		restart.style.display='none';
		over.style.display='none';
		var proLeft=0;
		var timer_pro=setInterval(function(){
			proLeft-=0.045;
			pros.style.backgroundPositionX=proLeft+'px';
			if (proLeft<=-270) {
				clearInterval(timer_pro);
				over.style.display='block';
				restart.style.display='block';
			}
		},5)
		star();
	}
}
rules.onclick=function(){
	rule.style.display='block';
}
close.onclick=function(){
	rule.style.display='none';
}



// 随机函数
function rand(min,max){
	return Math.round(Math.random()*(max-min)+min);
}
var secs=rand(1200,1500);
var stay=rand(150,250);

