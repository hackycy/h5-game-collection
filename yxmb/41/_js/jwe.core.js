/*!
 * 基础核心方法脚本
 */
 
var _ucArr = new Array(); //记录使用中的棋子编号的数组
////////////////////////////////////////////////////////////////////////////
/*随机生成一套应用棋子编号*/
function createAppCode(){
	while(_ucArr.length<_UniTypeNumber){
		var n =  Math.floor(Math.random() * (_UniTypeNumberMax));
		var isNew = true;
		for(var k in _ucArr){
			if(_ucArr[k]==n){
				isNew=false;
				break;
			}
		}
		if(isNew) _ucArr.push(n);
	}
}


/*新棋子代码*/
function uniCode(n){
	var html = "<div class='uni' lang="+n+" ><img lang="+n+" src='_img/uni/"+_dir+"/"+n+"."+_extName+"' /></div>";
	return html;
}
/*动态背景代码*/
function bgImgCode(n){
	var html = "url(_img/bg/"+_dir+"/"+n+"."+_bgExtName+")";
	return html;
}
/*动态gi亮相1代码*/
function giCode1(n){
//	var html = "url(_img/sexy/heroPic1/"+n+".png)";
	var html = "<img src='_img/sexy/heroPic1/"+n+".png' />";
	return html;
}

/**
*精彩图
*（这个代码要根据实际情况编写！）
*/
function xPCode(n){
	var s = n.toString();
	while(s.length<3) s="0"+s;
	var pic = "E"+s+".JPG";
	var html = "<img src='_img/sexy/endPic/"+pic+"' />";
//	debug(html)
	return html;
}


/*来一个新棋子*/
function aNewUni(n){
	if(n==null)	n = Math.floor( Math.random() * (_UniTypeNumber)); //注意：这个值随机生成不同的数量！--0,1,2,3,4,5....
	var N = _ucArr[n];  //注意这里！！！！
	return uniCode(N);
}


/*new
* 找到要交换的那个对象容器
*update:2016-4-13
* 如果返回 null 说明不能交换
*@return :TD(封装的)
*/
function getSwitcherTD(td, sign){
	var id=td.id;
	var ss = id.split("_");
	var r=parseInt(ss[1]);
	var c=parseInt(ss[2]);
	if(sign=="up"){	r--;}
	else if(sign=="dn"){	r++;}
	else if(sign=="lf"){c--;}
	else if(sign=="rt"){c++;}
	else{/**/}
	var id2 = ss[0]+"_"+r+"_"+c;
	return $("#"+id2);
	
}


/**
* 【实质】交换两个td中的棋子
*@param TD1: 第1个封装的td对象
*@param TD2: 第2个封装的td对象
*/
function switch2TDsUni(TD1,TD2){
	var t1 = TD1.html();
	var t2 = TD2.html();
	
	TD1.html(t2);
	TD2.html(t1);
	var o1 = TD1.find(".uni:first");
	var o2 = TD2.find(".uni:first");
	//恢复事件绑定：
	if(o1.length>0) uniEvt(o1);
	if(o2.length>0) uniEvt(o2);
}



////////////////////////////////////////////////////////////

/**
* 交换两个td中的棋子，同时让棋子保持原来的可视位置
*@param TD1: 第1个封装的td对象
*@param TD2: 第2个封装的td对象
*@param chgPos1: 是否变更棋子1的位置（false时归零）
*@param chgPos2: 是否变更棋子2的位置（false时归零）
*/
function switch2TDsUni_orgPlace(TD1,TD2,chgPos1,chgPos2){
	
	switch2TDsUni(TD1,TD2);
	var o1 = TD1.find(".uni:first");
	var o2 = TD2.find(".uni:first");
	
	reform(o1);
	reform(o2);
	
	var dW = parseInt(TD2.position().left) - parseInt(TD1.position().left);
	var dH = parseInt(TD2.position().top) - parseInt(TD1.position().top);
	
	if(chgPos1)	o1.css({left:dW, top:dH});
	else o1.css({left:0, top:0});
	if(chgPos2)	o2.css({left:-dW, top:-dH});
	else o2.css({left:0, top:0});
	
}


/**
*在指定td中创建一个新的（高空）棋子
*@param TD: 指定td对象（封装的）
*@param n: 高于本容器的倍数（0为正常位置）
*/
function newSkyUniAtTD(TD, n){
	TD.html(aNewUni());
	var hi = parseInt(TD.css("height")) * n; //!
	var o = TD.find(".uni:first");
	o.css({top:-hi});
	//+事件绑定：
	uniEvt(o);
}

/**
*从td向td2复制棋子单元信息
*(还保持原来的棋子位置)
*@param TD: 源（封装的）
*@param TD2: 目标（封装的）
*/
function copyUniFromTD(TD, TD2){
	TD2.html(TD.html());
	var hi = parseInt(TD.position().top) - parseInt(TD2.position().top);
	var wi = parseInt(TD.position().left) - parseInt(TD2.position().left);
	var o = TD2.find(".uni:first");
	o.css({top:hi,left:wi});
	//+事件绑定：
	uniEvt(o);
}

///////////////////////////////////////////////////////////////////

/*计分栏代码*/
function scoCode(n){
	var html = "<span class='scBar' id='scBar_"+n+"' lang="+n+" >0</span>";
	return html;
}


///////////////////////////////////////////////////////////////////

/**
*封装对象全局坐标中心对齐
*/
function objPos(Obj, x, y){
	var wi = parseInt(Obj.css("width"));
	var hi = parseInt(Obj.css("height"));
	Obj.css({
		left: parseInt(x) - wi/2,
		top: parseInt(y) - hi/2
	});
}
