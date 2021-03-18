function GameFrame(unit,row,col)
{
	//单位的像素
	this.unit = unit;
	//横向单位个数(列),,(一行的个数)
	this.row = row;
	//纵向单位个数(行)，，(一列的个数)
	this.col =col;
	//保存页面创建div容器的属性
	this.Content;
	//小图形
	this.samlldiv;
	//定时器id
	this.intervalid;
	//速度
	this.speed =document.getElementById("level").value;
	//速度是否改变
	this.ChangeSped=0;
	//记录每个位置是否有div
	this.datas=[];
	//记录消除行数相应的分数
	this.score=[0,100,300,600,1000]
	//记录当前的图形的下标
	this.now;
	//记录下一个图形的下标
	this.next;
	//记录当前的图形的颜色
	this.nowcolor;
	//记录下一个图形的颜色
	this.nextcolor;
	//保存7种图形相对坐标的数组
	this.arr = "0,1,0,2,1,2,2,2;0,1,1,1,1,2,2,2;0,1,0,2,1,1,2,1;0,2,1,1,1,2,2,1;1,0,1,1,1,2,1,3;1,1,1,2,2,1,2,2;1,1,2,0,2,1,2,2".split(";");
	//保存小方块的颜色
	this.color=["red","blue","green","yellow","#00FFFF","#930093","#F80000","#984B4B"];
	
	//初始化容器div
	this.init = function()
	{
		//创建div
		var div = document.createElement("div");
		//设置div的宽度
		div.style.width = (this.unit*this.row)+"px";
		//设置div的高度
		div.style.height=(this.unit*this.col)+"px";
		//设置div的样式
		div.className="MainFrame";
		div.id="MainFrame";
		//加入到body中
		document.getElementById("TFrime").appendChild(div);
		this.Content =div; //保存div的引用
		//初始化数组
		for(var i=0;i<this.col;i++)	//i为行
		{
			for(var j=0;j<this.row;j++){				//j为列
			var sdiv = document.createElement("div");
			sdiv.className="MainFramediv";
			sdiv.style.width = (this.unit - 2) + "px";
			sdiv.style.height = (this.unit - 2) + "px";
			sdiv.style.left=(j*this.unit)+"px";
			sdiv.style.top=(i*this.unit)+"px";
			this.Content.appendChild(sdiv);
			this.datas.push(0);
			}
		}
		this.next=Math.floor(Math.random() * this.arr.length);
		this.nextcolor=this.color[Math.floor(Math.random() * this.color.length)];
		Start();
	}
	
	this.MoveLeft = function()
	{
		this.samlldiv.moveleft();
	}
	
	this.MoveRight = function(){
		this.samlldiv.moveright();
	}
	
	this.Change = function(){
		this.samlldiv.change();
		
	}
	
	this.MoveDown = function(){
		if(this.samlldiv.movedown())
		{
//			for(var i=0;i<this.samlldiv.divs.length;i++)
//			{
//				this.Content.removeChild(this.samlldiv.divs[i]);
//			}
			this.samlldiv.rescore();
			Start();
		}
		
	}
	
	function Start()
	{
		//将next值传给now
		this.frame.now=this.frame.next;
		this.frame.nowcolor=this.frame.nextcolor;
		//创建小div
		this.frame.samlldiv=new Graph(this.frame);
    	this.frame.samlldiv.init(this.frame.now,this.frame.nowcolor);
    	//绘出下一个图形
    	this.frame.next=Math.floor(Math.random() * this.frame.arr.length);
    	this.frame.nextcolor=this.frame.color[Math.floor(Math.random() * this.frame.color.length)];
    	draw();
    	
    	//调用定时器下落
    	this.frame.intervalid = setInterval(autoMoveDown,this.frame.speed);
    	//判断游戏是否结束
    	if (this.frame.samlldiv.movedown()){
    			clearInterval(this.frame.intervalid);
				alert("游戏结束！");
			}
	}
	
	function autoMoveDown()
	{
		if(this.frame.samlldiv.movedown())
		{
			this.frame.samlldiv.rescore();
			Start();
		}
		
		//改变速度
		if(this.frame.ChangeSped){
			clearInterval(this.frame.intervalid);
			this.frame.intervalid = setInterval(autoMoveDown,this.frame.speed);
			this.frame.ChangeSped=0;
		}
	}
	
	//速度改变，令ChangeSped值为1
	this.changespeed=function(){
		this.speed=document.getElementById("level").value;
		this.ChangeSped=1;
//		alert(this.ChangeSped);
	}
	
	//绘制下一个图形
	function draw(){
		//清楚原有的图形
		var cleardiv=document.getElementsByClassName("drawdiv");
		for(;;){
			if(cleardiv.length){
				document.getElementById("nextfigure").removeChild(cleardiv[0]);
			}else{
				break;
			}
		}
		//绘制图形
		var smallarr = this.frame.arr[this.frame.next].split(",");
		for (var i = 0; i < 8; i += 2) {
		var drawdiv = document.createElement("div");
		drawdiv.className = "drawdiv";
		drawdiv.style.backgroundColor=this.frame.nextcolor;
		drawdiv.style.width = (this.frame.unit - 2) + "px";
		drawdiv.style.height = (this.frame.unit - 2) + "px";
		drawdiv.style.top = (((smallarr[i] - 0) * this.frame.unit)+18) + "px";
		drawdiv.style.left = (((smallarr[i + 1] - 0) * this.frame.unit)+18) + "px";
		document.getElementById("nextfigure").appendChild(drawdiv);
		}
	}
	
	
}
