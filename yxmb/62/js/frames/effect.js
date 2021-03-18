/**
 * 效果动画帧 Download by http://www.mycodes.net
 */
var getEffectFrames = (function() {

    var frames = {
        cloud : [{
            x : 0,
            y : 0,
            duration : 30
        }, {
            x : 64,
            y : 0,
            duration : 30
        }, {
            x : 128,
            y : 0,
            duration : 30
        }, {
            x : 172,
            y : 0,
            duration : 30
        }]
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
