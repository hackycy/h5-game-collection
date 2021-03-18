/**
 * Created by jicemoon on 2015/1/8.
 */
/****
 * ==========事件监听============
 * handles: {tap: null, swipe: null, touchStart: null, touchMove: null, touchEnd: null}
 * setEventHandle:设置所有事件的监听函数为同一个;
 *=============事件监听参数属性===============
 * type:"touchStart"/"touchMove"/"touchEnd"/"tap"/"swipe";
 * pageX/pageY: 事件发生相对于页面的x、y坐标;
 * screenX/screenY: 事件发生相对于屏幕的x、y坐标;
 * moveTotalPageX/moveTotalPageY: 在touchEnd和touchMove中，相对于touchStart事件发生点，页面上移动的距离;
 * moveTotalScreenX/moveTotalScreenY: 在touchEnd和touchMove中，相对于touchStart事件发生点，屏幕上移动的距离;
 * stopPropagation方法: 停止冒泡;
 * preventDefault方法: 阻止浏览器默认行为;
 */
function JicemoonMobileTouch(element, handles) {
    var isNoteEmpty = false;
    var defaultHandles = {
        tap: null, swipe: null, touchStart: null, touchMove: null, touchEnd: null
    };
    for (var property in handles){
        defaultHandles[property] = handles[property];
        if(handles[property])
            isNoteEmpty = true;
    }
    handles = defaultHandles;
    if(isNoteEmpty){
        bindEvent();
    }
    var $this = this;
    var isHasBindEvents;
    this.swipeTime = 200;
    this.tap = function (handle){
        if(!isHasBindEvents)
            bindEvent();
        handles.tap = handle;
    };
    this.touchStart = function (handle){
        if(!isHasBindEvents)
            bindEvent();
        handles.touchStart = handle;
    }
    this.touchMove = function (handle){
        if(!isHasBindEvents)
            bindEvent();
        handles.touchMove = handle;
    }
    this.touchEnd = function (handle){
        if(!isHasBindEvents)
            bindEvent();
        handles.touchEnd = handle;
    }
    this.swipe = function (handle){
        if(!isHasBindEvents)
            bindEvent();
        handles.swipe = handle;
    }
    this.allEvents = function (handle) {
        if(!isHasBindEvents)
            bindEvent();
        handles.tap = handle;
        handles.touchStart = handle;
        handles.touchMove = handle;
        handles.touchEnd = handle;
        handles.swipe = handle;
    }
    this.removeEvents= function (types){
        var typeArr = types.split(" ");
        for(var i = 0; i < typeArr.length; i++){
            var temp = typeArr[i].replace(" ");
            switch (temp){
                case "tap":
                    handles.tap = null;
                    break;
                case "touchStart":
                    handles.touchStart = null;
                    break;
                case "touchMove":
                    handles.touchMove = null;
                    break;
                case "touchEnd":
                    handles.touchEnd = null;
                    break;
                case "swipe":
                    handles.swipe = null;
                    break;
            }
        }
        if(isHasBindEvents && !handles.tap && !handles.touchStart&&!handles.touchMove.touchEnd&&!handles.swipe){
            removeEvent();
        }
    }
    this.removeAllEvents = function (){
        handles.tap = null;
        handles.touchStart = null;
        handles.touchMove = null;
        handles.touchEnd = null;
        handles.swipe = null;
        if(isHasBindEvents)
            removeEvent();
    }
    var tempInfos = {};
    tempInfos.mouseDown = false;
    function stopPropagation() {
        if (tempInfos.evt) {
            if(tempInfos.evt.stopPropagation){
                tempInfos.evt.stopPropagation();
            }
            else{
                tempInfos.evt.cancelBubble = true;
            }

        }
    }
    function preventDefault() {
        if (tempInfos.evt) {
            if(tempInfos.evt.preventDefault){
                tempInfos.evt.preventDefault();
            }
            else{
                tempInfos.evt.returnValue = false;
            }
        }
    }

    tempInfos.startTime = 0;
    function onEventHandle(evt) {
        evt = evt||window.event;
        tempInfos.evt = evt;
        var pro = {};
        pro.stopPropagation = stopPropagation;
        pro.preventDefault = preventDefault;
        pro.touch = $this;
        pro.target = element;
        switch (evt.type) {
            case "touchstart":
                pro.type = "touchStart";
                tempInfos.startTime = (new Date()).getTime();
                pro.pageX = evt.targetTouches[0].pageX;
                pro.pageY = evt.targetTouches[0].pageY;
                pro.screenX = evt.targetTouches[0].screenX;
                pro.screenY = evt.targetTouches[0].screenY;
                tempInfos.startScreenX = pro.screenX;
                tempInfos.startScreenY = pro.screenY;
                tempInfos.startPageX = pro.pageX;
                tempInfos.startPageY = pro.pageY;
                if (handles.touchStart)
                    handles.touchStart(pro);
                break;
            case "touchmove":
                pro.type = "touchMove";
                pro.pageX = evt.targetTouches[0].pageX;
                pro.pageY = evt.targetTouches[0].pageY;
                pro.screenX = evt.targetTouches[0].screenX;
                pro.screenY = evt.targetTouches[0].screenY;
                pro.moveTotalScreenX = pro.screenX - tempInfos.startScreenX;
                pro.moveTotalScreenY = pro.screenY - tempInfos.startScreenY;
                pro.moveTotalPageX = pro.pageX - tempInfos.startPageX;
                pro.moveTotalPageY = pro.pageY - tempInfos.startPageY;
                if (handles.touchMove)
                    handles.touchMove(pro);
                break;
            case "touchend":
                pro.type = "touchEnd";
                pro.pageX = evt.changedTouches[0].pageX;
                pro.pageY = evt.changedTouches[0].pageY;
                pro.screenX = evt.changedTouches[0].screenX;
                pro.screenY = evt.changedTouches[0].screenY;

                tempInfos.moveTotalX = pro.screenX - tempInfos.startScreenX;
                tempInfos.moveTotalY = pro.screenY - tempInfos.startScreenY;
                tempInfos.move = !(Math.abs(tempInfos.moveTotalX) <= 1 && Math.abs(tempInfos.moveTotalY) <= 1);
                touchEnd(pro);
                break;
            case "mousedown":
                pro.type = "touchStart";
                tempInfos.startTime = (new Date()).getTime();
                tempInfos.mouseDown = true;
                pro.pageX = evt.clientX;
                pro.pageY = evt.clientY;
                pro.screenX = evt.screenX;
                pro.screenY = evt.screenY;
                tempInfos.startScreenX = pro.screenX;
                tempInfos.startScreenY = pro.screenY;
                tempInfos.startPageX = pro.pageX;
                tempInfos.startPageY = pro.pageY;
                tempInfos.move = false;
                if (handles.touchStart)
                    handles.touchStart(pro);
                break;
            case "mousemove":
                pro.time = (new Date()).getTime() - tempInfos.startTime;
                if (tempInfos.mouseDown) {
                    pro.type = "touchMove";
                    pro.pageX = evt.clientX;
                    pro.pageY = evt.clientY;
                    pro.screenX = evt.screenX;
                    pro.screenY = evt.screenY;
                    pro.moveTotalScreenX = pro.screenX - tempInfos.startScreenX;
                    pro.moveTotalScreenY = pro.screenY - tempInfos.startScreenY;
                    pro.moveTotalPageX = pro.pageX - tempInfos.startPageX;
                    pro.moveTotalPageY = pro.pageY - tempInfos.startPageY;
                    if (!tempInfos.move) tempInfos.move = true;
                    if (handles.touchMove)
                        handles.touchMove(pro);
                }
                break;
            case "mouseout":
                tempInfos.mouseDown = false;
                break;
            case "mouseup":
                pro.type = "touchEnd";
                tempInfos.mouseDown = false;
                pro.pageX = evt.clientX;
                pro.pageY = evt.clientY;
                pro.screenX = evt.screenX;
                pro.screenY = evt.screenY;
                tempInfos.moveTotalX = pro.screenX - tempInfos.startScreenX;
                tempInfos.moveTotalY = pro.screenY - tempInfos.startScreenY;
                touchEnd(pro);
                break;
        }
    }

    function touchEnd(pro) {
        pro.time = (new Date()).getTime() - tempInfos.startTime;
        if (tempInfos.move) {
            pro.moveTotalScreenX = tempInfos.moveTotalX;
            pro.moveTotalScreenY = tempInfos.moveTotalY;
            pro.moveTotalPageX = pro.pageX - tempInfos.startPageX;
            pro.moveTotalPageY = pro.pageY - tempInfos.startPageY;
            var abs = Math.abs(tempInfos.moveTotalX / tempInfos.moveTotalY);
            if (abs < 1) {
                if (tempInfos.moveTotalY < 0) {
                    pro.direction = "up";
                }
                else {
                    pro.direction = "down";
                }
            }
            else {
                if (tempInfos.moveTotalX < 0) {
                    pro.direction = "left";
                }
                else {
                    pro.direction = "right";
                }
            }
            if (pro.time < $this.swipeTime && handles.swipe) {
                pro.type = "swipe";
                handles.swipe(pro);
            }
            else if (handles.touchEnd) {
                handles.touchEnd(pro);
            }
        }
        else if (handles.tap) {
            pro.type = "tap";
            handles.tap(pro);
        }
    }

    function bindEvent() {
        if (isTouchDevice()) {
            element.addEventListener("touchstart", onEventHandle);
            element.addEventListener("touchmove", onEventHandle);
            element.addEventListener("touchend", onEventHandle);
        }
        else if(element.addEventListener){
            element.addEventListener("mousedown", onEventHandle);
            element.addEventListener("mousemove", onEventHandle);
            element.addEventListener("mouseup", onEventHandle);
            element.addEventListener("mouseout", onEventHandle);
        }
        else if(element.attachEvent){
            element.attachEvent("onmousedown", onEventHandle);
            element.attachEvent("onmousemove", onEventHandle);
            element.attachEvent("onmouseup", onEventHandle);
            element.attachEvent("onmouseout", onEventHandle);
        }
        else {
            element.onmousedown = onEventHandle;
            element.onmousemove = onEventHandle;
            element.onmouseup = onEventHandle;
            element.onmouseup = onEventHandle;
        }
        isHasBindEvents = true;
    }
    function removeEvent(){
        if (isTouchDevice()) {
            element.removeEventListener("touchstart", onEventHandle);
            element.removeEventListener("touchmove", onEventHandle);
            element.removeEventListener("touchend", onEventHandle);
        }
        else if(element.removeEventListener){
            element.removeEventListener("mousedown", onEventHandle);
            element.removeEventListener("mousemove", onEventHandle);
            element.removeEventListener("mouseup", onEventHandle);
            element.removeEventListener("mouseout", onEventHandle);
        }
        else if(element.detachEvent){
            element.detachEvent("onmousedown", onEventHandle);
            element.detachEvent("onmousemove", onEventHandle);
            element.detachEvent("onmouseup", onEventHandle);
            element.detachEvent("onmouseout", onEventHandle);
        }
        else{
            element.onmousedown = null;
            element.onmousemove = null;
            element.onmouseup = null;
            element.onmouseup = null;
        }
        isHasBindEvents = false;
    }
    //判断是否支持触摸事件
    function isTouchDevice() {
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch (e) {
            return false;
        }
    }
}

if(window["jQuery"]){
    (function ($) {
        $.prototype.addTouchEvent = function (types, handle) {
            var typeArr = types.split(" ");
            var handles = {};
            for(var i = 0; i < typeArr.length; i++)
            {
                var temp = typeArr[i].replace(" ");
                if(temp.length > 0)
                {
                    handles[temp] = handle;
                }
            }
            return this.each(function () {
                new JicemoonMobileTouch($(this)[0], handles);
            });
        };
        $.prototype.addTap = function (handle){
            return this.each(function (){
                new JicemoonMobileTouch($(this)[0], {tap:handle});
            });
        }
        $.prototype.addTouchEvents = function (handle) {
            return this.each(function () {
                (new JicemoonMobileTouch($(this)[0])).allEvents(handle);
            });
        };
    })(jQuery);
}