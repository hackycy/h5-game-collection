/*!
 * 游戏算法脚本
 */

/////////////////////////////////////////////////////////

/**【递归】
*检验连接状态
*@parma e:要检验状态的棋子对象
*@param direct:方向（"up","dn","lf","rt"）
*@param count:传递的合计值
*/
function chkLink(e, direct, count){
	if(count==null) count = 0;
	if(e==null) return 0;
	
	var v = $(e).find("img:first").attr("lang");
	var TD = $(e).parent();
	var id = TD.attr("id");
	var ss = id.split("_");
	var row = parseInt(ss[1]);
	var col = parseInt(ss[2]);
	
	var row2,col2;
	if(direct=="up"){
		row2 = row-1;
		col2 = col;
	}else if(direct=="dn"){
		row2 = row+1;
		col2 = col;
	}else if(direct=="lf"){
		row2 = row;
		col2 = col-1;	
	}else if(direct=="rt"){
		row2 = row;
		col2 = col+1;	
	}else{
		alert("error direct");
		return 0;
	}
	
//	if(row<_rowNum-1){
	
		var id2 = "td_"+row2+"_"+col2;
		var td2 = document.getElementById(id2);
		if(td2==null) return 0;
		
		var o2 = $(td2).find(".uni:first")[0];
		var v2 = $(o2).find("img:first").attr("lang");
		if(v2 == v){
			count += 1 + chkLink(o2, direct, count);
		}
//	}
	return count;
}


/**
*检验全盘连接状态
*/
function CheckAllLinkState(){
//	debug("checking")
	
	var unis = $("#panelTb .uni");
	var os =new Array();
	unis.each(function(){
		var nUp = chkLink(this,"up");
		var nDn = chkLink(this,"dn");
		var nLf = chkLink(this,"lf");
		var nRt = chkLink(this,"rt");
		if(nUp+nDn>=2 || nLf+nRt>=2){
			//var id = $(this).parent().attr("id");
			os.push(this);
		}
	});
	
//	debug("len="+os.length);
	return os;
}


/////////////////////////////////////////////////////////////////////

/**
*获得指定id单元格上面的所有单位格子的id
*/
function getUpperTDID(id){
	var fin="";
	var ss = id.split("_");
	var r = parseInt(ss[1]);
	for(var i=r-1; i>=0; i--){
		fin+=ss[0] + "_"+i +"_"+ ss[2];
		if(i>0) fin +=",";
	}
	return fin;
}

/**
*获得指定id单元格下面的所有单位格子的id
*/
function getLowerTDID(id){
	var fin="";
	var ss = id.split("_");
	var r = parseInt(ss[1]);
	for(var i=r+1; i<_rowNum; i++){
		fin+=ss[0] + "_"+i +"_"+ ss[2];
		if(i<_rowNum-1) fin +=",";
	}
	return fin;
}



/*
*计算指定的棋子可以下沉的格子数量
*@param e: 棋子对象
*/
function getUniDownNum(e){
	var TD = $(e).parent();
	var id = TD.attr("id");
	var sss = getLowerTDID(id);
	if(sss=="") return 0;
	var n=0;
	var ids = sss.split(",");
	for(var i=0;i<ids.length;i++){
		if(ids[i]==null || ids[i]=="")continue;
		var uNum = $("#"+ids[i]+" .uni").length;
		if(uNum<=0) n++;
		else break;
	}
	return n;
}

