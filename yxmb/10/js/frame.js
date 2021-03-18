var arr = []; //声明全局变量保存一下每次重新加载的方块类；
function getId(id) {
    return document.getElementById(id);
} //封装ID
function C(cls) {
    return document.getElementsByClassName(cls);
} //封装标签名字

var obj = { //创建一个游戏对象
    ROW: 4, //游戏行数
    CELL: 4, //游戏列数
    r: 0, //当前行
    c: 0, //当前列
    f: 0, //查找下一次
    keyCd: 0, //按键
    score: 0, //分数
    createEle: 0, //是否需要创建元素
    eleFragment: "", //文档片段变量
    //进入游戏
    gameStart: function() {
        obj.init();
        obj.musicplay(1)
        document.onkeydown = function(e) { //自动获得事件对象
            switch (e.keyCode) { //判断按键号
                case 37:
                    obj.keyCd = 1;
                    obj.moveLeft();
                    obj.musicplay(3);
                    break;
                case 38:
                    obj.keyCd = 2;
                    obj.moveUp();
                    obj.musicplay(3);
                    break;
                case 39:
                    obj.keyCd = 1;
                    obj.moveRight();
                    obj.musicplay(3);
                    break;
                case 40:
                    obj.keyCd = 2;
                    obj.moveDown();
                    obj.musicplay(3);
                    break;
            }
            getId("score").innerHTML = obj.score; //更新分数
        }

    },
    musicplay: function(num) {
        var a1024 = getId("a1024");
        var a512 = getId("a512");
        var loser = getId("lose");
        var a2 = getId("a2");
        var winner = getId("winner");
        switch (num) {
            case 0:
                a1024.play();
                break;
            case 1:
                a512.play();
                break;
            case 2:
                loser.play();
                break;
            case 3:
                a2.play();
                break;
            case 4:
                winner.play();
                break;
        }
    },
    buttonsclick: function(event) {
        var but1 = getId("buton1");
        var but2 = getId("buton2");
        var but3 = getId("buton3");
        var but4 = getId("buton4");
        but1.onclick = function() {
            obj.keyCd = 2;
            obj.moveUp();
            obj.musicplay(3);
            getId("score").innerHTML = obj.score;
        }
        but2.onclick = function() {
            obj.keyCd = 1;
            obj.moveLeft();
            obj.musicplay(3);
            getId("score").innerHTML = obj.score;
        }
        but3.onclick = function() {
            obj.keyCd = 2;
            obj.moveDown();
            obj.musicplay(3);
            getId("score").innerHTML = obj.score;
        }
        but4.onclick = function() {
            obj.keyCd = 1;
            obj.moveRight();
            obj.musicplay(3);
            getId("score").innerHTML = obj.score;
        }
    },
    //生成表格，动态创建
    init: function() {
        obj.eleFragment = document.createDocumentFragment(); //创建ul元素
        for (r = 0; r < obj.ROW; r++) {
            arr.push([]);
            for (c = 0; c < obj.CELL; c++) {
                arr[r][c] = 0;
                if (obj.createEle == 1) {
                    obj.create(r, c);
                }
            }
        }
        if (obj.createEle == 1) {
            obj.createEle = 0;
            getId("gridPanel").innerHTML = ""; //清空原有的元素
            getId("gridPanel").appendChild(obj.eleFragment); //添加元素
        }
        obj.score = 0;
        getId("score").innerHTML = obj.score;
        getId("game").style.display = "none";
        getId("gameover").style.display = "none";
        obj.random(); //开始游戏随机生成两个数
        obj.random();
        obj.updateView();
    },
    create: function(r, c) {
        var grid, cell;
        var increment = 14,
            grWidth, grHeight, grMarginTop, grMarginLeft, ceWidth, ceHight;
        grid = document.createElement("div");
        cell = document.createElement("div");
        grid.id = "g" + r + c;
        grid.className = "grid";
        cell.id = "c" + r + c;
        cell.className = "cell";

        if (obj.ROW == 3) {
            increment = 24;
        } else if (obj.ROW == 4) {
            increment = 18;
        }
        grWidth = grHeight = ceWidth = ceHight = 66 + (6 - obj.ROW) * increment; //优化后
        grMarginTop = grMarginLeft = (480 - grWidth * obj.ROW) / (obj.ROW + 1);
        grid.style.width = grWidth + "px";
        grid.style.height = grHeight + "px";
        grid.style.marginTop = grMarginTop + "px";
        grid.style.marginLeft = grMarginLeft + "px";
        cell.style.width = ceWidth + "px";
        cell.style.height = ceHight + "px";
        cell.style.top = grMarginTop + r * (grMarginTop + ceWidth) + "px";
        cell.style.left = grMarginLeft + c * (grMarginLeft + ceHight) + "px";
        cell.style.lineHeight = ceHight + "px";
        cell.style.fontSize = 15 + (6 - obj.ROW) * 10 + "px";
        cell.style.transition = 1 + "s";

        obj.eleFragment.appendChild(grid);
        obj.eleFragment.appendChild(cell);
    },
    random: function() {
        while (1) {
            var row = Math.floor(Math.random() * obj.ROW);
            var cell = Math.floor(Math.random() * obj.CELL);
            if (arr[row][cell] == 0) { //判断生成的随机数位置为0才随机生成2或4
                arr[row][cell] = (Math.random() > 0.5) ? 4 : 2;
                break;
            }
        }
    },
    //更新页面
    updateView: function() {
        var win = 0;
        for (r = 0; r < obj.ROW; r++) {
            for (c = 0; c < obj.CELL; c++) {
                if (arr[r][c] == 0) { //值为0的不显示
                    getId("c" + r + c).innerHTML = ""; //0不显示
                    getId("c" + r + c).className = "cell" //清除样式
                } else {
                    getId("c" + r + c).innerHTML = arr[r][c];
                    getId("c" + r + c).className = "cell n" + arr[r][c]; //添加不同数字的颜色
                    if (obj.ROW == 3 && arr[r][c] == 1024) {
                        win = 1;
                    } else if (obj.ROW == 4 && arr[r][c] == 2048) {
                        win = 1;
                    } else if (obj.ROW == 5 && arr[r][c] == 4096) {
                        win = 1;
                    } else if (obj.ROW == 6 && arr[r][c] == 8192) {
                        win = 1;
                    }
                }
            }
        }
        if (win == 1) { //通关
            obj.musicplay(4)
            getId("game").style.display = "block";
            getId("gameover").style.display = "block";
            getId("Score").innerHTML = "You win!<br>Score:" + obj.score;
        }
        if (obj.isGameOver()) { //游戏失败
            obj.musicplay(2)
            getId("game").style.display = "block";
            getId("gameover").style.display = "block";
            getId("Score").innerHTML = "GAME OVER!<br>Score:" + obj.score;

        }
    },
    //游戏失败
    isGameOver: function() {
        for (r = 0; r < obj.ROW; r++) {
            for (c = 0; c < obj.CELL; c++) {
                if (arr[r][c] == 0) { //有0还不是gameover
                    return false;
                } else if (c != obj.CELL - 1 && arr[r][c] == arr[r][c + 1]) { //左往右  前一个和下一个不相等
                    obj.musicplay(3);
                } else if (r != obj.ROW - 1 && arr[r][c] == arr[r + 1][c]) { //上往下 上一个和下一个不相等
                    return false;
                }
            }
        }

        return true;
    },
    //查找下一个不为0的数值的位置
    find: function(r, c, start, condition, direction) {
        if (obj.keyCd == 2) { //上下按键
            if (direction == 1) { //向上按键  f++
                for (var f = start; f < condition; f += direction) {
                    if (arr[f][c] != 0) {
                        return f;
                    }
                }
            } else { //向下按键 f--
                for (var f = start; f >= condition; f += direction) {
                    if (arr[f][c] != 0) {
                        return f;
                    }
                }
            }

        } else { //左右按键
            if (direction == 1) { //左按键   f++
                for (var f = start; f < condition; f += direction) {
                    if (arr[r][f] != 0) {
                        return f;
                    }
                }
            } else { //右按键  f--
                for (var f = start; f >= condition; f += direction) {
                    if (arr[r][f] != 0) {
                        return f;
                    }
                }
            }
        }
        return null; //循环结束仍然没有找到！=0的数值，返回null
    },
    dealToLeft: function(r) {
        var next;
        for (c = 0; c < obj.ROW; c++) {
            next = obj.find(r, c, c + 1, obj.CELL, 1); //找出第一个不为0的位置
            if (next == null) break; //没有找到就返回
            //如果当前位置为0
            if (arr[r][c] == 0) {
                arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值
                arr[r][next] = 0; //找到的位置清0
                c--; //再次循环多一次，查看后面否有值与替换后的值相同，
            } else if (arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加
                arr[r][c] *= 2;
                arr[r][next] = 0;
                obj.score += arr[r][c];
            }
        }
    },
    move: function(itertor) {
        var before, //没处理前
            after; //after处理后
        before = arr.toString();
        itertor(); //执行for函数
        after = arr.toString();
        if (before != after) { //前后对比，如果不同就update
            obj.random();
            obj.updateView();

        }
    },
    moveLeft: function() {
        obj.move(function() {
            for (r = 0; r < obj.ROW; r++) {
                obj.dealToLeft(r);
            }
        })
        // if 当前位置 不为零
        // 从当前位置，下一个成员开始，遍历，
        // 如果找到，与当前位置相等的数，
        // 两者相加，并把不为零的成员，设置为零
        // 如果 当前位置是 零
        // 从当前位置下一个成员开始遍历
        // 如果找到 第一个不为零的成员
        // 当前位置数值设置为这个不为零的成员的值 ，并且把那个不为零的成员设置为 0
    },
    //右按键处理
    dealToRight: function(r) {
        var next;
        for (c = obj.CELL - 1; c >= 0; c--) {
            next = obj.find(r, c, c - 1, 0, -1); //找出第一个不为0的位置
            if (next == null) break; //没有找到就返回
            //如果当前位置为0
            if (arr[r][c] == 0) {
                arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值
                arr[r][next] = 0; //找到的位置清0
                c++; //再次循环多一次，查看后面否有值与替换后的值相同，
            } else if (arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加
                arr[r][c] *= 2;
                arr[r][next] = 0;
                obj.score += arr[r][c];
            }
        }
    },
    moveRight: function() {
        obj.move(function() {
            for (r = 0; r < obj.ROW; r++) {
                obj.dealToRight(r);
            }
        })
    },
    //上按键处理
    dealToUp: function(c) {
        var next;
        for (r = 0; r < obj.ROW; r++) {
            next = obj.find(r, c, r + 1, obj.ROW, 1); //找出第一个不为0的位置
            if (next == null) break;
            //如果当前位置为0
            if (arr[r][c] == 0) {
                arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
                arr[next][c] = 0; //找到的位置清0
                r--; //再次循环多一次，查看后面否有值与替换后的值相同
            } else if (arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
                arr[r][c] *= 2;
                arr[next][c] = 0;
                obj.score += arr[r][c];
            }
        }
    },
    moveUp: function() {
        obj.move(function() {
            for (c = 0; c < obj.CELL; c++) {
                obj.dealToUp(c);
            }
        })
    },
    //下按键处理
    dealToDown: function(c) {
        var next;
        for (r = obj.ROW - 1; r >= 0; r--) {
            next = obj.find(r, c, r - 1, 0, -1); //找出第一个不为0的位置
            if (next == null) {
                break;
            }
            //如果当前位置为0
            if (arr[r][c] == 0) {
                arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
                arr[next][c] = 0; //找到的位置清0
                r++; //再次循环多一次，查看后面否有值与替换后的值相同
            } else if (arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
                arr[r][c] *= 2;
                arr[next][c] = 0;
                obj.score += arr[r][c];
            }
        }
    },
    moveDown: function() { //最后一个方法
        obj.move(function() {
            for (c = 0; c < obj.CELL; c++) {
                obj.dealToDown(c);
            }
        })
    }
}
window.onload = function() {
    obj.createEle = 1;
    obj.gameStart();
    obj.buttonsclick();
}

function getModel(e) { //事件冒泡获取a元素
    var a = e.target,
        modelValue = 4;
    if (a.nodeName == "A") {
        if (a.innerHTML == "3X3") {
            modelValue = 3;
        } else if (a.innerHTML == "4X4") {
            modelValue = 4;
        } else if (a.innerHTML == "5X5") {
            modelValue = 5;
        } else if (a.innerHTML == "6X6") {
            modelValue = 6;
        }
        obj.ROW = obj.CELL = modelValue;
        obj.createEle = 1; //需要创建格子div元素的标志
        obj.gameStart();
    }
}