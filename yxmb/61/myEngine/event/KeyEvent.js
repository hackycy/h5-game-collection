/**
 * 键盘事件管理
 */
(function() {

    var KeyEvent = function() {
    }
    /**
     * 按键与ascii码对应表
     */
    KeyEvent.__keyCodeMap = {
        VK_ESCAPE : 27, // ESC键
        VK_RETURN : 13, // 回车键
        VK_TAB : 9, // TAB键
        VK_CAPITAL : 20, // Caps Lock键
        VK_SHIFT : 16, // Shift键
        VK_CONTROL : 17, // Ctrl键
        VK_MENU : 18, // Alt键
        VK_SPACE : 32, // 空格键
        VK_BACK : 8, // 退格键
        VK_LWIN : 91, // 左徽标键
        VK_RWIN : 92, // 右徽标键
        K_APPS : 93, // 鼠标右键快捷键

        VK_INSERT : 45, // Insert键
        VK_HOME : 36, // Home键
        VK_PRIOR : 33, // Page Up
        VK_NEXT : 34, // Page Down
        VK_END : 35, // End键
        VK_DELETE : 46, // Delete键
        VK_LEFT : 37, // 方向键(←)
        VK_UP : 38, // 方向键(↑)
        VK_RIGHT : 39, // 方向键(→)
        VK_DOWN : 40, // 方向键(↓)

        VK_F1 : 112, // F1键
        VK_F2 : 113, // F2键
        VK_F3 : 114, // F3键
        VK_F4 : 115, // F4键
        VK_F5 : 116, // F5键
        VK_F6 : 117, // F6键
        VK_F7 : 118, // F7键
        VK_F8 : 119, // F8键
        VK_F9 : 120, // F9键
        VK_F10 : 121, // F10键
        VK_F11 : 122, // F11键
        VK_F12 : 123, // F12键

        VK_NUMLOCK : 144, // Num Lock键
        VK_NUMPAD0 : 96, // 小键盘0
        VK_NUMPAD1 : 97, // 小键盘1
        VK_NUMPAD2 : 98, // 小键盘2
        VK_NUMPAD3 : 99, // 小键盘3
        VK_NUMPAD4 : 100, // 小键盘4
        VK_NUMPAD5 : 101, // 小键盘5
        VK_NUMPAD6 : 102, // 小键盘6
        VK_NUMPAD7 : 103, // 小键盘7
        VK_NUMPAD8 : 104, // 小键盘8
        VK_NUMPAD9 : 105, // 小键盘9
        VK_DECIMAL : 110, // 小键盘.
        VK_MULTIPLY : 106, // 小键盘*
        VK_PLUS : 107, // 小键盘+
        VK_SUBTRACT : 109, // 小键盘-
        VK_DIVIDE : 111, // 小键盘/
        VK_PAUSE : 19, // Pause Break键
        VK_SCROLL : 145, // Scroll Lock键

        A : 65, // A键
        B : 66, // B键
        C : 67, // C键
        D : 68, // D键
        E : 69, // E键
        F : 70, // F键
        G : 71, // G键
        H : 72, // H键
        I : 73, // I键
        J : 74, // J键
        K : 75, // K键
        L : 76, // L键
        M : 77, // M键
        N : 78, // N键
        O : 79, // O键
        P : 80, // P键
        Q : 81, // Q键
        R : 82, // R键
        S : 83, // S键
        T : 84, // T键
        U : 85, // U键
        V : 86, // V键
        W : 87, // W键
        X : 88, // X键
        Y : 89, // Y键
        Z : 90, // Z键

        NUMPAD0 : 48, // 0键
        NUMPAD1 : 49, // 1键
        NUMPAD2 : 50, // 2键
        NUMPAD3 : 51, // 3键
        NUMPAD4 : 52, // 4键
        NUMPAD5 : 53, // 5键
        NUMPAD6 : 54, // 6键
        NUMPAD7 : 55, // 7键
        NUMPAD8 : 56, // 8键
        NUMPAD9 : 57 // 9键
    }
    /**
     * 按键状态表
     */
    KeyEvent.__keyDownMap = {};

    /**
     * 添加按键事件监听
     */
    KeyEvent.addListener = function() {
        document.onkeydown = function(e) {
            var e = e || event, code = e.keyCode || e.which;
            KeyEvent.__keyDownMap[code] = true;
        }

        document.onkeyup = function(e) {
            var e = e || event, code = e.keyCode || e.which;
            KeyEvent.__keyDownMap[code] = false;
        }
    }
    /**
     * 移除按键事件监听
     */
    KeyEvent.removeListener = function() {
        document.onkeydown = null;
        document.onkeyup = null;
    }
    /**
     * 检查某个按键是否被按下
     * @param {String} key
     */
    KeyEvent.check = function(key) {
        var code = KeyEvent.__keyCodeMap[key];
        return !!KeyEvent.__keyDownMap[code];  //有undefined值，!!就变为false
    }

    my.KeyEvent = KeyEvent;
})();
