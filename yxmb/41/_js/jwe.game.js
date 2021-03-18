/*!
 * 游戏流程脚本
 */
 
var _onceKill =0; //记录一次移动消除的格子数
var _sumScore =0; //总分
var _gameTime= 0;//游戏时间
var _itv_gameTime = null;//游戏时间计时器（注意：不要改做它用）
var _bestUType = null;  //记录当前成绩最好的棋子类型
var _maxPicContainterNum = 4;

var _itv_run=null;
var _itv_score =null;

var _heroTalking =new Array(
	"摆好姿势，闪电来了！", //暴风女
	"别用‘天’当计时单位跟我说话。听起来像下辈子",//闪电侠
	"等眼前的工作干完了再考虑庆祝的事，大英雄",//黑寡妇
	"绝不可滥杀无辜。",//美国队长
	"嘿，小子，别把当英雄看得跟过家家似的！",//金刚狼
	"激发内心的正能量！",//绿灯侠
	"我可不只性感那么简单",//猫女
	"你们渺小的存在可怜得让我无法发笑",// 灭霸
	"什么？超级英雄？不不不，重要的是新闻头版的照片摆出最帅的姿势",//钢铁侠
	"能力越大，责任越大。",//超人
	"年轻人，还在用别人制定的规则束缚你自己？哼..." //万磁王
);



function gameStart(){
	clearContainer();
	initContainer();
	newStuff();
	BindEvents();
	showGameStartInfo();
	
}

/*function gameReStart(){
	clearContainer();
	newStuff();
	bindTableUniEvent();
}
*/
/**休息一个游戏时间单位，重整旗鼓*/
/*function gameRest1Day(){
	if(_gameTime>0){
		clearContainer();
		newStuff();
		bindTableUniEvent();
	//	gameTimeGoBy();
	}else{
		showGameOverInfo();
	}
}*/

function gameOver(){
	clearInterval(_itv_gameTime);
	showGameOverInfo();
	//unbindAllEvents();  //解除全部绑定事件

	setTimeout(function(){showWinner();}, 2000);
}


/**
* 游戏规则执行器
*/
function runGameRules(delay){
	
	if(_ani_thread_pool<=0){
		clearTimeout(_itv_run);
		if(delay==null)delay=0;
		_itv_run = setTimeout(function(){
	
			//同类对象链接关联检测：
			var os = CheckAllLinkState();
			//对象消除检测执行：
			var dropingColArr = KillUnits(os);
			//对象下坠执行：
			DropDownUnits(dropingColArr);

		},delay);
	}
}

/**
*度过一个完整的游戏时间单元
*体现在移动了一次或者休息了一游戏天
* (或者其它需要耗费时间的操作OOXX)
*/
function gameTimeGoBy(){
/*	if(_gameTime>0) {
		_gameTime--;
		animGameTimeBar(_gameTime);
	}
	if(_gameTime<=0){
		gameOver();
	}
*/
}


////////////////////////////////////////////////////////////////////////////////////////////////////

/**
*指定棋子类型加分(或减分。dv可以是负数)
*return: 分数够减时，返回true，不够减时返回false
*/
function addScore(n,dv){
	var ret = true;
	if(dv==null || dv=="") dv=1;//默认加1分
	var sb = $("#scBar_"+n);
	var v0=parseInt(sb.text());
	var v1 = v0+dv;
	if(v1>=0){
		//展示独立分：
		sb.text(v1);
		//计分栏排序：
		SortScorePanle();
		//更新总分：
		AddSumScore(dv);
	}else{
		ret =false;
	}
	return ret;
}


function AddSumScore(dv){
	_sumScore +=dv;
	if(_sumScore<0) _sumScore = 0;
	$("#sumScore").text(_sumScore);
	$("#finSumScore").text(_sumScore);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*尽情的释放
* 根据给定的值作为播放资源，尽可能的播放精彩
*/
function HappyShoot(n){
/*	if(n==null || n>=_sexyMoviePicNum) n=0;
	
	var eP=$("#endPanel");
	var WI = parseInt($(window).width() );
	var HI = parseInt($(window).height());
	eP.css("opacity",1);
	var v= _sumScore;
	
	var a= v % _maxPicContainterNum; //!注意：这个值让生成的临时对象不超过指定个
	var id = "cpT"+a; //++
	var pCode = xPCode(n);
	var zIdx = 200 + n;
	var o = eP.find("#"+id);
	
	
	if(o.length>0){
		o.html(pCode);
	}else{
		var html = "<div class='cartoonPanel' id='"+id+"' >"+pCode+"</div>";
		eP.append(html);
		o = eP.find("#"+id);
	}
//debug(n)
	//=========================
	//图片大小及位置在屏幕上的排列：
	var hi = HI -20;
	var wi = hi *1280/960;
	var left,top;
	if(n%2 !=0) left= -WI/2;
	else left=WI/2;
	if(n%4 <2) top= -HI/2;
	else top=HI/2;
	
	o.show()
	.css({
		width: wi,	height: hi,
		left: left,
		top: top,
		opacity:0,
		zIndex: zIdx
	})
	.animate({
		left: (WI-wi)/2,	top: (HI-hi)/2	,
		opacity:1
	},400);
	//=========================
	
	AddSumScore(_oneSexyMovieCost);	//一次消费积分

	if(_sumScore>0){
		setTimeout(function(){
			HappyShoot(n+1);
		}, 500);
	}else{
		removePopImg(200);
	}*/

}

/**
* 自动游戏计时器
* 每间隔一段时间，游戏时间自动减少
* @param interval: 间隔时间（毫秒）
*/
function StartCountTime(){
//	_itv_gameTime = setInterval(function(){	
	var time = _gameTime * 1000; //换算成毫秒
	$("#gameTime").text("").animate({height:0},time,function(){
		_gameTime = 0;
		gameOver();
	})

//	},interval);
}
