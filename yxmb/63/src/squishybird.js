document.body.style.margin = '0px';
document.body.style.overflow = 'hidden';

var raf = function (x) { alert('Your browser is not compatible with this site. Sorry :('); }
if (window.requestAnimationFrame) raf = window.requestAnimationFrame;       // Firefox 23 / IE 10 / Chrome / Safari 7 (incl. iOS)
else if (window.mozRequestAnimationFrame) raf = window.mozRequestAnimationFrame;    // Firefox < 23
else if (window.webkitRequestAnimationFrame) raf = window.webkitRequestAnimationFrame; // Older versions of Safari / Chrome



var game = {};
game.ended = false;
game.div = document.createElement('div');
game.div.style.overflow = 'hidden';
game.div.style.position = 'relative';
game.div.style.width = '100%';
game.div.style.height = '100%';
document.body.appendChild(game.div);





var resize = function () {
 ww = Math.ceil(window.innerWidth);
 hh = Math.ceil(window.innerHeight);
 
 var fblikebox = document.getElementById('fblikebox');
 var googbox = document.getElementById('googbox');
 if (fblikebox) {
  if (hh < 710) {
   fblikebox.style.right = '178px';
   if (googbox) {
    googbox.style.bottom = '5px';
    googbox.style.top = 'auto';
   }
  } else {
   fblikebox.style.right = '8px';
   if (googbox) {
    googbox.style.top = '5px';
    googbox.style.bottom = 'auto';
   }
  }
 }
 
 game.div.style.width = ww+'px';
 game.div.style.height = hh+'px';
 
 pipe_center = (hh - 88)/2;
 
 game.canvas.width = ww;
 game.canvas.height = hh;
 game.ctx.fillStyle = '#71c5cf';
 game.ctx.fillRect(0, 0, ww, hh);
 
 ground.canvas.width = ww;
 ground.canvas.height = 88;
 ground.ctx.fillStyle = '#ddd894';
 ground.ctx.fillRect(0, 0, ww, 88);
 var gx = 0;
 while (gx < ww) {
  ground.ctx.drawImage(ground.bit, gx, 0);
  gx += 48;
 }
 
 ground.canvas.style.left = '0px';
 ground.canvas.style.top = (hh - 88)+'px';
 
 
 logo.reposition();
 gameover.reposition();
 c2s.reposition();
 //fbshare.reposition();
 playagain.reposition();
 

 parody.div.style.left = Math.round((ww - 800)/2)+'px';
 parody.div.style.top = (hh - 28)+'px';


 var i = 0;
 for (var xx = -3; xx <= 3; xx++) {
  for (var yy = -3; yy <= 3; yy++) {
   var div = score.divs[i];
   i++;
   div.style.left = Math.round(xx + (ww - 300)/2)+'px';
   div.style.top = (yy + 20)+'px';
  }
 }
 
 
 city.canvas.width = ww;
 city.canvas.height = 256;
 city.ctx.clearRect(0, 0, ww, 256);
 var gx = 0;
 while (gx < ww) {
  city.ctx.drawImage(city.bit, gx, 0);
  gx += 300;
 }
 
 city.canvas.style.left = '0px';
 city.canvas.style.top = (hh - 256 - 88)+'px';
 
 
 
 
 
 
 
 trees.canvas.width = ww;
 trees.canvas.height = 216;
 trees.ctx.clearRect(0, 0, ww, 216);
 var gx = 0;
 while (gx < ww) {
  trees.ctx.drawImage(trees.bit, gx, 0);
  gx += 300;
 }
 
 trees.canvas.style.left = '0px';
 trees.canvas.style.top = (hh - 216 - 88)+'px';
 
 
 
 
 
 pipe_x = Math.floor(ww/2 - 148/2);
 
 pipe1.img.style.left = pipe_x+'px';
 pipe2.img.style.left = pipe_x+'px';
 
 for (var i = bloods.length-1; i>=0; i--) {
  var blood = bloods[i];
  repositionBlood(blood);
 }
 
}

