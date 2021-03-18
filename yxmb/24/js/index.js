var frame;

function initGame()
{
	frame = new GameFrame(16,12,38);
	frame.init();

   document.body.addEventListener("keydown",MoveOrChange)
    
}

function changespeed(){
	frame.changespeed();
}

function regame(){
	location.reload();
}


function MoveOrChange()
{
	
	switch(event.keyCode)
	{
		case 38: //变形（上方向键）
			frame.Change();
			break;
		case 37: //左移动
			frame.MoveLeft();
			break;
		case 39://右移动
			frame.MoveRight();
			break;
		case 40:  //向下
			frame.MoveDown();
			break;
	}
}

