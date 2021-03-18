/**
 * 星星动画帧
 */
var getStarFrames = (function() {

    var frames = {
        star :[{
            x : 0,
            y : 0
        }, {
            x : 111,
            y : 0
        }, {
            x : 236,
            y : 0
        }, {
            x : 375,
            y : 0
        },{
            x : 0,
            y : 72
        }, {
            x : 111,
            y : 72
        }, {
            x : 236,
            y : 72
        }, {
            x : 375,
            y : 72
        },{
            x : 0,
            y : 144
        }, {
            x : 111,
            y : 144
        }, {
            x : 236,
            y : 144
        }, {
            x : 375,
            y : 144
        },{
		}]  
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