var want_image_count = 0;
var loadGameImage = function (n) {
 want_image_count++;
 var o = document.createElement('img');
 o.onload = function () {
  want_image_count--;
  if ((want_image_count == 0) && (want_sound_count == 0)) {
   gameLoaded();
  }
 }
 o.src = n;
 return o;
}

//var sounds_playing = [];
var want_sound_count = 0;
var loadGameSound = function (n, chc) { // file name, channel count
 var o = {};
 
 o.channels = [];
 o.channel_pos = 0;
 o.chc = chc;
 
 o.play = function () {
  var tm = new Date().getTime();
  var sc = this.channels.length;
  var got_good_sound = false;
  var ch;
  for (var i = sc; i>=0; i--) {
   this.channel_pos++;
   if (this.channel_pos >= this.channels.length) {
    this.channel_pos = 0;
   }
   var ch = this.channels[this.channel_pos];
   //if (ch.can_play) {
    got_good_sound = true;
    break;
    //}
  }
  if (got_good_sound) {
   //ch.sound.currentTime = 1;
   ch.sound.play();
   //ch.can_play = false;
   
   //sounds_playing.push(ch);
  }
 }
 
 
 //want_sound_count++;
 /*
 var ao = document.createElement("audio");
 ao.sndo = o;
 ao.addEventListener('canplaythrough', function () {
  //want_sound_count--;
  var o = this.sndo;
  for (var i = 0; i<0*o.chc; i++) {
   var sch = {};
   sch.sound = this.cloneNode(true);
   //sch.can_play = true;
   o.channels.push(sch);
  }
  var sch = {};
  sch.sound = this;
  //sch.can_play = true;
  o.channels.push(sch);
  
  if ((want_image_count == 0) && (want_sound_count == 0)) {
   gameLoaded();
  }
 }, false);
 */
 for (var i = 0; i<chc; i++) {
  var ao = document.createElement("audio");
  var sch = {};
  sch.sound = ao;
  sch.can_play = true;
  o.channels.push(sch);
  ao.src = n;
  ao.type = "audio/wav";
  document.body.appendChild(ao);
 }
 return o;
}

var bottom_pipe_gap = 270;
var pipe_gap = bottom_pipe_gap;
var pipe_center = 500;
var pipe_closing = -1;
var pipe_opening = -1;

var pipe_x;

var game_loaded = false;
var gameLoaded = function () {
 game.div.appendChild(game.canvas);
 game.div.appendChild(pipe1.img);
 game.div.appendChild(pipe2.img);
 game.div.appendChild(ground.canvas);
 game.div.appendChild(city.canvas);
 game.div.appendChild(trees.canvas);
 game.div.appendChild(logo.img);
 game.div.appendChild(gameover.img);
 //document.body.appendChild(fbshare.img);
 document.body.appendChild(playagain.img);
 game.div.appendChild(c2s.img);
 game.div.appendChild(parody.div);
 for (var i = score.divs.length-1; i>=0; i--) {
  game.div.appendChild(score.divs[i]);
 }
 game_loaded = true;
 resize();
 raf(oef);
 oef();
 
 //document.body.addEventListener("touchstart", poundPipes, false);
 
 document.body.onmousedown = function () {
  poundPipes();
 }
 
 document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
   poundPipes();
  }
 }
 
}



var poundPipes = function () {
 if (game.ended) { // then we have to set ended=false with the play again button
  return false;
 }
 if (!game.started) {
  fr = 0;
  nbfr = fnbfr = 100;
  points = 0;
  score.update();
  for (var i = birds.length-1; i>=0; i--) {
   var bird = birds[i];
   bird.canvas.width = 1;
   bird.canvas.height = 1;
   game.div.removeChild(bird.canvas);
   birds.splice(i, 1);
  }
  game.started = true;
  logo.showing = false;
  logo.hiding = true;
  gameover.showing = false;
  gameover.hiding = true;
  c2s.showing = false;
  c2s.hiding = true;
/*  fbshare.showing = false;
  fbshare.hiding = true;*/
  playagain.showing = false;
  playagain.hiding = true;
  parody.div.style.display = 'none';
  points = 0;
  score.update();
 }
 want_pound = true;
 if (pipe_opening == -1) {
  if (pipe_closing == -1) {
   pipe_closing = 0;
   want_pound = false;
   pipeslide.play();
   return true;
  }
 }
 return false;
}



