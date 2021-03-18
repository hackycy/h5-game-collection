/**
 * 分层组件
 */
(function() {

    var Layer = function(cfg) {

        /**
         * 游戏对象
         */
        this.viewport = null;
        /**
         * 场景离视口的距离
         */
        this.distance = 1;
        /**
         * @private
         * 分层画布对象
         */
        this.__canvas = null;
        /**
         * @private
         * 2d绘图上下文
         */
        this.__context = null;
        /**
         * @private
         * 分层状态是否改变
         */
        this.__change = true;

        Layer.superclass.constructor.call(this, cfg);
    }
    my.inherit(Layer, my.DisplayObjectContainer);

    /**
     * 初始化分层
     */
    Layer.prototype.init = function() {
        var childs = this.__childs, child;

        for(var i = 0, len = childs.length; i < len; i++) {
            child = childs[i];

            child.x /= this.distance;
            child.y /= this.distance;

            if(!child.initialized) {
                child.init();
            }
        }

        my.DisplayObject.prototype.init.call(this);
    }
    /**
     * 设置画布
     */
    Layer.prototype.setCanvas = function(canvas) {
        if( typeof canvas === 'string') {
            canvas = document.getElementById(canvas);
        }

        if(canvas && canvas.getContext) {
            this.__canvas = canvas;
            this.__context = canvas.getContext('2d');
        }
    }
    /**
     * 清空画布
     */
    Layer.prototype.clear = function() {
        if(this.__change) {
            this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
        }
    }
    /**
     * 改变分层状态
     */
    Layer.prototype.change = function() {
        this.__change = true;
    }
    /**
     * render
     */
    Layer.prototype.render = function() {
        if(this.__change) {
            Layer.superclass.render.call(this, this.__context);
            this.__change = false;
        }
    }
    /**
     * 绘制层内组件
     * @param {Context Object} context
     */
    Layer.prototype.draw = function(context) {
        var childs = this.__childs, child = null, viewport = this.viewport;
        var vx = viewport.x / this.distance, vy = viewport.y / this.distance, vw = viewport.width, vh = viewport.height;
        var cx = cy = cw = ch = 0;

        for(var i = 0, len = childs.length; i < len; i++) {
            child = childs[i];
            cx = child.x;
            cy = child.y;
            cw = child.width;
            ch = child.height;

            if(Math.abs((cx + cw / 2) - (vx + vw / 2)) < (cw + vw) / 2 && Math.abs((cy + ch / 2) - (vy + vh / 2)) < (ch + vh) / 2) {
                child.x = cx - vx;
                child.y = cy - vy;

                child.render(context);

                child.x = cx;
                child.y = cy;
            }
        }
        my.DisplayObject.prototype.draw.call(this);
    }
    /**
     * destory
     */
    Layer.prototype.destory = function() {
        this.viewport = this.__canvas = this.__context = null;
        Layer.superclass.destory.call(this);
    }

    my.Layer = Layer;
})();
