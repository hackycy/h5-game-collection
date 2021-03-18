(function() {
    var  mousePress = false; 
	var imageResources = getImageRes();
    my.ImageManager.load(imageResources, loadImageResources);

    /**
     * 加载图片资源
     */
    function loadImageResources(number) {
        my.DOM.get('progressText').innerHTML = '正在加载图片...(' + ~~(number / imageResources.length * 100) + '%)';
        if(number < imageResources.length) {
            return false;
        }
		
        if(!buzz.isOGGSupported()) {
            my.DOM.remove(my.DOM.get('progressText'));
            init();
        } else {
            loadAudioResources();
        }
    }
	  /**
     * 加载音频资源
     */
    function loadAudioResources(number) {
        var res = getAudioRes(), len = res.length;
        var group = [], item, a;

        for(var i = 0; i < len; i++) {
            item = res[i];
            a = new buzz.sound(item.src, {
                formats : ['ogg'],
                preload : true,
                autoload : true,
                loop : !!item.loop
            });

            group.push(a);
            Audio.list[item.id] = a;   
        }

        var buzzGroup = new buzz.group(group);
        var number = 1;

        buzzGroup.bind('loadeddata', function(e) {
            my.DOM.get('progressText').innerHTML = '正在加载音乐...(' + ~~(number / len * 100) + '%)';

            if(number >= len) {
                my.DOM.remove(my.DOM.get('progressText'));
                init();
            } else {
                number++;
            }
        });
    }

	
    /**
     * 初始化
     */
    function init() {
         Audio.play('game_music');

        // 创建游戏对象
        var mouseHit = new MouseHit();
        mouseHit.init();
        var ui = mouseHit.ui;

        // 点击开始按钮
        ui.onplay = function() {
            this.toBody();
            mouseHit.stateInit();
        }
        // 打开声音
        ui.onsoundopen = function() {
            Audio.mute = false;
            Audio.play('game_music', true);
        }
        // 关闭声音
        ui.onsoundclose = function() {
            Audio.mute = true;
            Audio.pauseAll();
        }
        // 暂停
        ui.onpause = function() {
            clearInterval(mouseHit.drawCanvasInterval);
			clearInterval(mouseHit.drawMouseInterval);
        }
        // 暂停重新开始
        ui.onreadystart = function() {
            mouseHit.__setIntervalFunc(mouseHit);
        }
        // 继续游戏
        ui.onresume = function() {
           mouseHit.__setIntervalFunc(mouseHit);
        }
    }

})();