var want_pound = false;



var ww = 768;
var hh = 920;


var bird_images = [];
var angry_bird_images = [];
for (var i = 1; i<=3; i++) {
 var o = {};
 var img = loadGameImage('./src/wav/bird'+i+'.png');
 o.img = img;
 bird_images.push(o);

 var o = {};
 var img = loadGameImage('./src/wav/angrybird'+i+'.png');
 o.img = img;
 angry_bird_images.push(o);
}
bird_images.push(bird_images[1]); // this one final push makes the wing animation loop correctly
angry_bird_images.push(angry_bird_images[1]); // this one final push makes the wing animation loop correctly






var flap = loadGameSound('./src/wav/flap.wav', 5);
var pipeslide = loadGameSound('./src/wav/slide.wav', 3);
var clang = loadGameSound('./src/wav/clang.wav', 3);

var coin1 = loadGameSound('./src/wav/coin.wav', 3);
var coin2 = loadGameSound('./src/wav/coin2.wav', 3);
var coin3 = loadGameSound('./src/wav/coin3.wav', 3);
var coin4 = loadGameSound('./src/wav/coin4.wav', 3);

var kick = loadGameSound('./src/wav/kick.wav', 5);
var kick2 = loadGameSound('./src/wav/kick2.wav', 5);
var kick3 = loadGameSound('./src/wav/kick3.wav', 5);
var kick4 = loadGameSound('./src/wav/kick4.wav', 5);
var kick5 = loadGameSound('./src/wav/kick5.wav', 5);

var kicks = [kick, kick2, kick3, kick4, kick5];

var squish1 = loadGameSound('./src/wav/squish1.wav', 3);
var squish2 = loadGameSound('./src/wav/squish2.wav', 3);

var squishes = [squish1, squish2];


var clanging = -1;





game.canvas = document.createElement('canvas');
game.canvas.width = ww;
game.canvas.height = hh;
game.ctx = game.canvas.getContext('2d');
game.started = false;


game.ctx.fillStyle = '#71c5cf';
game.ctx.fillRect(0, 0, ww, hh);



var logo = {};
logo.a = -.2;
logo.fr = 0;
logo.showing = true;
logo.hiding = false;
logo.img = loadGameImage('./src/wav/logo.png'); // 626 x 144
logo.img.style.position = 'absolute';
logo.img.style.opacity = 0;
logo.img.style.zIndex = '42069';
logo.reposition = function () {
 logo.img.style.left = Math.floor((ww-626)/2)+'px';
 logo.img.style.top = Math.floor(Math.cos(logo.fr/9)*20 + (hh - 144 - 88)/2)+'px';
}



var gameover = {};
gameover.a = -.2;
gameover.fr = 0;
gameover.showing = false;
gameover.hiding = true;
gameover.img = loadGameImage('./src/wav/gameover.png'); // 626 x 144
gameover.img.style.position = 'absolute';
gameover.img.style.opacity = 0;
gameover.img.style.zIndex = '42069';
gameover.reposition = function () {
 gameover.img.style.left = Math.floor((ww-626)/2)+'px';
 gameover.img.style.top = Math.floor(Math.cos(gameover.fr/32)*4 + (hh - 200 - 144 - 88)/2)+'px';
}


