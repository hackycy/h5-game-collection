/**
 * 图片组件
 */
(function() {

    var Bitmap = function(cfg) {
        /**
         * 图片对象
         */
        this.image = null;
        /**
         * 重复绘制
         */
        this.repeat = false;
        /**
         * @private
         */
        this.__pattern = null;

        Bitmap.superclass.constructor.call(this, cfg);
    }
    my.inherit(Bitmap, my.DisplayObject);

    /**
     * 绘制图片
     * @param {Context Object} context
     */
    Bitmap.prototype.draw = function(context) {
        if(this.repeat) {
            if(!this.__pattern) {
                this.__pattern = context.createPattern(this.image, 'repeat');
            }
            context.fillStyle = this.__pattern;
            context.fillRect(0, 0, this.width, this.height);
        } else {
            context.drawImage(this.image, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
        }
        Bitmap.superclass.draw.call(this);
    }
    /**
     * 销毁图像对象
     */
    Bitmap.prototype.destory = function() {
        this.image = null;
        Bitmap.superclass.destory.call(this);
    }

    my.Bitmap = Bitmap;
})();
