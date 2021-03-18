/**
 * 云朵践踏效果
 */
(function() {

    var Cloud = function(cfg) {

        Cloud.superclass.constructor.call(this, cfg);
    }
    my.inherit(Cloud, my.Sprite);

    /**
     * 初始化
     */
    Cloud.prototype.init = function() {
        var anim = new my.Animation({
            image : my.ImageManager.get('cloud'),
            frames : getEffectFrames('cloud'),
            loop : false
        });
        this.anim = anim;

        var self = this;
        anim.onend = function() {
            self.destory();
        }
        anim.init();
        anim.play();
        Cloud.superclass.init.call(this);
    }

    window.Cloud = Cloud;
})();