/*
var fbshare = {}; // 592 x 80
fbshare.a = -.2;
fbshare.fr = 0;
fbshare.showing = false;
fbshare.hiding = true;
fbshare.img = loadGameImage('./src/wav/fbshare.png');
fbshare.img.style.border = '0px';
fbshare.img.style.cursor = 'pointer';
fbshare.img.border = 0;
fbshare.img.style.position = 'absolute';
fbshare.img.style.display = 'none';
fbshare.img.style.opacity = 0;
fbshare.img.style.zIndex = '142069';
fbshare.reposition = function () {
 fbshare.img.style.left = Math.floor((ww-592)/2)+'px';
 fbshare.img.style.top = Math.floor(Math.cos(fbshare.fr/12)*5 + (hh + 150 + 80 - 88)/2)+'px';
}*/
/* www.datouwang.com */
/*fbshare.img.onclick = function () {
 FB.ui({
   method: 'feed',
   link: 'http://squishybird.com/',
   name: 'Squishy Bird',
   picture: 'http://squishybird.com/fbthumb.jpg',
   caption: 'I hate that freakin\' bird so much...',
   description: 'I scored '+points+' in Squishy Bird! Can you beat that?'
 }, function(response){});
}*/


var playagain = {}; //  252x71     592 x 80
playagain.a = -.2;
playagain.fr = 0;
playagain.showing = false;
playagain.hiding = true;
playagain.img = loadGameImage('./src/wav/playagain.png');
playagain.img.style.border = '0px';
playagain.img.style.cursor = 'pointer';
playagain.img.border = 0;
playagain.img.style.position = 'absolute';
playagain.img.style.display = 'none';
playagain.img.style.opacity = 0;
playagain.img.style.zIndex = '142068';
playagain.reposition = function () {
 playagain.img.style.left = Math.floor((ww-252)/2)+'px';
 playagain.img.style.top = Math.floor(Math.cos(playagain.fr/14)*5 + (hh + 320 + 71 - 88)/2)+'px';
}
playagain.img.onclick = function () {
 game.ended = false;
 poundPipes();
}



var c2s = {};
c2s.a = -1;
c2s.showing = true;
c2s.hiding = false;
c2s.img = loadGameImage('./src/wav/clicktostart.png'); // 337 x 75
c2s.img.style.position = 'absolute';
c2s.img.style.opacity = 0;
c2s.img.style.zIndex = '42070';
c2s.reposition = function () {
 c2s.img.style.left = Math.floor((ww-337)/2)+'px';
 c2s.img.style.top = Math.floor((hh + 250)/2)+'px';
}




var parody = {};
parody.div = document.createElement('div');
parody.div.style.width = '800px';
parody.div.style.height = '24px';
parody.div.style.position = 'absolute';
parody.div.style.textAlign = 'center';
parody.div.style.fontFamily = 'Verdana';
parody.div.style.fontSize = '12px';
parody.div.style.zIndex = 87654;
parody.div.innerHTML = '适用浏览器：360、FireFox、Chrome、Safari、Opera、傲游、搜狗、世界之窗. 不支持IE8及以下浏览器。来源：<a href="http://sc.chinaz.com/" target="_blank">站长素材</a>';

var points = 0;
var highscore = 0;


var score = {};
score.divs = [];
for (var xx = -3; xx <= 3; xx++) {
 for (var yy = -3; yy <= 3; yy++) {
  var div = document.createElement('div');
  score.divs.push(div);
  div.style.width = '300px';
  div.style.height = '50px';
  div.style.position = 'absolute';
  div.style.textAlign = 'center';
  div.style.fontFamily = 'Verdana';
  div.style.fontWeight = 'bold';
  div.style.fontSize = '30px';
  div.style.color = '#000000';
  div.style.zIndex = 88887;
  div.style['user-select'] = 'none';
  div.style['-webkit-user-select'] = 'none';
  div.style['-moz-user-select'] = 'none';
  div.style['-ms-user-select'] = 'none';
  div.style['-o-user-select'] = 'none';
  
  
  /*
  -webkit-user-select: none; // Chrome/Safari
  -moz-user-select: none; // Firefox
  -ms-user-select: none; // IE10+

  // Rules below not implemented in browsers yet
  -o-user-select: none;
  user-select: none;
  */
  
  if (xx == 0 && yy == 0) {
   div.style.color = '#FFFFFF';
   div.style.zIndex = 88888;
  }
  div.innerHTML = '';
 }
}
score.update = function () {
 for (var i = score.divs.length-1; i>=0; i--) {
  score.divs[i].innerHTML = points;
 }
}




