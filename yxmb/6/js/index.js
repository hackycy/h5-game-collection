// Please excuse the mess, I need to do some tidying

var activeScreen = document.querySelector('.screen.is-active');
var menuScreen = document.querySelector('.screen.menu');
var gameScreen = document.querySelector('.screen.game');
var winScreen = document.querySelector('.screen.win');
var settingsScreen = document.querySelector('.screen.settings');
var scoreboardScreen = document.querySelector('.screen.scoreboard');
var scoreBoard = document.querySelector('.js-scoreboard');

var player = document.querySelector('.player');
var tongue = document.querySelector('.tongue');
var eyes = document.querySelectorAll('.eye');
var pupils = document.querySelectorAll('.pupil');
var deadFly = document.querySelector('.tongue .fly');

var paths = document.querySelectorAll('.path');
var targets = document.querySelectorAll('.target');

var scoreEls = document.querySelectorAll('.js-score');
var bestEls = document.querySelectorAll('.js-best');
var timerEl = document.querySelector('.js-time');
var highscoreEl = document.querySelector('.js-highscore');
var timerIntervalId;

// Audio
var musicPlaying = false;
var musicButton = document.querySelector('.js-toggle-music')
var music = document.querySelector('#music');

var state = {};
var hidden = [];
var theme;
var scores = [];
var shooting = false;
var playing = false;
var transitioning = false;
var lastPath = false;

var storage = window.localStorage;

var clickOrTap = ((window.document.documentElement.ontouchstart!==null)?'click':'touchstart');

init();

function init() {
  prepPaths();
  loadStorage();
  renderBest();
  toggleScreen(menuScreen);
}
function prepPaths() {
  for (var i = 0; i < paths.length; i++) {
    paths[i].setAttribute('data-id', i);
  }
}
function loadStorage() {
  theme = storage.getItem('theme');
  
  if (!theme) {
    theme = 'light';
  }
  
  scores = storage.getItem('scores');
  
  if (!scores) {
    scores = [];
  } else {
    scores = JSON.parse(scores);
  }
  
  toggleTheme(theme);
  renderScoreBoard();
}

function renderScoreBoard() {
  var html = '';
  
  for (var i = 0; i < 10; i++) {
    html += "<li>";
    html += scores[i] || '-';
    html += "</li>";
  }
  
  scoreBoard.innerHTML = html;
  
}

function setState() {
  state = {
    time: 30,
    score: 0
  }
}

function toggleMusic() {
  musicPlaying = !musicPlaying;
  if (musicPlaying) {
    music.play();  
    musicButton.textContent = "Stop Music";
  } else {
    music.pause();
    music.currentTime = 0;
    musicButton.textContent = "Play Music";
  }
  
}

function play() {
  playing = true;
  setState();
  renderScore();
  toggleScreen(gameScreen);
  peep();
  peep();
  peep();
  peep();
  startTimer();
}

function win() {
  playing = false;
  var prevBest = scores[0] || 0;
  scores.push(state.score);
  scores.sort(function(a,b) {
    return b - a;
  });
  if (scores.length > 10) {
    scores.pop();
  }
  saveScores();
  var best = scores[0] || 0;
  if (state.score > prevBest) {
    best = state.score;
    highscoreEl.classList.remove('is-hidden');
  } else {
    highscoreEl.classList.add('is-hidden');
  }
  renderBest(best);
  renderScoreBoard();
  toggleScreen(winScreen);
}

function renderBest() {
  for (var i = 0; i < bestEls.length; i++) {
    bestEls[i].textContent = scores[0];
  }
}

function saveScores() {
  storage.setItem('scores', JSON.stringify(scores));
}

function menu() {
  toggleScreen(menuScreen);
}

function settings() {
  toggleScreen(settingsScreen);
}

function scoreboard() {
  toggleScreen(scoreboardScreen);
}

function startTimer() {
  // Set the time before starting timer
  timerEl.textContent = state.time;
  
  timerIntervalId = setInterval(function(e) {
    state.time -= 1;
    timerEl.textContent = state.time;
    
    if (state.time <= 0) {
      clearInterval(timerIntervalId);
      win();
    }
  }, 1000);
}

function score(value) {
  state.score += value || 1;
  
  renderScore();
}
function renderScore() {
  for (var i = 0; i < scoreEls.length; i++) {
    scoreEls[i].textContent = state.score;
  }
}

function toggleScreen(screen) {
  if (activeScreen) {
    activeScreen.classList.remove('is-active');
  }
  
  screen.classList.add('is-active');
  activeScreen = screen;
}

function toggleTheme(value) {
  document.body.classList.remove(theme);
  document.body.classList.add(value);
  theme = value;
  
  storage.setItem('theme', value);
}




