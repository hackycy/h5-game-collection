/*!
 * 动画效果相关脚本
 */

var _ani_thread_pool = 0; //动画线程等待池。该值的作用是为了保证两组带动画的方法之间衔接的线程安全，后面的程序必须在该值降为0时才开始执行
var _itv_animate=null;
		
var _bgColors =new Array("3b93ce","905ba0","e24c3b","4cbce1","f1e482","248f51","3c404a","603a70","ffc51b","297eb3","eeeeee");


/**
* 在指定的单元格对象中创建一个棋子单元
* @param evt: 激活事件标识。
*/
function createUni(td){
	var TD= $(td);
	var wi= parseInt(TD.css("width") );
	var hi= parseInt(TD.css("height") );
	
	var html = uniCode(999); //<<<upd:2016-4-13
	TD.append(html);
	var o = TD.find(".uni:first");

	o.css({left:wi/2, top:hi /_rowNum, width:0, height:0, opacity:0});
	o.animate({left:0,top:0,width:"100%",height:"100%",opacity:100},"normal");
}

/////////////////////////////////////////////////////////////////////

/*消除指定的棋子单元*/
function killUni(e){
	var Obj = $(e);
	var TD = Obj.parent();
	var wi = parseInt(Obj.css("width"));
	var hi = parseInt(Obj.css("height"));
	var uHtml = TD.html(); //复制要被清除的棋子的代码
	var typeN = Obj.find("img:first").attr("lang"); //记录被删除的棋子的类型号
	Obj.remove(); //立即删除棋子对象
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//下面这段代码的说明：
	//为了体现消除效果但又不影响原对象上面的棋子下落，必须立即删除原棋子对象，留出空的容器来。但在删除前已保留代码，将该代码用
	//临时生成的容器在原位置加载（等于是个映像副本），然后表现消除的动画效果。这样，动画效果的时间不占用主线程资源。
	var p = TD.position();
	var tmpId = "_sh"+Math.round( Math.random()*100000);
	var html = "<div id='"+tmpId+"' class='tmpFlo'>"+uHtml+"</div>";
	$("body").append(html);
	var tmpO = $("#"+tmpId);
	Obj = tmpO.find(".uni:first");
	tmpO.css({left:p.left, top:p.top, width:TD.css("width"), height:TD.css("height")});
	Obj.animate({
		left:wi/2,
		top:hi/2,
		width:0,
		height:0	
	},function(){
		tmpO.remove();
		addScore(typeN);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

/////////////////////////////////////////////////////////////////////


/**
* 指定的棋子对象向下移动指定格数
*@param e: 棋子对象
*@param n: 指定格子数目
*/
function moveUni2DownTD(e, n){
	var TD = $(e).parent();
	var id = TD.attr("id");
	var ss = id.split("_");
	var n2 = parseInt(ss[1])+n;
	var destID = ss[0]	+"_"+n2+"_"+ss[2];
//	debug(id + "<->"+destID)
	
	var TD2 = $("#"+destID);
	//先实质交换:
	switch2TDsUni(TD,TD2); 
	//动画：
	var hi = parseInt(TD.css("height")) * n; //注意！
	TD2.find(".uni").css({top:-hi}).animate({top:0},"normal",function(){
		_ani_thread_pool--;
		runGameRules(0);
	});//(动画)移动
//	debug("MV")
}



/**
*移动（交换）
*@param e 原始棋子对象
*@param type: 方向标识。up/dn/lf/rt
*@return : 成功移动:true; 没有移动:false
*/
function moveUni2(e, type){
	var TD =  $(e).parent();
	var TD2 = getSwitcherTD(TD[0],type);	//找到另一个棋子容器
	if(TD2.length<=0) return false;
	//---------------------
	switch2TDsUni_orgPlace(TD,TD2,true,true);//真实交换数据
	moveToZero(TD,TD2,"fast");
	_focusUni = null; //+++
	return true;
}


////////////////////////////////////////////////////////////////////////
//棋子焦点动画：
//变形1A
function deform1A(Obj){
	Obj.animate({opacity:0.5},"fast",function(){
		deform1B(Obj);
	});
}
//变形1B
function deform1B(Obj){
	Obj.animate({opacity:1},"fast",function(){
		deform1A(Obj);
	});
}
//恢复形变:
function reform(Obj){
	Obj.stop().css({opacity:1});
}

////////////////////////////////////////////////////////////////////////

/**
*将指定所有单元格中的棋子移动位置到正常位
*/
function moveToZeroPlace(idsArr){
	//设定保护线程数：
	_ani_thread_pool = idsArr.length;
	
	for(var i=0;i<idsArr.length;i++){
		var id=idsArr[i];
		if(id==null || id==""){
			_ani_thread_pool--;
		}else{
			var TD = $("#"+id);
			var o = TD.find(".uni:first");
			o.animate({left:0,top:0},"slow",function(){
				_ani_thread_pool--;
				runGameRules(0);
			});
		}
	}
}

/**
*将任意两个棋子已任意速度还原位置
*@param TD1,TD2 封装的棋子容器对象
*@param speed: 速度
*/
function moveToZero(TD1, TD2, speed){
	var Obj1=TD1.find(".uni:first");
	var Obj2=TD2.find(".uni:first");

	if(Obj1.length<=0 && Obj2.length<=0)return;
	if(speed==null || speed=="") speed="normal";
	//设定保护线程数：
	_ani_thread_pool = 2;
	
	if(Obj1.length>0){
		Obj1.animate({left:0,top:0},speed,function(){
			_ani_thread_pool--;
			runGameRules(0);
		});
	}else{	_ani_thread_pool--; }
	if(Obj2.length>0){
		Obj2.animate({left:0,top:0},speed,function(){
			_ani_thread_pool--;
			runGameRules(0);
		});
	}else{	_ani_thread_pool--;}
}


/**单个对象位置回复*/
function mZero(TD1, speed){
	var Obj1=TD1.find(".uni:first");
	if(Obj1.length<=0)return;
	if(speed==null || speed=="") speed="normal";
	Obj1.animate({left:0,top:0},speed);
}


/**显示不同背景*/
function showBg(typeN){
	$("#bgTmp1").hide().css({backgroundColor:"#"+_bgColors[typeN]})
	.fadeIn("normal",function(){
		$("body").css({backgroundColor:"#"+_bgColors[typeN]});		
	});

}

/**不同girl亮相*/
function showGi1(typeN){
	var o=$("#uGirl1");
	o.stop().hide(0);
	var code = giCode1(typeN);
//	o.css({backgroundImage:code}).fadeIn(500);
	o.html(code).fadeIn(500);
}

/**
*播放卡通
* 【注意】这里随机选择文件名的算法，要根据实际情况调整！
*/
function showSexyCartoon2(n){
	clearTimeout(	_itv_animate);
	var o = $("#cartoonPanel");
	//随机选择动画：
	if(n==null) n = Math.floor( Math.random() * _sexyMoviePicNum ); //注意不要超过图片最大数量！
	o.html(xPCode(n))
	.show("fast");
}




/*警示--游戏开始*/
function showGameStartInfo(){
	$("#txtTit2").html(_gameTitle+"<br>寻找最强的英雄").fadeIn(1000).fadeOut(1000,function(){
			$("#txtTit").html("战斗开始").show(0).fadeOut(1000,function(){
				runGameRules(0);
				StartCountTime();
			});
	});	
}

/*警示--游戏结束*/
function showGameOverInfo(){
	$("#txtTit").html("战斗结束").fadeIn(500).fadeOut(1000,function(){
		GameDataStatisic();
		$("#endPanel").fadeIn(500,function(){
			bindEPEvts();
		});
	});	
}

/*警示--游戏过程中的各种提示*/
function showGamingTit(msg, inDelay, outDelay){
	if(inDelay==null) inDelay=1000;
	if(outDelay==null) outDelay=1000;
	$("#txtTit2").html(msg).fadeIn(inDelay).fadeOut(outDelay);	
}

/**游戏时间条的变化*/
function animGameTimeBar(v){
	var v = Math.round(100 *_gameTime / _fullGameTime);
	var s = v+"%";
	$("#gameTime").animate({height:s},"fast")
	.text(_gameTime);
}

/**[递归]
*不断将下层的图片层转到上层
*/
function popImg(delay){
	if(delay!=null && delay>0){
		setTimeout(function(){
			var o1 =$("#endPanel .cartoonPanel:first");
			var o2 =$("#endPanel .cartoonPanel:last");
			o2.insertBefore(o1);
			popImg(delay); //递归
		},delay);
	}
}


/**[递归]
*不断删除上层图片层
*/
function removePopImg(delay, v){
	if(v==null) v=0;
	else if(v>_maxPicContainterNum) return; //!!预先指定的容器个数
	
	var id="cpT"+v;
	var o = document.getElementById(id);
	if(o!=null){
		$(o).slideUp(300,function(){
			$(this).remove();
		});
	}
	if(delay!=null && delay>0){
		setTimeout(function(){
			removePopImg(delay, v+1); //递归
		},delay);
	}
}


/*展示最终赢家的身形*/
function showWinner(){
	$("#endPanel").append($("#uGirl1") );
	showSpeech(_bestUType);
}

function showSpeech(n){
	var o = $("#uGirl1");
	var left = parseInt( o.css("left"));
	var top = parseInt( o.css("top"));
	var z = parseInt(o.css("zIndex") );
	$("#aSpeech").text(_heroTalking[n])
	.css({
		left: left,
		top: top-30,
		zIndex: z+1
	})
	.show();
}
