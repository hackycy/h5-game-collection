var JSweeper = JSweeper || function(){};

JSweeper = (function() {
  var Settings = {
    easy: {x: 8, y: 8, mines: 10},
    mid: {x: 16, y: 16, mines: 40},
    hard: {x: 16, y: 30, mines: 99}
  },
  mineMap = [],
  minedBoxes = [],
  resetLevel = 'easy'
  $mineContainer = $('#mine-grid'),
  $mineCount = $('.mine-count'),
  timer = false;

  // Creates the mine in the mine object
  _createMines = function(level) {
    var rows = level.x,
        cols = level.y,
        mines = level.mines,
        i, j, mineIdx;

    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        // button status: 0-> closed, 1-> open, 2-> flagged
        mineMap.push({x: i, y: j, mine: 0, status: 0});
      }
    }

    while (mines) {
      mineIdx = Math.floor(Math.random() * mineMap.length);
      if (mineMap[mineIdx].mine === 0) {
        mineMap[mineIdx].mine = 1;
        minedBoxes.push(mineIdx);
        mines--;
      }
    }
  };

  // Render the board
  _initBoard = function(level) {
    var _level = level || Settings.easy,
        dificulty = (_level.mines === 10) ? 'easy' : ((_level.mines === 40) ? 'mid' : 'hard'),
        i, mine, button;

    $mineContainer.parent().removeClass().addClass(dificulty)
    $mineCount.text(_level.mines)

    _createMines(_level);
    for (i = 0; i < mineMap.length; i++) {
      mine = mineMap[i]
      button = '<button data-x="' + mine.x + '" data-y="' +  mine.y + '">';
      button += '</button>';
      $mineContainer.append(button);
    }
  };

  _startTimer = function() {
    var $timer = $('.timer');
    $timer.text('001');

    timer = setInterval(function() {
      var newCount = parseInt($timer.text(), 10) + 1 + "";
      while (newCount.length < 3) newCount = "0" + newCount;
      $timer.text(newCount);
    }, 1000);
  };

  _stopTimer = function() {
    clearInterval(timer);
    timer = false;
  };

  _getButtonIdx = function(x, y) {
    var index,
        res = mineMap.filter(function(el, idx) {
          if (el.x == x && el.y == y) {
            index = idx;
            return true;
          }
        });
    return (index >= 0) ? index : -1;
  }

  _getMinesInButton = function(x, y) {
    var idx = _getButtonIdx(x, y);
    return (mineMap[idx] && mineMap[idx].mine) || 0
  }

  // Returns the number of mines around the clicked button
  _checkSurroundingMines = function(x, y) {
    var x = parseInt(x, 10),
        y = parseInt(y, 10),
        btn = mineMap[_getButtonIdx(x, y)] || 0,
        topLeft,
        top,
        topRight,
        left,
        right,
        botLeft,
        bottom,
        botRight,
        numMines;

    if (btn && btn.status === 0) {
      topLeft =   _getMinesInButton(x - 1, y - 1);
      top =       _getMinesInButton(x, y - 1);
      topRight =  _getMinesInButton(x + 1, y - 1);
      left =      _getMinesInButton(x - 1, y);
      right =     _getMinesInButton(x + 1, y);
      botLeft =   _getMinesInButton(x - 1, y + 1);
      bottom =    _getMinesInButton(x, y + 1);
      botRight =  _getMinesInButton(x + 1, y + 1);

      numMines = topLeft +
                 top +
                 topRight +
                 left +
                 right +
                 botLeft +
                 bottom +
                 botRight;

      if (numMines && !btn.mine) {
        _openButton(x, y, numMines);
      } else if (!btn.mine) {
        _openButton(x, y);
        //setTimeout(function(){
        _checkSurroundingMines(x - 1, y - 1);
        _checkSurroundingMines(x, y - 1);
        _checkSurroundingMines(x + 1, y - 1);
        _checkSurroundingMines(x - 1, y);
        _checkSurroundingMines(x + 1, y);
        _checkSurroundingMines(x - 1, y + 1);
        _checkSurroundingMines(x, y + 1);
        _checkSurroundingMines(x + 1, y + 1);
        //}, 1000)
      }
    }
  };

  _flagButton = function(evt) {
    evt.preventDefault();
    console.log(timer)
    if (!timer) _startTimer();

    var $el = $(this),
        x = parseInt($el.attr('data-x'), 10),
        y = parseInt($el.attr('data-y'), 10),
        idx = _getButtonIdx(x, y),
        btn = mineMap[idx],
        $btn = $('[data-x='+x+'][data-y='+y+']'),
        mines = parseInt($mineCount.text(), 10);

    if (btn.status === 0) {
      mineMap[idx].status = 2;
      $mineCount.text(mines - 1);
      _hasWon();
    } else if (btn.status === 2) {
      mineMap[idx].status = 0;
      $mineCount.text(mines + 1);
    }
    $btn.toggleClass('flagged');
  }

  // Checks if mine, else triggers checks around the block
  _pressButton = function(evt) {
    var $el, x, y , btnIdx, btn;

    (console.log(timer))
    if (!timer) _startTimer();

    if (evt.which === 1) {
      $el = $(this);
      x = $el.attr('data-x');
      y = $el.attr('data-y');
      btnIdx = _getButtonIdx(x, y);
      btn = mineMap[btnIdx];

      if (btn.mine) {
        _openButton(x, y, 'explode')
        _explodeMines();
      } else {
        _checkSurroundingMines(x, y)
      }
    }


  };

  // Explodes all mines and disables all buttons
  _explodeMines = function() {
    var len = mineMap.length,
        i, btn;
    _stopTimer();
    for (i = 0; i < len; i++) {
      btn = mineMap[i];
      if (btn.mine && btn.status !== 1) {
        _openButton(btn.x, btn.y)
      }
    }
  };

  _allMinesFlagged = function() {
    for (i = 0; i < minedBoxes.length; i++) {
      if (mineMap[minedBoxes[i]].status != 2) { return false; }
    }
    return true;
  };

  _allBoxesOpen = function() {
    var btn;
    for (i = 0; i < mineMap.length; i++) {
      btn = mineMap[i];
      if (!btn.mine) {
        if (btn.status !== 1) {
          return false;
        }
      }
    }
    return true;
  }

  _hasWon = function() {
    if (_allMinesFlagged() || _allBoxesOpen()) {
      _stopTimer();
    }
  }

  _openButton = function(x, y, type) {
    var idx = _getButtonIdx(x, y),
        btn = mineMap[idx],
        $btn = $('[data-x='+x+'][data-y='+y+']');

    if (type === 'explode') {
      $btn.addClass('exploded').append('*');
    } else {
      $btn.addClass('open');
      if (parseInt(type, 10)) {
        $btn.append(type);
      } else if (btn.mine) {
        $btn.append('*');
      }
    }
    mineMap[idx].status = 1;
    _hasWon();
  }

  // Removes the current board and its memory
  _cleanBoard = function() {
    mineMap = [];
    $mineContainer.empty();
  };

  // Wipes the board and creates a new one
  _resetBoard = function(level) {
    _cleanBoard();
    _initBoard(level);
  };

  _initEvents = function() {
    $('.level-select').on('click', 'button', function() {
      var $this = $(this),
          level = $this.attr('data-level');

      _stopTimer();
      resetLevel = level;
      _resetBoard(Settings[level]);
    });

    $mineContainer.on('mousedown', 'button', _pressButton);
    $mineContainer.on('contextmenu', 'button', _flagButton);


    $('.reset').on('click', function() {
      var level = resetLevel;
      _stopTimer();
      _startTimer();
      _resetBoard(Settings[level]);
    })
  };

  _init = function() {
    _initEvents();
    _initBoard();
  }

  return {
    init: _init,
    g: _getButtonIdx
  }

}());

(function() {
  JSweeper.init();
})();
