/**
 * 逐帧动画组件
 */
(function() {

    var Animation = function(cfg) {

        /**
         * 动画图片
         */
        this.image = null;
        /**
         * 帧列表
         * @format {
         *     x: 0,
         *     y: 0,
         *     duration: 0,
         *     collRect: [[left, top, width, height]]
         * }
         */
        this.frames = [];
        /**
         * 循环播放
         */
        this.loop = true;
        /**
         * 播放倍速
         */
        this.speed = 1;
        /**
         * @read only
         * 播放状态
         */
        this.playing = false;
        /**
         * @read only
         * 正在播放的帧索引(第一帧从0开始)
         */
        this.currentFrameIndex = 0;
        /**
         * @read only
         * 正在播放的帧对象
         */
        this.currentFrame = null;
        /**
         * @private
         * 当前帧已播放时间(ms)
         */
        this.__framePlayedDuration = 0;

        Animation.superclass.constructor.call(this, cfg);
    }
    my.inherit(Animation, my.Component);

    /**
     * 事件定义
     * onplay 开始播放动画
     * onstop 停止播放动画
     * onend 动画播放完毕
     */
    Animation.prototype.onplay = my.fn;
    Animation.prototype.onstop = my.fn;
    Animation.prototype.onend = my.fn;

    /**
     * @private
     * 跳转到指定的帧
     * @param {Number} index
     */
    Animation.prototype.__gotoFrame = function(index) {
        if(this.frames[index]) {
            this.currentFrameIndex = index;
            this.currentFrame = this.frames[index];
            this.__framePlayedDuration = 0;
        }
    }
    /**
     * @private
     * 跳转到下一帧
     */
    Animation.prototype.__nextFrame = function() {
        if(this.currentFrameIndex < this.frames.length - 1) {
            this.__gotoFrame(this.currentFrameIndex + 1);
        } else if(this.loop) {
            this.__gotoFrame(0);
        } else {
            this.stop();
            this.onend();
        }
    }
    /**
     * 初始化
     */
    Animation.prototype.init = function() {
        this.__gotoFrame(0);
        Animation.superclass.init.call(this);
    }
    /**
     * 播放动画
     */
    Animation.prototype.play = function() {
        this.playing = true;
        this.onplay();
    }
    /**
     * 停止播放
     */
    Animation.prototype.stop = function() {
        this.playing = false;
        this.onstop();
    }
    /**
     * 跳转到指定帧并开始播放
     * @param {Number} index
     */
    Animation.prototype.gotoAndPlay = function(index) {
        this.__gotoFrame(index);
        this.play();
    }
    /**
     * 跳转到指定帧并停止播放
     * @param {Number} index
     */
    Animation.prototype.gotoAndStop = function(index) {
        this.__gotoFrame(index);
        this.stop();
    }
    /**
     * 更新动画的状态
     * @param {Number} deltaTime
     */
    Animation.prototype.update = function(deltaTime) {
        if(!this.playing) {
        } else if(this.__framePlayedDuration >= this.currentFrame.duration) {
            this.__nextFrame();
        } else {
            this.__framePlayedDuration += deltaTime * this.speed;
        }
    }
    /**
     * 销毁对象
     */
    Animation.prototype.destory = function() {
        this.image = this.frames = this.currentFrame = this.onplay = this.onstop = this.onend = null;
        Animation.superclass.destory.call(this);
    }

    my.Animation = Animation;
})();
