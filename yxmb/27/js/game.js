/**
 * Created by Administrator on 2015/6/27.
 */

(function () {
    window.onload = function() {//页面加载完成后执行
        Game.setup();
    };
    var ctx = null;
    //游戏主体
    var Game = {
        canvas: document.getElementById('canvas'),//获取canvas画布
        setup: function() {
            if (this.canvas.getContext) {
                ctx = this.canvas.getContext('2d');//获取ctx
                this.width = this.canvas.width;
                this.height = this.canvas.height;
                Screen.welcome();
                this.canvas.addEventListener('click', this.runGame, false);//给canvas画布添加点击事件
                Ctrl.init();//对键盘、鼠标和触摸监听时间进行初始化
            }
        },
        animate: function() {
            Game.play = requestAnimFrame(Game.animate);//调用requestAnimFrame方法，进行每秒六十次的调用
            Game.draw();
        },
        init: function() {
            Background.init();
            Hud.init();
            Bricks.init();
            Ball.init();
            Paddle.init();
            //this.animate();
        },
        draw: function() {
            ctx.clearRect(0, 0, this.width, this.height);//对canvas画布进行清除
            Background.draw();
            Bricks.draw();
            Paddle.draw();
            Hud.draw();
            Ball.draw();
        },
        levelUp: function() {
            Hud.lv += 1;
            Bricks.init();
            Ball.init();
            Paddle.init();
        },
        levelLimit: function(lv) {
            if(lv<=10){
                return lv;
            }
            else{
            return  10;}
        },
        runGame: function() {
            Game.canvas.removeEventListener('click', Game.runGame, false);//移除canvas的点击监听，移除当时runGame方法的调用
            Game.init();
            Game.animate();
        },
        restartGame: function() {
            Game.canvas.removeEventListener('click', Game.restartGame, false);//移除canvas的点击监听，移除当时restartGame方法的调用
            Game.init();
        }
    };

    //得分与关卡计数器
    var Hud = {
        init: function() {
            this.lv =1;
            this.score = 0;
        },
        draw: function() {
            ctx.font = '12px helvetica, arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'left';
            ctx.fillText('Score: ' + this.score, 5, Game.height - 5);
            ctx.textAlign = 'right';
            ctx.fillText('Lv: ' + this.lv, Game.width - 5, Game.height - 5);
        }
    };
    //创建游戏开始和结束的画面
    var Screen = {
        welcome: function() {
            this.text = '****';
            this.textSub = 'blog.96xy.cn';
            this.textColor = 'white';
            this.create();//调用本身的图像绘制方法
        },
        create: function() {//具体绘制的方法
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, Game.width, Game.height);
            ctx.fillStyle = this.textColor;
            ctx.textAlign = 'center';
            ctx.font = '40px helvetica, arial';
            ctx.fillText(this.text, Game.width / 2, Game.height / 2);
            ctx.fillStyle = '#999999';
            ctx.font = '20px helvetica, arial';
            ctx.fillText(this.textSub, Game.width / 2, Game.height / 2 + 30);
        },
        gameover: function() {//游戏结束画面的设置
            this.text = 'Game Over';
            this.textSub = 'Click To Retry';
            this.textColor = 'red';
            this.create();//调用本身的图像绘制方法
        }
    };

    //第3步：显示背景图像
    var Background = {
        init: function() {
            this.ready = false;
            this.img = new Image();
            this.img.src = 'images/background.jpg';
            this.img.onload = function() {
                Background.ready = true;
            };
        },
        draw: function() {
            if (this.ready) {
                ctx.drawImage(this.img, 0, 0);
            }
        }
    };

    //第4步：计算矩形砖块的宽度与高度
    var Bricks = {
        gap: 4,
        col: 5,
        w: 188,
        h: 30,
        r:15,
        init: function() {
            //this.row = 3;
            //this.row = 2 + Hud.lv;
            this.row = 2 + Game.levelLimit(Hud.lv);//设置每关砖块的行数，调用limit方法
            this.total = 0;
            //对count二维数组进行赋值
            this.count = [this.row];
            for (var i = this.row; i--;) {
                this.count[i] = [this.col];
            }
        },
        draw: function() {//对砖块绘制的方法
            //清除被小球击中的砖块
            var i, j;
            for (i = this.row; i--;) {
                for (j = this.col; j--;) {
                    if (this.count[i][j] !== false) {
                        //碰撞侦测，判断小球是否与当前重绘的砖块发生重叠
                        if (Ball.x >= this.x(j) &&//对小球碰撞的砖块进行判断
                            Ball.x <= (this.x(j) + this.w) &&
                            Ball.y >= this.y(i) &&
                            Ball.y <= (this.y(i) + this.h)) {
                            //判断条件都为真时，执行下两行代码
                            this.collide(i, j);//将碰撞的砖块的值设置为false
                            continue;
                        }
                        ctx.fillStyle=this.gradient(i),
                        //ctx.fillRect(this.x(j), this.y(i), this.w, this.h);
                            //将砖块绘制成椭圆
                        ctx.beginPath();
                        ctx.moveTo(this.x(j)+15, this.y(i));
                        ctx.lineTo(this.x(j)+188-15, this.y(i));
                        ctx.arcTo(this.x(j)+188, this.y(i), this.x(j)+188, this.y(i)+15, this.r);
                        ctx.arcTo(this.x(j)+188, this.y(i)+30, this.x(j), this.y(i)+30, this.r);
                        ctx.lineTo(this.x(j)+15, this.y(i)+30);
                        ctx.arcTo(this.x(j), this.y(i)+30, this.x(j), this.y(i), this.r);
                        ctx.arcTo(this.x(j), this.y(i),
                            this.x(j)+188, this.y(i), this.r);
                        ctx.closePath();
                        //ctx.stroke();
                        ctx.fill();

                    }
                }
            }
            if (this.total === (this.row * this.col)) {//当计数器等于当前关卡砖块总数时
                Game.levelUp();//调用Game里面levelUp的方法(升级关卡)
            }
        },
        collide: function(i, j) {
            Hud.score += 1;//如果碰撞判断成立，成绩积分+1
            this.total += 1;//计数器+1
            //如果发生重叠，将其设定为false，并将小球的y坐标取负
            this.count[i][j] = false;
            Ball.sy = -Ball.sy;
        },
        x: function(row) {//返回当前砖块所占用X的区间
            return (row * this.w) + (row * this.gap);
        },
        y: function(col) {//返回当前砖块所占用Y的区间
            return (col * this.h) + (col * this.gap);
        },

        //第5步：给砖块着色
        gradient: function(row) {
            for(;row>3;){           //按行数循环将砖块着色
                row=row-4;}
            switch(row) {//对相应的砖块行进行着色
                case 0:
                    return this.gradientPurple ?
                        this.gradientPurple :
                        this.gradientPurple =
                            this.makeGradient(row, '#bd06f9', '#9604c7');
                case 1:
                    return this.gradientRed ?
                        this.gradientRed :
                        this.gradientRed =
                            this.makeGradient(row, '#F9064A', '#c7043b');
                case 2:
                    return this.gradientGreen ?
                        this.gradientGreen :
                        this.gradientGreen =
                            this.makeGradient(row, '#05fa15', '#04c711');
               case 3:
                    return this.gradientOrange ?
                        this.gradientOrange :
                        this.gradientOrange =
                            this.makeGradient(row, '#faa105', '#c77f04');
            }
        },
        makeGradient: function(row, color1, color2) {
            var y = this.y(row);
            var grad = ctx.createLinearGradient(0, y, 0, y + this.h);
            //渐变起始颜色为color1，终止颜色为color2
            grad.addColorStop(0, color1);
            grad.addColorStop(1, color2);
            return grad;
        }
    };

    //第6步：创建小球
    var Ball = {
        r: 15,//小球半径
        init: function() {
            this.x = 480;
            this.y = 480;
            //this.sx = 2;
            //this.sy = -2;
            this.sx = 1 + (0.4 * Hud.lv);
            this.sy = 6 + (0.8 * Hud.lv);
        },
        draw: function() {//小球的绘制方法
            this.edges();
            this.collide();
            this.move();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = '#eee';
            ctx.fill();
        },
        edges: function() {//对小球在游戏界面内的限制
            //游戏容器的上边界
            if (this.y < 1) {//当小球Y的坐标小于1时(即小球碰到上边界时)
                this.y = 1;//将小球的Y坐标赋值为1
                this.sy = -this.sy;//将小球Y方向上的速度进行反向
            }
            //游戏容器的下边界
            else if (this.y > Game.height) {//当小球的Y坐标大雨游戏界面的高度时(即小球超出了游戏的下边界)
                this.sy = this.sx = 0;//将小球X,Y方向上的速度都赋值为0
                this.y = this.x = 1000;//将小球X,Y坐标赋值为1000(即超出了游戏界面)
                Screen.gameover();//调用Screen方法的绘制结束画面的方法
                canvas.addEventListener('click', Game.restartGame, false);//给canvas画布添加一个鼠标点击事件，当点击时调用Game的restartGame方法(重新开始游戏)
                //this.sx=-5-this.sx;
                //this.sy=-this.sy;
                return;
            }
            //游戏容器的左边界
            if (this.x < 1) {//当小球的X的坐标小于1时(即小球碰到游戏边界的左边界)
                this.x = 1;//将小球X的坐标赋值为1
                this.sx = -this.sx;//将小球X方向上的速度进行反向
            }
            //游戏容器的右边界
            else if (this.x > Game.width)//到小球的X坐标大雨游戏界面的宽度时(即小球碰到游戏边界的右边界)
            {
                this.x = Game.width - 1;//将小球的X的坐标赋值为  游戏的界面的宽度-1
                this.sx = -this.sx;//将小球X方向上的速度进行反向
            }
        },

        //碰撞侦测，游戏机制需要让球拍将小球反弹向砖块。
        collide: function() {//对小球与球拍的碰撞判断方法
            if (this.x >= Paddle.x &&//此行代码与下一行代码是判断小球的X坐标是否在球拍的X坐标范围内
                this.x <= (Paddle.x + Paddle.w) &&
                this.y >= Paddle.y &&//此行代码与下一行代码是判断小球是否与球拍进行了碰撞
                this.y <= (Paddle.y + Paddle.h)) {

                this.sx = 14 * ((this.x - (Paddle.x + Paddle.w / 2)) / Paddle.w);//对小球的X方向上的速度进行运算后赋值
                this.sy = -this.sy;
            }
        },

        //使小球运动起来
        move: function() {
            //采用累加的方法不断变换小球X,Y的坐标值
            this.x += this.sx;
            this.y += this.sy;
        }
    };

    //第7步：创建球拍
    var Paddle = {
        w: 180,
        h: 25,
        r: 12,
        init: function() {
            this.x = 390;
            this.y = 480;
            this.speed = 8;
        },
        draw: function() {//球拍的绘制方法
            this.move();
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.arcTo(this.x + this.w, this.y,
                this.x + this.w, this.y + this.r, this.r);
            ctx.lineTo(this.x + this.w, this.y + this.h - this.r);
            ctx.arcTo(this.x + this.w, this.y + this.h,
                this.x + this.w - this.r, this.y + this.h, this.r);
            ctx.lineTo(this.x + this.r, this.y + this.h);
            ctx.arcTo(this.x, this.y + this.h,
                this.x, this.y + this.h - this.r, this.r);
            ctx.lineTo(this.x, this.y + this.r);
            ctx.arcTo(this.x, this.y, this.x + this.r, this.y, this.r);
            ctx.closePath();
            ctx.fillStyle = this.gradient();
            ctx.fill();
        },


        gradient: function() {//设置球拍的样式
            if (this.gradientCache) {
                return this.gradientCache;
            }
            this.gradientCache = ctx.createLinearGradient(this.x, this.y, this.x, this.y + 20);
            this.gradientCache.addColorStop(0, '#eee');
            this.gradientCache.addColorStop(1, '#999');
            return this.gradientCache;
        },
   //使球拍水平移动
    move: function() {
        //if (this.x > -(this.w / 2) &&this.x < Game.width - (this.w / 2))
        //    this.x += this.speed;

        //对球拍的运动范围进行限制，其中Ctrl.left和Ctrl.right的意义是方向键是否触发
        if (Ctrl.left && (this.x < Game.width - (this.w / 2))) {
            this.x += this.speed;
        } else if (Ctrl.right && this.x > -this.w / 2) {
            this.x += -this.speed;
        }
    }
    };
    //实现键盘、鼠标及触摸控制
    var Ctrl = {
        init: function() {

            //创建键盘侦听器
            window.addEventListener('keydown', this.keyDown, true);
            window.addEventListener('keyup', this.keyUp, true);

            //添加鼠标控制
            window.addEventListener('mousemove', this. movePaddle, true);


            //添加触摸控制
            Game.canvas.addEventListener('touchstart', this.movePaddle, false);
            Game.canvas.addEventListener('touchmove', this.movePaddle, false);
            Game.canvas.addEventListener('touchmove', this.stopTouchScroll, false);
        },
        keyDown: function(event) {//键盘按下，开始移动
            switch(event.keyCode) {
                case 39:
                    Ctrl.left = true;
                    break;
                case 37:
                    Ctrl.right = true;
                    break;
                default:
                    break;
            }
        },
        keyUp: function(event) {//松开键盘，停止
            switch(event.keyCode) {
                case 39:
                    Ctrl.left = false;
                    break;
                case 37:
                    Ctrl.right = false;
                    break;
                default:
                    break;
            }
        },
        movePaddle: function(event) {
            var mouseX = event.pageX;//获取鼠标在页面上的X坐标
            var canvasX = Game.canvas.offsetLeft;//获取画布左边起始位置X坐标
            var paddleMid = Paddle.w / 2;
            if (mouseX > canvasX && mouseX < canvasX + Game.width) {//鼠标有效的工作空间
                var newX = mouseX - canvasX;
                newX -= paddleMid;
                Paddle.x = newX;
            }
        },
        stopTouchScroll: function(event) {
            event.preventDefault();
        }
    };
}());


//第2步：创建专为HTML5优化的动画
//Canvas需要依赖JavaScript计时器，因为动画不是它内建的功能。
// 要想创建动画，就需要计时器来周期性地绘制图形。
//浏览器厂商提供了一个JavaScript函数rquestAnimationFrame()，
// 可以把帧数显示在用户的电脑上。
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);//每秒六十帧，意义是每秒调动函数六十次
        };
})();