var ground = {};

ground.canvas = document.createElement('canvas');
ground.canvas.style.position = 'absolute';
ground.canvas.style.zIndex = '31337';
ground.ctx = ground.canvas.getContext('2d');
ground.bit = loadGameImage('./src/wav/ground.png');



var city = {};

city.canvas = document.createElement('canvas');
city.canvas.style.position = 'absolute';
city.canvas.style.zIndex = '60';
city.ctx = city.canvas.getContext('2d');
city.bit = loadGameImage('./src/wav/city.png');




var trees = {};

trees.canvas = document.createElement('canvas');
trees.canvas.style.position = 'absolute';
trees.canvas.style.zIndex = '61';
trees.ctx = trees.canvas.getContext('2d');
trees.bit = loadGameImage('./src/wav/trees.png');





var birds = [];
var dead_birds = [];

var newBird = function () {
 var bird = {};
 bird.cw = 150;
 bird.ch = 150;
 bird.ww = 85;
 bird.hh = 60;
 bird.xx = -200 - Math.random()*360;
 bird.yy = 0 - Math.random() * 280;
 bird.svx = 3 + Math.random()*2 + Math.pow((100 - nbfr)/20, 2);
 bird.vx = bird.svx;
 bird.vy = -13 - Math.random()*13;
 bird.vr = 0;
 bird.ar = 0;
 bird.ang = 0;
 bird.fr = 0;
 bird.anger = 0;
 bird.anger_fr = 0;
 bird.dying = false;
 bird.dead = false;
 bird.invincible = 0; // if greater than 0, counts down per frame until 0 again
 bird.canvas = document.createElement('canvas');
 game.div.appendChild(bird.canvas);
 bird.canvas.width = bird.cw;
 bird.canvas.height = bird.ch;
 bird.canvas.style.zIndex = '69';
 bird.canvas.style.position = 'absolute';
 bird.ctx = bird.canvas.getContext('2d');
 birds.push(bird);
}






var blood_image = loadGameImage('./src/wav/blood.png');
var bloods = [];
var newBlood = function () {
 var blood = {};
 blood.ww = 325*4;
 blood.hh = 138*4;
 blood.fr = 0;
 blood.canvas = document.createElement('canvas');
 game.div.appendChild(blood.canvas);
 blood.canvas.width = blood.ww;
 blood.canvas.height = blood.hh;
 blood.canvas.style.zIndex = '70';
 blood.canvas.style.position = 'absolute';
 repositionBlood(blood);
 blood.ctx = blood.canvas.getContext('2d');
 bloods.push(blood);
}

var repositionBlood = function (blood) {
 blood.canvas.style.left = (pipe_x + 148/2 - (325*4/2))+'px';
 blood.canvas.style.top = (pipe_center - 32)+'px';
}


var pipe1 = {};
pipe1.img = loadGameImage('./src/wav/pipe1.png');
pipe1.img.width = 148;
pipe1.img.height = 1664;
pipe1.img.style.position = 'absolute';
pipe1.img.style.left = '340px';
pipe1.img.style.top = '0px';
pipe1.img.style.zIndex = '420';


var pipe2 = {};
pipe2.img = loadGameImage('./src/wav/pipe2.png');
pipe2.img.width = 148;
pipe2.img.height = 1664;
pipe2.img.style.position = 'absolute';
pipe2.img.style.left = '340px';
pipe2.img.style.top = '0px';
pipe2.img.style.zIndex = '420';



var nbfr = 100;
var fnbfr = 100;



