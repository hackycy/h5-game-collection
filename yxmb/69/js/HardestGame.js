// ("#gameStartBoxBtn").click(function(){
// 	alert("试试")
// })
(function () {
    //canvas宽度
    var CANVAS_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    //canvas高度
    var CANVAS_HEIGHT = window.innerHeight;
    CANVAS_WIDTH = CANVAS_WIDTH / CANVAS_HEIGHT>0.636?CANVAS_HEIGHT*0.636:CANVAS_WIDTH;
    var ratio = CANVAS_WIDTH / 750;
    document.getElementsByTagName('html')[0].style.fontSize = 100*ratio + "px";
    //大圆半径, 旋转中心处的圆
    var RADIUS_BIG = 204*ratio;
    //分裂大圆
    var CircleCenterSplit = [
        {"left":{"url":"img/CircleCenter_1_split_left.png","w":"238","h":"407","rs":Math.PI*2},
         "right":{"url":"img/CircleCenter_1_split_right.png","w":"230","h":"407","cutx":"26","rs":Math.PI*2}},
        {"left":{"url":"img/CircleCenter_2_split_left.png","w":"238","h":"407","rs":Math.PI*2},
         "right":{"url":"img/CircleCenter_2_split_right.png","w":"230","h":"407","cutx":"26","rs":Math.PI*2}},
        {"left":{"url":"img/CircleCenter_3_split_left.png","w":"238","h":"407","rs":Math.PI*2},
         "right":{"url":"img/CircleCenter_3_split_right.png","w":"230","h":"407","cutx":"26","rs":Math.PI*2}},
    ]
    //弹夹剩余子弹数
    var BulletCirclesIndex = 0;
    //小圆半径, 旋转周围及子弹圆形半径
    var RADIUS_SMALL = 10;
    //弹夹剩余子弹数字体大小
    var CircleCenterText =120*ratio+"px";
    //子弹射入深度
    var BULLET_PIERCED_DEEP = 42*ratio;
    //默认旋转速度, 弧度为单位
    var ROTATION_SPEED = 0.03;
    //击中震动Y向距离
    var QUAKE_Y = 4;
    //转速数组
    var ROTAION_SPEED_ARRAY = [-0.1,-0.05,-0.01,0.01,0.05,0.1]
    //震动速度
    var QUAKE_SPEED = 2;
    //旋转中心震动前Y坐标
    var oldy;
    //变速频率（秒）
    var changeSpeed = 1;
    //重力
    var g = 0.2;
    //大圆初始y向分裂速度
    var vy = 8;
    //是否向上震动
    var isup = true;
    // //口红资源数组
    // var arrayLipstick = ["img/Lipstick_1.png","img/Lipstick_2.png"];
    // //中心圆资源数组
    // var arrayCenterCircle = ["img/CircleCenter_1.png","img/CircleCenter_2.png"];
    //口红资源数组
    var arrayLipstick = ["img/Lipstick_1.png","img/Lipstick_2.png","img/Lipstick_3.png"];
    //中心圆资源数组
    var arrayCenterCircle = ["img/CircleCenter_1.png","img/CircleCenter_2.png","img/CircleCenter_3.png"];
    //关卡资源
    var levelUrl = [
        {"normal":"img/level_icon_1_active.png","active":"img/level_icon_1_active.png"},
        {"normal":"img/level_icon_2.png","active":"img/level_icon_2_active.png"},
        {"normal":"img/level_icon_3.png","active":"img/level_icon_3_active.png"}
    ]
    //旋转半径 = canvas高度*0.25,canvas宽度*0.5-40中大者
    var ROTATION_RADIUS = Math.max(CANVAS_HEIGHT * 0.25, CANVAS_WIDTH * 0.5 - 40);
    //旋转中心 = {x:canvas宽度*0.5,y:旋转半径+小圆半径+10}
    /*var ROTATION_CENTER = {x: CANVAS_WIDTH * 0.5, y:594*ratio};*/
    var ROTATION_CENTER = {x: CANVAS_WIDTH * 0.5, y:494*ratio};
    //子弹宽高
    var AimBullet = {w:43*ratio,h:168*ratio}
    var AimBulletBottom =CANVAS_HEIGHT-58*ratio-AimBullet.h+BULLET_PIERCED_DEEP;
    //调参Json
    /*var Difficulty_Json = {
        "SUCCESS_PARAMETERS" :{
            "ROTAION_SPEED_ARRAY" : [-0.07,-0.05,-0.01,0.01,0.05,0.07],
            "rotationAccelerationSpeed" : 0.007,
            "levelArray" : [[0,2,0.02,30],[0,2,0.04,40],[0,13,0.06,60]]
        },
        "fail_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.1,-0.05,-0.01,0.01,0.05,0.1],
            "rotationAccelerationSpeed" : 0.02,
            "levelArray" : [[0,2,0.02,30],[0,2,0.04,40],[0,13,0.06,60]],
            "cheatDistance":AimBullet.w*0.6,
            "startJudgeCheatDistanceNum":6
        }
    }*/
    var D_Json = {
        "Level1_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.05,-0.04,-0.02,0.02,0.04,0.05],
            "rotationAccelerationSpeed" : 0.001,
            "levelArray":[0,7,-0.02,30]
        },
        "Level2_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.06,-0.03,-0.02,0.02,0.04,0.06],
            "rotationAccelerationSpeed" : 0.002,
            "levelArray":[0,6,0.04,40] 
        },
        "Level3_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.09,-0.07,-0.05,0.06,0.08,0.09],
            "rotationAccelerationSpeed" : 0.007,
            "levelArray":[0,8,0.09,60]
        //    [0,口红数，速度，时间]
        },
        "LAST_3_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.09,-0.07,-0.05,0.06,0.08,0.09],
            "rotationAccelerationSpeed" : 0.009,
            "levelArray":[0,10,0.07,60]
        },
        "LAST_2_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.1,-0.08,-0.03,0.04,0.07,0.1],
            "rotationAccelerationSpeed" : 0.009,
            "levelArray":[0,9,0.08,60]
        },
        "LAST_1_PARAMETERS":{
            "ROTAION_SPEED_ARRAY" : [-0.1,-0.07,-0.03,0.03,0.07,0.1],
            "rotationAccelerationSpeed" : 0.009,
            "levelArray":[0,14,0.09,60]
        },
        "fail_PARAMETERS":{
            "cheatDistance":AimBullet.w*5,
            "startJudgeCheatDistanceNum":3 
        }
    }
    //子弹发射速度
    var BULLET_SPEED = -30;
    //弹夹宽、高、间距、bottom值
    var CLIPSIZE = {w:89*ratio,h:21*ratio,space:41*ratio,bottom:60*ratio}
    //子弹之间的距离 = 小圆半径*2+15
    var BULLET_SPACE = 15 + RADIUS_SMALL * 2;
    var BULLET_TEXT_STYLE = "#333333";
    if(!window["extendClass"]){
        window["extendClass"] = function (sonClass, parentClass) {
            if (typeof parentClass === "function" && typeof sonClass === "function") {
                sonClass.prototype = new ((function () {}).prototype = parentClass.prototype).constructor();
                sonClass.prototype.constructor = sonClass;
                sonClass.prototype.super = parentClass;
            }
        }
    };
    /***各种圆形的基类**/
    function Circle(x, y, radius,imgObj,angle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.imgObj = imgObj;
        this.angle = angle;
    };
    Circle.prototype = {

        paint:function (context){
            context.save();
            context.fillStyle = this.fillStyle;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            /*test*/
            /*this.strokeStyle = 'rgba(0,0,0,1)';
            context.stroke();*/
            /*test*/
            context.restore();
        }
    };
    /*弹夹基类*/
    function Clip(x,y,w,h,imgObj){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imgObj = imgObj;
    }
    Clip.prototype = {
        paint:function(context){
            //弹夹绘制暂不使用
            context.save();
            context.translate(this.x,this.y);
            context.beginPath();
            context.moveTo(0,0);
            context.lineTo(0,this.w);
            context.lineTo(this.w,this.h);
            context.lineTo(0,this.h);
            context.closePath();
            /*context.strokeStyle = "rgba(0,0,0,1)";
            context.stroke();*/
            if (this.imgObj) {
                context.drawImage(this.imgObj,0,0,this.w,this.h);
            }
            context.restore();
            }
    }
    /*子弹基类*/
    function imgBullet(x,y,w,h,z/*纵轴偏移量*/,imgObj,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.z = z;
        this.imgObj = imgObj;
        this.angle = angle;
        imgBullet.prototype.paint = function(context){
        context.save();
        context.translate(this.x,this.y);
        context.rotate(this.angle+Math.PI*1.5);
        context.beginPath();
        context.moveTo(-this.w/2, -this.z);
        context.lineTo(this.w/2, -this.z);
        context.lineTo(this.w/2,this.h-this.z);
        context.lineTo(-this.w/2,this.h-this.z);
        context.closePath();
        /*context.strokeStyle = "rgba(0,0,0,1)";
        context.stroke();*/
        if (this.imgObj) {
            context.drawImage(this.imgObj,-1*w/2,-this.z,this.w,this.h);
        }
        context.restore();

        }
        imgBullet.prototype.update = function(){

        }
    }

    /**中心大圆**/
    function CircleCenter(imgObj,angle,restNum,y,isQuake,isSplit,level){
        this.restNum = restNum;
        this.y = y;
        this.isQuake = isQuake;
        this.isSplit = isSplit;
        this.level = level;
        this.super.call(this, ROTATION_CENTER.x,this.y,RADIUS_BIG,imgObj,angle);
    };
    extendClass(CircleCenter, Circle);
    CircleCenter.prototype.paint = function (context){
        this.super.prototype.paint.call(this, context);
    };
    CircleCenter.prototype.update=function (rs,context,that,centerCircleSplitReposition){
        if(this.isQuake){
            if (isup) {
                this.y = this.y-QUAKE_SPEED;
                if(oldy-this.y>=QUAKE_Y){
                    isup = false;
                }
            }else{
                this.y = this.y+QUAKE_SPEED;
                if(oldy<=this.y){
                    this.y = oldy;
                    this.isQuake =false;
                    isup = true;
                    oldy = null;
                }
            }
        }
        this.angle += rs;
        this.angle%=2*Math.PI;
        if(this.isSplit){
            this.resetCircleCenterSplit(context,that,centerCircleSplitReposition,rs);
        }else{
            this.resetCircleCenterRotate(context);
        }

    };
    CircleCenter.prototype.resetCircleCenterRotate=function (context){
        context.save();
        context.translate(ROTATION_CENTER.x,this.y);
        var imgObj = this.imgObj;
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        context.rotate(this.angle);
        context.drawImage(imgObj,-1*radius,-1*radius,radius*2,radius*2);
        context.restore();
        context.save();
        if(this.restNum>=10){
            $("#bulletsNum2").css("display","block")
            $("#bulletsNum1").attr("src","img/"+Math.floor(this.restNum/10)+".png")
            $("#bulletsNum2").attr("src","img/"+this.restNum%10+".png")

        }else{
            $("#bulletsNum2").attr("src","")
            $("#bulletsNum2").css("display","none")
            $("#bulletsNum1").attr("src","img/"+this.restNum+".png")
        }
    };
    CircleCenter.prototype.resetCircleCenterSplit=function (context,that,centerCircleSplitReposition,rs){
        centerCircleSplitReposition.left.x-=2.5;
        centerCircleSplitReposition.left.y-=vy;
        vy-=g;
        centerCircleSplitReposition.right.x+=2.5;
        centerCircleSplitReposition.right.y-=vy;
        var right_cutx = CircleCenterSplit[this.level].right.cutx*ratio;
        var left_w = CircleCenterSplit[this.level].left.w*ratio;
        var right_w = CircleCenterSplit[this.level].right.w*ratio;
        var translatePosition = {
            left:{x:ROTATION_CENTER.x+centerCircleSplitReposition.left.x-left_w*0.5,y:this.y+centerCircleSplitReposition.left.y},
            right:{x:ROTATION_CENTER.x-right_cutx+centerCircleSplitReposition.right.x+right_w*0.5,y:this.y+centerCircleSplitReposition.right.y}
        }
        var radius = this.radius;
        /*左边的碎片*/
        context.save();
        context.translate(translatePosition.left.x,translatePosition.left.y);
        var left_imgObj = new Image();
        left_imgObj.src = CircleCenterSplit[this.level].left.url;

        var left_w = CircleCenterSplit[this.level].left.w*ratio;context.arc(0, 0, 5, 0, Math.PI * 2, true);
        CircleCenterSplit[this.level].left.rs-=rs;
        context.rotate(CircleCenterSplit[this.level].left.rs);
        context.drawImage(left_imgObj,-1*radius+left_w*0.5,-1*radius,left_w,radius*2);
        context.restore();
        /*右边的碎片*/
        context.save();
        context.translate(translatePosition.right.x,translatePosition.right.y);
        var right_imgObj = new Image();
        right_imgObj.src = CircleCenterSplit[this.level].right.url;
        var right_w = CircleCenterSplit[this.level].right.w*ratio;
        CircleCenterSplit[this.level].right.rs+=rs;
        context.rotate(CircleCenterSplit[this.level].right.rs);
        context.drawImage(right_imgObj,-right_w*0.5,-1*radius,left_w,radius*2);
        context.restore();
        if(translatePosition.left.x<left_w*-1){
            this.isSplit = false;
            that.nextLevel.call(that);
        }
    };
    /**跟随旋转的口红**/
    function CircleRotation(w,h,angle,imgObj,isSplit,newX){
        this.super.call(this, 0,0,w,h,BULLET_PIERCED_DEEP,imgObj,angle);
        this.angle = angle;
        this.resetPosition();
    };
    extendClass(CircleRotation,imgBullet);
    CircleRotation.prototype.update = function (rs,context){

        this.angle += rs;
        if(this.isSplit){
            $(".bulletsNumBox").css("display","none")
            clearInterval(timeboxInterval)
            this.resetCircleRotationEnd(context);
        }else{
            $(".bulletsNumBox").css("display","none")
            this.resetPosition();
        }
    };
    CircleRotation.prototype.resetPosition = function (){
        this.x = ROTATION_CENTER.x + RADIUS_BIG * Math.cos(this.angle);
        this.y = ROTATION_CENTER.y + RADIUS_BIG * Math.sin(this.angle);
    };
    CircleRotation.prototype.paint = function (context){
        this.super.prototype.paint.call(this, context);
    };
    CircleRotation.prototype.resetCircleRotationEnd = function (context){
        if (vy>0) {this.y -= vy*0.2;}
        else{
            this.y-=vy*1.4
        }
    };
    /**用来发射的口红**/
    function CircleBullet(x,y,w,h,imgObj,angle,isFail,failDirection,failSpeed){
        this.super.call(this, x,y,w,h,BULLET_PIERCED_DEEP,imgObj,angle);
        this.newY = this.y;
        this.isFail = isFail;
        this.failDirection = failDirection;
        this.failSpeed = failSpeed;
    };
    extendClass(CircleBullet, imgBullet);
    CircleBullet.prototype.update = function (that){
        if (this.isFail) {
            this.y+=vy*2;
            vy+=1.2*g
            this.x-=this.failSpeed*100;
            /*if(that.centerCircle.angle>0){
                this.x-=10
            }else{
               this.x+=10
            }*/
            if (this.y>=CANVAS_HEIGHT+BULLET_PIERCED_DEEP) {
                that.gameOver.call(that);
            }
        }else{
            if(this.y > this.newY)
            {
                this.y += BULLET_SPEED;
                this.y = this.y<this.newY?this.newY:this.y;
            }
        }


    };
    CircleBullet.prototype.paint = function (context){
        this.super.prototype.paint.call(this, context);
        /*context.save();
        context.font = RADIUS_SMALL + "px";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = BULLET_TEXT_STYLE;
        context.fillText(this.index, this.x, this.y, RADIUS_SMALL * 2);
        context.restore();*/
    };

    /***
     * 初始化Game对象
     * @param canvas: 游戏所处的canvas画布元素;
     * @param levelArray: 关卡设置, 可以省略(省略后将使用默认设置),
     * 数组中每关有三个数字,分别表示当前关卡
     * 默认旋转轴上的圆形个数/子弹个数/旋转速度(弧度),
     * 其中前两个是必须的, 最后一个, 如果省略, 将用默认值0.03;
     * **/
    function Game(canvas,GAMEMODE){
        Game.prototype.levelLength = 3;
        if(!canvas || !canvas.getContext){
            throw new Error("参数canvas不能为空, 且必须为canvas元素");
        }
        this.canvas = canvas;
        var data = JSON.parse($.cookie('game_cookie'))
        if (!data.game_result) {
            data = {game_result:0}
        }
        /*if(data.game_result==1){
            this.levelArray = Difficulty_Json.SUCCESS_PARAMETERS.levelArray
            this.ROTAION_SPEED_ARRAY = Difficulty_Json.SUCCESS_PARAMETERS.ROTAION_SPEED_ARRAY
            this.rotationAccelerationSpeed = Difficulty_Json.SUCCESS_PARAMETERS.rotationAccelerationSpeed
        }else if(data.game_result==0){
            this.levelArray = Difficulty_Json.fail_PARAMETERS.levelArray
            this.ROTAION_SPEED_ARRAY = Difficulty_Json.fail_PARAMETERS.ROTAION_SPEED_ARRAY
            this.rotationAccelerationSpeed = Difficulty_Json.fail_PARAMETERS.rotationAccelerationSpeed
        }*/
    }
    Game.prototype = {
        level:1, /*游戏当前关卡*/
        isPause:false, /*游戏当前是否处于暂停状态, 可通过gamePause方法暂停, 只读*/
        isOver:true,/*当前游戏是否已经结束,只读*/
        isCanTap:true,/*当前游戏Canvas是否可以点击,只读*/
        centerCircle:null,
        rotationCircles:[],
        bulletCircles:[],
        nowSpeed:null,
        AimBullet:null,
        levelLength:null,
        rotationSpeed:0.03,
        rotaionTimes:0,
        oRandom:0,
        isFastChangeRotationAccelerationSpeed:false,
        mobileTouch:null,
        levelSpaceTime:1,
        centerCircleSplitReposition:{left:{x:0,y:0},right:{x:0,y:0}},
        saveCenterCircleSplitReposition:{left:{x:0,y:0},right:{x:0,y:0}},
        levelA:0,
        getParams:function(nowLevel){
            if(nowLevel == 0){
                return D_Json.Level1_PARAMETERS
            }else if(nowLevel == 1){
                return D_Json.Level2_PARAMETERS
            }else if(nowLevel == 2){
                return D_Json.Level3_PARAMETERS
            }else if(nowLevel == 3){
                return D_Json.LAST_3_PARAMETERS
            }else if(nowLevel == 4){
                return D_Json.LAST_2_PARAMETERS
            }else if(nowLevel == 5){
                return D_Json.LAST_1_PARAMETERS
            }
        },
        init:function (){
            var initParams = this.getParams(this.levelA);
            BulletCirclesIndex = 0;
            this.canvas.width = CANVAS_WIDTH;
            this.canvas.height = CANVAS_HEIGHT;
            this.context = this.canvas.getContext("2d");
            var ballimg = new Image();
            ballimg.src = 'img/CircleCenter_1.png';
            /*lens = this.levelArray[this.levelA][1];*/
            lens = initParams.levelArray[1];
            if(!this.centerCircle)
                this.centerCircle = new CircleCenter(ballimg,Math.PI * 0.5,lens,ROTATION_CENTER.y,false,false,1);
            var self = this;
            /*this.mobileTouch = new JicemoonMobileTouch(document.getElementById("game"),{tap: function (evt){
                self.tapHandle.call(self, evt);
            }});*/
            var clickEvent = 'ontouchend' in document ? 'touchend' : 'click';
            $("#game").on(clickEvent, function(event) {
                event.preventDefault();
                self.tapHandle.call(self,event);
            })
            $("#game").on("click",function(event){
                //console.log(event)
                self.tapHandle.call(self,event);
            })
        },
        gameStart:function (){
            this.level = 1;
            this.isPause = false;
            this.isOver = false;
            this.isCanTap = true;
            this.levelChange.call(this);
            this.update.call(this);
        },
        gamePause:function (){
            this.isCanTap = false;
            this.isPause = true;
        },
        gameContinue:function(resetLevel){
            this.isPause = false;
            this.isCanTap = true;
            if(this.isOver || resetLevel){
                this.levelChange.call(this);
                this.isOver = false;
            }
            this.update.call(this);
        },
        gameOver:function (){
            this.isOver = true;
            this.isCanTap = false;
            if(this.gameOverHandle){
                this.gameOverHandle.call(this,this.level);
            }
        },
        update:function (){
            /*this.levelA = Math.min(this.level-1, this.levelArray.length - 1);*/
            this.levelA = parseInt(this.level-1);
            this.rotaionTimes++;
            this.context.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
            if(!this.isPause&&!this.isOver){
                var i, lens;
                lens = this.rotationCircles.length;

                for(i = 0; i < lens; i++){
                    this.rotationCircles[i].update(this.rotationSpeed,this.context);
                }
                lens = this.bulletCircles.length;

                this.AimBullet.update(this);
                if(!this.isCanTap){
                    var tempBC = this.AimBullet;
                    /*碰撞检测START*/
                    if(tempBC.y <=  ROTATION_CENTER.y + ROTATION_RADIUS + 2 * RADIUS_SMALL){
                        var checkCollisionResult = this.checkCollision.call(this,tempBC);
                        if(checkCollisionResult.isCollision){
                            // console.log("失败")
                            // this.audioPlay($("#collision_audio").get(0));
                            this.AimBullet.isFail = true;
                            this.AimBullet.failDirection = checkCollisionResult.failDirection
                            this.AimBullet.failSpeed = this.rotationSpeed;
                        }
                        /*碰撞检测END*/
                        /*飞到圆上 && 判断是否调用必输逻辑START*/
                        if(tempBC.y ==  ROTATION_CENTER.y + RADIUS_BIG){
                            this.normalResults.call(this);
                        }
                        /*飞到圆上 && 判断是否调用必输逻辑END*/
                    }else{
                    }
                }
                this.paint.call(this);

            }
            this.centerCircle.level = this.levelA;
            this.changeSpeed.call(this);
        },
        changeSpeed:function(){
            //var nowSpeed = this.ROTAION_SPEED_ARRAY[this.oRandom];
            var params_json = this.getParams(this.levelA);
            this.nowSpeed = params_json.ROTAION_SPEED_ARRAY[this.oRandom];
            /*---------------------------变速-----------------------------*/
            var num = parseInt(params_json.levelArray[1]-BulletCirclesIndex);
            if(this.level == 3 && num <=3){
                this.last_3_changeSpeed.call(this,num)
            }else{
                if(this.rotationSpeed>=this.nowSpeed){
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed;
                    }
                    //console.log("rotationSpeed"+this.rotationSpeed)
                }else{
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed;
                    }

                    //console.log("rotationSpeed"+this.rotationSpeed)
                }
            }
            /*---------------------------变速-----------------------------*/
            this.centerCircle.update(this.rotationSpeed,this.context,this,this.centerCircleSplitReposition);
        },
        last_3_changeSpeed:function(num){
            if(num==3){
                var params_json = this.getParams(3);
                this.nowSpeed = params_json.ROTAION_SPEED_ARRAY[this.oRandom];
                var num = parseInt(params_json.levelArray[1]-BulletCirclesIndex);
                if(this.rotationSpeed>=this.nowSpeed){
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed;
                    }

                    //console.log("rotationSpeed"+this.rotationSpeed)
                }else{
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed;
                    }
                }
            }else if(num==2){
                var params_json = this.getParams(1);
                this.nowSpeed = params_json.ROTAION_SPEED_ARRAY[this.oRandom];
                var num = parseInt(params_json.levelArray[1]-BulletCirclesIndex);
                if(this.rotationSpeed>=this.nowSpeed){
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed;
                    }
                }else{
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed;
                    }
                }
            }
            else{
                var params_json = this.getParams(1);
                this.nowSpeed = params_json.ROTAION_SPEED_ARRAY[this.oRandom];
                var num = parseInt(params_json.levelArray[1]-BulletCirclesIndex);
                if(this.rotationSpeed>=this.nowSpeed){
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed-=params_json.rotationAccelerationSpeed;
                    }
                    this.rotationSpeed-=params_json.rotationAccelerationSpeed;
                }else{
                    if(this.isFastChangeRotationAccelerationSpeed){
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed*2;
                    }else{
                        this.rotationSpeed+=params_json.rotationAccelerationSpeed;
                    }
                }
            }
        },
        normalResults:function(){
            if(this.bulletCircles[BulletCirclesIndex]){
                this.bulletCircles[BulletCirclesIndex].imgObj.src = "img/Sword_small_"+this.level+"_gray.png";
                BulletCirclesIndex++;
                this.centerCircle.restNum =parseInt(this.getParams(this.levelA).levelArray[1] - BulletCirclesIndex)
            }
            this.isCanTap = true;
            var CircleBulletImg = new Image();
            CircleBulletImg.src = arrayLipstick[this.level-1];
            this.rotationCircles.push(new CircleRotation(AimBullet.w,AimBullet.h,Math.PI * 0.5,CircleBulletImg,false));
            //lens = this.levelArray[this.levelA][1];
            lens = parseInt(this.getParams(this.levelA).levelArray[1]);
            if(BulletCirclesIndex == lens){
                if(arrayCenterCircle[this.levelA+1]){
                    this.centerCircle.imgObj.src = arrayCenterCircle[this.levelA+1]
                    this.centerCircle.restNum = this.getParams(this.levelA+1).levelArray[1];
                }
                //插入
                this.centerCircle.isSplit = true;
                for(var i=0;i<this.rotationCircles.length;i++){
                    this.rotationCircles[i].isSplit = true;
                }
                for(var key in this.AimBullet){
                    delete this.AimBullet[key];
                }
            }else{
                oldy = this.centerCircle.y;
                this.centerCircle.isQuake = true;
                for(var key in this.AimBullet){
                    delete this.AimBullet[key];
                }
                play();
                var AimBulletImg = new Image();
                AimBulletImg.src = arrayLipstick[this.levelA];
                this.AimBullet = new CircleBullet(ROTATION_CENTER.x,AimBulletBottom,AimBullet.w,AimBullet.h,AimBulletImg,Math.PI*0.5,false,null,null);
            }
        },
        audioPlay:function(obj){
            playAudioInWechat(obj);
        },
        paint:function (){
            var lens, i;
            lens = this.rotationCircles.length;
            for(i = 0; i < lens; i++){
                this.rotationCircles[i].paint(this.context);
            }
            lens = this.bulletCircles.length;
            for(i = 0; i < lens; i++){
                this.bulletCircles[i].paint(this.context);
            }
            //临时屏蔽
            this.AimBullet.paint(this.context);
            this.centerCircle.paint(this.context);
            var self = this;
            window.requestAnimationFrame(function (){
                self.update.call(self);
            });
        },
        nextLevel:function (){
            $(".bulletsNumBox").css("display","none")
           clearInterval(timeboxInterval)
           BulletCirclesIndex = 0;
           var self = this;
           self.gamePause.call(self);
           self.level++;
            // console.log(22,self.level,self.levelLength);
           if (self.level <= self.levelLength) {
               // console.log(11,self.level,self.levelLength);
               $("#levelSwitchBoxMain").attr("src", "img/level_"+self.level+"_mains.jpg");
               $("#levelSwitchBox").css("display","block");
               $("#levelSwitchBox").addClass("hidden")
           }
           self.levelSuccessHandle(self.level)
           /*if(self.levelSuccessHandle){
            console.log("if")
               self.levelSuccessHandle(self.level)
           }
           else{
            console.log("else")
               setTimeout(function (){
                   self.gameContinue.call(self,true);
               },1000 * this.levelSpaceTime);
           }*/
        },
        levelChange:function (){
            //this.levelA = Math.min(this.level-1, this.levelArray.length - 1);
            this.levelA = this.level-1;
            this.rotationCircles = [];
            this.bulletCircles = [];
            this.centerCircleSplitReposition = {left:{x:0,y:0},right:{x:0,y:0}};
            vy = 8;
            var i,lens,levelA,tempCircle,ta;
            /*levelA=当前关数 初始为0*/
            //levelA = Math.min(this.level-1, this.levelArray.length - 1);
            //for (var i = 0; i < this.levelArray.length; i++) {
              for (var i = 0; i < this.levelLength; i++) {
                document.getElementById("levelbox").children[i].children[0].src = levelUrl[i].normal;
                if(i<=this.levelA){
                    document.getElementById("levelbox").children[i].children[0].src = levelUrl[i].active
                }
            }
            //lens = this.levelArray[this.levelA][0];
              lens = parseInt(this.getParams(this.levelA).levelArray[0]);
            //var times = this.levelArray[this.levelA][3];
            var times = parseInt(this.getParams(this.levelA).levelArray[3]);
            var ischangeSpeed = 0;
            $("#timebox").html(times)
            timeboxInterval = setInterval(function(){
                if (times<=11 && times>10) {
                    this.audioPlay($("#Countdown_10s_audio").get(0))
                }
                ischangeSpeed++;
                if(/*true*/ischangeSpeed%changeSpeed ==0){
                    this.oRandom = Math.floor(Math.random()*ROTAION_SPEED_ARRAY.length);
                }
                times--;
                if(times ==0){
                    this.gameOver.call(this);
                }
                $("#timebox").html(times)
            }.bind(this),1000)
            //this.centerCircle.restNum = this.levelArray[this.levelA][1];
            this.centerCircle.restNum = parseInt(this.getParams(this.levelA).levelArray[1]);
            ta = Math.PI * 2 / lens;
            for(i = 0; i < lens; i++){
                var CircleBulletImg = new Image();
                CircleBulletImg.src = arrayLipstick[this.level-1];
                tempCircle = new CircleRotation(AimBullet.w,AimBullet.h,ta*i,CircleBulletImg,false);
                this.rotationCircles.push(tempCircle);
            }
            //lens = this.levelArray[this.levelA][1];
            lens = parseInt(this.getParams(this.levelA).levelArray[1]);
            for(i = 0; i < lens; i++){
                /*弹夹绘制调用*/
                var tempClipImg = new Image();
                tempClipImg.src = "img/Sword_small_"+this.level+".png";
                var ClipTop = CANVAS_HEIGHT-CLIPSIZE.bottom/*-CLIPSIZE.h*lens*/-CLIPSIZE.space*lens;
                tempClip = new Clip(15, ClipTop+i*CLIPSIZE.space, CLIPSIZE.w, CLIPSIZE.h, tempClipImg)
                this.bulletCircles.push(tempClip);
            }
            var AimBulletImg = new Image();
            AimBulletImg.src = arrayLipstick[this.level-1];
            if(this.AimBullet){
                delete this.AimBullet;
            }
            if(!this.AimBullet){
                this.AimBullet = new CircleBullet(ROTATION_CENTER.x,AimBulletBottom,AimBullet.w,AimBullet.h,AimBulletImg,Math.PI*0.5,false);
            }
            //if(this.levelArray[this.levelA].length >= 3){
            if(this.getParams(this.levelA).levelArray.length >= 3){
                //this.rotationSpeed = this.levelArray[this.levelA][2];
                this.rotationSpeed = this.getParams(this.levelA).levelArray[2];
            }
            else{
                this.rotationSpeed = ROTATION_SPEED;
            }
        },
        //相交检测
        crossMul:function(v1,v2){
            return   v1.x*v2.y-v1.y*v2.x;
        },
        //相交返回true
        checkCross:function(p1,p2,p3,p4){
          var v1={x:p1.x-p3.x,y:p1.y-p3.y},
          v2={x:p2.x-p3.x,y:p2.y-p3.y},
          v3={x:p4.x-p3.x,y:p4.y-p3.y},
          v=this.crossMul(v1,v3)*this.crossMul(v2,v3)
          v1={x:p3.x-p1.x,y:p3.y-p1.y}
          v2={x:p4.x-p1.x,y:p4.y-p1.y}
          v3={x:p2.x-p1.x,y:p2.y-p1.y}
          // console.log("v: "+v+" ; "+"distance: "+this.crossMul(v1,v3)*this.crossMul(v2,v3))
          if (v<=50000&&this.crossMul(v1,v3)*this.crossMul(v2,v3)<=50000) {}
          return (v<=0&&this.crossMul(v1,v3)*this.crossMul(v2,v3)<=0)?true:false
        },
        //碰撞检测
        checkCollision:function (circleBullet){
            var Bx = circleBullet.x-circleBullet.w*0.5;
            var By = circleBullet.y-circleBullet.z;
            var Bw = circleBullet.w;
            var Bh = circleBullet.h;
            var B_l_t = {x:Bx,y:By}
            var B_r_t = {x:Bx+Bw,y:By}
            var B_r_b = {x:Bx+Bw,y:By+Bh}
            var B_l_b = {x:Bx,y:By+Bh}
            for(var i = 0; i < this.rotationCircles.length; i++){
                var θ = this.rotationCircles[i].angle
                θ%=2*Math.PI;
                /*θ = θ* 180 / Math.PI;*/
                var Ax = this.rotationCircles[i].x;
                var Ay = this.rotationCircles[i].y;
                var Aw = this.rotationCircles[i].w;
                var Ah = this.rotationCircles[i].h;
                var Az = this.rotationCircles[i].z;
                var A_l_t = {x:Ax-Aw/2*Math.sin(θ),y:Ay+Aw/2*Math.cos(θ)}
                var A_r_t = {x:Ax+Aw/2*Math.sin(θ),y:Ay-Aw/2*Math.cos(θ)}
                var A_r_b = {x:Ax+(Ah-Az)*Math.cos(θ)+Aw/2*Math.sin(θ),y:Ay+(Ah-Az)*Math.sin(θ)-Aw/2*Math.cos(θ)}
                var A_l_b = {x:Ax+(Ah-Az)*Math.cos(θ)-Aw/2*Math.sin(θ),y:Ay+(Ah-Az)*Math.sin(θ)+Aw/2*Math.cos(θ)}
                if (
                    this.checkCross(B_l_t,B_r_t,A_l_b,A_l_t) || //左
                    this.checkCross(B_l_t,B_l_b,A_l_b,A_l_t) || //左
                    this.checkCross(B_r_t,B_r_b,A_l_b,A_l_t)    //左
                ) {
                    return {isCollision:true,failDirection:"left"}
                }
                if (
                    this.checkCross(B_l_t,B_r_t,A_l_b,A_r_b) || //下
                    this.checkCross(B_l_t,B_l_b,A_l_b,A_r_b) || //下
                    this.checkCross(B_r_t,B_r_b,A_l_b,A_r_b)    //下
                ) {
                    return {isCollision:true,failDirection:"bottom"}
                }
                if (
                    this.checkCross(B_l_t,B_r_t,A_r_b,A_r_t) || //右
                    this.checkCross(B_l_t,B_l_b,A_r_b,A_r_t) || //右
                    this.checkCross(B_r_t,B_r_b,A_r_b,A_r_t)    //右
                ) {
                    return {isCollision:true,failDirection:"right"}
                }
                if(circleBullet.y-(ROTATION_CENTER.y+RADIUS_BIG)==0){
                }
            }
            return false

        },
        tapHandle:function (evt){
            evt.stopPropagation();
            evt.preventDefault();
            if(this.isCanTap){
               this.isCanTap = false;
                var lens = this.bulletCircles.length;
                //停在飞镖位置
                //this.AimBullet.newY = ROTATION_CENTER.y + 107+RADIUS_BIG;
                //飞镖扎在圆上
                var params_json = this.getParams(this.levelA);
                // console.log(88,params_json);
                var num = parseInt(params_json.levelArray[1]-BulletCirclesIndex);
                if(num<=D_Json.fail_PARAMETERS.startJudgeCheatDistanceNum){
                    if(this.nowSpeed>0){
                        this.nowSpeed = 0.1
                    }else{
                        this.nowSpeed = -0.1
                    }
                    this.isFastChangeRotationAccelerationSpeed = true
                    //params_json.rotationAccelerationSpeed = 0.1
                }

                this.AimBullet.newY = ROTATION_CENTER.y + RADIUS_BIG;
            }
        },
        // 成功过关后调用的对外接口
        levelSuccessHandle:null,
        // 游戏结束后调用的对外接口
        gameOverHandle:null
    }
    window["HardestGame"] = Game;
})();
