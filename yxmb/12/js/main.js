/*
* @Author: Marte
* @Date:   2018-06-07 11:33:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-11 15:41:20
*/

'use strict';

         window.onload = function(){
            myGame.init();
         }

         var myGame = {

            data : {  //飞机数据

                BULLET : {
                    p:{name:'b1',speed:30},
                    e:{name:'b2',speed:30}
                },

                PLANE : {},

                eArr : [2,1,1,3,3,1,1,3,3,0,
                        0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,1,2,0,0,0,0,
                        3,3,2,3,3,1,1,3,3,2],

                ENEMY : {

                    blood : [2,20,50,10],
                    score : [2,20,50,10],
                    speed : [1,3,1,2],
                    bullet : [false,false,false,true],
                    _width : [126,108,126,120],
                    _height : [81,81,87,101]

                }

            },

            init : function(){ //初始化

                var layout = document.getElementById('layout'),
                    mystart = document.getElementById('start'),
                    score = document.getElementById('score'),
                    That = this;

                this.layout = layout;
                this.mystart = mystart;
                this.score = score;

                document.getElementById('startBtn').onclick = function() {
                    mystart.style.display = 'none';
                    That.createPlane();
                    document.getElementsByClassName('score')[0].style.display = 'block';
                    document.getElementById("fire").play();

                };

            },

            createPlane : function(){  //创建飞机

                var That = this;

                var plane = document.createElement('div');
                plane.className = 'plane';
                plane.style.width = '110px';
                plane.style.left = (this.layout.offsetWidth - plane.offsetWidth) / 2 + 'px';
                this.layout.append( plane );

                this.plane = plane;

                plane.itimer1 = setInterval(function(){
                    That.createBullet(That.data.BULLET.p.name,plane, 0, 1);
                },150);

                this.bindPlane(plane);

                plane.itimer2 = setInterval(function(){
                    That.createEnemy();
                },1000)
            },

            createEnemy : function(){   //创建敌机

                var e = this.data.eArr[~~(Math.random()*60)];

                var ey = document.createElement('div');
                ey.className = 'enemy enemy' + e;

                ey.style.cssText = 'width:' + this.data.ENEMY._width[e] + 'px; height:' + this.data.ENEMY._height[e] + 'px';

                ey.style.left = ~~(Math.random()*(this.layout.offsetWidth - this.data.ENEMY._width[e])) + 'px';
                ey.setAttribute('blood', this.data.ENEMY.blood[e]);
                ey.setAttribute('score', this.data.ENEMY.score[e]);
                ey.setAttribute('speed', this.data.ENEMY.speed[e]);
                ey.setAttribute('bullet', this.data.ENEMY.bullet[e]);

                this.layout.append(ey);

                //子弹碰撞
                if(this.data.ENEMY.bullet[e]){
                    var That = this;
                    ey.timer1  = setInterval(function(){
                        That.createBullet(That.data.BULLET.e.name,ey, ey.offsetHeight, -1);
                    },2000);

                }

                this.runEnemy(ey);
            },

            runEnemy : function(obj){   //敌机运动
                var That = this;
                obj.timer = setInterval(function(){

                    obj.style.top = (obj.offsetTop + parseInt(obj.getAttribute('speed'))) + 'px';

                    if(obj.offsetTop > That.layout.offsetHeight){
                        clearInterval(obj.timer);
                        obj.parentNode.removeChild(obj);
                    };

                    for(var i = 0, e = document.getElementsByClassName('enemy') ,len = e.length; i<len; i++){
                        if(That.TC(e[i],That.plane) ){  //与敌机碰撞]

                            clearInterval(obj.timer);
                            That.gameOver();
                            That.plane.parentNode.removeChild(That.plane);
                            That.plane = null;
                            e[i].parentNode.removeChild(e);

                        }
                    }

                },30)
            },

            createBullet : function(name, obj, h, direction){  //创建子弹

                var bt = document.createElement('div');
                bt.className = name;

                var _p = obj;

                bt.style.top = (_p.offsetTop + h - bt.offsetHeight * direction) - 10 + 'px';
                bt.style.left = (_p.offsetLeft + _p.offsetWidth/2) - 4 + 'px';

                this.layout.append(bt);

                if(bt.classList.contains('b1')){
                   this.runBullet(bt,0,-30);
                }else{

                    this.speedDecomposition(this.plane,bt);
                    this.runBullet(bt,this.vx,this.vy);

                }
            },

            speedDecomposition : function(pl,bt){   //计算敌机子弹方向，击向飞机

                var plleft = pl.offsetLeft,
                    pltop = pl.offsetTop,
                    btleft = bt.offsetLeft,
                    bttop = bt.offsetTop,

                    s = Math.sqrt((plleft - btleft)*(plleft - btleft) + (pltop - bttop)*(pltop - bttop)),
                    sin = (pltop - bttop) / s,
                    vy = 5*sin,
                    vx = Math.sqrt(5*5 - vy * vy);

                this.vy = vy;
                plleft > btleft ? this.vx = vx : this.vx = -vx;

            },

            runBullet : function(b,x,y){   //子弹运动

                var That = this;

                b.timer = setInterval(function(){

                    if(b.offsetTop <= 30 || b.offsetTop >= That.layout.offsetHeight || b.offsetLeft <= 0 || b.offsetLeft >= That.layout.offsetWidth){   //边界判断

                        clearInterval(b.timer);
                        That.layout.removeChild(b);

                    }else{

                       b.style.cssText = 'top : ' + (b.offsetTop + y) + 'px; left : ' + (b.offsetLeft + x) + 'px';

                    }

                    for(var i = 0, EN = document.getElementsByClassName('enemy'), len = EN.length ; i < len ; i++ ){

                        if(That.TC(EN[i],b) && b.classList.contains('b1')){

                            clearInterval(b.timer);
                            That.layout.removeChild(b);
                            var Blood = EN[i].getAttribute('blood') - 1;

                            if(Blood){
                                EN[i].setAttribute('blood',Blood);
                            }else{

                                document.getElementById("boom").play();
                                That.score.innerHTML = (parseInt(That.score.innerHTML) + parseInt(EN[i].getAttribute('score')));
                                EN[i].style.background = 'url(img/qw.png) center no-repeat / cover';
                                var pare = EN[i];
                                EN[i].classList.remove("enemy");
                                EN[i].timer = setTimeout(function(){That.layout.removeChild(pare)},400);
                            }

                        }

                    }

                    if(That.TC(That.plane,b) && b.classList.contains('b2')){

                        clearInterval(b.timer);
                        That.layout.removeChild(b);
                        That.layout.removeChild(That.plane);
                        That.gameOver();

                    }

                },30)
            },

            bindPlane : function(p){   //控制飞机鼠标事件

                var lagoutx = this.layout.offsetLeft,
                    lagouty = this.layout.offsetTop,

                    lagoutw = this.layout.offsetWidth,
                    lagouth = this.layout.offsetHeight;

                p.onmousedown = function(event){

                    var px = p.offsetLeft,
                        py = p.offsetTop,

                        dx = event.clientX - lagoutx - p.offsetWidth/2,
                        dy = event.clientY - lagouty - p.offsetHeight/2;

                    document.onmousemove = function(event){

                        dx = event.clientX - lagoutx - p.offsetWidth / 2;
                        dy = event.clientY - lagouty - p.offsetHeight / 2;

                        if( dx <= 0 ){
                            dx = 0 ;
                        }else if( dx >= lagoutw - p.offsetWidth){
                            dx = lagoutw - p.offsetWidth;
                        }

                        if( dy <= 0 ){
                            dy = 0;
                        }else if( dy >= lagouth - p.offsetHeight){
                            dy =  lagouth - p.offsetHeight;
                        }

                        p.style.cssText = 'left :' + dx +'px; top :' + dy + 'px';

                    }

                    document.onmouseup = function(event){

                        document.onmousemove = null;

                    }

                }
            },

            gameOver : function(){

                document.getElementById("fire").pause();
                document.getElementById('bigboom').play();

                clearInterval(this.plane.itimer2);
                clearInterval(this.plane.itimer1);

                this.mystart.style.display = 'block';
                document.getElementsByClassName('score')[0].style.display = 'none';
                document.getElementById('name-over').getElementsByTagName('i')[0].innerHTML = 'GAME OVER!';
                document.getElementById('name-over').getElementsByTagName('p')[0].innerHTML = this.score.innerHTML;
                document.getElementById('startBtn').value = 'AGAIN';

                while(this.layout.hasChildNodes()){
                    this.layout.removeChild(this.layout.firstChild);
                };

                this.score.innerHTML = '0';

            },

            TC : function(obj1,obj2){   //碰撞检测

                var t1 = obj1.offsetTop,                      //上
                    r1 = obj1.offsetLeft + obj1.offsetWidth,  //右
                    b1 = obj1.offsetTop + obj1.offsetHeight,  //下
                    l1 = obj1.offsetLeft,                     //左

                    t2 = obj2.offsetTop,                      //上
                    r2 = obj2.offsetLeft + obj2.offsetWidth,  //右
                    b2 = obj2.offsetTop + obj2.offsetHeight,  //下
                    l2 = obj2.offsetLeft;                     //左

                if(t1 > b2 || b1 < t2 || r1 < l2 || l1 > r2){
                    return false;
                }else{
                    return true;
                }
            },
         }