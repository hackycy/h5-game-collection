/**
 * 音乐控制
 */
(function() {

    var Audio = {
        /**
         * 静音模式
         */
        mute : false,
        /**
         * buzz group对象
         */
        buzzGroup : null,
        /**
         * 音频列表
         */
        list : {},
        /**
         * 播放音乐
         * @param {Number} id
         * @param {Boolean} resumePlay
         */
        play : function(id, resumePlay) {
            if(this.list[id] && !this.mute) {
                if(!resumePlay) {
                    this.list[id].setTime(0);
                }
                this.list[id].play();
            }
        },
        /**
         * 暂停播放
         * @param {Number} id
         */
        pause : function(id) {
            this.list[id].pause();
        },
        /**
         * 暂停所有音频
         */
        pauseAll : function() {
            buzz.all().pause();
        }
    }

    window.Audio = Audio;

})();
