/**
 * myEngine定义
 */
(function() {
    var my = {
        /**
         * 供全局引用的空函数
         */
        fn : new Function(),
        /**
         * 通过原型实现的类继承
         * @param {Function} childClass
         * @param {Function} parentClass
         */
        inherit : function(childClass, parentClass) {
            var Constructor = new Function();
            Constructor.prototype = parentClass.prototype;
            childClass.prototype = new Constructor();
            childClass.prototype.constructor = childClass;
            childClass.superclass = parentClass.prototype;

            if(childClass.prototype.constructor == Object.prototype.constructor) {
                childClass.prototype.constructor = parentClass;
            }
        },
        /**
         * 扩展和覆盖一个对象的属性
         * @param {Object} obj
         * @param {Object} newProperties
         */
        extend : function(obj, newProperties) {
            var key;

            for(key in newProperties) {
                if(newProperties.hasOwnProperty(key)) {
                    obj[key] = newProperties[key];
                }
            }

            return obj;
        },
        /**
         * 拷贝对象
         * @param {Object} obj
         * @param {Function} targetClass
         * @param {Object} newProperties
         */
        copy : function(obj, targetClass, newProperties) {
            if( typeof obj !== 'object') {
                return obj;
            }

            var value = obj.valueOf();
            if(obj != value) {
                return new obj.constructor(value);
            }

            var o;
            if( obj instanceof obj.constructor && obj.constructor !== Object) {
                if(targetClass) {
                    o = new targetClass();
                } else {
                    o = my.clone(obj.constructor.prototype);
                }

                for(var key in obj) {
                    if(targetClass || obj.hasOwnProperty(key)) {
                        o[key] = obj[key];
                    }
                }
            } else {
                o = {};
                for(var key in obj) {
                    o[key] = obj[key];
                }
            }

            if(newProperties) {
                for(var key in newProperties) {
                    o[key] = newProperties[key];
                }
            }

            return o;
        },
        /**
         * 克隆对象
         * @param {Object} obj
         */
        clone : function(obj) {
            my.__cloneFunc.prototype = obj;
            return new my.__cloneFunc();
        },
        /**
         * @private
         */
        __cloneFunc : function() {
        },
        /**
         * 通过闭包实现的事件代理
         * @param {Function} func
         * @param {Object} scope
         */
        delegate : function(func, scope) {
            scope = scope || window;

            if(arguments.length > 2) {
                var args = Array.prototype.slice.call(arguments, 2);

                return function() {
                    return func.apply(scope, args);
                }
            } else {
                return function() {
                    return func.call(scope);
                }
            }
        }
    }

    window.my = my;
})();