var fr = 0;
var ltm = 0;
var oef = function () {
 if (game_loaded) {
  var ftm = new Date().getTime();
  var tm;
  var tj = 0;
  while (ltm < ftm) {
   ltm += 20;
   tj++;
   if (tj > 10) { // we're way too many frames behind. just give up.
    ltm = ftm;
    break;
   }
   if (game.started) {
    fr++;
    if ((fr % fnbfr) == 1) {
     newBird();
     if (nbfr > 13) {
      nbfr = (nbfr - 13)*.996 + 13;
      //nbfr -= (101 - nbfr) * .1;
      //console.log(nbfr);
      fnbfr = Math.ceil(nbfr);
     }
    }
   }
   if (want_pound) {
    want_pound = !poundPipes();
   }
   
   /*
   for (var i = sounds_playing.length-1; i>=0; i--) {
    var ch = sounds_playing[i];
    if (ch.sound.currentTime > (ch.sound.duration - 1)) {
     ch.sound.currentTime = 1;
     ch.sound.pause();
     ch.can_play = true;
    }
   }
   */
   
   if (logo.showing) {
    logo.a += .03;
    if (logo.a >= 1) {
     logo.a = 1;
     logo.showing = false;
    }
    logo.img.style.opacity = logo.a;
   }
   if (logo.hiding) {
    logo.a -= .1;
    if (logo.a <= 0) {
     logo.a = 0;
     logo.hiding = false;
    }
    logo.img.style.opacity = logo.a;
   }
   if (logo.a > 0) {
    logo.fr++;
    logo.reposition();
   }
   if (logo.a > .01) {
    if (!logo.visible) {
     logo.visible = true;
     logo.img.style.display = 'inline';
    }
   } else {
    if (logo.visible) {
     logo.visible = false;
     logo.img.style.display = 'none';
    }
   }
   
   if (gameover.showing) {
    gameover.a += .03;
    if (gameover.a >= 1) {
     gameover.a = 1;
     gameover.showing = false;
    }
    gameover.img.style.opacity = gameover.a;
   }
   if (gameover.hiding) {
    gameover.a -= .1;
    if (gameover.a <= 0) {
     gameover.a = 0;
     gameover.hiding = false;
    }
    gameover.img.style.opacity = gameover.a;
   }
   if (gameover.a > 0) {
    gameover.fr++;
    gameover.reposition();
   }
   if (gameover.a > .01) {
    if (!gameover.visible) {
     gameover.visible = true;
     gameover.img.style.display = 'inline';
    }
   } else {
    if (gameover.visible) {
     gameover.visible = false;
     gameover.img.style.display = 'none';
    }
   }
   
  /* if (fbshare.showing) {
    fbshare.a += .03;
    if (fbshare.a >= 1) {
     fbshare.a = 1;
     fbshare.showing = false;
    }
    fbshare.img.style.opacity = fbshare.a;
   }
   if (fbshare.hiding) {
    fbshare.a -= .1;
    if (fbshare.a <= 0) {
     fbshare.a = 0;
     fbshare.hiding = false;
    }
    fbshare.img.style.opacity = fbshare.a;
   }
   if (fbshare.a > 0) {
    fbshare.fr++;
    fbshare.reposition();
   }
   if (fbshare.a > .01) {
    if (!fbshare.visible) {
     fbshare.visible = true;
     fbshare.img.style.display = 'inline';
    }
   } else {
    if (fbshare.visible) {
     fbshare.visible = false;
     fbshare.img.style.display = 'none';
    }
   }*/
   
   if (playagain.showing) {
    playagain.a += .03;
    if (playagain.a >= 1) {
     playagain.a = 1;
     playagain.showing = false;
    }
    playagain.img.style.opacity = playagain.a;
   }
   if (playagain.hiding) {
    playagain.a -= .1;
    if (playagain.a <= 0) {
     playagain.a = 0;
     playagain.hiding = false;
    }
    playagain.img.style.opacity = playagain.a;
   }
   if (playagain.a > 0) {
    playagain.fr++;
    playagain.reposition();
   }
   if (playagain.a > .01) {
    if (!playagain.visible) {
     playagain.visible = true;
     playagain.img.style.display = 'inline';
    }
   } else {
    if (playagain.visible) {
     playagain.visible = false;
     playagain.img.style.display = 'none';
    }
   }

   if (c2s.showing) {
    c2s.a += .03;
    if (c2s.a >= 1) {
     c2s.a = 1;
     c2s.showing = false;
    }
    c2s.img.style.opacity = c2s.a;
   }
   if (c2s.hiding) {
    c2s.a -= .1;
    if (c2s.a <= 0) {
     c2s.a = 0;
     c2s.hiding = false;
    }
    c2s.img.style.opacity = c2s.a;
   }
   if (c2s.a > .01) {
    if (!c2s.visible) {
     c2s.visible = true;
     c2s.img.style.display = 'inline';
    }
   } else {
    if (c2s.visible) {
     c2s.visible = false;
     c2s.img.style.display = 'none';
    }
   }
   
   if (clanging >= 0) {
    clanging--;
    pipe1.img.style.left = (pipe_x + Math.cos(fr*Math.PI)*3)+'px';
    pipe2.img.style.left = (pipe_x + Math.cos(fr*Math.PI)*3)+'px';
   }
   
   pipe1.img.style.top = (pipe_center - 1664 - pipe_gap/2)+'px';
   pipe2.img.style.top = (pipe_center + pipe_gap/2)+'px';
   if (pipe_opening >= 0) {
    pipe_opening++;
    if (pipe_opening >= 15) {
     pipe_opening = -1;
    }
   }
   var kill_combo = 0;
   var new_points = 0;
   var kicked = 0;
   if (pipe_closing >= 0) {
    pipe_gap -= 50;
    if (pipe_gap <= -3) {
     pipe_gap = -3;
     pipe_closing++;
     if (pipe_closing >= 5) {
      pipe_closing = -1;
      pipe_opening = 0;
     }
     var wnb = false;
     for (var i = birds.length-1; i>=0; i--) {
      var bird = birds[i];
      if (bird.invincible == 0) {
       if (bird.dying) {
        if (bird.xx <= (pipe_x+10)) {
         bird.invincible = 5; // ensures there isn't a double-kick anomaly
         bird.vx = -10 - Math.random()*20 - bird.anger*8;
         bird.vy = 0;
         bird.ar = Math.random()*6 - 3;
         bird.dying = false;
         kicks[Math.min(bird.anger, 4)].play();
         bird.anger++;
         kicked++;
        } else if (bird.xx >= (pipe_x + 148 -10)) {
         bird.vx = 10 + Math.random()*20;
         bird.vy = 0;
         bird.ar = Math.random()*6 - 3;
         bird.dying = false;
         bird.anger++;
        } else {
         bird.dead = true;
         wnb = true;
         new_points += 1 + bird.anger;
         kill_combo++;
         score.update();
        }
       }
      }
     }
     if (pipe_closing == 1) {
      if (kill_combo == 0) {
       if (kicked == 0) {
        clang.play();
        clanging = 12;
       }
      }
     }
     if (wnb) {
      newBlood();
     }
    }
   } else {
    pipe_gap += (bottom_pipe_gap - pipe_gap) * .15;
   }
   if (new_points > 0) {
    new_points *= kill_combo;
    new_points = Math.pow(new_points, 2);
    if (new_points == 0) {
     
    } else if (new_points == 1) {
     coin1.play();
    } else if (new_points < 8) {
     coin2.play();
    } else if (new_points < 50) {
     coin3.play();
    } else {
     coin4.play();
    }
    points += new_points;
    score.update();
   }
   if (new_points > 0) {
    squishes[Math.floor(Math.random()*squishes.length)].play();
   }
   for (var i = bloods.length-1; i>=0; i--) {
    var blood = bloods[i];
    var bctx = blood.ctx;
    bctx.clearRect(0, 0, blood.ww, blood.hh);
    var tx = Math.floor(blood.fr)%5;
    var ty = (Math.floor(blood.fr) - tx)/5;
    bctx.drawImage(blood_image, tx*325, ty*138, 325, 138, 0, 0, 325*4, 138*4);
    blood.fr += 1;
    if (blood.fr >= 30) {
     game.div.removeChild(blood.canvas);
     bloods.splice(i, 1);
    }
   }
   if (game.started) {
    for (var i = birds.length-1; i>=0; i--) {
     var bird = birds[i];
     var bctx = bird.ctx;
     if (bird.invincible > 0) {
      bird.invincible--;
     }
     bctx.save();
     bctx.clearRect(0, 0, bird.cw, bird.ch);
     bctx.translate(bird.cw/2, bird.ch/2);
     if (!bird.dying) {
      bird.vr += bird.ar;
      bird.vr *= .8;
      bird.ar *= .95;
      var ang = 0;
      if (bird.vy > 11) ang = Math.atan2(bird.vy, bird.vx) * Math.max(0, Math.min(1, .1 * (bird.vy - 11)));
      bctx.rotate(-.4 + ang + bird.vr);
     }
     bird.fr += .4;
     bird.fr %= bird_images.length;
     var bfr = Math.floor(bird.fr);
     bctx.drawImage(bird_images[bfr].img, 0, 0, bird.ww, bird.hh, -bird.ww/2 + 10, -bird.hh/2, bird.ww, bird.hh);
     if (bird.anger > 0) {
      bird.anger_fr += bird.anger/8;
      bctx.globalAlpha = .5 * (1 - Math.cos(bird.anger_fr)) * Math.min(1, bird.anger/3);
      bctx.drawImage(angry_bird_images[bfr].img, 0, 0, bird.ww, bird.hh, -bird.ww/2 + 10, -bird.hh/2, bird.ww, bird.hh);
     }
     bctx.restore();
     bird.canvas.style.left = (bird.xx - bird.cw/2)+'px';
     bird.canvas.style.top = (pipe_center + bird.yy - bird.ch/2)+'px';
     if (bird.dying) {
      if (bird.stuck_side == 1) {
       bird.yy = pipe_gap/2 - 30;
      } else {
       bird.yy = 30 - pipe_gap/2;
      }
     } else {
      if (bird.vx < bird.svx) {
       bird.vx++;
       if (bird.vx >= bird.svx) {
        bird.vx = bird.svx;
       }
      } else if (bird.vx > bird.svx) {
       bird.vx--;
       if (bird.vx <= bird.svx) {
        bird.vx = bird.svx;
       }
      }
      bird.xx += bird.vx + bird.anger*1.5;
      bird.yy += bird.vy;
      bird.vy += .6;
      if (bird.yy > (bottom_pipe_gap/2 - 40)) {
       bird.yy = bottom_pipe_gap/2 - 41;
       bird.vy = -8 - Math.random()*6;
       flap.play();
      }
      if (pipe_closing != -1) {
       if (bird.xx >= (pipe_x-40)) {
        if (bird.xx <= (pipe_x + 148 +30)) {
         //if (Math.abs(bird.yy) < (pipe_gap/2 + 20)) {
          if (bird.invincible == 0) {
           bird.dying = true;
           if (bird.yy > 0) {
            bird.stuck_side = 1;
           } else {
            bird.stuck_side = 2;
           }
          }
          //}
        }
       }
      } else { // pipe might be opening from last close
       if (!bird.dying) { // bird might be overlapping a pipe but won't be killed so must fly away instead
        if (bird.xx >= (pipe_x-40)) {
         if (bird.xx <= (pipe_x + 148 +30)) {
          if (Math.abs(bird.yy) > (pipe_gap/2 + 20)) {

           bird.vx = -10 - Math.random()*20 - bird.anger*8;
           bird.vy = 0;
           bird.ar = Math.random()*6 - 3;
           kicks[Math.min(bird.anger, 4)].play();
           bird.anger++;
          
          }
         }
        }
       }
      
      }
     }
     if (bird.xx > (pipe_x + 148 + 200)) {
      game.started = false;
      game.ended = true;
      gameover.hiding = false;
      gameover.showing = true;
     /* fbshare.hiding = false;
      fbshare.showing = true;*/
      playagain.hiding = false;
      playagain.showing = true;
      if (points > highscore) {
       highscore = points;
      }
     }
     if (bird.dead || (bird.xx > (ww + 311))) {
      bird.canvas.width = 1;
      bird.canvas.height = 1;
      game.div.removeChild(bird.canvas);
      birds.splice(i, 1);
     }
    }
   }
  }
 }
 raf(oef);
}


window.onresize = function () {
 resize();
}