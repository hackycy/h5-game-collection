/**
 * Donkey Jump游戏类
 */
(function() {

    var DonkeyJump = function(cfg) {

        /**
         * 视口对象
         */
        this.viewport = null;

        /**
         * 天空背景层
         */
        this.skyLayer = null;

        /**
         * 远景山丘背景层
         */
        this.hillLayer = null;

        /**
         * 近景山丘背景层
         */
        this.hillNearLayer = null;

        /**
         * 房子背景层
         */
        this.floorLayer = null;

        /**
         * 白云精灵层
         */
        this.stairLayer = null;

        /**
         * 驴子精灵层
         */
        this.donkeyLayer = null;

        /**
         * 效果精灵层
         */
        this.effectLayer = null;

        /**
         * 驴子
         */
        this.donkey = null;

        /**
         * 视口的初始化位置
         */
        this.viewportDefault = [0, 45440];

        /**
         * 得分
         */
        this.score = 0;

        /**
         * UI对象
         */
        this.ui = null;

        /**
         * 按键状态
         */
        this.keyDownLeft = false;
        this.keyDownRight = false;

        /**
         * 预备时间
         */
        this.readyTime = 0;

        /**
         * 是否即将开始
         */
        this.isGo = false;

        /**
         * 上一朵云的位置
         */
        this.lastStairY = 0;

        DonkeyJump.superclass.constructor.call(this, cfg);
    }
    my.inherit(DonkeyJump, my.Game);

    /**
     * @private
     * 创建游戏分层
     */
    DonkeyJump.prototype.__createLayers = function() {
        // 创建视口对象
        var viewport = new my.Viewport({
            width : 480,
            height : 800
        });

        // 创建游戏层
        var skyLayer = new my.Layer({
            viewport : viewport,
            distance : 20
        });
        skyLayer.setCanvas('canvasSkyLayer');
        var hillLayer = new my.Layer({
            viewport : viewport,
            distance : 15
        });
        hillLayer.setCanvas('canvasHillLayer');
        var hillNearLayer = new my.Layer({
            viewport : viewport,
            distance : 5
        });
        hillNearLayer.setCanvas('canvasHillNearLayer');
        var floorLayer = new my.Layer({
            viewport : viewport
        });
        floorLayer.setCanvas('canvasFloorLayer');
        var stairLayer = new my.Layer({
            viewport : viewport
        });
        stairLayer.setCanvas('canvasStairLayer');
        var donkeyLayer = new my.Layer({
            viewport : viewport
        });
        donkeyLayer.setCanvas('canvasDonkeyLayer');
        var effectLayer = new my.Layer({
            viewport : viewport
        });
        effectLayer.setCanvas('canvasEffectLayer');

        this.appendChild(skyLayer);
        this.appendChild(hillLayer);
        this.appendChild(hillNearLayer);
        this.appendChild(floorLayer);
        this.appendChild(stairLayer);
        this.appendChild(donkeyLayer);
        this.appendChild(effectLayer);

        this.viewport = viewport;
        this.skyLayer = skyLayer;
        this.hillLayer = hillLayer;
        this.hillNearLayer = hillNearLayer;
        this.floorLayer = floorLayer;
        this.stairLayer = stairLayer;
        this.donkeyLayer = donkeyLayer;
        this.effectLayer = effectLayer;
    }
    /**
     * @private
     * 创建驴子
     */
    DonkeyJump.prototype.__createDonkey = function() {
        var donkey = new Donkey();
        donkey.game = this;
        this.donkey = donkey;
        this.donkeyLayer.appendChild(donkey);
    }
    /**
     * @private
     * 创建场景
     */
    DonkeyJump.prototype.__createScene = function() {
        // 天空
        var sky = new my.Bitmap({
            image : my.ImageManager.get('sky'),
            width : 480,
            height : 3072
        });
        this.skyLayer.appendChild(sky);
        // 远景山丘
        var hill = new my.Bitmap({
            image : my.ImageManager.get('hill'),
            width : 480,
            height : 603,
            y : this.viewportDefault[1] + (800 - 603) * this.hillLayer.distance
        });
        this.hillLayer.appendChild(hill);
        // 近景山丘
        var hillnear = new my.Bitmap({
            image : my.ImageManager.get('hillnear'),
            width : 480,
            height : 613,
            y : this.viewportDefault[1] + (800 - 613) * this.hillNearLayer.distance
        });
        this.hillNearLayer.appendChild(hillnear);
        // 房子
        var floor = new my.Bitmap({
            image : my.ImageManager.get('floor'),
            width : 480,
            height : 584,
            y : this.viewportDefault[1] + (800 - 584) * this.floorLayer.distance
        });
        this.floorLayer.appendChild(floor);
    }
    /**
     * 创建UI对象
     */
    DonkeyJump.prototype.__createUI = function() {
        var ui = new UI(), donkeyJump = this;
        ui.init();

        ui.onretry = function() {
            Audio.play('ogg_background');

            this.toBody();
            donkeyJump.stateInit();
            donkeyJump.start();
        }
        this.ui = ui;
    }
    /**
     * 初始化游戏
     */
    DonkeyJump.prototype.init = function() {
        this.__createLayers();
        this.__createDonkey();
        this.__createScene();
        this.__createUI();

        DonkeyJump.superclass.init.call(this);
    }
    /**
     * 状态更新
     */
    DonkeyJump.prototype.update = function(deltaTime) {
        this.stairLayer.change();

        DonkeyJump.superclass.update.call(this, deltaTime);
    }
    /**
     * 设置得分
     * @param {Number} score
     */
    DonkeyJump.prototype.setScore = function(score) {
        this.score = score;
        this.ui.setNumber(score);
    }
    /**
     * @private
     * 初始化时创建一朵默认的云层
     */
    DonkeyJump.prototype.__createDefaultStair = function() {
        this.stairLayer.destoryChilds();
        // 初始化云层位置
        this.lastStairY = this.viewportDefault[1] + 100;
        var stair = new Stair({
            y : this.lastStairY
        });

        stair.init();
        this.stairLayer.appendChild(stair);
        this.__createProp(stair);
    }
    /**
     * @private
     * 在一朵云层上创建道具
     * @param {Stair Object} stair
     */
    DonkeyJump.prototype.__createProp = function(stair) {
        if(my.Math.random(1, 6) == 1) {
            var prop = new Prop();
            prop.init();
            prop.x = my.Math.random(stair.x, stair.x + 150 - prop.width);
            prop.y = stair.y - prop.height;
            stair.prop = prop;
            this.stairLayer.appendChild(prop);
        }
    }
    /**
     * @private
     * 控制云层
     */
    DonkeyJump.prototype.__stairControl = function() {
        var viewportY = this.viewport.y, lastStairY = this.lastStairY, space = my.Math.random(200, 300);
        if(lastStairY - viewportY > space) {
            var childs = this.stairLayer.getChilds(), child, viewportBottom = viewportY + 800;
            for(var i = 0, len = childs.length; i < len; i++) {
                child = childs[i];
                if(child && child.y > viewportBottom) {
                    child.destory();
                    i--;
                }
            }

            // 高度每增加500,提升1个高度的难度
            this.lastStairY = lastStairY - (space + Math.max(~~(this.score / 500), 0));
            var stair = new Stair({
                y : this.lastStairY
            });
            stair.init();
            this.stairLayer.appendChild(stair);
            this.__createProp(stair);
        }
    }
    /**
     * 根据视口位置更新层状态
     */
    DonkeyJump.prototype.layerChnage = function() {
        var y = this.viewport.y;

        this.skyLayer.change();
        if(y > 36300) {
            this.hillLayer.change();
        }
        if(y > 4230) {
            this.hillNearLayer.change();
        }
        if(y > 44800) {
            this.floorLayer.change();
        }
    }
    /**
     * 驴子垂直移动时控制视口
     */
    DonkeyJump.prototype.viewportMove = function() {
        var donkey = this.donkey, viewport = this.viewport;
        var donkeyY = donkey.y;

        if(donkeyY < donkey.lastY) {// 向上移动
            if(donkeyY < donkey.minTop) {
                if(donkeyY < 45776) {
                    viewport.move(0, donkeyY - 336, true);
                }

                this.setScore(45970 - donkeyY);
                this.layerChnage();

                donkey.minTop = donkeyY;
                this.__stairControl();
            }
        } else if(donkey.animName == 'jump') {// 跳跃时向下移动
            if(donkey.y + donkey.height > viewport.y + 800) {// 死亡
                donkey.dead();
            } else {
                var stairLayer = this.stairLayer;
                var stairs = stairLayer.getChilds();

                for(var i = 0, len = stairs.length; i < len; i++) {
                    var stair = stairs[i];

                    if(stair && donkey.hitTest(stair)) {
                        // 与云层碰撞
                        if( stair instanceof Prop) {
                            stair.stepon(donkey);
                        } else {
                            var cloud = new Cloud({
                                x : donkey.x + (donkey.direction == 'left' ? 45 : 35),
                                y : stair.y - 16,
                                width : 64,
                                height : 16
                            });
                            var self = this;

                            cloud.onupdate = cloud.ondestory = function() {
                                self.effectLayer.change();
                            }
                            this.effectLayer.appendChild(cloud);
                            cloud.init();

                            var name = stair.name;
                            if(name == 'stair_friable') {// 脆弱的云
                                Audio.play('ogg_step_broken');
                                stair.anim.play();
                            } else if(name == 'stair_moveable') {// 会移动的云
                                stair.anim.gotoAndPlay(1);
                            }

                            donkey.jump();
                        }
                    }
                }
            }
        }
    }
    /**
     * 预备状态
     * @return {Boolean} 返回预备状态是否完毕
     */
    DonkeyJump.prototype.ready = function(deltaTime) {
        var go = false;

        if(deltaTime <= 0) {
            return false;
        }

        if(this.readyTime == 0) {
            this.ui.beingReadyVisible(true);
            Audio.play('ogg_321');
        } else if(this.readyTime > 3000) {
            this.ui.beingGoVisible(false);
            go = true;
            Audio.play('ogg_go');
            this.ui.btnPauseVisible(true);
        } else if(this.readyTime > 2000) {
            if(!this.isGo) {
                this.ui.beingReadyVisible(false);
                this.ui.beingGoVisible(true);
                this.isGo = true;
                Audio.play('ogg_321');
            }
        } else if(this.readyTime > 1000) {
            if(this.readyTime + deltaTime > 2000) {
                Audio.play('ogg_321');
            }
        } else {
            if(this.readyTime + deltaTime > 1000) {
                Audio.play('ogg_321');
            }
        }
        this.readyTime += deltaTime;

        return go;
    }
    /**
     * 初始化状态
     */
    DonkeyJump.prototype.stateInit = function() {
        // 移动视口到默认位置
        this.viewport.move(this.viewportDefault[0], this.viewportDefault[1], true);
        // 初始化驴子状态
        this.donkey.x = 176;
        this.donkey.y = this.viewportDefault[1] + 530;
        this.donkey.minTop = this.donkey.y;
        this.donkey.reset();
        // 预备时间清零
        this.readyTime = 0;
        this.isGo = false;
        // 积分清零
        this.setScore(0);
        // 创建默认云层
        this.__createDefaultStair();
        // 重绘
        this.skyLayer.change();
        this.hillLayer.change();
        this.hillNearLayer.change();
        this.floorLayer.change();
        this.stairLayer.change();
        this.effectLayer.change();
        this.donkeyLayer.change();
        // UI
        this.ui.btnPauseVisible(false);
    }
    /**
     * 暂停游戏
     */
    DonkeyJump.prototype.pause = function() {
        this.stop();
        Audio.pauseAll();
    }
    /**
     * 游戏结束
     */
    DonkeyJump.prototype.gameover = function() {
        var ui = this.ui;

        this.stop();
        ui.updateResult(null, this.score);
        ui.toOver();
    }

    window.DonkeyJump = DonkeyJump;
})();
