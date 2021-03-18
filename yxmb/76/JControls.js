var JMain={
    JZoom:{x:1.0, y:1.0},
    JFocusControl : null,
    JForm:null,
    JTick:null,
    JID:0
};
var JColor = {
    white:{data:"#FFFFFF", r:255, g:255, b:255},
    black:{data:"#000000", r:0, g:0, b:0},
    red:{data:"#FF0000", r:255, g:0, b:0},
    green:{data:"#00FF00", r:0, g:255, b:0},
    blue:{data:"#0000FF", r:0, g:0, b:255},
    gray:{data:"#999999", r:144, g:144, b:144}
};

var JControls = {};
JControls.Object = Class.create({
    ID:null,//对象标识，需唯一
    position:null, //绝对位置{x:0,y:0}
    alpha:null,//透明度
    moveStep:null, //移动步伐{x:0,y:0}
    canMove:true, //是否可移动
    size:null, //对象长宽{width:0,height:0}
    blockAngle:null, //旋转角度
    rotationStep:null, //旋转步伐
    blockInvert:null,//是否反转
    bgColor:null,//背景颜色
    BGColorAlpha:null,//背景颜色透明度
    BGImage:null,//背景图片
    BGImageAlpha:null,//背景透明度
    BGImagePosition:null,//背景图片开始显示位置
    BGImageSize:null,//背景图片显示的长宽
    focus:null,//是否为焦点
    controls:null,//子对象数组
    parent:null,//父对象
    relativePosition:null, //与父对象的相对位置
    enabled:null,//是否为激活状态
    visible:null,//是否显示
    showImageData:null,//该对象以及其子对象的缓存图片数据
    isHighLight:null,//是否高亮
    initialize:function (argP, argWH) {//类构造函数，初始化数据
        this.ID = JMain.JID++;
        this.position = argP;
        if(argWH)this.size = argWH;
        else this.size = {width:0,height:0};
        this.BGColorAlpha = 1.0;
        this.BGImageAlpha = 1.0;
        this.moveStep = {x:0, y:0};
        this.fontColor=JColor.black;
        this.textPos={x:0, y:0};
        this.alpha=1.0;
        if(argP)this.relativePosition = argP;
        else this.relativePosition={x:0,y:0}
        this.controls = [];
        this.parent = null;
        this.enabled = true;
        this.visible = true;
    },
    setSize:function (size) {//设置宽高
        this.size = size;
        return this;
    },
    setBGColor:function (bgColor) {//设置背景颜色
        this.BGColor = bgColor;
        return this;
    },
    setBGImage:function (image) {//设置背景图片
        this.BGImage = image.data;
        this.BGImagePosition={x:0,y:0};
        this.BGImageSize={width:image.cellSize.width,height:image.cellSize.height};
        return this;
    },
    setRelativePosition:function (relativePosition) {//设置与父对象的相对位置
        this.relativePosition = relativePosition;
        return this;
    },
    setFocus:function(){//获取焦点
        if(JMain.JFocusControl)JMain.JFocusControl.lostFocus();
        this.focus=true;
        JMain.JFocusControl=this;
        if(this.onFocus)this.onFocus();
    },
    onFocus:null,
    lostFocus:function(){//失去焦点
        this.focus=false;
        JMain.JFocusControl=null;
    },
    pointInBlock:function (e, _this) {//判断_this对象是否包含坐标e
        if (!_this)_this = this;
        if (e.x >= _this.position.x && e.x < _this.position.x + _this.size.width && e.y >= _this.position.y && e.y < _this.position.y + _this.size.height) return true;
        else return false;
    },
    onControlClick:function () {//点击对象时，会调用该函数
        if (!this.visible || !this.enabled)return false;
        for (var i = this.controls.length - 1; i >= 0; i--) {
            if (this.controls[i].pointInBlock(JMain.JForm.mousePosition, this.controls[i])
                && this.controls[i].onControlClick.call(this.controls[i])) return true;
        }
        if (this.onClick && this.onClick())return true;//如果有自定义点击事件并且执行后返回true，则返回true停止递归，结束点击事件
        else return false;//返回false继续遍历
    },
    onControlMouseDown:function () {//点击对象时，鼠标键按下会调用该函数
        if (!this.visible || !this.enabled)return false;
        for (var i = this.controls.length - 1; i >= 0; i--) {
            if (this.controls[i].pointInBlock(JMain.JForm.mousePosition, this.controls[i])
                && this.controls[i].onControlMouseDown.call(this.controls[i])) return true;
        }
        if (this.onMouseDown && this.onMouseDown())return true;
        else return false;
    },
    onControlMouseUp:function () {//点击对象时，鼠标键弹起会调用该函数
        if (!this.visible || !this.enabled)return false;
        for (var i = this.controls.length - 1; i >= 0; i--) {
            if (this.controls[i].pointInBlock(JMain.JForm.mousePosition, this.controls[i])
                && this.controls[i].onControlMouseUp.call(this.controls[i])) return true;
        }
        if (this.onMouseUp && this.onMouseUp())return true;
        return false;
    },
    onControlKeyDown:function (keyCode) {//键盘按下时，会调用该函数
        if (!this.visible || !this.enabled)return false;
        for (var i = this.controls.length - 1; i >= 0; i--) {
            if (this.controls[i].onControlKeyDown.call(this.controls[i],keyCode)) return true;
        }
        if (this.onKeyDown && this.onKeyDown(keyCode))return true;
        else return false;
    },
    onControlKeyUp:function (keyCode) {//键盘弹起时，会调用该函数
        if (!this.visible || !this.enabled)return false;
        for (var i = this.controls.length - 1; i >= 0; i--) {
            if (this.controls[i].onControlKeyUp.call(this.controls[i],keyCode)) return true;
        }
        if (this.onKeyUp && this.onKeyUp(keyCode))return true;
        else return false;
    },
    onClick:null,//自定义点击事件
    onMouseDown:null,//自定义鼠标键按下事件
    onMouseUp:null,//自定义鼠标键弹起事件
    onKeyDown:null,//自定义键盘按下事件
    onKeyUp:null,//自定义键盘弹起事件
    addControlInLast:function (aObj) {//把对象数组aObj加在子对象数组后面
        for(var i = 0; i < aObj.length; i++){
            if (aObj[i]) {
                var length = this.controls.length;
                this.controls[length] = aObj[i];
                this.controls[length].parent = this;
               if(this.position){
                   this.controls[length].position = {x:this.position.x + this.controls[length].relativePosition.x,
                    y:this.position.y + this.controls[length].relativePosition.y};
               }
            }
        }
    },
    removeControl:function (objID) {//根据对象名称删除子对象数组中的对象
        for (var i = 0; i < this.controls.length; i++) {
            if (objID == this.controls[i].ID) {
                this.controls.splice(i,1);
                break;
            }
        }
    },
    remove:function () {//删除当前对象
        if (this.parent) {
            this.parent.removeControl.call(this.parent, this.ID);
        } else {
            this.ID = null;
        }
    },
    clearControls:function () {//清空子对象数组
        this.controls = [];
    },
    saveShowImageData:function () {//保存该对象以及其子对象的缓存图片数据
        var w = parseInt(this.size.width * JMain.JZoom.x), h = parseInt(this.size.height * JMain.JZoom.y);
        var relativePosition = this.relativePosition;
        var parent = this.parent;
        this.parent = null;
        this.relativePosition = {x:0, y:0};
        JMain.JForm.canvas.width = w;
        JMain.JForm.canvas.height = h;
        this.showImageData = null;
        this.show();
        this.showImageData = JFunction.getImageData(JMain.JForm.context, this.relativePosition, {width:w, height:h});
        this.parent = parent;
        this.relativePosition = relativePosition;
        JMain.JForm.canvas.width = parseInt(JMain.JForm.size.width * JMain.JZoom.x);
        JMain.JForm.canvas.height = parseInt(JMain.JForm.size.height * JMain.JZoom.y);
    },
    beginShow:function () {//显示该对象前执行
        this.position.x = this.relativePosition.x;
        this.position.y = this.relativePosition.y;
        if (this.parent) {
            this.position.x += this.parent.position.x;
            this.position.y += this.parent.position.y;
        }
    },
    showing:function(x, y, w, h){//显示该对象时执行
        for (var member = 0; member < this.controls.length; member++) {
            this.controls[member].show.call(this.controls[member]);
        }
        if (!this.enabled) {
            var imageData = JFunction.getImageData(JMain.JForm.context, {x:x, y:y},{width:w, height:h});
            JFunction.drawImageData(JMain.JForm.context, JFunction.changeToGray(imageData), {x:x, y:y});
        }
    },
    endShow:function () {//显示该对象后执行
        if (this.rotationStep) {
            this.blockAngle += this.rotationStep;
            this.blockAngle = this.blockAngle % 360;
        }
        if (this.canMove && this.moveStep) {
            this.relativePosition.x += this.moveStep.x;
            this.relativePosition.y += this.moveStep.y;
        }
    },
    show:function () {//显示该对象
        this.beginShow();
        if (this.visible&&this.size) {
            if (this.showImageData) {//如果有缓存数据，直接绘图
                JFunction.drawImageData(JMain.JForm.context, this.showImageData,
                    {x:parseInt(this.position.x * JMain.JZoom.x), y:parseInt(this.position.y * JMain.JZoom.y)});
            } else {
                var _context = JMain.JForm.context;
                if (this.ID == null)return;
                var x = parseInt(this.position.x * JMain.JZoom.x);
                var y = parseInt(this.position.y * JMain.JZoom.y);
                var w = parseInt(this.size.width * JMain.JZoom.x);
                var h = parseInt(this.size.height * JMain.JZoom.y);
                if (_context) {
                    if(this.alpha<1){//设置画布透明度
                        _context.save();
                        _context.globalAlpha=this.alpha;
                    }
                    if(this.blockInvert){//翻转画布
                        _context.save();
                        _context.translate(x + parseInt(w / 2),0);
                        _context.scale(-1, 1);
                        _context.translate((x + parseInt(w / 2))*-1,0);
                    }
                    if(this.blockAngle){//旋转画布
                        _context.save();
                        _context.translate(x + parseInt(w / 2), y + parseInt(h / 2));
                        x = -parseInt(w / 2);
                        y = -parseInt(h / 2);
                        _context.rotate(this.blockAngle * Math.PI / 180);
                    }
                    if (this.BGColor) {//绘制背景颜色
                        _context.save();
                        _context.globalAlpha=this.alpha*this.BGColorAlpha;
                        _context.fillStyle = this.BGColor.data;
                        _context.fillRect(x, y, w, h);
                        _context.restore();
                    }
                    if (this.BGImage) {//绘制背景图片
                        _context.save();
                        _context.globalAlpha=this.alpha*this.BGImageAlpha;
                        _context.drawImage(this.BGImage, this.BGImagePosition.x, this.BGImagePosition.y, this.BGImageSize.width,
                            this.BGImageSize.height, x, y, w, h);
                        _context.restore();
                    }
                    this.showing&&this.showing(x, y, w, h);//如果有showing事件，则执行该事件
                    if(this.blockAngle) _context.restore();//如果画布有旋转则恢复到旋转前状态
                    if(this.blockInvert){//如果画布有翻转则恢复到翻转前状态
                        _context.translate(JMain.JForm.size.width-x - parseInt(w / 2),0);
                        _context.scale(-1, 1);
                        _context.translate((JMain.JForm.size.width-x - parseInt(w / 2))*-1,0);
                        _context.restore();
                    }
                    if(this.alpha<1)_context.restore();//恢复画布透明度
                }
            }
        }
        this.endShow();
    }
});
JControls.Form = Class.create(JControls.Object, {//从父类继承
    context:null,//画布环境
    canvas:null,//画布
    webPosition:null,//主窗体在Web页面中得位置
    mousePosition:null,//鼠标在主窗体中得相对坐标
    initialize:function ($super,size, canvasID) {
        $super({x:0, y:0}, size);
        this.canvas =document.getElementById(canvasID);
        this.context = this.canvas.getContext('2d');
        var _top=0,_left=0;
        var _op=this.canvas;
        while(_op!=null){
            _top+=_op.offsetTop;
            _left+=_op.offsetLeft;
            _op=_op.offsetParent;
        }
        this.webPosition={x:_left,y:_top};
        this.setFocus();//默认主窗体获得焦点
        //创建画布对象
        this.canvas.width = parseInt(this.size.width * JMain.JZoom.x);
        this.canvas.height = parseInt(this.size.height * JMain.JZoom.y);

        //为画布添加事件
        this.canvas.onclick = function (event) {
            JMain.JForm.mousePosition = {x:parseInt((event.pageX - JMain.JForm.webPosition.x) / JMain.JZoom.x), y:parseInt((event.pageY - JMain.JForm.webPosition.y) / JMain.JZoom.y)};
            JMain.JForm.onControlClick.call(JMain.JForm);
        };
        this.canvas.onmousedown = function (event) {
            JMain.JForm.mousePosition = {x:parseInt((event.pageX - JMain.JForm.webPosition.x) / JMain.JZoom.x), y:parseInt((event.pageY - JMain.JForm.webPosition.y) / JMain.JZoom.y)};
            JMain.JForm.onControlMouseDown.call(JMain.JForm);
        };
        this.canvas.onmouseup = function (event) {
            JMain.JForm.mousePosition = {x:parseInt((event.pageX - JMain.JForm.webPosition.x) / JMain.JZoom.x), y:parseInt((event.pageY - JMain.JForm.webPosition.y) / JMain.JZoom.y)};
            JMain.JForm.onControlMouseUp.call(JMain.JForm);
        };
        this.canvas.ontouchdown = function (event) {
            JMain.JForm.mousePosition = {x:parseInt((event.pageX - JMain.JForm.webPosition.x) / JMain.JZoom.x), y:parseInt((event.pageY - JMain.JForm.webPosition.y) / JMain.JZoom.y)};
            JMain.JForm.onControlMouseDown.call(JMain.JForm);
        };
        this.canvas.ontouchup = function (event) {
            JMain.JForm.mousePosition = {x:parseInt((event.pageX - JMain.JForm.webPosition.x) / JMain.JZoom.x), y:parseInt((event.pageY - JMain.JForm.webPosition.y) / JMain.JZoom.y)};
            JMain.JForm.onControlMouseUp.call(JMain.JForm);
        };
        document.onkeydown = function (event) {
            event = window.event || event;
            var keyCode = event.keyCode || event.which;
            JMain.JForm.onControlKeyDown(keyCode);
        };
        document.onkeyup = function (event) {
            event = window.event || event;
            var keyCode = event.keyCode || event.which;
            JMain.JForm.onControlKeyUp(keyCode);
        };

    }
});
JControls.Panel = Class.create(JControls.Object, {//从父类继承
    closeButton:null,//关闭按钮
    title:null,//显示标题的控件
    isShowTitle:null,//是否显示标题栏
    titleHeight:40,//标题栏高度
    initialize:function ($super,  argP, argWH) {
        $super( argP, argWH);
        this.titleHeight=40;
        this.initTitle();
        this.hideTitle();
    },
    initTitle:function(){
        this.isShowTitle=true;
        this.title=new JControls.Label({x:0,y:0}).setSize({width:this.size.width,height:this.titleHeight})
            .setBGColor(JColor.blue).setFontSize(27).setTextBaseline("middle").setFontType("bold").setTextPos({x:20,y:0});
        this.closeButton=new JControls.Button({x:this.size.width-60,y:0},{width:60,height:this.titleHeight})
            .setBGColor(JColor.white);
        this.closeButton.buttonLabel.setText("关闭").setFontColor(JColor.red).setFontSize(22);
        this.closeButton.onClick=function(){
            this.parent.visible=false;
            this.parent.onCloseButtonClick&&this.parent.onCloseButtonClick();
            return true;
        }
        this.addControlInLast([this.title,this.closeButton]);
    },
    hideTitle:function(){
        if(this.isShowTitle){
            this.isShowTitle=false;
            this.title.visible=false;
            this.closeButton.visible=false;
            for(var i=0;i<this.controls.length;i++){
                this.controls[i].relativePosition.y-=this.titleHeight;
            }
        }
    },
    showTitle:function(title){
        this.title.setText(title);
        if(!this.isShowTitle){
            for(var i=0;i<this.controls.length;i++){
                this.controls[i].relativePosition.y+=this.titleHeight;
            }
            this.isShowTitle=true;
            this.title.visible=true;
            this.closeButton.visible=true;
        }
    },
    onCloseButtonClick:null,
    clearControls:function($super){
        $super();
        this.initTitle();
        this.hideTitle();
    }

});
JControls.Button = Class.create(JControls.Object, {
    keyCode:null,
    buttonLabel:null,//Label对象，用于显示按钮上的文字
    initialize:function ($super,  argP, argWH) {
        $super( argP, argWH);
        this.buttonLabel=new JControls.Label({x:0,y:0})//创建了一个Label对象
            .setSize(argWH).setTextBaseline("middle").setTextAlign("center").setFontType("bold").setFontSize(20);
        this.addControlInLast([this.buttonLabel]);//添加到当前按钮子对象数组中
    },
    setText:function(text){
        this.buttonLabel.setText(text);
        return this;
    },
    setSize:function(size){
        if(size){
            this.size = size;
            this.buttonLabel.setSize({width:size.width,height:size.height});
        }
        return this;
    },
    setKeyCode:function(keyCode){
        this.keyCode=keyCode;
        return this;
    }
});
JControls.PictureBox = Class.create(JControls.Object, {
    picture:null,//图片数据
    picAlpha:null,//t透明度
    picState:null,//显示方式（flex，cut）
    picPosition:null,//cut方式下，从该坐标开始截取图片数据
    picSize:null,//cut方式下，截取图片的长宽
    initialize:function ($super,  argP, argWH, argimage) {
        $super( argP, argWH);
        this.setPicture(argimage,{x:0,y:0});
        this.picAlpha=1.0;
        this.picState = "cut";
    },
    setPicture:function(image,position){//设置该对象图片属性
        if(image){
            this.picture=image.data;
            this.picSize={width:image.cellSize.width,height:image.cellSize.height};
        }
        if(position)this.picPosition=position;
        else this.picPosition={x:0,y:0};

        return this;
    },
    showing:function ($super, x, y, w, h){//覆盖父类中showing函数
        var _context=JMain.JForm.context;
        if(this.picture){
            _context.save();
            _context.globalAlpha=this.alpha*this.picAlpha;
            if (this.picState == "flex") {
                _context.drawImage(this.picture, 0, 0, this.picture.width, this.picture.height, x, y, w, h);
            }else if (this.picState == "cut") {
                _context.drawImage(this.picture, this.picPosition.x, this.picPosition.y, this.picSize.width,
                    this.picSize.height, x, y, w, h);
            }
            _context.restore();
        }
        if (this.selected) {
            _context.strokeStyle = JColor.red.data;
            _context.lineWidth = 1;
            _context.strokeRect(x + _context.lineWidth, y + _context.lineWidth,
                w - _context.lineWidth*2, h - _context.lineWidth*2);
        }
        $super(x, y, w, h);//执行父类中showing函数
    }
});
JControls.AnimationBox = Class.create(JControls.Object, {
    imageData:null,
    animationData:null,
    animationPlayNum:null,//当前要显示的动画图片编号
    animationTime:null,//每次显示时计数加1
    animationOffset:null,//偏移量
    loop:null,//是否循环播放动画
    stopPlayAnimation:null,//是否暂停播放动画
    initialize:function ($super,  argP, argWH, argAnimationData,imagedata) {
        $super( argP, argWH);
        this.setAnimation(argAnimationData,imagedata)
        this.animationPlayNum = 0;
        this.animationTime = 0;
        this.animationOffset = {WNum:0, HNum:0};
        this.loop = true;
        this.stopPlayAnimation = false;
    },
    showing:function ($super, x, y, w, h) {
        if (this.animationData&&this.imageData) {
            var w1 = this.imageData.cellSize.width;
            var h1 = this.imageData.cellSize.height;
            var x1 = (this.animationData.beginPoint.WNum + this.animationOffset.WNum + this.animationPlayNum) % this.imageData.picNum.WNum;
            var y1 = this.animationData.beginPoint.HNum + this.animationOffset.HNum + parseInt((this.animationData.beginPoint.WNum
                + this.animationOffset.WNum + this.animationPlayNum) / this.imageData.picNum.WNum);
            JMain.JForm.context.drawImage(this.imageData.data, w1 * x1, h1 * y1, w1, h1, x, y, w, h);
            if(this.isHighLight){//绘制高亮图片
                JMain.JForm.context.save();
                JMain.JForm.context.globalCompositeOperation="lighter";
                JMain.JForm.context.globalAlpha=this.alpha*0.2;
                JMain.JForm.context.drawImage(this.imageData.data, w1 * x1, h1 * y1, w1, h1, x, y, w, h);
                JMain.JForm.context.restore();
            }
            if (!this.stopPlayAnimation) {
                this.animationTime++;
            }
            if (this.animationTime >= this.animationData.times) {//当计数大于或等于动画次数
                if (!this.stopPlayAnimation)this.animationPlayNum++;//要显示的动画图片编号加1，
                if (this.animationPlayNum >= this.animationData.allPlayNum) {
                    if (this.loop)this.animationPlayNum = 0;//循环播放
                    else this.remove();//已播放到末尾，删除该对象
                }
                this.animationTime = 0;//重置计数
            }
        }
        $super( x, y, w, h);
    },
    setAnimation:function (animationData,imageData) {//设置动画资源
        if(imageData)this.imageData=imageData;
        if(animationData)this.animationData = animationData;
        return this;
    }
});
JControls.Label = Class.create(JControls.Object, {//从父类继承
    text:"",//显示文本
    textPos:null,//用于调整文字在Label中得位置
    fontType:"normal", //文字属性,如:"normal","bold"等
    fontColor:null,//字体颜色
    textAlign:"left",//水平对齐：left，center，right
    textBaseline:"top", //竖直对齐：top，middle，bottom
    fontSize:10,//字体大小
    isSelect:false,
    initialize:function ($super,  argP, argtext) {//覆盖父类中构造函数
        $super( argP, {width:100, height:20});//执行父类中构造函数
        this.text = argtext;
        this.textPos = {x:2, y:2};
        this.fontSize = 15;
        this.fontColor = JColor.black;
    },
    setText:function (text) {
        this.text = text;
        return this;
    },
    setTextPos:function (textPos) {
        this.textPos = textPos;
        return this;
    },
    setFontType:function (type) {
        this.fontType = type;
        return this;
    },
    setFontColor:function (color) {
        this.fontColor = color;
        return this;
    },
    setTextAlign:function(textAlign){
        this.textAlign=textAlign;
        return this;
    },
    setTextBaseline:function(textBaseline){
        this.textBaseline=textBaseline;
        return this;
    },
    setFontSize:function(fontSize){
        this.fontSize=fontSize;
        return this;
    },
    showing:function($super,x, y, w, h){//覆盖父类中showing方法
        $super();//执行父类中showing方法
        var _context = JMain.JForm.context;
        if (this.text) {
            _context.fillStyle = this.fontColor.data;
            _context.font = this.fontType + " " + parseInt(this.fontSize * (JMain.JZoom.y + JMain.JZoom.x) / 2) + "px serif";
            _context.textBaseline = this.textBaseline;
            _context.textAlign = this.textAlign;
            var x1,y1;
            if(_context.textAlign=="left"){
                x1= x + parseInt(this.textPos.x * JMain.JZoom.x);
            }else if(_context.textAlign=="center"){
                x1= x + parseInt(w/2);
            }else if(_context.textAlign=="right"){
                x1= x + w- parseInt(this.textPos.x * JMain.JZoom.x);
            }
            if(_context.textBaseline=="top"){
                y1=y + parseInt(this.textPos.y * JMain.JZoom.y);
            }else if(_context.textBaseline=="middle"){
                y1=y + parseInt(h/2);
            }else if(_context.textBaseline=="bottom"){
                y1=y +h- parseInt(this.textPos.y * JMain.JZoom.y);
            }
            _context.fillText(this.text,x1,y1, this.size.width);
        }
        if(this.isSelect){
            _context.strokeStyle = JColor.red.data;
            _context.lineWidth = 1;
            _context.strokeRect(x , y,w - _context.lineWidth, h - _context.lineWidth);
        }
    }
});
JControls.MessageBox = Class.create(JControls.Object, {
    initialize:function ($super,  argWH, argAString,argP) {
        //如果没有指定显示位置，则居中显示
        if(!argP)argP={x:parseInt((JMain.JForm.size.width - argWH.width) / 2), y:parseInt((JMain.JForm.size.height - argWH.height) / 2)};
        $super(argP, argWH);
        this.BGColor = JColor.white;
        JMain.JForm.addControlInLast([this]);//把消息框添加到主窗体内
        var messageTitle = new JControls.Label({x:0, y:0}, "系统提示");
        messageTitle.BGColor = JColor.blue;
        messageTitle.fontColor = JColor.red;
        messageTitle.size.width = argWH.width;
        messageTitle.size.height = 25;
        messageTitle.fontSize = 20;
        messageTitle.fontType = "bold";
        this.addControlInLast([messageTitle]);//添加消息标题栏
        var h = messageTitle.size.height;
        for (var i = 0; i < argAString.length; i++) {//添加消息内容
            var m = new JControls.Label({x:0, y:h}, argAString[i]);
            m.size.width = argWH.width;
            m.textPos.x = 10;
            h += m.size.height;
            this.addControlInLast([m]);
        }
        this.size.height = h+20;
    },
    onClick:function () {//点击后，删除对象
        this.remove.call(this);
        JMain.JForm.show();
    }
});
JControls.Audio = Class.create({
    audioData:null,//Audio数据
    initialize:function (audio,loop) {
        this.setAudio(audio,loop);
    },
    setAudio:function(audio,loop){
        if(audio){
            this.audioData = audio.data;
            if(loop)this.audioData.loop=true;
        }
    },
    play:function () {
        if (this.audioData)this.audioData.play();
    },
    pause:function () {
        if (this.audioData)this.audioData.pause();
    }
});
JControls.Tick = Class.create({
    time:40,//间隔时间
    fun:[],//要循环显示的对象数组
    handle:null,//句柄
    initialize:function(time){
        this.time=time;
        this.fun=[];
        this.handle=null;
    },
    begin:function(){
        this.handle=setTimeout(this.runOneTime, this.time);
    },
    end:function(){
        if(this.handle)clearTimeout(this.handle);
    },
    add:function(aObj){
        if(aObj){
            for (var i = 0; i < aObj.length; i++) {
                this.fun[this.fun.length]=aObj[i];
            }
        }
    },
    delete:function(obj){
        if(obj){
            for(var i=0;i<this.fun.length;i++){
                if(this.fun[i].ID==obj.ID){
                    for(var j=i;j<this.fun.length-1;j++){
                        this.fun[j]=this.fun[j+1];
                    }
                    this.fun.length--;
                }
            }
        }
    },
    runOneTime:function(){
        JMain.JTick.end();
        for(var i=0;i<JMain.JTick.fun.length;i++){
            if(JMain.JTick.fun[i])JMain.JTick.fun[i].show.call(JMain.JTick.fun[i]);
        }
        JMain.JTick.handle=setTimeout(JMain.JTick.runOneTime, JMain.JTick.time);
    }
});

