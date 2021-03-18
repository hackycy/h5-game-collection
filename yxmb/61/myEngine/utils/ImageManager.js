/**
 * 图片资源管理器
 */
(function() {

    var ImageManager = {
        /**
         * @private
         */
        __loadList : {},
        /**
         * @private
         */
        __loadImage : function(item, callback) {
            var image = new Image();
            image.onload = function() {
                ImageManager.__loadList[item.id] = image;
                callback();
            }
            image.src = item.src;
        },
        /**
         * 加载图片资源
         * @param {Array} images @format {id: '', src: ''}
         * @param {Function} statechange
         */
        load : function(images, statechange, __index) {
            __index = __index || 0;
            if(images[__index]) {
                ImageManager.__loadImage(images[__index], function() {
                    ImageManager.load(images, statechange, __index + 1);
                });
            }
            statechange(__index);
        },
        /**
         * 获取已加载的Image对象
         * @param {String} id
         */
        get : function(id) {
            return this.__loadList[id];
        }
    }

    my.ImageManager = ImageManager;
})();
