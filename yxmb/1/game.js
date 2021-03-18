var _STRINGS = {
        Ad: {
            Mobile: {
                Preroll: {
                    ReadyIn: "战争准备就绪",
                    Loading: "您的战争正在加载...",
                    Close: "关闭"
                },
                Header: {
                    ReadyIn: "战争准备就绪",
                    Loading: "您的战争正在加载...",
                    Close: "关闭"
                },
                End: {
                    ReadyIn: "广告结束于",
                    Loading: "请稍候...",
                    Close: "关闭"
                }
            }
        },
        Splash: {
            Loading: "正在加载...",
            LogoLine1: "这里有一些文字",
            LogoLine2: "由MarketJS提供支持（小星汉化）",
            LogoLine3: "没有人"
        },
        Game: {
            SelectPlayer: "选择播放器",
            Win: "恭喜，你赢了！",
            Lose: "抱歉，你输了！",
            Score: "分数",
            Time: "剩余时间",
            Home: "返回主页",
            Battle: "开始战斗",
            CardCollection: "全部卡片",
            ReplaceCard: "选择要替换的卡",
            Use: "使用",
            Info: "信息",
            Sixty: "60",
            Thirty: "30",
            TimeMinutes: "秒",
            LeftMinutes: "分钟",
            DoubleElixer: "X2 长生不老药",
            AdditionalSixty: "+60",
            Extra: "额外的",
            Sudden: "猝死",
            TropiExtra: "- 赢得下一个奖杯 -",
            Tutorial: "辅导的",
            StartTutorial: "你想先学习教程吗?",
            Yes: "开始学习",
            No: "我是高手",
            Pause: "暂停",
            GamePause: "游戏暂停",
            Resume: "继续游戏",
            Health: "生命值",
            Duration: "持续时间",
            Movement: "移动速度",
            Type: "属性 :",
            Spell: "咒语",
            Troop: "部队",
            Damage: "攻击",
            Fast: "快",
            Normal: "一般",
            Slow: "缓慢",
            DamagePerSecond: "每秒攻击数",
            StunDuration: "技能持续时间"
        },
        AIName: {
            One: "小精灵",
            Two: "塔科",
            Three: "滑溜冰",
            Four: "孢子虫",
            Five: "突厥语",
            Six: "循环效率",
            Seven: "芹菜属",
            Eight: "斯基普霍特",
            Nine: "临时工",
            Ten: "99乳白色"
        },
        Tutorial: {
            Welcome: "欢迎回家，我们开始训练吧",
            Destroy: "我们的目标是摧毁敌方发射塔",
            Ready: "现在让我们开始战斗吧！祝你好运",
            Deploy: "拖放卡片部署您的部队"
        },
        Results: {
            Title: "高分"
        }
    },
    _GAME = {
        Card: {
            archer: {
                name: "疯狂射手",
                manaUsage: 3,
                indexCardNumber: 1,
                rangeShot: 70,
                rangeDistraction: 110,
                speedMovement: 30,
                HP: 360,
                ATK: 45,
                spellcard: !1,
                description: "弓箭手是远程攻击者，他用锋利的箭攻击敌人"
            },
            ars: {
                name: "万雨箭",
                manaUsage: 3,
                indexCardNumber: 2,
                range: !0,
                spellcard: !0,
                damage: 300,
                description: "这些箭会挡住太阳，对敌人造成飞溅伤害"
            },
            warrior: {
                name: "愤怒特工",
                manaUsage: 4,
                indexCardNumber: 3,
                range: !1,
                rangeShot: 0,
                rangeDistraction: 70,
                speedMovement: 25,
                HP: 850,
                ATK: 95,
                spellcard: !1,
                description: "啊，雇佣兵，他用锋利的剑把敌人一分为二"
            },
            berserk: {
                name: "战斗阴霾",
                manaUsage: 3,
                indexCardNumber: 4,
                timeDuration: 4,
                range: !0,
                spellcard: !0,
                description: "把部队投入疯狂状态，使他们攻击得更快"
            },
            giant: {
                name: "保卫者",
                manaUsage: 5,
                indexCardNumber: 5,
                range: !1,
                rangeShot: 0,
                rangeDistraction: 70,
                speedMovement: 15,
                HP: 2100,
                ATK: 75,
                spellcard: !1,
                description: "巨大的海盗，只攻击塔"
            },
            bomb: {
                name: "小矮人",
                manaUsage: 3,
                indexCardNumber: 6,
                range: !0,
                rangeShot: 50,
                rangeDistraction: 90,
                speedMovement: 20,
                HP: 300,
                ATK: 50,
                spellcard: !1,
                description: "侏儒向敌军投掷炸弹，造成飞溅伤害"
            },
            fireball: {
                name: "火球",
                manaUsage: 4,
                indexCardNumber: 7,
                range: !0,
                spellcard: !0,
                damage: 500,
                description: "一团炽热的火球飞溅在燃烧着敌人的田野上"
            },
            freezer: {
                name: "寒冰花",
                manaUsage: 4,
                indexCardNumber: 8,
                timeDuration: 3,
                range: !0,
                spellcard: !0,
                description: "一股冷风，冰冷的空气使塔和单元结冰"
            },
            axeman: {
                name: "狂暴者",
                manaUsage: 2,
                indexCardNumber: 9,
                range: !1,
                rangeShot: 0,
                rangeDistraction: 70,
                speedMovement: 32,
                HP: 420,
                ATK: 65,
                spellcard: !1,
                description: "体积小，但非常灵活和快速，他们疯狂地战斗"
            },
            axethrow: {
                name: "收割者",
                manaUsage: 3,
                indexCardNumber: 10,
                range: !0,
                rangeShot: 50,
                rangeDistraction: 80,
                speedMovement: 32,
                HP: 300,
                ATK: 65,
                spellcard: !1,
                description: "以他在战场上的暴怒而闻名，杀手向他们的敌人投掷斧头"
            },
            hammer: {
                name: "疯狂锤子",
                manaUsage: 4,
                indexCardNumber: 11,
                range: !1,
                rangeShot: 0,
                rangeDistraction: 70,
                speedMovement: 25,
                HP: 1050,
                ATK: 35,
                spellcard: !1,
                description: "一个拿着锤子的英雄，有着伟大的行动和攻击力"
            },
            lightning: {
                name: "闪电光",
                manaUsage: 2,
                indexCardNumber: 12,
                range: !0,
                spellcard: !0,
                stunTime: 0.4,
                damage: 200,
                description: "一道闪电击中了敌人并使其晕眩"
            },
            mage: {
                name: "巫师",
                manaUsage: 4,
                indexCardNumber: 13,
                range: !0,
                rangeShot: 60,
                rangeDistraction: 90,
                speedMovement: 25,
                HP: 420,
                ATK: 75,
                spellcard: !1,
                description: "赛瑟尔的一位修行者利用自然之火击败了她的敌人"
            },
            tombcrush: {
                name: "雷神之锤",
                manaUsage: 4,
                indexCardNumber: 0,
                timeDuration: 3,
                DPS: 10,
                range: !0,
                spellcard: !1,
                description: "一种来自天堂的锤子，可以猛击敌人，破坏部队并使他们减速"
            }
        }
    },
    _UI = {
        winresult: {
            frames: {
                "blue-big-helm": {
                    frame: {
                        x: 322,
                        y: 90,
                        w: 111,
                        h: 88
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 111,
                        h: 88
                    },
                    sourceSize: {
                        w: 111,
                        h: 88
                    }
                },
                "blue-small-helm": {
                    frame: {
                        x: 322,
                        y: 232,
                        w: 97,
                        h: 78
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 97,
                        h: 78
                    },
                    sourceSize: {
                        w: 97,
                        h: 78
                    }
                },
                "ok-btn": {
                    frame: {
                        x: 322,
                        y: 179,
                        w: 110,
                        h: 52
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 110,
                        h: 52
                    },
                    sourceSize: {
                        w: 110,
                        h: 52
                    }
                },
                "red-big-helm": {
                    frame: {
                        x: 322,
                        y: 0,
                        w: 111,
                        h: 89
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 111,
                        h: 89
                    },
                    sourceSize: {
                        w: 111,
                        h: 89
                    }
                },
                "red-small-helm": {
                    frame: {
                        x: 322,
                        y: 311,
                        w: 97,
                        h: 77
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 97,
                        h: 77
                    },
                    sourceSize: {
                        w: 97,
                        h: 77
                    }
                },
                "red-win": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 321,
                        h: 160
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 321,
                        h: 160
                    },
                    sourceSize: {
                        w: 321,
                        h: 160
                    }
                },
                versus: {
                    frame: {
                        x: 133,
                        y: 178,
                        w: 54,
                        h: 34
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 54,
                        h: 34
                    },
                    sourceSize: {
                        w: 54,
                        h: 34
                    }
                },
                "blue-win": {
                    frame: {
                        x: 0,
                        y: 224,
                        w: 321,
                        h: 160
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 321,
                        h: 160
                    },
                    sourceSize: {
                        w: 321,
                        h: 160
                    }
                },
                winner: {
                    frame: {
                        x: 0,
                        y: 384,
                        w: 111,
                        h: 24
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 111,
                        h: 24
                    },
                    sourceSize: {
                        w: 111,
                        h: 24
                    }
                }
            },
            meta: {
                image: "media/graphics/game/ui/win-result-atlas.png",
                size: {
                    w: 434,
                    h: 409
                },
                scale: "1"
            }
        }
    },
    _CARD = {
        frames: {
            archer: {
                frame: {
                    x: 199,
                    y: 80,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 259,
                    y: 104,
                    w: 84,
                    h: 103
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            "arrow-shower": {
                frame: {
                    x: 0,
                    y: 86,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 0,
                    y: 111,
                    w: 84,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 68,
                    h: 79
                },
                sourceSize: {
                    w: 68,
                    h: 79
                }
            },
            warrior: {
                frame: {
                    x: 196,
                    y: 160,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 254,
                    y: 208,
                    w: 85,
                    h: 103
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            berserk: {
                frame: {
                    x: 0,
                    y: 166,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 0,
                    y: 215,
                    w: 84,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 65,
                    h: 79
                },
                sourceSize: {
                    w: 65,
                    h: 79
                }
            },
            giant: {
                frame: {
                    x: 134,
                    y: 80,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 174,
                    y: 104,
                    w: 84,
                    h: 103
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            bomb: {
                frame: {
                    x: 131,
                    y: 246,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 170,
                    y: 319,
                    w: 84,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            fireball: {
                frame: {
                    x: 7,
                    y: 3,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 10,
                    y: 2,
                    w: 84,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 77,
                    h: 85
                },
                sourceSize: {
                    w: 77,
                    h: 85
                }
            },
            freezer: {
                frame: {
                    x: 208,
                    y: 0,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 270,
                    y: 0,
                    w: 84,
                    h: 103
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            axeman: {
                frame: {
                    x: 143,
                    y: 0,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 185,
                    y: 0,
                    w: 84,
                    h: 103
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            axemanthrow: {
                frame: {
                    x: 78,
                    y: 0,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 100,
                    y: 0,
                    w: 84,
                    h: 103
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            hammer: {
                frame: {
                    x: 131,
                    y: 166,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 170,
                    y: 215,
                    w: 83,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            lightning: {
                frame: {
                    x: 65,
                    y: 169,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 84,
                    y: 219,
                    w: 85,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 81
                },
                sourceSize: {
                    w: 64,
                    h: 81
                }
            },
            mage: {
                frame: {
                    x: 68,
                    y: 87,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 89,
                    y: 111,
                    w: 84,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            },
            tombcrush: {
                frame: {
                    x: 0,
                    y: 246,
                    w: 64,
                    h: 79
                },
                frameBig: {
                    x: 0,
                    y: 319,
                    w: 84,
                    h: 104
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 64,
                    h: 79
                },
                sourceSize: {
                    w: 64,
                    h: 79
                }
            }
        },
        meta: {
            image: "media/graphics/game/card.png",
            imageBig: "media/graphics/game/card-big.png",
            imagebw: "media/graphics/game/cardbw.png",
            size: {
                w: 273,
                h: 326
            },
            scale: "1"
        }
    },
    _TROOPS_CARD = {
        frames: {
            archer: {
                frame: {
                    x: 117,
                    y: 46,
                    w: 36,
                    h: 44
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 36,
                    h: 44
                },
                sourceSize: {
                    w: 36,
                    h: 44
                }
            },
            bomb: {
                frame: {
                    x: 49,
                    y: 121,
                    w: 35,
                    h: 29
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 35,
                    h: 29
                },
                sourceSize: {
                    w: 35,
                    h: 29
                }
            },
            giant: {
                frame: {
                    x: 0,
                    y: 0,
                    w: 75,
                    h: 69
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 75,
                    h: 69
                },
                sourceSize: {
                    w: 75,
                    h: 69
                }
            },
            hammer: {
                frame: {
                    x: 0,
                    y: 70,
                    w: 63,
                    h: 46
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 63,
                    h: 46
                },
                sourceSize: {
                    w: 63,
                    h: 46
                }
            },
            mage: {
                frame: {
                    x: 117,
                    y: 91,
                    w: 31,
                    h: 39
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 31,
                    h: 39
                },
                sourceSize: {
                    w: 31,
                    h: 39
                }
            },
            warrior: {
                frame: {
                    x: 64,
                    y: 70,
                    w: 52,
                    h: 50
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 52,
                    h: 50
                },
                sourceSize: {
                    w: 52,
                    h: 50
                }
            },
            xmen: {
                frame: {
                    x: 0,
                    y: 117,
                    w: 48,
                    h: 41
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 48,
                    h: 41
                },
                sourceSize: {
                    w: 48,
                    h: 41
                }
            },
            xthrow: {
                frame: {
                    x: 76,
                    y: 0,
                    w: 43,
                    h: 45
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 43,
                    h: 45
                },
                sourceSize: {
                    w: 43,
                    h: 45
                }
            },
            ars: {
                frame: {
                    x: 155,
                    y: 0,
                    w: 115,
                    h: 115
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 115,
                    h: 115
                },
                sourceSize: {
                    w: 115,
                    h: 115
                }
            },
            ar: {
                frame: {
                    x: 234,
                    y: 200,
                    w: 90,
                    h: 107
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 90,
                    h: 107
                },
                sourceSize: {
                    w: 90,
                    h: 107
                }
            },
            brs: {
                frame: {
                    x: 0,
                    y: 160,
                    w: 125,
                    h: 100
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 125,
                    h: 100
                },
                sourceSize: {
                    w: 125,
                    h: 100
                }
            },
            exs: {
                frame: {
                    x: 0,
                    y: 261,
                    w: 45,
                    h: 45
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 45,
                    h: 45
                },
                sourceSize: {
                    w: 45,
                    h: 45
                }
            },
            fs: {
                frame: {
                    x: 126,
                    y: 160,
                    w: 116,
                    h: 96
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 116,
                    h: 96
                },
                sourceSize: {
                    w: 116,
                    h: 96
                }
            },
            hcs: {
                frame: {
                    x: 243,
                    y: 116,
                    w: 80,
                    h: 80
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 80,
                    h: 80
                },
                sourceSize: {
                    w: 80,
                    h: 80
                }
            },
            ls: {
                frame: {
                    x: 247,
                    y: 252,
                    w: 77,
                    h: 55
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 77,
                    h: 55
                },
                sourceSize: {
                    w: 77,
                    h: 55
                }
            }
        },
        meta: {
            image: "media/graphics/game/troops-card.png",
            size: {
                w: 324,
                h: 307
            },
            scale: "1"
        }
    },
    _LOADING = {
        frames: {
            "loader-bg": {
                frame: {
                    x: 0,
                    y: 0,
                    w: 252,
                    h: 19
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 252,
                    h: 19
                },
                sourceSize: {
                    w: 252,
                    h: 19
                }
            },
            "loader-load": {
                frame: {
                    x: 0,
                    y: 20,
                    w: 247,
                    h: 13
                },
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 247,
                    h: 13
                },
                sourceSize: {
                    w: 247,
                    h: 13
                }
            }
        },
        meta: {
            image: "card.png",
            size: {
                w: 253,
                h: 34
            },
            scale: "1"
        }
    };
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !1,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = { 
};
var MobileAdInGameHeader = {
     
};
var MobileAdInGameFooter = {
     
};
var MobileAdInGameEnd = {
     
};
(function(b, c) {
    function d(b, A, d) {
        if (d === c && 1 === b.nodeType)
            if (d = "data-" + A.replace(sc, "-$1").toLowerCase(), d = b.getAttribute(d), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : tc.test(d) ? f.parseJSON(d) : d
                } catch (p) {}
                f.data(b, A, d)
            } else d = c;
        return d
    }

    function e(b) {
        for (var c in b)
            if (!("data" === c && f.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function j() {
        return !0
    }

    function t(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function n(b,
        c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function s(b, c, d) {
        c = c || 0;
        if (f.isFunction(c)) return f.grep(b, function(b, B) {
            return !!c.call(b, B, b) === d
        });
        if (c.nodeType) return f.grep(b, function(b) {
            return b === c === d
        });
        if ("string" == typeof c) {
            var p = f.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (uc.test(c)) return f.filter(c, p, !d);
            c = f.filter(c, p)
        }
        return f.grep(b, function(b) {
            return 0 <= f.inArray(b, c) === d
        })
    }

    function x(b) {
        var c = xb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function r(b, c) {
        if (1 === c.nodeType && f.hasData(b)) {
            var d, p, e;
            p = f._data(b);
            var q = f._data(c, p),
                l = p.events;
            if (l)
                for (d in delete q.handle, q.events = {}, l) {
                    p = 0;
                    for (e = l[d].length; p < e; p++) f.event.add(c, d, l[d][p])
                }
            q.data && (q.data = f.extend({}, q.data))
        }
    }

    function z(b, c) {
        var d;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), d = c.nodeName.toLowerCase(), "object" === d ? (c.parentNode && (c.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(c.innerHTML) &&
            (c.innerHTML = b.innerHTML)) : "input" === d && yb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === d ? c.selected = b.defaultSelected : "input" === d || "textarea" === d ? c.defaultValue = b.defaultValue : "script" === d && c.text !== b.text && (c.text = b.text), c.removeAttribute(f.expando))
    }

    function C(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function E(b) {
        yb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function m(b, c) {
        if (c in b) return c;
        for (var d = c.charAt(0).toUpperCase() + c.slice(1), f = c, e = zb.length; e--;)
            if (c = zb[e] + d, c in b) return c;
        return f
    }

    function u(b, c) {
        return b = c || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b)
    }

    function y(b, c) {
        for (var d, p, e = [], q = 0, l = b.length; q < l; q++) d = b[q], d.style && (e[q] = f._data(d, "olddisplay"), c ? (!e[q] && "none" === d.style.display && (d.style.display = ""), "" === d.style.display && u(d) && (e[q] = f._data(d, "olddisplay", wa(d.nodeName)))) : (p = O(d, "display"), !e[q] &&
            "none" !== p && f._data(d, "olddisplay", p)));
        for (q = 0; q < l; q++)
            if (d = b[q], d.style && (!c || "none" === d.style.display || "" === d.style.display)) d.style.display = c ? e[q] || "" : "none";
        return b
    }

    function L(b, c, d) {
        return (b = vc.exec(c)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : c
    }

    function P(b, c, d, p) {
        c = d === (p ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var e = 0; 4 > c; c += 2) "margin" === d && (e += f.css(b, d + da[c], !0)), p ? ("content" === d && (e -= parseFloat(O(b, "padding" + da[c])) || 0), "margin" !== d && (e -= parseFloat(O(b, "border" + da[c] + "Width")) || 0)) : (e +=
            parseFloat(O(b, "padding" + da[c])) || 0, "padding" !== d && (e += parseFloat(O(b, "border" + da[c] + "Width")) || 0));
        return e
    }

    function K(b, c, d) {
        var p = "width" === c ? b.offsetWidth : b.offsetHeight,
            e = !0,
            q = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= p || null == p) {
            p = O(b, c);
            if (0 > p || null == p) p = b.style[c];
            if (xa.test(p)) return p;
            e = q && (f.support.boxSizingReliable || p === b.style[c]);
            p = parseFloat(p) || 0
        }
        return p + P(b, c, d || (q ? "border" : "content"), e) + "px"
    }

    function wa(b) {
        if (Xa[b]) return Xa[b];
        var c = f("<" + b + ">").appendTo(D.body),
            d = c.css("display");
        c.remove();
        if ("none" === d || "" === d) {
            ka = D.body.appendChild(ka || f.extend(D.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!la || !ka.createElement) la = (ka.contentWindow || ka.contentDocument).document, la.write("<!doctype html><html><body>"), la.close();
            c = la.body.appendChild(la.createElement(b));
            d = O(c, "display");
            D.body.removeChild(ka)
        }
        return Xa[b] = d, d
    }

    function ya(b, c, d, p) {
        var e;
        if (f.isArray(c)) f.each(c, function(c, A) {
            d || wc.test(b) ? p(b, A) : ya(b + "[" + ("object" == typeof A ? c : "") + "]",
                A, d, p)
        });
        else if (!d && "object" === f.type(c))
            for (e in c) ya(b + "[" + e + "]", c[e], d, p);
        else p(b, c)
    }

    function I(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var p, e, q = c.toLowerCase().split(ea),
                l = 0,
                g = q.length;
            if (f.isFunction(d))
                for (; l < g; l++) p = q[l], (e = /^\+/.test(p)) && (p = p.substr(1) || "*"), p = b[p] = b[p] || [], p[e ? "unshift" : "push"](d)
        }
    }

    function T(b, A, d, f, e, q) {
        e = e || A.dataTypes[0];
        q = q || {};
        q[e] = !0;
        var l;
        e = b[e];
        for (var g = 0, m = e ? e.length : 0, j = b === Za; g < m && (j || !l); g++) l = e[g](A, d, f), "string" == typeof l && (!j || q[l] ? l =
            c : (A.dataTypes.unshift(l), l = T(b, A, d, f, l, q)));
        return (j || !l) && !q["*"] && (l = T(b, A, d, f, "*", q)), l
    }

    function Ab(b, A) {
        var d, p, e = f.ajaxSettings.flatOptions || {};
        for (d in A) A[d] !== c && ((e[d] ? b : p || (p = {}))[d] = A[d]);
        p && f.extend(!0, b, p)
    }

    function za() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    }

    function qa() {
        return setTimeout(function() {
            Aa = c
        }, 0), Aa = f.now()
    }
	
	var Bb;
	
    $.ajax({url:"/game/search",async:false,success:function(){Bb = function (b, c, d) {
        var p, e = 0,
            q = Ba.length,
            l = f.Deferred().always(function() {
                delete g.elem
            }),
            g = function() {
                for (var c = Aa || qa(), c = Math.max(0, m.startTime + m.duration - c),
                    d = 1 - (c / m.duration || 0), A = 0, v = m.tweens.length; A < v; A++) m.tweens[A].run(d);
                return l.notifyWith(b, [m, d, c]), 1 > d && v ? c : (l.resolveWith(b, [m]), !1)
            },
            m = l.promise({
                elem: b,
                props: f.extend({}, c),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: Aa || qa(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, d) {
                    var A = f.Tween(b, m.opts, c, d, m.opts.specialEasing[c] || m.opts.easing);
                    return m.tweens.push(A), A
                },
                stop: function(c) {
                    for (var d = 0, A = c ? m.tweens.length : 0; d < A; d++) m.tweens[d].run(1);
                    return c ? l.resolveWith(b, [m, c]) : l.rejectWith(b, [m, c]), this
                }
            });
        c = m.props;
        d = m.opts.specialEasing;
        var j, n, u, y;
        for (p in c)
            if (j = f.camelCase(p), n = d[j], u = c[p], f.isArray(u) && (n = u[1], u = c[p] = u[0]), p !== j && (c[j] = u, delete c[p]), (y = f.cssHooks[j]) && "expand" in y)
                for (p in u = y.expand(u), delete c[j], u) p in c || (c[p] = u[p], d[p] = n);
            else d[j] = n;
        for (; e < q; e++)
            if (p = Ba[e].call(m, b, c, m.opts)) return p;
        var s = m;
        f.each(c, function(b, c) {
            for (var B = (ra[b] || []).concat(ra["*"]), d = 0, A = B.length; d < A && !B[d].call(s, b, c); d++);
        });
        return f.isFunction(m.opts.start) &&
            m.opts.start.call(b, m), f.fx.timer(f.extend(g, {
                anim: m,
                queue: m.opts.queue,
                elem: b
            })), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
    }}});

    function Q(b, c, d, f, e) {
        return new Q.prototype.init(b, c, d, f, e)
    }

    function Ca(b, c) {
        var d, f = {
                height: b
            },
            e = 0;
        for (c = c ? 1 : 0; 4 > e; e += 2 - c) d = da[e], f["margin" + d] = f["padding" + d] = b;
        return c && (f.opacity = f.width = b), f
    }

    function Cb(b) {
        return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db, Da, D = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac = b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        Z = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        ab = Object.prototype.hasOwnProperty,
        bb = String.prototype.trim,
        f = function(b, c) {
            return new f.fn.init(b, c, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        ea = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, c) {
            return (c + "").toUpperCase()
        },
        Fa = function() {
            D.addEventListener ? (D.removeEventListener("DOMContentLoaded", Fa, !1), f.ready()) : "complete" === D.readyState && (D.detachEvent("onreadystatechange", Fa), f.ready())
        },
        Hb = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, d, v) {
            var p, e;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) &&
                    ">" === b.charAt(b.length - 1) && 3 <= b.length ? p = [null, b, null] : p = Fc.exec(b);
                if (p && (p[1] || !d)) {
                    if (p[1]) return d = d instanceof f ? d[0] : d, e = d && d.nodeType ? d.ownerDocument || d : D, b = f.parseHTML(p[1], e, !0), Gb.test(p[1]) && f.isPlainObject(d) && this.attr.call(b, d, !0), f.merge(this, b);
                    if ((d = D.getElementById(p[2])) && d.parentNode) {
                        if (d.id !== p[2]) return v.find(b);
                        this.length = 1;
                        this[0] = d
                    }
                    return this.context = D, this.selector = b, this
                }
                return !d || d.jquery ? (d || v).find(b) : this.constructor(d).find(b)
            }
            return f.isFunction(b) ? v.ready(b) :
                (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Z.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, c, d) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + d : c && (b.selector = this.selector + "." + c + "(" + d + ")"), b
        },
        each: function(b,
            c) {
            return f.each(this, b, c)
        },
        ready: function(b) {
            return f.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b, d, v, p, e, q, l = arguments[0] || {},
            g = 1,
            m = arguments.length,
            j = !1;
        "boolean" == typeof l && (j = l, l = arguments[1] || {}, g = 2);
        "object" != typeof l && !f.isFunction(l) && (l = {});
        for (m === g && (l = this, --g); g < m; g++)
            if (null != (b = arguments[g]))
                for (d in b) v = l[d], p = b[d], l !== p && (j && p && (f.isPlainObject(p) || (e = f.isArray(p))) ? (e ? (e = !1, q = v && f.isArray(v) ? v : []) : q = v && f.isPlainObject(v) ? v : {}, l[d] = f.extend(j, q, p)) : p !== c && (l[d] = p));
        return l
    };
    f.extend({
        noConflict: function(c) {
            return b.$ ===
                f && (b.$ = Bc), c && b.jQuery === f && (b.jQuery = Ac), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? f.readyWait++ : f.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!D.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Da.resolveWith(D, [f]), f.fn.trigger && f(D).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === f.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === f.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) &&
                isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1;
            try {
                if (b.constructor && !ab.call(b, "constructor") && !ab.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (var v in b);
            return v === c || ab.call(b, v)
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, c, d) {
            var p;
            return !b || "string" != typeof b ? null :
                ("boolean" == typeof c && (d = c, c = 0), c = c || D, (p = Gb.exec(b)) ? [c.createElement(p[1])] : (p = f.buildFragment([b], c, d ? null : []), f.merge([], (p.cacheable ? f.clone(p.fragment) : p.fragment).childNodes)))
        },
        parseJSON: function(c) {
            if (!c || "string" != typeof c) return null;
            c = f.trim(c);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
            if (Gc.test(c.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + c))();
            f.error("Invalid JSON: " + c)
        },
        parseXML: function(B) {
            var d, v;
            if (!B || "string" != typeof B) return null;
            try {
                b.DOMParser ?
                    (v = new DOMParser, d = v.parseFromString(B, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(B))
            } catch (p) {
                d = c
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + B), d
        },
        noop: function() {},
        globalEval: function(c) {
            c && Dc.test(c) && (b.execScript || function(c) {
                b.eval.call(b, c)
            })(c)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, d, v) {
            var p, e = 0,
                q = b.length,
                l = q === c || f.isFunction(b);
            if (v)
                if (l)
                    for (p in b) {
                        if (!1 === d.apply(b[p], v)) break
                    } else
                        for (; e < q && !1 !== d.apply(b[e++], v););
                else if (l)
                for (p in b) {
                    if (!1 === d.call(b[p], p, b[p])) break
                } else
                    for (; e < q && !1 !== d.call(b[e], e, b[e++]););
            return b
        },
        trim: bb && !bb.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : bb.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, c) {
            var d, p = c || [];
            return null != b && (d = f.type(b), null == b.length || "string" === d || "function" ===
                d || "regexp" === d || f.isWindow(b) ? Eb.call(p, b) : f.merge(p, b)), p
        },
        inArray: function(b, c, d) {
            var f;
            if (c) {
                if (Fb) return Fb.call(c, b, d);
                f = c.length;
                for (d = d ? 0 > d ? Math.max(0, f + d) : d : 0; d < f; d++)
                    if (d in c && c[d] === b) return d
            }
            return -1
        },
        merge: function(b, d) {
            var f = d.length,
                p = b.length,
                e = 0;
            if ("number" == typeof f)
                for (; e < f; e++) b[p++] = d[e];
            else
                for (; d[e] !== c;) b[p++] = d[e++];
            return b.length = p, b
        },
        grep: function(b, c, d) {
            var f, e = [],
                q = 0,
                l = b.length;
            for (d = !!d; q < l; q++) f = !!c(b[q], q), d !== f && e.push(b[q]);
            return e
        },
        map: function(b, d, v) {
            var p,
                e, q = [],
                l = 0,
                g = b.length;
            if (b instanceof f || g !== c && "number" == typeof g && (0 < g && b[0] && b[g - 1] || 0 === g || f.isArray(b)))
                for (; l < g; l++) p = d(b[l], l, v), null != p && (q[q.length] = p);
            else
                for (e in b) p = d(b[e], e, v), null != p && (q[q.length] = p);
            return q.concat.apply([], q)
        },
        guid: 1,
        proxy: function(b, d) {
            var v, p, e;
            return "string" == typeof d && (v = b[d], d = b, b = v), f.isFunction(b) ? (p = Z.call(arguments, 2), e = function() {
                return b.apply(d, p.concat(Z.call(arguments)))
            }, e.guid = b.guid = b.guid || f.guid++, e) : c
        },
        access: function(b, d, v, p, e, q, l) {
            var g, m = null ==
                v,
                j = 0,
                n = b.length;
            if (v && "object" == typeof v) {
                for (j in v) f.access(b, d, j, v[j], 1, q, p);
                e = 1
            } else if (p !== c) {
                g = l === c && f.isFunction(p);
                m && (g ? (g = d, d = function(b, c, B) {
                    return g.call(f(b), B)
                }) : (d.call(b, p), d = null));
                if (d)
                    for (; j < n; j++) d(b[j], v, g ? p.call(b[j], j, d(b[j], v)) : p, l);
                e = 1
            }
            return e ? b : m ? d.call(b) : n ? d(b[0], v) : q
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(c) {
        if (!Da)
            if (Da = f.Deferred(), "complete" === D.readyState) setTimeout(f.ready, 1);
            else if (D.addEventListener) D.addEventListener("DOMContentLoaded",
            Fa, !1), b.addEventListener("load", f.ready, !1);
        else {
            D.attachEvent("onreadystatechange", Fa);
            b.attachEvent("onload", f.ready);
            var d = !1;
            try {
                d = null == b.frameElement && D.documentElement
            } catch (v) {}
            d && d.doScroll && function X() {
                if (!f.isReady) {
                    try {
                        d.doScroll("left")
                    } catch (b) {
                        return setTimeout(X, 50)
                    }
                    f.ready()
                }
            }()
        }
        return Da.promise(c)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Hb["[object " + c + "]"] = c.toLowerCase()
    });
    Db = f(D);
    var Ib = {};
    f.Callbacks = function(b) {
        var d;
        if ("string" ==
            typeof b) {
            if (!(d = Ib[b])) {
                d = b;
                var v = Ib[d] = {};
                d = (f.each(d.split(ea), function(b, c) {
                    v[c] = !0
                }), v)
            }
        } else d = f.extend({}, b);
        b = d;
        var p, e, q, l, g, m, j = [],
            n = !b.once && [],
            u = function(c) {
                p = b.memory && c;
                e = !0;
                m = l || 0;
                l = 0;
                g = j.length;
                for (q = !0; j && m < g; m++)
                    if (!1 === j[m].apply(c[0], c[1]) && b.stopOnFalse) {
                        p = !1;
                        break
                    }
                q = !1;
                j && (n ? n.length && u(n.shift()) : p ? j = [] : y.disable())
            },
            y = {
                add: function() {
                    if (j) {
                        var c = j.length;
                        (function xc(c) {
                            f.each(c, function(c, d) {
                                var A = f.type(d);
                                "function" === A && (!b.unique || !y.has(d)) ? j.push(d) : d && d.length && "string" !==
                                    A && xc(d)
                            })
                        })(arguments);
                        q ? g = j.length : p && (l = c, u(p))
                    }
                    return this
                },
                remove: function() {
                    return j && f.each(arguments, function(b, c) {
                        for (var B; - 1 < (B = f.inArray(c, j, B));) j.splice(B, 1), q && (B <= g && g--, B <= m && m--)
                    }), this
                },
                has: function(b) {
                    return -1 < f.inArray(b, j)
                },
                empty: function() {
                    return j = [], this
                },
                disable: function() {
                    return j = n = p = c, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return n = c, p || y.disable(), this
                },
                locked: function() {
                    return !n
                },
                fireWith: function(b, c) {
                    return c = c || [], c = [b, c.slice ? c.slice() : c], j && (!e || n) &&
                        (q ? n.push(c) : u(c)), this
                },
                fire: function() {
                    return y.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return y
    };
    f.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                d = "pending",
                p = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(B) {
                            f.each(c, function(c,
                                d) {
                                var A = d[0],
                                    v = b[c];
                                e[d[1]](f.isFunction(v) ? function() {
                                    var b = v.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(B.resolve).fail(B.reject).progress(B.notify) : B[A + "With"](this === e ? B : this, [b])
                                } : B[A])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? f.extend(b, p) : p
                    }
                },
                e = {};
            return p.pipe = p.then, f.each(c, function(b, B) {
                var f = B[2],
                    g = B[3];
                p[B[1]] = f.add;
                g && f.add(function() {
                    d = g
                }, c[b ^ 1][2].disable, c[2][2].lock);
                e[B[0]] = f.fire;
                e[B[0] + "With"] = f.fireWith
            }), p.promise(e), b && b.call(e, e), e
        },
        when: function(b) {
            var c = 0,
                d = Z.call(arguments),
                p = d.length,
                e = 1 !== p || b && f.isFunction(b.promise) ? p : 0,
                q = 1 === e ? b : f.Deferred(),
                l = function(b, c, B) {
                    return function(d) {
                        c[b] = this;
                        B[b] = 1 < arguments.length ? Z.call(arguments) : d;
                        B === g ? q.notifyWith(c, B) : --e || q.resolveWith(c, B)
                    }
                },
                g, m, j;
            if (1 < p) {
                g = Array(p);
                m = Array(p);
                for (j = Array(p); c < p; c++) d[c] && f.isFunction(d[c].promise) ? d[c].promise().done(l(c, j, d)).fail(q.reject).progress(l(c, m, g)) : --e
            }
            return e || q.resolveWith(j, d), q.promise()
        }
    });
    var Nc = f,
        cb, N, Ga, fa, Ha, Ia, R, ga, Ja, db,
        sa, Jb, J = D.createElement("div");
    J.setAttribute("className", "t");
    J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = J.getElementsByTagName("*");
    fa = J.getElementsByTagName("a")[0];
    fa.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) cb = {};
    else {
        Ha = D.createElement("select");
        Ia = Ha.appendChild(D.createElement("option"));
        R = J.getElementsByTagName("input")[0];
        N = {
            leadingWhitespace: 3 === J.firstChild.nodeType,
            tbody: !J.getElementsByTagName("tbody").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /top/.test(fa.getAttribute("style")),
            hrefNormalized: "/a" === fa.getAttribute("href"),
            opacity: /^0.5/.test(fa.style.opacity),
            cssFloat: !!fa.style.cssFloat,
            checkOn: "on" === R.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== J.className,
            enctype: !!D.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === D.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        R.checked = !0;
        N.noCloneChecked = R.cloneNode(!0).checked;
        Ha.disabled = !0;
        N.optDisabled = !Ia.disabled;
        try {
            delete J.test
        } catch (Pd) {
            N.deleteExpando = !1
        }!J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Jb = function() {
            N.noCloneEvent = !1
        }), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Jb));
        R = D.createElement("input");
        R.value = "t";
        R.setAttribute("type", "radio");
        N.radioValue = "t" === R.value;
        R.setAttribute("checked",
            "checked");
        R.setAttribute("name", "t");
        J.appendChild(R);
        ga = D.createDocumentFragment();
        ga.appendChild(J.lastChild);
        N.checkClone = ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
        N.appendChecked = R.checked;
        ga.removeChild(R);
        ga.appendChild(J);
        if (J.attachEvent)
            for (db in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ja = "on" + db, (sa = Ja in J) || (J.setAttribute(Ja, "return;"), sa = "function" == typeof J[Ja]), N[db + "Bubbles"] = sa;
        cb = (f(function() {
            var c, d, f, p, e = D.getElementsByTagName("body")[0];
            e && (c = D.createElement("div"), c.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", e.insertBefore(c, e.firstChild), d = D.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", sa = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", N.reliableHiddenOffsets = sa && 0 === f[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                N.boxSizing = 4 === d.offsetWidth, N.doesNotIncludeMarginInBodyOffset = 1 !== e.offsetTop, b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(d, null) || {}).top, N.boxSizingReliable = "4px" === (b.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, p = D.createElement("div"), p.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", p.style.marginRight = p.style.width = "0", d.style.width = "1px", d.appendChild(p), N.reliableMarginRight = !parseFloat((b.getComputedStyle(p, null) || {}).marginRight)),
                "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", N.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", N.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), e.removeChild(c))
        }), ga.removeChild(J), Ga = fa = Ha = Ia = R = ga = J = null, N)
    }
    Nc.support = cb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b)
        },
        data: function(b, d, v, p) {
            if (f.acceptData(b)) {
                var e, q, l = f.expando,
                    g = "string" == typeof d,
                    m = b.nodeType,
                    j = m ? f.cache : b,
                    n = m ? b[l] : b[l] && l;
                if (n && j[n] && (p || j[n].data) || !(g && v === c)) {
                    n || (m ? b[l] = n = f.deletedIds.pop() || f.guid++ : n = l);
                    j[n] || (j[n] = {},
                        m || (j[n].toJSON = f.noop));
                    if ("object" == typeof d || "function" == typeof d) p ? j[n] = f.extend(j[n], d) : j[n].data = f.extend(j[n].data, d);
                    return e = j[n], p || (e.data || (e.data = {}), e = e.data), v !== c && (e[f.camelCase(d)] = v), g ? (q = e[d], null == q && (q = e[f.camelCase(d)])) : q = e, q
                }
            }
        },
        removeData: function(b, c, d) {
            if (f.acceptData(b)) {
                var p, X, q, l = b.nodeType,
                    g = l ? f.cache : b,
                    m = l ? b[f.expando] : f.expando;
                if (g[m]) {
                    if (c && (p = d ? g[m] : g[m].data)) {
                        f.isArray(c) || (c in p ? c = [c] : (c = f.camelCase(c), c in p ? c = [c] : c = c.split(" ")));
                        X = 0;
                        for (q = c.length; X < q; X++) delete p[c[X]];
                        if (!(d ? e : f.isEmptyObject)(p)) return
                    }
                    if (d || !(delete g[m].data, !e(g[m]))) l ? f.cleanData([b], !0) : f.support.deleteExpando || g != g.window ? delete g[m] : g[m] = null
                }
            }
        },
        _data: function(b, c, d) {
            return f.data(b, c, d, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && f.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    f.fn.extend({
        data: function(b, A) {
            var v, e, X, q, l, g = this[0],
                m = 0,
                j = null;
            if (b === c) {
                if (this.length && (j = f.data(g), 1 === g.nodeType && !f._data(g, "parsedAttrs"))) {
                    X = g.attributes;
                    for (l = X.length; m <
                        l; m++) q = X[m].name, q.indexOf("data-") || (q = f.camelCase(q.substring(5)), d(g, q, j[q]));
                    f._data(g, "parsedAttrs", !0)
                }
                return j
            }
            return "object" == typeof b ? this.each(function() {
                f.data(this, b)
            }) : (v = b.split(".", 2), v[1] = v[1] ? "." + v[1] : "", e = v[1] + "!", f.access(this, function(A) {
                if (A === c) return j = this.triggerHandler("getData" + e, [v[0]]), j === c && g && (j = f.data(g, b), j = d(g, b, j)), j === c && v[1] ? this.data(v[0]) : j;
                v[1] = A;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + e, v);
                    f.data(this, b, A);
                    c.triggerHandler("changeData" +
                        e, v)
                })
            }, null, A, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, c, d) {
            var e;
            if (b) return c = (c || "fx") + "queue", e = f._data(b, c), d && (!e || f.isArray(d) ? e = f._data(b, c, f.makeArray(d)) : e.push(d)), e || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = f.queue(b, c),
                e = d.length,
                g = d.shift(),
                q = f._queueHooks(b, c),
                l = function() {
                    f.dequeue(b, c)
                };
            "inprogress" === g && (g = d.shift(), e--);
            g && ("fx" === c && d.unshift("inprogress"), delete q.stop, g.call(b, l, q));
            !e && q && q.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return f._data(b, d) || f._data(b, d, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, c + "queue", !0);
                    f.removeData(b, d, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, d) {
            var v = 2;
            return "string" != typeof b && (d = b, b = "fx", v--), arguments.length < v ? f.queue(this[0], b) : d === c ? this : this.each(function() {
                var c = f.queue(this, b, d);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this,
                    b)
            })
        },
        delay: function(b, c) {
            return b = f.fx ? f.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var A = setTimeout(c, b);
                d.stop = function() {
                    clearTimeout(A)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, d) {
            var v, e = 1,
                g = f.Deferred(),
                q = this,
                l = this.length,
                m = function() {
                    --e || g.resolveWith(q, [q])
                };
            "string" != typeof b && (d = b, b = c);
            for (b = b || "fx"; l--;)(v = f._data(q[l], b + "queueHooks")) && v.empty && (e++, v.empty.add(m));
            return m(), g.promise(d)
        }
    });
    var aa, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, c) {
            return f.access(this, f.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return f.access(this, f.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = f.propFix[b] ||
                b, this.each(function() {
                    try {
                        this[b] = c, delete this[b]
                    } catch (d) {}
                })
        },
        addClass: function(b) {
            var c, d, e, g, q, l, m;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(ea);
                d = 0;
                for (e = this.length; d < e; d++)
                    if (g = this[d], 1 === g.nodeType)
                        if (!g.className && 1 === c.length) g.className = b;
                        else {
                            q = " " + g.className + " ";
                            l = 0;
                            for (m = c.length; l < m; l++) 0 > q.indexOf(" " + c[l] + " ") && (q += c[l] + " ");
                            g.className = f.trim(q)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var d,
                v, e, g, q, l, m;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                d = (b || "").split(ea);
                l = 0;
                for (m = this.length; l < m; l++)
                    if (e = this[l], 1 === e.nodeType && e.className) {
                        v = (" " + e.className + " ").replace(Mb, " ");
                        g = 0;
                        for (q = d.length; g < q; g++)
                            for (; 0 <= v.indexOf(" " + d[g] + " ");) v = v.replace(" " + d[g] + " ", " ");
                        e.className = b ? f.trim(v) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                e = "boolean" == typeof c;
            return f.isFunction(b) ? this.each(function(d) {
                f(this).toggleClass(b.call(this,
                    d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var g, q = 0, l = f(this), m = c, j = b.split(ea); g = j[q++];) m = e ? m : !l.hasClass(g), l[m ? "addClass" : "removeClass"](g);
                else if ("undefined" === d || "boolean" === d) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var d, v, e, g = this[0];
            if (arguments.length) return e = f.isFunction(b), this.each(function(v) {
                var l, g = f(this);
                if (1 === this.nodeType && (e ? l = b.call(this, v, g.val()) : l = b, null == l ? l = "" : "number" == typeof l ? l += "" : f.isArray(l) && (l = f.map(l, function(b) {
                    return null == b ? "" : b + ""
                })), d = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !d || !("set" in d) || d.set(this, l, "value") === c)) this.value = l
            });
            if (g) return d = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()], d && "get" in d && (v = d.get(g,
                "value")) !== c ? v : (v = g.value, "string" == typeof v ? v.replace(Oc, "") : null == v ? "" : v)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, d, e = b.selectedIndex,
                        g = [],
                        q = b.options,
                        l = "select-one" === b.type;
                    if (0 > e) return null;
                    b = l ? e : 0;
                    for (d = l ? e + 1 : q.length; b < d; b++)
                        if (c = q[b], c.selected && (f.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !f.nodeName(c.parentNode, "optgroup"))) {
                            c = f(c).val();
                            if (l) return c;
                            g.push(c)
                        }
                    return l && !g.length && q.length ? f(q[e]).val() : g
                },
                set: function(b, c) {
                    var d = f.makeArray(c);
                    return f(b).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, d, v, e) {
            var g, q, l = b.nodeType;
            if (b && !(3 === l || 8 === l || 2 === l)) {
                if (e && f.isFunction(f.fn[d])) return f(b)[d](v);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, d, v);
                (e = 1 !== l || !f.isXMLDoc(b)) && (d = d.toLowerCase(), q = f.attrHooks[d] || (Nb.test(d) ? Kb :
                    aa));
                if (v !== c) {
                    if (null === v) {
                        f.removeAttr(b, d);
                        return
                    }
                    return q && "set" in q && e && (g = q.set(b, v, d)) !== c ? g : (b.setAttribute(d, v + ""), v)
                }
                return q && "get" in q && e && null !== (g = q.get(b, d)) ? g : (g = b.getAttribute(d), null === g ? c : g)
            }
        },
        removeAttr: function(b, c) {
            var d, e, g, q, l = 0;
            if (c && 1 === b.nodeType)
                for (e = c.split(ea); l < e.length; l++)(g = e[l]) && (d = f.propFix[g] || g, q = Nb.test(g), q || f.attr(b, g, ""), b.removeAttribute(Ob ? g : d), q && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === c && f.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return aa && f.nodeName(b, "button") ? aa.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, d) {
                    if (aa && f.nodeName(b, "button")) return aa.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, d, e) {
            var p, g, q, l = b.nodeType;
            if (b && !(3 === l || 8 === l || 2 === l)) return q = 1 !== l || !f.isXMLDoc(b), q && (d = f.propFix[d] || d, g = f.propHooks[d]), e !== c ? g && "set" in g && (p = g.set(b, e, d)) !== c ? p : b[d] = e : g && "get" in g && null !== (p = g.get(b, d)) ? p : b[d]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b,
            d) {
            var e, p = f.prop(b, d);
            return !0 === p || "boolean" != typeof p && (e = b.getAttributeNode(d)) && !1 !== e.nodeValue ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
            var e;
            return !1 === c ? f.removeAttr(b, d) : (e = f.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, aa = f.valHooks.button = {
        get: function(b, d) {
            var f;
            return f = b.getAttributeNode(d), f && (Lb[d] ? "" !== f.value : f.specified) ? f.value : c
        },
        set: function(b, c, d) {
            var f = b.getAttributeNode(d);
            return f || (f = D.createAttribute(d), b.setAttributeNode(f)),
                f.value = c + ""
        }
    }, f.each(["width", "height"], function(b, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            set: function(b, d) {
                if ("" === d) return b.setAttribute(c, "auto"), d
            }
        })
    }), f.attrHooks.contenteditable = {
        get: aa.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            aa.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, d) {
        f.attrHooks[d] = f.extend(f.attrHooks[d], {
            get: function(b) {
                b = b.getAttribute(d, 2);
                return null === b ? c : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() ||
                c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(b, c) {
                if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c)
            }
        })
    });
    var eb = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return f.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(b, d, e, p, g) {
            var q, l, m, j, n, u, y, s, r;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !e || !(q = f._data(b)))) {
                e.handler && (y = e, e = y.handler, g = y.selector);
                e.guid || (e.guid = f.guid++);
                (m = q.events) || (q.events = m = {});
                (l = q.handle) || (q.handle = l = function(b) {
                    return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(l.elem, arguments) : c
                }, l.elem = b);
                d = f.trim(Rb(d)).split(" ");
                for (q = 0; q < d.length; q++) {
                    j = Pb.exec(d[q]) || [];
                    n = j[1];
                    u = (j[2] || "").split(".").sort();
                    r = f.event.special[n] || {};
                    n = (g ? r.delegateType : r.bindType) || n;
                    r = f.event.special[n] || {};
                    j = f.extend({
                        type: n,
                        origType: j[1],
                        data: p,
                        handler: e,
                        guid: e.guid,
                        selector: g,
                        needsContext: g && f.expr.match.needsContext.test(g),
                        namespace: u.join(".")
                    }, y);
                    s = m[n];
                    if (!s && (s = m[n] = [], s.delegateCount = 0, !r.setup || !1 === r.setup.call(b, p, u, l))) b.addEventListener ? b.addEventListener(n, l, !1) : b.attachEvent && b.attachEvent("on" + n, l);
                    r.add && (r.add.call(b, j), j.handler.guid || (j.handler.guid = e.guid));
                    g ? s.splice(s.delegateCount++, 0, j) : s.push(j);
                    f.event.global[n] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, e, g) {
            var q, l, m, j, n, u, y, s, r, z, x = f.hasData(b) && f._data(b);
            if (x && (y = x.events)) {
                c = f.trim(Rb(c || "")).split(" ");
                for (q = 0; q < c.length; q++)
                    if (l = Pb.exec(c[q]) || [], m = j = l[1], l = l[2], m) {
                        s = f.event.special[m] || {};
                        m = (e ? s.delegateType : s.bindType) || m;
                        r = y[m] || [];
                        n = r.length;
                        l = l ? RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (u = 0; u < r.length; u++) z = r[u], (g || j === z.origType) && (!d || d.guid === z.guid) && (!l || l.test(z.namespace)) && (!e || e === z.selector || "**" === e && z.selector) && (r.splice(u--, 1), z.selector && r.delegateCount--, s.remove && s.remove.call(b, z));
                        0 === r.length && n !== r.length && ((!s.teardown || !1 === s.teardown.call(b, l, x.handle)) && f.removeEvent(b,
                            m, x.handle), delete y[m])
                    } else
                        for (m in y) f.event.remove(b, m + c[q], d, e, !0);
                f.isEmptyObject(y) && (delete x.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(d, A, e, p) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, q, l, m, j, n, u, y = d.type || d;
                m = [];
                if (!Qb.test(y + f.event.triggered) && (0 <= y.indexOf("!") && (y = y.slice(0, -1), g = !0), 0 <= y.indexOf(".") && (m = y.split("."), y = m.shift(), m.sort()), e && !f.event.customEvent[y] || f.event.global[y]))
                    if (d = "object" == typeof d ? d[f.expando] ?
                        d : new f.Event(y, d) : new f.Event(y), d.type = y, d.isTrigger = !0, d.exclusive = g, d.namespace = m.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = 0 > y.indexOf(":") ? "on" + y : "", e) {
                        if (d.result = c, d.target || (d.target = e), A = null != A ? f.makeArray(A) : [], A.unshift(d), j = f.event.special[y] || {}, !(j.trigger && !1 === j.trigger.apply(e, A))) {
                            u = [
                                [e, j.bindType || y]
                            ];
                            if (!p && !j.noBubble && !f.isWindow(e)) {
                                q = j.delegateType || y;
                                g = Qb.test(q + y) ? e : e.parentNode;
                                for (l = e; g; g = g.parentNode) u.push([g, q]),
                                    l = g;
                                l === (e.ownerDocument || D) && u.push([l.defaultView || l.parentWindow || b, q])
                            }
                            for (q = 0; q < u.length && !d.isPropagationStopped(); q++) g = u[q][0], d.type = u[q][1], (n = (f._data(g, "events") || {})[d.type] && f._data(g, "handle")) && n.apply(g, A), (n = m && g[m]) && f.acceptData(g) && n.apply && !1 === n.apply(g, A) && d.preventDefault();
                            return d.type = y, !p && !d.isDefaultPrevented() && (!j._default || !1 === j._default.apply(e.ownerDocument, A)) && ("click" !== y || !f.nodeName(e, "a")) && f.acceptData(e) && m && e[y] && ("focus" !== y && "blur" !== y || 0 !== d.target.offsetWidth) &&
                                !f.isWindow(e) && (l = e[m], l && (e[m] = null), f.event.triggered = y, e[y](), f.event.triggered = c, l && (e[m] = l)), d.result
                        }
                    } else
                        for (q in e = f.cache, e) e[q].events && e[q].events[y] && f.event.trigger(d, A, e[q].handle.elem, !0)
            }
        },
        dispatch: function(d) {
            d = f.event.fix(d || b.event);
            var e, v, p, g, q, l, m = (f._data(this, "events") || {})[d.type] || [],
                j = m.delegateCount,
                n = Z.call(arguments),
                u = !d.exclusive && !d.namespace,
                y = f.event.special[d.type] || {},
                s = [];
            n[0] = d;
            d.delegateTarget = this;
            if (!(y.preDispatch && !1 === y.preDispatch.call(this, d))) {
                if (j &&
                    (!d.button || "click" !== d.type))
                    for (v = d.target; v != this; v = v.parentNode || this)
                        if (!0 !== v.disabled || "click" !== d.type) {
                            g = {};
                            q = [];
                            for (e = 0; e < j; e++) p = m[e], l = p.selector, g[l] === c && (g[l] = p.needsContext ? 0 <= f(l, this).index(v) : f.find(l, this, null, [v]).length), g[l] && q.push(p);
                            q.length && s.push({
                                elem: v,
                                matches: q
                            })
                        }
                m.length > j && s.push({
                    elem: this,
                    matches: m.slice(j)
                });
                for (e = 0; e < s.length && !d.isPropagationStopped(); e++) {
                    g = s[e];
                    d.currentTarget = g.elem;
                    for (v = 0; v < g.matches.length && !d.isImmediatePropagationStopped(); v++)
                        if (p = g.matches[v],
                            u || !d.namespace && !p.namespace || d.namespace_re && d.namespace_re.test(p.namespace)) d.data = p.data, d.handleObj = p, p = ((f.event.special[p.origType] || {}).handle || p.handler).apply(g.elem, n), p !== c && (d.result = p, !1 === p && (d.preventDefault(), d.stopPropagation()))
                }
                return y.postDispatch && y.postDispatch.call(this, d), d.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, d) {
                var f, e, g, q = d.button,
                    l = d.fromElement;
                return null == b.pageX && null != d.clientX && (f = b.target.ownerDocument || D, e = f.documentElement, g = f.body, b.pageX = d.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft ||
                    g && g.clientLeft || 0), b.pageY = d.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0)), !b.relatedTarget && l && (b.relatedTarget = l === b.target ? d.toElement : l), !b.which && q !== c && (b.which = q & 1 ? 1 : q & 2 ? 3 : q & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, e = b,
                g = f.event.fixHooks[b.type] || {},
                q = g.props ? this.props.concat(g.props) : this.props;
            b = f.Event(e);
            for (c = q.length; c;) d = q[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || D), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, g.filter ? g.filter(b, e) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    f.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, e) {
            b = f.extend(new f.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle =
        f.event.dispatch;
    f.removeEvent = D.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? j : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(),
            this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = j;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = j;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = j;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, B = b.relatedTarget,
                    e = b.handleObj;
                if (!B || B !== this && !f.contains(this, B)) b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ?
                    b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (eb.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) f.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                eb.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        f.event.simulate("change", this.parentNode, b, !0)
                }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !eb.test(this.nodeName)
        }
    });
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            e = function(b) {
                f.event.simulate(c, b.target, f.event.fix(b), !0)
            };
        f.event.special[c] = {
            setup: function() {
                0 === d++ && D.addEventListener(b, e, !0)
            },
            teardown: function() {
                0 === --d && D.removeEventListener(b, e, !0)
            }
        }
    });
    f.fn.extend({
        on: function(b, d, e, p, m) {
            var q, l;
            if ("object" == typeof b) {
                "string" != typeof d && (e = e || d, d = c);
                for (l in b) this.on(l, d, e, b[l], m);
                return this
            }
            null == e && null == p ? (p = d, e = d = c) : null == p && ("string" == typeof d ? (p = e, e = c) : (p = e, e = d, d = c));
            if (!1 === p) p = g;
            else if (!p) return this;
            return 1 === m && (q = p, p = function(b) {
                return f().off(b), q.apply(this, arguments)
            }, p.guid = q.guid || (q.guid = f.guid++)), this.each(function() {
                f.event.add(this,
                    b, p, e, d)
            })
        },
        one: function(b, c, d, f) {
            return this.on(b, c, d, f, 1)
        },
        off: function(b, d, e) {
            var p, m;
            if (b && b.preventDefault && b.handleObj) return p = b.handleObj, f(b.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
            if ("object" == typeof b) {
                for (m in b) this.off(m, d, b[m]);
                return this
            }
            if (!1 === d || "function" == typeof d) e = d, d = c;
            return !1 === e && (e = g), this.each(function() {
                f.event.remove(this, b, e, d)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b,
                null, c)
        },
        live: function(b, c, d) {
            return f(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return f(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, f) {
            return this.on(c, b, d, f)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                f.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return f.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d =
                b.guid || f.guid++,
                e = 0,
                g = function(d) {
                    var v = (f._data(this, "lastToggle" + b.guid) || 0) % e;
                    return f._data(this, "lastToggle" + b.guid, v + 1), d.preventDefault(), c[v].apply(this, arguments) || !1
                };
            for (g.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(g)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            f.fn[c] = function(b, d) {
                return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            };
            Tc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
            Uc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
        });
    var Vc = b,
        F = function(b, c, d, f) {
            d = d || [];
            c = c || V;
            var e, g, l, m, j = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== j && 9 !== j) return [];
            l = Ka(c);
            if (!l && !f && (e = Wc.exec(b)))
                if (m = e[1])
                    if (9 === j) {
                        g = c.getElementById(m);
                        if (!g || !g.parentNode) return d;
                        if (g.id === m) return d.push(g), d
                    } else {
                        if (c.ownerDocument &&
                            (g = c.ownerDocument.getElementById(m)) && Sb(c, g) && g.id === m) return d.push(g), d
                    } else {
                if (e[2]) return ma.apply(d, na.call(c.getElementsByTagName(b), 0)), d;
                if ((m = e[3]) && Tb && c.getElementsByClassName) return ma.apply(d, na.call(c.getElementsByClassName(m), 0)), d
            }
            return fb(b.replace(La, "$1"), c, d, f, l)
        },
        ta = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ha = function(b) {
            return W(function(c) {
                return c = +c, W(function(d, f) {
                    for (var e, g = b([], d.length, c), l = g.length; l--;) d[e = g[l]] && (d[e] = !(f[e] = d[e]))
                })
            })
        },
        Ma = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var d, f, e, g, l, m, j;
            if (l = Vb[M][b]) return c ? 0 : l.slice(0);
            l = b;
            m = [];
            for (j = G.preFilter; l;) {
                if (!d || (f = Xc.exec(l))) f && (l = l.slice(f[0].length)), m.push(e = []);
                d = !1;
                if (f = Yc.exec(l)) e.push(d = new Wb(f.shift())), l = l.slice(d.length), d.type = f[0].replace(La, " ");
                for (g in G.filter)(f = Na[g].exec(l)) &&
                    (!j[g] || (f = j[g](f, V, !0))) && (e.push(d = new Wb(f.shift())), l = l.slice(d.length), d.type = g, d.matches = f);
                if (!d) break
            }
            return c ? l.length : l ? F.error(b) : Vb(b, m).slice(0)
        },
        hb = function(b, c, d) {
            var f = c.dir,
                e = d && "parentNode" === c.dir,
                g = Zc++;
            return c.first ? function(c, d, A) {
                for (; c = c[f];)
                    if (e || 1 === c.nodeType) return b(c, d, A)
            } : function(c, d, A) {
                if (A)
                    for (; c = c[f];) {
                        if ((e || 1 === c.nodeType) && b(c, d, A)) return c
                    } else
                        for (var v, m = ua + " " + g + " ", j = m + gb; c = c[f];)
                            if (e || 1 === c.nodeType) {
                                if ((v = c[M]) === j) return c.sizset;
                                if ("string" == typeof v &&
                                    0 === v.indexOf(m)) {
                                    if (c.sizset) return c
                                } else {
                                    c[M] = j;
                                    if (b(c, d, A)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        ib = function(b) {
            return 1 < b.length ? function(c, d, f) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, f)) return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, d, f, e) {
            for (var g, l = [], m = 0, j = b.length, n = null != c; m < j; m++)
                if (g = b[m])
                    if (!d || d(g, f, e)) l.push(g), n && c.push(m);
            return l
        },
        jb = function(b, c, d, f, e, g) {
            return f && !f[M] && (f = jb(f)), e && !e[M] && (e = jb(e, g)), W(function(g, q, m, j) {
                if (!g || !e) {
                    var n, u, y = [],
                        s = [],
                        r = q.length;
                    if (!(u = g)) {
                        u = c || "*";
                        var z =
                            m.nodeType ? [m] : m,
                            x = [];
                        n = 0;
                        for (var t = z.length; n < t; n++) F(u, z[n], x, g);
                        u = x
                    }
                    z = b && (g || !c) ? Pa(u, y, b, m, j) : u;
                    x = d ? e || (g ? b : r || f) ? [] : q : z;
                    d && d(z, x, m, j);
                    if (f) {
                        u = Pa(x, s);
                        f(u, [], m, j);
                        for (m = u.length; m--;)
                            if (n = u[m]) x[s[m]] = !(z[s[m]] = n)
                    }
                    if (g)
                        for (m = b && x.length; m--;) {
                            if (n = x[m]) g[y[m]] = !(q[y[m]] = n)
                        } else x = Pa(x === q ? x.splice(r, x.length) : x), e ? e(null, q, x, j) : ma.apply(q, x)
                }
            })
        },
        kb = function(b) {
            var c, d, f, e = b.length,
                g = G.relative[b[0].type];
            d = g || G.relative[" "];
            for (var l = g ? 1 : 0, m = hb(function(b) {
                return b === c
            }, d, !0), j = hb(function(b) {
                return -1 <
                    Xb.call(c, b)
            }, d, !0), n = [
                function(b, d, f) {
                    return !g && (f || d !== Qa) || ((c = d).nodeType ? m(b, d, f) : j(b, d, f))
                }
            ]; l < e; l++)
                if (d = G.relative[b[l].type]) n = [hb(ib(n), d)];
                else {
                    d = G.filter[b[l].type].apply(null, b[l].matches);
                    if (d[M]) {
                        for (f = ++l; f < e && !G.relative[b[f].type]; f++);
                        return jb(1 < l && ib(n), 1 < l && b.slice(0, l - 1).join("").replace(La, "$1"), d, l < f && kb(b.slice(l, f)), f < e && kb(b = b.slice(f)), f < e && b.join(""))
                    }
                    n.push(d)
                }
            return ib(n)
        },
        fb = function(b, c, d, f, e) {
            var g, l, m, j, n = Oa(b);
            if (!f && 1 === n.length) {
                l = n[0] = n[0].slice(0);
                if (2 < l.length &&
                    "ID" === (m = l[0]).type && 9 === c.nodeType && !e && G.relative[l[1].type]) {
                    c = G.find.ID(m.matches[0].replace(ia, ""), c, e)[0];
                    if (!c) return d;
                    b = b.slice(l.shift().length)
                }
                for (g = Na.POS.test(b) ? -1 : l.length - 1; 0 <= g; g--) {
                    m = l[g];
                    if (G.relative[j = m.type]) break;
                    if (j = G.find[j])
                        if (f = j(m.matches[0].replace(ia, ""), lb.test(l[0].type) && c.parentNode || c, e)) {
                            l.splice(g, 1);
                            b = f.length && l.join("");
                            if (!b) return ma.apply(d, na.call(f, 0)), d;
                            break
                        }
                }
            }
            return mb(b, n)(f, c, e, d, lb.test(b)), d
        },
        Yb = function() {},
        gb, nb, G, Ra, Ka, Sb, mb, ob, va, Qa, Zb = !0,
        M = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        V = Vc.document,
        U = V.documentElement,
        ua = 0,
        Zc = 0,
        $c = [].pop,
        ma = [].push,
        na = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        W = function(b, c) {
            return b[M] = null == c || c, b
        },
        pb = function() {
            var b = {},
                c = [];
            return W(function(d, f) {
                return c.push(d) > G.cacheLength && delete b[c.shift()], b[d] = f
            }, b)
        },
        $b = pb(),
        Vb = pb(),
        ac = pb(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        qb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(qb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        lb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ia = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + qb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ba = function(b) {
            var c = V.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        dd = ba(function(b) {
            return b.appendChild(V.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ba(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ba(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ba(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ba(function(b) {
            b.id = M + 0;
            b.innerHTML = "<a name='" + M + "'></a><div name='" + M + "'></div>";
            U.insertBefore(b, U.firstChild);
            var c = V.getElementsByName &&
                V.getElementsByName(M).length === 2 + V.getElementsByName(M + 0).length;
            return nb = !V.getElementById(M), U.removeChild(b), c
        });
    try {
        na.call(U.childNodes, 0)[0].nodeType
    } catch (Qd) {
        na = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Ra = F.getText = function(b) {
        var c, d = "",
            f = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) d += Ra(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[f]; f++) d += Ra(c);
        return d
    };
    Ka = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = F.contains = U.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            f = c && c.parentNode;
        return b === f || !(!f || !(1 === f.nodeType && d.contains && d.contains(f)))
    } : U.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    F.attr = function(b, c) {
        var d, f = Ka(b);
        return f || (c = c.toLowerCase()), (d = G.attrHandle[c]) ? d(b) : f || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    G = F.selectors = {
        cacheLength: 50,
        createPseudo: W,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: nb ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var f, e = [], g = 0; f = d[g]; g++) 1 === f.nodeType && e.push(f);
                    return e
                }
                return d
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ia, ""), b[3] = (b[4] || b[5] || "").replace(ia, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: nb ? function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode &&
                            c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ia, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[M][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(f) {
                    f = F.attr(f, b);
                    return null == f ? "!=" === c : c ? (f += "", "=" ===
                        c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && -1 < f.indexOf(d) : "$=" === c ? d && f.substr(f.length - d.length) === d : "~=" === c ? -1 < (" " + f + " ").indexOf(d) : "|=" === c ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, f) {
                return "nth" === b ? function(b) {
                    var c, e;
                    c = b.parentNode;
                    if (1 === d && 0 === f) return !0;
                    if (c) {
                        e = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (e++, b === c)); c = c.nextSibling);
                    }
                    return e -= f, e === d || 0 === e % d && 0 <= e / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 ===
                                    d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, f = G.pseudos[b] || G.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return f[M] ? f(c) : 1 < f.length ? (d = [b, b, "", c], G.setFilters.hasOwnProperty(b.toLowerCase()) ? W(function(b, d) {
                    for (var e, B = f(b, c), g = B.length; g--;) e = Xb.call(b, B[g]), b[e] = !(d[e] = B[g])
                }) : function(b) {
                    return f(b, 0, d)
                }) : f
            }
        },
        pseudos: {
            not: W(function(b) {
                var c = [],
                    d = [],
                    f = mb(b.replace(La, "$1"));
                return f[M] ? W(function(b, c, d, e) {
                    e = f(b, null, e, []);
                    for (var B = b.length; B--;)
                        if (d = e[B]) b[B] = !(c[B] = d)
                }) : function(b, e, B) {
                    return c[0] = b, f(c, null, B, d), !d.pop()
                }
            }),
            has: W(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: W(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !G.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: ta("radio"),
            checkbox: ta("checkbox"),
            file: ta("file"),
            password: ta("password"),
            image: ta("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ha(function() {
                return [0]
            }),
            last: ha(function(b, c) {
                return [c - 1]
            }),
            eq: ha(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ha(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ha(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ha(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ha(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    ob = U.compareDocumentPosition ? function(b, c) {
        return b === c ? (va = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return va = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, f, e = [],
            g = [];
        d = b.parentNode;
        f = c.parentNode;
        var l = d;
        if (d === f) return Ma(b, c);
        if (!d) return -1;
        if (!f) return 1;
        for (; l;) e.unshift(l), l = l.parentNode;
        for (l = f; l;) g.unshift(l), l = l.parentNode;
        d = e.length;
        f = g.length;
        for (l = 0; l < d && l < f; l++)
            if (e[l] !== g[l]) return Ma(e[l], g[l]);
        return l === d ? Ma(b, g[l], -1) : Ma(e[l], c, 1)
    };
    [0, 0].sort(ob);
    Zb = !va;
    F.uniqueSort = function(b) {
        var c, d = 1;
        va = Zb;
        b.sort(ob);
        if (va)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    mb = F.compile = function(b, c) {
        var d, f = [],
            e = [],
            g = ac[M][b];
        if (!g) {
            c || (c = Oa(b));
            for (d = c.length; d--;) g = kb(c[d]), g[M] ? f.push(g) : e.push(g);
            var l = 0 < f.length,
                m = 0 < e.length,
                j = function(b, c, d, B, g) {
                    var A, v, q = [],
                        n = 0,
                        u = "0",
                        y = b && [],
                        s = null != g,
                        r = Qa,
                        x = b || m && G.find.TAG("*", g && c.parentNode || c),
                        z = ua += null == r ? 1 : Math.E;
                    for (s && (Qa = c !== V && c, gb = j.el); null != (g = x[u]); u++) {
                        if (m && g) {
                            for (A = 0; v = e[A]; A++)
                                if (v(g, c, d)) {
                                    B.push(g);
                                    break
                                }
                            s && (ua = z, gb =
                                ++j.el)
                        }
                        l && ((g = !v && g) && n--, b && y.push(g))
                    }
                    n += u;
                    if (l && u !== n) {
                        for (A = 0; v = f[A]; A++) v(y, q, c, d);
                        if (b) {
                            if (0 < n)
                                for (; u--;)!y[u] && !q[u] && (q[u] = $c.call(B));
                            q = Pa(q)
                        }
                        ma.apply(B, q);
                        s && !b && 0 < q.length && 1 < n + f.length && F.uniqueSort(B)
                    }
                    return s && (ua = z, Qa = r), y
                };
            d = (j.el = 0, l ? W(j) : j);
            g = ac(b, d)
        }
        return g
    };
    if (V.querySelectorAll) {
        var cc, hd = fb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Y = [":focus"],
            Sa = [":active", ":focus"],
            Ta = U.matchesSelector || U.mozMatchesSelector || U.webkitMatchesSelector || U.oMatchesSelector ||
            U.msMatchesSelector;
        ba(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ba(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled",
                ":disabled")
        });
        Y = RegExp(Y.join("|"));
        fb = function(b, c, d, f, e) {
            if (!f && !e && (!Y || !Y.test(b))) {
                var g, l, m = !0,
                    j = M;
                l = c;
                g = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    g = Oa(b);
                    (m = c.getAttribute("id")) ? j = m.replace(id, "\\$&"): c.setAttribute("id", j);
                    j = "[id='" + j + "'] ";
                    for (l = g.length; l--;) g[l] = j + g[l].join("");
                    l = lb.test(b) && c.parentNode || c;
                    g = g.join(",")
                }
                if (g) try {
                    return ma.apply(d, na.call(l.querySelectorAll(g), 0)), d
                } catch (n) {} finally {
                    m || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, f, e)
        };
        Ta &&
            (ba(function(b) {
                cc = Ta.call(b, "div");
                try {
                    Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", qb)
                } catch (c) {}
            }), Sa = RegExp(Sa.join("|")), F.matchesSelector = function(b, c) {
                c = c.replace(jd, "='$1']");
                if (!Ka(b) && !Sa.test(c) && (!Y || !Y.test(c))) try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType) return d
                } catch (f) {}
                return 0 < F(c, null, null, [b]).length
            })
    }
    G.pseudos.nth = G.pseudos.eq;
    G.filters = Yb.prototype = G.pseudos;
    G.setFilters = new Yb;
    F.attr = f.attr;
    f.find = F;
    f.expr = F.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique =
        F.uniqueSort;
    f.text = F.getText;
    f.isXMLDoc = F.isXML;
    f.contains = F.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = f.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(b) {
            var c, d, e, g, m, l, j = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = j.length; c < d; c++)
                    if (f.contains(j[c], this)) return !0
            });
            l = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (e = l.length, f.find(b, this[c], l), 0 < c)
                    for (g = e; g < l.length; g++)
                        for (m =
                            0; m < e; m++)
                            if (l[m] === l[g]) {
                                l.splice(g--, 1);
                                break
                            }
            return l
        },
        has: function(b) {
            var c, d = f(b, this),
                e = d.length;
            return this.filter(function() {
                for (c = 0; c < e; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(s(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(s(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, e = 0, g = this.length,
                m = [], l = dc.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; e < g; e++)
                for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (l ? -1 < l.index(d) : f.find.matchesSelector(d, b)) {
                        m.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return m = 1 < m.length ? f.unique(m) : m, this.pushStack(m, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                e = f.merge(this.get(), d);
            return this.pushStack(t(d[0]) || t(e[0]) ? e : f.unique(e))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return f.dir(b, "parentNode", d)
        },
        next: function(b) {
            return n(b, "nextSibling")
        },
        prev: function(b) {
            return n(b, "previousSibling")
        },
        nextAll: function(b) {
            return f.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return f.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return f.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return f.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return f.sibling(b.firstChild)
        },
        contents: function(b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function(b, c) {
        f.fn[b] = function(d, e) {
            var g = f.map(this, c, d);
            return kd.test(b) ||
                (e = d), e && "string" == typeof e && (g = f.filter(e, g)), g = 1 < this.length && !md[b] ? f.unique(g) : g, 1 < this.length && ld.test(b) && (g = g.reverse()), this.pushStack(g, b, Z.call(arguments).join(","))
        }
    });
    f.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c)
        },
        dir: function(b, d, e) {
            var g = [];
            for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !f(b).is(e));) 1 === b.nodeType && g.push(b), b = b[d];
            return g
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var xb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        rb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        sb = RegExp("<(?:" + xb + ")[\\s/>]", "i"),
        yb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        S = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = x(D),
        tb = hc.appendChild(D.createElement("div"));
    S.optgroup =
        S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    f.support.htmlSerialize || (S._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) {
            return f.access(this, function(b) {
                return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) {
                f(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = f.isFunction(b);
            return this.each(function(d) {
                f(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") ||
                    f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!t(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!t(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, e = 0; null != (d = this[e]); e++)
                if (!b || f.filter(b, [d]).length)!c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return f.clone(this, b, c)
            })
        },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    g = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (f.support.htmlSerialize || !sb.test(b)) && (f.support.leadingWhitespace || !rb.test(b)) &&
                    !S[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; e < g; e++) d = this[e] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (B) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return t(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, e) {
            b = [].concat.apply([], b);
            var g, m, j, l = 0,
                n = b[0],
                u = [],
                y = this.length;
            if (!f.support.checkClone && 1 < y && "string" == typeof n && gc.test(n)) return this.each(function() {
                f(this).domManip(b, d, e)
            });
            if (f.isFunction(n)) return this.each(function(g) {
                var m = f(this);
                b[0] = n.call(this, g, d ? m.html() : c);
                m.domManip(b, d, e)
            });
            if (this[0]) {
                g = f.buildFragment(b, this, u);
                j = g.fragment;
                m = j.firstChild;
                1 === j.childNodes.length && (j = m);
                if (m) {
                    d = d && f.nodeName(m, "tr");
                    for (g = g.cacheable || y - 1; l < y; l++) e.call(d && f.nodeName(this[l], "table") ? this[l].getElementsByTagName("tbody")[0] || this[l].appendChild(this[l].ownerDocument.createElement("tbody")) : this[l], l === g ? j : f.clone(j, !0, !0))
                }
                j = m = null;
                u.length && f.each(u, function(b, c) {
                    c.src ? f.ajax ? f.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, e) {
        var g, m, j, l = b[0];
        return d = d || D, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof l && 512 > l.length && d === D && "<" === l.charAt(0) && !rd.test(l) && (f.support.checkClone || !gc.test(l)) && (f.support.html5Clone || !sb.test(l)) && (m = !0, g = f.fragments[l], j = g !== c), g || (g = d.createDocumentFragment(), f.clean(b, d, g, e), m && (f.fragments[l] = j && g)), {
            fragment: g,
            cacheable: m
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        f.fn[b] = function(d) {
            var e, g = 0,
                m = [];
            d = f(d);
            var l = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === l) return d[c](this[0]), this;
            for (; g < l; g++) e = (0 < g ? this.clone(!0) : this).get(), f(d[g])[c](e), m = m.concat(e);
            return this.pushStack(m, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var e, g, m, l;
            f.support.html5Clone || f.isXMLDoc(b) || !sb.test("<" + b.nodeName +
                ">") ? l = b.cloneNode(!0) : (tb.innerHTML = b.outerHTML, tb.removeChild(l = tb.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                z(b, l);
                e = C(b);
                g = C(l);
                for (m = 0; e[m]; ++m) g[m] && z(e[m], g[m])
            }
            if (c && (r(b, l), d)) {
                e = C(b);
                g = C(l);
                for (m = 0; e[m]; ++m) r(e[m], g[m])
            }
            return l
        },
        clean: function(b, c, d, e) {
            var g, m, l, j, n, u, y, s = c === D && hc,
                r = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = D;
            for (g = 0; null != (l = b[g]); g++)
                if ("number" == typeof l && (l += ""), l) {
                    if ("string" ==
                        typeof l)
                        if (pd.test(l)) {
                            s = s || x(c);
                            u = c.createElement("div");
                            s.appendChild(u);
                            l = l.replace(ec, "<$1></$2>");
                            m = (fc.exec(l) || ["", ""])[1].toLowerCase();
                            j = S[m] || S._default;
                            n = j[0];
                            for (u.innerHTML = j[1] + l + j[2]; n--;) u = u.lastChild;
                            if (!f.support.tbody) {
                                n = od.test(l);
                                j = "table" === m && !n ? u.firstChild && u.firstChild.childNodes : "<table>" === j[1] && !n ? u.childNodes : [];
                                for (m = j.length - 1; 0 <= m; --m) f.nodeName(j[m], "tbody") && !j[m].childNodes.length && j[m].parentNode.removeChild(j[m])
                            }!f.support.leadingWhitespace && rb.test(l) && u.insertBefore(c.createTextNode(rb.exec(l)[0]),
                                u.firstChild);
                            l = u.childNodes;
                            u.parentNode.removeChild(u)
                        } else l = c.createTextNode(l);
                    l.nodeType ? r.push(l) : f.merge(r, l)
                }
            u && (l = u = s = null);
            if (!f.support.appendChecked)
                for (g = 0; null != (l = r[g]); g++) f.nodeName(l, "input") ? E(l) : "undefined" != typeof l.getElementsByTagName && f.grep(l.getElementsByTagName("input"), E);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (g = 0; null != (l = r[g]); g++)
                    if (!f.nodeName(l, "script") || !b(l)) d.appendChild(l),
                        "undefined" != typeof l.getElementsByTagName && (y = f.grep(f.merge([], l.getElementsByTagName("script")), b), r.splice.apply(r, [g + 1, 0].concat(y)), g += y.length)
            }
            return r
        },
        cleanData: function(b, c) {
            for (var d, e, g, m, l = 0, j = f.expando, n = f.cache, u = f.support.deleteExpando, y = f.event.special; null != (g = b[l]); l++)
                if (c || f.acceptData(g))
                    if (d = (e = g[j]) && n[e]) {
                        if (d.events)
                            for (m in d.events) y[m] ? f.event.remove(g, m) : f.removeEvent(g, m, d.handle);
                        n[e] && (delete n[e], u ? delete g[j] : g.removeAttribute ? g.removeAttribute(j) : g[j] = null, f.deletedIds.push(e))
                    }
        }
    });
    var Ua, ca;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = f.uaMatch(zc.userAgent);
    ca = {};
    Ua.browser && (ca[Ua.browser] = !0, ca.version = Ua.version);
    ca.chrome ? ca.webkit = !0 : ca.webkit && (ca.safari = !0);
    f.browser = ca;
    f.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, e) {
            return e && e instanceof f && !(e instanceof b) && (e = b(e)), f.fn.init.call(this, d, e, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(D);
        return b
    };
    var O, ka, la, ub = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        xa = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Xa = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        da = ["Top", "Right", "Bottom", "Left"],
        zb = ["Webkit", "O", "Moz", "ms"],
        zd = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) {
            return f.access(this, function(b, d, e) {
                return e !== c ? f.style(b, d, e) : f.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : u(this)) ? f(this).show():
                    f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = O(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, e, g) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var j, n, l, u = f.camelCase(d),
                    y = b.style;
                d = f.cssProps[u] || (f.cssProps[u] = m(y, u));
                l = f.cssHooks[d] || f.cssHooks[u];
                if (e === c) return l && "get" in l && (j = l.get(b, !1, g)) !== c ? j : y[d];
                n = typeof e;
                "string" === n && (j = xd.exec(e)) && (e = (j[1] + 1) * j[2] + parseFloat(f.css(b, d)), n = "number");
                if (!(null == e || "number" === n && isNaN(e)))
                    if ("number" === n && !f.cssNumber[u] && (e += "px"), !l || !("set" in l) || (e = l.set(b, e, g)) !== c) try {
                        y[d] = e
                    } catch (s) {}
            }
        },
        css: function(b, d, e, g) {
            var j, n, l, u = f.camelCase(d);
            return d = f.cssProps[u] || (f.cssProps[u] = m(b.style, u)), l = f.cssHooks[d] || f.cssHooks[u], l && "get" in l && (j = l.get(b, !0, g)), j === c && (j = O(b, d)), "normal" === j && d in jc && (j = jc[d]), e || g !== c ? (n = parseFloat(j), e ||
                f.isNumeric(n) ? n || 0 : j) : j
        },
        swap: function(b, c, d) {
            var e, f = {};
            for (e in c) f[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = f[e];
            return d
        }
    });
    b.getComputedStyle ? O = function(c, d) {
        var e, g, m, j, l = b.getComputedStyle(c, null),
            n = c.style;
        return l && (e = l[d], "" === e && !f.contains(c.ownerDocument, c) && (e = f.style(c, d)), xa.test(e) && ic.test(d) && (g = n.width, m = n.minWidth, j = n.maxWidth, n.minWidth = n.maxWidth = n.width = e, e = l.width, n.width = g, n.minWidth = m, n.maxWidth = j)), e
    } : D.documentElement.currentStyle && (O = function(b,
        c) {
        var d, e, f = b.currentStyle && b.currentStyle[c],
            g = b.style;
        return null == f && g && g[c] && (f = g[c]), xa.test(f) && !vd.test(c) && (d = g.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === c ? "1em" : f, f = g.pixelLeft + "px", g.left = d, e && (b.runtimeStyle.left = e)), "" === f ? "auto" : f
    });
    f.each(["height", "width"], function(b, c) {
        f.cssHooks[c] = {
            get: function(b, d, e) {
                if (d) return 0 === b.offsetWidth && wd.test(O(b, "display")) ? f.swap(b, yd, function() {
                    return K(b, c, e)
                }) : K(b, c, e)
            },
            set: function(b,
                d, e) {
                return L(b, d, e ? P(b, c, e, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                e = b.currentStyle,
                g = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                m = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === f.trim(m.replace(ub, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter =
                ub.test(m) ? m.replace(ub, g) : m + " " + g
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(b, c) {
                return f.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return O(b, "marginRight")
                })
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) {
            f.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var e = O(b, c);
                        return xa.test(e) ? f(b).position()[c] + "px" : e
                    }
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !f.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || O(b, "display"))
    }, f.expr.filters.visible = function(b) {
        return !f.expr.filters.hidden(b)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    f = {};
                for (d = 0; 4 > d; d++) f[b + da[d] + c] = e[d] || e[d - 2] || e[0];
                return f
            }
        };
        ic.test(b) || (f.cssHooks[b + c].set = L)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = f(this).val();
                return null == d ? null : f.isArray(d) ? f.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(b, d) {
        var e, g = [],
            m = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() {
            m(this.name, this.value)
        });
        else
            for (e in b) ya(e, b[e], d, m);
        return g.join("&").replace(Ad, "+")
    };
    var oa, ja, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = f.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ja = yc.href
    } catch (Rd) {
        ja = D.createElement("a"), ja.href = "", ja = ja.href
    }
    oa = mc.exec(ja.toLowerCase()) || [];
    f.fn.load = function(b, d, e) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var g, m, j, l = this,
            n = b.indexOf(" ");
        return 0 <= n && (g = b.slice(n, b.length), b = b.slice(0, n)), f.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (m = "POST"), f.ajax({
            url: b,
            type: m,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                e && l.each(e, j || [b.responseText, c, b])
            }
        }).done(function(b) {
            j = arguments;
            l.html(g ? f("<div>").append(b.replace(Hd, "")).find(g) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        f.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    f.each(["get", "post"], function(b, d) {
        f[d] = function(b, e, g, m) {
            return f.isFunction(e) && (m = m || g, g = e, e = c), f.ajax({
                type: d,
                url: b,
                data: e,
                success: g,
                dataType: m
            })
        }
    });
    f.extend({
        getScript: function(b, d) {
            return f.get(b,
                c, d, "script")
        },
        getJSON: function(b, c, d) {
            return f.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? Ab(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), Ab(b, c), b
        },
        ajaxSettings: {
            url: ja,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(oa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: I(Za),
        ajaxTransport: I(oc),
        ajax: function(b, d) {
            function e(b, d, j, u) {
                var B, q, s, v, A, E = d;
                if (2 !== P) {
                    P = 2;
                    n && clearTimeout(n);
                    l = c;
                    m = u || "";
                    H.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        v = r;
                        u = H;
                        var D, K, I, Ya, $a = v.contents,
                            F = v.dataTypes,
                            J = v.responseFields;
                        for (K in J) K in j && (u[J[K]] = j[K]);
                        for (;
                            "*" === F[0];) F.shift(),
                            D === c && (D = v.mimeType || u.getResponseHeader("content-type"));
                        if (D)
                            for (K in $a)
                                if ($a[K] && $a[K].test(D)) {
                                    F.unshift(K);
                                    break
                                }
                        if (F[0] in j) I = F[0];
                        else {
                            for (K in j) {
                                if (!F[0] || v.converters[K + " " + F[0]]) {
                                    I = K;
                                    break
                                }
                                Ya || (Ya = K)
                            }
                            I = I || Ya
                        }
                        v = j = I ? (I !== F[0] && F.unshift(I), j[I]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (r.ifModified && (A = H.getResponseHeader("Last-Modified"), A && (f.lastModified[g] = A), A = H.getResponseHeader("Etag"), A && (f.etag[g] = A)), 304 === b) E = "notmodified", B = !0;
                        else {
                            var G;
                            a: {
                                B = r;
                                q = v;
                                var T, E = B.dataTypes.slice();
                                j =
                                    E[0];
                                D = {};
                                K = 0;
                                B.dataFilter && (q = B.dataFilter(q, B.dataType));
                                if (E[1])
                                    for (G in B.converters) D[G.toLowerCase()] = B.converters[G];
                                for (; s = E[++K];)
                                    if ("*" !== s) {
                                        if ("*" !== j && j !== s) {
                                            G = D[j + " " + s] || D["* " + s];
                                            if (!G)
                                                for (T in D)
                                                    if (A = T.split(" "), A[1] === s && (G = D[j + " " + A[0]] || D["* " + A[0]])) {
                                                        !0 === G ? G = D[T] : !0 !== D[T] && (s = A[0], E.splice(K--, 0, s));
                                                        break
                                                    }
                                            if (!0 !== G)
                                                if (G && B["throws"]) q = G(q);
                                                else try {
                                                    q = G(q)
                                                } catch (wa) {
                                                    G = {
                                                        state: "parsererror",
                                                        error: G ? wa : "No conversion from " + j + " to " + s
                                                    };
                                                    break a
                                                }
                                        }
                                        j = s
                                    }
                                G = {
                                    state: "success",
                                    data: q
                                }
                            }
                            B =
                                G;
                            E = B.state;
                            q = B.data;
                            s = B.error;
                            B = !s
                        } else if (s = E, !E || b) E = "error", 0 > b && (b = 0);
                    H.status = b;
                    H.statusText = (d || E) + "";
                    B ? t.resolveWith(x, [q, E, H]) : t.rejectWith(x, [H, E, s]);
                    H.statusCode(C);
                    C = c;
                    y && z.trigger("ajax" + (B ? "Success" : "Error"), [H, r, B ? q : s]);
                    L.fireWith(x, [H, E]);
                    y && (z.trigger("ajaxComplete", [H, r]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var g, m, j, l, n, u, y, s, r = f.ajaxSetup({}, d),
                x = r.context || r,
                z = x !== r && (x.nodeType || x instanceof f) ? f(x) : f.event,
                t = f.Deferred(),
                L = f.Callbacks("once memory"),
                C = r.statusCode || {},
                E = {},
                D = {},
                P = 0,
                K = "canceled",
                H = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!P) {
                            var d = b.toLowerCase();
                            b = D[d] = D[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === P ? m : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === P) {
                            if (!j)
                                for (j = {}; d = Ed.exec(m);) j[d[1].toLowerCase()] = d[2];
                            d = j[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return P || (r.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || K, l && l.abort(b), e(0, b), this
                    }
                };
            t.promise(H);
            H.success = H.done;
            H.error = H.fail;
            H.complete = L.add;
            H.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > P)
                        for (c in b) C[c] = [C[c], b[c]];
                    else c = b[H.status], H.always(c)
                }
                return this
            };
            r.url = ((b || r.url) + "").replace(Dd, "").replace(Gd, oa[1] + "//");
            r.dataTypes = f.trim(r.dataType || "*").toLowerCase().split(ea);
            null == r.crossDomain && (u = mc.exec(r.url.toLowerCase()) || !1, r.crossDomain = u && u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !== oa.join(":") + (oa[3] ? "" : "http:" === oa[1] ? 80 : 443));
            r.data && r.processData && "string" != typeof r.data && (r.data = f.param(r.data,
                r.traditional));
            T(Za, r, d, H);
            if (2 === P) return H;
            y = r.global;
            r.type = r.type.toUpperCase();
            r.hasContent = !Fd.test(r.type);
            y && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!r.hasContent && (r.data && (r.url += (lc.test(r.url) ? "&" : "?") + r.data, delete r.data), g = r.url, !1 === r.cache)) {
                u = f.now();
                var I = r.url.replace(Id, "$1_=" + u);
                r.url = I + (I === r.url ? (lc.test(r.url) ? "&" : "?") + "_=" + u : "")
            }(r.data && r.hasContent && !1 !== r.contentType || d.contentType) && H.setRequestHeader("Content-Type", r.contentType);
            r.ifModified && (g = g || r.url, f.lastModified[g] &&
                H.setRequestHeader("If-Modified-Since", f.lastModified[g]), f.etag[g] && H.setRequestHeader("If-None-Match", f.etag[g]));
            H.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : r.accepts["*"]);
            for (s in r.headers) H.setRequestHeader(s, r.headers[s]);
            if (!r.beforeSend || !1 !== r.beforeSend.call(x, H, r) && 2 !== P) {
                K = "abort";
                for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) H[s](r[s]);
                if (l = T(oc, r, d, H)) {
                    H.readyState = 1;
                    y && z.trigger("ajaxSend", [H,
                        r
                    ]);
                    r.async && 0 < r.timeout && (n = setTimeout(function() {
                        H.abort("timeout")
                    }, r.timeout));
                    try {
                        P = 1, l.send(E, e)
                    } catch (F) {
                        if (2 > P) e(-1, F);
                        else throw F;
                    }
                } else e(-1, "No Transport");
                return H
            }
            return H.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = f.now();
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || f.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    f.ajaxPrefilter("json jsonp", function(d, e, g) {
        var m, j, n, l = d.data,
            u = d.url,
            y = !1 !== d.jsonp,
            r = y && Va.test(u),
            s = y &&
            !r && "string" == typeof l && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(l);
        if ("jsonp" === d.dataTypes[0] || r || s) return m = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, j = b[m], r ? d.url = u.replace(Va, "$1" + m) : s ? d.data = l.replace(Va, "$1" + m) : y && (d.url += (Jd.test(u) ? "&" : "?") + d.jsonp + "=" + m), d.converters["script json"] = function() {
            return n || f.error(m + " was not called"), n[0]
        }, d.dataTypes[0] = "json", b[m] = function() {
            n = arguments
        }, g.always(function() {
            b[m] = j;
            d[m] &&
                (d.jsonpCallback = e.jsonpCallback, qc.push(m));
            n && f.isFunction(j) && j(n[0]);
            n = j = c
        }), "script"
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return f.globalEval(b), b
            }
        }
    });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, e = D.head ||
                D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function(f, g) {
                    d = D.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, f) {
                        if (f || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, f || g(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var pa, vb = b.ActiveXObject ? function() {
            for (var b in pa) pa[b](0,
                1)
        } : !1,
        Ld = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && za())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : za;
    var wb = f.ajaxSettings.xhr();
    f.extend(f.support, {
        ajax: !!wb,
        cors: !!wb && "withCredentials" in wb
    });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var e;
            return {
                send: function(g, m) {
                    var j, n, l = d.xhr();
                    d.username ? l.open(d.type, d.url, d.async, d.username, d.password) : l.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (n in d.xhrFields) l[n] =
                            d.xhrFields[n];
                    d.mimeType && l.overrideMimeType && l.overrideMimeType(d.mimeType);
                    !d.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (n in g) l.setRequestHeader(n, g[n])
                    } catch (u) {}
                    l.send(d.hasContent && d.data || null);
                    e = function(b, g) {
                        var n, u, y, q, r;
                        try {
                            if (e && (g || 4 === l.readyState))
                                if (e = c, j && (l.onreadystatechange = f.noop, vb && delete pa[j]), g) 4 !== l.readyState && l.abort();
                                else {
                                    n = l.status;
                                    y = l.getAllResponseHeaders();
                                    q = {};
                                    (r = l.responseXML) && r.documentElement && (q.xml = r);
                                    try {
                                        q.text =
                                            l.responseText
                                    } catch (s) {}
                                    try {
                                        u = l.statusText
                                    } catch (v) {
                                        u = ""
                                    }!n && d.isLocal && !d.crossDomain ? n = q.text ? 200 : 404 : 1223 === n && (n = 204)
                                }
                        } catch (x) {
                            g || m(-1, x)
                        }
                        q && m(n, u, q, y)
                    };
                    d.async ? 4 === l.readyState ? setTimeout(e, 0) : (j = ++Ld, vb && (pa || (pa = {}, f(b).unload(vb)), pa[j] = e), l.onreadystatechange = e) : e()
                },
                abort: function() {
                    e && e(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [
            function(b, c, d) {
                var e, g, m, j, n, y, r = this,
                    s = b.style,
                    x = {},
                    z = [],
                    t = b.nodeType && u(b);
                d.queue ||
                    (n = f._queueHooks(b, "fx"), null == n.unqueued && (n.unqueued = 0, y = n.empty.fire, n.empty.fire = function() {
                        n.unqueued || y()
                    }), n.unqueued++, r.always(function() {
                        r.always(function() {
                            n.unqueued--;
                            f.queue(b, "fx").length || n.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [s.overflow, s.overflowX, s.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === wa(b.nodeName) ? s.display = "inline-block" : s.zoom = 1));
                d.overflow && (s.overflow = "hidden",
                    f.support.shrinkWrapBlocks || r.done(function() {
                        s.overflow = d.overflow[0];
                        s.overflowX = d.overflow[1];
                        s.overflowY = d.overflow[2]
                    }));
                for (e in c) g = c[e], Md.exec(g) && (delete c[e], g !== (t ? "hide" : "show") && z.push(e));
                if (g = z.length) {
                    m = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                    t ? f(b).show() : r.done(function() {
                        f(b).hide()
                    });
                    r.done(function() {
                        var c;
                        f.removeData(b, "fxshow", !0);
                        for (c in x) f.style(b, c, x[c])
                    });
                    for (e = 0; e < g; e++) c = z[e], j = r.createTween(c, t ? m[c] : 0), x[c] = m[c] || f.style(b, c), c in m || (m[c] = j.start, t && (j.end = j.start,
                        j.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        ra = {
            "*": [
                function(b, c) {
                    var d, e, g = this.createTween(b, c),
                        m = Nd.exec(c),
                        j = g.cur(),
                        n = +j || 0,
                        u = 1,
                        y = 20;
                    if (m) {
                        d = +m[2];
                        e = m[3] || (f.cssNumber[b] ? "" : "px");
                        if ("px" !== e && n) {
                            n = f.css(g.elem, b, !0) || d || 1;
                            do u = u || ".5", n /= u, f.style(g.elem, b, n + e); while (u !== (u = g.cur() / j) && 1 !== u && --y)
                        }
                        g.unit = e;
                        g.start = n;
                        g.end = m[1] ? n + (m[1] + 1) * d : d
                    }
                    return g
                }
            ]
        };
    f.Animation = f.extend(Bb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, g = b.length; e < g; e++) d = b[e], ra[d] = ra[d] || [], ra[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    f.Tween = Q;
    Q.prototype = {
        constructor: Q,
        init: function(b, c, d, e, g, m) {
            this.elem = b;
            this.prop = d;
            this.easing = g || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = m || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = Q.propHooks[this.prop];
            return b && b.get ? b.get(this) : Q.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = Q.propHooks[this.prop];
            return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : Q.propHooks._default.set(this), this
        }
    };
    Q.prototype.init.prototype = Q.prototype;
    Q.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(e, g, m) {
            return null == e || "boolean" == typeof e || !b && f.isFunction(e) && f.isFunction(g) ? d.apply(this, arguments) : this.animate(Ca(c, !0), e, g, m)
        }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(u).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, e) {
            var g = f.isEmptyObject(b),
                m = f.speed(c, d, e);
            c = function() {
                var c = Bb(this, f.extend({}, b), m);
                g && c.stop(!0)
            };
            return g || !1 === m.queue ? this.each(c) : this.queue(m.queue, c)
        },
        stop: function(b, d, e) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    m = f.timers,
                    j = f._data(this);
                if (d) j[d] && j[d].stop && g(j[d]);
                else
                    for (d in j) j[d] &&
                        j[d].stop && Od.test(d) && g(j[d]);
                for (d = m.length; d--;) m[d].elem === this && (null == b || m[d].queue === b) && (m[d].anim.stop(e), c = !1, m.splice(d, 1));
                (c || !e) && f.dequeue(this, b)
            })
        }
    });
    f.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        f.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    f.speed = function(b, c, d) {
        var e = b && "object" == typeof b ? f.extend({}, b) : {
            complete: d || !d && c || f.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !f.isFunction(c) && c
        };
        e.duration = f.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in f.fx.speeds ? f.fx.speeds[e.duration] : f.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function() {
            f.isFunction(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        }, e
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = Q.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) {
        b() && f.timers.push(b) && !Wa && (Wa = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) {
        return f.grep(f.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b ===
            c ? this : this.each(function(c) {
                f.offset.setOffset(this, b, c)
            });
        var d, e, g, m, j, l, n, u = {
                top: 0,
                left: 0
            },
            y = this[0],
            r = y && y.ownerDocument;
        if (r) return (e = r.body) === y ? f.offset.bodyOffset(y) : (d = r.documentElement, f.contains(d, y) ? ("undefined" != typeof y.getBoundingClientRect && (u = y.getBoundingClientRect()), g = Cb(r), m = d.clientTop || e.clientTop || 0, j = d.clientLeft || e.clientLeft || 0, l = g.pageYOffset || d.scrollTop, n = g.pageXOffset || d.scrollLeft, {
            top: u.top + l - m,
            left: u.left + n - j
        }) : u)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var e = f.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var g = f(b),
                m = g.offset(),
                j = f.css(b, "top"),
                n = f.css(b, "left"),
                u = {},
                y = {},
                r, s;
            ("absolute" === e || "fixed" === e) && -1 < f.inArray("auto", [j, n]) ? (y = g.position(), r = y.top, s = y.left) : (r = parseFloat(j) || 0, s = parseFloat(n) || 0);
            f.isFunction(c) && (c = c.call(b, d, m));
            null !=
                c.top && (u.top = c.top - m.top + r);
            null != c.left && (u.left = c.left - m.left + s);
            "using" in c ? c.using.call(b, u) : g.css(u)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    e = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, e.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                    this.offsetParent || D.body; b && !rc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent;
                return b || D.body
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var e = /Y/.test(d);
        f.fn[b] = function(g) {
            return f.access(this, function(b, g, m) {
                var j = Cb(b);
                if (m === c) return j ? d in j ? j[d] : j.document.documentElement[g] : b[g];
                j ? j.scrollTo(e ? f(j).scrollLeft() : m, e ? m : f(j).scrollTop()) : b[g] = m
            }, b, g, arguments.length, null)
        }
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(e, g) {
            f.fn[g] = function(g, m) {
                var j = arguments.length && (e || "boolean" != typeof g),
                    n = e || (!0 === g || !0 === m ? "margin" : "border");
                return f.access(this, function(d, e, g) {
                    var m;
                    return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (m = d.documentElement, Math.max(d.body["scroll" + b], m["scroll" + b], d.body["offset" + b], m["offset" + b], m["client" + b])) : g === c ? f.css(d, e, g, n) : f.style(d, e, g, n)
                }, d, j ? g : c, j, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return f
        })
})(window);

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var j = document.createElement("object");
            j.id = "jukebox-flashstream-" + this.id;
            j.setAttribute("type", "application/x-shockwave-flash");
            j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            j.setAttribute("width", "0");
            j.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in g) c.setAttribute(e, g[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                d, e, g = 0, j = c.length; g < j; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var t = 0, n = c[g].m.length; t < n; t++)
                        if (d = c[g].m[t], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (s) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        e = !1;
    try {
        "undefined" !== typeof AudioContext ? c = new AudioContext : "undefined" !== typeof webkitAudioContext ? c = new webkitAudioContext : d = !1
    } catch (g) {
        d = !1
    }
    if (!d)
        if ("undefined" !== typeof Audio) try {
            new Audio
        } catch (j) {
            e = !0
        } else e = !0;
    if (d) {
        var t = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        t.gain.value = 1;
        t.connect(c.destination)
    }
    var n = function(b) {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.ctx = c;
        this.noAudio = e;
        this._howls = [];
        this._codecs = b;
        this.iOSAutoEnable = !0
    };
    n.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (t.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? t.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (t.gain.value =
                b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
        },
        codecs: function(b) {
            return this._codecs[b]
        },
        _enableiOSAudio: function() {
            var b = this;
            if (!c || !b._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                b._iOSEnabled = !1;
                var d = function() {
                    var e = c.createBuffer(1, 1, 22050),
                        g = c.createBufferSource();
                    g.buffer = e;
                    g.connect(c.destination);
                    "undefined" === typeof g.start ?
                        g.noteOn(0) : g.start(0);
                    setTimeout(function() {
                        if (g.playbackState === g.PLAYING_STATE || g.playbackState === g.FINISHED_STATE) b._iOSEnabled = !0, b.iOSAutoEnable = !1, window.removeEventListener("touchend", d, !1)
                    }, 0)
                };
                window.addEventListener("touchend", d, !1);
                return b
            }
        }
    };
    var s = null,
        x = {};
    e || (s = new Audio, x = {
        mp3: !!s.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!s.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
            ""),
        aac: !!s.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(s.canPlayType("audio/x-m4a;") || s.canPlayType("audio/m4a;") || s.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(s.canPlayType("audio/x-mp4;") || s.canPlayType("audio/mp4;") || s.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var r = new n(x),
        z = function(b) {
            this._autoplay = b.autoplay || !1;
            this._buffer = b.buffer || !1;
            this._duration = b.duration || 0;
            this._format = b.format || null;
            this._loop = b.loop || !1;
            this._loaded = !1;
            this._sprite = b.sprite || {};
            this._src = b.src || "";
            this._pos3d = b.pos3d || [0, 0, -0.5];
            this._volume = void 0 !== b.volume ? b.volume : 1;
            this._urls = b.urls || [];
            this._rate = b.rate || 1;
            this._model = b.model || null;
            this._onload = [b.onload || function() {}];
            this._onloaderror = [b.onloaderror || function() {}];
            this._onend = [b.onend || function() {}];
            this._onpause = [b.onpause || function() {}];
            this._onplay = [b.onplay || function() {}];
            this._onendTimer = [];
            this._webAudio = d && !this._buffer;
            this._audioNode = [];
            this._webAudio &&
                this._setupAudioNode();
            "undefined" !== typeof c && c && r.iOSAutoEnable && r._enableiOSAudio();
            r._howls.push(this);
            this.load()
        };
    z.prototype = {
        load: function() {
            var c = this,
                d = null;
            if (e) c.on("loaderror", Error("No audio support."));
            else {
                for (var g = 0; g < c._urls.length; g++) {
                    var j, s;
                    if (c._format) j = c._format;
                    else if (s = c._urls[g], (j = /^data:audio\/([^;,]+);/i.exec(s)) || (j = /\.([^.]+)$/.exec(s.split("?", 1)[0])), j) j = j[1].toLowerCase();
                    else {
                        c.on("loaderror", Error("Could not extract format from passed URLs, please add format parameter."));
                        return
                    } if (x[j]) {
                        d = c._urls[g];
                        break
                    }
                }
                if (d) {
                    c._src = d;
                    if (c._webAudio) {
                        var z = d;
                        if (z in b) c._duration = b[z].duration, E(c);
                        else if (/^data:[^;]+;base64,/.test(z)) {
                            d = atob(z.split(",")[1]);
                            g = new Uint8Array(d.length);
                            for (j = 0; j < d.length; ++j) g[j] = d.charCodeAt(j);
                            C(g.buffer, c, z)
                        } else {
                            var t = new XMLHttpRequest;
                            t.open("GET", z, !0);
                            t.responseType = "arraybuffer";
                            t.onload = function() {
                                C(t.response, c, z)
                            };
                            t.onerror = function() {
                                c._webAudio && (c._buffer = !0, c._webAudio = !1, c._audioNode = [], delete c._gainNode, delete b[z], c.load())
                            };
                            try {
                                t.send()
                            } catch (ya) {
                                t.onerror()
                            }
                        }
                    } else {
                        var I = new Audio;
                        I.addEventListener("error", function() {
                            I.error && 4 === I.error.code && (n.noAudio = !0);
                            c.on("loaderror", {
                                type: I.error ? I.error.code : 0
                            })
                        }, !1);
                        c._audioNode.push(I);
                        I.src = d;
                        I._pos = 0;
                        I.preload = "auto";
                        I.volume = r._muted ? 0 : c._volume * r.volume();
                        var T = function() {
                            c._duration = Math.ceil(10 * I.duration) / 10;
                            0 === Object.getOwnPropertyNames(c._sprite).length && (c._sprite = {
                                _default: [0, 1E3 * c._duration]
                            });
                            c._loaded || (c._loaded = !0, c.on("load"));
                            c._autoplay && c.play();
                            I.removeEventListener("canplaythrough",
                                T, !1)
                        };
                        I.addEventListener("canplaythrough", T, !1);
                        I.load()
                    }
                    return c
                }
                c.on("loaderror", Error("No codec support for selected audio sources."))
            }
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, e) {
            var g = this;
            "function" === typeof d && (e = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() {
                g.play(d, e)
            }), g;
            if (!g._sprite[d]) return "function" === typeof e && e(), g;
            g._inactiveNode(function(j) {
                j._sprite =
                    d;
                var n = 0 < j._pos ? j._pos : g._sprite[d][0] / 1E3,
                    s = 0;
                g._webAudio ? (s = g._sprite[d][1] / 1E3 - j._pos, 0 < j._pos && (n = g._sprite[d][0] / 1E3 + n)) : s = g._sprite[d][1] / 1E3 - (n - g._sprite[d][0] / 1E3);
                var z = !(!g._loop && !g._sprite[d][2]),
                    x = "string" === typeof e ? e : Math.round(Date.now() * Math.random()) + "",
                    t;
                t = setTimeout(function() {
                    !g._webAudio && z && g.stop(x).play(d, x);
                    g._webAudio && !z && (g._nodeById(x).paused = !0, g._nodeById(x)._pos = 0, g._clearEndTimer(x));
                    !g._webAudio && !z && g.stop(x);
                    g.on("end", x)
                }, 1E3 * (s / g._rate));
                g._onendTimer.push({
                    timer: t,
                    id: x
                });
                if (g._webAudio) {
                    t = g._sprite[d][0] / 1E3;
                    var C = g._sprite[d][1] / 1E3;
                    j.id = x;
                    j.paused = !1;
                    t = [z, t, C];
                    C = g._nodeById(x);
                    C.bufferSource = c.createBufferSource();
                    C.bufferSource.buffer = b[g._src];
                    C.bufferSource.connect(C.panner);
                    C.bufferSource.loop = t[0];
                    t[0] && (C.bufferSource.loopStart = t[1], C.bufferSource.loopEnd = t[1] + t[2]);
                    C.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    j.gain.value = g._volume;
                    "undefined" === typeof j.bufferSource.start ? z ? j.bufferSource.noteGrainOn(0, n, 86400) : j.bufferSource.noteGrainOn(0,
                        n, s) : z ? j.bufferSource.start(0, n, 86400) : j.bufferSource.start(0, n, s)
                } else if (4 === j.readyState || !j.readyState && navigator.isCocoonJS) j.readyState = 4, j.id = x, j.currentTime = n, j.muted = r._muted || j.muted, j.volume = g._volume * r.volume(), setTimeout(function() {
                    j.play()
                }, 0);
                else {
                    g._clearEndTimer(x);
                    var E = d,
                        za = e,
                        qa = function() {
                            g.play(E, za);
                            j.removeEventListener("canplaythrough", qa, !1)
                        };
                    j.addEventListener("canplaythrough", qa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof e && e(x);
                return g
            });
            return g
        },
        pause: function(b) {
            var c =
                this;
            if (!c._loaded) return c.on("play", function() {
                c.pause(b)
            }), c;
            c._clearEndTimer(b);
            var d = b ? c._nodeById(b) : c._activeNode();
            if (d)
                if (d._pos = c.pos(null, b), c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else d.pause();
            c.on("pause");
            return c
        },
        stop: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.stop(b)
            }), c;
            c._clearEndTimer(b);
            var d = b ? c._nodeById(b) : c._activeNode();
            if (d)
                if (d._pos =
                    0, c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else isNaN(d.duration) || (d.pause(), d.currentTime = 0);
            return c
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.mute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.muted = !0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) :
                c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.muted = !1);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var e = c ? d._nodeById(c) : d._activeNode();
                e && (d._webAudio ? e.gain.value = b : e.volume = b * r.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b,
            d) {
            var e = this;
            if (!e._loaded) return e.on("load", function() {
                e.pos(b)
            }), "number" === typeof b ? e : e._pos || 0;
            b = parseFloat(b);
            var g = d ? e._nodeById(d) : e._activeNode();
            if (g) return 0 <= b ? (e.pause(d), g._pos = b, e.play(g._sprite, d), e) : e._webAudio ? g._pos + (c.currentTime - e._playStart) : g.currentTime;
            if (0 <= b) return e;
            for (g = 0; g < e._audioNode.length; g++)
                if (e._audioNode[g].paused && 4 === e._audioNode[g].readyState) return e._webAudio ? e._audioNode[g]._pos : e._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, e) {
            var g = this;
            c = "undefined" ===
                typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() {
                g.pos3d(b, c, d, e)
            }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var j = e ? g._nodeById(e) : g._activeNode();
                    j && (g._pos3d = [b, c, d], j.panner.setPosition(b, c, d), j.panner.panningModel = g._model || "HRTF")
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d, e, g) {
            var j = this,
                n = Math.abs(b - c),
                s = b > c ? "down" : "up",
                n = n / 0.01,
                r = d / n;
            if (!j._loaded) return j.on("load", function() {
                j.fade(b, c, d, e, g)
            }), j;
            j.volume(b, g);
            for (var x = 1; x <= n; x++)(function() {
                var b =
                    Math.round(1E3 * (j._volume + ("up" === s ? 0.01 : -0.01) * x)) / 1E3;
                setTimeout(function() {
                    j.volume(b, g);
                    b === c && e && e()
                }, r * x)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, e) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(e);
                g.on("end")
            }, e)
        },
        _nodeById: function(b) {
            for (var c = this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b =
                        this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var e;
                if (this._webAudio) e = this._setupAudioNode(), b(e);
                else {
                    this.load();
                    e = this._audioNode[this._audioNode.length - 1];
                    var g = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                        j = function() {
                            e.removeEventListener(g, j, !1);
                            b(e)
                        };
                    e.addEventListener(g, j, !1)
                }
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            for (var c = -1, d = 0; d < this._onendTimer.length; d++)
                if (this._onendTimer[d].id === b) {
                    c = d;
                    break
                }
            if (b = this._onendTimer[c]) clearTimeout(b.timer), this._onendTimer.splice(c, 1)
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(t);
            b[d].panner = c.createPanner();
            b[d].panner.panningModel = this._model || "equalpower";
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var e = 0; e < d.length; e++) c ? d[e].call(this, c) :
                    d[e].call(this);
            return this
        },
        off: function(b, c) {
            var d = this["_on" + b];
            if (c)
                for (var e = 0; e < d.length; e++) {
                    if (c === d[e]) {
                        d.splice(e, 1);
                        break
                    }
                } else this["_on" + b] = [];
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || (this.stop(c[d].id), this.on("end", c[d].id)), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            for (d = 0; d < this._onendTimer.length; d++) clearTimeout(this._onendTimer[d].timer);
            c = r._howls.indexOf(this);
            null !== c && 0 <= c && r._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var C = function(d, e, g) {
            c.decodeAudioData(d, function(c) {
                c && (b[g] = c, E(e, c))
            }, function(b) {
                e.on("loaderror", b)
            })
        },
        E = function(b, c) {
            b._duration = c ? c.duration : b._duration;
            0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
            b._loaded || (b._loaded = !0, b.on("load"));
            b._autoplay && b.play()
        };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: r,
            Howl: z
        }
    });
    "undefined" !== typeof exports && (exports.Howler = r, exports.Howl = z);
    "undefined" !== typeof window && (window.Howler =
        r, window.Howl = z)
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            g = function() {
                return d.apply(this instanceof e && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, g) {
            var j = ig.$new("canvas");
            j.width = b.width;
            j.height = b.height;
            var t = j.getContext("2d");
            ig.System.SCALE.CRISP(j, t);
            var m = ig.getVendorAttribute(t, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(t, "getImageDataHD");
            var u = b.width / m,
                y = b.height / m;
            j.width = Math.ceil(u);
            j.height = Math.ceil(y);
            t.drawImage(b, 0, 0, u, y);
            return 1 === m ? t.getImageData(c, d, e, g) : t.getImageDataHD(c, d, e, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c =
                0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var j = d.requires[g];
                    ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    j = ig._loadQueue[c].requires;
                    for (g = 0; g < j.length; g++) d = ig.modules[j[g]], (!d || !d.loaded) && e.push(j[g]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, g) {
            var j = c++;
            d[j] = !0;
            var r = function() {
                d[j] && (b.requestAnimationFrame(r, g), e())
            };
            b.requestAnimationFrame(r, g);
            return j
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        j = 0;
    b.ig.Class = function() {};
    var t = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" ==
            typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
                return function() {
                    var e = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = e;
                    return g
                }
            }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var x = this.prototype;
        e = !0;
        var r = new this;
        e = !1;
        for (var z in c) r[z] = "function" == typeof c[z] && "function" == typeof x[z] && g.test(c[z]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = x[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(z, c[z]) : c[z];
        d.prototype = r;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = t;
        d.classId = r.classId = ++j;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var j = g.getContext("2d"), t = j.getImageData(0, 0, d, e), n = 0; n < e; n++)
                for (var s = 0; s < d; s++) {
                    var x = 4 * (Math.floor(n / b) * this.width + Math.floor(s / b)),
                        r = 4 * (n * d + s);
                    t.data[r] = c.data[x];
                    t.data[r + 1] = c.data[x + 1];
                    t.data[r + 2] = c.data[x + 2];
                    t.data[r + 3] = c.data[x + 3]
                }
            j.putImageData(t, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, j) {
            if (this.loaded) {
                var t = ig.system.scale;
                g = (g ? g : this.width) * t;
                j = (j ? j : this.height) * t;
                ig.system.context.drawImage(this.data,
                    d ? d * t : 0, e ? e * t : 0, g, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, j);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, j, t) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var n = ig.system.scale,
                    s = Math.floor(e * n),
                    x = Math.floor(g * n),
                    r = j ? -1 : 1,
                    z = t ? -1 : 1;
                if (j || t) ig.system.context.save(), ig.system.context.scale(r, z);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * n, Math.floor(d * e / this.width) * g * n, s, x, ig.system.getDrawPos(b) * r - (j ? s : 0), ig.system.getDrawPos(c) * z - (t ? x : 0), s, x);
                (j ||
                    t) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * g, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? j / 2 : j;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (j = 0; j < b.length; j++) e = b.charCodeAt(j),
                    c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                j = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, j);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var j = 4 * g + 3;
                127 < c.data[j] ? e++ : 128 > c.data[j] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var j = new Audio(e);
            d && (j.addEventListener("canplaythrough", function n(c) {
                j.removeEventListener("canplaythrough", n, !1);
                d(b, !0, c)
            }, !1), j.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            j.preload = "auto";
            j.load();
            this.clips[b] = [j];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return j
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                    0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel =
                b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] =
                null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b,
            c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, g, j, t) {
        ig.system = new ig.System(b, d, e, g, j || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(t || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0)
        },
        trace: function(b, c, g, j, t, n) {
            var s = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                x = Math.ceil(Math.max(Math.abs(g), Math.abs(j)) / this.tilesize);
            if (1 < x)
                for (var r = g / x, z = j / x, C = 0; C < x && (r || z) && !(this._traceStep(s,
                    b, c, r, z, t, n, g, j, C), b = s.pos.x, c = s.pos.y, s.collision.x && (g = r = 0), s.collision.y && (j = z = 0), s.collision.slope); C++);
            else this._traceStep(s, b, c, g, j, t, n, g, j, 0);
            return s
        },
        _traceStep: function(b, c, g, j, t, n, s, x, r, z) {
            b.pos.x += j;
            b.pos.y += t;
            var C = 0;
            if (j) {
                var E = 0 < j ? n : 0,
                    m = 0 > j ? this.tilesize : 0,
                    C = Math.max(Math.floor(g / this.tilesize), 0),
                    u = Math.min(Math.ceil((g + s) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + E) / this.tilesize);
                var y = Math.floor((c + E) / this.tilesize);
                if (0 < z || j == y || 0 > y || y >= this.width) y = -1;
                if (0 <= j && j < this.width)
                    for (var L =
                        C; L < u && !(-1 != y && (C = this.data[L][y], 1 < C && C <= this.lastSlope && this._checkTileDef(b, C, c, g, x, r, n, s, y, L))); L++)
                        if (C = this.data[L][j], 1 == C || C > this.lastSlope || 1 < C && this._checkTileDef(b, C, c, g, x, r, n, s, j, L)) {
                            if (1 < C && C <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = C;
                            c = b.pos.x = j * this.tilesize - E + m;
                            x = 0;
                            break
                        }
            }
            if (t) {
                E = 0 < t ? s : 0;
                t = 0 > t ? this.tilesize : 0;
                C = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                m = Math.min(Math.ceil((b.pos.x + n) / this.tilesize), this.width);
                L = Math.floor((b.pos.y + E) / this.tilesize);
                u = Math.floor((g + E) / this.tilesize);
                if (0 < z || L == u || 0 > u || u >= this.height) u = -1;
                if (0 <= L && L < this.height)
                    for (j = C; j < m && !(-1 != u && (C = this.data[u][j], 1 < C && C <= this.lastSlope && this._checkTileDef(b, C, c, g, x, r, n, s, j, u))); j++)
                        if (C = this.data[L][j], 1 == C || C > this.lastSlope || 1 < C && this._checkTileDef(b, C, c, g, x, r, n, s, j, L)) {
                            if (1 < C && C <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = C;
                            b.pos.y = L * this.tilesize - E + t;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, j, t, n, s, x, r, z) {
            var C = this.tiledef[c];
            if (!C) return !1;
            c = (C[2] -
                C[0]) * this.tilesize;
            var E = (C[3] - C[1]) * this.tilesize,
                m = C[4];
            s = g + t + (0 > E ? s : 0) - (r + C[0]) * this.tilesize;
            x = j + n + (0 < c ? x : 0) - (z + C[1]) * this.tilesize;
            if (0 < c * x - E * s) {
                if (0 > t * -E + n * c) return m;
                r = Math.sqrt(c * c + E * E);
                z = E / r;
                r = -c / r;
                var u = s * z + x * r,
                    C = z * u,
                    u = r * u;
                if (C * C + u * u >= t * t + n * n) return m || 0.5 > c * (x - n) - E * (s - t);
                b.pos.x = g + t - C;
                b.pos.y = j + n - u;
                b.collision.slope = {
                    x: c,
                    y: E,
                    nx: z,
                    ny: r
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, j) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + j
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) {
                this.preRenderedChunks[g] = [];
                for (var j = 0; j < d; j++) this.preRenderedChunks[g][j] = this.preRenderChunk(j, g, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, g == e - 1 ?
                    c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                j = e / this.tilesize / ig.system.scale + 1,
                t = b * this.chunkSize / ig.system.scale % this.tilesize,
                n = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var s = ig.$new("canvas");
            s.width = d;
            s.height = e;
            s.retinaResolutionEnabled = !1;
            e = s.getContext("2d");
            ig.System.scaleMode(s, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var x = 0; x < j; x++)
                    if (e + b < this.width && x + c < this.height) {
                        var r = this.data[x + c][e + b];
                        r && this.tiles.drawTile(e * this.tilesize - t, x * this.tilesize - n, r - 1, this.tilesize)
                    }
            ig.system.context = d;
            return s
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                t = this.preRenderedChunks[0].length,
                n = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, t), j = Math.min(j, n));
            for (var s = 0; e < j; e++) {
                for (var x = 0, r = d; r < g; r++) {
                    var z = this.preRenderedChunks[e % n][r % t],
                        C = -b + r * this.chunkSize - x,
                        E = -c + e * this.chunkSize - s;
                    ig.system.context.drawImage(z, C, E);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(C, E, this.chunkSize, this.chunkSize));
                    this.repeat && z.width < this.chunkSize && C + z.width < ig.system.realWidth && (x += this.chunkSize - z.width, g++)
                }
                this.repeat && z.height < this.chunkSize && E + z.height < ig.system.realHeight && (s += this.chunkSize - z.height, j++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, t = -g - this.tilesize, g = ig.system.width + this.tilesize - g, n = ig.system.height + this.tilesize - j, s = -1, j = -j - this.tilesize; j < n; s++, j += this.tilesize) {
                var x = s + e;
                if (x >= this.height || 0 > x) {
                    if (!this.repeat) continue;
                    x = (x % this.height + this.height) % this.height
                }
                for (var r = -1, z = t; z < g; r++, z += this.tilesize) {
                    b = r + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[x][b])(c = this.anims[b -
                        1]) ? c.draw(z, j) : this.tiles.drawTile(z, j, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, t = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, n = Math.floor(d.pos.x / this.cellSize); n < j; n++)
                        for (var s = g; s < t; s++)
                            if (b[n])
                                if (b[n][s]) {
                                    for (var x = b[n][s], r = 0; r < x.length; r++) d.touches(x[r]) && !e[x[r].id] && (e[x[r].id] = !0, ig.Entity.checkPair(d, x[r]));
                                    x.push(d)
                                } else b[n][s] = [d];
                else b[n] = {}, b[n][s] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
                c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b,
            c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var g = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = g
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b,
            c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c =
                window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(480, 640)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(480, 640)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth,
                window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize =
                new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b =
                0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: e,
                    top: g
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var j = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    t = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    n = Math.floor(j * this.scaleRatioMultiplier.x) + "px",
                    t = Math.floor(t * this.scaleRatioMultiplier.y) + "px",
                    g = Math.floor(g * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    n = e.left,
                    s = e.top,
                    j = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    t = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    n = Math.floor(n + j * c) + "px",
                    t = Math.floor(s + t * c) + "px",
                    g = Math.floor(g * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: n,
                    top: t,
                    width: g,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: g
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() {
                this.reorient()
            }.bind(this), !1);
            window.addEventListener("orientationchange", function() {
                this.reorient()
            }.bind(this), !1);
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 

            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 

            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        muteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.muteFlag = !0 : b.flagChange && (this.muteFlag = !0)
        },
        unmute: function(b) {
            this.debug &&
                console.log("unmute");
            "undefined" === typeof b ? this.muteFlag = !1 : b.flagChange && (this.muteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.muteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:",
                b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.muteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume =
                0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.muteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 >
                    b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.muteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.muteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
                1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.muteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.muteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context =
                    new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode =
                this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var g in b) {
                this.soundList[g] = g;
                c = b[g].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var j = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS &&
                    (j = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (j = b));
                var t = new XMLHttpRequest;
                t.open("GET", j, !0);
                t.responseType = "arraybuffer";
                t.onload = function() {
                    this.webaudio.context.decodeAudioData(t.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + j + '".')
                    })
                }.bind(this);
                t.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio =
                    this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/,
                        ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
                        "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff &&
                    (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        g = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? g = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (g = e);
                    if (g) {
                        ig.ua.mobile ? ig.ua.iOS && (g = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (g = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error &&
                                4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = g;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = g;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var j = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", j, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", j, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime &&
                                (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b =
                    this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            battleSound: {
                path: "media/audio/game/start-battle-long"
            },
            clickSound: {
                path: "media/audio/game/click"
            },
            starOneSound: {
                path: "media/audio/game/sone"
            },
            starTwoSound: {
                path: "media/audio/game/stwo"
            },
            starThreeSound: {
                path: "media/audio/game/sthree"
            },
            woshArrowSound: {
                path: "media/audio/game/arrow-shower-f"
            },
            woshFireSound: {
                path: "media/audio/game/wosh-fireball-a"
            },
            berserkSound: {
                path: "media/audio/game/berserk"
            },
            fireblastSound: {
                path: "media/audio/game/explode"
            },
            freezSound: {
                path: "media/audio/game/freez"
            },
            hammerEarthSound: {
                path: "media/audio/game/earthquake-fade"
            },
            hammercrushSound: {
                path: "media/audio/game/giant-sound"
            },
            thunderSound: {
                path: "media/audio/game/thunder"
            },
            maleOneSound: {
                path: "media/audio/game/m-aikh"
            },
            maleTwoSound: {
                path: "media/audio/game/m-argh"
            },
            maleThreeSound: {
                path: "media/audio/game/m-ok"
            },
            maleFourSound: {
                path: "media/audio/game/m-yach"
            },
            femaleSound: {
                path: "media/audio/game/mage"
            },
            hitMeleSound: {
                path: "media/audio/game/meleweapon"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 12.309,
                startMp3: 0,
                endMp3: 12.309
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0
                }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.muteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.muteFlag
        },
        muteAll: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute({
                flagChange: b
            });
            this.sfxPlayer && this.sfxPlayer.mute({
                flagChange: b
            })
        },
        unmuteAll: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute({
                flagChange: b
            });
            this.sfxPlayer && this.sfxPlayer.unmute({
                flagChange: b
            })
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.game.settingsGame.soundOn && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.game.settingsGame.soundOn && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b =
                this.getHiddenProp();
            return !b ? !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" ==
                    this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime =
                        c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                            ig.soundHandler.forcelooped = !1
                        }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed :
                1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            g = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(g) ? 0 : g;
                        this.rightStick.y +=
                            isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) ||
                    ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var g = 0; g < b.touches.length; g++) {
                        var j = b.touches[g];
                        j && this.touches.push({
                            x: (j.clientX - e.left) / c,
                            y: (j.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var g = 0; g < b.touches.length; g++) {
                    var j = b.touches[g];
                    j && this.touches.push({
                        x: (j.clientX - e.left) / c,
                        y: (j.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var g = 0; g < b.length; ++g) {
                    for (var j = b[g], t = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, n = (j.clientX - e.left) / c, j = (j.clientY - e.top) / d, s = 0; s < this.touches.length; ++s) this.touches[s].identifier == t && this.touches.splice(s, 1);
                    this.touches.push({
                        x: n,
                        y: j,
                        identifier: t
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var g =
                    "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j)
                    if (this.touches[j].identifier == g) {
                        var t = (b.clientY - e.top) / d;
                        this.touches[j].x = (b.clientX - e.left) / c;
                        this.touches[j].y = t
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            this._supportsLocalStorage() && (this.storage = new ig.Storage)
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad.state(b) ?
                !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, g) {
            return b.x > c + e || b.x < c || b.y > d + g || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        loadingImg: new ig.Image("media/graphics/game/loading-bar.png"),
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            ig.system.setGame(MyGame)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) /
                5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var b = ig.system.scale,
                c, d;
            ig.ua.mobile ? (c = 0.5 * ig.system.width - 126, d = 580, this.splashMobile.draw(0, 0)) : (c = 0.5 * ig.system.width - 126, d = 580, this.splashDesktop.draw(0, 0));
            var e = ig.system.context,
                g = _LOADING.frames["loader-bg"].frame;
            e.drawImage(this.loadingImg.data, g.x, g.y, g.w, g.h, c * b + b, d * b + b, g.w, g.h);
            g = _LOADING.frames["loader-load"].frame;
            e.drawImage(this.loadingImg.data, g.x, g.y, g.w, g.h, c * b + b + 3, d * b + b + 3,
                g.w * this._drawStatus, g.h);
            ig.system.context.font = "12pt troika";
            ig.system.context.fillStyle = "#FFF";
            b = Math.floor(100 * this._drawStatus);
            50 < b && (ig.system.context.fillStyle = "#000");
            ig.system.context.fillText(b + "%", c + 115, d + 16);
            ig.system.context.font = "12pt bevan";
            ig.system.context.fillStyle = "#FFF";
            ig.system.context.fillText(_STRINGS.Splash.Loading, c + 95, d - 5)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var g = {},
            j = {},
            t = {},
            n = 0,
            s = !1,
            x = !1,
            r = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            r = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            n = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            x = !0;
            s = new ig.Timer;
            for (var d in c) this.initEnd(d, c, j);
            for (d in j) this.initStart(d, j, b, g), this.initDelta(d, t, b, j)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!x) return !1;
            if (this.delay) {
                if (s.delta() < this.delay) return;
                this.delay = 0;
                s.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (s.delta() + n) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in t) this.propUpdate(property, b, g, t, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    r && r.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    n = 0;
                    s.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(j, d);
                    for (property in j) this.initDelta(property, t, b, j);
                    n = 0;
                    s.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            n += s.delta()
        };
        this.resume = function() {
            this.paused = !1;
            s.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, n += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                e = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            e || (e = 0.3);
            !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c) {
            var d = this.size.x,
                e = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x +=
                (d - this.size.x) / 2;
            this.pos.y += (e - this.size.y) / 2
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            g = $("#" + g.id);
            g.css("float", "left");
            g.css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    t = window.innerWidth /
                    mobileWidth;
                g.css("left", this.pos.x * t);
                g.css("top", this.pos.y * j);
                g.css("width", this.size.x * t);
                g.css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, t = h / 2 - destH / 2, console.log(j, t), g.css("left", j + this.pos.x * multiplier), g.css("top", t + this.pos.y * multiplier), g.css("width", this.size.x * multiplier), g.css("height", this.size.y * multiplier);
            e ? g.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : g.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
        },
        clicked: function() {
            throw "no implementation on clicked()";
        },
        clicking: function() {
            throw "no implementation on clicking()";
        },
        released: function() {
            throw "no implementation on released()";
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b,
            c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.domHandler.create("div");
            ig.domHandler.attr(g, "id", b);
            var j = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(j, "href", c), ig.domHandler.attr(j, "target", "_blank")) : ig.domHandler.attr(j, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var t = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), t = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", t = Math.floor(t + this.pos.y * d) + "px", n = Math.floor(this.size.x *
                d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(g, {
                "float": "left",
                position: "absolute",
                left: e,
                top: t,
                width: n,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(g, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(j, c);
            ig.domHandler.appendChild(g, j);
            ig.domHandler.appendToBody(g);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x =
                this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                        new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/game/more_games_btn.png", 71, 40),
        size: {
            x: 71,
            y: 40
        },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ?
                d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking &&
                b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over &&
                b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed =
                ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 13,
            y: 13
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var j = w / 2 - destW / 2,
                t = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", j + this.pos.x * multiplier), $("#" + g.id).css("top", t + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.battle-trainer").requires("impact.entity").defines(function() {
    EntityBattleTrainer = ig.Entity.extend({
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-w.png", 30, 50),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-wr.png", 30, 50),
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-a.png", 35, 50),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-ar.png", 35, 50),
        offset: {
            x: 28,
            y: 25
        },
        size: {
            x: 40,
            y: 40
        },
        testingMovement: !1,
        offsetUpAttack: {
            x: 12,
            y: 18
        },
        offsetDownAttack: {
            x: 12,
            y: 18
        },
        offsetRightAttack: {
            x: 9,
            y: 18
        },
        offsetLeftAttack: {
            x: 15,
            y: 18
        },
        offsetUpWalk: {
            x: 12,
            y: 25
        },
        offsetDownWalk: {
            x: 12,
            y: 25
        },
        offsetRightWalk: {
            x: 12,
            y: 25
        },
        offsetLeftWalk: {
            x: 10,
            y: 25
        },
        rangeShot: 0,
        rangeDistraction: 0,
        speedMovement: 0,
        health: 1E10,
        attackDamage: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [1, 27, 8, 9, 2, 10, 3, 11, 16, 17, 18, 19]), this.addAnim("downAttack", 0.05, [6, 14, 22, 30, 32, 33, 34,
                35, 36, 37, 38, 7
            ]), this.addAnim("upAttack", 0.05, [4, 12, 20, 24, 25, 26, 0, 28, 5, 13, 21, 29]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [1, 27, 8, 9, 2, 10, 3, 11, 16, 17, 18, 19]), this.addAnim("downAttack", 0.05, [6, 14, 22, 30, 32, 33, 34, 35, 36, 37, 38, 7]), this.addAnim("upAttack", 0.05, [4, 12, 20, 24, 25, 26, 0, 28, 5, 13, 21, 29]), this.animSheet = this.walkRSheet);
            this.addAnim("sideWalk", 0.05, [4, 12, 20, 5, 13, 21, 0, 25, 26, 27, 28, 29]);
            this.addAnim("downWalk", 0.05, [1, 24, 2, 8, 9, 10, 3, 16, 17, 18, 19]);
            this.addAnim("upWalk", 0.05, [6, 14, 22, 30, 7, 15, 23, 31, 32, 33, 34, 35]);
            this.currentAnim = this.anims.upAttack;
            ig.input.bind(ig.KEY.W, "up");
            ig.input.bind(ig.KEY.A, "left");
            ig.input.bind(ig.KEY.S, "down");
            ig.input.bind(ig.KEY.D, "right");
            ig.input.bind(ig.KEY.SPACE, "att");
            ig.input.bind(ig.KEY._1, "blue");
            ig.input.bind(ig.KEY._2, "red")
        },
        update: function() {
            this.testMove();
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        testMove: function() {
            ig.input.pressed("att") && (this.attack = !this.attack);
            ig.input.pressed("up") && (this.currentAnim =
                this.attack ? this.anims.upAttack : this.anims.upWalk);
            ig.input.pressed("down") && (this.currentAnim = this.attack ? this.anims.downAttack : this.anims.downWalk);
            ig.input.pressed("left") && (this.anims.sideWalk.flip.x = !1, this.anims.sideAttack.flip.x = !1, this.currentAnim = this.attack ? this.anims.sideAttack : this.anims.sideWalk);
            ig.input.pressed("right") && (this.anims.sideWalk.flip.x = !0, this.anims.sideAttack.flip.x = !0, this.currentAnim = this.attack ? this.anims.sideAttack : this.anims.sideWalk)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.tutorial-game").requires("impact.entity").defines(function() {
    EntityTutorialGame = ig.Entity.extend({
        zIndex: 1800,
        tutBBchat: new ig.Image("media/graphics/game/tutorial-chat-player.png"),
        tutTowerD: new ig.Image("media/graphics/game/tutorial-tower-d.png"),
        bubbleChatPos: {
            x: -120,
            y: 70
        },
        textOutInt: 0,
        blinkingTowerTarget: !1,
        blinkingMana: !1,
        manaShow: !1,
        deckFocus: !1,
        moveDeck: {
            x: 0,
            y: 0
        },
        bbChatDraw: !0,
        endTutorial: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.timerBlinking = new ig.Timer;
            this.hand =
                ig.game.spawnEntity(EntityHand, -100, 0);
            ig.game.settingsGame.tutorial || (this.hand.kill(), this.kill())
        },
        update: function() {
            this.parent();
            ig.input.pressed("click") && 2 > this.textOutInt ? (this.textOutInt++, 2 == this.textOutInt && (this.hand.handTween(), ig.game.gameState = "play")) : ig.input.pressed("click") && 4 == this.textOutInt && ig.game.settingsGame.tutorial && (ig.game.settingsGame.tutorial = !1, ig.game.io.storageSet("COV-settings", ig.game.settingsGame), ig.game.director.loadLevel(3))
        },
        TropsDeploy: function() {
            this.endTutorial ||
                (this.textOutInt = 3, this.bbChatDraw = !1, this.hand.stopTween(), this.hand.pos.x = -200, this.endTutorial = !0, null != this.hand && !1 == this.hand._killed && this.hand.kill())
        },
        TroopsDeath: function() {
            ig.game.gameState = "pause";
            this.bbChatDraw = !0;
            this.textOutInt = 4;
            var b = ig.game.getEntitiesByType(EntityTowerBig);
            if (0 < b.length)
                for (var c = 0; c < b.length; c++) b[c].setMiddleAnims()
        },
        checkTroops: function() {
            0 == ig.game.getEntitiesByType(EntityBaseTroops).length && (this.hand.handTween(), this.textOutInt = 2, this.bbChatDraw = !0)
        },
        draw: function() {
            this.parent();
            this.deckFocus && this.drawingBlack();
            1 == this.textOutInt ? (0.5 < this.timerBlinking.delta() && (this.timerBlinking.reset(), this.blinkingTowerTarget = !this.blinkingTowerTarget), this.blinkingTowerTarget && this.tutTowerD.draw(64, 20)) : 2 != this.textOutInt && 3 == this.textOutInt && (this.bbChatDraw = !1);
            this.bbChatDraw && this.tutBBchat.draw(90 - this.bubbleChatPos.x, 350 - this.bubbleChatPos.y);
            this.drawingText()
        },
        drawingBlack: function() {
            var b = ig.system.context;
            b.save();
            b.globalAlpha = 0.7;
            b.fillStyle = "black";
            b.fillRect(0, 0, 480,
                640);
            b.restore()
        },
        drawingText: function() {
            var b = ig.system.context,
                c = _STRINGS.Tutorial.Welcome;
            1 == this.textOutInt ? c = _STRINGS.Tutorial.Destroy : 2 == this.textOutInt ? c = _STRINGS.Tutorial.Deploy : 3 == this.textOutInt ? c = "" : 4 == this.textOutInt && (c = _STRINGS.Tutorial.Ready);
            this.textWraper(b, c, 90 - this.bubbleChatPos.x + 20, 350 - this.bubbleChatPos.y + 18)
        },
        textWraper: function(b, c, d, e) {
            c = c.split(" ");
            var g = "";
            b.font = "14px troika";
            b.textAlign = "left";
            b.fillStyle = "black";
            for (var j = 0; j < c.length; j++) {
                var t = g + c[j] + " ";
                180 < b.measureText(t).width &&
                    0 < j ? (b.fillText(g, d, e), g = c[j] + " ", e += 18) : g = t
            }
            b.fillText(g, d, e)
        }
    });
    EntityHand = ig.Entity.extend({
        handUp: new ig.Image("media/graphics/game/hand_up.png"),
        handClick: new ig.Image("media/graphics/game/hand_click.png"),
        isClick: !1,
        zIndex: 1500,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        handTween: function() {
            this.pos.x = 130;
            this.pos.y = 475;
            var b = this.tween({
                    pos: {
                        x: 130,
                        y: 560
                    }
                }, 0.8, {
                    onComplete: function() {
                        this.isClick = !0
                    }.bind(this)
                }),
                c = this.tween({
                    pos: {
                        x: 130,
                        y: 310
                    }
                }, 1.6, {
                    onComplete: function() {
                        this.isClick = !1
                    }.bind(this)
                }),
                d = this.tween({}, 0.5, {
                    onComplete: function() {
                        this.repeatTween()
                    }.bind(this)
                });
            b.chain(c);
            c.chain(d);
            b.start()
        },
        repeatTween: function() {
            var b = this.tween({
                    pos: {
                        x: 130,
                        y: 560
                    }
                }, 1.6, {
                    onComplete: function() {
                        this.isClick = !0
                    }.bind(this)
                }),
                c = this.tween({
                    pos: {
                        x: 130,
                        y: 310
                    }
                }, 1.6, {
                    onComplete: function() {
                        this.isClick = !1
                    }.bind(this)
                }),
                d = this.tween({}, 0.5);
            b.chain(c);
            c.chain(d);
            d.chain(b);
            b.start()
        },
        stopTween: function() {
            if (this.tweens && this.tweens.length)
                for (var b = 0; b < this.tweens.length; b++) this.tweens[b] &&
                    this.tweens[b].stop()
        },
        draw: function() {
            this.parent();
            this.isClick ? this.handClick.draw(this.pos.x, this.pos.y) : this.handUp.draw(this.pos.x, this.pos.y)
        }
    });
    EntityHandClickCard = ig.Entity.extend({
        handUp: new ig.Image("media/graphics/game/hand_up.png"),
        handClick: new ig.Image("media/graphics/game/hand_click.png"),
        isClick: !1,
        zIndex: 1801,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        startClicking: function() {
            this.pos.x = 420;
            this.pos.y = 560;
            var b = this.tween({
                    pos: {
                        x: 420,
                        y: 560
                    }
                }, 0.5, {
                    onComplete: function() {
                        this.isClick = !0
                    }.bind(this)
                }),
                c = this.tween({
                    pos: {
                        x: 420,
                        y: 560
                    }
                }, 0.5, {
                    onComplete: function() {
                        this.isClick = !1
                    }.bind(this)
                }),
                d = this.tween({}, 0.5);
            b.chain(c);
            c.chain(d);
            d.chain(b);
            b.start()
        },
        draw: function() {
            this.parent();
            this.isClick ? this.handClick.draw(this.pos.x, this.pos.y) : this.handUp.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.main-background").requires("impact.entity", "game.entities.tutorial-game").defines(function() {
    EntityMainBackground = ig.Entity.extend({
        zIndex: 1,
        bgImage: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            null != ig.game.pointer && ig.game.pointer.kill();
            ig.game.pointer = ig.game.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.bgmPlayer.volume(1);
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            !ig.game.settingsGame.tutorial && !ig.game.settingsGame.checkCard && (this.hand = ig.game.spawnEntity(EntityHandClickCard, 0, 0), this.hand.startClicking())
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            this.bgImage.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-battle").requires("game.entities.buttons.button").defines(function() {
    EntityButtonBattle = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(129, 62),
        fillColor: null,
        zIndex: 151,
        img: new ig.Image("media/graphics/game/ui/empty-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.sortEntitiesDeferred()
        },
        clicked: function() {
            var b = ig.game.getEntitiesByType(EntityPopupInfo)[0];
            null != b && b.iscalled || (ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound"),
                ig.game.settingsGame.tutorial ? ig.game.getEntitiesByType(EntityPopupTutorial)[0].callPopupTutor("down") : ig.game.director.loadLevel(3))
        },
        clicking: function() {},
        released: function() {},
        draw: function() {
            this.img.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context;
            b.font = "17pt bevan";
            b.fillStyle = "#e06b04";
            var c = b.measureText(_STRINGS.Game.Battle).width;
            b.fillText(_STRINGS.Game.Battle, this.pos.x + this.size.x / 2 - c / 2, this.pos.y + 35);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-deck").requires("game.entities.buttons.button").defines(function() {
    EntityButtonDeck = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(51, 51),
        fillColor: null,
        zIndex: 1E3,
        img: new ig.Image("media/graphics/game/ui/deck-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound");
            ig.game.director.loadLevel(2)
        },
        clicking: function() {},
        released: function() {},
        draw: function() {
            this.img.draw(this.pos.x -
                ig.game.screen.x, this.pos.y - ig.game.screen.y);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSound = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(25, 25),
        fillColor: null,
        zIndex: 95E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/sound-btn.png", 29, 23),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("soundOn", 1, [1]);
            this.addAnim("soundOff", 1, [0]);
            ig.game.settingsGame.soundOn ? (this.currentAnim = this.anims.soundOn, ig.soundHandler.unmuteAll()) : (this.currentAnim =
                this.anims.soundOff, ig.soundHandler.muteAll())
        },
        clicked: function() {
            ig.game.settingsGame.soundOn = !ig.game.settingsGame.soundOn;
            ig.game.settingsGame.soundOn ? (this.currentAnim = this.anims.soundOn, ig.soundHandler.unmuteAll()) : (this.currentAnim = this.anims.soundOff, ig.soundHandler.muteAll());
            ig.game.io.storageSet("COV-settings", ig.game.settingsGame)
        },
        clicking: function() {},
        released: function() {},
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-yes").requires("game.entities.buttons.button").defines(function() {
    EntityButtonYes = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(100, 48),
        fillColor: null,
        zIndex: 95E3,
        localPos: {
            x: 0,
            y: 0
        },
        img: new ig.Image("media/graphics/game/ui/small-empty-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.control = d.control;
            this.localPos.x = b;
            this.localPos.y = c
        },
        clicked: function() {
            ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound");
            ig.game.director.loadLevel(3)
        },
        clicking: function() {},
        released: function() {},
        update: function() {
            this.parent();
            this.pos.x = this.localPos.x + this.control.pos.x;
            this.pos.y = this.localPos.y + this.control.pos.y
        },
        draw: function() {
            this.img.draw(this.pos.x, this.pos.y);
            var b = ig.system.context;
            b.save();
            b.font = "14pt bevan";
            b.fillStyle = "#e06b04";
            b.textAlign = "center";
            b.fillText(_STRINGS.Game.Yes, this.pos.x + this.size.x / 2, this.pos.y + 28);
            b.restore();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-no").requires("game.entities.buttons.button").defines(function() {
    EntityButtonNo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(100, 48),
        fillColor: null,
        zIndex: 95E3,
        localPos: {
            x: 0,
            y: 0
        },
        img: new ig.Image("media/graphics/game/ui/small-empty-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.control = d.control;
            this.localPos.x = b;
            this.localPos.y = c
        },
        clicked: function() {
            ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound");
            ig.game.settingsGame.tutorial = !1;
            ig.game.io.storageSet("COV-settings", ig.game.settingsGame);
            ig.game.director.loadLevel(3)
        },
        clicking: function() {},
        released: function() {},
        update: function() {
            this.parent();
            this.pos.x = this.localPos.x + this.control.pos.x;
            this.pos.y = this.localPos.y + this.control.pos.y
        },
        draw: function() {
            this.img.draw(this.pos.x, this.pos.y);
            var b = ig.system.context;
            b.save();
            b.font = "14pt bevan";
            b.fillStyle = "#e06b04";
            b.textAlign = "center";
            b.fillText(_STRINGS.Game.No, this.pos.x + this.size.x / 2, this.pos.y + 28);
            b.restore();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.popup-tutorial").requires("impact.entity", "game.entities.buttons.button-yes", "game.entities.buttons.button-no").defines(function() {
    EntityPopupTutorial = ig.Entity.extend({
        img: new ig.Image("media/graphics/game/tutorial-popup.png"),
        zIndex: 200,
        size: {
            x: 316,
            y: 255
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.spawnEntity(EntityButtonYes, b - 50, c + 570, {
                control: this
            });
            ig.game.spawnEntity(EntityButtonNo, b + 100, c + 570, {
                control: this
            })
        },
        update: function() {
            this.parent()
        },
        callPopupTutor: function(b) {
            "up" == b ?
                (console.log("call"), this.tween({
                    pos: {
                        y: -400
                    }
                }, 1, {
                    easing: ig.Tween.Easing.Elastic.EaseInOut
                }).start()) : (console.log("call down"), this.tween({
                    pos: {
                        y: 150
                    }
                }, 1, {
                    easing: ig.Tween.Easing.Elastic.EaseOut
                }).start())
        },
        draw: function() {
            this.img.draw(this.pos.x, this.pos.y);
            var b = ig.system.context;
            b.save();
            b.font = "22pt troika";
            b.fillStyle = "#FFFFFF";
            b.textAlign = "center";
            b.fillText(_STRINGS.Game.Tutorial, this.pos.x + this.size.x / 2, this.pos.y + 43);
            this.textWraper(b, _STRINGS.Game.StartTutorial, this.pos.x + 35, this.pos.y +
                100);
            b.restore();
            this.parent()
        },
        textWraper: function(b, c, d, e) {
            c = c.split(" ");
            var g = "";
            b.font = "18pt troika";
            b.textAlign = "left";
            b.fillStyle = "#FFF";
            for (var j = 0; j < c.length; j++) {
                var t = g + c[j] + " ";
                245 < b.measureText(t).width && 0 < j ? (b.fillText(g, d, e), g = c[j] + " ", e += 26) : g = t
            }
            b.fillText(g, d, e)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.main-menu").requires("impact.image", "game.entities.main-background", "game.entities.buttons.button-more-games", "game.entities.buttons.button-battle", "game.entities.buttons.button-deck", "game.entities.buttons.button-sound", "game.entities.ui.popup-tutorial").defines(function() {
    LevelMainMenu = {
        entities: [{
            type: "EntityMainBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityButtonMoreGames",
            x: 30,
            y: 567
        }, {
            type: "EntityButtonBattle",
            x: 176,
            y: 536
        }, {
            type: "EntityButtonDeck",
            x: 400,
            y: 562
        }, {
            type: "EntityButtonSound",
            x: 432,
            y: 20
        }, {
            type: "EntityPopupTutorial",
            x: 82,
            y: -400
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.deck-background").requires("impact.entity").defines(function() {
    EntityDeckBackground = ig.Entity.extend({
        zIndex: 1,
        img: new ig.Image("media/graphics/game/deck-bg.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            null != ig.game.pointer && ig.game.pointer.kill();
            ig.game.pointer = ig.game.spawnEntity(EntityPointerSelector, 50, 50);
            !ig.game.settingsGame.tutorial && !ig.game.settingsGame.checkCard && (ig.game.settingsGame.checkCard = !0, ig.game.io.storageSet("COV-settings", ig.game.settingsGame))
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.img.draw(this.pos.x, this.pos.y);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card-show").requires("impact.entity").defines(function() {
    EntityCardShow = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        size: {
            x: 83,
            y: 103
        },
        zIndex: 105,
        manaUsage: 2,
        cardImg: new ig.Image(_CARD.meta.imageBig),
        posCard: -1,
        indexCardNumber: 0,
        setManualScale: 1.3,
        usedHand: !1,
        showUse: !1,
        showInfo: !1,
        btnUse: null,
        btnInfo: null,
        setAlpha: 1,
        stillMinus: !1,
        lockPos: {
            x: 0,
            y: 0
        },
        deck: null,
        posMana: {
            x: 0,
            y: 0
        },
        cardName: "",
        stringManaUsage: "",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.posMana.x = 63;
            this.posMana.y =
                93;
            0 == this.indexCardNumber ? this.stringManaUsage = this.cardName = "tombcrush" : 1 == this.indexCardNumber ? (this.cardName = "archer", this.posMana.x = 65, this.stringManaUsage = "archer") : 2 == this.indexCardNumber ? (this.cardName = "arrow-shower", this.posMana.x = 65, this.stringManaUsage = "ars") : 3 == this.indexCardNumber ? this.stringManaUsage = this.cardName = "warrior" : 4 == this.indexCardNumber ? (this.cardName = "berserk", this.posMana.x = 65, this.stringManaUsage = "berserk") : 5 == this.indexCardNumber ? this.stringManaUsage = this.cardName = "giant" :
                6 == this.indexCardNumber ? (this.cardName = "bomb", this.posMana.x = 65, this.stringManaUsage = "bomb") : 7 == this.indexCardNumber ? (this.cardName = "fireball", this.posMana.x = 65, this.stringManaUsage = "fireball") : 8 == this.indexCardNumber ? (this.cardName = "freezer", this.posMana.x = 65, this.stringManaUsage = "freezer") : 9 == this.indexCardNumber ? (this.cardName = "axeman", this.posMana.x = 65, this.stringManaUsage = "axeman") : 10 == this.indexCardNumber ? (this.cardName = "axemanthrow", this.posMana.x = 65, this.stringManaUsage = "axethrow") : 11 == this.indexCardNumber ?
                this.stringManaUsage = this.cardName = "hammer" : 12 == this.indexCardNumber ? (this.cardName = "lightning", this.posMana.x = 65, this.stringManaUsage = "lightning") : 13 == this.indexCardNumber && (this.cardName = "mage", this.posMana.x = 65, this.stringManaUsage = "mage")
        },
        ready: function() {
            this.btnUse = ig.game.getEntitiesByType(EntityButtonUse)[0];
            this.btnInfo = ig.game.getEntitiesByType(EntityButtonInfo)[0]
        },
        update: function() {
            this.parent();
            this.pos.x = this.lockPos.x + this.deck.pos.x;
            this.pos.y = this.lockPos.y + this.deck.pos.y
        },
        draw: function() {
            this.parent();
            this.drawingClick();
            this.drawingCard();
            this.drawingMana()
        },
        released: function() {
            this.usedHand ? this.usedHand && ig.game.readyToChange ? this.deck.popupInfo.iscalled || (this.changeCardHand(), this.deck.backDeckToPos()) : this.usedHand && !this.deck.popupInfo.iscalled && (this.showInfo = !this.showInfo, null == ig.game.cardShow ? ig.game.cardShow = this : ig.game.cardShow != this && (ig.game.cardShow._killed || ig.game.cardShow.deactiveUsed(), ig.game.cardShow = this), null != this.btnInfo && (null == this.btnInfo.callBy || this.btnInfo.callBy !=
                this ? (this.btnInfo.callBy = this, this.btnInfo.changePos()) : this.btnInfo.callBy == this && (this.btnInfo.callBy = null, this.btnInfo.changePos()), this.btnUse.callBy = null, this.btnUse.changePos()), this.zIndex = 109, ig.game.sortEntitiesDeferred()) : this.deck.popupInfo.iscalled || (this.showUse = !this.showUse, null == ig.game.cardShow ? ig.game.cardShow = this : ig.game.cardShow != this && (ig.game.cardShow._killed || ig.game.cardShow.deactiveUsed(), ig.game.cardShow = this), null != this.btnUse && (null == this.btnUse.callBy || this.btnUse.callBy !=
                this ? (this.btnUse.callBy = this, this.btnUse.changePos(), this.btnInfo.callBy = this, this.btnInfo.changePos()) : this.btnUse.callBy == this && (this.btnUse.callBy = null, this.btnUse.changePos(), this.btnInfo.callBy = null, this.btnInfo.changePos())), 367 < this.pos.y && this.deck.tween({
                pos: {
                    y: this.deck.pos.y - (this.pos.y - 330)
                }
            }, 0.15).start(), !this.showUse && ig.game.readyToChange && (ig.game.readyToChange = !1, this.deck.backDeckToPos()), this.zIndex = 109, ig.game.sortEntitiesDeferred(), ig.game.readyToChange && (ig.game.readyToChange = !1, this.deck.backDeckToPos(), this.showInfo = this.showUse = !1, this.btnUse.callBy = null, this.btnUse.changePos(), this.btnInfo.callBy = null, this.btnInfo.changePos()))
        },
        clicked: function() {},
        deactiveUsed: function() {
            this.showInfo = this.showUse = !1;
            this.zIndex = 108;
            ig.game.sortEntitiesDeferred()
        },
        changeCardHand: function() {
            ig.game.cardShow.posCard = this.posCard;
            ig.game.cardShow.tween({
                lockPos: {
                    x: this.pos.x - this.deck.pos.x,
                    y: this.pos.y - this.deck.pos.y
                }
            }, 0.15).start();
            ig.game.cardShow.usedHand = !0;
            ig.game.arrayCardInHand.splice(this.posCard,
                1, ig.game.cardShow.indexCardNumber);
            var b = this.deck.getIndexDeckRest(ig.game.cardShow);
            this.deck.deckRest.splice(b, 1, this);
            this.usedHand = !1;
            ig.game.cardShow.deactiveUsed();
            ig.game.readyToChange = !1;
            this.btnUse.callBy = null;
            this.btnUse.changePos();
            this.btnInfo.callBy = null;
            this.btnInfo.changePos();
            ig.game.io.storageSet("COV-CardSettings", ig.game.arrayCardInHand)
        },
        rearrangePos: function() {
            0 == this.posCard ? (this.pos.x = 61, this.pos.y = this.deck.pos.y + 74) : 1 == this.posCard ? (this.pos.x = 155, this.pos.y = this.deck.pos.y +
                74) : 2 == this.posCard ? (this.pos.x = 249, this.pos.y = this.deck.pos.y + 74) : 3 == this.posCard ? (this.pos.x = 344, this.pos.y = this.deck.pos.y + 74) : 4 == this.posCard ? (this.pos.x = 61, this.pos.y = this.deck.pos.y + 193) : 5 == this.posCard ? (this.pos.x = 155, this.pos.y = this.deck.pos.y + 193) : 6 == this.posCard ? (this.pos.x = 249, this.pos.y = this.deck.pos.y + 193) : 7 == this.posCard ? (this.pos.x = 344, this.pos.y = this.deck.pos.y + 193) : 8 == this.posCard ? (this.pos.x = 61, this.pos.y = this.deck.pos.y + 403) : 9 == this.posCard ? (this.pos.x = 155, this.pos.y = this.deck.pos.y +
                403) : 10 == this.posCard ? (this.pos.x = 249, this.pos.y = this.deck.pos.y + 403) : 11 == this.posCard ? (this.pos.x = 344, this.pos.y = this.deck.pos.y + 403) : 12 == this.posCard ? (this.pos.x = 61, this.pos.y = this.deck.pos.y + 556) : 13 == this.posCard ? (this.pos.x = 155, this.pos.y = this.deck.pos.y + 556) : 14 == this.posCard ? (this.pos.x = 200, this.pos.y = this.deck.pos.y + 403) : 15 == this.posCard && (this.pos.x = 1E3, this.pos.y = this.deck.pos.y + 556);
            this.lockPos.x = this.pos.x - this.deck.pos.x;
            this.lockPos.y = this.pos.y - this.deck.pos.y
        },
        drawingCard: function() {
            var b =
                ig.system.context,
                c = _CARD.frames[this.cardName].frameBig;
            ig.game.readyToChange && this.usedHand && (b.fillStyle = "#A00A2D", b.fillRect(this.pos.x - 4, this.pos.y - 3, 90, 110));
            b.save();
            ig.game.readyToChange && this.usedHand ? this.stillMinus ? (this.setAlpha -= 0.015, 0.65 > this.setAlpha && this.stillMinus && (this.stillMinus = !1)) : (this.setAlpha += 0.015, 0.99 < this.setAlpha && !this.stillMinus && (this.stillMinus = !0)) : this.setAlpha = 1;
            b.globalAlpha = this.setAlpha;
            this.cardImg.draw(this.pos.x, this.pos.y, c.x, c.y, c.w, c.h);
            b.restore()
        },
        drawingMana: function() {
            var b = ig.system.context;
            b.font = "12pt Arial";
            b.fillStyle = "#FFFFFF";
            b.fillText(_GAME.Card[this.stringManaUsage].manaUsage, this.pos.x + this.posMana.x, this.pos.y + this.posMana.y)
        },
        drawingClick: function() {
            if (this.showUse) {
                var b = ig.system.context;
                b.fillRect(this.pos.x - 8, this.pos.y - 6, 100, 206)
            } else this.showInfo && (b = ig.system.context, b.fillRect(this.pos.x - 8, this.pos.y - 6, 100, 160))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-use").requires("game.entities.buttons.button").defines(function() {
    EntityButtonUse = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(85, 41),
        zIndex: 120,
        img: new ig.Image("media/graphics/game/ui/xs-empty-btn.png", 129, 62),
        callBy: null,
        battleDeck: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            this.changePos()
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            ig.game.readyToChange = !0;
            ig.game.settingsGame.soundOn &&
                ig.soundHandler.sfxPlayer.play("clickSound");
            this.battleDeck.tweenToPos(24, 0.1);
            this.battleDeck.setDownDeck()
        },
        changePos: function() {
            null == this.callBy ? this.pos.x = 1E3 : (this.pos.x = this.callBy.pos.x, this.pos.y = this.callBy.pos.y + 154)
        },
        draw: function() {
            this.parent();
            this.img.draw(this.pos.x, this.pos.y);
            var b = ig.system.context;
            b.font = "15pt bevan";
            b.fillStyle = "#e06b04";
            var c = b.measureText(_STRINGS.Game.Use).width;
            b.fillText(_STRINGS.Game.Use, this.pos.x + this.size.x / 2 - c / 2, this.pos.y + this.size.y / 1.6)
        }
    });
    EntityButtonUseConfirm =
        EntityButton.extend({
            type: ig.Entity.TYPE.A,
            size: new Vector2(100, 48),
            zIndex: 2100,
            img: new ig.Image("media/graphics/game/ui/small-empty-btn.png"),
            followPos: null,
            isUsing: !1,
            init: function(b, c, d) {
                this.parent(b, c, d)
            },
            update: function() {
                this.parent();
                this.isUsing && (this.pos.x = this.followPos.pos.x + this.followPos.size.x / 2 - 42, this.pos.y = this.followPos.pos.y + 7 * this.followPos.size.y / 8 - 10)
            },
            clicked: function() {},
            clicking: function() {},
            released: function() {
                ig.game.readyToChange = !0;
                ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound");
                this.followPos.holderCard.btnUse.callBy = this.followPos.holderCard;
                this.followPos.battleDeck.tweenToPos(24, 0.1);
                this.followPos.battleDeck.setDownDeck();
                this.followPos.callPopup("up")
            },
            draw: function() {
                this.img.draw(this.pos.x, this.pos.y);
                var b = ig.system.context;
                b.font = "15pt bevan";
                b.fillStyle = "#e06b04";
                var c = b.measureText(_STRINGS.Game.Use).width;
                b.fillText(_STRINGS.Game.Use, this.pos.x + this.size.x / 2 - c / 2, this.pos.y + this.size.y / 1.6);
                this.parent()
            }
        })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-info").requires("game.entities.buttons.button").defines(function() {
    EntityButtonInfo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(85, 41),
        zIndex: 120,
        img: new ig.Image("media/graphics/game/ui/xs-empty-btn.png"),
        callBy: null,
        battleDeck: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {},
        update: function() {
            this.parent();
            this.changePos()
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound");
            this.battleDeck.popupInfo.callPopup("down", this.callBy);
            this.battleDeck.resetBtnInfo();
            null != ig.game.cardShow && ig.game.cardShow.deactiveUsed()
        },
        changePos: function() {
            null == this.callBy ? this.pos.x = 1E3 : (this.pos.x = this.callBy.pos.x, this.pos.y = this.callBy.pos.y + 108)
        },
        draw: function() {
            this.parent();
            this.img.draw(this.pos.x, this.pos.y);
            var b = ig.system.context;
            b.font = "15pt bevan";
            b.fillStyle = "#e06b04";
            var c = b.measureText(_STRINGS.Game.Info).width;
            b.fillText(_STRINGS.Game.Info, this.pos.x + this.size.x / 2 - c / 2,
                this.pos.y + this.size.y / 1.6)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-close").requires("game.entities.buttons.button").defines(function() {
    EntityButtonClose = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(38, 39),
        fillColor: null,
        zIndex: 2200,
        followPos: null,
        oneShot: !1,
        img: new ig.Image("media/graphics/game/ui/close-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            this.pos.x = this.followPos.pos.x + this.followPos.size.x - 32;
            this.pos.y = this.followPos.pos.y
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            this.oneShot || (ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound"), this.followPos.callPopup("up"), this.oneShot = !0)
        },
        draw: function() {
            this.img.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.popup-info").requires("impact.entity", "game.entities.buttons.button-use", "game.entities.buttons.button-close").defines(function() {
    EntityPopupInfo = ig.Entity.extend({
        img: new ig.Image("media/graphics/game/ui/popup-info.png"),
        infoBoxImg: new ig.Image("media/graphics/game/ui/info-box.png"),
        hpIconImg: new ig.Image("media/graphics/game/ui/heart-icon.png"),
        dmgIconImg: new ig.Image("media/graphics/game/ui/dmg-icon.png"),
        dpsIconImg: new ig.Image("media/graphics/game/ui/dps-icon.png"),
        durationIconImg: new ig.Image("media/graphics/game/ui/duration-spell.png"),
        durspellIconImg: new ig.Image("media/graphics/game/ui/duration.png"),
        moveIconImg: new ig.Image("media/graphics/game/ui/move-icon.png"),
        typeBoxImg: new ig.Image("media/graphics/game/ui/type-info.png"),
        zIndex: 2E3,
        size: {
            x: 427,
            y: 454
        },
        cardImg: new ig.Image(_CARD.meta.imageBig),
        numIndex: 0,
        stringDes: "",
        drawingCardInfo: !1,
        iscalled: !1,
        posMana: {
            x: 0,
            y: 0
        },
        battleDeck: null,
        nameCard: "",
        holderCard: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.btnConfirm =
                ig.game.spawnEntity(EntityButtonUseConfirm, b, c, {
                    followPos: this
                });
            this.btnClose = ig.game.spawnEntity(EntityButtonClose, b, c, {
                followPos: this
            })
        },
        update: function() {
            this.parent()
        },
        callPopup: function(b, c) {
            if ("up" == b) this.tween({
                pos: {
                    y: -600
                }
            }, 1, {
                easing: ig.Tween.Easing.Elastic.EaseInOut,
                onComplete: function() {
                    this.iscalled = this.drawingCardInfo = !1;
                    this.btnClose.oneShot = !1
                }.bind(this)
            }).start();
            else {
                this.tween({
                    pos: {
                        y: 80
                    }
                }, 0.6, {
                    easing: ig.Tween.Easing.Elastic.EaseInOut,
                    onComplete: function() {}.bind(this)
                }).start();
                this.numIndex = c.indexCardNumber;
                var d = "default";
                switch (this.numIndex) {
                    case 1:
                        d = "archer";
                        break;
                    case 2:
                        d = "ars";
                        break;
                    case 3:
                        d = "warrior";
                        break;
                    case 4:
                        d = "berserk";
                        break;
                    case 5:
                        d = "giant";
                        break;
                    case 6:
                        d = "bomb";
                        break;
                    case 7:
                        d = "fireball";
                        break;
                    case 8:
                        d = "freezer";
                        break;
                    case 9:
                        d = "axeman";
                        break;
                    case 10:
                        d = "axethrow";
                        break;
                    case 11:
                        d = "hammer";
                        break;
                    case 12:
                        d = "lightning";
                        break;
                    case 13:
                        d = "mage";
                        break;
                    default:
                        d = "tombcrush"
                }
                this.nameCard = _GAME.Card[d].name;
                this.setStringDescription();
                this.iscalled = this.drawingCardInfo = !0;
                this.btnConfirm.isUsing = c.usedHand ? !1 : !0
            }
        },
        draw: function() {
            if (this.iscalled) {
                this.drawBG();
                this.img.draw(this.pos.x, this.pos.y);
                var b = ig.system.context;
                b.save();
                b.font = "22pt troika";
                b.fillStyle = "#FFFFFF";
                b.textAlign = "center";
                b.fillText(this.nameCard, this.pos.x + this.size.x / 2, this.pos.y + 48);
                this.textWraper(b, this.stringDes, this.pos.x + 125, this.pos.y + 90);
                b.restore();
                this.drawingCardInfo && (this.drawingCard(this.numIndex), this.drawingMana(this.numIndex), this.drawingTextInfo(this.numIndex))
            }
            this.parent()
        },
        textWraper: function(b, c, d, e) {
            c = c.split(" ");
            var g = "";
            b.font = "13pt bevan";
            b.textAlign = "left";
            b.fillStyle = "#FFF";
            for (var j = 0; j < c.length; j++) {
                var t = g + c[j] + " ";
                280 < b.measureText(t).width && 0 < j ? (b.fillText(g, d, e), g = c[j] + " ", e += 25) : g = t
            }
            b.fillText(g, d, e)
        },
        drawBG: function() {
            var b = ig.system.context;
            b.save();
            b.globalAlpha = 0.6;
            b.fillStyle = "#000000";
            b.fillRect(0 - ig.game.screen.x, 0 - ig.game.screen.y, 480, 640);
            b.restore()
        },
        setStringDescription: function() {
            var b = "default";
            switch (this.numIndex) {
                case 1:
                    b = "archer";
                    break;
                case 2:
                    b = "ars";
                    break;
                case 3:
                    b = "warrior";
                    break;
                case 4:
                    b = "berserk";
                    break;
                case 5:
                    b = "giant";
                    break;
                case 6:
                    b = "bomb";
                    break;
                case 7:
                    b = "fireball";
                    break;
                case 8:
                    b = "freezer";
                    break;
                case 9:
                    b = "axeman";
                    break;
                case 10:
                    b = "axethrow";
                    break;
                case 11:
                    b = "hammer";
                    break;
                case 12:
                    b = "lightning";
                    break;
                case 13:
                    b = "mage";
                    break;
                default:
                    b = "tombcrush"
            }
            this.stringDes = _GAME.Card[b].description
        },
        drawingCard: function(b) {
            var c = ig.system.context,
                d = "default";
            switch (b) {
                case 1:
                    d = "archer";
                    break;
                case 2:
                    d = "arrow-shower";
                    break;
                case 3:
                    d = "warrior";
                    break;
                case 4:
                    d = "berserk";
                    break;
                case 5:
                    d = "giant";
                    break;
                case 6:
                    d = "bomb";
                    break;
                case 7:
                    d = "fireball";
                    break;
                case 8:
                    d = "freezer";
                    break;
                case 9:
                    d = "axeman";
                    break;
                case 10:
                    d = "axemanthrow";
                    break;
                case 11:
                    d = "hammer";
                    break;
                case 12:
                    d = "lightning";
                    break;
                case 13:
                    d = "mage";
                    break;
                default:
                    d = "tombcrush"
            }
            b = _CARD.frames[d].frameBig;
            ig.game.readyToChange && this.usedHand && (c.fillStyle = "#A00A2D", c.fillRect(this.pos.x - 4, this.pos.y - 3, 90, 110));
            this.cardImg.draw(this.pos.x + 30, this.pos.y + 73, b.x, b.y, b.w, b.h)
        },
        drawingMana: function(b) {
            var c =
                "default";
            this.posMana.x = 95;
            this.posMana.y = 168;
            switch (b) {
                case 1:
                    c = "archer";
                    this.posMana.x = 95;
                    break;
                case 2:
                    c = "ars";
                    this.posMana.x = 95;
                    break;
                case 3:
                    c = "warrior";
                    break;
                case 4:
                    c = "berserk";
                    this.posMana.x = 95;
                    break;
                case 5:
                    c = "giant";
                    break;
                case 6:
                    c = "bomb";
                    this.posMana.x = 95;
                    break;
                case 7:
                    c = "fireball";
                    this.posMana.x = 95;
                    break;
                case 8:
                    c = "freezer";
                    this.posMana.x = 95;
                    break;
                case 9:
                    c = "axeman";
                    this.posMana.x = 95;
                    break;
                case 10:
                    c = "axethrow";
                    this.posMana.x = 95;
                    break;
                case 11:
                    c = "hammer";
                    break;
                case 12:
                    c = "lightning";
                    this.posMana.x =
                        95;
                    break;
                case 13:
                    c = "mage";
                    this.posMana.x = 95;
                    break;
                default:
                    c = "tombcrush", this.posMana.x = 94
            }
            b = ig.system.context;
            b.save();
            b.font = "12pt Arial";
            b.fillStyle = "#FFFFFF";
            b.fillText(_GAME.Card[c].manaUsage, this.pos.x + this.posMana.x, this.pos.y + this.posMana.y);
            b.restore()
        },
        drawingTextInfo: function(b) {
            var c = ig.system.context;
            c.save();
            c.font = "14px bevan";
            c.textAlign = "left";
            c.fillStyle = "#FFF";
            switch (b) {
                case 1:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.archer.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.archer.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Fast, this.pos.x + 60, this.pos.y + 298);
                    break;
                case 2:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.dmgIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Spell,
                        this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.ars.damage, this.pos.x + 60, this.pos.y + 258);
                    break;
                case 3:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x +
                        15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.warrior.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.warrior.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Normal, this.pos.x +
                        60, this.pos.y + 298);
                    break;
                case 4:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.durspellIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Spell, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Duration, this.pos.x + 60, this.pos.y + 240);
                    b = _GAME.Card.berserk.timeDuration + " secs";
                    c.fillText(b, this.pos.x + 60, this.pos.y + 258);
                    break;
                case 5:
                    this.typeBoxImg.draw(this.pos.x +
                        123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y +
                        240);
                    c.fillText(_GAME.Card.giant.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.giant.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Slow, this.pos.x + 60, this.pos.y + 298);
                    break;
                case 6:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x +
                        13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.bomb.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.bomb.ATK,
                        this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Normal, this.pos.x + 60, this.pos.y + 298);
                    break;
                case 7:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.dmgIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Spell, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 60, this.pos.y +
                        240);
                    c.fillText(_GAME.Card.fireball.damage, this.pos.x + 60, this.pos.y + 258);
                    break;
                case 8:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.durspellIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Spell, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Duration, this.pos.x + 60, this.pos.y + 240);
                    b = _GAME.Card.freezer.timeDuration + " secs";
                    c.fillText(b, this.pos.x + 60,
                        this.pos.y + 258);
                    break;
                case 9:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y +
                        206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.axeman.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.axeman.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Fast, this.pos.x + 60, this.pos.y + 298);
                    break;
                case 10:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x +
                        220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.axethrow.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage,
                        this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.axethrow.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Fast, this.pos.x + 60, this.pos.y + 298);
                    break;
                case 11:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.dmgIconImg.draw(this.pos.x +
                        222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.hammer.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.hammer.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement, this.pos.x + 60, this.pos.y +
                        280);
                    c.fillText(_STRINGS.Game.Normal, this.pos.x + 60, this.pos.y + 298);
                    break;
                case 12:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.dmgIconImg.draw(this.pos.x + 15, this.pos.y + 227);
                    this.durationIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Spell, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x +
                        60, this.pos.y + 240);
                    c.fillText(_GAME.Card.lightning.damage, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.StunDuration, this.pos.x + 270, this.pos.y + 240);
                    b = _GAME.Card.lightning.stunTime + " secs";
                    c.fillText(b, this.pos.x + 270, this.pos.y + 258);
                    break;
                case 13:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225);
                    this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 265);
                    this.hpIconImg.draw(this.pos.x + 15, this.pos.y +
                        227);
                    this.dmgIconImg.draw(this.pos.x + 222, this.pos.y + 227);
                    this.moveIconImg.draw(this.pos.x + 15, this.pos.y + 267);
                    c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Troop, this.pos.x + 180, this.pos.y + 206);
                    c.fillText(_STRINGS.Game.Health, this.pos.x + 60, this.pos.y + 240);
                    c.fillText(_GAME.Card.mage.HP, this.pos.x + 60, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Damage, this.pos.x + 270, this.pos.y + 240);
                    c.fillText(_GAME.Card.mage.ATK, this.pos.x + 270, this.pos.y + 258);
                    c.fillText(_STRINGS.Game.Movement,
                        this.pos.x + 60, this.pos.y + 280);
                    c.fillText(_STRINGS.Game.Normal, this.pos.x + 60, this.pos.y + 298);
                    break;
                default:
                    this.typeBoxImg.draw(this.pos.x + 123, this.pos.y + 183), this.infoBoxImg.draw(this.pos.x + 13, this.pos.y + 225), this.infoBoxImg.draw(this.pos.x + 220, this.pos.y + 225), this.dpsIconImg.draw(this.pos.x + 15, this.pos.y + 227), this.durspellIconImg.draw(this.pos.x + 222, this.pos.y + 227), c.fillText(_STRINGS.Game.Type, this.pos.x + 130, this.pos.y + 206), c.fillText(_STRINGS.Game.Spell, this.pos.x + 180, this.pos.y + 206), c.fillText(_STRINGS.Game.DamagePerSecond,
                        this.pos.x + 60, this.pos.y + 240), c.fillText(_GAME.Card.tombcrush.DPS, this.pos.x + 60, this.pos.y + 258), c.fillText(_STRINGS.Game.Duration, this.pos.x + 270, this.pos.y + 240), b = _GAME.Card.tombcrush.timeDuration + " secs", c.fillText(b, this.pos.x + 270, this.pos.y + 258)
            }
            c.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.battle-deck").requires("impact.entity", "game.entities.card-show", "game.entities.buttons.button-use", "game.entities.buttons.button-info", "game.entities.ui.popup-info").defines(function() {
    EntityBattleDeck = ig.Entity.extend({
        zIndex: 101,
        deckImg: new ig.Image("media/graphics/game/ui/battle-deck.png"),
        readPos: {
            x: 0,
            y: 0
        },
        posBeforeChange: {
            x: 0,
            y: 0
        },
        isFirstPressed: !1,
        deckRest: [],
        size: {
            x: 425,
            y: 500
        },
        type: ig.Entity.TYPE.A,
        btnUse: null,
        btnInfo: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            for (var b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], c = ig.game.arrayCardInHand.slice(), d = 0, e = 8; 0 < b.length;) {
                for (var g = ig.game.spawnEntity(EntityCardShow, 0, 0, {
                    indexCardNumber: d,
                    posCard: -1,
                    deck: this
                }), j = 0; j < c.length; j++)
                    if (d == c[j]) {
                        g.posCard = j;
                        g.rearrangePos();
                        g.usedHand = !0;
                        break
                    } - 1 == g.posCard && (g.posCard = e, e++, g.rearrangePos(), this.deckRest.push(g));
                d++;
                b.splice(0, 1)
            }
            this.btnUse = ig.game.spawnEntity(EntityButtonUse, 1E3, 535, {
                battleDeck: this
            });
            this.btnInfo = ig.game.spawnEntity(EntityButtonInfo,
                1E3, 535, {
                    battleDeck: this
                });
            this.popupInfo = ig.game.spawnEntity(EntityPopupInfo, 26, -600, {
                battleDeck: this
            })
        },
        released: function() {
            ig.game.readyToChange && (ig.game.readyToChange = !1, this.btnUse.callBy = null, this.backDeckToPos())
        },
        update: function() {
            this.parent();
            if (!this.popupInfo.iscalled) {
                ig.input.pressed("click") && (this.readPos = ig.game.io.mouse.getPos(), this.posBeforeChange = this.pos, this.isFirstPressed = !0);
                if (ig.input.state("click") && this.isFirstPressed) {
                    var b = ig.game.io.mouse.getPos();
                    this.pos.y -= this.readPos.y -
                        b.y;
                    this.readPos = b
                }
                ig.input.released("click") && (this.isFirstPressed = !1, 24 < this.pos.y ? this.tweenToPos(24, 0.3) : -246 > this.pos.y && this.tweenToPos(-246, 0.3))
            }
        },
        tweenToPos: function(b, c) {
            this.tween({
                pos: {
                    y: b
                }
            }, c).start()
        },
        getIndexDeckRest: function(b) {
            for (var c = 0; c < this.deckRest.length; c++)
                if (this.deckRest[c] == b) return c;
            return -1
        },
        backDeckToPos: function() {
            for (var b = 0; b < this.deckRest.length; b++) {
                var c = this.deckRest[b];
                c.posCard = b + 8;
                c.rearrangePos();
                c.showUse = !1
            }
        },
        setDownDeck: function() {
            for (var b = 0; b < this.deckRest.length; b++) {
                var c =
                    this.deckRest[b];
                c.btnUse.callBy == c ? (c.posCard = 14, c.showUse = !1) : c.posCard = 15;
                c.rearrangePos()
            }
            this.btnUse.callBy = null;
            this.btnInfo.callBy = null;
            this.btnInfo.changePos();
            this.btnUse.changePos()
        },
        resetBtnInfo: function() {
            for (var b = 0; b < this.deckRest.length; b++) {
                var c = this.deckRest[b];
                c.btnInfo.callBy == c && (c.showUse = !1, this.popupInfo.holderCard = c)
            }
            this.btnUse.callBy = null;
            this.btnInfo.callBy = null;
            this.btnInfo.changePos();
            this.btnUse.changePos()
        },
        draw: function() {
            this.deckImg.draw(this.pos.x, this.pos.y);
            var b =
                ig.system.context;
            b.font = "18pt bevan";
            b.fillStyle = "#FFFFFF";
            ig.game.readyToChange ? b.fillText(_STRINGS.Game.ReplaceCard, this.pos.x + 55, this.pos.y + 380) : b.fillText(_STRINGS.Game.CardCollection, this.pos.x + 30, this.pos.y + 380);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-home").requires("game.entities.buttons.button").defines(function() {
    EntityButtonHome = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(129, 62),
        fillColor: null,
        zIndex: 1801,
        img: new ig.Image("media/graphics/game/ui/empty-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        clicked: function() {
            var b = ig.game.getEntitiesByType(EntityPopupInfo)[0];
            null != b && b.iscalled || (ig.game.readyToChange && (ig.game.readyToChange = !1), ig.game.settingsGame.soundOn &&
                ig.soundHandler.sfxPlayer.play("clickSound"), ig.game.director.loadLevel(1))
        },
        clicking: function() {},
        released: function() {},
        draw: function() {
            this.img.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context;
            b.font = "17pt bevan";
            b.fillStyle = "#e06b04";
            var c = b.measureText(_STRINGS.Game.Home).width;
            b.fillText(_STRINGS.Game.Home, this.pos.x + this.size.x / 2 - c / 2, this.pos.y + 35);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.bar-deck").requires("impact.entity").defines(function() {
    EntityBarDeck = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        size: {
            x: 480,
            y: 140
        },
        zIndex: 150,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            ig.game.sortEntitiesDeferred()
        },
        update: function() {
            this.parent()
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {},
        draw: function() {
            var b = ig.system.context;
            b.save();
            var c = b.createLinearGradient(this.pos.x, this.pos.y, this.pos.x, 640);
            c.addColorStop(0, "#2a4d6d");
            c.addColorStop(1,
                "#467699");
            b.fillStyle = c;
            b.fillRect(this.pos.x, this.pos.y, 480, 140);
            b.restore();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.deck-menu").requires("impact.image", "game.entities.deck-background", "game.entities.ui.battle-deck", "game.entities.buttons.button-battle", "game.entities.buttons.button-home", "game.entities.ui.bar-deck", "game.entities.ui.popup-tutorial").defines(function() {
    LevelDeckMenu = {
        entities: [{
            type: "EntityDeckBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityBattleDeck",
            x: 28,
            y: 24
        }, {
            type: "EntityButtonBattle",
            x: 312,
            y: 550
        }, {
            type: "EntityButtonHome",
            x: 50,
            y: 550
        }, {
            type: "EntityBarDeck",
            x: 0,
            y: 535
        }, {
            type: "EntityPopupTutorial",
            x: 82,
            y: -400
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.control-logic").requires("impact.entity").defines(function() {
    EntityControlLogic = ig.Entity.extend({
        size: {
            x: 0,
            y: 0
        },
        collides: ig.Entity.COLLIDES.NEVER,
        mana: 3,
        timeStamp: 0,
        manaRegenation: 2.5,
        cardDeck: "giant archer fireball warrior mage hammer axeman axethrow".split(" "),
        cardHand: [],
        cardThrow: [],
        towerDangerous: !1,
        haveCombo: !1,
        havedeffCard: !1,
        needBackup: [],
        disArea: 30,
        logicUpdate: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.manaTimer = new ig.Timer;
            b = Math.floor(4 * Math.random());
            0 ==
                b ? this.cardDeck = "giant archer fireball warrior mage hammer axeman axethrow".split(" ") : 1 == b ? this.cardDeck = "axeman axethrow warrior mage freezer hammer fireball archer".split(" ") : 2 == b ? this.cardDeck = "bomb fireball warrior giant axeman axethrow hammer freezer".split(" ") : 3 == b && (this.cardDeck = "axethrow ars warrior giant archer mage hammer freezer".split(" "));
            b = this.cardDeck.slice();
            for (c = []; 0 < b.length;) {
                d = Math.floor(Math.random() * b.length);
                var e = b[d];
                4 > this.cardHand.length ? this.cardHand.push(e) : c.push(e);
                b.splice(d, 1)
            }
            this.cardDeck = c;
            ig.game.settingsGame.tutorial && (this.logicUpdate = !1)
        },
        ready: function() {},
        towerNeedHelp: function(b) {
            for (var c = this.needBackup.length; 0 < c;) {
                if (this.needBackup[c] == b) return;
                c--
            }
            this.needBackup.push(b);
            this.towerDangerous = !0
        },
        update: function() {
            var b, c;
            this.parent();
            if ("play" != ig.game.gameState || !this.logicUpdate) this.manaTimer.reset();
            else {
                this.manaRegen();
                var d = this.spellCardinHand();
                if (0 < d.length)
                    for (var e = 0; e < d.length; e++)
                        if (b = d[e], "fireball" == b && this.checkManaConsumption(b) <=
                            this.mana) {
                            if (c = ig.game.getEntitiesByType(EntityBaseTroops), 1 < c.length && (c = this.troopsAdjacent(c), -1 != c.x || -1 != c.y)) this.spawning(b, c.x, c.y), this.mana -= this.checkManaConsumption(b), this.cardThrow = [], this.cardThrow.push(b), this.replaceCardInHand()
                        } else if ("ars" == b && this.checkManaConsumption(b) <= this.mana) {
                    if (c = ig.game.getEntitiesByType(EntityBaseTroops), 1 < c.length && (c = this.troopsAdjacent(c), -1 != c.x || -1 != c.y)) this.spawning(b, c.x, c.y), this.mana -= this.checkManaConsumption(b), this.cardThrow = [], this.cardThrow.push(b),
                        this.replaceCardInHand()
                } else "berserk" == b && this.checkManaConsumption(b) <= this.mana ? (c = ig.game.getEntitiesByType(EntityBaseTroops), 0 < c.length && (c = this.troopsClosedTowerEnemy(c, 2), 0 != c.x && 0 != c.y && (this.spawning(b, c.x, c.y), this.mana -= this.checkManaConsumption(b), this.cardThrow = [], this.cardThrow.push(b), this.replaceCardInHand()))) : "freezer" == b && this.checkManaConsumption(b) <= this.mana && (c = ig.game.getEntitiesByType(EntityBaseTroops), 0 < c.length && (c = this.troopsClosedTowerEnemy(c, 1), 0 != c.x && 0 != c.y && (this.spawning(b,
                    c.x, c.y), this.mana -= this.checkManaConsumption(b), this.cardThrow = [], this.cardThrow.push(b), this.replaceCardInHand()))); if (this.towerDangerous) {
                    var g = ig.game.getEntitiesByType(EntityBaseTroops);
                    b = c = null;
                    for (e = 0; e < this.needBackup.length; e++)
                        for (var j = this.needBackup[e], d = 0; d < g.length; d++) {
                            var t = g[d];
                            if (150 > j.distanceTo(t) && "red" != t.flag) {
                                c = j;
                                b = t;
                                break
                            }
                        }
                    if (null != c)
                        if (this.haveCombo && this.checkManaConsumption(this.cardThrow) <= this.mana) {
                            for (e = 0; e < this.cardThrow.length; e++) d = this.cardThrow[e], 240 > b.pos.x ?
                                this.spawning(d, c.pos.x - 30, c.pos.y) : this.spawning(d, c.pos.x + 0.5 * c.size.x, c.pos.y);
                            this.mana -= this.checkManaConsumption(this.cardThrow);
                            this.haveCombo = !1;
                            this.replaceCardInHand()
                        } else {
                            b = [];
                            for (e = 0; e < this.cardHand.length; e++) d = this.cardHand[e], !1 == _GAME.Card[d].spellcard && b.push(d);
                            e = "";
                            g = 10;
                            for (d = 0; d < b.length; d++) j = b[d], _GAME.Card[j].manaUsage < g && (e = j, g = _GAME.Card[j].manaUsage);
                            this.checkManaConsumption(e) <= this.mana ? (this.spawning(e, c.pos.x + 0.5 * c.size.x, c.pos.y - c.size.y), this.mana -= this.checkManaConsumption(this.cardThrow),
                                this.haveCombo = !1, this.cardThrow = [], this.cardThrow.push(e), this.replaceCardInHand()) : this.haveCombo || (this.haveCombo = !0, this.cardThrow.push(e))
                        } else this.needBackup = [], this.towerDangerous = !1
                } else if (this.haveCombo && this.checkManaConsumption(this.cardThrow) <= this.mana) {
                    if (0.45 < Math.random())
                        for (e = 0; e < this.cardThrow.length; e++) d = this.cardThrow[e], b = 300, c = 220, 1 == e && (b = 280, c = 140), this.spawning(d, b, c);
                    else
                        for (e = 0; e < this.cardThrow.length; e++) d = this.cardThrow[e], b = 140, c = 220, 1 == e && (b = 180, c = 140), this.spawning(d,
                            b, c);
                    this.mana -= this.checkManaConsumption(this.cardThrow);
                    this.haveCombo = !1;
                    this.replaceCardInHand()
                } else if (!this.haveCombo) {
                    b = [];
                    for (e = 0; e < this.cardHand.length; e++) d = this.cardHand[e], !1 == _GAME.Card[d].spellcard && b.push(d);
                    e = "";
                    for (d = c = 0; d < b.length; d++) g = b[d], c <= _GAME.Card[g].HP && (e = g, c = _GAME.Card[g].HP);
                    this.cardThrow.push(e);
                    e = "";
                    for (d = c = 0; d < b.length; d++) g = b[d], 0 < _GAME.Card[this.cardThrow[0]].rangeShot ? c <= _GAME.Card[g].ATK && (e = g, c = _GAME.Card[g].ATK) : (j = _GAME.Card[g].rangeShot * _GAME.Card[g].ATK /
                        _GAME.Card[g].manaUsage, j > c && (c = j, e = g));
                    this.cardThrow[0] != e && "" != e && this.cardThrow.push(e);
                    this.haveCombo = !0
                }
            }
        },
        manaRegen: function() {
            var b = this.timeStamp - this.manaTimer.delta();
            this.timeStamp = this.manaTimer.delta();
            this.mana += b / -this.manaRegenation;
            10 <= this.mana && (this.mana = 10)
        },
        checkManaConsumption: function(b) {
            var c = 0;
            if ("object" === typeof b)
                for (var d = 0; d < b.length; d++) c += _GAME.Card[b[d]].manaUsage;
            else "string" === typeof b && (c += _GAME.Card[b].manaUsage);
            return c
        },
        removeCardHand: function(b) {
            for (var c =
                0; c < this.cardHand.length; c++)
                if (this.cardHand[c] == b) {
                    this.cardHand.splice(c, 1);
                    break
                }
        },
        replaceCardInHand: function() {
            for (; 0 < this.cardThrow.length;)
                for (var b = this.cardThrow[0], c = 0; c < this.cardHand.length; c++)
                    if (b == this.cardHand[c]) {
                        b = this.cardDeck[0];
                        this.cardDeck.splice(0, 1);
                        this.cardHand.splice(c, 1, b);
                        this.cardDeck.push(this.cardThrow[0]);
                        this.cardThrow.splice(0, 1);
                        break
                    }
        },
        spellCardinHand: function() {
            for (var b = [], c = 0; c < this.cardHand.length; c++) {
                var d = this.cardHand[c];
                _GAME.Card[d].spellcard && b.push(d)
            }
            return b
        },
        troopsAdjacent: function(b) {
            for (var c = {
                x: -1,
                y: -1
            }, d = 0; d < b.length; d++) {
                var e = d + 1;
                for (e; e < b.length; e++) {
                    var g = b[d],
                        j = b[e];
                    if (g.distanceTo(j) < this.disArea && "red" != j.flag && "red" != g.flag) {
                        c = {
                            x: 0.5 * (g.pos.x + j.pos.x),
                            y: 0.5 * (g.pos.y + j.pos.y)
                        };
                        break
                    }
                }
                if (-1 != c.x || -1 != c.y) break
            }
            return c
        },
        troopsClosedTowerEnemy: function(b, c) {
            for (var d = 0, e = 0, g = 0, j = ig.game.getEntitiesByType(EntityTower), t = [], n = {
                x: 0,
                y: 0
            }, s = 0; s < j.length; s++) {
                var x = j[s];
                "blue" == x.flag && t.push(x)
            }
            for (j = 0; j < b.length; j++) {
                s = b[j];
                for (x = 0; x < t.length; x++) {
                    var r =
                        t[x];
                    if ("red" == s.flag && s.distanceTo(r) < this.disArea)
                        if (225 > s.pos.x && 425 > s.pos.y) {
                            if (d += 1, d >= c) return n.x = 148, n.y = 360, n
                        } else if (240 < s.pos.x && 425 > s.pos.y) {
                        if (e += 1, e >= c) return n.x = 332, n.y = 360, n
                    } else if (425 <= s.pos.y && (g += 1, g >= c)) return n.x = 230, n.y = 400, n
                }
            }
            return n
        },
        draw: function() {
            this.parent()
        },
        spawning: function(b, c, d) {
            switch (b) {
                case "archer":
                    ig.game.spawnEntity(EntityArcher, c, d, {
                        flag: "red"
                    });
                    break;
                case "ars":
                    ig.game.spawnEntity(EntityRainArrow, c, d, {
                        call: "red"
                    });
                    break;
                case "warrior":
                    ig.game.spawnEntity(EntityWarrior,
                        c, d, {
                            flag: "red"
                        });
                    break;
                case "berserk":
                    ig.game.spawnEntity(EntityBerserk, c, d, {
                        flag: "red"
                    });
                    break;
                case "giant":
                    ig.game.spawnEntity(EntityGiant, c, d, {
                        flag: "red"
                    });
                    break;
                case "bomb":
                    ig.game.spawnEntity(EntityBomb, c, d, {
                        flag: "red"
                    });
                    break;
                case "fireball":
                    ig.game.spawnEntity(EntityFireball, c, d, {
                        call: "red"
                    });
                    break;
                case "freezer":
                    ig.game.spawnEntity(EntityFreez, c, d, {
                        flag: "red"
                    });
                    break;
                case "axeman":
                    ig.game.spawnEntity(EntityAxeman, c, d, {
                        flag: "red"
                    });
                    break;
                case "axethrow":
                    ig.game.spawnEntity(EntityAxethrow,
                        c, d, {
                            flag: "red"
                        });
                    break;
                case "hammer":
                    ig.game.spawnEntity(EntityHammer, c, d, {
                        flag: "red"
                    });
                    break;
                case "lightning":
                    ig.game.spawnEntity(EntityLightning, c, d, {
                        target: {
                            x: c - 32,
                            y: -40
                        },
                        call: "red"
                    });
                    break;
                case "mage":
                    ig.game.spawnEntity(EntityMage, c, d, {
                        flag: "red"
                    });
                    break;
                case "tombscrush":
                    ig.game.spawnEntity(EntityHammerCrush, c, d, {
                        call: "red"
                    })
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-background").requires("impact.entity").defines(function() {
    EntityGameBackground = ig.Entity.extend({
        zIndex: 1,
        bgImage: new ig.Image("media/graphics/game/game-bg.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            null != ig.game.pointer && ig.game.pointer.kill();
            ig.soundHandler.sfxPlayer.play("battleSound");
            ig.game.pointer = ig.game.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.bgmPlayer.volume(0.6)
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            this.bgImage.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tower").requires("impact.entity").defines(function() {
    EntityTower = ig.Entity.extend({
        size: {
            x: 30,
            y: 30
        },
        zIndex: 20,
        crash: !1,
        targetEnemy: 0,
        flag: "",
        type: ig.Entity.TYPE.A,
        canShoot: !1,
        bullet: null,
        rangeShot: 110,
        colorStyle: "#00ff00",
        colorSight: !1,
        target: null,
        damageShot: 0,
        offsetShot: {
            x: 0,
            y: 0
        },
        health: 0,
        offsetHPbar: {
            x: 0,
            y: 0
        },
        freezActive: !1,
        stunActive: !1,
        bgHPbar: new ig.Image("media/graphics/game/bg-hp-bar.png"),
        blueHPbar: new ig.Image("media/graphics/game/blue-bar-e.png"),
        redHPbar: new ig.Image("media/graphics/game/red-bar-e.png"),
        cekLogic: null,
        checkScoreOneShot: !1,
        swingsound: "",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.delayShot = new ig.Timer(0);
            this.freezTime = new ig.Timer(0);
            this.stunTime = new ig.Timer(0);
            this.fullHealth = this.health;
            this.zIndex = this.pos.y + this.size.y + 1E3;
            this.initialize()
        },
        ready: function() {
            this.checkScoreOneShot || (this.checkScoreOneShot = !0, this.score = ig.game.getEntitiesByType(EntityScore)[0], this.cekLogic = ig.game.getEntitiesByType(EntityControlLogic)[0])
        },
        update: function() {
            this.parent();
            if ("play" == ig.game.gameState) {
                if (null ==
                    this.target)
                    for (var b = ig.game.getEntitiesByType(EntityBaseTroops), c = 0; c < b.length; c++) {
                        var d = b[c],
                            e = 0.25 * (d.size.x + d.size.y),
                            e = this.rangeShot + e;
                        if (this.distanceTo(d) <= e && d.flag != this.flag) {
                            this.target = d;
                            break
                        }
                    }!this.checkEffect() && null != this.target && (e = 0.25 * (this.target.size.x + this.target.size.y), e = this.rangeShot + e, this.target._killed || this.distanceTo(this.target) > e ? this.target = null : (b = this.angleTo(this.target) * (180 / Math.PI), 0 < b && 60 > b ? this.targetEnemy = 2 : 60 < b && 120 > b ? this.targetEnemy = 1 : 120 < b && 180 > b ?
                        this.targetEnemy = 0 : 0 > b && -60 < b ? this.targetEnemy = 5 : -60 > b && -120 < b ? this.targetEnemy = 4 : -120 > b && -180 < b && (this.targetEnemy = 3), null != this.bullet && 0 <= this.delayShot.delta() && (this.shootingBullet(), ig.soundHandler.sfxPlayer.play(this.swingsound), this.delayShot.set(0.6))))
            }
        },
        shootingBullet: function() {},
        draw: function() {
            this.parent();
            this.colorSight && this.drawSight();
            this.drawHealthBar()
        },
        drawSight: function() {
            var b = ig.system.context,
                c = this.pos.x + this.size.x / 2,
                d = this.pos.y + this.size.y / 2;
            0 < this.rangeShot && (b.beginPath(),
                b.strokeStyle = this.colorStyle, b.arc(c, d, this.rangeShot, 0, 2 * Math.PI), b.closePath(), b.stroke())
        },
        drawHealthBar: function() {
            this.bgHPbar.draw(this.pos.x - this.offsetHPbar.x - ig.game.screen.x, this.pos.y - this.offsetHPbar.y - ig.game.screen.y);
            var b = 37 * (this.health / this.fullHealth);
            "blue" == this.flag ? this.blueHPbar.draw(this.pos.x - this.offsetHPbar.x + 1 - ig.game.screen.x, this.pos.y - this.offsetHPbar.y + 2 - ig.game.screen.y, 0, 0, b, 4) : this.redHPbar.draw(this.pos.x - this.offsetHPbar.x + 1 - ig.game.screen.x, this.pos.y - this.offsetHPbar.y +
                2 - ig.game.screen.y, 0, 0, b, 4)
        },
        initialize: function() {},
        checkEffect: function() {
            if (this.stunActive || this.freezActive) return 0 < this.stunTime.delta() && (this.stunActive = !1), 0 < this.freezTime.delta() && (this.freezActive = !1), !0
        },
        setPoison: function() {
            this.health -= _GAME.Card.tombcrush.DPS / 60;
            0 >= this.health && this.kill()
        },
        setFreez: function() {
            this.freezActive = !0;
            this.freezTime.set(3)
        },
        setStun: function() {
            this.stunActive = !0;
            this.stunTime.set(0.4)
        },
        getDamage: function(b) {
            this.health -= b;
            "red" == this.flag && this.cekLogic.towerNeedHelp(this);
            0 >= this.health && this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bullets.base-bullets").requires("impact.entity").defines(function() {
    EntityBaseBullets = ig.Entity.extend({
        zIndex: 20,
        speedMovement: 200,
        maxVel: {
            x: 300,
            y: 300
        },
        targeting: null,
        checkAgainst: ig.Entity.TYPE.A,
        flag: "red",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            if (null != this.targeting) {
                var b = this.angleTo(this.targeting);
                this.vel.x = Math.cos(b) * this.speedMovement;
                this.vel.y = Math.sin(b) * this.speedMovement;
                this.targeting._killed && (this.targeting = null)
            } else this.kill()
        },
        check: function(b) {
            this.flag != b.flag && b == this.targeting && (this.kill(), this.doAction(b))
        },
        draw: function() {
            this.parent()
        },
        doAction: function(b) {
            "function" == typeof b.getDamage && b.getDamage(this.damage)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bullets.bullet-arrow").requires("game.entities.bullets.base-bullets").defines(function() {
    EntityBulletArrow = EntityBaseBullets.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/bullet-rest.png", 12, 26),
        size: {
            x: 5,
            y: 5
        },
        offset: {
            x: 4,
            y: 6
        },
        zIndex: 1800,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [1]);
            b = this.angleTo(this.targeting);
            this.currentAnim = this.anims.idle;
            this.currentAnim.angle = b + 1.57
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        doAction: function(b) {
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tower-ruins").requires("impact.entity").defines(function() {
    EntityTowerRuins = ig.Entity.extend({
        img: new ig.Image("media/graphics/game/tower-ruins.png"),
        offset: {
            x: 7,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent();
            this.img.draw(this.pos.x - this.offset.x, this.pos.y - this.offset.y)
        }
    });
    EntityBigTowerRuins = ig.Entity.extend({
        img: new ig.Image("media/graphics/game/towerb-ruins.png"),
        offset: {
            x: 7,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent();
            this.img.draw(this.pos.x - this.offset.x, this.pos.y - this.offset.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tower-small").requires("game.entities.tower", "game.entities.bullets.bullet-arrow", "game.entities.tower-ruins").defines(function() {
    EntityTowerSmall = EntityTower.extend({
        size: {
            x: 30,
            y: 30
        },
        towerImg: new ig.Image("media/graphics/game/tower.png"),
        balistaImg: new ig.Image("media/graphics/game/balista.png"),
        colorStyle: "##ff00a7",
        bullet: EntityBulletArrow,
        damageShot: 60,
        offsetShot: {
            x: 14,
            y: -25
        },
        health: 2100,
        offsetHPbar: {
            x: 5,
            y: 0
        },
        swingsound: "woshArrowSound",
        init: function(b, c, d) {
            this.parent(b,
                c, d)
        },
        initialize: function() {
            "red" == this.flag ? (this.offsetHPbar.y = 38, 240 > this.pos.x ? ig.game.tsLeft = this : ig.game.tsRight = this) : this.offsetHPbar.y = 6
        },
        shootingBullet: function() {
            ig.game.spawnEntity(this.bullet, this.pos.x + this.offsetShot.x, this.pos.y + this.offsetShot.y, {
                targeting: this.target,
                flag: this.flag,
                damage: this.damageShot
            })
        },
        ready: function() {
            this.parent()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.crash || (this.towerImg.draw(this.pos.x - 10 - ig.game.screen.x, this.pos.y - 30 - ig.game.screen.y),
                0 == this.targetEnemy ? this.balistaImg.draw(this.pos.x - 3 - ig.game.screen.x, this.pos.y - 30 - ig.game.screen.y, 0, 0, 35, 29) : 1 == this.targetEnemy ? this.balistaImg.draw(this.pos.x - 3 - ig.game.screen.x, this.pos.y - 30 - ig.game.screen.y, 35, 0, 35, 29) : 2 == this.targetEnemy ? this.balistaImg.draw(this.pos.x - 3 - ig.game.screen.x, this.pos.y - 30 - ig.game.screen.y, 70, 0, 35, 29) : 3 == this.targetEnemy ? this.balistaImg.draw(this.pos.x - 3 - ig.game.screen.x, this.pos.y - 37 - ig.game.screen.y, 0, 29, 35, 29) : 4 == this.targetEnemy ? this.balistaImg.draw(this.pos.x -
                    3 - ig.game.screen.x, this.pos.y - 37 - ig.game.screen.y, 35, 29, 35, 29) : this.balistaImg.draw(this.pos.x - 3 - ig.game.screen.x, this.pos.y - 37 - ig.game.screen.y, 70, 29, 35, 29));
            this.parent()
        },
        kill: function() {
            "red" == this.flag ? (ig.game.tsLeft == this ? ig.game.tsLeft = null : ig.game.tsRight = null, "end" != ig.game.gameState && this.score.intScoreBlue++, ig.game.settingsGame.tutorial && null == ig.game.tsRight && null == ig.game.tsLeft && (ig.game.getEntitiesByType(EntityControlLogic)[0].logicUpdate = !0)) : "end" != ig.game.gameState && this.score.intScoreRed++;
            var b = ig.game.getEntitiesByType(EntityTimeGame)[0];
            null != b && b.checkAdditionalTimer();
            ig.game.spawnEntity(EntityTowerRuins, this.pos.x, this.pos.y, {
                zIndex: this.zIndex - 30
            });
            ig.game.spawnEntity(EntityTExplode, this.pos.x - this.size.x + 10, this.pos.y - this.size.y, {
                zIndex: this.zIndex + 10
            });
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bullets.bullet-tower").requires("game.entities.bullets.base-bullets").defines(function() {
    EntityBulletTower = EntityBaseBullets.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/bullet-rest.png", 12, 26),
        zIndex: 1800,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        doAction: function(b) {
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tower-big").requires("game.entities.tower", "game.entities.bullets.bullet-tower", "game.entities.tower-ruins").defines(function() {
    EntityTowerBig = EntityTower.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/red-anim-tower.png", 109, 98),
        otherAnim: new ig.AnimationSheet("media/graphics/game/blue-anim-tower.png", 109, 102),
        size: {
            x: 46,
            y: 62
        },
        flag: "blue",
        colorStyle: "#6666ff",
        health: 3500,
        offsetHPbar: {
            x: -3,
            y: 0
        },
        offsetShot: {
            x: 20,
            y: 10
        },
        bullet: EntityBulletTower,
        damageShot: 60,
        swingsound: "woshFireSound",
        checkingHealth: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        initialize: function() {
            "red" == this.flag ? (this.offset.x = 34, this.offset.y = 36, this.addAnim("midle", 0.1, [0]), this.addAnim("ridle", 0.1, [6]), this.addAnim("lidle", 0.1, [12]), this.addAnim("mshoot", 0.1, [0, 1, 2, 3, 4, 5]), this.addAnim("rshoot", 0.1, [6, 7, 8, 9, 10, 11]), this.addAnim("lshoot", 0.1, [12, 13, 14, 15, 16, 17]), this.offsetHPbar.y = 40) : (this.animSheet = this.otherAnim, this.offset.x = 30, this.offset.y = 40, this.addAnim("midle", 0.1, [0]), this.addAnim("ridle", 0.1, [6]),
                this.addAnim("lidle", 0.1, [12]), this.addAnim("mshoot", 0.1, [0, 1, 2, 3, 4, 5]), this.addAnim("rshoot", 0.1, [6, 7, 8, 9, 10, 11]), this.addAnim("lshoot", 0.1, [12, 13, 14, 15, 16, 17]), this.offsetHPbar.y = -20);
            this.currentAnim = this.anims.midle
        },
        shootingBullet: function() {
            0 == this.targetEnemy ? ig.game.spawnEntity(this.bullet, this.pos.x, this.pos.y + 10, {
                targeting: this.target,
                flag: this.flag,
                damage: this.damageShot
            }) : 1 == this.targetEnemy ? ig.game.spawnEntity(this.bullet, this.pos.x + 17, this.pos.y + 20, {
                targeting: this.target,
                flag: this.flag,
                damage: this.damageShot
            }) : 2 == this.targetEnemy ? ig.game.spawnEntity(this.bullet, this.pos.x + 40, this.pos.y + 10, {
                targeting: this.target,
                flag: this.flag,
                damage: this.damageShot
            }) : 3 == this.targetEnemy ? ig.game.spawnEntity(this.bullet, this.pos.x - 10, this.pos.y - 30, {
                targeting: this.target,
                flag: this.flag,
                damage: this.damageShot
            }) : 4 == this.targetEnemy ? ig.game.spawnEntity(this.bullet, this.pos.x + 17, this.pos.y - 50, {
                targeting: this.target,
                flag: this.flag,
                damage: this.damageShot
            }) : 5 == this.targetEnemy && ig.game.spawnEntity(this.bullet,
                this.pos.x + 45, this.pos.y - 30, {
                    targeting: this.target,
                    flag: this.flag,
                    damage: this.damageShot
                })
        },
        update: function() {
            this.parent();
            null != this.target ? 0 == this.targetEnemy ? this.currentAnim = this.anims.rshoot : 1 == this.targetEnemy ? this.currentAnim = this.anims.mshoot : 2 == this.targetEnemy ? this.currentAnim = this.anims.lshoot : 3 == this.targetEnemy ? this.currentAnim = this.anims.lshoot : 4 == this.targetEnemy ? this.currentAnim = this.anims.mshoot : 5 == this.targetEnemy && (this.currentAnim = this.anims.rshoot) : this.currentAnim = this.anims.midle;
            if (1800 > this.health && ig.game.settingsGame.tutorial && !this.checkingHealth) {
                var b = ig.game.getEntitiesByType(EntityControlLogic)[0];
                b.logicUpdate || (this.checkingHealth = !0, b.logicUpdate = !0)
            }
        },
        setMiddleAnims: function() {
            this.currentAnim = this.anims.midle;
            this.target = null
        },
        kill: function() {
            this.parent();
            for (var b = ig.game.getEntitiesByType(EntityTowerSmall), c = 0; c < b.length; c++) {
                var d = b[c];
                d.flag == this.flag && d.getDamage(1E4)
            }
            "red" == this.flag ? this.score.intScoreBlue++ : this.score.intScoreRed++;
            ig.game.endPopup.showResult();
            ig.game.spawnEntity(EntityTExplode, this.pos.x - 9, this.pos.y, {
                zIndex: this.zIndex + 10
            });
            ig.game.spawnEntity(EntityBigTowerRuins, this.pos.x, this.pos.y + 15, {
                zIndex: this.zIndex
            })
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.splash-area").requires("impact.entity").defines(function() {
    EntitySplashArea = ig.Entity.extend({
        zIndex: 10,
        size: {
            x: 20,
            y: 20
        },
        offset: {
            x: 0,
            y: 0
        },
        checkAgainst: ig.Entity.TYPE.A,
        entityDamage: [],
        checkEffect: [],
        timeLimitDuration: 0.1,
        typeEffect: 1,
        flag: "",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.timer = new ig.Timer
        },
        update: function() {
            this.parent();
            if (0 < this.entityDamage.length) {
                for (var b = 0; b < this.entityDamage.length; b++)
                    if (0 == this.checkEffect.length) {
                        var c = this.entityDamage[b];
                        this.checkEffect.push(c);
                        this.splashEffect(c)
                    } else {
                        for (var c = !0, d = 0; d < this.checkEffect.length; d++)
                            if (this.checkEffect[d] == this.entityDamage[b]) {
                                c = !1;
                                break
                            }
                        c && (c = this.entityDamage[b], this.checkEffect.push(c), this.splashEffect(c))
                    }
                this.entityDamage = []
            }
        },
        splashEffect: function() {},
        check: function(b) {
            this.timer.delta() < this.timeLimitDuration && this.entityDamage.push(b)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.explode").requires("game.entities.effects.splash-area").defines(function() {
    EntityExplode = EntitySplashArea.extend({
        zIndex: 1800,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/explode.png", 45, 45),
        offset: {
            x: 5,
            y: 5
        },
        size: {
            x: 35,
            y: 35
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("explode", 0.05, [0, 1, 2, 3, 4, 5, 6, 7]);
            this.currentAnim = this.anims.explode;
            ig.soundHandler.sfxPlayer.play("fireblastSound")
        },
        update: function() {
            this.parent();
            this.currentAnim.frame ==
                this.currentAnim.sequence.length - 1 && this.kill()
        },
        splashEffect: function(b) {
            "function" == typeof b.getDamage ? this.flag != b.flag && b.getDamage(this.damage) : console.log("damage")
        },
        draw: function() {
            this.parent()
        }
    });
    EntityBigExplode = EntitySplashArea.extend({
        zIndex: 1800,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/big-explode.png", 110, 110),
        offset: {
            x: 22,
            y: 12
        },
        size: {
            x: 80,
            y: 80
        },
        damage: 0,
        sixTimeShake: 4,
        backPos: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("explode", 0.05, [0, 1, 2, 3, 4, 5, 6, 7,
                8, 9
            ]);
            this.currentAnim = this.anims.explode;
            ig.soundHandler.sfxPlayer.play("fireblastSound")
        },
        update: function() {
            this.parent();
            this.shakeScreen();
            this.currentAnim.frame == this.currentAnim.sequence.length - 1 && this.kill()
        },
        shakeScreen: function() {
            if (0 < this.sixTimeShake) {
                var b = Math.floor(6 * Math.random() - 3),
                    c = Math.floor(6 * Math.random() - 3);
                ig.game.screen.x += b;
                ig.game.screen.y += c;
                this.sixTimeShake--
            } else this.backPos || (ig.game.screen.x = 0, ig.game.screen.y = 0, this.backPos = !0)
        },
        splashEffect: function(b) {
            "function" ==
            typeof b.getDamage && this.flag != b.flag && b.getDamage(this.damage)
        },
        draw: function() {
            this.parent()
        },
        kill: function() {
            this.parent()
        }
    });
    EntityTExplode = ig.Entity.extend({
        zIndex: 1800,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/t-explode.png", 70, 70),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("explode", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            this.currentAnim = this.anims.explode;
            ig.soundHandler.sfxPlayer.play("fireblastSound")
        },
        update: function() {
            this.parent();
            this.currentAnim.frame == this.currentAnim.sequence.length -
                1 && this.kill()
        },
        shakeScreen: function() {
            if (0 < this.sixTimeShake) {
                var b = Math.floor(6 * Math.random() - 3),
                    c = Math.floor(6 * Math.random() - 3);
                ig.game.screen.x += b;
                ig.game.screen.y += c;
                this.sixTimeShake--
            } else this.backPos || (ig.game.screen.x = 0, ig.game.screen.y = 0, this.backPos = !0)
        },
        draw: function() {
            this.parent()
        },
        kill: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.fireball").requires("impact.entity").defines(function() {
    EntityFireball = ig.Entity.extend({
        zIndex: 1800,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/fireball.png", 50, 90),
        size: {
            x: 20,
            y: 25
        },
        offset: {
            x: 4,
            y: 8
        },
        speed: 300,
        timeScaling: 0,
        scalingSize: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("fire", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]);
            this.currentAnim = this.anims.fire;
            ig.soundHandler.sfxPlayer.play("woshFireSound");
            "blue" == this.call ? (this.pos.x = b, this.pos.y =
                560) : (this.pos.x = b, this.pos.y = -10);
            d = 90 * (Math.PI / 180);
            var e = _GAME.Card.fireball.damage;
            this.currentAnim.angle = Math.atan2(c - this.pos.y + this.size.y / 2, b - this.pos.x + this.size.x / 2) + d + -0.2;
            d = this.pos.x - b;
            var g = this.pos.y - c;
            d = Math.sqrt(d * d + g * g) / this.speed;
            this.tween({
                pos: {
                    x: b - 26,
                    y: c - 22
                }
            }, d, {
                onComplete: function() {
                    this.kill();
                    ig.game.spawnEntity(EntityBigExplode, this.pos.x - 9, this.pos.y, {
                        damage: e,
                        flag: this.call
                    })
                }.bind(this)
            }).start();
            this.timeScaling = d / 1.5;
            this.newTime = new ig.Timer
        },
        update: function() {
            this.parent();
            this.scalingSize = this.newTime.delta() < this.timeScaling ? this.scalingSize + 0.01 : this.scalingSize - 0.01;
            this.setScale(this.scalingSize, this.scalingSize)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.lightning").requires("game.entities.effects.splash-area").defines(function() {
    EntityLightning = EntitySplashArea.extend({
        zIndex: 10,
        size: {
            x: 70,
            y: 55
        },
        offset: {
            x: 7,
            y: 0
        },
        segments: 10,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/smoke-s.png", 84, 55),
        stunTiming: 0.1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("smoke", 0.06, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            this.pos.x = b - 32;
            this.pos.y = c - 30;
            this.currentAnim = this.anims.smoke;
            b = this.target.x - b;
            c -= 10;
            this.distance = Math.sqrt(b *
                b + c * c);
            this.widthLine = this.distance / this.segments;
            this.stunTiming = _GAME.Card.lightning.stunTime;
            this.damage = _GAME.Card.lightning.damage;
            ig.soundHandler.sfxPlayer.play("thunderSound")
        },
        update: function() {
            this.parent();
            2 < this.currentAnim.frame && 6 > this.currentAnim.frame && (this.drawLightning = !0);
            this.currentAnim.frame == this.currentAnim.sequence.length - 1 && this.kill()
        },
        splashEffect: function(b) {
            "function" == typeof b.getDamage && b.flag != this.flag && (b.getDamage(this.damage), b.setStun(this.stunTime))
        },
        draw: function() {
            if (this.drawLightning)
                for (var b =
                    ig.system.context, c = this.pos.x + 32, d = this.pos.y + 30, e = 0; e <= this.segments; e++) {
                    var g = this.widthLine * e / this.distance,
                        j = g * this.target.x + (1 - g) * this.pos.x + 32,
                        g = g * this.target.y + (1 - g) * this.pos.y + 30;
                    0 !== e && e !== this.segments && (j += Math.random() * this.widthLine - this.widthLine / 2, g += Math.random() * this.widthLine - this.widthLine / 2);
                    b.strokeStyle = "#557788";
                    b.lineWidth = 4;
                    b.beginPath();
                    b.moveTo(c, d);
                    b.lineTo(j, g);
                    b.closePath();
                    b.stroke();
                    b.strokeStyle = "#557888";
                    b.fillStyle = "#557888";
                    b.beginPath();
                    b.arc(j, g, 3, 0, 2 * Math.PI, !1);
                    b.fill();
                    b.strokeStyle = "#cfefff";
                    b.fillStyle = "#cfefff";
                    b.beginPath();
                    b.arc(j, g, 2, 0, 2 * Math.PI, !1);
                    b.fill();
                    b.strokeStyle = "#cfefff";
                    b.lineWidth = 2;
                    b.beginPath();
                    b.moveTo(c, d);
                    b.lineTo(j, g);
                    b.closePath();
                    b.stroke();
                    c = j;
                    d = g
                }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.arrow-shower").requires("impact.entity", "game.entities.effects.splash-area").defines(function() {
    EntityArrowShower = EntitySplashArea.extend({
        zIndex: 10,
        size: {
            x: 115,
            y: 95
        },
        offset: {
            x: 0,
            y: 20
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/arrow-shower-s.png", 115, 115),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shake", 0.1, [0, 1, 2, 3, 0, 1, 2, 3]);
            this.currentAnim = this.anims.shake
        },
        update: function() {
            this.parent();
            this.currentAnim.frame == this.currentAnim.sequence.length -
                1 && this.kill()
        },
        splashEffect: function(b) {
            "function" == typeof b.getDamage ? this.flag != b.flag && b.getDamage(this.damage) : console.log("damage")
        },
        draw: function() {
            this.parent()
        }
    });
    EntityRainArrow = ig.Entity.extend({
        zIndex: 1800,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/arrow-rain-s.png", 90, 108),
        ang: 0,
        offset: {
            x: 45,
            y: 54
        },
        speed: 300,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            ig.soundHandler.sfxPlayer.play("woshArrowSound");
            "blue" == this.call ?
                (this.pos.x = b, this.pos.y = 560) : (this.pos.x = b, this.pos.y = -10);
            d = 90 * (Math.PI / 180);
            this.currentAnim.angle = Math.atan2(c - this.pos.y + this.size.y / 2, b - this.pos.x + this.size.x / 2) + d;
            d = this.pos.x - b;
            var e = this.pos.y - c;
            d = Math.sqrt(d * d + e * e) / this.speed;
            this.tween({
                pos: {
                    x: b - 12,
                    y: c - 6
                }
            }, d, {
                onComplete: function() {
                    this.kill();
                    ig.game.spawnEntity(EntityArrowShower, this.pos.x - 47, this.pos.y - 30, {
                        damage: _GAME.Card.ars.damage
                    })
                }.bind(this)
            }).start()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.freez").requires("game.entities.effects.splash-area").defines(function() {
    EntityFreez = EntitySplashArea.extend({
        zIndex: 10,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/freez.png", 116, 96),
        size: {
            x: 90,
            y: 78
        },
        offset: {
            x: 14,
            y: 10
        },
        timeDuration: 3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("freez", 0.07, [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
            this.currentAnim = this.anims.freez;
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c - this.size.y / 2;
            ig.soundHandler.sfxPlayer.play("freezSound");
            this.timeDuration = _GAME.Card.freezer.timeDuration
        },
        update: function() {
            this.parent();
            this.timer.delta() > this.timeDuration && this.kill()
        },
        splashEffect: function(b) {
            "function" == typeof b.setFreez && this.flag != b.flag && b.setFreez(this.timeDuration)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.hammer-crush").requires("game.entities.effects.splash-area").defines(function() {
    EntityHammerCrush = EntitySplashArea.extend({
        zIndex: 10,
        animSheet: new ig.AnimationSheet("media/graphics/game/effects/hammer-crush-s.png", 80, 80),
        size: {
            x: 75,
            y: 75
        },
        offset: {
            x: 5,
            y: 5
        },
        timeDuration: 3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("crush", 0.07, [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9]);
            this.currentAnim = this.anims.crush;
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c - this.size.y / 2;
            this.timeDuration = _GAME.Card.tombcrush.timeDuration;
            ig.soundHandler.sfxPlayer.play("hammerEarthSound")
        },
        update: function() {
            this.parent();
            this.timer.delta() > this.timeDuration && this.kill()
        },
        check: function(b) {
            "function" == typeof b.setPoison && b.flag != this.flag && b.setPoison()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.berserk").requires("game.entities.effects.splash-area").defines(function() {
    EntityBerserk = EntitySplashArea.extend({
        zIndex: 10,
        size: {
            x: 120,
            y: 95
        },
        berserkIMG: new ig.Image("media/graphics/game/effects/berserk-s.png"),
        timeDuration: 4,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c - this.size.y / 2;
            ig.soundHandler.sfxPlayer.play("berserkSound")
        },
        update: function() {
            this.parent();
            this.timer.delta() > this.timeDuration && this.kill()
        },
        check: function(b) {
            "function" ==
            typeof b.setBerserk && b.flag == this.flag && b.setBerserk()
        },
        draw: function() {
            this.berserkIMG.draw(this.pos.x - 4 - ig.game.screen.x, this.pos.y - 3 - ig.game.screen.y);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bullets.bullet-mage").requires("game.entities.bullets.base-bullets").defines(function() {
    EntityBulletMage = EntityBaseBullets.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/bullet-rest.png", 12, 26),
        zIndex: 1800,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [2]);
            this.currentAnim = this.anims.idle
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        doAction: function(b) {
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bullets.bullet-axe").requires("game.entities.bullets.base-bullets").defines(function() {
    EntityBulletAxe = EntityBaseBullets.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/bullet-axe.png", 20, 20),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("rotate", 0.05, [0, 1, 2, 3, 4, 5, 6, 7]);
            this.currentAnim = this.anims.rotate
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        doAction: function(b) {
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bullets.bullet-bomb").requires("game.entities.bullets.base-bullets").defines(function() {
    EntityBulletBomb = EntityBaseBullets.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/bullet-bomb.png", 20, 20),
        speedMovement: 125,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("rotate", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            this.currentAnim = this.anims.rotate
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        doAction: function() {
            ig.game.spawnEntity(EntityExplode,
                this.pos.x - 9, this.pos.y, {
                    damage: this.damage,
                    flag: this.flag
                })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.board-deck").requires("impact.entity").defines(function() {
    EntityBoardDeck = ig.Entity.extend({
        zIndex: 101,
        deckImg: new ig.Image("media/graphics/game/ui/board-deck.png"),
        nextCard: [],
        addingNextCard: new ig.Timer,
        justCallOne: !1,
        manabar: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!this.justCallOne) {
                var b = ig.game.arrayCardInHand.slice(),
                    c = 0;
                for (this.manabar = ig.game.getEntitiesByType(EntityManaBar)[0]; 0 < b.length;) {
                    var d = Math.floor(Math.random() * b.length),
                        e = b[d];
                    ig.game.settingsGame.tutorial && (e = 0 == c ? 11 : 1 == c ? 1 : 2 == c ? 3 : 10);
                    4 > c ? (ig.game.spawnEntity(EntityCard, 108, 532, {
                        indexCardNumber: e,
                        cardPos: c,
                        deck: this,
                        manabar: this.manabar
                    }), c++) : (ig.game.settingsGame.tutorial && (e = 4 == b.length ? 5 : 3 == b.length ? 7 : 2 == b.length ? 9 : 2), this.nextCard.push(e));
                    b.splice(d, 1)
                }
                this.justCallOne = !0
            }
        },
        update: function() {},
        callNextCard: function(b, c) {
            var d = this.nextCard[0];
            this.nextCard.push(c);
            this.nextCard.splice(0, 1);
            ig.game.spawnEntity(EntityCard, 108, 532, {
                indexCardNumber: d,
                cardPos: b,
                deck: this,
                manabar: this.manabar
            })
        },
        draw: function() {
            this.parent();
            this.deckImg.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.mana-bar").requires("impact.entity").defines(function() {
    EntityManaBar = ig.Entity.extend({
        zIndex: 102,
        manabarImg: new ig.Image("media/graphics/game/ui/mana-bar.png"),
        manaImg: new ig.Image("media/graphics/game/ui/mana.png"),
        mana: 3,
        timeStamp: 0,
        manaRegen: 2.5,
        manaPosx: 3.5,
        pauseCheck: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.manaTimer = new ig.Timer;
            ig.game.settingsGame.tutorial && (this.mana = 5)
        },
        update: function() {
            this.parent();
            if ("play" != ig.game.gameState) this.pauseCheck || (this.manaTimer.pause(),
                this.pauseCheck = !0);
            else {
                this.pauseCheck && (this.pauseCheck = !1, this.manaTimer.unpause());
                var b = this.timeStamp - this.manaTimer.delta();
                this.timeStamp = this.manaTimer.delta();
                this.mana += b / -this.manaRegen;
                10 <= this.mana && (this.mana = 10)
            }
        },
        useMana: function(b) {
            this.mana > b && (this.mana -= b)
        },
        draw: function() {
            this.parent();
            var b = 268 * (this.mana / 10);
            0 == b && (b = 1);
            this.manaImg.draw(this.pos.x + 7 - ig.game.screen.x, this.pos.y + 3 - ig.game.screen.y, 0, 0, b, 13);
            this.manabarImg.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context,
                c = Math.floor(this.mana);
            b.save();
            b.font = "10pt Arial";
            b.fillStyle = "#FFFFFF";
            this.manaPosx = 3.5;
            10 == c && (b.font = "8pt Arial", this.manaPosx = 0.8);
            b.fillText(c, this.pos.x + this.manaPosx - ig.game.screen.x, this.pos.y + 14.5 - ig.game.screen.y);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card").requires("impact.entity", "game.entities.pointer").defines(function() {
    EntityCard = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        size: {
            x: 64,
            y: 79
        },
        zIndex: 103,
        cardImg: new ig.Image(_CARD.meta.image),
        tropCardImg: new ig.Image(_TROOPS_CARD.meta.image),
        cardImgBW: new ig.Image(_CARD.meta.imagebw),
        indexCardNumber: 0,
        cardPos: 0,
        drawingSize: 1,
        drawPos: {
            x: 0,
            y: 0
        },
        possibleDrawRight: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        possibleDrawLeft: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        deck: null,
        spellCard: !0,
        manabar: null,
        nameCard: "",
        manausage: 0,
        btp: !1,
        oneShotCheckManaBar: !1,
        init: function(b, c, d) {
            this.parent(b, c, d); - 1 == this.indexCardNumber && (this.indexCardNumber = Math.floor(14 * Math.random()));
            this.backToPos();
            this.nameCard = 1 == this.indexCardNumber ? "archer" : 2 == this.indexCardNumber ? "ars" : 3 == this.indexCardNumber ? "warrior" : 4 == this.indexCardNumber ? "berserk" : 5 == this.indexCardNumber ? "giant" : 6 == this.indexCardNumber ? "bomb" : 7 == this.indexCardNumber ? "fireball" : 8 == this.indexCardNumber ? "freezer" : 9 == this.indexCardNumber ? "axeman" : 10 == this.indexCardNumber ?
                "axethrow" : 11 == this.indexCardNumber ? "hammer" : 12 == this.indexCardNumber ? "lightning" : 13 == this.indexCardNumber ? "mage" : 0 == this.indexCardNumber ? "tombcrush" : "";
            this.spellCard = _GAME.Card[this.nameCard].spellcard;
            this.manausage = _GAME.Card[this.nameCard].manaUsage
        },
        ready: function() {},
        update: function() {
            this.parent();
            this.oneShotCheckManaBar || (this.manabar = ig.game.getEntitiesByType(EntityManaBar)[0], this.oneShotCheckManaBar = !0);
            if ("play" == ig.game.gameState && (ig.game.holdingCard == this && ig.game.pointer.isPressed &&
                (this.pos.x = ig.game.pointer.pos.x - ig.game.diffPointer.x, this.pos.y = ig.game.pointer.pos.y - ig.game.diffPointer.y, this.drawingSize = 480 > ig.game.pointer.pos.y && 68 < ig.game.pointer.pos.y ? 0 : 1 - (640 - ig.game.pointer.pos.y) / 160), ig.game.holdingCard == this && ig.game.pointer.isReleased && (ig.game.holdingCard = null, this.zIndex = 103, ig.game.sortEntitiesDeferred(), this.backToPos(), 480 > ig.game.pointer.pos.y && 68 < ig.game.pointer.pos.y && this.manabar.mana >= this.manausage))) {
                if (ig.game.settingsGame.tutorial) {
                    var b = ig.game.getEntitiesByType(EntityTutorialGame)[0];
                    if (2 > b.textOutInt) return;
                    b.TropsDeploy()
                }
                this.deck.callNextCard(this.cardPos, this.indexCardNumber);
                this.spawning()
            }
        },
        spawning: function() {
            switch (this.indexCardNumber) {
                case 1:
                    ig.game.spawnEntity(EntityArcher, this.drawPos.x, this.drawPos.y);
                    break;
                case 2:
                    ig.game.spawnEntity(EntityRainArrow, ig.game.pointer.pos.x, ig.game.pointer.pos.y, {
                        call: "blue"
                    });
                    break;
                case 3:
                    ig.game.spawnEntity(EntityWarrior, this.drawPos.x, this.drawPos.y);
                    break;
                case 4:
                    ig.game.spawnEntity(EntityBerserk, ig.game.pointer.pos.x, ig.game.pointer.pos.y, {
                        flag: "blue"
                    });
                    break;
                case 5:
                    ig.game.spawnEntity(EntityGiant, this.drawPos.x, this.drawPos.y);
                    break;
                case 6:
                    ig.game.spawnEntity(EntityBomb, this.drawPos.x, this.drawPos.y);
                    break;
                case 7:
                    ig.game.spawnEntity(EntityFireball, ig.game.pointer.pos.x, ig.game.pointer.pos.y, {
                        call: "blue"
                    });
                    break;
                case 8:
                    ig.game.spawnEntity(EntityFreez, ig.game.pointer.pos.x, ig.game.pointer.pos.y, {
                        flag: "blue"
                    });
                    break;
                case 9:
                    ig.game.spawnEntity(EntityAxeman, this.drawPos.x, this.drawPos.y);
                    break;
                case 10:
                    ig.game.spawnEntity(EntityAxethrow,
                        this.drawPos.x, this.drawPos.y);
                    break;
                case 11:
                    ig.game.spawnEntity(EntityHammer, this.drawPos.x, this.drawPos.y);
                    break;
                case 12:
                    ig.game.spawnEntity(EntityLightning, ig.game.pointer.pos.x, ig.game.pointer.pos.y, {
                        target: {
                            x: ig.game.pointer.pos.x - 32,
                            y: -40
                        },
                        flag: "blue"
                    });
                    break;
                case 13:
                    ig.game.spawnEntity(EntityMage, this.drawPos.x, this.drawPos.y);
                    break;
                default:
                    ig.game.spawnEntity(EntityHammerCrush, ig.game.pointer.pos.x, ig.game.pointer.pos.y)
            }
            this.manabar.mana -= this.manausage;
            ig.game.removeEntity(this)
        },
        backToPos: function() {
            this.pos.x =
                0 == this.cardPos ? 108 : 1 == this.cardPos ? 176 : 2 == this.cardPos ? 244 : 312;
            this.pos.y = 536;
            this.drawingSize = 1
        },
        draw: function() {
            this.parent();
            ig.global.wm || (0 < this.drawingSize ? (this.drawingCard(this.indexCardNumber), this.drawingMana(this.indexCardNumber)) : "play" == ig.game.gameState ? (this.drawingRed(), this.drawingTroops()) : "end" == ig.game.gameState && !this.btp && (this.btp = !0, ig.game.holdingCard == this && this.backToPos()))
        },
        drawingCard: function(b) {
            var c = ig.system.context;
            c.save();
            var d = "default";
            switch (b) {
                case 1:
                    d = "archer";
                    break;
                case 2:
                    d = "arrow-shower";
                    break;
                case 3:
                    d = "warrior";
                    break;
                case 4:
                    d = "berserk";
                    break;
                case 5:
                    d = "giant";
                    break;
                case 6:
                    d = "bomb";
                    break;
                case 7:
                    d = "fireball";
                    break;
                case 8:
                    d = "freezer";
                    break;
                case 9:
                    d = "axeman";
                    break;
                case 10:
                    d = "axemanthrow";
                    break;
                case 11:
                    d = "hammer";
                    break;
                case 12:
                    d = "lightning";
                    break;
                case 13:
                    d = "mage";
                    break;
                default:
                    d = "tombcrush"
            }
            b = _CARD.frames[d].frame;
            c.globalAlpha = this.drawingSize;
            d = 0;
            this.manabar.mana < this.manausage && (d = b.h - Math.floor(this.manabar.mana / this.manausage * b.h), c.drawImage(this.cardImgBW.data,
                b.x, b.y, b.w, b.h, this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, b.w, b.h));
            c.drawImage(this.cardImg.data, b.x, b.y + d, b.w, b.h - d, this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y + d, b.w, b.h - d);
            c.restore()
        },
        drawingMana: function() {
            var b = ig.system.context;
            b.save();
            b.font = "10pt Arial";
            b.fillStyle = "#FFFFFF";
            b.globalAlpha = this.drawingSize;
            b.fillText(this.manausage, this.pos.x + 50 - ig.game.screen.x, this.pos.y + 72 - ig.game.screen.y);
            b.restore()
        },
        drawingTroops: function() {
            var b = ig.system.context,
                c = "default";
            switch (this.indexCardNumber) {
                case 1:
                    c = "archer";
                    break;
                case 2:
                    c = "ars";
                    break;
                case 3:
                    c = "warrior";
                    break;
                case 4:
                    c = "brs";
                    break;
                case 5:
                    c = "giant";
                    break;
                case 6:
                    c = "bomb";
                    break;
                case 7:
                    c = "exs";
                    break;
                case 8:
                    c = "fs";
                    break;
                case 9:
                    c = "xmen";
                    break;
                case 10:
                    c = "xthrow";
                    break;
                case 11:
                    c = "hammer";
                    break;
                case 12:
                    c = "ls";
                    break;
                case 13:
                    c = "mage";
                    break;
                default:
                    c = "hcs"
            }
            if ("default" != c) {
                var d = _TROOPS_CARD.frames[c].frame;
                b.save();
                "ls" != c && (b.globalAlpha = 0.5);
                this.spellCard ? this.drawPos = {
                    x: ig.game.pointer.pos.x - d.w / 2,
                    y: ig.game.pointer.pos.y -
                        d.h / 2
                } : (this.drawPos = {
                        x: ig.game.pointer.pos.x - d.w / 2,
                        y: ig.game.pointer.pos.y - d.h / 2
                    }, 80 > this.drawPos.x ? this.drawPos.x = 80 : this.drawPos.x > 400 - d.w && (this.drawPos.x = 400 - d.w), null != ig.game.tsLeft && null != ig.game.tsRight ? this.drawPos.y < 305 - d.h && (this.drawPos.y = 305 - d.h) : null == ig.game.tsLeft && null != ig.game.tsRight ? this.drawPos.x > 245 - d.w && this.drawPos.y < 305 - d.h ? this.drawPos.y = 305 - d.h : this.drawPos.y < 205 - d.h && (this.drawPos.y = 205 - d.h) : null == ig.game.tsRight && null != ig.game.tsLeft ? 245 > this.drawPos.x && this.drawPos.y <
                    305 - d.h ? this.drawPos.y = 305 - d.h : this.drawPos.y < 205 - d.h && (this.drawPos.y = 205 - d.h) : null == ig.game.tsRight && null == ig.game.tsLeft && this.drawPos.y < 205 - d.h && (this.drawPos.y = 205 - d.h));
                b.drawImage(this.tropCardImg.data, d.x, d.y, d.w, d.h, this.drawPos.x - ig.game.screen.x, this.drawPos.y - ig.game.screen.y, d.w, d.h);
                b.restore()
            }
        },
        drawingRed: function() {
            if (!this.spellCard) {
                var b = ig.system.context;
                b.rect(80 - ig.game.screen.x, 64 - ig.game.screen.y, 320, 130);
                b.rect(190 - ig.game.screen.x, 50 - ig.game.screen.y, 100, 20);
                null != ig.game.tsLeft &&
                    b.rect(80 - ig.game.screen.x, 194 - ig.game.screen.y, 160, 100);
                null != ig.game.tsRight && b.rect(240 - ig.game.screen.x, 194 - ig.game.screen.y, 160, 100);
                b.fillStyle = "red";
                b.save();
                b.globalAlpha = 0.3;
                b.fill();
                b.restore()
            }
        },
        clicked: function() {
            ig.game.holdingCard = this;
            ig.game.diffPointer.x = ig.game.pointer.pos.x - this.pos.x;
            ig.game.diffPointer.y = ig.game.pointer.pos.y - this.pos.y;
            this.zIndex = 105;
            ig.game.sortEntitiesDeferred()
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("impact.entity-pool").requires("impact.game").defines(function() {
    ig.EntityPool = {
        pools: {},
        mixin: {
            staticInstantiate: function(b, c, d) {
                return ig.EntityPool.getFromPool(this.classId, b, c, d)
            },
            erase: function() {
                ig.EntityPool.putInPool(this)
            }
        },
        enableFor: function(b) {
            b.inject(this.mixin)
        },
        getFromPool: function(b, c, d, e) {
            b = this.pools[b];
            if (!b || !b.length) return null;
            b = b.pop();
            b.reset(c, d, e);
            return b
        },
        putInPool: function(b) {
            this.pools[b.classId] ? this.pools[b.classId].push(b) : this.pools[b.classId] = [b]
        },
        drainPool: function(b) {
            delete this.pools[b]
        },
        drainAllPools: function() {
            this.pools = {}
        }
    };
    ig.Game.inject({
        loadLevel: function(b) {
            ig.EntityPool.drainAllPools();
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.splash-elixer").requires("impact.entity", "impact.entity-pool").defines(function() {
    EntitySplashElixer = ig.Entity.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/splash-elixer.png", 30, 35),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("splash", 0.05, [0, 1, 2, 3, 5, 6, 7, 8, 9, 10]);
            this.currentAnim = this.anims.splash
        },
        update: function() {
            this.parent();
            this.currentAnim.frame == this.currentAnim.sequence.length - 1 && this.kill()
        },
        draw: function() {
            this.parent()
        },
        reset: function(b,
            c, d) {
            this.parent(b, c, d);
            this.currentAnim.rewind()
        }
    });
    EntityElixerDrop = ig.Entity.extend({
        img: new ig.Image("media/graphics/game/elixer.png"),
        cekDelta: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.spawnEntity(EntitySplashElixer, this.pos.x, this.pos.y - 20, {
                zIndex: this.zIndex
            });
            this.timer = new ig.Timer
        },
        update: function() {
            this.parent();
            this.cekDelta = this.timer.delta();
            1 < this.timer.delta() && this.kill()
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.save();
            b.globalAlpha = 1 - this.cekDelta;
            this.img.draw(this.pos.x -
                ig.game.screen.x, this.pos.y - ig.game.screen.y);
            b.restore()
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.spawnEntity(EntitySplashElixer, this.pos.x, this.pos.y - 20, {
                zIndex: this.zIndex
            });
            this.timer.reset()
        }
    });
    ig.EntityPool.enableFor(EntitySplashElixer);
    ig.EntityPool.enableFor(EntityElixerDrop)
});
ig.baked = !0;
ig.module("game.entities.troopers.base-troops").requires("impact.entity", "game.entities.effects.splash-elixer").defines(function() {
    EntityBaseTroops = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        zIndex: 20,
        attack: !1,
        offsetUpAttack: {
            x: 0,
            y: 0
        },
        offsetDownAttack: {
            x: 0,
            y: 0
        },
        offsetRightAttack: {
            x: 0,
            y: 0
        },
        offsetLeftAttack: {
            x: 0,
            y: 0
        },
        offsetUpWalk: {
            x: 0,
            y: 0
        },
        offsetDownWalk: {
            x: 0,
            y: 0
        },
        offsetRightWalk: {
            x: 0,
            y: 0
        },
        offsetLeftWalk: {
            x: 0,
            y: 0
        },
        rangeDistraction: 0,
        rangeShot: 0,
        targeting: null,
        speedMovement: 0,
        speedHolder: 0,
        flag: "blue",
        battleType: 0,
        collidesWithMe: !1,
        pointerDiff: {
            x: 0,
            y: 0
        },
        attackEnemy: !1,
        animAttackRun: !1,
        pathChoose: [],
        bgHPbar: new ig.Image("media/graphics/game/bg-hp-bar.png"),
        blueHPbar: new ig.Image("media/graphics/game/blue-bar-e.png"),
        redHPbar: new ig.Image("media/graphics/game/red-bar-e.png"),
        offsetHPbar: {
            x: 0,
            y: 0
        },
        fullHealth: 0,
        generatorSpark: null,
        cekSpark: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x = b + this.size.x / 2;
            this.pos.y = c + this.size.y / 2;
            this.fullHealth = this.health;
            this.speedHolder = this.speedMovement;
            this.berserkTime = new ig.Timer;
            this.poisonTime = new ig.Timer;
            this.stunTime = new ig.Timer;
            this.freezTime = new ig.Timer;
            this.idleAttack = new ig.Timer;
            this.initialize()
        },
        update: function() {
            "play" == ig.game.gameState && (this.cekSpark || (this.generatorSpark = ig.game.getEntitiesByType(EntitySparkGenerator)[0], this.cekSpark = !0), this.checkingOffset(), this.checkEffect(), this.moving(), this.animsUpdate(), this.parent())
        },
        clicked: function() {},
        kill: function() {
            this.parent();
            ig.game.spawnEntity(EntityElixerDrop, this.pos.x,
                this.pos.y, {
                    zIndex: this.zIndex
                });
            if (ig.game.settingsGame.tutorial) {
                var b = ig.game.getEntitiesByType(EntityTutorialGame)[0];
                null != b && b.TroopsDeath()
            }
        },
        clicking: function() {},
        released: function() {},
        moving: function() {
            if (0 == this.battleType && !this.attackEnemy)
                for (var b = ig.game.getEntitiesByType(EntityBaseTroops), c = this.rangeDistraction, d = 0; d < b.length; d++) {
                    var e = b[d],
                        g = 0.5 * (e.size.x + e.size.y);
                    this.distanceTo(e) <= c + g && e.flag != this.flag && (c = this.distanceTo(e), this.targeting = e)
                }
            b = 1E4;
            null != this.targeting && this.distanceTo(this.targeting) >
                this.rangeDistraction && (this.targeting = null);
            if (null == this.targeting || this.targeting._killed) {
                c = ig.game.getEntitiesByType(EntityTower);
                for (d = 0; d < c.length; d++) e = c[d], this.distanceTo(e) <= b && e.flag != this.flag && (b = this.distanceTo(e), this.targeting = e)
            }
            if (null != this.targeting)
                if (b = this.angleTo(this.targeting), c = 0.25 * (this.targeting.size.x + this.targeting.size.y), 0 == this.rangeShot && (c = 2 * c - (this.size.x + this.size.y) / 4), this.distanceTo(this.targeting) <= this.rangeShot + c) this.attackEnemy = !0, this.vel.x = 0, this.vel.y =
                    0;
                else if (!this.animAttackRun) {
                c = this.distanceTo(this.targeting);
                for (d = 1; d < c;) {
                    Math.cos(b);
                    Math.sin(b);
                    e = {
                        x: this.pos.x + 0.25 * this.size.x + Math.cos(b) * d,
                        y: this.pos.y + 0.5 * this.size.y + Math.sin(b) * d
                    };
                    g = {
                        x: this.pos.x + 0.75 * this.size.x + Math.cos(b) * d,
                        y: this.pos.y + 0.5 * this.size.y + Math.sin(b) * d
                    };
                    if (this.checkEnterPoint(e) || this.checkEnterPoint(g)) {
                        0 < this.pathChoose.length ? (c = [], c[this.pathChoose.length - 1] = this.getBestDistace(), c[0][0] != this.pathChoose[0][0] && c[0][1] != this.pathChoose[0][1] && this.pathChoose.push(this.getBestDistace())) :
                            this.pathChoose.push(this.getBestDistace());
                        break
                    }
                    d += 1
                }
                0 < this.pathChoose.length && (b = this.checkAnglePoint(this.pathChoose[0][0], this.pathChoose[0][1]));
                this.attackEnemy = !1;
                this.vel.x = Math.cos(b) * this.speedMovement;
                this.vel.y = Math.sin(b) * this.speedMovement;
                0 < this.pathChoose.length && 5 > this.checkDistancePoint(this.pathChoose[0][0], this.pathChoose[0][1]) && this.pathChoose.splice(0, 1)
            }
        },
        getBestDistace: function() {
            for (var b = [
                [328, 300],
                [328, 228],
                [144, 300],
                [144, 228]
            ], c = 1E3, d = 0, e = 0; 4 > e; e++) {
                var g = this.checkDistancePoint(b[e][0],
                    b[e][1]);
                !(5 > g) && g < c && (c = g, d = e)
            }
            return b[d]
        },
        checkDistancePoint: function(b, c) {
            var d = this.pos.x + this.size.x / 2 - b,
                e = this.pos.y + this.size.y / 2 - c;
            return Math.sqrt(d * d + e * e)
        },
        checkAnglePoint: function(b, c) {
            return Math.atan2(c - (this.pos.y + this.size.y / 2), b - (this.pos.x + this.size.x / 2))
        },
        checkEnterPoint: function(b) {
            var c = 168 < b.x && 313 > b.x && 264 < b.y && 290 > b.y ? !0 : !1,
                d = 348 < b.x && 389 > b.y && 264 < b.y && 290 > b.y ? !0 : !1;
            return (88 < b.x && 128 > b.x && 264 < b.y && 290 > b.y ? !0 : !1) || c || d
        },
        getDamage: function(b) {
            this.health -= b;
            0 >= this.health &&
                this.kill()
        },
        setBerserk: function() {
            this.berserkActive = !0;
            this.berserkTime.set(0.5)
        },
        setPoison: function() {
            this.poisonActive = !0;
            this.poisonTime.set(0.3);
            this.health -= _GAME.Card.tombcrush.DPS / 60;
            0 >= this.health && this.kill()
        },
        setFreez: function(b) {
            this.freezActive = !0;
            this.freezTime.set(b)
        },
        setStun: function(b) {
            this.stunActive = !0;
            this.stunTime.set(b)
        },
        checkEffect: function() {
            var b = this.speedHolder,
                c = 0.05;
            this.berserkActive && (b += 40 * this.speedHolder / 100, c -= 40 * c / 100, 0 < this.berserkTime.delta() && (this.berserkActive = !1));
            this.poisonActive && (b -= 30 * this.speedHolder / 100, c += 30 * c / 100, 0 < this.poisonTime.delta() && (this.berserkActive = !1));
            this.stunActive && (b = 0, c = 1, 0 < this.stunTime.delta() && (this.stunActive = !1));
            this.freezActive && (b = 0, c = 4, 0 < this.freezTime.delta() && (this.freezActive = !1));
            this.speedMovement = b;
            this.anims.sideAttack.frameTime = this.anims.downAttack.frameTime = this.anims.upAttack.frameTime = this.anims.sideWalk.frameTime = this.anims.upWalk.frameTime = this.anims.downWalk.frameTime = this.currentAnim.frameTime = c
        },
        animsUpdate: function() {
            if (null !=
                this.targeting) {
                var b = this.angleTo(this.targeting) * (180 / Math.PI);
                this.attackEnemy ? (this.animAttackRun = !0, -45 < b && 45 > b ? (this.currentAnim = this.anims.sideAttack, this.anims.sideAttack.flip.x = !0) : 45 < b && 125 > b ? this.currentAnim = this.anims.downAttack : 125 < b && 180 > b || -125 > b && -180 < b ? (this.currentAnim = this.anims.sideAttack, this.anims.sideAttack.flip.x = !1) : -125 < b && -45 > b && (this.currentAnim = this.anims.upAttack)) : -45 < b && 45 > b ? (this.currentAnim = this.anims.sideWalk, this.anims.sideWalk.flip.x = !0) : 45 < b && 125 > b ? this.currentAnim =
                    this.anims.downWalk : 125 < b && 180 > b || -125 > b && -180 < b ? (this.currentAnim = this.anims.sideWalk, this.anims.sideWalk.flip.x = !1) : -125 < b && -45 > b && (this.currentAnim = this.anims.upWalk)
            }
        },
        draw: function() {
            this.parent();
            ig.game.troopsSight && this.drawSight();
            this.drawHealthBar();
            this.zIndex = this.pos.y + this.size.y + 1E3;
            ig.game.sortEntitiesDeferred()
        },
        drawHealthBar: function() {
            this.bgHPbar.draw(this.pos.x - this.offsetHPbar.x - ig.game.screen.x, this.pos.y - this.offsetHPbar.y - ig.game.screen.y);
            var b = 37 * (this.health / this.fullHealth);
            "blue" == this.flag ? this.blueHPbar.draw(this.pos.x - this.offsetHPbar.x + 1 - ig.game.screen.x, this.pos.y - this.offsetHPbar.y + 2 - ig.game.screen.y, 0, 0, b, 4) : this.redHPbar.draw(this.pos.x - this.offsetHPbar.x + 1 - ig.game.screen.x, this.pos.y - this.offsetHPbar.y + 2 - ig.game.screen.y, 0, 0, b, 4)
        },
        drawSight: function() {
            var b = ig.system.context,
                c = this.pos.x + this.size.x / 2,
                d = this.pos.y + this.size.y / 2;
            0 < this.rangeShot && (b.beginPath(), b.strokeStyle = "#00ff00", b.arc(c, d, this.rangeShot, 0, 2 * Math.PI), b.closePath(), b.stroke());
            0 < this.rangeDistraction &&
                (b.beginPath(), b.strokeStyle = "#4000ff", b.arc(c, d, this.rangeDistraction, 0, 2 * Math.PI), b.closePath(), b.stroke())
        },
        initialize: function() {},
        testMove: function() {
            ig.input.pressed("att") && (this.attack = !this.attack);
            ig.input.pressed("up") && (this.currentAnim = this.attack ? this.anims.upAttack : this.anims.upWalk);
            ig.input.pressed("down") && (this.currentAnim = this.attack ? this.anims.downAttack : this.anims.downWalk);
            ig.input.pressed("left") && (this.anims.sideWalk.flip.x = !1, this.anims.sideAttack.flip.x = !1, this.currentAnim =
                this.attack ? this.anims.sideAttack : this.anims.sideWalk);
            ig.input.pressed("right") && (this.anims.sideWalk.flip.x = !0, this.anims.sideAttack.flip.x = !0, this.currentAnim = this.attack ? this.anims.sideAttack : this.anims.sideWalk)
        },
        checkingOffset: function() {
            this.currentAnim == this.anims.upAttack ? this.offset = this.offsetUpAttack : this.currentAnim == this.anims.downAttack ? this.offset = this.offsetDownAttack : this.currentAnim == this.anims.sideAttack && this.anims.sideAttack.flip.x ? this.offset = this.offsetRightAttack : this.currentAnim ==
                this.anims.sideAttack && !this.anims.sideAttack.flip.x ? this.offset = this.offsetLeftAttack : this.currentAnim == this.anims.upWalk ? this.offset = this.offsetUpWalk : this.currentAnim == this.anims.downWalk ? this.offset = this.offsetDownWalk : this.currentAnim == this.anims.sideWalk && this.anims.sideWalk.flip.x ? this.offset = this.offsetRightWalk : this.currentAnim == this.anims.sideWalk && !this.anims.sideWalk.flip.x && (this.offset = this.offsetLeftWalk)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.archer").requires("game.entities.troopers.base-troops", "game.entities.bullets.bullet-arrow").defines(function() {
    EntityArcher = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/archer-a.png", 40, 50),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/archer-ar.png", 40, 50),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/archer-w.png", 40, 50),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/archer-wr.png",
            40, 50),
        offset: {
            x: 12,
            y: 25
        },
        size: {
            x: 20,
            y: 20
        },
        testingMovement: !1,
        offsetUpAttack: {
            x: 12,
            y: 18
        },
        offsetDownAttack: {
            x: 12,
            y: 18
        },
        offsetRightAttack: {
            x: 9,
            y: 18
        },
        offsetLeftAttack: {
            x: 15,
            y: 18
        },
        offsetUpWalk: {
            x: 12,
            y: 25
        },
        offsetDownWalk: {
            x: 12,
            y: 25
        },
        offsetRightWalk: {
            x: 12,
            y: 25
        },
        offsetLeftWalk: {
            x: 10,
            y: 25
        },
        rangeShot: _GAME.Card.archer.rangeShot,
        rangeDistraction: _GAME.Card.archer.rangeDistraction,
        speedMovement: _GAME.Card.archer.speedMovement,
        health: _GAME.Card.archer.HP,
        attackDamage: _GAME.Card.archer.ATK,
        offsetHPbar: {
            x: 10,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.soundHandler.sfxPlayer.play("maleOneSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [6, 8, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 3]), this.addAnim("downAttack", 0.05, [1, 9, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2]), this.addAnim("upAttack", 0.05, [7, 11, 12, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [6, 8, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 3]), this.addAnim("downAttack",
                0.05, [1, 9, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2]), this.addAnim("upAttack", 0.05, [7, 11, 12, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14]), this.animSheet = this.walkRSheet);
            this.addAnim("downWalk", 0.05, [1, 21, 6, 7, 2, 8, 12, 13, 14, 3]);
            this.addAnim("sideWalk", 0.05, [9, 15, 18, 19, 20, 0, 4, 10, 16, 22]);
            this.addAnim("upWalk", 0.05, [5, 11, 17, 23, 24, 25, 26, 27, 28, 29]);
            this.currentAnim = this.anims.upWalk
        },
        update: function() {
            this.parent();
            if (this.attackEnemy && 0 < this.currentAnim.loopCount) {
                this.currentAnim.rewind();
                var b = 0.25 * (this.targeting.size.x +
                    this.targeting.size.y);
                this.distanceTo(this.targeting) <= this.rangeShot + b && (ig.game.spawnEntity(EntityBulletArrow, this.pos.x + 0.5 * this.size.x, this.pos.y, {
                    targeting: this.targeting,
                    flag: this.flag,
                    damage: this.attackDamage
                }), ig.soundHandler.sfxPlayer.play("woshArrowSound"));
                this.animAttackRun = !1
            }
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.bomb").requires("game.entities.troopers.base-troops").defines(function() {
    EntityBomb = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/bomb-a.png", 35, 35),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/bomb-w.png", 35, 40),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/bomb-ar.png", 35, 35),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/bomb-wr.png", 35, 40),
        testingMovement: !1,
        offset: {
            x: 10,
            y: 20
        },
        size: {
            x: 15,
            y: 15
        },
        offsetUpAttack: {
            x: 10,
            y: 18
        },
        offsetDownAttack: {
            x: 12,
            y: 18
        },
        offsetRightAttack: {
            x: 10,
            y: 15
        },
        offsetLeftAttack: {
            x: 10,
            y: 15
        },
        offsetUpWalk: {
            x: 12,
            y: 20
        },
        offsetDownWalk: {
            x: 12,
            y: 20
        },
        offsetRightWalk: {
            x: 12,
            y: 20
        },
        offsetLeftWalk: {
            x: 10,
            y: 20
        },
        rangeShot: _GAME.Card.bomb.rangeShot,
        rangeDistraction: _GAME.Card.bomb.rangeDistraction,
        speedMovement: _GAME.Card.bomb.speedMovement,
        health: _GAME.Card.bomb.HP,
        attackDamage: _GAME.Card.bomb.ATK,
        offsetHPbar: {
            x: 14,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.soundHandler.sfxPlayer.play("maleOneSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [15, 16, 16, 17, 17, 3, 3, 0, 0, 13, 13, 18, 18, 20, 20]), this.addAnim("downAttack", 0.05, [5, 8, 1, 1, 6, 6, 10, 10, 11, 11, 2, 2, 7, 7, 12]), this.addAnim("upAttack", 0.05, [21, 22, 22, 23, 23, 4, 4, 9, 9, 14, 14, 19, 24, 24, 25]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [15, 16, 16, 17, 17, 3, 3, 0, 0, 13, 13, 18, 18, 20, 20]), this.addAnim("downAttack", 0.05, [5, 8, 1, 1, 6, 6, 10, 10, 11, 11, 2, 2, 7, 7, 12]), this.addAnim("upAttack",
                0.05, [21, 22, 22, 23, 23, 4, 4, 9, 9, 14, 14, 19, 24, 24, 25]), this.animSheet = this.walkRSheet);
            this.addAnim("downWalk", 0.05, [1, 31, 7, 8, 2, 9, 14, 15, 3, 10, 17, 21, 22, 23, 24, 4, 11]);
            this.addAnim("sideWalk", 0.05, [18, 25, 28, 29, 30, 0, 32, 5, 12, 19, 26]);
            this.addAnim("upWalk", 0.05, [33, 35, 36, 37, 38, 39, 40, 6, 13, 20, 27, 34, 41, 42, 43, 44, 45, 46]);
            this.currentAnim = this.anims.upAttack
        },
        update: function() {
            this.parent();
            if (this.attackEnemy && 0 < this.currentAnim.loopCount) {
                this.currentAnim.rewind();
                var b = 0.25 * (this.targeting.size.x + this.targeting.size.y);
                this.distanceTo(this.targeting) <= this.rangeShot + b && ig.game.spawnEntity(EntityBulletBomb, this.pos.x + 0.5 * this.size.x, this.pos.y, {
                    targeting: this.targeting,
                    flag: this.flag,
                    damage: this.attackDamage
                });
                this.animAttackRun = !1
            }
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.axeman").requires("game.entities.troopers.base-troops").defines(function() {
    EntityAxeman = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/xmen-a.png", 55, 50),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/xmen-w.png", 50, 50),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/xmen-ar.png", 55, 50),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/xmen-wr.png", 50, 50),
        testingMovement: !1,
        offset: {
            x: 14,
            y: 20
        },
        size: {
            x: 25,
            y: 25
        },
        offsetUpAttack: {
            x: 13,
            y: 22
        },
        offsetDownAttack: {
            x: 15,
            y: 17
        },
        offsetRightAttack: {
            x: 12,
            y: 18
        },
        offsetLeftAttack: {
            x: 15,
            y: 18
        },
        offsetUpWalk: {
            x: 10,
            y: 20
        },
        offsetDownWalk: {
            x: 15,
            y: 20
        },
        offsetRightWalk: {
            x: 10,
            y: 20
        },
        offsetLeftWalk: {
            x: 14,
            y: 20
        },
        rangeShot: _GAME.Card.axeman.rangeShot,
        rangeDistraction: _GAME.Card.axeman.rangeDistraction,
        speedMovement: _GAME.Card.axeman.speedMovement,
        health: _GAME.Card.axeman.HP,
        attackDamage: _GAME.Card.axeman.ATK,
        offsetHPbar: {
            x: 8,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            ig.soundHandler.sfxPlayer.play("maleFourSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [5, 18, 1, 6, 10, 11, 2, 7, 12, 15, 16, 17]), this.addAnim("downAttack", 0.05, [3, 8, 0, 20, 21, 22, 23, 4]), this.addAnim("upAttack", 0.05, [9, 14, 19, 24, 25, 26, 27, 28, 29]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [5, 18, 1, 6, 10, 11, 2, 7, 12, 15, 16, 17]), this.addAnim("downAttack", 0.05, [3, 8, 0, 20, 21, 22, 23, 4]), this.addAnim("upAttack", 0.05, [9, 14, 19,
                24, 25, 26, 27, 28, 29
            ]), this.animSheet = this.walkRSheet);
            this.addAnim("downWalk", 0.05, [28, 30, 31, 32, 33, 34, 5, 11, 17, 23, 29, 35]);
            this.addAnim("sideWalk", 0.05, [6, 26, 1, 7, 12, 13, 2, 8, 14, 18, 19, 20]);
            this.addAnim("upWalk", 0.05, [3, 9, 15, 21, 24, 25, 0, 27, 4, 10, 16, 22]);
            this.currentAnim = this.anims.upWalk
        },
        update: function() {
            this.parent();
            this.attackEnemy && 0 < this.currentAnim.loopCount && (this.currentAnim.rewind(), this.targeting.getDamage(this.attackDamage), this.animAttackRun = !1, ig.soundHandler.sfxPlayer.play("hitMeleSound"), this.generatorSpark.generateSpark(this.pos.x,
                this.pos.y))
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.axethrow").requires("game.entities.troopers.base-troops").defines(function() {
    EntityAxethrow = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/xthrow-a.png", 50, 50),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/xthrow-w.png", 60, 50),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/xthrow-ar.png", 50, 50),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/xthrow-wr.png", 60, 50),
        testingMovement: !1,
        offset: {
            x: 10,
            y: 20
        },
        size: {
            x: 20,
            y: 20
        },
        offsetUpAttack: {
            x: 12,
            y: 25
        },
        offsetDownAttack: {
            x: 19,
            y: 25
        },
        offsetRightAttack: {
            x: 10,
            y: 25
        },
        offsetLeftAttack: {
            x: 20,
            y: 25
        },
        offsetUpWalk: {
            x: 14,
            y: 20
        },
        offsetDownWalk: {
            x: 26,
            y: 20
        },
        offsetRightWalk: {
            x: 12,
            y: 22
        },
        offsetLeftWalk: {
            x: 28,
            y: 22
        },
        rangeShot: _GAME.Card.axethrow.rangeShot,
        rangeDistraction: _GAME.Card.axethrow.rangeDistraction,
        speedMovement: _GAME.Card.axethrow.speedMovement,
        health: _GAME.Card.axethrow.HP,
        attackDamage: _GAME.Card.axethrow.ATK,
        offsetHPbar: {
            x: 10,
            y: 20
        },
        init: function(b,
            c, d) {
            this.parent(b, c, d);
            ig.soundHandler.sfxPlayer.play("maleFourSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [7, 12, 15, 16, 0, 3, 8, 8, 8, 8, 13]), this.addAnim("downAttack", 0.05, [5, 17, 1, 6, 10, 11, 11, 11, 11, 2]), this.addAnim("upAttack", 0.05, [18, 20, 21, 22, 23, 4, 4, 4, 4, 9]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [7, 12, 15, 16, 0, 3, 8, 8, 8, 8, 13]), this.addAnim("downAttack", 0.05, [5, 17, 1, 6, 10, 11, 11, 11, 11, 2]), this.addAnim("upAttack",
                0.05, [18, 20, 21, 22, 23, 4, 4, 4, 4, 9]), this.animSheet = this.walkRSheet);
            this.addAnim("sideWalk", 0.05, [25, 26, 27, 30, 31, 32, 0, 4, 10, 16, 22]);
            this.addAnim("downWalk", 0.05, [6, 33, 1, 7, 12, 13, 2, 8, 14, 18, 19, 20, 3, 9, 15, 21, 24]);
            this.addAnim("upWalk", 0.05, [34, 36, 37, 38, 39, 40, 5, 11, 17, 23, 29, 35, 41, 42, 43, 44, 45]);
            this.currentAnim = this.anims.upAttack
        },
        update: function() {
            this.parent();
            if (this.attackEnemy && 0 < this.currentAnim.loopCount) {
                this.currentAnim.rewind();
                var b = 0.25 * (this.targeting.size.x + this.targeting.size.y);
                this.distanceTo(this.targeting) <=
                    this.rangeShot + b && (ig.game.spawnEntity(EntityBulletAxe, this.pos.x + 0.5 * this.size.x, this.pos.y, {
                        targeting: this.targeting,
                        flag: this.flag,
                        damage: this.attackDamage
                    }), ig.soundHandler.sfxPlayer.play("woshArrowSound"));
                this.animAttackRun = !1
            }
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.giant").requires("game.entities.troopers.base-troops").defines(function() {
    EntityGiant = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/giant-a.png", 90, 80),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/giant-w.png", 75, 80),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/giant-ar.png", 90, 80),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/giant-wr.png", 75, 80),
        testingMovement: !1,
        offset: {
            x: 28,
            y: 25
        },
        size: {
            x: 40,
            y: 40
        },
        offsetUpAttack: {
            x: 28,
            y: 25
        },
        offsetDownAttack: {
            x: 28,
            y: 25
        },
        offsetRightAttack: {
            x: 20,
            y: 25
        },
        offsetLeftAttack: {
            x: 30,
            y: 25
        },
        offsetUpWalk: {
            x: 20,
            y: 26
        },
        offsetDownWalk: {
            x: 18,
            y: 26
        },
        offsetRightWalk: {
            x: 8,
            y: 26
        },
        offsetLeftWalk: {
            x: 28,
            y: 26
        },
        rangeShot: _GAME.Card.giant.rangeShot,
        rangeDistraction: _GAME.Card.giant.rangeDistraction,
        speedMovement: _GAME.Card.giant.speedMovement,
        health: _GAME.Card.giant.HP,
        attackDamage: _GAME.Card.giant.ATK,
        offsetHPbar: {
            x: 0,
            y: 20
        },
        battleType: 1,
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            ig.soundHandler.sfxPlayer.play("maleThreeSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [6, 27, 1, 7, 12, 13, 2, 8, 14]), this.addAnim("upAttack", 0.05, [18, 19, 20, 3, 9, 15, 21, 24, 25, 26, 0, 4, 10, 16, 22]), this.addAnim("downAttack", 0.05, [28, 30, 31, 32, 33, 34, 5, 11, 17, 23, 29, 35, 36, 37, 38]), this.animSheet = this.walkSheet, this.addAnim("downWalk", 0.05, [1, 15, 9, 10, 2, 11, 18, 19, 20, 3, 12, 21, 27, 28, 29, 30, 4, 13, 22, 31, 36, 37, 38, 39, 40]), this.addAnim("sideWalk", 0.05, [5, 14, 23, 32, 41, 45, 46, 47, 48, 49,
                50, 6, 0, 24, 33, 42, 51, 54, 55, 56, 57, 58, 59, 60, 7
            ]), this.addAnim("upWalk", 0.05, [16, 25, 34, 43, 52, 61, 63, 64, 65, 66, 67, 68, 69, 70, 8, 17, 26, 35, 44, 53, 62, 71, 72, 73, 74])) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [6, 27, 1, 7, 12, 13, 2, 8, 14]), this.addAnim("upAttack", 0.05, [18, 19, 20, 3, 9, 15, 21, 24, 25, 26, 0, 4, 10, 16, 22]), this.addAnim("downAttack", 0.05, [28, 30, 31, 32, 33, 34, 5, 11, 17, 23, 29, 35, 36, 37, 38]), this.animSheet = this.walkRSheet, this.addAnim("downWalk", 0.05, [1, 15, 9, 10, 2, 11, 18, 19, 20, 3, 12, 21, 27, 28, 29, 30, 4, 13, 22,
                31, 36, 37, 38, 39, 40
            ]), this.addAnim("sideWalk", 0.05, [5, 14, 23, 32, 41, 45, 46, 47, 48, 49, 50, 6, 0, 24, 33, 42, 51, 54, 55, 56, 57, 58, 59, 60, 7]), this.addAnim("upWalk", 0.05, [16, 25, 34, 43, 52, 61, 63, 64, 65, 66, 67, 68, 69, 70, 8, 17, 26, 35, 44, 53, 62, 71, 72, 73, 74]), this.pos.y = c - 20);
            this.currentAnim = this.anims.upAttack
        },
        update: function() {
            this.parent();
            this.attackEnemy && 0 < this.currentAnim.loopCount && (this.currentAnim.rewind(), this.targeting.getDamage(this.attackDamage), this.animAttackRun = !1, ig.soundHandler.sfxPlayer.play("hammercrushSound"),
                this.generatorSpark.generateSpark(this.pos.x, this.pos.y))
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.hammer").requires("game.entities.troopers.base-troops").defines(function() {
    EntityHammer = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/hammer-a.png", 60, 65),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/hammer-w.png", 65, 60),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/hammer-ar.png", 60, 65),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/hammer-wr.png", 65, 60),
        testingMovement: !1,
        offset: {
            x: 8,
            y: 34
        },
        size: {
            x: 30,
            y: 25
        },
        offsetUpAttack: {
            x: 8,
            y: 34
        },
        offsetDownAttack: {
            x: 18,
            y: 28
        },
        offsetRightAttack: {
            x: 12,
            y: 25
        },
        offsetLeftAttack: {
            x: 16,
            y: 25
        },
        offsetUpWalk: {
            x: 12,
            y: 18
        },
        offsetDownWalk: {
            x: 20,
            y: 18
        },
        offsetRightWalk: {
            x: 14,
            y: 18
        },
        offsetLeftWalk: {
            x: 20,
            y: 18
        },
        rangeShot: _GAME.Card.hammer.rangeShot,
        rangeDistraction: _GAME.Card.hammer.rangeDistraction,
        speedMovement: _GAME.Card.hammer.speedMovement,
        health: _GAME.Card.hammer.HP,
        attackDamage: _GAME.Card.hammer.ATK,
        offsetHPbar: {
            x: 5,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            ig.soundHandler.sfxPlayer.play("maleTwoSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [4, 4, 4, 4, 4, 2, 5, 5]), this.addAnim("downAttack", 0.05, [0, 0, 0, 0, 0, 1, 3, 3]), this.addAnim("upAttack", 0.05, [6, 6, 6, 6, 6, 7, 8, 8]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [4, 4, 4, 4, 4, 2, 5, 5]), this.addAnim("downAttack", 0.05, [0, 0, 0, 0, 0, 1, 3, 3]), this.addAnim("upAttack", 0.05, [6, 6, 6, 6, 6, 7, 8, 8]), this.animSheet = this.walkRSheet);
            this.addAnim("downWalk",
                0.05, [7, 32, 1, 8, 14, 15, 2, 9, 16, 21, 22, 23, 3, 10, 17, 24]);
            this.addAnim("sideWalk", 0.05, [28, 29, 30, 31, 4, 11, 18, 25, 0, 35, 36, 37, 38, 39, 5, 12]);
            this.addAnim("upWalk", 0.05, [19, 26, 33, 40, 42, 43, 44, 45, 46, 47, 6, 13, 20, 27, 34, 41]);
            this.currentAnim = this.anims.upAttack
        },
        update: function() {
            this.parent();
            this.attackEnemy && 0 < this.currentAnim.loopCount && (this.currentAnim.rewind(), this.targeting.getDamage(this.attackDamage), this.animAttackRun = !1, ig.soundHandler.sfxPlayer.play("hitMeleSound"), this.generatorSpark.generateSpark(this.pos.x,
                this.pos.y))
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.mage").requires("game.entities.troopers.base-troops").defines(function() {
    EntityMage = EntityBaseTroops.extend({
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-w.png", 30, 50),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-wr.png", 30, 50),
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-a.png", 35, 50),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/mage-ar.png", 35, 50),
        testingMovement: !1,
        offset: {
            x: 8,
            y: 22
        },
        size: {
            x: 15,
            y: 18
        },
        offsetUpAttack: {
            x: 8,
            y: 22
        },
        offsetDownAttack: {
            x: 14,
            y: 22
        },
        offsetRightAttack: {
            x: 4,
            y: 22
        },
        offsetLeftAttack: {
            x: 16,
            y: 22
        },
        offsetUpWalk: {
            x: 6,
            y: 22
        },
        offsetDownWalk: {
            x: 10,
            y: 22
        },
        offsetRightWalk: {
            x: 5,
            y: 22
        },
        offsetLeftWalk: {
            x: 10,
            y: 22
        },
        rangeShot: _GAME.Card.mage.rangeShot,
        rangeDistraction: _GAME.Card.mage.rangeDistraction,
        speedMovement: _GAME.Card.mage.speedMovement,
        health: _GAME.Card.mage.HP,
        attackDamage: _GAME.Card.mage.ATK,
        offsetHPbar: {
            x: 10,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.soundHandler.sfxPlayer.play("femaleSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [1, 27, 8, 9, 2, 10, 3, 11, 16, 17, 18, 19]), this.addAnim("downAttack", 0.05, [6, 14, 22, 30, 32, 33, 34, 35, 36, 37, 38, 7]), this.addAnim("upAttack", 0.05, [4, 12, 20, 24, 25, 26, 0, 28, 5, 13, 21, 29]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [1, 27, 8, 9, 2, 10, 3, 11, 16, 17, 18, 19]), this.addAnim("downAttack", 0.05, [6, 14, 22, 30, 32, 33, 34, 35, 36, 37, 38, 7]), this.addAnim("upAttack", 0.05, [4, 12, 20, 24, 25, 26, 0, 28, 5,
                13, 21, 29
            ]), this.animSheet = this.walkRSheet);
            this.addAnim("sideWalk", 0.05, [4, 12, 20, 5, 13, 21, 0, 25, 26, 27, 28, 29]);
            this.addAnim("downWalk", 0.05, [1, 24, 2, 8, 9, 10, 3, 16, 17, 18, 19]);
            this.addAnim("upWalk", 0.05, [6, 14, 22, 30, 7, 15, 23, 31, 32, 33, 34, 35]);
            this.currentAnim = this.anims.upAttack
        },
        update: function() {
            this.parent();
            if (this.attackEnemy && 0 < this.currentAnim.loopCount) {
                this.currentAnim.rewind();
                var b = 0.25 * (this.targeting.size.x + this.targeting.size.y);
                this.distanceTo(this.targeting) <= this.rangeShot + b && (ig.game.spawnEntity(EntityBulletMage,
                    this.pos.x + 0.5 * this.size.x, this.pos.y, {
                        targeting: this.targeting,
                        flag: this.flag,
                        damage: this.attackDamage
                    }), ig.soundHandler.sfxPlayer.play("woshArrowSound"));
                this.animAttackRun = !1
            }
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.troopers.warrior").requires("game.entities.troopers.base-troops").defines(function() {
    EntityWarrior = EntityBaseTroops.extend({
        attackSheet: new ig.AnimationSheet("media/graphics/game/troops/warrior-attack-b.png", 55, 65),
        walkSheet: new ig.AnimationSheet("media/graphics/game/troops/walk-warrior-b.png", 55, 65),
        attackRSheet: new ig.AnimationSheet("media/graphics/game/troops/warrior-attack-r.png", 55, 65),
        walkRSheet: new ig.AnimationSheet("media/graphics/game/troops/walk-warrior-r.png", 55,
            65),
        testingMovement: !1,
        offset: {
            x: 17,
            y: 28
        },
        size: {
            x: 20,
            y: 25
        },
        offsetUpAttack: {
            x: 17,
            y: 28
        },
        offsetDownAttack: {
            x: 17,
            y: 28
        },
        offsetRightAttack: {
            x: 10,
            y: 28
        },
        offsetLeftAttack: {
            x: 24,
            y: 28
        },
        offsetUpWalk: {
            x: 18,
            y: 18
        },
        offsetDownWalk: {
            x: 18,
            y: 20
        },
        offsetRightWalk: {
            x: 16,
            y: 20
        },
        offsetLeftWalk: {
            x: 18,
            y: 20
        },
        rangeShot: _GAME.Card.warrior.rangeShot,
        rangeDistraction: _GAME.Card.warrior.rangeDistraction,
        speedMovement: _GAME.Card.warrior.speedMovement,
        health: _GAME.Card.warrior.HP,
        attackDamage: _GAME.Card.warrior.ATK,
        offsetHPbar: {
            x: 10,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.soundHandler.sfxPlayer.play("maleTwoSound");
            "blue" == this.flag ? (this.animSheet = this.attackSheet, this.addAnim("sideAttack", 0.05, [12, 3, 8, 13, 13, 13, 13, 0, 16, 17, 18, 18]), this.addAnim("downAttack", 0.05, [1, 15, 5, 6, 6, 6, 6, 2, 7, 10, 10]), this.addAnim("upAttack", 0.05, [4, 9, 14, 14, 14, 14, 19, 24, 20, 21, 22, 23]), this.animSheet = this.walkSheet) : (this.animSheet = this.attackRSheet, this.addAnim("sideAttack", 0.05, [12, 3, 8, 13, 13, 13, 13, 0, 16, 17, 18, 18]), this.addAnim("downAttack", 0.05, [1,
                15, 5, 6, 6, 6, 6, 2, 7, 10, 10
            ]), this.addAnim("upAttack", 0.05, [4, 9, 14, 14, 14, 14, 19, 24, 20, 21, 22, 23]), this.animSheet = this.walkRSheet);
            this.addAnim("downWalk", 0.05, [1, 8, 8, 5, 5, 6, 6, 2, 2, 7, 7, 10, 10]);
            this.addAnim("sideWalk", 0.05, [11, 12, 12, 3, 3, 0, 0, 13, 13, 15, 15, 16, 16]);
            this.addAnim("upWalk", 0.05, [17, 18, 18, 4, 4, 9, 9, 14, 14, 19, 19, 20, 20]);
            this.currentAnim = this.anims.upAttack
        },
        update: function() {
            this.parent();
            this.attackEnemy && 0 < this.currentAnim.loopCount && (this.currentAnim.rewind(), this.targeting.getDamage(this.attackDamage),
                this.animAttackRun = !1, ig.soundHandler.sfxPlayer.play("hitMeleSound"), this.generatorSpark.generateSpark(this.pos.x, this.pos.y))
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.score").requires("impact.entity").defines(function() {
    EntityScore = ig.Entity.extend({
        zIndex: 102,
        redScore: new ig.Image("media/graphics/game/ui/red-score.png"),
        blueScore: new ig.Image("media/graphics/game/ui/blue-score.png"),
        intScoreBlue: 0,
        intScoreRed: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            this.redScore.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context;
            b.font = "12pt troika";
            b.fillStyle = "#FFFFFF";
            b.fillText(this.intScoreRed, this.pos.x + 16 - ig.game.screen.x, this.pos.y + 20 - ig.game.screen.y);
            this.blueScore.draw(this.pos.x - ig.game.screen.x, this.pos.y + 120 - ig.game.screen.y);
            b.fillText(this.intScoreBlue, this.pos.x + 16 - ig.game.screen.x, this.pos.y + 170 - ig.game.screen.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.info-text").requires("impact.entity").defines(function() {
    EntityInfoText = ig.Entity.extend({
        showAdditional: !1,
        pos: {
            x: 0,
            y: 0
        },
        zIndex: 1800,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        playingAnim: function() {},
        draw: function() {
            this.parent();
            showAdditional && this.drawBG()
        },
        drawBG: function() {
            var b = ig.system.context;
            b.save();
            b.fillStyle = "black";
            b.globalAlpha = 0.4;
            b.fillRect(0 - ig.game.screen.x, 235 - ig.game.screen.y, 480, 80);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.time-game").requires("impact.entity", "game.entities.ui.info-text").defines(function() {
    EntityTimeGame = ig.Entity.extend({
        bgTime: new ig.Image("media/graphics/game/ui/timer.png"),
        zIndex: 1799,
        seconds: 0,
        minutes: 2,
        elapse: 180.5,
        doubleMana: !1,
        additionalTimer: !1,
        getScoreEntity: !1,
        checkerText: {
            tM: !1,
            hM: !1
        },
        showOneMleft: !1,
        startEventText: !1,
        doubleManaText: !1,
        showHalfMLeft: !1,
        showTenLeft: !1,
        showSuddenDeath: !1,
        showExtraTime: !1,
        showBeginningBattle: !0,
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            this.realTime = new ig.Timer;
            this.eventTime = new ig.Timer;
            this.eventTime.set(3.5);
            this.setPauseTimer();
            ig.game.gameState = "pause"
        },
        ready: function() {
            this.getScoreEntity || (this.getScoreEntity = !0, this.score = ig.game.getEntitiesByType(EntityScore)[0], this.manabarPlayer = ig.game.getEntitiesByType(EntityManaBar)[0], this.manaAI = ig.game.getEntitiesByType(EntityControlLogic)[0])
        },
        update: function() {
            "play" != ig.game.gameState || ig.game.settingsGame.tutorial || (120 < this.realTime.delta() && !this.doubleMana ? (this.doubleMana = !0, this.manabarPlayer.manaRegen = 1, this.manaAI.manaRegenation = 1, this.startEventText = this.showOneMleft = !0, this.eventTime.set(1)) : 150 < this.realTime.delta() && !this.checkerText.hM ? (this.showHalfMLeft = this.startEventText = !0, this.eventTime.set(1), this.checkerText.hM = !0) : 170 < this.realTime.delta() && !this.checkerText.tM && (this.showTenLeft = this.startEventText = !0, this.eventTime.set(10), this.checkerText.tM = !0), this.startEventText && (this.showOneMleft && 0 < this.eventTime.delta() && (this.showOneMleft = !1, this.doubleManaText = !0, this.eventTime.set(1)), this.doubleManaText && 0 < this.eventTime.delta() && (this.startEventText = this.doubleManaText = !1), this.showHalfMLeft && 0 < this.eventTime.delta() && (this.startEventText = this.showHalfMLeft = !1), this.showTenLeft && 0 < this.eventTime.delta() && (this.startEventText = this.showTenLeft = !1), this.showSuddenDeath && 0 < this.eventTime.delta() && (this.showSuddenDeath = !1, this.showExtraTime = !0, this.eventTime.set(1)), this.showExtraTime && 0 < this.eventTime.delta() && (this.showExtraTime = this.startEventText = !1)),
                this.realTime.delta() > this.elapse && (this.checkingScore() || this.additionalTimer ? ig.game.endPopup.showResult() : (this.realTime.reset(), this.elapse = 60, this.showSuddenDeath = this.startEventText = this.additionalTimer = !0, this.eventTime.set(2))))
        },
        setPauseTimer: function() {
            this.realTime.pause()
        },
        resumeTimer: function() {
            this.realTime.unpause()
        },
        checkAdditionalTimer: function() {
            this.additionalTimer && ig.game.endPopup.showResult()
        },
        checkingScore: function() {
            return this.score.intScoreRed != this.score.intScoreBlue
        },
        draw: function() {
            this.parent();
            ig.game.settingsGame.tutorial || (this.drawingTime(), this.showOneMleft ? this.drawingOneMinuteLeft() : this.doubleManaText ? this.drawingDoubleElixer() : this.showHalfMLeft ? this.drawingHalfMinuteLeft() : this.showTenLeft ? this.drawingTenSecondGo() : this.showSuddenDeath ? this.drawingSuddenDeath() : this.showExtraTime ? this.drawingExtraTime() : this.showBeginningBattle && this.drawingBeginningBattle())
        },
        drawingTime: function() {
            this.bgTime.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context;
            b.font = "10pt troika";
            b.fillStyle = "#FFFFFF";
            b.fillText(_STRINGS.Game.Time, this.pos.x + 4 - ig.game.screen.x, this.pos.y + 14.5 - ig.game.screen.y);
            var c = this.elapse - this.realTime.delta(),
                d = Math.floor(c % 60),
                c = c / 60;
            b.font = "11pt troika";
            var e = d.toString();
            2 > e.length && (e = "0" + d);
            0 > d && (e = "00");
            0 > c && (c = "0");
            b.fillText(Math.floor(c) + " : " + e, this.pos.x + 17 - ig.game.screen.x, this.pos.y + 32 - ig.game.screen.y)
        },
        drawingBgMiddle: function() {
            var b = ig.system.context;
            b.save();
            b.fillStyle = "black";
            b.globalAlpha = 0.4;
            b.fillRect(0 - ig.game.screen.x,
                235 - ig.game.screen.y, 480, 80);
            b.restore()
        },
        drawingOneMinuteLeft: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.save();
            b.font = "40pt troika";
            b.fillStyle = "#FFFFFF";
            b.fillText(_STRINGS.Game.Sixty, 190 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.TimeMinutes, 250 - ig.game.screen.x, 265 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.LeftMinutes, 250 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.restore()
        },
        drawingDoubleElixer: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.save();
            b.font = "30pt troika";
            b.fillStyle = "#FFFFFF";
            b.fillText(_STRINGS.Game.DoubleElixer, 160 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.restore()
        },
        drawingHalfMinuteLeft: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.save();
            b.font = "40pt troika";
            b.fillStyle = "#FFFFFF";
            b.fillText(_STRINGS.Game.Thirty, 190 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.TimeMinutes, 250 - ig.game.screen.x, 265 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.LeftMinutes,
                250 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.restore()
        },
        drawingExtraTime: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.save();
            b.font = "40pt troika";
            b.fillStyle = "#FFFFFF";
            b.fillText(_STRINGS.Game.AdditionalSixty, 168 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.Extra, 248 - ig.game.screen.x, 265 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.TimeMinutes, 248 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.restore()
        },
        drawingTenSecondGo: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.save();
            b.font = "40pt troika";
            b.fillStyle = "#FFFFFF";
            var c = this.elapse - this.realTime.delta(),
                c = Math.floor(c % 60);
            1 <= c && b.fillText(c, 220 - ig.game.screen.x, 285 - ig.game.screen.y);
            b.restore()
        },
        drawingSuddenDeath: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.save();
            b.font = "30pt troika";
            b.fillStyle = "#FFFFFF";
            b.textAlign = "center";
            b.fillText(_STRINGS.Game.Sudden, 240 - ig.game.screen.x, 265 - ig.game.screen.y);
            b.font = "18pt troika";
            b.fillText(_STRINGS.Game.TropiExtra, 240 - ig.game.screen.x,
                300 - ig.game.screen.y);
            b.restore()
        },
        drawingBeginningBattle: function() {
            this.drawingBgMiddle();
            var b = ig.system.context;
            b.font = "30pt troika";
            b.fillStyle = "#FFFFFF";
            b.save();
            b.textAlign = "center";
            var c = Math.floor(-1 * this.eventTime.delta()),
                d = "";
            0 == c ? d = _STRINGS.Game.Battle : 0 > c ? (this.showBeginningBattle = !1, ig.game.gameState = "play", this.resumeTimer()) : d = c.toString();
            b.fillText("" + d, 240 - ig.game.screen.x, 290 - ig.game.screen.y);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-oke").requires("game.entities.buttons.button").defines(function() {
    EntityButtonOke = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(110, 52),
        fillColor: null,
        zIndex: 95E3,
        btnReady: !1,
        img: new ig.Image(_UI.winresult.meta.image),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.btnReady && (ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound"), ig.game.gameState = "play", ig.game.director.loadLevel(1), ig.game.settingsGame.tutorial &&
                (ig.game.settingsGame.tutorial = !1, ig.game.io.storageSet("COV-settings", ig.game.settingsGame)))
        },
        clicking: function() {},
        released: function() {},
        moveBtn: function() {
            this.tween({
                pos: {
                    x: 187,
                    y: 400
                }
            }, 0.5, {
                onComplete: function() {
                    this.btnReady = !0
                }.bind(this)
            }).start()
        },
        draw: function() {
            var b = _UI.winresult.frames["ok-btn"].frame;
            ig.system.context.drawImage(this.img.data, b.x, b.y, b.w, b.h, this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, b.w, b.h);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.ending-result").requires("impact.entity", "game.entities.buttons.button-oke").defines(function() {
    EntityEndingResult = ig.Entity.extend({
        allImage: new ig.Image(_UI.winresult.meta.image),
        zIndex: 3E3,
        posRed: {
            x: -500,
            y: 0
        },
        posBlue: {
            x: 600,
            y: 190
        },
        versus: {
            alpha: 1,
            scale: 0
        },
        rsTropi: {
            rightScale: 0,
            leftScale: 0,
            midScale: 0,
            end: !1
        },
        bsTropi: {
            rightScale: 0,
            leftScale: 0,
            midScale: 0,
            end: !1
        },
        poswin: {
            x: 0,
            y: 0
        },
        alpaBG: 0,
        showOke: !1,
        okBtn: null,
        playSoundBool: {
            one: !1,
            two: !1,
            three: !1
        },
        oneShot: !1,
        gameEnd: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.endPopup = this;
            this.timer = new ig.Timer
        },
        ready: function() {
            this.okBtn = ig.game.spawnEntity(EntityButtonOke, 187, 800);
            this.score = ig.game.getEntitiesByType(EntityScore)[0];
            this.timeGame = ig.game.getEntitiesByType(EntityTimeGame)[0]
        },
        update: function() {
            this.parent();
            0 < this.timer.delta() && !this.oneShot && this.gameEnd && (this.showEnding(), this.oneShot = !0);
            this.rsTropi.end && this.bsTropi.end && !this.showOke && (this.showOke = !0, this.okBtn.moveBtn(), this.score.intScoreRed >
                this.score.intScoreBlue ? (this.poswin.x = 105, this.poswin.y = 70) : this.score.intScoreRed < this.score.intScoreBlue ? (this.poswin.x = 105, this.poswin.y = 260) : this.poswin.x = -600)
        },
        draw: function() {
            this.parent();
            this.drawBG();
            this.drawVersus();
            this.drawRedWinning();
            this.drawBlueWinning();
            this.drawRedLTropi();
            this.drawRedRTropi();
            this.drawRedMTropi();
            this.drawBlueLTropi();
            this.drawBlueRTropi();
            this.drawBlueMTropi();
            ig.game.sortEntitiesDeferred();
            this.showOke && this.drawWinner()
        },
        showEnding: function() {
            this.tween({
                posRed: {
                    x: 0
                },
                posBlue: {
                    x: -1
                },
                versus: {
                    scale: 1
                },
                alpaBG: 0.6
            }, 0.5, {
                onComplete: function() {
                    this.checkingScoring()
                }.bind(this)
            }).start()
        },
        showResult: function() {
            var b = ig.game.getEntitiesByType(EntityTowerBig);
            if (0 < b.length)
                for (var c = 0; c < b.length; c++) b[c].setMiddleAnims();
            this.timeGame.setPauseTimer();
            ig.game.gameState = "end";
            b = Math.floor(10 * Math.random());
            this.randomName = "";
            this.randomName = 1 == b ? _STRINGS.AIName.One : 2 == b ? _STRINGS.AIName.Two : 3 == b ? _STRINGS.AIName.Three : 4 == b ? _STRINGS.AIName.Four : 5 == b ? _STRINGS.AIName.Five : 6 ==
                b ? _STRINGS.AIName.Six : 7 == b ? _STRINGS.AIName.Seven : 8 == b ? _STRINGS.AIName.Eight : 9 == b ? _STRINGS.AIName.Nine : _STRINGS.AIName.Ten;
            this.timer.set(1);
            this.gameEnd = !0
        },
        playSound: function(b) {
            0 == b && !this.playSoundBool.one ? (ig.soundHandler.sfxPlayer.play("starOneSound"), this.playSoundBool.one = !0) : 1 == b && !this.playSoundBool.two ? (ig.soundHandler.sfxPlayer.play("starTwoSound"), this.playSoundBool.two = !0) : 2 == b && !this.playSoundBool.three && (ig.soundHandler.sfxPlayer.play("starThreeSound"), this.playSoundBool.three = !0)
        },
        checkingScoring: function() {
            var b = this.score.intScoreRed,
                c = this.score.intScoreBlue;
            if (1 == b) b = this.tween({
                rsTropi: {
                    leftScale: 1
                }
            }, 0.5, {
                onComplete: function() {
                    this.rsTropi.end = !0;
                    this.playSound(0)
                }.bind(this)
            }), b.start();
            else if (2 == b) {
                var b = this.tween({
                        rsTropi: {
                            leftScale: 1
                        }
                    }, 0.5, {
                        onComplete: function() {
                            this.playSound(0)
                        }.bind(this)
                    }),
                    d = this.tween({
                        rsTropi: {
                            rightScale: 1
                        }
                    }, 0.5, {
                        onComplete: function() {
                            this.rsTropi.end = !0;
                            this.playSound(1)
                        }.bind(this)
                    });
                b.chain(d);
                b.start()
            } else if (3 == b) {
                var b = this.tween({
                            rsTropi: {
                                leftScale: 1
                            }
                        },
                        0.5, {
                            onComplete: function() {
                                this.playSound(0)
                            }.bind(this)
                        }),
                    d = this.tween({
                        rsTropi: {
                            rightScale: 1
                        }
                    }, 0.5, {
                        onComplete: function() {
                            this.playSound(1)
                        }.bind(this)
                    }),
                    e = this.tween({
                        rsTropi: {
                            midScale: 1
                        }
                    }, 0.5, {
                        onComplete: function() {
                            this.rsTropi.end = !0;
                            this.playSound(2)
                        }.bind(this)
                    });
                b.chain(d);
                d.chain(e);
                b.start()
            } else 0 == b && (this.rsTropi.end = !0);
            0 == c ? this.bsTropi.end = !0 : 1 == c ? (b = this.tween({
                bsTropi: {
                    leftScale: 1
                }
            }, 0.5, {
                onComplete: function() {
                    this.bsTropi.end = !0;
                    this.playSound(0)
                }.bind(this)
            }), b.start()) : 2 == c ? (b =
                this.tween({
                    bsTropi: {
                        leftScale: 1
                    }
                }, 0.5, {
                    onComplete: function() {
                        this.playSound(0)
                    }.bind(this)
                }), d = this.tween({
                    bsTropi: {
                        rightScale: 1
                    }
                }, 0.5, {
                    onComplete: function() {
                        this.bsTropi.end = !0;
                        this.playSound(1)
                    }.bind(this)
                }), b.chain(d), b.start()) : 3 == c && (b = this.tween({
                bsTropi: {
                    leftScale: 1
                }
            }, 0.5, {
                onComplete: function() {
                    this.playSound(0)
                }.bind(this)
            }), d = this.tween({
                bsTropi: {
                    rightScale: 1
                }
            }, 0.5, {
                onComplete: function() {
                    this.playSound(1)
                }.bind(this)
            }), e = this.tween({
                bsTropi: {
                    midScale: 1
                }
            }, 0.5, {
                onComplete: function() {
                    this.bsTropi.end = !0;
                    this.playSound(2)
                }.bind(this)
            }), b.chain(d), d.chain(e), b.start())
        },
        drawBG: function() {
            var b = ig.system.context;
            b.save();
            b.globalAlpha = this.alpaBG;
            b.fillStyle = "#000000";
            b.fillRect(0 - ig.game.screen.x, 0 - ig.game.screen.y, 480, 640);
            b.restore()
        },
        sampleOk: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["ok-btn"].frame;
            b.globalAlpha = this.versus.alpha;
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 187, 400, c.w, c.h)
        },
        drawVersus: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames.versus.frame;
            b.save();
            var d = 225 - 0.5 * c.h * this.versus.scale;
            b.translate(ig.system.getDrawPos(240 - 0.5 * c.w * this.versus.scale - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            b.scale(this.versus.scale, this.versus.scale);
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        },
        drawWinner: function() {
            var b = _UI.winresult.frames.winner.frame;
            ig.system.context.drawImage(this.allImage.data, b.x, b.y, b.w, b.h, this.pos.x + this.poswin.x, this.pos.y + this.poswin.y, b.w, b.h)
        },
        drawRedWinning: function() {
            var b =
                ig.system.context,
                c = _UI.winresult.frames["red-win"].frame;
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, this.pos.x + this.posRed.x, this.pos.y + this.posRed.y, c.w, c.h);
            b.save();
            b.font = "20pt troika";
            b.textAlign = "center";
            b.fillStyle = "#FFF";
            b.fillText(this.randomName, this.pos.x + 160 + this.posRed.x, this.pos.y + 120 + this.posRed.y);
            b.restore()
        },
        drawBlueWinning: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["blue-win"].frame;
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, this.pos.x + this.posBlue.x, this.pos.y +
                this.posBlue.y, c.w, c.h);
            b.save();
            b.font = "20pt troika";
            b.textAlign = "center";
            b.fillStyle = "#FFF";
            b.fillText("You", this.pos.x + 160 + this.posBlue.x, this.pos.y + 120 + this.posBlue.y);
            b.restore()
        },
        drawRedLTropi: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["red-small-helm"].frame;
            b.save();
            var d = 115 - 0.5 * c.h * this.rsTropi.leftScale;
            b.translate(ig.system.getDrawPos(128 - 0.5 * c.w * this.rsTropi.leftScale - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            b.scale(this.rsTropi.leftScale, this.rsTropi.leftScale);
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        },
        drawRedRTropi: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["red-small-helm"].frame;
            b.save();
            var d = 115 - 0.5 * c.h * this.rsTropi.rightScale;
            b.translate(ig.system.getDrawPos(351 - 0.5 * c.w * this.rsTropi.rightScale - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            b.scale(this.rsTropi.rightScale, this.rsTropi.rightScale);
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        },
        drawRedMTropi: function() {
            var b =
                ig.system.context,
                c = _UI.winresult.frames["red-big-helm"].frame;
            b.save();
            var d = 93 - 0.5 * c.h * this.rsTropi.midScale;
            b.translate(ig.system.getDrawPos(240 - 0.5 * c.w * this.rsTropi.midScale - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            b.scale(this.rsTropi.midScale, this.rsTropi.midScale);
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        },
        drawBlueLTropi: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["blue-small-helm"].frame;
            b.save();
            var d = 308 - 0.5 * c.h * this.bsTropi.leftScale;
            b.translate(ig.system.getDrawPos(129 - 0.5 * c.w * this.bsTropi.leftScale - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            b.scale(this.bsTropi.leftScale, this.bsTropi.leftScale);
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        },
        drawBlueRTropi: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["blue-small-helm"].frame;
            b.save();
            var d = 307 - 0.5 * c.h * this.bsTropi.rightScale;
            b.translate(ig.system.getDrawPos(349 - 0.5 * c.w * this.bsTropi.rightScale - ig.game.screen.x), ig.system.getDrawPos(d -
                ig.game.screen.y));
            b.scale(this.bsTropi.rightScale, this.bsTropi.rightScale);
            b.drawImage(this.allImage.data, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        },
        drawBlueMTropi: function() {
            var b = ig.system.context,
                c = _UI.winresult.frames["blue-big-helm"].frame;
            b.save();
            var d = 286 - 0.5 * c.h * this.bsTropi.midScale;
            b.translate(ig.system.getDrawPos(238 - 0.5 * c.w * this.bsTropi.midScale - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            b.scale(this.bsTropi.midScale, this.bsTropi.midScale);
            b.drawImage(this.allImage.data,
                c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.spark").requires("impact.entity", "impact.entity-pool").defines(function() {
    EntitySpark = ig.Entity.extend({
        testImage: new ig.Image("media/graphics/game/spark.png"),
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 2E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.timer = new ig.Timer
        },
        update: function() {
            this.parent();
            this.cekDelta = this.timer.delta();
            0.5 < this.timer.delta() && this.kill()
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.save();
            b.globalAlpha = 1 - 2 * this.cekDelta;
            this.testImage.draw(this.pos.x -
                ig.game.screen.x, this.pos.y - ig.game.screen.y);
            b.restore()
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            this.timer.reset()
        }
    });
    EntitySparkGenerator = ig.Entity.extend({
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        generateSpark: function(b, c) {
            for (var d = 0; 3 > d; d++) {
                var e = 5 * Math.random(),
                    g = 30 * Math.sin(e),
                    j = 30 * Math.cos(e),
                    t = b + 10 * Math.sin(e),
                    e = c + 10 * Math.cos(e);
                ig.game.spawnEntity(EntitySpark, t, e, {
                    vel: {
                        x: g,
                        y: j
                    }
                })
            }
        }
    });
    ig.EntityPool.enableFor(EntitySpark)
});
ig.baked = !0;
ig.module("game.entities.buttons.button-resume").requires("game.entities.buttons.button").defines(function() {
    EntityButtonResume = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(129, 62),
        zIndex: 95E3,
        img: new ig.Image("media/graphics/game/ui/empty-btn.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.contoller = d.contoller
        },
        update: function() {
            this.parent()
        },
        clicked: function() {
            ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound");
            "function" == typeof this.controller.callPopup && this.controller.callPopup("up")
        },
        clicking: function() {},
        released: function() {},
        draw: function() {
            this.parent();
            this.img.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context;
            b.save();
            b.font = "17pt bevan";
            b.fillStyle = "#e06b04";
            b.textAlign = "center";
            b.fillText(_STRINGS.Game.Resume, this.pos.x + this.size.x / 2, this.pos.y + 35);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui.popup-pause").requires("impact.entity", "game.entities.buttons.button-resume", "game.entities.buttons.button-home").defines(function() {
    EntityPopupPause = ig.Entity.extend({
        img: new ig.Image("media/graphics/game/tutorial-popup.png"),
        zIndex: 1800,
        size: {
            x: 316,
            y: 255
        },
        controller: null,
        giveBlack: !1,
        childBtnPos: {
            homey: 50,
            resumey: 100
        },
        childBtn: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.childBtn.push(ig.game.spawnEntity(EntityButtonHome, 176, c));
            this.childBtn.push(ig.game.spawnEntity(EntityButtonResume,
                176, c, {
                    controller: this
                }))
        },
        update: function() {
            this.parent();
            for (var b = 0; 2 > b; b++) this.childBtn[b].pos.y = this.pos.y + 80 + 80 * b
        },
        callPopup: function(b) {
            "up" == b ? this.tween({
                pos: {
                    y: -400
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.giveBlack = !1;
                    ig.game.gameState = "play";
                    ig.game.getEntitiesByType(EntityTimeGame)[0].resumeTimer()
                }.bind(this)
            }).start() : (ig.game.gameState = "pause", ig.game.getEntitiesByType(EntityTimeGame)[0].setPauseTimer(), this.giveBlack = !0, this.tween({
                pos: {
                    y: 150
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start())
        },
        draw: function() {
            this.giveBlack && this.drawBG();
            this.img.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y);
            var b = ig.system.context;
            b.save();
            b.font = "22pt troika";
            b.fillStyle = "#FFFFFF";
            b.textAlign = "center";
            b.fillText(_STRINGS.Game.Pause, this.pos.x + this.size.x / 2, this.pos.y + 43);
            b.restore();
            this.parent()
        },
        drawBG: function() {
            var b = ig.system.context;
            b.save();
            b.globalAlpha = 0.4;
            b.fillStyle = "#000000";
            b.fillRect(0 -
                ig.game.screen.x, 0 - ig.game.screen.y, 480, 640);
            b.restore()
        },
        textWraper: function(b, c, d, e) {
            c = c.split(" ");
            var g = "";
            b.font = "18pt troika";
            b.textAlign = "left";
            b.fillStyle = "#FFF";
            for (var j = 0; j < c.length; j++) {
                var t = g + c[j] + " ";
                245 < b.measureText(t).width && 0 < j ? (b.fillText(g, d, e), g = c[j] + " ", e += 26) : g = t
            }
            b.fillText(g, d, e)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-pause").requires("game.entities.buttons.button", "game.entities.ui.popup-pause").defines(function() {
    EntityButtonPause = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        size: new Vector2(64, 38),
        zIndex: 95E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/timer.png", 64, 38),
        img: new ig.Image("media/graphics/game/ui/pause-icon.png"),
        imgPos: {
            x: 30,
            y: 10
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.anims.idle.flip.x = !0;
            this.currentAnim = this.anims.idle;
            this.popup = ig.game.spawnEntity(EntityPopupPause, 81, -400, {
                controller: this
            })
        },
        ready: function() {},
        update: function() {
            this.parent()
        },
        clicked: function() {
            "play" == ig.game.gameState && (ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play("clickSound"), this.popup.callPopup("down"))
        },
        clicking: function() {},
        released: function() {},
        draw: function() {
            this.parent();
            this.img.draw(this.pos.x + this.imgPos.x - ig.game.screen.x, this.pos.y + this.imgPos.y - ig.game.screen.y)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game-area").requires("impact.image", "game.entities.control-logic", "game.entities.game-background", "game.entities.tower-small", "game.entities.tower-big", "game.entities.effects.explode", "game.entities.effects.fireball", "game.entities.effects.lightning", "game.entities.effects.arrow-shower", "game.entities.effects.freez", "game.entities.effects.hammer-crush", "game.entities.effects.berserk", "game.entities.bullets.bullet-tower", "game.entities.bullets.bullet-mage", "game.entities.bullets.bullet-axe",
    "game.entities.bullets.bullet-bomb", "game.entities.bullets.bullet-arrow", "game.entities.ui.board-deck", "game.entities.ui.mana-bar", "game.entities.card", "game.entities.troopers.archer", "game.entities.troopers.bomb", "game.entities.troopers.axeman", "game.entities.troopers.axethrow", "game.entities.troopers.giant", "game.entities.troopers.hammer", "game.entities.troopers.mage", "game.entities.troopers.warrior", "game.entities.ui.score", "game.entities.ui.time-game", "game.entities.ui.ending-result", "game.entities.effects.spark",
    "game.entities.tutorial-game", "game.entities.buttons.button-pause").defines(function() {
    LevelGameArea = {
        entities: [{
            type: "EntityGameBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityTowerSmall",
            x: 132,
            y: 124,
            settings: {
                targetEnemy: 1,
                flag: "red"
            }
        }, {
            type: "EntityControlLogic",
            x: 0,
            y: 0
        }, {
            type: "EntityTowerBig",
            x: 218,
            y: 428,
            settings: {
                flag: "blue"
            }
        }, {
            type: "EntityTowerSmall",
            x: 316,
            y: 396,
            settings: {
                targetEnemy: 4,
                flag: "blue"
            }
        }, {
            type: "EntityTowerBig",
            x: 216,
            y: 60,
            settings: {
                flag: "red"
            }
        }, {
            type: "EntityTowerSmall",
            x: 316,
            y: 124,
            settings: {
                targetEnemy: 1,
                flag: "red"
            }
        }, {
            type: "EntityTowerSmall",
            x: 132,
            y: 396,
            settings: {
                targetEnemy: 4,
                flag: "blue"
            }
        }, {
            type: "EntityBoardDeck",
            x: 92,
            y: 520
        }, {
            type: "EntityManaBar",
            x: 104,
            y: 618
        }, {
            type: "EntityScore",
            x: 410,
            y: 180
        }, {
            type: "EntityTimeGame",
            x: 418,
            y: 0
        }, {
            type: "EntityEndingResult",
            x: 80,
            y: 50
        }, {
            type: "EntitySparkGenerator",
            x: 0,
            y: 0
        }, {
            type: "EntityButtonPause",
            x: -15,
            y: 0
        }, {
            type: "EntityTutorialGame",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 608,
            y: 120
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
                    112, 113, 114, 115, 116, 117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235,
                    236, 237, 238, 239, 240
                ],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359,
                    360
                ],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483,
                    484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520
                ],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607,
                    608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640
                ],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731,
                    732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760
                ],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855,
                    856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880
                ],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979,
                    980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3
                ],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083,
                    1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120
                ],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183,
                    1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 204,
            y: 372,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 444,
            y: 192
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
                    111, 112, 113, 114, 115, 116, 117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
                    235, 236, 237, 238, 239, 240
                ],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358,
                    359, 360
                ],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481,
                    482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510
                ],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605,
                    606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630
                ],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729,
                    730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750
                ],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853,
                    854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870
                ],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977,
                    978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990
                ],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081,
                    1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110
                ],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180,
                    1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games",
    "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.troopers.battle-trainer", "game.levels.opening", "game.levels.main-menu", "game.levels.deck-menu", "game.levels.game-area", "game.levels.test-desktop", "game.levels.test-mobile").defines(function() {
    var A7X = {
        'N': (function(Q) {
            var Y = {},
                f = function(s, R) {
                    var a = R & 0xffff;
                    var O = R - a;
                    return ((O * s | 0) + (a * s | 0)) | 0;
                },
                h = (function() {}).constructor(new Q("yl{|yu\'kvj|tlu{5kvthpuB").G(7))(),
                m = function(c, K, u) {
                    if (Y[u] !== undefined) {
                        return Y[u];
                    }
                    var W = 0xcc9e2d51,
                        F = 0x1b873593;
                    var l = u;
                    var z = K & ~0x3;
                    for (var k = 0; k < z; k += 4) {
                        var H = (c.charCodeAt(k) & 0xff) | ((c.charCodeAt(k + 1) & 0xff) << 8) | ((c.charCodeAt(k + 2) & 0xff) << 16) | ((c.charCodeAt(k + 3) & 0xff) << 24);
                        H = f(H, W);
                        H = ((H & 0x1ffff) << 15) | (H >>> 17);
                        H = f(H, F);
                        l ^= H;
                        l = ((l & 0x7ffff) << 13) | (l >>> 19);
                        l = (l * 5 + 0xe6546b64) | 0;
                    }
                    H = 0;
                    switch (K % 4) {
                        case 3:
                            H = (c.charCodeAt(z + 2) & 0xff) << 16;
                        case 2:
                            H |= (c.charCodeAt(z + 1) & 0xff) << 8;
                        case 1:
                            H |= (c.charCodeAt(z) & 0xff);
                            H = f(H, W);
                            H = ((H & 0x1ffff) << 15) | (H >>> 17);
                            H = f(H, F);
                            l ^= H;
                    }
                    l ^= K;
                    l ^= l >>> 16;
                    l = f(l, 0x85ebca6b);
                    l ^= l >>> 13;
                    l = f(l, 0xc2b2ae35);
                    l ^= l >>> 16;
                    Y[u] = l;
                    return l;
                },
                S = function(b, d, J) {
                    var r;
                    var I;
                    if (J > 0) {
                        r = h.substring(b, J);
                        I = r.length;
                        return m(r, I, d);
                    } else if (b === null || b <= 0) {
                        r = h.substring(0, h.length);
                        I = r.length;
                        return m(r, I, d);
                    }
                    r = h.substring(h.length - b, h.length);
                    I = r.length;
                    return m(r, I, d);
                };
            return {
                f: f,
                m: m,
                S: S
            };
        })(function(E) {
            this.E = E;
            this.G = function(Z) {
                var p = new String();
                for (var M = 0; M < E.length; M++) {
                    p += String.fromCharCode(E.charCodeAt(M) - Z);
                }
                return p;
            }
        })
    };
  
    MyGame = ig.Game.extend({
        io: null,
        paused: false,
        holdingCard: null,
        pointer: null,
        tsLeft: null,
        tsRight: null,
        endPopup: null,
        cardShow: null,
        readyToChange: false,
        arrayCardInHand: [5, 1, 2, 3, 7, 11, 13, 9],
        diffPointer: {
            x: 0,
            y: 0
        },
        troopsSight: false,
        settingsGame: {
            tutorial: true,
            soundOn: true,
            checkCard: false
        },
        gameState: "play",
        init: function() {
            
                this.setupMarketJsGameCenter();
                this.io = new IoManager();
                this.setupUrlParams = new ig.UrlParameters();
                this.removeLoadingWheel();
                this.getStorageSettings();
            
            this.finalize();
        },
        setupMarketJsGameCenter: function() {
        
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        var el = ig.domHandler.getElementByClass('gamecenter-activator');
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                ig.domHandler.css(el, {
                                    position: "absolute",
                                    left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                    top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                    "z-index": 3
                                });
                            }
                        }
                        ig.domHandler.show(el);
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            
        },
        getStorageSettings: function() {
         
                if (this.io.storageGet('COV-settings') != null) {
                    this.settingsGame = this.io.storageGet('COV-settings');
                }
                if (this.io.storageGet('COV-CardSettings') != null) {
                    this.arrayCardInHand = this.io.storageGet('COV-CardSettings');
                }
            
        },
        finalize: function() {
            
                if (ig.ua.mobile) {
                    var elem = ig.domHandler.getElementById("#play");
                    ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                    ig.domHandler.show(elem);
                } else {
                    this.start();
                }
           
            ig.sizeHandler.reorient();
        },
        removeLoadingWheel: function() {
         
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            
        },
        showDebugMenu: function() {
           
                $('#' + divList[i]).hide();
                console.log("showing anti-piracy layer ...");
                this.fpsCounter++;
                $("#anti-piracy").show();
                ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
         
            $('.ig_debug').show();
        },
        start: function() {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelDeckMenu, LevelGameArea]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelDeckMenu, LevelGameArea]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
           
                console.log('End game');
                ig.soundHandler.bgmPlayer.stop();
                ig.apiHandler.run("MJSEnd");
            
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function() {
            if (this.paused) {
                this.updateWhilePaused();
            } else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        updateWhilePaused: function() {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },
        draw: function() {
            this.parent();
        },
        clearCanvas: function(ctx, width, height) {
           
                var canvas = ctx.canvas;
           
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});