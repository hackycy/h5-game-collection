/**
 * 游戏基类
 */
(function() {

    var Game = function(cfg) {

        /**
         * 游戏视口对象
         */
        this.viewport = null;
        /**
         * read only
         * 帧频
         */
        this.FPS = 30;
        /**
         * read only
         * 运行状态
         */
        this.playing = false;
        /**
         * @private
         * 休眠时间
         */
        this.__sleep = 1000 / this.FPS;
        /**
         * @private
         * 上一帧执行完毕的时间
         */
        this.__lastTime = 0;
        /**
         * @private
         * 定时器句柄
         */
        this.__timeout = null;

        Game.superclass.constructor.call(this, cfg);
    }
    my.inherit(Game, my.DisplayObjectContainer);

    /**
     * 事件定义
     * onstart 开始游戏
     * onstop 停止游戏
     */
    Game.prototype.onstart = my.fn;
    Game.prototype.onstop = my.fn;

    /**
     * 设置帧频
     * @param {Number} fps
     */
    Game.prototype.setFPS = function(fps) {
        this.FPS = fps;
        this.__sleep = 1000 / fps;
    }
    /**
     * 开始游戏
     */
    Game.prototype.start = function() {
        if(!this.playing) {
            this.playing = true;
            this.__lastTime = new Date().getTime();
            this.__run();
            this.onstart();
        }
    }
    /**
     * 游戏暂停
     */
    Game.prototype.stop = function() {
        if(this.playing) {
            this.playing = false;
            clearTimeout(this.__timeout);
            this.onstop();
        }
    }
    /**
     * 渲染游戏
     */
    Game.prototype.render = function() {
        var childs = this.__childs, child;

        for(var i = 0, len = childs.length; i < len; i++) {
            childs[i].render();
        }
        this.onrender();
    }
    /**
     * 清空画布
     */
    Game.prototype.clear = function() {
        var childs = this.__childs, child;

        for(var i = 0, len = childs.length; i < len; i++) {
            childs[i].clear();
        }
    }
    /**
     * @private
     * 运行时方法
     */
    Game.prototype.__run = function() {
        var now = 0;

        this.__timeout = setTimeout(my.delegate(this.__run, this), this.__sleep);
        now = new Date().getTime();

        this.update(now - this.__lastTime);
        this.clear();
        this.render();

        this.__lastTime = now;
    }
    /**
     * destory
     */
    Game.prototype.destory = function() {
        this.stop();
        Game.superclass.destory.call(this);
    }

    my.Game = Game;
})();
