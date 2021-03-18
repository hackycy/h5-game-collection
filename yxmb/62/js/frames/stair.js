/**
 * 云层动画帧 Download by http://www.mycodes.net
 */
var getStairFrames = (function() {

    var frames = {
        stair_friable : [{
            x : 0,
            y : 0,
            duration : 50,
            collRect : [[0, 0, 142, 58]]
        }, {
            x : 256,
            y : 0,
            duration : 50
        }, {
            x : 512,
            y : 0,
            duration : 50
        }, {
            x : 768,
            y : 0,
            duration : 50
        }, {
            x : 1024,
            y : 0,
            duration : 50
        }, {
            x : 1280,
            y : 0,
            duration : 50
        }],
        stair_moveable : [{
            x : 0,
            y : 0,
            duration : 50,
            collRect : [[0, 0, 156, 72]]
        }, {
            x : 256,
            y : 0,
            duration : 50,
            collRect : [[0, 0, 156, 72]]
        }, {
            x : 0,
            y : 0,
            duration : 50,
            collRect : [[0, 0, 156, 72]]
        }],
        stair_stable_01 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 154, 54]]
        }],
        stair_stable_02 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 153, 54]]
        }],
        stair_stable_03 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 153, 54]]
        }],
        stair_stable_04 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 153, 54]]
        }],
        stair_stable_05 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 154, 54]]
        }]
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
