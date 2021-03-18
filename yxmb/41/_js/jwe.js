 /*!
* 总脚本
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//预置游戏变量：
//说明：这些变量是可在一定范围下自由更改的。

var _rowNum= 7;  //游戏盘行数
var _colNum = 7;	//游戏盘列数
var _sexyMoviePicNum = 459; //性感动画图片的数量
_dir = "default";		//默认图片目录（同时也是背景图片目录名）
_extName = "png"; 	//默认图片扩展名
_bgExtName = "jpg"; //默认背景图片扩展名
_UniTypeNumberMax = 11;  //总共最大的棋子种类数
_UniTypeNumber = 5;  //可用的棋子的种类数
_oneSexyMovieCost = -1; //打开一个动画所需的花费
_fullGameTime = 100; //游戏总时间
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



var _gameTitle = "超级英雄宝石方块";

//-------------------------------------------------------------------------------------
/**调试栏信息*/
function debug(info){
	if(info==null || info.length==0) return;
	var txt0 = $("#debugPanel").html();
	var txt1 = txt0+"<br>"+info;
	if(txt1.length>400){ txt1=txt1.substring(txt1.length-400);}
	$("#debugPanel").html(txt1);
}
//-------------------------------------------------------------------------------------

/**框架初始化*/
function initContainer(){
	//新随机生成应用棋子代码
	if(_UniTypeNumber  > _UniTypeNumberMax) _UniTypeNumber = _UniTypeNumberMax;
	createAppCode(); 
	
	//默认背景
	showBg(999);
	
	//游戏盘
	var tb = $("#panelTb");
	var html="";
	for(var i=0;i<_rowNum;i++){
		html+="<tr>";
		for(var j=0;j<_colNum;j++){
			var id= "td_"+i+"_"+j;  //注意：id格式非常重要！记录了行号和列号，一直要用到
			html+="<td id='"+id+"'></td>";
		}
		html+="</tr>";
	}
	tb.append(html);
	
	//计分牌
	html="";
	var scP = $("#scorePanel");
	for(var i=0;i<_UniTypeNumber;i++){
		var N = _ucArr[i]; //!!!
		html+="<div class='sDiv' id='sDiv"+N+"'>";
		html+=uniCode(N) + "x" + scoCode(N);
		html+="</div>";
	}
	scP.append(html);
	
	//游戏时间条：
	_gameTime = _fullGameTime;
	animGameTimeBar(_gameTime);
	
	//----------------
	//位置调整方法：
	resizeContainer();
	//----------------
}


/*重新调整容器及内容*/
function resizeContainer(){
	var tb = $("#panelTb");
	var wi=-1,hi=-1;
	var o=null;
	var WI = $(window).width();
	var HI = $(window).height();
	var minBD = Math.min(WI,HI);
	var hi_top= parseInt($("#topH").css("height"));
	var hi_btm= parseInt($("#btmH").css("height"));
	
	//调整容器尺寸
	var tdHi = Math.round((minBD - hi_top - hi_btm*2) / _rowNum);
	var tdWi = tdHi;
	var os = tb.find("td");
	os.each(function(){
		$(this).css({	width: tdWi,	height: tdHi	});
	});
	//计分栏尺寸：
	o= $("#scorePanel");
	o.css({
		height: tb.css("height"),
		fontSize: tdHi /4
	});
	o.find(".uni").css({
		width: tdWi *2/3,
		height: tdHi *2/3
	});
	
	//背景层
	$("#bgTmp1").css({	width: WI,	height: HI	});
	$("#bgTmp2").css({	width: WI,	height: HI	});
	
	//gi面板：
	o = $("#uGirl1");
	hi = HI * 0.75;
	wi = hi * 497 / 400;
	o.css({
		width: wi,
		height: hi,
		left: WI -wi,
		top: HI -hi
	});
	
	//动画面板1
	o = $("#cartoonPanel");
	hi = HI -20;
	wi = hi *1280/960;
	o.css({
		width: wi,
		height: hi,
		left: (WI-wi)/2,
		top: (HI-hi)/2
	});
	//提醒文字：
	var minB = Math.min(WI, HI);
	var fSz = minB/5;
	var fSz2=minB/15;
	var pTop = (HI-fSz)/3;
	var pTop2 = (HI-fSz)/2;
	$(".warn1").css({paddingTop:pTop, fontSize:fSz});
	$(".warn2").css({top:pTop2, fontSize:fSz2});
	
	//游戏时间条:
	o = $("#gameTimeBar");
	hi = tdHi * _rowNum;
	wi = tdWi/3;
	o.css({
		width: wi,	height:hi,
		left: parseInt( (WI-parseInt(tb.css("width")))/2 ) - wi -10,
		top: parseInt(tb.position().top)+5
	});

	//结束面板：
	$("#endPanel").css({	height: HI,	fontSize: minBD/20	});
	$("#endPanel #btnReset2").css({fontSize: minBD/20});
	//最终释放按钮:
//	$("#endPanel #fuckA").css({fontSize: minBD/40});
}