var JFunction = {};
JFunction.Random = function (formNum, toNum) {
    return parseInt(Math.random() * (toNum - formNum + 1) + formNum);
};
JFunction.setLSData = function (key, jsonValue) {
    window.localStorage.setItem(key, JSON.stringify(jsonValue));
};
JFunction.getLSData = function (key) {
    return JSON.parse(window.localStorage.getItem(key));
};
JFunction.getNowTime=function(){
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours(); //时
    var mm = now.getMinutes();  //分
    return year+"/"+month+"/"+day+" "+hh+":"+mm;
};
JFunction.PreLoadData = function (url) {
    var loadedNum = 0;//已加载资源数量
    var resourceNum = 0;//资源数量
    var postAction = function () {};//资源加载完成后的回调函数
    function imageLoadPost() {//每成功加载一个图片执行一次
        loadedNum++;
        if (loadedNum >= resourceNum) {//全部图片文件加载完后，继续加载声音
            loadedNum=0;
            resourceNum=0;
            loadAudio()
        }
    }
    function audioLoadPost() {//每成功加载一个声音执行一次
        loadedNum++;
        if (loadedNum >= resourceNum) {//全部声音文件加载完后，执行回调函数
            postAction()
        }
    }
    function loadImage(){//加载图片
        for (var m2 in ResourceData.Images)  resourceNum++;
        if(resourceNum==0){
            imageLoadPost();
        }else{
            for (var m2 in ResourceData.Images) {
                ResourceData.Images[m2].data = new Image();
                ResourceData.Images[m2].data.src = url+ResourceData.Images[m2].path;
                ResourceData.Images[m2].data.onload = function () {
                    imageLoadPost();
                }
                ResourceData.Images[m2].data.onerror = function () {
                    alert("资源加载失败！")
                    return;
                }
            }
        }

    }
    function loadAudio(){//加载声音
        for (var m1 in ResourceData.Sound)  resourceNum++;
        if(resourceNum==0){
            audioLoadPost();
        }else{
            for (var m1 in ResourceData.Sound) {
                ResourceData.Sound[m1].data = new Audio();
                var playMsg = ResourceData.Sound[m1].data.canPlayType('video/ogg');//测试浏览器是否支持该格式声音
                if ("" != playMsg) {
                    ResourceData.Sound[m1].data.src=url+ ResourceData.Sound[m1].path + ResourceData.Sound[m1].soundName + ".ogg";
                } else {
                    ResourceData.Sound[m1].data.src=url+ ResourceData.Sound[m1].path + ResourceData.Sound[m1].soundName + ".mp3";
                }
                ResourceData.Sound[m1].data.addEventListener("canplaythrough", function () {
                    audioLoadPost();
                }, false);
                ResourceData.Sound[m1].data.addEventListener("error", function () {
                    alert("资源加载失败！")
                    return;
                }, false);
            }
        }
    }
    loadImage();
    return {
        done:function (f) {
            if (f)postAction = f;
        }
    }
};