// Game Logic
// Events
window.onmousemove = eyesFollow;
window.document.addEventListener(clickOrTap, shoot);
for (var i = 0; i < targets.length; i++) {
  targets[i].addEventListener(clickOrTap, hit);
}

function shoot(e) {
  eyesFollow(e);
  // deadFly.classList.remove('is-active');
  
  player.classList.remove('is-active');
  tongue.style.height = 0 + "px";
  tongue.style.transform = "rotate(" + 0 + "deg)";

  var tongueX = tongue.getBoundingClientRect().left  + (tongue.offsetWidth);
  var tongueY = tongue.getBoundingClientRect().bottom;
  var touch = getTouch(e);
  var clickX = touch.x + (tongue.offsetWidth / 2);
  var clickY = touch.y;

  shooting = true;
  transitioning = true;

  var angle = getAngle(tongueX, tongueY, clickX, clickY);
  var height = getHeight(tongueX, tongueY, clickX, clickY);

  if (angle > 0 && angle < 180) {
    player.classList.add('is-shooting-down');
  } else {
    player.classList.remove('is-shooting-down');
  }

  player.classList.add('is-active');
  tongue.style.height = height + "px";
  tongue.style.transform = "rotate(" + (angle + 90)  + "deg)"; 
}
function hit(e) {
  var path = this.parentNode;
  var id = path.getAttribute('data-id');
  
  if (!e.isTrusted || hidden.includes(id)) {
    return;
  }
  if (state.score % 2 == 0) {
    deadFly.classList.add('is-active2');
    deadFly.classList.remove('is-active');
  } else {
    deadFly.classList.add('is-active');
    deadFly.classList.remove('is-active2');
  }
  path.classList.remove('is-active');
  path.classList.add('is-hidden');
  hidden.push(id); 
  
  // Show dead fly on tongue
  //deadFly.classList.add('is-active');
  // console.log('show dead fly');
  
  setTimeout(function() {
    var id = hidden.shift();
    paths[id].classList.remove('is-hidden');
  }, 1000);
  
  score();
}

function eyesFollow(e) {
  var touch = getTouch(e);
  moveEye({x: touch.x, y: touch.y}, eyes[0], pupils[0]);
  moveEye({x: touch.x, y: touch.y}, eyes[1], pupils[1]);
}

function moveEye(mouse, eye, pupil) {
  var left = 0;
  var top = 0;
  var eyeRadius = eye.offsetWidth / 2;
  var pupilRadius = pupil.offsetWidth / 2;

  var leftOffset = eye.getBoundingClientRect().left;
  var topOffset = eye.getBoundingClientRect().top;

  var center = [eye.getBoundingClientRect().left + eyeRadius, eye.getBoundingClientRect().top + eyeRadius];

  var dist = getDistance([mouse.x, mouse.y], center);

  if (dist <= eyeRadius) {
    left = mouse.x - leftOffset - eyeRadius;
    top = mouse.y - topOffset - eyeRadius;
  } else {
    var x = mouse.x - center[0];
    var y = mouse.y - center[1];
    var radians = Math.atan2(y, x);
    left = (Math.cos(radians) * (eyeRadius - pupilRadius));
    top = (Math.sin(radians) * (eyeRadius - pupilRadius));
  }
  
  // if (top > 0) {
  //   eye.classList.add('down');
  //   eye.classList.remove('up');
  //   console.log('down');
  // } else {
  //   eye.classList.add('up');
  //   eye.classList.remove('down');
  //   console.log('up');
  // }

  pupil.style.transform = "translate(" + left + "px, " + top + "px)";
}

function getRandomPath(lanes) { 
  const idx = Math.floor(Math.random() * paths.length);
  const path = paths[idx];
  if (path === lastPath || paths[idx].classList.contains('is-hidden')) {
    // console.log('Ah nah thats the same one bud');
    return getRandomPath(paths);
  }
  lastPath = path;
  return path;
}

function peep() {
  const time = getRandomTime(600, 1200);
  const path = getRandomPath(paths);
  path.classList.add('is-active');
  setTimeout(function() {
    path.classList.remove('is-active');
    if (playing) {
      peep();
    }
  }, time);
}

// Utility
function getRandomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getDistance(dot1, dot2) {
  var x1 = dot1[0],
      y1 = dot1[1],
      x2 = dot2[0],
      y2 = dot2[1];
    
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getAngle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = (Math.atan2(dy, dx)) * 180 / Math.PI;
  
  return theta;
}

function getHeight(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt( a*a + b*b );
}

function getTouch(e) {
  if (e.touches) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }
  } else {
    return {
      x: e.clientX,
      y: e.clientY
    }
  }
}