/**
* 清理
*/
function clearContainer(){
	clearTimeout(_itv_run);
	clearTimeout(_itv_score);
	clearTimeout(	_itv_animate);
	$("#panelTb .uni").remove(); //清除棋子小单元
	$("#debugPanel").html("");
	_sumScore = 0;
	_ani_thread_pool =0;
	_focusUni =null;
	$("#cartoonPanel").hide(0);
	$("#gameTimeText").text(_fullGameTime);
}


/*生成一套全新的棋子
* @param evt: 激活事件标识。 
*/
function newStuff(){
	var os = $("#panelTb td");
	os.each(function(){createUni(this);});
}



/**
*消除满足条件的棋子
*@param os 要删除的棋子对象列表
* return Array: 需要向下移动的容器的列号集合
*/
function KillUnits(os){
	if(os==null || os.length<=0) return null;
	
	var str = ""; //记录需要向下移动的列信息
	for(var i=0;i<os.length;i++){
		id = $(os[i]).parent()[0].id; //当前被消除的棋子的单元格的id
		//~~~~~~~~~~~~~
		//获得列号：
		var ss = id.split("_");
		str += ss[2]+",";
		//~~~~~~~~~~~~~
		killUni(os[i]);
	}
	var arr = str.split(",");
	//去重
	var arr2 = arr.unique4(); 
//	debug(arr2)
	return arr2;
}



/**棋子下落
*@param dropingColArr: 需要向下移动的容器的列号集合
*/
function DropDownUnits(dropingColArr){
	if(dropingColArr==null || dropingColArr=="") return ;
	
	var idsArr=new Array();
	
	//TODO 获取每个下降列中每个格子最终应有的棋子信息
	for(var i=0;i<dropingColArr.length;i++){
		var c = dropingColArr[i];
		if(c=="")continue;
		
		var rNArr = new Array(); //记录最低空格子以上的有内容的格子的行号
		var deepEm = -1; //记录最下面的一个空位置的行号（注意默认值必须小于零！）
		var emptyNum = 0; //记录该列的空格子数
		
		//第1步：从下到上记录所有有棋子的格子信息
		for(var r=_rowNum-1; r>=0 ;r--){
			var id = "td_"+r+"_"+c;
			var TD = $("#"+id);
			var o = TD.find(".uni");
			if(o.length>0){//不为空
				if(deepEm>=0) rNArr.push(r); //记录存在的行号（空位置以上的）
			}else{
				if(deepEm<0) deepEm = r;
				emptyNum ++;
			}
		}
		//第2步：这些现有的棋子最终应该紧密排列在最下面的格子里，顺序不变
		var rowN = deepEm;
		for(var k=0; k<rNArr.length; k++){
			var id = "td_"+ rNArr[k] +"_"+c;
			var id2 = "td_"+ rowN +"_"+c;
			var TD = $("#"+id); //源单元格
			var TD2 = $("#"+id2); //目标单元格
			
			copyUniFromTD(TD, TD2); //-------复制棋子
			rowN--;

			idsArr.push(id2);//+
		}
		//第3步：由此上面空出的所有格子应该从框架外新生成棋子，落到里面
		for(var k=0;k<emptyNum;k++){
			var id = "td_"+k+"_"+c;
			var TD = $("#"+id); //目标单元格
			newSkyUniAtTD(TD, emptyNum); //--------空降新棋子

			idsArr.push(id);//+
		}
	}

	idsArr.sort();
	moveToZeroPlace(idsArr);  //动画实现
}


/**
*计分面板单元根据分数排序
*/
function SortScorePanle(){
	clearTimeout(_itv_score);
	_itv_score = setTimeout(function(){
	
		var o, o1;
		var sbs =$("#scorePanel .scBar");
		//------------------------
		//排序
		var arr=new Array(sbs.length);
		for(var i=0; i<sbs.length;i++){
			var id = sbs[i].lang;
			var v = parseInt( $(sbs[i]).text() );
			arr[i] = new Array(id,v); 
		}
//		debug(arr)
		arr.bubbleSort_Array();
//		debug(arr)
		//------------------------
		//改变位置及高亮:
		if(_bestUType!=null){
			o = $("#sDiv"+_bestUType); //原来的冠军
			o.removeClass("hiScore");//原来的冠军取消高亮
		}
		var base = $("#cLine");
		for(var i=0; i<arr.length; i++){
			o1 = $("#sDiv"+arr[i][0]); 
			o1.insertAfter(base);
		}
		o1.addClass("hiScore");//新的冠军颜色高亮
	
		var newT = arr[arr.length-1][0]; //新的冠军编号
		if(_bestUType != newT){
			_bestUType = newT; //记录新的冠军编号
			showBg(_bestUType);//切换高分girl背景
			showGi1(_bestUType);//高分girl现身1
		}
	},500);
}


/**游戏数据统计*/
function GameDataStatisic(){
	//统计整理资料：
	var eP = $("#endPanel");
	var o2 = eP.find("#finUni");
	
	var html="最强的超级英雄:";
	if(_bestUType!=null){
		html+= "<a id='aWinner'>"+ uniCode(_bestUType) +"</a>";
		html+= "<b>进无止境！</b>";
	}else{
		html +="啊...竟然一个都没有?<br>阁下的运气真是...";
	}
	o2.html(html);
	
//	if(_sumScore>0){
//		eP.find("#fuckA").show();
//	}

	
}

