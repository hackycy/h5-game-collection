/**
 * DOM操作
 */
(function() {

    my.DOM = {
        /**
         * 根据id获取元素
         * @param {String} id
         */
        get : function(id) {
            return document.getElementById(id);
        },
        /**
         * 获取元素的CSS样式值
         * @param {DOM Object} element
         * @param {String} name
         */
        getStyleValue : function(element, name) {
            if(element.currentStyle) {
                return element.currentStyle[name];
            } else {
                var style = document.defaultView.getComputedStyle(element, null);
                return style[name];
            }
        },
        /**
         * 隐藏元素
         * @param {DOM Object} element
         */
        hide : function(element) {
            element.style.display = 'none';
        },
        /**
         * 显示元素
         * @param {DOM Object} element
         */
        show : function(element) {
            element.style.display = 'block';
        },
        /**
         * 删除元素
         * @param {DOM Object} element
         */
        remove : function(element) {
            element.parentNode.removeChild(element);
        },
        /**
         * 检查元素是否具有某个class样式
         * @param {DOM Object} element
         * @param {String} className
         */
        hasClass : function(element, className) {
            var names = element.className.split(/\s+/);
            for(var i = 0; i < names.length; i++) {
                if(names[i] == className) {
                    return true;
                }
            }
            return false;
        },
        /**
         * 为元素添加class样式
         * @param {DOM Object} element
         * @param {String} className
         */
        addClass : function(element, className) {
            if(!this.hasClass(element, className)) {
                element.className += ' ' + className;
            }
        },
        /**
         * 从元素上移除class样式
         * @param {DOM Object} element
         * @param {String} className
         */
        removeClass : function(element, className) {
            if(this.hasClass(element, className)) {
                var names = element.className.split(/\s+/), newClassName = [];
                for(var i = 0; i < names.length; i++) {
                    if(names[i] != className) {
                        newClassName.push(names[i]);
                    }
                }
                element.className = newClassName.join(' ');
            }
        }
    }

})();
