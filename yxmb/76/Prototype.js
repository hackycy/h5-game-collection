var Prototype = {
    emptyFunction: function() { }
};
var Class = {
    create: function() {
        var parent = null, properties = $A(arguments);
        if (Object.isFunction(properties[0]))
            parent = properties.shift();
        function klass() {
            this.initialize.apply(this, arguments);
        }
        Object.extend(klass, Class.Methods);
        klass.superclass = parent;
        klass.subclasses = [];
        if (parent) {
            var subclass = function() { };
            subclass.prototype = parent.prototype;
            klass.prototype = new subclass;
            parent.subclasses.push(klass);
        }
        for (var i = 0; i < properties.length; i++)
            klass.addMethods(properties[i]);

        if (!klass.prototype.initialize)
            klass.prototype.initialize = Prototype.emptyFunction;
        klass.prototype.constructor = klass;
        return klass;
    }
};
Class.Methods = {
    addMethods: function(source) {
        var ancestor = this.superclass && this.superclass.prototype;
        var properties = Object.keys(source);
        if (!Object.keys({ toString: true }).length)
            properties.push("toString", "valueOf");
        for (var i = 0, length = properties.length; i < length; i++) {
            var property = properties[i], value = source[property];
            if (ancestor && Object.isFunction(value) && value.argumentNames().first() == "$super") {
                var method = value;
                value = (function(m) {
                    return function() { return ancestor[m].apply(this, arguments) };
                })(property).wrap(method);
                value.valueOf = method.valueOf.bind(method);
                value.toString = method.toString.bind(method);
            }
            this.prototype[property] = value;
        }
        return this;
    }
};
Object.extend = function(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
};
function $A(iterable) {
    if (!iterable) return [];
    if (iterable.toArray) return iterable.toArray();
    var length = iterable.length || 0, results = new Array(length);
    while (length--) results[length] = iterable[length];
    return results;
}
Object.extend(Object, {
    keys: function(object) {
        var keys = [];
        for (var property in object)
            keys.push(property);
        return keys;
    },
    isFunction: function(object) {
        return typeof object == "function";
    },
    isUndefined: function(object) {
        return typeof object == "undefined";
    }
});
Object.extend(Function.prototype, {
    argumentNames: function() {
        var names = this.toString().match(/^[\s\(]*function[^(]*\(([^\)]*)\)/)[1].replace(/\s+/g, '').split(',');
        return names.length == 1 && !names[0] ? [] : names;
    },
    bind: function() {
        if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
        var __method = this, args = $A(arguments), object = args.shift();
        return function() {
            return __method.apply(object, args.concat($A(arguments)));
        }
    },
    wrap: function(wrapper) {
        var __method = this;
        return function() {
            return wrapper.apply(this, [__method.bind(this)].concat($A(arguments)));
        }
    }
});
Object.extend(Array.prototype, {
    first: function() {
        return this[0];
    }
});
