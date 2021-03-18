/**
 * 可视化组件基类
 */
(function() {

    var DisplayObject = function(cfg) {

        /**
         * 绘制时的x轴位置
         */
        this.x = 0;
        /**
         * 绘制时的y轴位置
         */
        this.y = 0;
        /**
         * 宽度
         */
        this.width = 0;
        /**
         * 高度
         */
        this.height = 0;
        /**
         * 透明度
         */
        this.alpha = 1;
        /**
         * 旋转角度
         */
        this.rotation = 0;
        /**
         * 水平翻转
         */
        this.flipX = false;
        /**
         * 垂直翻转
         */
        this.flipY = false;
        /**
         * 水平缩放
         */
        this.scaleX = 1;
        /**
         * 垂直缩放
         */
        this.scaleY = 1;
        /**
         * read only
         * 显示状态
         */
        this.visible = true;

        DisplayObject.superclass.constructor.call(this, cfg);
    }
    /**
     * 继承自Component类
     */
    my.inherit(DisplayObject, my.Component);

    /**
     * 事件定义
     * onshow 显示
     * onhide 隐藏
     * onupdate 状态更新
     * onrender 渲染
     * ondraw 在画布上绘制
     */
    DisplayObject.prototype.onshow = my.fn;
    DisplayObject.prototype.onhide = my.fn;
    DisplayObject.prototype.onupdate = my.fn;
    DisplayObject.prototype.onrender = my.fn;
    DisplayObject.prototype.ondraw = my.fn;

    /**
     * 显示组件
     */
    DisplayObject.prototype.show = function() {
        this.visible = true;
        this.onshow();
    }
    /**
     * 隐藏组件
     */
    DisplayObject.prototype.hide = function() {
        this.visible = false;
        this.onhide();
    }
    /**
     * 更新状态
     * @param {Number} deltaTime
     */
    DisplayObject.prototype.update = function(deltaTime) {
        if(this.onupdate) {
            this.onupdate();
        }
    }
    /**
     * @private
     * 变形处理
     */
    DisplayObject.prototype.__transform = function(context) {
        context.translate(this.x, this.y);

        // 透明度
        if(this.alpha < 1) {
            context.globalAlpha = this.alpha;
        }

        // 旋转
        if(this.rotation % 360 > 0) {
            var offset = [this.width / 2, this.height / 2];
            context.translate(offset[0], offset[1]);
            context.rotate(this.rotation % 360 / 180 * Math.PI);
            context.translate(-offset[0], -offset[1]);
        }

        // 翻转
        if(this.flipX || this.flipY) {
            context.translate(this.flipX ? this.width : 0, this.flipY ? this.height : 0);
            context.scale(this.flipX ? -1 : 1, this.flipY ? -1 : 1);
        }

        // 缩放
        if(this.scaleX != 1 || this.scaleY != 1) {
            context.scale(this.scaleX, this.scaleY);
        }
    }
    /**
     * 渲染组件
     * @param {Context Object} context
     */
    DisplayObject.prototype.render = function(context) {
        if(!this.visible || this.alpha <= 0) {
            return false;
        }

        // 保存当前画布状态
        context.save();
        // 变形渲染帧
        this.__transform(context);
        this.draw(context);
        // 恢复画布状态
        context.restore();

        this.onrender();
    }
    /**
     * 在画布上绘制组件
     * @param {Context Object} context
     */
    DisplayObject.prototype.draw = function(context) {
        this.ondraw();
    }
    /**
     * 组件销毁方法
     */
    DisplayObject.prototype.destory = function() {
        this.onshow = this.onhide = this.onupdate = this.onrender = this.ondraw = null;
        DisplayObject.superclass.destory.call(this);
    }

    my.DisplayObject = DisplayObject;
})();
