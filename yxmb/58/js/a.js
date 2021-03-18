function a_init() {
	updateShare(0);
}

function goHome() {
	window.location.href ='http://game.024qianzheng.cn';
}

function a_submitScore(score) {
	updateShareScore(score);
	//setTimeout( function() { show_share(); }, 1000 )
}

function updateShare(bestScore) {
	imgUrl = 'http://game.024qianzheng.cn/3dboxing/3dboxingicon.png';
	lineLink = 'http://game.024qianzheng.cn/3dboxing/3dboxing.htm';
	descContent = "各位选手快来争夺拳王宝座吧！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我在《3D拳王》挑战得了" + bestScore + "分，你打得过我吗？";
	}
	else{
		shareTitle = "真3D！《3D拳王》冠军争霸已经开始！";
	}
}