(function() {

    var imageResources = getImageRes();
    my.ImageManager.load(imageResources, loadImageResources);

    /**
     * 加载图片资源
     */
    function loadImageResources(number) {
        my.DOM.get('progressText').innerHTML = '【正在加载图片...(' + ~~(number / imageResources.length * 100) + '%)';
        if(number < imageResources.length) {
            return false;
        }

        if(!buzz.isOGGSupported() && !buzz.isMP3Supported()) {
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
                formats : ['wav', 'mp3'],
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
            my.DOM.get('progressText').innerHTML = '【正在加载音乐...(' + ~~(number / len * 100) + '%)';

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
        Audio.play('ogg_background');

        // 创建游戏对象
        var donkeyJump = new DonkeyJump();
        donkeyJump.setFPS(60);
        donkeyJump.init();
        var ui = donkeyJump.ui;

        // 开始游戏时
        donkeyJump.onstart = function() {
            my.KeyEvent.addListener();
        }
        // 游戏状态更新
        donkeyJump.onupdate = function() {
            if(my.KeyEvent.check('VK_LEFT') || my.KeyEvent.check('A')) {
                donkeyJump.keyDownLeft = true;
            } else {
                donkeyJump.keyDownLeft = false;
            }

            if(my.KeyEvent.check('VK_RIGHT') || my.KeyEvent.check('D')) {
                donkeyJump.keyDownRight = true;
            } else {
                donkeyJump.keyDownRight = false;
            }
        }
        // 停止游戏时
        donkeyJump.onstop = function() {
            my.KeyEvent.removeListener();
        }
        // 点击开始按钮
        ui.onplay = function() {
            this.toBody();
            donkeyJump.stateInit();
            donkeyJump.start();
        }
        // 打开声音
        ui.onsoundopen = function() {
            Audio.mute = false;
            Audio.play('ogg_background', true);
        }
        // 关闭声音
        ui.onsoundclose = function() {
            Audio.mute = true;
            Audio.pauseAll();
        }
        // 暂停
        ui.onpause = function() {
            donkeyJump.pause();
            ui.panelResumeVisible(true);
            ui.btnPauseVisible(false);
        }
        // 返回列表
        ui.onresumeexit = function() {
            ui.toCover();
            ui.panelResumeVisible(false);
            Audio.play('ogg_background');
        }
        // 继续游戏
        ui.onresume = function() {
            ui.panelResumeVisible(false);
            ui.btnPauseVisible(true);
            donkeyJump.start();
            Audio.play('ogg_background', true);
        }
        // 未实现
        ui.onshowcup = ui.onshowcore = ui.onshowmore = ui.onshare = function() {
            alert('星益小游戏平台\n游戏作者：<御剑神兵> 【源码下载：blog.96xy.cn】');
        }
    }

})();
