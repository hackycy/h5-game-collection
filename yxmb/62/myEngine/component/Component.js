/**
 * 组件基类
 */
(function() {

    var Component = function(cfg) {

        /**
         * 初始化状态
         */
        this.initialized = false;

        /**
         * read only
         * 父容器组件
         */
        this.parent = null;

        // 扩展属性
        my.extend(this, cfg);
    }
    /**
     * 事件定义
     * oninit 初始化
     * ondestory 销毁
     */
    Component.prototype.oninit = my.fn;
    Component.prototype.ondestory = my.fn;

    /**
     * 组件初始化
     */
    Component.prototype.init = function() {
        this.initialized = true;
        this.oninit();
    }
    /**
     * 组件销毁
     */
    Component.prototype.destory = function() {
        if(this.parent) {
            this.parent.removeChild(this);
            this.parent = null;
        }
        
        this.ondestory();
        this.oninit = this.ondestory = null;
    }

    my.Component = Component;
})();
