(function( $, undefined ) {
$.jweAnimate={_itv_animate : null,_unitDownTime : 501, _unitSwitchTime : 225, _afterMoveDelay: 0, 
showGameStartInfo : function(msg1, msg2){
setTimeout(function(){
$("#introPanel").slideUp("slow",function(){$(this).remove();});
$("#txtTit2").html(_gameTitle+"<br>"+msg1).fadeIn(1500).fadeOut(500,function(){
$("#txtTit").html(msg2).show(0).fadeOut(1000,function(){
$.jweGame.StartCountTime($.jweAnimate._unitDownTime);
$.jweGame.roundRun();
setTimeout(function(){$.jweGame.runGameRules();},0);
});});	},600);},
showGameOverInfo : function(msg1, msg2){
$("#txtTit").html(msg1).fadeIn(500).fadeOut(1000,function(){
$.jwe.GameDataStatisic(msg2);
if($.jweGame._sumScore>0){$("#statPanel").slideDown();$("#endPanel .happyBtn").show();}
$("#endPanel").fadeIn(500,function(){
var z = parseInt( $("#endPanel").css("zIndex")) + _UniTypeNumber +1;
$.jweAnimate.placeGamingGi4EP(1,z);
$.jweCtrl.bindEPEvts();});});	},
showGamingTit : function(msg, inDelay, outDelay){
if(inDelay==null) inDelay=1000;if(outDelay==null) outDelay=1000;
$("#txtTit2").html(msg).fadeIn(inDelay).fadeOut(outDelay);	},
createUni: function (td){var TD= $(td);var wi= parseInt(TD.css("width") );var hi= parseInt(TD.css("height") );var html = $.jweCore.uniCode_blank(); 
TD.append(html);},
killUni : function(e){var Obj = $(e);var TD = Obj.parent();var wi = parseInt(Obj.css("width"));var hi = parseInt(Obj.css("height"));
var uHtml = TD.find(".uni:first").html().toString();
var typeN = Obj.find("img:first").attr("lang"); Obj.remove(); 
var id = "_sh"+ Math.random().toString().replace(".","");
var html = $.jweCore.tmpFCode(id,uHtml);
$("body").append(html);var of = TD.offset();var tmpO = $("#"+id);
tmpO.css({left: of.left,top: of.top,width:TD.css("width"), height:TD.css("height")})
setTimeout(function(){tmpO.animate({left: parseInt(tmpO.css("left"))+wi/2,top: parseInt(tmpO.css("top"))+hi/2,width:0, height:0, opacity:0},"normal"	
,function(){$(this).remove();$.jweGame.addScore(typeN, 1);});},200);},
moveUni2 : function(e, type){$.jweGame.roundRun();var TD =  $(e).parent();var TD2 = $.jweCore.getSwitcherTD(TD[0],type);	
if(TD2.length<=0) return false;
$.jweCore.switch2TDsUni_orgPlace(TD,TD2,true,true);$.jweAnimate.moveToZero(TD,TD2,$.jweAnimate._unitSwitchTime);
var delay2 = $.jweAnimate._unitSwitchTime + $.jweAnimate._afterMoveDelay;
setTimeout(function(){$.jweGame.runGameRules();},delay2);return true;},
deform1A : function(Obj){Obj.animate({opacity:0.5},"fast",function(){$.jweAnimate.deform1B(Obj);});},
deform1B : function(Obj){Obj.animate({opacity:1},"fast",function(){$.jweAnimate.deform1A(Obj);});},
reform : function(Obj){Obj.stop().css({opacity:1});},
moveToZeroPlace : function(idsArr, delay){for(var i=0;i<idsArr.length;i++){
var id=idsArr[i];var TD = $("#"+id);var o = TD.find(".uni:first");o.animate({left:0,top:0}	, delay);}},
moveToZero : function(TD1, TD2, speed){var Obj1=TD1.find(".uni:first");var Obj2=TD2.find(".uni:first");
if(Obj1.length<=0 && Obj2.length<=0)return;if(speed==null || speed=="") speed=500;
if(Obj1.length>0){Obj1.animate({left:0,top:0},speed,function(){$.jweCtrl._busyLock=false;});}
if(Obj2.length>0){Obj2.animate({left:0,top:0},speed,function(){$.jweCtrl._busyLock=false;});}},
mZero : function(TD1, speed){var Obj1=TD1.find(".uni:first");if(Obj1.length<=0)return;
if(speed==null || speed=="") speed="normal";Obj1.animate({left:0,top:0},speed);},
showBg : function(typeN,delay){if(delay==null) delay=500;var bg2=$("#bg2");var bgImg = $.jweCore.bgCode(typeN);bg2.fadeOut(delay,function(){
$(this).html(bgImg).fadeIn(delay);});},
aNewUGirl : function(typeN, ranking, delay){if(delay==null) delay=1000;
var score = $("#sDiv"+typeN).find(".scBar:first").text(); var id = "uGi"+typeN;var o= document.getElementById(id);if(o==null){
var html = $.jweCore.giMMPanelCode(id);$("#mmPanel").append(html); o= document.getElementById(id);}
$.jweCore.LoadACharacter($(o), typeN, ranking);  },
showSexyCartoon1 : function(n){
var o = $("#cartoonPanel");var WI = parseInt($(window).width());var HI = parseInt($(window).height());
var hi = HI * 0.8;var wi = hi * _BLV_XPIC1;var x=(WI-wi)/2;var y=(HI-hi)/2;var dw = wi * 0.8;var dh = hi * 0.8;
$(o).css({width: wi,	height: hi,	left:x, top:y, opacity:1}).html($.jweCore.xPCode(n)).show(0).animate({
left: x-dw/2,top: y-dh/2,width: wi+dw,height: hi+dh},3000, function(){$(o).fadeOut(1000);});},
animGameTimeBar : function(v){var v = Math.round(100 *$.jweGame._gameTime / _fullGameTime);var s = v+"%";
$("#gameTime").animate({height:s},"fast").text($.jweGame._gameTime);},
moveAllGamingGirls : function(){var WI = parseInt($(window).width());
for(var i=0;i<$.jweCore._ucArr.length;i++){var n = $.jweCore._ucArr[i];var id = "uGi"+n;var o = $("#"+id);var dw = parseInt(o.css("width"));
$.jweCore.setGirlPosition(o,i+1);}	},
placeGamingGi4EP : function(oPA, zIDX){if(oPA==null) oPA=1;if(zIDX==null) zIDX=0;$(".giMM").hide();
for(var i=0; i<$.jweCore._ucArr.length;i++){var id = "uGi"+$.jweCore._ucArr[i];var o = $("#"+id);var zdx = zIDX + parseInt(o.css("zIndex"));
o.css({opacity: oPA,zIndex: zdx});}},
objPositionAnim : function(id,x,y){var speed = "slow";var o = $("#"+id);
if(x!=null && y!=null)	o.animate({left: x,	top: y},speed);else if(x==null)	o.animate({top: y},speed);else if(y==null)	o.animate({left: x},speed);},
objPositionAnim2 : function(id,x,opc){var speed = "slow";var o = $("#"+id);o.animate({left: x,opacity: opc},speed);},
girlsShowOutAnim : function(){try{$(".giMM").css({height:"100%"});  var HI = parseInt($(window).height());var n = $.jweCore._ucArr.length;
var delay=0;for(var i=0;i<n;i++){delay = 600 + i*500;var $o = $("#uGi"+$.jweCore._ucArr[i]);var wi = parseInt($o.css("width"));
var x = $.jweCore.getGirlPosition_x(i+1, wi);$o.show().css({	left: x,	top:HI+i*250	}).animate({	top:HI-parseInt($o.css("height"))}, delay, function(){});}
setTimeout(function(){$(".giMM").fadeOut();},delay+1000);}catch(ex){alert(ex)}},
HappyShoot1 : function(idx, z){try{var n = 3; if(idx==null) idx=0;idx = idx % n;var os = $(".cartoonPanel");var eP=$("#endPanel");
if(os.length<n){for(var k=0;k<n;k++){var id = "cpT"+k; var html = "<div class='cartoonPanel' id='"+id+"' ></div>";eP.append(html);}}
if($.jweGame._sumScore>=Math.abs(_oneSexyPicCost)){var WI = parseInt($(window).width() );var HI = parseInt($(window).height());
eP.css("opacity",1);var pCode = $.jweCore.xPCode();var a= $.jweGame._sumScore % n; var id = "cpT"+ idx;var $o = $("#"+id);
$o.html(pCode);var hi = HI * 0.7;var wi = hi * _BLV_XPIC1;var x=(WI-wi)/2;var y=(HI-hi)/2;if(z==null) z = 200;var dw = wi;var dh = hi;
$o.css({width: wi,	height: hi,	left:x, top:y, opacity:1,	zIndex: z}).fadeIn(function(){$o.animate({
left: x-dw/2,top: y-dh/2,width: wi+dw,height: hi+dh},2000,"linear",function(){$.jweGame.AddSumScore(_oneSexyPicCost);	
$o.fadeOut("slow",function(){	$o.remove();	});$.jweAnimate.HappyShoot1(idx+1, z+1);});});}}catch(ex){alert("HappyShoot1 err:\n"+ex.message)}},
chkUniBtnClass : function(Obj, score){if(score >= Math.abs(_oneSexyPicCost)){Obj.addClass("good");}else{
Obj.removeClass("good");}}};}( jQuery ) );