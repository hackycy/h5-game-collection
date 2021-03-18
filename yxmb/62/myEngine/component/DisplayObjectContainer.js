/**
 * 容器组件基类
 */
(function() {

    var DisplayObjectContainer = function(cfg) {

        /**
         * 子组件列表
         */
        this.__childs = [];

        DisplayObjectContainer.superclass.constructor.call(this, cfg);
    }
    my.inherit(DisplayObjectContainer, my.DisplayObject);

    /**
     * 初始化
     */
    DisplayObjectContainer.prototype.init = function() {
        var childs = this.__childs, child;

        for(var i = 0, len = childs.length; i < len; i++) {
            child = childs[i];
            if(!child.initialized) {
                child.init();
            }
        }
        DisplayObjectContainer.superclass.init.call(this);
    }
    /**
     * 在组件列表最后插入组件
     * @param {DisplayObject} child
     */
    DisplayObjectContainer.prototype.appendChild = function(child) {
        this.addChildAt(child, this.__childs.length);
    }
    /**
     * 在组件列表前面插入组件
     * @param {DisplayObject} child
     */
    DisplayObjectContainer.prototype.prependChild = function(child) {
        this.addChildAt(child, 0);
    }
    /**
     * 在组件列表指定位置插入组件
     * @param {DisplayObject} child
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.addChildAt = function(child, index) {
        child.parent = this;
        this.__childs.splice(index, 0, child);
    }
    /**
     * 从组件列表中移除组件
     * @param {DisplayObject} child
     */
    DisplayObjectContainer.prototype.removeChild = function(child) {
        var childs = this.__childs;

        for(var i = 0, len = childs.length; i < len; i++) {
            if(childs[i] == child) {
                this.removeChildAt(i);
                break;
            }
        }
    }
    /**
     * 从组件列表中移除指定位置的组件
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.removeChildAt = function(index) {
        var child = this.__childs.splice(index, 1);

        if(child) {
            child.parent = null;
        }
    }
    /**
     * 移除所有组件
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.removeAll = function() {
        this.__childs.length = 0;
    }
    /**
     * 获取指定位置的组件
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.getChildAt = function(index) {
        return this.__childs[index];
    }
    /**
     * 获取所有子组件
     */
    DisplayObjectContainer.prototype.getChilds = function() {
        return this.__childs;
    }
    /**
     * 更新组件状态
     * @param {Number} deltaTime
     */
    DisplayObjectContainer.prototype.update = function(deltaTime) {
        var childs = this.__childs;

        for(var i = 0, len = childs.length; i < len; i++) {
            if(childs[i]) {
                childs[i].update(deltaTime);
            }
        }
        DisplayObjectContainer.superclass.update.call(this);
    }
    /**
     * 绘制组件
     * @param {Context Object} context
     */
    DisplayObjectContainer.prototype.draw = function(context) {
        var childs = this.__childs;

        for(var i = 0, len = childs.length; i < len; i++) {
            childs[i].render(context);
        }
        DisplayObjectContainer.superclass.draw.call(this);
    }
    /**
     * 销毁所有子组件
     */
    DisplayObjectContainer.prototype.destoryChilds = function() {
        var childs = this.__childs;

        for(var i = 0, len = childs.length; i < len; i++) {
            childs[0].destory();
        }
    }
    /**
     * 销毁组件
     */
    DisplayObjectContainer.prototype.destory = function() {
        this.destoryChilds();
        this.__childs = null;
        DisplayObjectContainer.superclass.destory.call(this);
    }

    my.DisplayObjectContainer = DisplayObjectContainer;
})();
