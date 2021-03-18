/**
 * 道具动画帧
 */
var getPropFrames = (function() {

    var frames = {
        prop_spring01 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 41, 14]]
        }],
        prop_spring03 : [{
            x : 0,
            y : 0
        }],
        props_balloon : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 54, 64]]
        }],
        props_gliding01 : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 75, 64]]
        }],
        props_michael : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 80, 45]]
        }],
        props_super : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 58, 84]]
        }],
        props_ufo : [{
            x : 0,
            y : 0,
            collRect : [[0, 0, 71, 44]]
        }]
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
