/**
 * 分数帧
 */
var getScoreFrames = (function() {

    var frames = {
        score :[{
            x : 5,                       //+500
            y : 0
        }, {                             //x/2
            x : 111,
            y : 0
        }, {                             //-100
            x : 207,
            y : 0
        }, {                             //+100
            x : 322,
            y : 0
        },{                              //+20%
            x : 5,
            y : 65
        }]  
    }

    /**
     * @param {String} animName
     */
    return function(animName) {
        return frames[animName];
    }
})();
