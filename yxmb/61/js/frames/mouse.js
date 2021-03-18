/**
 * 地鼠动画帧
 */
var getMouseFrames = (function() {

    var frames = {
        mouse1 : [{
            x : 14,
            y : 9
        }, {
            x : 145,
            y : 9
        }, {
            x : 284,
            y : 9
        }, {
            x : 415,
            y : 9
        }],
        mouse2 : [{
            x : 14,
            y : 126
        }, {
            x : 145,
            y : 126
        }, {
            x : 284,
            y : 126
        }, {
            x : 415,
            y : 126
        }],  
	    mouse3 : [{
            x : 14,
            y : 239
        }, {
            x : 145,
            y : 239
        }, {
            x : 284,
            y : 239
        }, {
            x : 415,
            y : 239
        }],
	    mouse4 : [{
            x : 14,
            y : 348
        }, {
            x : 145,
            y : 348
        }, {
            x : 284,
            y : 348
        }, {
            x : 415,
            y : 348
        }],
	    mouse5 : [{
            x : 14,
            y : 467
        }, {
            x : 145,
            y : 467
        }, {
            x : 284,
            y : 467
        }, {
            x : 418,
            y : 467
        }]      
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
