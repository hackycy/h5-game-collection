/*!
 * 键盘控制脚本
 */

//公共变量：
var _focusUni = null;
//var _focuseUni2 = null;



/**各种事件绑定（大多数是一次性绑定。不要重复操作）*/
function BindEvents(){

	$(window).resize(function(){resizeContainer(); });
	bindKeyboardEvent();
	bindTableUniEvent();
//	$("#scorePanel .uni").each(function(){bindScoreBarEvent(this);});
	$("#cartoonPanel").click(function(){$(this).hide();});
/*	$("#fuckA").click(function(){
		if(_sumScore>0)	HappyShoot();
		else	showGamingTit("What?!",0,1500);
	});
*/	
}

////////////////////////////////////////////////////////////////////////////

/**
*游戏盘中棋子的鼠标拖拽事件
*/
function bindTableUniEvent(){
	$( "#panelTb .uni" ).each(function(){
		uniEvt($(this));
	});
}



/**************************************************/

/**
*为棋子添加基础事件
*@param:Obj 封装的棋子对象
*/
function uniEvt(Obj){
	Obj
	.mousedown( function(){
//		debug("down:"+_focusUni)
		//聚焦并启动变形效果：
		if(_focusUni!=null){
			reform($(_focusUni));
			
			//++++++++++++++++++++++++++
			//交换两个可以交换的棋子：
			if(_focusUni != this){
				var TD2 = $(this).parent();
				var TD = $(_focusUni).parent();
				//点击交换:
				switch2TDsUni_orgPlace(TD,TD2,true,true);
				moveToZero(TD,TD2,"fast");
			}
			//++++++++++++++++++++++++++
			_focusUni=null;
		}else{
			_focusUni = this; //记录当前焦点对象
			deform1A($(this));//变形
		}
	});
	
/*	
	.draggable({ 
		containment: "#panelTb", 
		scroll: false, 
		stack:"#panelTb td",
		
		start: function() {
		},
		drag: function() {
		},
		stop: function() {
			var TD =$(this).parent();
			var wi = parseInt( TD.css("width"));
			var hi = parseInt( TD.css("height"));
			
			var x= parseInt($(this).css("left"));
			var y =parseInt($(this).css("top"));
			
			var col = Math.round(x/wi);
			var row =Math.round(y/hi);
			
			//移动:
			if(col!=0 || row!=0){
				var id=TD.attr("id");
				var ss = id.split("_");
				var row2 = parseInt(ss[1])+row;
				var col2 = parseInt(ss[2])+col;
				var id2 = ss[0]+"_"+row2+"_"+col2;
				var TD2=$("#"+id2);
				switch2TDsUni_orgPlace(TD, TD2, true, false);
				moveToZero(TD,TD2,"fast");
				
				//gameTimeGoBy();//<<<<<<<----------------------------------游戏时间度过
			}else{
				mZero(TD,"fast");
			}
		}	
 });
*/


}
/**************************************************/


/**绑定分数榜的图标点击事件*/
function bindScoreBarEvent(o){
/*	$(o)
	.bind("mousedown",function(){ //鼠标按下
		var typeN = $(o).find("img:first").attr("lang");
		var b = addScore(typeN, _oneSexyMovieCost); //注意！
		if(b==true){
			showSexyCartoon2();
		}else{
			showGamingTit("战斗力不足!",0,500);
		}
	});
*/
}



/*移除所有棋子单元的所有事件*/
function unbindAllEvents(){
	$(".uni").unbind().css({cursor:"default"});
}


function bindKeyboardEvent(){
	$(window).keydown(function(event){	
//		debug("KEY:"+event.keyCode)
		
		if(_focusUni != null){
			reform($(_focusUni)); //移动前回复形变
			var b;
			switch(event.keyCode) {
					case 65: //'A' (左移)
					case 37: //left arrow
						b = moveUni2(_focusUni, "lf");
						break;
					case 87: //'W' (上移)
					case 38: //up arrow
						b = moveUni2(_focusUni, "up");
						break;
					case 68: //'D' (右移)
					case 39: //right arrow
						b = moveUni2(_focusUni, "rt");
						break;
					case 83: //'S' (下移)
					case 40: //down arrow
						b = moveUni2(_focusUni, "dn");
						break;
					default:
						;//do nothing;
			}
		}
	});
}


/**
*绑定结束面板中相应的事件
*/
function bindEPEvts(){
	//补充最冠军棋子的点击事件：
/*	$("#endPanel #aWinner").click(function(){
		showWinner();
	});*/
}



