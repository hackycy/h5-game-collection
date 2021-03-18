/**
 * Mouse Hit游戏类
 */
(function() {

    var MouseHit = function(cfg) {

        /**
         * 锤子
         */
        this.hammer = null;

         /**
         * 地鼠,有5种
         */
        this.mouse0=[];
		this.mouse1=[];
		this.mouse2=[];
		this.mouse3=[];
		this.mouse4=[];
        /**
         * 地鼠初始化x轴位置
         */
        this.mouseX = [
		               [130,322,516],
					   [106,322,522],
					   [97,322,544]
		];
		/**
         * 地鼠初始化y轴位置
         */
        this.mouseY = [170,262,362];
		this.mouseType=[106];
    	//存在矩阵,表示在那个坑存在地鼠
		this.existMatrix=[
		                  [0,0,0],
						  [0,0,0],
						  [0,0,0]
		];
		/**
		 * 星星
		 */
		this.star = [];
       /**
         * 分数帧类
         */
		this.scoreObject = [];

        /**
         * UI对象
         */
        this.ui = null;

        /**
         * 预备时间
         */
        this.readyTime = 0;

        /**
         * 是否即将开始
         */
        this.isGo = false;
        /**
         * canvas上下文
         */
	    this.canvas;
        this.context; 
        // 地鼠洞
        this.bg_hole;
        // 地鼠洞遮掩
        this.bg_holeHide;
		//准备3,2,1数字，Game over
		this.startNumber= my.ImageManager.get('icon');
		//计时条
		this.timeRoller = my.ImageManager.get('time_roller');
		//计时数，不打算用一个新的setInterval来做 
		this.timeCaculator =0;
		//第几关，初始是第一关
		this.dijiguan = 1; 
        //每关过关分数,第一默认为2000		
		this.requireScore =2000; 
		this.readyInterval;
		this.drawMouseInterval;
		this.drawCanvasInterval;
    }

    
    /**
     * @private
     * 创建锤子
     */
    MouseHit.prototype.__createHammer = function() {
        var hammer = new Hammer();
        this.hammer = hammer;
    }

    /**
     * @private
     * 创建分数对象
     */
    MouseHit.prototype.__createScoreObject = function() {
      for(i=0;i<3;i++)
	   {
	        var arr = [];
            for(j=0;j<3;j++)
			{
		      var score = new Score();
			  arr[j] = score;
			}
			this.scoreObject[i] = arr;
		}
    }
	
   /**
     * @private
     * 创建地鼠 
     */
    MouseHit.prototype.__createMouse = function() {

	   for(i=0;i<3;i++)
	   {
	        var arr = [],arr1 = [],arr2 = [],arr3 = [],arr4 = [];
            for(j=0;j<3;j++)
			{
              var mouse0 = new Mouse(),mouse1=new Mouse(),mouse2=new Mouse(),mouse3=new Mouse(),mouse4=new Mouse();
			  mouse0.init('mouse1',this.mouseX[i][j],this.mouseY[i],106);
			  mouse1.init('mouse2',this.mouseX[i][j],this.mouseY[i],106);
			  mouse2.init('mouse3',this.mouseX[i][j],this.mouseY[i],106);	  
              mouse3.init('mouse4',this.mouseX[i][j],this.mouseY[i]-12,120);
			  mouse4.init('mouse5',this.mouseX[i][j],this.mouseY[i]-25,130);
              arr[j] = mouse0,arr1[j] = mouse1,arr2[j] = mouse2,arr3[j] = mouse3,arr4[j] = mouse4;
			}
			this.mouse0[i] = arr,this.mouse1[i] = arr1,this.mouse2[i] = arr2,this.mouse3[i] = arr3,this.mouse4[i] = arr4;
		}
    }
    /**
     * @private
     * 创建星星
     */
    MouseHit.prototype.__createStar = function() {
	  
	   for(i=0;i<3;i++)
	   {
	        var arr = [];
            for(j=0;j<3;j++)
			{
		      var star = new Star();
		      star.init(this.mouseX[i][j]+10,this.mouseY[i]); // y轴不是必要的，到时碰撞时会重置
			  arr[j] = star;
			}
			this.star[i] = arr;
		}
    }	
    /**
     * @private
     * 创建场景
     */
    MouseHit.prototype.__createScene = function() {
        // 地鼠洞
        this.bg_hole = new my.Bitmap({
            image : my.ImageManager.get('bg_hole'),
            width : 750,
            height : 550
        });
     
        // 地鼠洞遮掩
        this.bg_holeHide = new my.Bitmap({
            image : my.ImageManager.get('bg_holeHide'),
            width : 750,
            height : 550
        });
        
    }
    /**
     * 创建UI对象
     */
    MouseHit.prototype.__createUI = function() {
        var ui = new UI(), MouseHit = this;
        ui.init();

        ui.onretry = function() {
            //Audio.play('ogg_background');

            this.toBody();
            MouseHit.stateInit();
        }
        this.ui = ui;
    	this.ui.hammer=this.hammer;
		this.ui.mouse0=this.mouse0;
		this.ui.mouse1=this.mouse1;
		this.ui.mouse2=this.mouse2;
		this.ui.mouse3=this.mouse3;
		this.ui.mouse4=this.mouse4;
		this.ui.star=this.star;
		this.ui.scoreObject=this.scoreObject;
		this.ui.existMatrix=this.existMatrix;
		
    }
    /**
     * 初始化游戏
     */
    MouseHit.prototype.init = function() {
		this.__createScoreObject();
        this.__createHammer();
		this.__createMouse();
		this.__createStar();		
        this.__createScene();
        this.__createUI();
        this.canvas =  my.DOM.get('maincanvas');
        this.context = this.canvas.getContext('2d');
    }

    
    /**
     * 预备状态
     * @return {Boolean} 返回预备状态是否完毕
     */
    MouseHit.prototype.ready = function(self,index) {
		
		self.__drawReadyScreen(self);
		switch(index){
		    
			case 0:self.context.drawImage(self.startNumber,449,296,51,87,360,300,51,87);Audio.play('begin_music');break;    //绘制3
			case 1:self.context.drawImage(self.startNumber,390,296,54,87,360,300,54,87);Audio.play('begin_music');break;    //绘制2
			case 2:self.context.drawImage(self.startNumber,329,296,52,87,360,300,52,87);Audio.play('begin_music');break;    //绘制1
			case 3:self.context.drawImage(self.startNumber,15,296,293,87,245,300,293,87);Audio.play('second_music');break;   //绘制start
			case 4:clearInterval(this.readyInterval); //清除此Interval事件
			       self.ui.btnPauseVisible(true);
				   self.__setIntervalFunc(self);  //启动setInterval事件  
		}
		
    }
	/**
	 *预备状态下背景绘制
	 */
	MouseHit.prototype.__drawReadyScreen = function(self){
		self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height);   
	    self.context.drawImage(self.bg_hole.image, 0, 0, self.bg_hole.width, self.bg_hole.height);   
	}
	/**
	 *计时条绘制
	 *passPix 过去像素
	 */
	MouseHit.prototype.__drawTimeRoller = function(self,passPix){
		self.context.drawImage(self.timeRoller,0,80,373,68,183,149,220,40);
		self.context.drawImage(self.timeRoller,0,152,373-passPix,40,182+passPix,163,220-passPix,25);
	    self.context.drawImage(self.timeRoller,0,0,373,80,183,143,220,51);
	}
	/**
	 * 游戏主体在这里设置setInterval事件
	 */
	MouseHit.prototype.__setIntervalFunc = function(self){
	    this.drawCanvasInterval = setInterval(function(){
		   self.drawScreen(self);
		   self.__checkIsPass(self);   //关卡判断，最后阶段加的，就丢在这里
		}, 30);
	    this.drawMouseInterval = setInterval(function(){
		   self.randomSelectMouse(self);
		}, 2000);
		
	}
    /**
	 * 关卡判断
	 */
	MouseHit.prototype.__checkIsPass = function(self){
	
	    if(self.timeCaculator>2100){             //关卡时间到
		    clearInterval(self.drawCanvasInterval);//不再
			clearInterval(self.drawMouseInterval);//不再随机产生地鼠
		    self.timeCaculator=0;
		    if(self.ui.score>=self.requireScore){    //过关
			    self.requireScore+=400;              //每关加200
				my.DOM.get('currentScore').innerHTML=~~self.ui.score;
				my.DOM.get('requireScore').innerHTML=~~self.requireScore;
				my.DOM.show(my.DOM.get('nextLoding')); //下一关界面放这里
			    self.dijiguan++;
				self.ui.score=0;
				self.ui.setNumber(0);
				Audio.play('game_pass');
		        //重新设置		
			  }else{                             //不过关
				self.requireScore=2000;
				self.dijiguan=1;
				self.ui.toOver();//失败界面
				my.DOM.get('score').innerHTML="你的得分："+~~self.ui.score;
				self.ui.score=0;
				Audio.play('over_music');
			  }
		     
		}else{
		   self.__drawTimeRoller(self,self.timeCaculator/10); //绘制计时条
		   self.timeCaculator++;
		} 
	
	}
	/**
	 * 随机显现地鼠
	 */
	MouseHit.prototype.randomSelectMouse = function(self){
		 var createNum = my.Math.random(1,2);
		 for(var i=1;i<=createNum;i++){
		     var a = my.Math.random(0,2);
			 var b = my.Math.random(0,2);
			 if(self.existMatrix[a][b]==1){  // 存在地鼠，不产生地鼠
			     i--;
			 }else{
			    self.existMatrix[a][b]=1;    //设置已存在地鼠
				var k = my.Math.random(0,4);
				if(k==0){self.mouse0[a][b].state='normal';}
				else if(k==1){self.mouse1[a][b].state='normal';}
				else if(k==2){self.mouse2[a][b].state='normal';}
				else if(k==3){self.mouse3[a][b].state='normal';}
				else {self.mouse4[a][b].state='normal';}
			 }
		 }
	}
	MouseHit.prototype.drawMouse = function(self,i,j){
		self.mouse0[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse1[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse2[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse3[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse4[i][j].draw(self.context,self.existMatrix,i,j);
	}
	MouseHit.prototype.drawScreen = function(self){
		self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height);  //清除canvas
	    self.context.drawImage(self.bg_hole.image, 0, 0, self.bg_hole.width, self.bg_hole.height);   //背景，并不完全占满整个canvas，所以要重新清屏
        for(j=0;j<3;j++)
		  self.drawMouse(self,0,j); //第一行地鼠
		for(j=0;j<3;j++) 
		  self.star[0][j].draw(self.context);  //第一行星星
	 	self.context.drawImage(self.bg_holeHide.image,0,0,self.bg_holeHide.width,302, 0, 0, self.bg_holeHide.width,302);   //第一行遮掩洞
        for(j=0;j<3;j++)
		  self.drawMouse(self,1,j); //第二行地鼠
		for(j=0;j<3;j++) 
		  self.star[1][j].draw(self.context);  //第二行星星
        self.context.drawImage(self.bg_holeHide.image,0,302,self.bg_holeHide.width,100, 0, 302, self.bg_holeHide.width,100); //第二行遮掩洞 
        for(j=0;j<3;j++)
		  self.drawMouse(self,2,j); //第三行地鼠
		for(j=0;j<3;j++) 
		  self.star[2][j].draw(self.context);  //第三行星星
		self.context.drawImage(self.bg_holeHide.image,0,400,self.bg_holeHide.width,100, 0, 400, self.bg_holeHide.width,100); //第三行遮掩洞 	
		for(i=0;i<3;i++) 
		  for(j=0;j<3;j++) 
		     self.scoreObject[i][j].draw(self.context);      //分数对象
		self.hammer.draw(self.context,self.ui.mousePress);//锤子
	}
	
	
    /**
     * 初始化状态
     */
    MouseHit.prototype.stateInit = function() {
        
		this.ui.setNumber(0);//初始化分数
        this.__drawReadyScreen(this);
        // UI
        this.ui.btnPauseVisible(false);
        var self = this;
		var index= 0;
		this.readyInterval = setInterval(function(){   //setInterval最好是这样写，在控制和传参数方面都有好处
	        self.ready(self,index);
			index++;
		},1000);
    }
	
    window.MouseHit = MouseHit;
})();
