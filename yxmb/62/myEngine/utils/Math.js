/**
 * 算数运算函数
 */
(function() {

    my.Math = {
        /**
         * 获取随机数
         * @param {Number} min
         * @param {Number} max
         */
        random : function(min, max) {
            return Math.floor((max - min + 1) * Math.random()) + min;
        },
        /**
         * 1角度对应的弧度
         */
        pointtoradian : Math.PI / 180
    }

})();