//获取图片数据
JFunction.getImageData=function (_context, _point, _size) {
    return _context.getImageData(_point.x, _point.y, _size.width, _size.height);
};
//通过图片数据绘制图片
JFunction.drawImageData=function (_context, _imgdata, _point, _dPoint, _dSize) {
    if (!_dPoint)_dPoint = {x:0, y:0};
    if (!_dSize)_dSize = {width:_imgdata.width, height:_imgdata.height};
    _context.putImageData(_imgdata, _point.x, _point.y, _dPoint.x, _dPoint.y, _dSize.width, _dSize.height);
};
//颜色反转
JFunction.invert=function (_imgData) {
    var imageData = _imgData;
    for (var i = 0; i < imageData.data.length; i += 4) {
        var red = imageData.data[i], green = imageData.data[i + 1], blue = imageData.data[i + 2], alpha = imageData.data[i + 3];
        imageData.data[i] = 255 - red;
        imageData.data[i + 1] = 255 - green;
        imageData.data[i + 2] = 255 - blue;
        imageData.data[i + 3] = alpha;
    }
    return imageData;
};
//灰色
JFunction.changeToGray=function (_imgData) {
    var imageData = _imgData;
    for (var i = 0; i < imageData.data.length; i += 4) {
        var wb = parseInt((imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3);
        imageData.data[i] = wb;
        imageData.data[i + 1] = wb;
        imageData.data[i + 2] = wb;
    }
    return imageData;
};
//加红
JFunction.changeToRed=function (_imgData) {
    var imageData = _imgData;
    for (var i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] += 50;
        if (imageData.data[i] > 255) imageData.data[i] = 255;

    }
    return imageData;
};
//图片旋转
JFunction.rotate=function (_context, _imageData, angle) {
    var returnData = _context.createImageData(_imageData.width, _imageData.height);
    var w, h, i, j, newPoint, x, y;
    var centerX = _imageData.width / 2.0;
    var centerY = _imageData.height / -2.0;
    var PI = 3.14159;
    for (h = 0; h < returnData.height; h++) {
        for (w = 0; w < returnData.width; w++) {
            i = (_imageData.width * h + w) * 4;
            newPoint = GetNewPoint({x:w, y:h * -1});
            x = parseInt(newPoint.x);
            y = parseInt(newPoint.y);
            if (x >= 0 && x < _imageData.width && -y >= 0 && -y < _imageData.height) {
                j = (_imageData.width * -y + x) * 4;
                returnData.data[i] = _imageData.data[j];
                returnData.data[i + 1] = _imageData.data[j + 1];
                returnData.data[i + 2] = _imageData.data[j + 2];
                returnData.data[i + 3] = _imageData.data[j + 3];
            }
        }
    }
    return returnData;
    function GetNewPoint(_point) {
        var l = (angle * PI) / 180;
        var newX = (_point.x - centerX) * Math.cos(l) - (_point.y - centerY) * Math.sin(l);
        var newY = (_point.x - centerX) * Math.sin(l) + (_point.y - centerY) * Math.cos(l);
        return {x:newX + centerX, y:newY + centerY};
    }
};
//高亮整个图片
JFunction.highLight=function (_imgData, n) {
    var imageData = _imgData;
    for (var i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i]  = (imageData.data[i] +n)>255?255:(imageData.data[i] +n);
        imageData.data[i + 1] = (imageData.data[i+1] +n)>255?255:(imageData.data[i+1] +n);
        imageData.data[i + 2 ] = (imageData.data[i+2] +n)>255?255:(imageData.data[i+2] +n);
    }
    return imageData;
};