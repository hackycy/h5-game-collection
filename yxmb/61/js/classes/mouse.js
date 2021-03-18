/**
 * 地鼠精灵类
 */
(function() {

    var Mouse = function() {

         this.x;
         this.y;
		 this.width=130;
		 this.height;
		 
		 /**
		  * 最终的y位置,因为为了实现地鼠向上冒的效果
		  */
		 this.finalY;
		 this.finalHeight;
		 /**
		  * 精灵状态， show和hide，show就包括normal和dead
		  */
         this.state='hide';
		 this.up=1; //向上飘
		 this.duration=3;//刷新一次向上飘的像素
		 this.disppearDuration=56;//'dead'状态下消失计数
		 this.anim;
         
	 
    }
	Mouse.prototype.init = function(mouseName,x,y,finalHeight){
	     var anim = new  my.Animation();   
		 anim.init('mouse',getMouseFrames,mouseName);	
		 this.anim = anim;
		 this.x = x;
		 this.finalY = y;
		 this.finalHeight=finalHeight;
		 this.y=this.finalY+this.finalHeight;
		 this.height=0;
	}
	 
	Mouse.prototype.reprepare = function(self,existMatrix,i,j){  //传入i,j和存在矩阵，为了重置
	     self.state = 'hide';
		 self.up=1;
		 self.height=0;
		 self.y=this.finalY+this.finalHeight;
		 self.disppearDuration=56;
		 existMatrix[i][j]=0;
	}

	
    Mouse.prototype.draw = function(context,existMatrix,i,j){
		    
			 var self = this;
             if(this.state == 'normal'){
				 if(this.up==1&&this.y>this.finalY){
				     this.y-=this.duration; 
					 this.height+=this.duration;
				 }else{
					 this.up=0;
					 this.y+=this.duration;
					 this.height-=this.duration;
				 }
				 if(this.height<0){
				     this.reprepare(this,existMatrix,i,j);
				 }else{
			        self.anim.update();
				    self.anim.draw(context,this.x,this.y,this.width,this.height);
				 }
             }
			 else if(this.state == 'dead'){
			     self.anim.currentFrame=self.anim.frames[3];
				 self.anim.draw(context,this.x,this.y,this.width,this.height);
				 self.disppearDuration--;
				 if(self.disppearDuration==0){
					 self.reprepare(self,existMatrix,i,j);
				 }
			 }
    }

    window.Mouse = Mouse;
})();
