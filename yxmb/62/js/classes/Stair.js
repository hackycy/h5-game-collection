/**
 * 云层精灵类
 */
(function() {

    var Stair = function(cfg) {

        // 云层的名字
        this.name = '';

        // 道具
        this.prop = null;

        Stair.superclass.constructor.call(this, cfg);
    }
    my.inherit(Stair, my.Sprite);

    /**
     * 初始化
     */
    Stair.prototype.init = function() {
        // 初始化云层大小和位置
        this.width = 256;
        this.height = 128;
        this.x = my.Math.random(10, 313);

        // 随机创建云层的类型
        var stairTypes = ['stair_friable', 'stair_moveable', 'stair_stable_01', 'stair_stable_02', 'stair_stable_03', 'stair_stable_04', 'stair_stable_05'];
        var name = stairTypes[my.Math.random(0, 6)];

        // 会移动的云
        if(name == 'stair_moveable') {
            this.speedX = my.Math.random(10, 20) / 100;
            if(my.Math.random(0, 1)) {
                this.speedX = -this.speedX;
            }

            this.update = this.__moveableUpdate;
        }

        // 创建云层动画
        var anim = new my.Animation({
            image : my.ImageManager.get(name),
            frames : getStairFrames(name),
            loop : false
        });
        anim.init();

        this.name = name;
        this.anim = anim;
        Stair.superclass.init.call(this);
    }
    /**
     * @private
     * 会移动的云状态更新
     */
    Stair.prototype.__moveableUpdate = function(deltaTime) {
        if((this.x < 0 && this.speedX < 0) || (this.x > 322 && this.speedX > 0)) {
            this.speedX = -this.speedX;
        }

        // 道具随云层移动
        if(this.prop && this.lastX != 0) {
            this.prop.x += (this.x - this.lastX);
        }

        Stair.superclass.update.call(this, deltaTime);
    }

    window.Stair = Stair;
})();
