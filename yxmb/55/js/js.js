window.onload = function(){
	body =  document.body;
	bodywidth=window.innerWidth;
	bodyheight=window.innerHeight;
	body.style.height = bodyheight+'px';
	body.style.width = bodywidth+'px';
	document.getElementById('gamepage').style.width=bodywidth+'px';
	document.getElementById('gamepage').style.height=bodyheight+'px';
	document.getElementById('canvas1').width=bodywidth;
	document.getElementById('canvas1').height=bodyheight;
	document.getElementById('gamestart').style.width=bodywidth+'px';
	document.getElementById('gamestart').style.height=bodyheight+'px';
	var that = this;
	document.getElementById("canvas1").addEventListener("dblclick", function(e){
		e.stopPropagation();
		e.preventDefault();
		ondblclick=true;
	}, false);
	document.getElementById("canvas1").addEventListener(START_EVENT, function(e){
		try{
			if(e.touches.length > 1){ // 仅处理一根手指
				e.stopPropagation();
				e.preventDefault();
				return;
			}
		}catch(e){}
		
		downisflag=true;
		istouchstart=true;
	}, false);
	document.getElementById("canvas1").addEventListener(END_EVENT, function(e){
		try{
			if(e.touches.length > 1){ // 仅处理一根手指
				e.stopPropagation();
				e.preventDefault();
				return;
			}
		}catch(e){}
		
		downisflag=false;
		istouchstart=false;
	}, false);
	document.addEventListener(MOVE_EVENT, function(e){
		if(!istouchstart){
			return;
		}
		try{
			if(e.touches.length > 1){ // 仅处理一根手指
				e.stopPropagation();
				e.preventDefault();
				return;
			}
		}catch(e){}
		e.stopPropagation();
		e.preventDefault();
		downisflag=true;
	}, false);
	drawcanvas();
}
function startgame(){
	gametimer=setInterval(drawcanvas,50);
	document.getElementById('gamestart').style.display='none';
}
//画图
function drawcanvas(){

	var theCanvas = document.getElementById("canvas1");
	var context = theCanvas.getContext("2d");
	context.clearRect(0,0,bodywidth,bodyheight);
	
	//更新数据
	update();
	//画图
	render();
	
	function update(){
	
		//背景数组
		bgArr.x=bgArr.x-bgArr.bgspeed;
		if(bgArr.x<=-bodywidth){
			bgArr.x=0;
			//bgArr.rockynum=Math.floor(Math.random()*3);
			//planescore=planescore+100;
			//bgArr.rockynum=0;
		}
		
		
		//
		bgArr.borderx=bgArr.borderx-bgArr.bgborderspeed;
		if(bgArr.borderx<=-bodywidth-40){
			bgArr.borderx=0;
			bgArr.rockynum=Math.floor(Math.random()*3);
			//bgArr.rockynum=1
		}
		
		
		if(planemove.y<bodyheight){
			planescore++
		}
		bgArr.bgborderspeed=10+Math.floor(planescore/20);
		//边界数组
		bgArr.border=bgArr.border+bgArr.borderspeed;
		if(bgArr.border>40||bgArr.border<=0){
			bgArr.borderspeed=bgArr.borderspeed*(-1);
		}
		
		
		//按键事件
		if(bomb){
			planemove.speed=planemove.speed+1.5
			planemove.planeAngle=planemove.planeAngle-50;
		}
		else{
			if(downisflag==true){
				planemove.speed=planemove.speed-0.4;
				planemove.planeAngle=planemove.planeAngle-1.2;
			}
			else{
				if(ondblclick==true){
					planemove.speed=planemove.speed-8;
					planemove.planeAngle=planemove.planeAngle-24;
					ondblclick=false;
				}
				planemove.speed=planemove.speed+0.4;
				planemove.planeAngle=planemove.planeAngle+1.2;
			}
		}
		planemove.y=planemove.y+planemove.speed;
		
		//飞机样式
		planemove.shap++;
		if(planemove.shap>=4){
			planemove.shap=0;
		}
		//var planeimg=new Image();
		//planeimg.src="s0.png";
		//planeimg.src="s"+planemove.shap+".png";
		
		//岩石位置
		switch(bgArr.rockynum){
			case 0:
				bgArr.rocky=bgArr.border+17;
				break;
			case 1:
				bgArr.rocky=(bodyheight-100)/2;
				break;
			case 2:
				bgArr.rocky=bodyheight-120-bgArr.border;
				break;
		}
	}

	
	
	function render(){
		//bg move//背景图变化
		testwall();
		context.save();
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.x,0)
		context.drawImage(bgimg,0,0,320,460,0,0,bodywidth,bodyheight);
		context.restore();
		context.save();
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.x+bodywidth,0)
		context.drawImage(bgimg,0,0,320,460,0,0,bodywidth,bodyheight);
		context.restore();
		
		
		
		//bg border//上边界条
		context.save();
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.borderx,bgArr.border)
		context.drawImage(bgtopimg,0,0,320,20,0,0,bodywidth,20);
		context.restore();
		context.save();
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.borderx+bodywidth,bgArr.border)
		context.drawImage(bgtopimg,0,0,320,20,0,0,bodywidth,20);
		context.restore();
		context.save();
		
		//bg border//下边界条
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.borderx,(bodyheight-20-bgArr.border))
		context.drawImage(bgtopimg,0,0,320,20,0,0,bodywidth,20);
		context.restore();
		context.save();
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.borderx+bodywidth,(bodyheight-20-bgArr.border))
		context.drawImage(bgtopimg,0,0,320,20,0,0,bodywidth,20);
		context.restore();
		
		//rock//岩石
		context.save();
		context.setTransform(1,0,0,1,0,0)
		context.translate(bgArr.borderx+bodywidth,bgArr.rocky)
		context.drawImage(rockimg,0,0,40,100,0,0,40,100);
		context.restore();
		
		//飞机
		context.save();
		context.setTransform(1,0,0,1,0,0)
		var angleInRadians =planemove.planeAngle * Math.PI / 180;
		context.translate(100, planemove.y+16)
		context.rotate(angleInRadians);
		if(planemove.shap==0){
			context.drawImage(planeimg0,0,0,48,32,-24,-16,48,32);
		}else if(planemove.shap==1){
			context.drawImage(planeimg1,0,0,48,32,-24,-16,48,32);
		}else if(planemove.shap==2){
			context.drawImage(planeimg2,0,0,48,32,-24,-16,48,32);
		}else if(planemove.shap==3){
			context.drawImage(planeimg3,0,0,48,32,-24,-16,48,32);
		}
		context.restore();
		
		//score//分数
		context.save();
		var gr = context.createLinearGradient(150, 0, 250, 0); 
		gr.addColorStop(0,'rgb(255,255,255)');
		gr.addColorStop(.5,'rgb(0,0,0)');
		gr.addColorStop(1,'rgb(255,255,255)');
		context.fillStyle = gr;
		context.font = "italic bold 30px serif"; 
		context.fillText("score:"+Math.floor(planescore/10)+"", 150, 100); 
		context.restore();
	}
}
function testwall(){
	if(planemove.y<=(bgArr.border+20)||planemove.y>=(bodyheight-50-bgArr.border)){
		bomb=true;
	}
	if(bgArr.borderx+bodywidth-20<=100&&100<=bgArr.borderx+bodywidth+40){
	//alert(1)
		switch(bgArr.rockynum){
			case 0:
				if(planemove.y<=bgArr.border+117){
					bomb=true;
				}
				break;
			case 1:
				if((bodyheight-100)/2-32<=planemove.y&&planemove.y<=(bodyheight-100)/2-32+135){
					bomb=true;
				}
				break;
			case 2:
				if(planemove.y>=bodyheight-150-bgArr.border){
					bomb=true;
				}
				break;
		}
	
	}
	if(planemove.y>bodyheight){
		//restart();
		document.getElementById('gameend').style.display="block";
		document.getElementById('gameendbtn').style.display="block";
		document.getElementById('score').innerHTML="";
		document.getElementById('score').innerHTML="您的分数"+Math.floor(planescore/10);
		
	}
}
function restart(){
	document.getElementById('gameend').style.display="none";
	document.getElementById('gameendbtn').style.display="none";
	bomb=false;
	ondblclick=false;
	planemove={y:150,shap:0,speed:0,blast:3,planeAngle:0};
	bgArr.bgborderspeed=10;
	planescore=0;
}

function blast(){ 
	$('bg_0').style.webkit='paused';
	clearInterval(bgtimer);
}
function getTransLateX(el){
	var o = typeof el == "object" ? el : $(el),
		str = o.style.webkitTransform, start, end, ret;
	start = str.indexOf("("), end = str.indexOf("px");
	if(start){
		return str.substring(start+1, end);
	}else{
		return 0;
	}
}