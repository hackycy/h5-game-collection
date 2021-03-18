var CRENDER_DEBUG = false;
function ImagesPreloader() {
	var self = this;
	this.curItem = -1;
	this.loadedImages = {};
	this.data = null;
	this.endCallback = null;
	this.processCallback = null;
	this.load = function (data, endCallback, processCallback) {
		this.data = data;
		this.endCallback = endCallback;
		this.processCallback = processCallback;
		for (var i = 0; i < this.data.length; i++) {
			var item = this.data[i];
			var img = new Image();
			img.src = item.src;
			this.loadedImages[item.name] = img;
		}
		wait();
	};
	function wait() {
		var itemsLoaded = 0;
		var itemsTotal = 0;
		for (var key in self.loadedImages) {
			if (self.loadedImages[key].complete)
				itemsLoaded++;
			itemsTotal++;
		}
		if (itemsLoaded >= itemsTotal) {
			if (self.endCallback)
				self.endCallback(self.loadedImages);
			return;
		} else {
			if (self.processCallback)
				self.processCallback(Math.floor(itemsLoaded / itemsTotal * 100));
			setTimeout(wait, 50);
		}
	}
}
var Utils = {
	touchScreen : ("ontouchstart" in window),
	globalScale : 1,
	setCookie : function (name, value) {
		window.localStorage.setItem(name, value);
	},
	getCookie : function (name) {
		return window.localStorage.getItem(name);
	},
	bindEvent : function (el, eventName, eventHandler) {
		if (el.addEventListener) {
			el.addEventListener(eventName, eventHandler, false);
		} else if (el.attachEvent) {
			el.attachEvent('on' + eventName, eventHandler);
		}
	},
	getObjectLeft : function (element) {
		result = element.offsetLeft;
		if (element.offsetParent)
			result += Utils.getObjectLeft(element.offsetParent);
		return result;
	},
	getObjectTop : function (element) {
		result = element.offsetTop;
		if (element.offsetParent)
			result += Utils.getObjectTop(element.offsetParent);
		return result;
	},
	parseGet : function () {
		var get = {};
		var s = new String(window.location);
		var p = s.indexOf("?");
		var tmp,
		params;
		if (p != -1) {
			s = s.substr(p + 1, s.length);
			params = s.split("&");
			for (var i = 0; i < params.length; i++) {
				tmp = params[i].split("=");
				get[tmp[0]] = tmp[1];
			}
		}
		return get;
	},
	globalPixelScale : 1,
	getMouseCoord : function (event, object) {
		var e = event || window.event;
		if (e.touches)
			e = e.touches[0];
		if (!e)
			return {
				x : 0,
				y : 0
			};
		var x = 0;
		var y = 0;
		var mouseX = 0;
		var mouseY = 0;
		if (object) {
			x = Utils.getObjectLeft(object);
			y = Utils.getObjectTop(object);
		}
		if (e.pageX || e.pageY) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		} else if (e.clientX || e.clientY) {
			mouseX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
			mouseY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
		}
		var retX = (mouseX - x);
		var retY = (mouseY - y);
		return {
			x : retX,
			y : retY
		};
	},
	extend : function (Child, Parent) {
		var F = function () {};
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.prototype.constructor = Child;
		Child.superclass = Parent.prototype;
	},
	removeFromArray : function (arr, item) {
		var tmp = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != item)
				tmp.push(arr[i]);
		}
		return tmp;
	},
	showLoadProgress : function (val) {
		var scl = Utils.globalScale;
		var s = 'Loading: ' + val + '%';
		s += '<br><br>';
		s += '<div style="display: block; background: #000; width: ' + (val * scl * 2) + 'px; height: ' + (10 * scl) + 'px;">&nbsp;</div>';
		document.getElementById('progress').innerHTML = s;
	},
	hideAddressBarLock : false,
	mobileHideAddressBar : function () {
		if (Utils.hideAddressBarLock)
			return;
		window.scrollTo(0, 1);
	},
	mobileCheckIphone4 : function () {
		if (window.devicePixelRatio) {
			if (navigator.userAgent.indexOf('iPhone') != -1 && window.devicePixelRatio == 2)
				return true;
		}
		return false;
	},
	checkSpilgamesEnvironment : function () {
		return (typeof ExternalAPI != "undefined" && ExternalAPI.type == "Spilgames" && ExternalAPI.check());
	},
	mobileCorrectPixelRatio : function () {
		var meta = document.createElement('meta');
		meta.name = "viewport";
		var content = "target-densitydpi=device-dpi, user-scalable=no";
		if (Utils.checkSpilgamesEnvironment()) {
			if (window.devicePixelRatio > 1)
				content += ", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5";
			else
				content += ", initial-scale=1, maximum-scale=1, minimum-scale=1";
		} else {
			if (Utils.mobileCheckIphone4())
				content += ", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5";
			else
				content += ", initial-scale=1, maximum-scale=1, minimum-scale=1";
		}
		meta.content = content;
		document.getElementsByTagName('head')[0].appendChild(meta);
	},
	getMobileScreenResolution : function (landscape) {
		var scale = 1;
		var w = 0;
		var h = 0;
		var container = {
			width : window.innerWidth,
			height : window.innerHeight
		};
		if (!Utils.touchScreen || container.height > container.width) {
			w = container.width;
			h = container.height;
		} else {
			w = container.height;
			h = container.width;
		}
		if (Utils.touchScreen) {
			if (w > 320 && w <= 480)
				scale = 1.5;
			if (w > 480)
				scale = 2;
			if (Utils.mobileCheckIphone4())
				scale = 2;
		} else {
			if (landscape) {
				if (h >= 640)
					scale = 2;
				if (h < 640 && h >= 480)
					scale = 1.5;
			} else {
				if (h >= 800 && h < 960)
					scale = 1.5;
				if (h >= 960)
					scale = 2;
			}
		}
		return Utils.getScaleScreenResolution(scale, landscape);
	},
	getScaleScreenResolution : function (scale, landscape) {
		var w,
		h;
		w = Math.round(320 * scale);
		h = Math.round(480 * scale);
		if (landscape) {
			var tmp = w;
			w = h;
			h = tmp;
		}
		return {
			width : w,
			height : h,
			scale : scale
		};
	},
	imagesRoot : 'images',
	createLayout : function (container, resolution) {
		var scl = Utils.globalScale;
		var height = window.innerHeight;
		if ("orientation" in window)
			height = 1024;
		else
			document.body.style.overflow = "hidden";
		var s = "";
		s += '<div id="progress_container" align="center" style="width: 100%; height: ' + height + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">';
		s += '<table cellspacing="0" cellpadding="0"><tr><td id="progress" align="center" valign="middle" style="width: ' + resolution.width + 'px; height: ' + resolution.height + 'px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: ' + (12 * scl) + 'px; vertical-align: middle;"></td></tr></table>';
		s += '</div>';
		s += '<div id="screen_background_container" align="center" style="width: 100%; height: ' + height + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">'
		s += '<div id="screen_background_wrapper" style="width: ' + resolution.width + 'px; height: ' + resolution.height + 'px; overflow: hidden; position: relative;">';
		s += '<canvas id="screen_background" width="' + resolution.width + '" height="' + resolution.height + '"></canvas>';
		s += '</div>';
		s += '</div>';
		s += '<div id="screen_container" align="center" style="width: 100%; height: ' + height + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
		s += '<div id="screen_wrapper" style="width: ' + resolution.width + 'px; height: ' + resolution.height + 'px; overflow: hidden; position: relative;">';
		s += '<canvas id="screen" style="position: absolute; left: 0px; top: 0px; z-index: 1000000;" width="' + resolution.width + '" height="' + resolution.height + '">You browser does not support this application :(</canvas>';
		s += '</div>';
		s += '</div>';
		container.innerHTML = s;
		var p = document.createElement("div");
		p.setAttribute("id", "p2l_container");
		p.setAttribute("align", "center");
		var w = resolution.width;
		p.setAttribute("style", "width: 100%; height: " + height + "px; position: absolute; left: 0px; top: 0px; display: none; z-index: 1000; background: #fff;");
		p.innerHTML = '<img id="p2l" src="' + Utils.imagesRoot + '/p2l.jpg" style="padding-top: ' + ((w - 240) / 2) + 'px" />';
		document.body.appendChild(p);
	},
	preventEvent : function (e) {
		e.preventDefault();
		e.stopPropagation();
		e.cancelBubble = true;
		e.returnValue = false;
		return false;
	},
	addMobileListeners : function (landscape) {
		Utils.bindEvent(document.body, "touchstart", Utils.preventEvent);
		Utils.bindEvent(window, "scroll", function (e) {
			setTimeout(Utils.mobileHideAddressBar, 300);
		});
		Utils.bindEvent(window, "orientationchange", function () {
			setTimeout("Utils.checkOrientation(" + (landscape ? "true" : "false") + ")", 300);
		});
		setTimeout(Utils.mobileHideAddressBar, 500);
	},
	storeOrient : null,
	checkOrientation : function (landscape) {
		if (!("orientation" in window))
			return;
		if (!document.getElementById('screen_container'))
			return;
		var getParams = Utils.parseGet();
		if (getParams.nocheckorient == 1)
			return;
		var orient = (window.innerWidth > window.innerHeight);
		if (Utils.storeOrient === orient)
			return;
		Utils.storeOrient = orient;
		var ok = (orient == landscape);
		if (!ok) {
			Utils.dispatchEvent("lockscreen");
			document.getElementById('p2l_container').style.display = 'block';
			document.getElementById('screen_background_container').style.display = 'none';
			document.getElementById('screen_container').style.display = 'none';
		} else {
			Utils.dispatchEvent("unlockscreen");
			document.getElementById('p2l_container').style.display = 'none';
			document.getElementById('screen_background_container').style.display = 'block';
			document.getElementById('screen_container').style.display = 'block';
		}
		if (Utils.checkSpilgamesEnvironment())
			document.getElementById('p2l_container').style.display = 'none';
		setTimeout(Utils.mobileHideAddressBar, 50);
		setTimeout(Utils.fitLayoutToScreen, 100);
	},
	fitLayoutTimer : null,
	addFitLayoutListeners : function () {
		Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500);
	},
	removeFitLayoutListeners : function () {
		clearInterval(Utils.fitLayoutTimer);
	},
	fitLayoutLock : false,
	fitLayoutToScreen : function (container) {
		if (Utils.fitLayoutLock)
			return;
		var p,
		s,
		width,
		height;
		if (typeof container != "object" || !container.width) {
			width = window.innerWidth;
			height = window.innerHeight;
			if (Utils.checkSpilgamesEnvironment())
				height -= 25;
			container = {
				width : width,
				height : height
			};
		}
		s = document.getElementById("screen");
		if (!s)
			return;
		if (!s.initWidth) {
			s.initWidth = s.width;
			s.initHeight = s.height;
		}
		width = s.initWidth;
		height = s.initHeight;
		var scale = 1;
		var scaleX = container.width / width;
		var scaleY = container.height / height;
		scale = (scaleX < scaleY ? scaleX : scaleY);
		Utils.globalPixelScale = scale;
		width = Math.floor(width * scale);
		height = Math.floor(height * scale);
		if (s.lastWidth == width && s.lastHeight == height)
			return;
		s.lastWidth = width;
		s.lastHeight = height;
		Utils.resizeElement("screen", width, height);
		Utils.resizeElement("screen_background", width, height);
		s = document.getElementById("progress");
		if (s) {
			s.style.width = (~~width) + "px";
			s.style.height = (~~height) + "px";
		}
		s = document.getElementById("screen_wrapper");
		s.style.width = (~~width) + "px";
		s.style.height = (~~height) + "px";
		s = document.getElementById("screen_background_wrapper");
		s.style.width = (~~width) + "px";
		s.style.height = (~~height) + "px";
		Utils.dispatchEvent("fitlayout");
		setTimeout(Utils.mobileHideAddressBar, 50);
	},
	resizeElement : function (id, width, height) {
		var s = document.getElementById(id);
		if (!s)
			return;
		s.setAttribute("width", width);
		s.setAttribute("height", height);
	},
	drawIphoneLimiter : function (stage, landscape) {
		if (landscape)
			stage.drawRectangle(240, 295, 480, 54, "#f00", true, 0.5, true);
		else
			stage.drawRectangle(160, 448, 320, 64, "#f00", true, 0.5, true);
	},
	drawGrid : function (stage, landscape, col) {
		if (typeof landscape == 'undefined')
			landscape = false;
		var dx = 10;
		var dy = 10;
		if (typeof col == 'undefined')
			col = '#FFF';
		var w = 1 / Utils.globalScale / Utils.globalPixelScale;
		var s = {
			w : (landscape ? 480 : 320),
			h : (landscape ? 320 : 480)
		}
		for (var x = dx; x < s.w; x += dx) {
			var o = 0.1 + 0.1 * (((x - dx) / dx) % 10);
			stage.drawLine(x, 0, x, s.h, w, col, o);
		}
		for (var y = dy; y < s.h; y += dy) {
			var o = 0.1 + 0.1 * (((y - dy) / dy) % 10);
			stage.drawLine(0, y, s.w, y, w, col, o);
		}
	},
	drawScaleFix : function (stage, landscape) {
		if (Utils.globalScale == 0.75) {
			if (landscape)
				stage.drawRectangle(507, 160, 54, 320, "#000", true, 1, true);
			else
				stage.drawRectangle(160, 507, 320, 54, "#000", true, 1, true);
		}
		if (Utils.globalScale == 1.5) {
			if (landscape)
				stage.drawRectangle(510, 160, 60, 320, "#000", true, 1, true);
			else
				stage.drawRectangle(160, 510, 320, 60, "#000", true, 1, true);
		}
	},
	grad2radian : function (val) {
		return val / (180 / Math.PI);
	},
	radian2grad : function (val) {
		return val * (180 / Math.PI);
	},
	eventsListeners : [],
	onlockscreen : null,
	onunlockscreen : null,
	onfitlayout : null,
	addEventListener : function (type, callback) {
		EventsManager.addEvent(Utils, type, callback);
	},
	removeEventListener : function (type, callback) {
		EventsManager.removeEvent(Utils, type, callback);
	},
	dispatchEvent : function (type, params) {
		return EventsManager.dispatchEvent(Utils, type, params);
	}
}
var EventsManager = {
	addEvent : function (obj, type, callback) {
		if (!obj.eventsListeners)
			return;
		for (var i = 0; i < obj.eventsListeners.length; i++) {
			if (obj.eventsListeners[i].type === type && obj.eventsListeners[i].callback === callback)
				return;
		}
		obj.eventsListeners.push({
			type : type,
			callback : callback
		});
	},
	removeEvent : function (obj, type, callback) {
		if (!obj.eventsListeners)
			return;
		for (var i = 0; i < obj.eventsListeners.length; i++) {
			if (obj.eventsListeners[i].type === type && obj.eventsListeners[i].callback === callback) {
				obj.eventsListeners = Utils.removeFromArray(obj.eventsListeners, obj.eventsListeners[i]);
				return;
			}
		}
	},
	dispatchEvent : function (obj, type, params) {
		if (!obj.eventsListeners)
			return;
		var ret;
		if (typeof obj["on" + type] == "function") {
			ret = obj["on" + type](params);
			if (ret === false)
				return false;
		}
		for (var i = 0; i < obj.eventsListeners.length; i++) {
			if (obj.eventsListeners[i].type === type) {
				ret = obj.eventsListeners[i].callback(params);
				if (ret === false)
					return false;
			}
		}
	}
}
var ANCHOR_ALIGN_LEFT = -1;
var ANCHOR_ALIGN_CENTER = 0;
var ANCHOR_ALIGN_RIGHT = 1;
var ANCHOR_VALIGN_TOP = -1;
var ANCHOR_VALIGN_MIDDLE = 0;
var ANCHOR_VALIGN_BOTTOM = 1;
function Sprite(img, w, h, f, l) {
	this.uid = 0;
	this.stage = null;
	this.x = 0;
	this.y = 0;
	this.width = w;
	this.height = h;
	this.offset = {
		left : 0,
		top : 0
	};
	this.anchor = {
		x : 0,
		y : 0
	}
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
	this.zIndex = 0;
	this.visible = true;
	this.opacity = 1;
	this['static'] = false;
	this.ignoreViewport = false;
	this.animated = true;
	this.currentFrame = 0;
	this.totalFrames = Math.max(1, ~~f);
	if (this.totalFrames <= 1)
		this.animated = false;
	this.currentLayer = 0;
	this.totalLayers = Math.max(1, ~~l);
	this.bitmap = img;
	this.mask = null;
	this.fillColor = false;
	this.destroy = false;
	this.animStep = 0;
	this.animDelay = 1;
	this.drawAlways = false;
	this.dragged = false;
	this.dragX = 0;
	this.dragY = 0;
	this.getX = function () {
		return Math.round(this.x * Utils.globalScale);
	};
	this.getY = function () {
		return Math.round(this.y * Utils.globalScale);
	};
	this.getWidth = function () {
		return this.width * this.scaleX * Utils.globalScale;
	};
	this.getHeight = function () {
		return this.height * this.scaleY * Utils.globalScale;
	};
	this.startDrag = function (x, y) {
		this.dragged = true;
		this.dragX = x;
		this.dragY = y;
	}
	this.stopDrag = function () {
		this.dragged = false;
		this.dragX = 0;
		this.dragY = 0;
	}
	this.play = function () {
		this.animated = true;
	};
	this.stop = function () {
		this.animated = false;
	};
	this.gotoAndStop = function (frame) {
		this.currentFrame = frame;
		this.stop();
	};
	this.gotoAndPlay = function (frame) {
		this.currentFrame = frame;
		this.play();
	};
	this.removeTweens = function () {
		if (!this.stage)
			return;
		this.stage.clearObjectTweens(this);
	};
	this.addTween = function (prop, end, duration, ease, onfinish, onchange) {
		if (!this.stage)
			return;
		var val = this[prop];
		if (isNaN(val))
			return;
		var t = stage.createTween(this, prop, val, end, duration, ease);
		t.onchange = onchange;
		t.onfinish = onfinish;
		return t;
	};
	this.moveTo = function (x, y, duration, ease, onfinish, onchange) {
		duration = ~~duration;
		if (duration <= 0) {
			this.setPosition(x, y);
		} else {
			var t1 = this.addTween('x', x, duration, ease, onfinish, onchange);
			if (t1)
				t1.play();
			var t2 = this.addTween('y', y, duration, ease, (t1 ? null : onfinish), (t1 ? null : onchange));
			if (t2)
				t2.play();
		}
		return this;
	}
	this.moveBy = function (x, y, duration, ease, onfinish, onchange) {
		return this.moveTo(this.x + x, this.y + y, duration, ease, onfinish, onchange);
	}
	this.fadeTo = function (opacity, duration, ease, onfinish, onchange) {
		duration = ~~duration;
		if (duration <= 0) {
			this.opacity = opacity;
		} else {
			var t = this.addTween('opacity', opacity, duration, ease, onfinish, onchange);
			if (t)
				t.play();
		}
		return this;
	}
	this.fadeBy = function (opacity, duration, ease, onfinish, onchange) {
		var val = Math.max(0, Math.min(1, this.opacity + opacity));
		return this.fadeTo(val, duration, ease, onfinish, onchange);
	}
	this.rotateTo = function (rotation, duration, ease, onfinish, onchange) {
		duration = ~~duration;
		if (duration <= 0) {
			this.rotation = rotation;
		} else {
			var t = this.addTween('rotation', rotation, duration, ease, onfinish, onchange);
			if (t)
				t.play();
		}
		return this;
	}
	this.rotateBy = function (rotation, duration, ease, onfinish, onchange) {
		return this.rotateTo(this.rotation + rotation, duration, ease, onfinish, onchange);
	}
	this.scaleTo = function (scale, duration, ease, onfinish, onchange) {
		duration = ~~duration;
		if (duration <= 0) {
			this.scaleX = this.scaleY = scale;
		} else {
			var t1 = this.addTween('scaleX', scale, duration, ease, onfinish, onchange);
			if (t1)
				t1.play();
			var t2 = this.addTween('scaleY', scale, duration, ease, (t1 ? null : onfinish), (t1 ? null : onchange));
			if (t2)
				t2.play();
		}
		return this;
	}
	this.nextFrame = function () {
		this.dispatchEvent("enterframe", {
			target : this
		});
		if (!this.history.created)
			this.updateHistory();
		if (!this.animated)
			return;
		this.animStep++;
		if (this.animStep >= this.animDelay) {
			this.currentFrame++;
			this.animStep = 0;
		}
		if (this.currentFrame >= this.totalFrames)
			this.currentFrame = 0;
	};
	this.updateHistory = function () {
		this.history.x = this.getX();
		this.history.y = this.getY();
		this.history.rotation = this.rotation;
		this.history.frame = this.currentFrame;
		var rect = new Rectangle(this.history.x, this.history.y, this.getWidth(), this.getHeight(), this.rotation);
		rect.AABB[0].x -= 1;
		rect.AABB[0].y -= 1;
		rect.AABB[1].x += 1;
		rect.AABB[1].y += 1;
		this.history.AABB = rect.AABB;
		this.history.created = true;
		this.history.changed = false;
	};
	this.history = {
		created : false,
		drawed : false,
		changed : false,
		x : 0,
		y : 0,
		rotation : 0,
		frame : 0,
		AABB : []
	};
	this.eventsWhenInvisible = false;
	this.onmouseover = null;
	this.onmouseout = null;
	this.onmousedown = null;
	this.onmouseup = null;
	this.onclick = null;
	this.oncontextmenu = null;
	this.onmousemove = null;
	this.onenterframe = null;
	this.onrender = null;
	this.onadd = null;
	this.onremove = null;
	this.onbox2dsync = null;
	this.mouseOn = false;
	this.getPosition = function () {
		return {
			x : this.x + 0,
			y : this.y + 0
		}
	}
	this.setPosition = function (x, y) {
		if ((typeof y == 'undefined') && (typeof x['x'] != 'undefined') && (typeof x['y'] != 'undefined')) {
			return this.setPosition(x.x, x.y);
		}
		this.x = parseFloat(x);
		this.y = parseFloat(y);
	}
	this.getAnchor = function () {
		return new Vector(this.anchor.x, this.anchor.y);
	}
	this.setAnchor = function (x, y) {
		if ((typeof y == 'undefined') && (typeof x['x'] != 'undefined') && (typeof x['y'] != 'undefined')) {
			return this.setAnchor(x.x, x.y);
		}
		this.anchor.x = parseFloat(x);
		this.anchor.y = parseFloat(y);
	}
	this.alignAnchor = function (h, v) {
		h = parseInt(h);
		if (isNaN(h))
			h = ANCHOR_ALIGN_CENTER;
		if (h < 0)
			h = ANCHOR_ALIGN_LEFT;
		if (h > 0)
			h = ANCHOR_ALIGN_RIGHT;
		v = parseInt(v);
		if (isNaN(v))
			v = ANCHOR_VALIGN_MIDDLE;
		if (v < 0)
			v = ANCHOR_VALIGN_TOP;
		if (v > 0)
			v = ANCHOR_VALIGN_BOTTOM;
		var anchor = new Vector(this.width * h / 2, this.height * v / 2).add(this.getPosition());
		this.setAnchor(anchor.x, anchor.y);
		return this.getAnchor();
	}
	this.getAbsoluteAnchor = function () {
		return new Vector(this.x, this.y);
	}
	this.getRelativeCenter = function () {
		var a = this.getAnchor();
		var c = new Vector(-this.anchor.x * this.scaleX, -this.anchor.y * this.scaleY);
		c.rotate(-this.rotation);
		return c;
	}
	this.getAbsoluteCenter = function () {
		return this.getRelativeCenter().add(this.getPosition());
	}
	this.getCenter = function () {
		return this.getAbsoluteCenter();
	}
	this.getDrawRectangle = function () {
		var
		c = this.getCenter(),
		r = new Rectangle(0, 0, this.width * this.scaleX, this.height * this.scaleY, this.rotation);
		r.move(c.x, c.y);
		return r;
	}
	this.getAABBRectangle = function () {
		var
		r = this.getDrawRectangle(),
		w = r.AABB[1].x - r.AABB[0].x,
		h = r.AABB[1].y - r.AABB[0].y;
		return new Rectangle(r.AABB[0].x + (w / 2), r.AABB[0].y + (h / 2), w, h, 0);
	}
	this.localToGlobal = function (x, y) {
		var p = ((typeof x == 'object') && (typeof x['x'] != 'undefined') && (typeof x['y'] != 'undefined')) ? new Vector(x.x + 0, x.y + 0) : new Vector(x, y);
		p.rotate(this.rotation).add(this.getPosition());
		return p;
	}
	this.globalToLocal = function (x, y) {
		var p = ((typeof x == 'object') && (typeof x['x'] != 'undefined') && (typeof x['y'] != 'undefined')) ? new Vector(x.x + 0, x.y + 0) : new Vector(x, y);
		p.subtract(this.getPosition()).rotate(-this.rotation);
		return p;
	}
	this.allowDebugDrawing = true;
	this.debugDraw = function () {
		if (!this.visible)
			return;
		if (!this.allowDebugDrawing)
			return;
		var
		a = this.getPosition(),
		c = this.getCenter(),
		r = this.getDrawRectangle(),
		aabb = this.getAABBRectangle();
		stage.drawCircle(a.x, a.y, 1, 1, 'rgba(255,0,0,0.9)');
		stage.drawCircle(c.x, c.y, 1, 1, 'rgba(0,255,0,0.9)');
		stage.drawLine(a.x, a.y, c.x, c.y, 1, 'rgba(255,255,255,0.5)');
		stage.drawPolygon(r.vertices, 0.5, 'rgba(255,0,255,0.5)', 1);
		stage.drawLine(aabb.vertices[0].x, aabb.vertices[0].y, aabb.vertices[2].x, aabb.vertices[2].y, 0.1, 'rgba(255,255,255,0.5)');
		stage.drawLine(aabb.vertices[2].x, aabb.vertices[0].y, aabb.vertices[0].x, aabb.vertices[2].y, 0.1, 'rgba(255,255,255,0.5)');
		stage.drawPolygon(aabb.vertices, 0.5, 'rgba(255,255,255,0.5)');
	}
	this.setZIndex = function (z) {
		this.zIndex = ~~z;
		if (!this.stage)
			return;
		this.stage.setZIndex(this, ~~z);
	}
	this.eventsListeners = [];
	this.addEventListener = function (type, callback) {
		EventsManager.addEvent(this, type, callback);
	}
	this.removeEventListener = function (type, callback) {
		EventsManager.removeEvent(this, type, callback);
	}
	this.dispatchEvent = function (type, params) {
		return EventsManager.dispatchEvent(this, type, params);
	}
	this.hitTestPoint = function (x, y, checkPixel, checkDragged, debug) {
		if (!this.stage)
			return false;
		return this.stage.hitTestPointObject(this, x, y, checkPixel, checkDragged, debug);
	}
}
function Tween(obj, prop, start, end, duration, callback) {
	var self = this;
	if (typeof obj != 'object')
		obj = null;
	if (obj) {
		if (typeof obj[prop] == 'undefined')
			throw new Error('Trying to tween undefined property "' + prop + '"');
		if (isNaN(obj[prop]))
			throw new Error('Tweened value can not be ' + (typeof obj[prop]));
	} else {
		if (isNaN(prop))
			throw new Error('Tweened value can not be ' + (typeof prop));
	}
	if (typeof callback != 'function')
		callback = Easing.linear.easeIn;
	this.obj = obj;
	this.prop = prop;
	this.onchange = null;
	this.onfinish = null;
	this.start = start;
	this.end = end;
	this.duration = ~~duration;
	this.callback = callback;
	this.playing = false;
	this._pos = -1;
	this.play = function () {
		self.playing = true;
		self.tick();
	}
	this.pause = function () {
		self.playing = false;
	}
	this.rewind = function () {
		self._pos = -1;
	}
	this.forward = function () {
		self._pos = this.duration;
	}
	this.stop = function () {
		self.pause();
		self.rewind();
	}
	this.updateValue = function (val) {
		if (self.obj) {
			self.obj[self.prop] = val;
		} else {
			self.prop = val;
		}
	}
	this.tick = function () {
		if (!self.playing)
			return false;
		self._pos++;
		if (self._pos < 0)
			return false;
		if (self._pos > self.duration)
			return self.finish();
		var func = self.callback;
		var val = func(self._pos, self.start, self.end - self.start, self.duration);
		this.updateValue(val);
		self.dispatchEvent("change", {
			target : self,
			value : val
		});
		return false;
	}
	this.finish = function () {
		self.stop();
		self.updateValue(self.end);
		return self.dispatchEvent("finish", {
			target : self,
			value : self.end
		});
	}
	this.eventsListeners = [];
	this.addEventListener = function (type, callback) {
		EventsManager.addEvent(this, type, callback);
	}
	this.removeEventListener = function (type, callback) {
		EventsManager.removeEvent(this, type, callback);
	}
	this.dispatchEvent = function (type, params) {
		return EventsManager.dispatchEvent(this, type, params);
	}
}
var Easing = {
	back : {
		easeIn : function (t, b, c, d) {
			var s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOut : function (t, b, c, d) {
			var s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOut : function (t, b, c, d) {
			var s = 1.70158;
			if ((t /= d / 2) < 1)
				return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		}
	},
	bounce : {
		easeIn : function (t, b, c, d) {
			return c - Easing.bounce.easeOut(d - t, 0, c, d) + b;
		},
		easeOut : function (t, b, c, d) {
			if ((t /= d) < (1 / 2.75))
				return c * (7.5625 * t * t) + b;
			else if (t < (2 / 2.75))
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
			else if (t < (2.5 / 2.75))
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
			else
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
		},
		easeInOut : function (t, b, c, d) {
			if (t < d / 2)
				return Easing.bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
			else
				return Easing.bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
		}
	},
	circular : {
		easeIn : function (t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOut : function (t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOut : function (t, b, c, d) {
			if ((t /= d / 2) < 1)
				return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		}
	},
	cubic : {
		easeIn : function (t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOut : function (t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOut : function (t, b, c, d) {
			if ((t /= d / 2) < 1)
				return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		}
	},
	exponential : {
		easeIn : function (t, b, c, d) {
			return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOut : function (t, b, c, d) {
			return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOut : function (t, b, c, d) {
			if (t == 0)
				return b;
			if (t == d)
				return b + c;
			if ((t /= d / 2) < 1)
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	},
	linear : {
		easeIn : function (t, b, c, d) {
			return c * t / d + b;
		},
		easeOut : function (t, b, c, d) {
			return c * t / d + b;
		},
		easeInOut : function (t, b, c, d) {
			return c * t / d + b;
		}
	},
	quadratic : {
		easeIn : function (t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOut : function (t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOut : function (t, b, c, d) {
			if ((t /= d / 2) < 1)
				return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		}
	},
	quartic : {
		easeIn : function (t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOut : function (t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOut : function (t, b, c, d) {
			if ((t /= d / 2) < 1)
				return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		}
	},
	quintic : {
		easeIn : function (t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOut : function (t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOut : function (t, b, c, d) {
			if ((t /= d / 2) < 1)
				return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		}
	},
	sine : {
		easeIn : function (t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOut : function (t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOut : function (t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		}
	}
}
function StageTimer(callback, timeout, repeat) {
	this.repeat = repeat;
	this.initialTimeout = timeout;
	this.timeout = timeout;
	this.callback = callback;
	this.paused = false;
	this.update = function () {
		if (this.paused)
			return;
		this.timeout--;
		if (this.timeout == 0) {
			if (typeof this.callback == "function")
				this.callback();
			if (typeof this.callback == "string")
				eval(this.callback);
			if (this.repeat)
				this.timeout = this.initialTimeout;
			else
				return true;
		}
		return false;
	};
	this.resume = function () {
		this.paused = false;
	};
	this.pause = function () {
		this.paused = true;
	};
}
function Stage(cnsId, w, h) {
	var self = this;
	this.canvas = document.getElementById(cnsId);
	this.canvas.renderController = this;
	this.canvas.ctx = this.canvas.getContext('2d');
	this.screenWidth = w;
	this.screenHeight = h;
	this.viewport = {
		x : 0,
		y : 0
	};
	this.objects = [];
	this.objectsCounter = 0;
	this.buffer = document.createElement('canvas');
	this.buffer.width = w * Utils.globalScale;
	this.buffer.height = h * Utils.globalScale;
	this.buffer.ctx = this.buffer.getContext('2d');
	this.delay = 40;
	this.fillColor = false;
	this.started = false;
	this.fps = 0;
	this.lastFPS = 0;
	this.showFPS = false;
	this.pixelClickEvent = false;
	this.pixelMouseUpEvent = false;
	this.pixelMouseDownEvent = false;
	this.pixelMouseMoveEvent = false;
	this.ceilSizes = false;
	this.tmMain
	this.tmFPS
	this.partialUpdate = false;
	this.clearLock = false;
	this.destroy = function () {
		clearTimeout(this.tmMain);
		clearTimeout(this.tmFPS);
		this.stop();
		this.clear();
		this.clearScreen(this.canvas);
	}
	this.clearScreen = function (canvas) {
		canvas.ctx.clearRect(0, 0, this.screenWidth * Utils.globalScale * Utils.globalPixelScale, this.screenHeight * Utils.globalScale * Utils.globalPixelScale);
	}
	this.findMaxZIndex = function () {
		var max = -1;
		var ix = false;
		for (var i = 0; i < this.objects.length; i++) {
			if (this.objects[i].zIndex > max) {
				max = this.objects[i].zIndex;
				ix = i;
			}
		}
		return {
			index : ix,
			zIndex : max
		};
	};
	this.findMinZIndex = function () {
		var min = -1;
		var ix = false;
		for (var i = 0; i < this.objects.length; i++) {
			if (i == 0) {
				min = this.objects[i].zIndex;
				ix = 0;
			}
			if (this.objects[i].zIndex < min) {
				min = this.objects[i].zIndex;
				ix = i;
			}
		}
		return {
			index : ix,
			zIndex : min
		};
	};
	this.addChild = function (item) {
		var f = this.findMaxZIndex();
		var z = item.zIndex;
		if (f.index !== false)
			item.zIndex = f.zIndex + 1;
		else
			item.zIndex = 0;
		this.objectsCounter++;
		item.uid = this.objectsCounter;
		item.stage = this;
		this.objects.push(item);
		if (z != 0) {
			this.setZIndex(item, ~~z);
		}
		item.dispatchEvent("add", {
			target : item
		});
		return item;
	};
	this.removeChild = function (item) {
		if (item) {
			this.clearObjectTweens(item);
			item.dispatchEvent("remove", {
				target : item
			});
			item.stage = null;
			this.objects = Utils.removeFromArray(this.objects, item);
		}
	};
	this.setZIndex = function (item, index) {
		var bSort = true;
		var i,
		tmp;
		item.zIndex = index;
		while (bSort) {
			bSort = false;
			for (i = 0; i < this.objects.length - 1; i++) {
				if (this.objects[i].zIndex > this.objects[i + 1].zIndex) {
					tmp = this.objects[i];
					this.objects[i] = this.objects[i + 1];
					this.objects[i + 1] = tmp;
					bSort = true;
				}
			}
		}
	}
	this.hitTestPointObject = function (obj, x, y, pixelCheck, includeDragged, debug) {
		var cX,
		cY,
		cW,
		cH,
		mX,
		mY,
		r,
		present,
		imageData;
		cW = obj.width * Math.abs(obj.scaleX);
		cH = obj.height * Math.abs(obj.scaleY);
		cX = obj.x - cW / 2;
		cY = obj.y - cH / 2;
		mX = x;
		mY = y;
		if (!obj.ignoreViewport) {
			mX += this.viewport.x;
			mY += this.viewport.y;
		}
		present = false;
		if (obj.rotation == 0) {
			if (cX <= mX && cY <= mY && cX + cW >= mX && cY + cH >= mY)
				present = true;
		} else {
			r = obj.getDrawRectangle();
			if (r.hitTestPoint(new Vector(mX, mY)))
				present = true;
		}
		if (present && pixelCheck) {
			this.buffer.width = this.screenWidth * Utils.globalScale * Utils.globalPixelScale;
			this.buffer.height = this.screenHeight * Utils.globalScale * Utils.globalPixelScale;
			this.clearScreen(this.buffer);
			this.renderObject(this.buffer, obj);
			var pX = Math.floor(x * Utils.globalScale * Utils.globalPixelScale);
			var pY = Math.floor(y * Utils.globalScale * Utils.globalPixelScale);
			imageData = this.buffer.ctx.getImageData(pX, pY, 1, 1);
			if (imageData.data[3] == 0)
				present = false;
		}
		if (!present && includeDragged && obj.dragged)
			present = true;
		return present;
	}
	this.getObjectsStackByCoord = function (x, y, pixelCheck, includeDragged, debug) {
		var obj;
		var tmp = [];
		for (var i = 0; i < this.objects.length; i++) {
			if (this.objects[i].visible || this.objects[i].eventsWhenInvisible) {
				obj = this.objects[i];
				if (this.hitTestPointObject(obj, x, y, pixelCheck, includeDragged, debug)) {
					tmp.push(obj);
				}
			}
		}
		return tmp;
	};
	this.getMaxZIndexInStack = function (stack) {
		var max = -1;
		var ix = 0;
		for (var i = 0; i < stack.length; i++) {
			if (stack[i].zIndex > max) {
				max = stack[i].zIndex;
				ix = i;
			}
		}
		return ix;
	};
	this.sortStack = function (stack, revert) {
		var bSort = true;
		var ok;
		var i,
		tmp;
		while (bSort) {
			bSort = false;
			for (i = 0; i < stack.length - 1; i++) {
				ok = false;
				if (stack[i].zIndex < stack[i + 1].zIndex && !revert)
					ok = true;
				if (stack[i].zIndex > stack[i + 1].zIndex && revert)
					ok = true;
				if (ok) {
					tmp = stack[i];
					stack[i] = stack[i + 1];
					stack[i + 1] = tmp;
					bSort = true;
				}
			}
		}
		return stack;
	}
	this.finalizeMouseCoords = function (obj, m) {
		if (!obj)
			return m;
		var eX = this.prepareMouseCoord(m.x);
		var eY = this.prepareMouseCoord(m.y);
		if (!obj.ignoreViewport) {
			eX += this.viewport.x;
			eY += this.viewport.y;
		}
		eX = eX - obj.x;
		eY = eY - obj.y;
		return {
			x : eX,
			y : eY
		};
	}
	this.prepareMouseCoord = function (val) {
		return val / Utils.globalScale / Utils.globalPixelScale;
	}
	this.checkClick = function (event) {
		var m = Utils.getMouseCoord(event, this.canvas);
		var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), this.pixelClickEvent, false, true);
		var ret,
		f;
		if (stack.length > 0) {
			stack = this.sortStack(stack);
			for (var i = 0; i < stack.length; i++) {
				f = this.finalizeMouseCoords(stack[i], m);
				ret = stack[i].dispatchEvent("click", {
						target : stack[i],
						x : f.x,
						y : f.y
					});
				if (ret === false)
					return;
			}
		}
	};
	this.checkContextMenu = function (event) {
		var m = Utils.getMouseCoord(event, this.canvas);
		var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), this.pixelClickEvent);
		var ret,
		f;
		if (stack.length > 0) {
			stack = this.sortStack(stack);
			for (var i = 0; i < stack.length; i++) {
				f = this.finalizeMouseCoords(stack[i], m);
				ret = stack[i].dispatchEvent("contextmenu", {
						target : stack[i],
						x : f.x,
						y : f.y
					});
				if (ret === false)
					return;
			}
		}
	};
	this.checkMouseMove = function (event) {
		var m = Utils.getMouseCoord(event, this.canvas);
		for (i = 0; i < this.objects.length; i++) {
			if (this.objects[i].dragged) {
				var eX = m.x / Utils.globalScale / Utils.globalPixelScale;
				var eY = m.y / Utils.globalScale / Utils.globalPixelScale;
				if (!this.objects[i].ignoreViewport) {
					eX += this.viewport.x;
					eY += this.viewport.y;
				}
				this.objects[i].x = eX - this.objects[i].dragX;
				this.objects[i].y = eY - this.objects[i].dragY;
			}
		}
		var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), this.pixelMouseMoveEvent);
		var i,
		n,
		ret,
		bOk,
		f;
		var overStack = [];
		if (stack.length > 0) {
			stack = this.sortStack(stack);
			for (i = 0; i < stack.length; i++) {
				overStack.push(stack[i]);
				f = this.finalizeMouseCoords(stack[i], m);
				if (!stack[i].mouseOn)
					ret = stack[i].dispatchEvent("mouseover", {
							target : stack[i],
							x : f.x,
							y : f.y
						});
				stack[i].mouseOn = true;
				if (ret === false)
					break;
			}
			for (i = 0; i < stack.length; i++) {
				f = this.finalizeMouseCoords(stack[i], m);
				ret = stack[i].dispatchEvent("mousemove", {
						target : stack[i],
						x : f.x,
						y : f.y
					});
				if (ret === false)
					break;
			}
		}
		for (i = 0; i < this.objects.length; i++) {
			if (this.objects[i].mouseOn) {
				bOk = false;
				for (n = 0; n < overStack.length; n++) {
					if (overStack[n] == this.objects[i])
						bOk = true;
				}
				if (!bOk) {
					this.objects[i].mouseOn = false;
					f = this.finalizeMouseCoords(stack[i], m);
					ret = this.objects[i].dispatchEvent("mouseout", {
							target : this.objects[i],
							x : f.x,
							y : f.y
						});
					if (ret === false)
						break;
				}
			}
		}
	};
	this.checkMouseDown = function (event) {
		var m = Utils.getMouseCoord(event, this.canvas);
		var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), this.pixelMouseDownEvent);
		var ret,
		f;
		if (stack.length > 0) {
			stack = this.sortStack(stack);
			for (var i = 0; i < stack.length; i++) {
				f = this.finalizeMouseCoords(stack[i], m);
				ret = stack[i].dispatchEvent("mousedown", {
						target : stack[i],
						x : f.x,
						y : f.y
					});
				if (ret === false)
					return;
			}
		}
	};
	this.checkMouseUp = function (event) {
		var m = Utils.getMouseCoord(event, this.canvas);
		var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), this.pixelMouseUpEvent, true);
		var ret,
		f;
		if (stack.length > 0) {
			stack = this.sortStack(stack);
			for (var i = 0; i < stack.length; i++) {
				f = this.finalizeMouseCoords(stack[i], m);
				ret = stack[i].dispatchEvent("mouseup", {
						target : stack[i],
						x : f.x,
						y : f.y
					});
				if (ret === false)
					return;
			}
		}
	};
	this.clear = function () {
		for (var i = 0; i < this.objects.length; i++) {
			this.objects[i].dispatchEvent("remove", {
				target : this.objects[i]
			});
		}
		this.objects = [];
		this.tweens = [];
		this.timers = [];
		this.eventsListeners = [];
		this.objectsCounter = 0;
	};
	this.hitTest = function (obj1, obj2) {
		if (obj1.rotation == 0 && obj2.rotation == 0) {
			var cX1 = obj1.getX() - obj1.getWidth() / 2;
			var cY1 = obj1.getY() - obj1.getHeight() / 2;
			var cX2 = obj2.getX() - obj2.getWidth() / 2;
			var cY2 = obj2.getY() - obj2.getHeight() / 2;
			var top = Math.max(cY1, cY2);
			var left = Math.max(cX1, cX2);
			var right = Math.min(cX1 + obj1.getWidth(), cX2 + obj2.getWidth());
			var bottom = Math.min(cY1 + obj1.getHeight(), cY2 + obj2.getHeight());
			var width = right - left;
			var height = bottom - top;
			if (width > 0 && height > 0)
				return true;
			else
				return false;
		} else {
			var
			r1 = obj1.getDrawRectangle(),
			r2 = obj2.getDrawRectangle();
			return r1.hitTestRectangle(r2);
		}
	};
	this.drawRectangle = function (x, y, width, height, color, fill, opacity, ignoreViewport) {
		var cns = this.canvas;
		if (typeof opacity != 'undefined')
			cns.ctx.globalAlpha = opacity;
		else
			cns.ctx.globalAlpha = 1;
		cns.ctx.fillStyle = color;
		cns.ctx.strokeStyle = color;
		if (!ignoreViewport) {
			x -= this.viewport.x;
			y -= this.viewport.y;
		}
		x = x * Utils.globalScale * Utils.globalPixelScale;
		y = y * Utils.globalScale * Utils.globalPixelScale;
		width = width * Utils.globalScale * Utils.globalPixelScale;
		height = height * Utils.globalScale * Utils.globalPixelScale;
		if (fill)
			cns.ctx.fillRect(x - width / 2, y - height / 2, width, height);
		else
			cns.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
	};
	this.drawCircle = function (x, y, radius, width, color, opacity, ignoreViewport) {
		this.drawArc(x, y, radius, 0, Math.PI * 2, false, width, color, opacity, ignoreViewport);
	};
	this.drawArc = function (x, y, radius, startAngle, endAngle, anticlockwise, width, color, opacity, ignoreViewport) {
		var cns = this.canvas;
		var oldLW = cns.ctx.lineWidth;
		if (typeof color == "undefined")
			color = "#000"
				cns.ctx.strokeStyle = color;
		if (typeof width == "undefined")
			width = 1;
		cns.ctx.lineWidth = width * Utils.globalScale * Utils.globalPixelScale;
		if (typeof opacity == "undefined")
			opacity = 1;
		cns.ctx.globalAlpha = opacity;
		if (!ignoreViewport) {
			x -= this.viewport.x;
			y -= this.viewport.y;
		}
		x = x * Utils.globalScale * Utils.globalPixelScale;
		y = y * Utils.globalScale * Utils.globalPixelScale;
		radius = radius * Utils.globalScale * Utils.globalPixelScale;
		cns.ctx.beginPath();
		cns.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		cns.ctx.stroke();
		cns.ctx.lineWidth = oldLW;
	};
	this.drawPolygon = function (points, width, color, opacity, ignoreViewport) {
		if ((typeof points != "object") || !(points instanceof Array) || points.length < 2)
			return;
		for (var i = 0; i < points.length - 1; i++) {
			this.drawLine(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y, width, color, opacity, ignoreViewport);
		}
		this.drawLine(points[i].x, points[i].y, points[0].x, points[0].y, width, color, opacity, ignoreViewport);
	}
	this.drawLine = function (x1, y1, x2, y2, width, color, opacity, ignoreViewport) {
		var cns = this.canvas;
		var oldLW = cns.ctx.lineWidth;
		if (color)
			cns.ctx.strokeStyle = color;
		else
			cns.ctx.strokeStyle = '#000';
		if (width)
			cns.ctx.lineWidth = width * Utils.globalScale * Utils.globalPixelScale;
		else
			cns.ctx.lineWidth = 1 * Utils.globalScale * Utils.globalPixelScale;
		if (opacity)
			cns.ctx.globalAlpha = opacity;
		else
			cns.ctx.globalAlpha = 1;
		if (!ignoreViewport) {
			x1 -= this.viewport.x;
			y1 -= this.viewport.y;
			x2 -= this.viewport.x;
			y2 -= this.viewport.y;
		}
		x1 = x1 * Utils.globalScale * Utils.globalPixelScale;
		y1 = y1 * Utils.globalScale * Utils.globalPixelScale;
		x2 = x2 * Utils.globalScale * Utils.globalPixelScale;
		y2 = y2 * Utils.globalScale * Utils.globalPixelScale;
		cns.ctx.beginPath();
		cns.ctx.moveTo(x1, y1);
		cns.ctx.lineTo(x2, y2);
		cns.ctx.closePath();
		cns.ctx.stroke();
		cns.ctx.lineWidth = oldLW;
	};
	this.start = function () {
		if (this.started)
			return;
		this.started = true;
		clearFPS();
		render();
	}
	this.forceRender = function () {
		if (this.started)
			render();
	}
	this.stop = function () {
		this.started = false;
	}
	function clearFPS() {
		self.lastFPS = self.fps;
		self.fps = 0;
		if (self.started)
			self.tmFPS = setTimeout(clearFPS, 1000);
	}
	this.setTextStyle = function (font, size, style, color, borderColor, canvas) {
		var cns = (canvas ? canvas : this.canvas);
		cns.ctx.fillStyle = color;
		cns.ctx.strokeStyle = borderColor;
		var s = "";
		if (style)
			s += style + " ";
		if (size)
			s += Math.floor(size * Utils.globalScale * Utils.globalPixelScale) + "px ";
		if (font)
			s += font;
		cns.ctx.font = s;
	}
	this.drawText = function (text, x, y, opacity, ignoreViewport, alignCenter, canvas) {
		var cns = (canvas ? canvas : this.canvas);
		if (typeof opacity == "undefined")
			cns.ctx.globalAlpha = 1;
		else
			cns.ctx.globalAlpha = opacity;
		if (!ignoreViewport) {
			x -= this.viewport.x;
			y -= this.viewport.y;
		}
		x = x * Utils.globalScale * Utils.globalPixelScale;
		y = y * Utils.globalScale * Utils.globalPixelScale;
		if (alignCenter)
			x = x - this.getTextWidth(text) / 2;
		cns.ctx.fillText(text, x, y);
	}
	this.strokeText = function (text, x, y, opacity, ignoreViewport, alignCenter, canvas) {
		var cns = (canvas ? canvas : this.canvas);
		if (typeof opacity == "undefined")
			cns.ctx.globalAlpha = 1;
		else
			cns.ctx.globalAlpha = opacity;
		if (!ignoreViewport) {
			x -= this.viewport.x;
			y -= this.viewport.y;
		}
		x = x * Utils.globalScale * Utils.globalPixelScale;
		y = y * Utils.globalScale * Utils.globalPixelScale;
		if (alignCenter)
			x = x - this.getTextWidth(text) / 2;
		cns.ctx.strokeText(text, x, y);
	}
	this.getTextWidth = function (str, canvas) {
		var cns = (canvas ? canvas : this.canvas);
		return cns.ctx.measureText(str).width;
	}
	this.allowDebugDrawing = false;
	this.allowStaticDebugDrawing = false;
	this.renderObject = function (cns, obj) {
		var
		r = obj.getDrawRectangle(),
		ow = obj.width * Utils.globalScale,
		oh = obj.height * Utils.globalScale,
		ox = r.center.x * Utils.globalPixelScale * Utils.globalScale - Math.floor(ow / 2),
		oy = r.center.y * Utils.globalPixelScale * Utils.globalScale - Math.floor(oh / 2),
		or = obj.rotation,
		scX = obj.scaleX * Utils.globalPixelScale,
		scY = obj.scaleY * Utils.globalPixelScale,
		canvasMod = Boolean(or != 0 || scX != 1 || scY != 1);
		if (!obj.ignoreViewport) {
			ox -= this.viewport.x * Utils.globalPixelScale * Utils.globalScale;
			oy -= this.viewport.y * Utils.globalPixelScale * Utils.globalScale;
		}
		if (canvasMod) {
			cns.ctx.save();
			cns.ctx.translate(ox + Math.floor(ow / 2), oy + Math.floor(oh / 2));
			cns.ctx.rotate(or);
			cns.ctx.scale(scX, scY);
			ox = -Math.floor(ow / 2);
			oy = -Math.floor(oh / 2);
		}
		cns.ctx.globalAlpha = obj.opacity;
		if (this.ceilSizes) {
			ow = Math.ceil(ow);
			oh = Math.ceil(oh);
		}
		if (obj.fillColor) {
			cns.ctx.fillStyle = obj.fillColor;
			cns.ctx.strokeStyle = obj.fillColor;
			cns.ctx.fillRect(ox, oy, ow, oh);
		}
		if (obj.bitmap) {
			var
			iw = obj.bitmap.width,
			ih = obj.bitmap.height,
			fx = obj.currentLayer * ow + obj.offset.left * Utils.globalScale,
			fy = obj.currentFrame * oh + obj.offset.top * Utils.globalScale;
			if (fx < iw && fy < ih) {
				var
				fw = ow,
				fh = oh,
				masked = false;
				if (fx + fw > iw)
					fw = iw - fx;
				if (fy + fh > ih)
					fh = ih - fy;
				if (obj.mask) {
					this.buffer.ctx.save();
					this.buffer.ctx.clearRect(0, 0, fw, fh);
					this.buffer.ctx.drawImage(obj.bitmap, fx, fy, fw, fh, 0, 0, fw, fh);
					this.buffer.ctx.globalCompositeOperation = "destination-in";
					this.buffer.ctx.drawImage(obj.mask, 0, 0);
					fx = 0;
					fy = 0;
					masked = true;
				}
				try {
					cns.ctx.drawImage((masked ? this.buffer : obj.bitmap), ~~fx, ~~fy, ~~fw, ~~fh, ~~ox, ~~oy, ~~ow, ~~oh);
				} catch (e) {}
				if (masked)
					this.buffer.ctx.restore();
			}
		}
		if (canvasMod)
			cns.ctx.restore();
		if (this.allowDebugDrawing && obj.allowDebugDrawing) {
			if (this.allowStaticDebugDrawing || !obj.static) {
				obj.debugDraw();
			}
		}
		obj.dispatchEvent("render", {
			target : obj,
			canvas : cns
		});
	}
	this.clearObjectAABB = function (cns, obj) {
		var w = obj.history.AABB[1].x - obj.history.AABB[0].x;
		var h = obj.history.AABB[1].y - obj.history.AABB[0].y;
		if (!this.fillColor)
			cns.ctx.clearRect((obj.history.AABB[0].x - this.viewport.x) * Utils.globalPixelScale, (obj.history.AABB[0].y - this.viewport.y) * Utils.globalPixelScale, w * Utils.globalPixelScale, h * Utils.globalPixelScale);
		else {
			cns.ctx.fillStyle = this.fillColor;
			cns.ctx.fillRect((obj.history.AABB[0].x - this.viewport.x) * Utils.globalPixelScale, (obj.history.AABB[0].y - this.viewport.y) * Utils.globalPixelScale, w * Utils.globalPixelScale, h * Utils.globalPixelScale);
		}
	};
	this.addPartialDraw = function (partialDraw, obj) {
		partialDraw.push(obj);
		obj.history.drawed = true;
		obj.history.changed = true;
		for (var i = 0; i < this.objects.length; i++) {
			if (!this.objects[i].history.changed && this.objects[i].visible && !this.objects[i]['static']) {
				var top = Math.max(obj.history.AABB[0].y, this.objects[i].history.AABB[0].y);
				var left = Math.max(obj.history.AABB[0].x, this.objects[i].history.AABB[0].x);
				var right = Math.min(obj.history.AABB[1].x, this.objects[i].history.AABB[1].x);
				var bottom = Math.min(obj.history.AABB[1].y, this.objects[i].history.AABB[1].y);
				var width = right - left;
				var height = bottom - top;
				if (width > 0 && height > 0)
					this.addPartialDraw(partialDraw, this.objects[i]);
			}
		}
		return partialDraw;
	};
	this.drawScenePartial = function (cns) {
		var partialDraw = [];
		var rect,
		obj;
		if (!cns.ctx)
			cns.ctx = cns.getContext("2d");
		for (var i = 0; i < this.objects.length; i++) {
			this.objects[i].nextFrame();
		}
		for (i = 0; i < this.objects.length; i++) {
			obj = this.objects[i];
			if (obj.visible && !obj['static']) {
				if (obj.destroy || obj.drawAlways || !obj.history.drawed || obj.currentFrame != obj.history.frame || obj.getX() != obj.history.x || obj.getY() != obj.history.y || obj.rotation != obj.history.rotation) {
					partialDraw = this.addPartialDraw(partialDraw, obj);
				}
			}
		}
		partialDraw = this.sortStack(partialDraw, true);
		var w,
		h;
		for (i = 0; i < partialDraw.length; i++) {
			this.clearObjectAABB(cns, partialDraw[i]);
		}
		for (i = 0; i < partialDraw.length; i++) {
			obj = partialDraw[i];
			if (obj.destroy) {
				this.removeChild(obj);
			} else {
				this.renderObject(cns, obj);
				obj.updateHistory();
			}
		}
	}
	this.drawScene = function (cns, drawStatic) {
		var obj,
		ok;
		if (!cns.ctx)
			cns.ctx = cns.getContext("2d");
		if (!this.fillColor) {
			if (!this.clearLock)
				this.clearScreen(cns);
		} else {
			cns.ctx.fillStyle = this.fillColor;
			cns.ctx.fillRect(0, 0, this.screenWidth * Utils.globalScale * Utils.globalPixelScale, this.screenHeight * Utils.globalScale * Utils.globalPixelScale);
		}
		for (var i = 0; i < this.objects.length; i++) {
			obj = this.objects[i];
			ok = false;
			if (!drawStatic && !obj['static'])
				ok = true;
			if (drawStatic && obj['static'])
				ok = true;
			if (ok) {
				if (obj.destroy) {
					this.removeChild(obj);
					i--;
				} else {
					obj.nextFrame();
					if (obj.visible)
						this.renderObject(cns, obj);
				}
			}
		}
	};
	this.tweens = [];
	this.createTween = function (obj, prop, start, end, duration, ease) {
		var t = new Tween(obj, prop, start, end, duration, ease);
		self.tweens.push(t);
		return t;
	}
	this.removeTween = function (t) {
		var id = null;
		if (isNaN(t)) {
			for (var i = 0; i < self.tweens.length; i++)
				if (self.tweens[i] === t) {
					id = i;
					break;
				}
		} else
			id = t;
		self.tweens[id].pause();
		self.tweens.splice(id, 1);
		return id;
	}
	this.clearObjectTweens = function (obj) {
		for (var i = 0; i < self.tweens.length; i++)
			if (self.tweens[i].obj === obj) {
				i = self.removeTween(i);
			}
	}
	this.updateTweens = function () {
		for (var i = 0; i < self.tweens.length; i++) {
			if (self.tweens[i].tick()) {
				i = self.removeTween(i);
			}
		}
	}
	this.timers = [];
	this.setTimeout = function (callback, timeout) {
		var t = new StageTimer(callback, timeout);
		this.timers.push(t);
		return t;
	};
	this.clearTimeout = function (t) {
		this.timers = Utils.removeFromArray(this.timers, t);
	};
	this.setInterval = function (callback, timeout) {
		var t = new StageTimer(callback, timeout, true);
		this.timers.push(t);
		return t;
	};
	this.clearInterval = function (t) {
		this.clearTimeout(t);
	};
	this.updateTimers = function () {
		for (var i = 0; i < this.timers.length; i++) {
			if (this.timers[i].update()) {
				this.clearTimeout(this.timers[i]);
				i--;
			}
		}
	};
	function render() {
		clearTimeout(self.tmMain);
		var tm_start = new Date().getTime();
		self.updateTweens();
		self.updateTimers();
		self.dispatchEvent("pretick");
		if (self.partialUpdate)
			self.drawScenePartial(self.canvas);
		else
			self.drawScene(self.canvas, false);
		if (self.showFPS) {
			self.setTextStyle("sans-serif", 10, "bold", "#fff", "#000");
			self.drawText("FPS: " + self.lastFPS, 2, 10, 1, true);
		}
		self.dispatchEvent("posttick");
		var d = new Date().getTime() - tm_start;
		d = self.delay - d - 1;
		if (d < 1)
			d = 1;
		self.fps++;
		if (self.started)
			self.tmMain = setTimeout(render, d);
	};
	this.box2dSync = function (world) {
		var p;
		for (b = world.m_bodyList; b; b = b.m_next) {
			if (b.sprite) {
				b.sprite.rotation = b.GetRotation();
				p = b.GetPosition();
				b.sprite.x = p.x;
				b.sprite.y = p.y;
				b.sprite.dispatchEvent("box2dsync", {
					target : b.sprite
				});
			}
		}
	}
	this.processTouchEvent = function (touches, controller) {
		for (var i = 0; i < touches.length; i++) {
			var e = {
				clientX : touches[i].clientX,
				clientY : touches[i].clientY
			};
			self[controller](e);
		}
	}
	if ("ontouchstart" in this.canvas) {
		this.canvas.ontouchstart = function (event) {
			this.renderController.processTouchEvent(event.touches, "checkMouseDown");
			this.renderController.processTouchEvent(event.touches, "checkClick");
		};
		this.canvas.ontouchmove = function (event) {
			this.renderController.processTouchEvent(event.touches, "checkMouseMove");
		};
		this.canvas.ontouchend = function (event) {
			this.renderController.processTouchEvent(event.changedTouches, "checkMouseUp");
		};
	} else {
		this.canvas.onclick = function (event) {
			this.renderController.checkClick(event);
		};
		this.canvas.onmousemove = function (event) {
			this.renderController.checkMouseMove(event);
		};
		this.canvas.onmousedown = function (event) {
			if (event.button == 0)
				this.renderController.checkMouseDown(event);
		};
		this.canvas.onmouseup = function (event) {
			if (event.button == 0)
				this.renderController.checkMouseUp(event);
		};
		this.canvas.oncontextmenu = function (event) {
			this.renderController.checkContextMenu(event);
		};
	}
	this.onpretick = null;
	this.onposttick = null;
	this.eventsListeners = [];
	this.addEventListener = function (type, callback) {
		EventsManager.addEvent(this, type, callback);
	}
	this.removeEventListener = function (type, callback) {
		EventsManager.removeEvent(this, type, callback);
	}
	this.dispatchEvent = function (type, params) {
		return EventsManager.dispatchEvent(this, type, params);
	}
}
function Vector(x, y) {
	if (typeof(x) == 'undefined')
		x = 0;
	this.x = x;
	if (typeof(y) == 'undefined')
		y = 0;
	this.y = y;
	this.clone = function () {
		return new Vector(this.x, this.y);
	}
	this.add = function (p) {
		this.x += p.x;
		this.y += p.y;
		return this;
	}
	this.subtract = function (p) {
		this.x -= p.x;
		this.y -= p.y;
		return this;
	}
	this.mult = function (n) {
		this.x *= n;
		this.y *= n;
		return this;
	}
	this.invert = function () {
		this.mult(-1);
		return this;
	}
	this.rotate = function (angle, offset) {
		if (typeof(offset) == 'undefined')
			offset = new Vector(0, 0);
		var r = this.clone();
		r.subtract(offset);
		r.x = this.x * Math.cos(angle) + this.y * Math.sin(angle);
		r.y = this.x * -Math.sin(angle) + this.y * Math.cos(angle);
		r.add(offset);
		this.x = r.x;
		this.y = r.y;
		return this;
	}
	this.normalize = function (angle, offset) {
		if (typeof(offset) == 'undefined')
			offset = new Vector(0, 0);
		this.subtract(offset);
		this.rotate(-angle);
		return this;
	}
	this.getLength = function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	this.distanceTo = function (p) {
		p2 = this.clone();
		p2.subtract(p);
		return p2.getLength();
	}
}
var Rectangle = function (x, y, w, h, angle) {
	this.center = new Vector(x, y);
	this.width = w;
	this.height = h;
	this.angle = angle;
	this.vertices = [];
	this.AABB = [];
	this.clone = function () {
		return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle);
	}
	this.refreshVertices = function () {
		var w = this.width / 2;
		var h = this.height / 2;
		this.vertices = [];
		this.vertices.push(new Vector(-w, h));
		this.vertices.push(new Vector(w, h));
		this.vertices.push(new Vector(w, -h));
		this.vertices.push(new Vector(-w, -h));
		this.AABB = [this.center.clone(), this.center.clone()];
		for (var i = 0; i < 4; i++) {
			this.vertices[i].rotate(-this.angle, this.center);
			if (this.vertices[i].x < this.AABB[0].x)
				this.AABB[0].x = this.vertices[i].x;
			if (this.vertices[i].x > this.AABB[1].x)
				this.AABB[1].x = this.vertices[i].x;
			if (this.vertices[i].y < this.AABB[0].y)
				this.AABB[0].y = this.vertices[i].y;
			if (this.vertices[i].y > this.AABB[1].y)
				this.AABB[1].y = this.vertices[i].y;
		}
	}
	this.move = function (x, y) {
		this.center.add(new Vector(x, y));
		this.refreshVertices();
	}
	this.rotate = function (angle) {
		this.angle += angle;
		this.refreshVertices();
	}
	this.hitTestPoint = function (point) {
		var p = point.clone();
		p.normalize(-this.angle, this.center);
		return ((Math.abs(p.x) <= (this.width / 2)) && (Math.abs(p.y) <= (this.height / 2)));
	}
	this.hitTestRectangle = function (rect) {
		var r1 = this.clone();
		var r2 = rect.clone();
		var len,
		len1,
		len2;
		r1.move(-this.center.x, -this.center.y);
		r2.move(-this.center.x, -this.center.y);
		r2.center.rotate(this.angle);
		r1.rotate(-this.angle);
		r2.rotate(-this.angle);
		len = Math.max(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x) - Math.min(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x);
		len1 = r1.AABB[1].x - r1.AABB[0].x;
		len2 = r2.AABB[1].x - r2.AABB[0].x;
		if (len > len1 + len2)
			return false;
		len = Math.max(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y) - Math.min(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y);
		len1 = r1.AABB[1].y - r1.AABB[0].y;
		len2 = r2.AABB[1].y - r2.AABB[0].y;
		if (len > len1 + len2)
			return false;
		r1.move(-r2.center.x, -r2.center.y);
		r2.move(-r2.center.x, -r2.center.y);
		r1.center.rotate(r2.angle);
		r1.refreshVertices();
		r1.rotate(-r2.angle);
		r2.rotate(-r2.angle);
		len = Math.max(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x) - Math.min(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x);
		len1 = r1.AABB[1].x - r1.AABB[0].x;
		len2 = r2.AABB[1].x - r2.AABB[0].x;
		if (len > len1 + len2)
			return false;
		len = Math.max(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y) - Math.min(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y);
		len1 = r1.AABB[1].y - r1.AABB[0].y;
		len2 = r2.AABB[1].y - r2.AABB[0].y;
		if (len > len1 + len2)
			return false;
		return true;
	}
	this.refreshVertices();
}
var Asset = function (name, src, w, h, f, l) {
	this.name = name + '';
	this.src = src + '';
	this.width = w;
	this.height = h;
	this.frames = f;
	this.layers = l;
	this.bitmap = null;
	this.object = null;
	this.ready = (this.width && this.height);
	this.detectSize = function () {
		if (!this.bitmap)
			return false;
		try {
			if (isNaN(this.width)) {
				this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0;
			}
			if (isNaN(this.height)) {
				this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0;
			}
		} catch (e) {
			if (CRENDER_DEBUG)
				console.log(e);
		}
		return (!isNaN(this.width) && !isNaN(this.height));
	}
	this.normalize = function (scale) {
		if (this.ready)
			return;
		if (!this.detectSize())
			return;
		if (isNaN(this.frames) || this.frames < 1)
			this.frames = 1;
		if (isNaN(this.layers) || this.layers < 1)
			this.layers = 1;
		this.width = Math.ceil((this.width / this.layers) / scale);
		this.height = Math.ceil((this.height / this.frames) / scale);
		this.ready = true;
	}
}
var AssetsLibrary = function (path, scale, assets) {
	var self = this;
	this.path = 'images';
	this.scale = 1;
	this.items = {};
	this.bitmaps = {};
	this.loaded = false;
	this.onload = null;
	this.onloadprogress = null;
	this.spriteClass = Sprite;
	this.init = function (path, scale) {
		if (typeof path != 'undefined') {
			this.path = path + '';
		}
		if (typeof scale != 'undefined') {
			this.scale = parseFloat(scale);
			if (isNaN(this.scale))
				this.scale = 1;
		}
	}
	this.addAssets = function (data) {
		if (typeof data == 'undefined')
			return;
		if (typeof data != 'object')
			return;
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			item.noscale = (typeof item.noscale == 'undefined') ? false : item.noscale;
			if (!item.noscale)
				item.src = '%SCALE%/' + item.src;
			this.addAsset(item.src, item.name, item.width, item.height, item.frames, item.layers);
		}
	}
	this.addAsset = function (src, name, w, h, f, l) {
		function src2name(src) {
			var name = src.split('/');
			name = name.pop();
			name = name.split('.');
			name = name.shift() + '';
			return name;
		}
		src = src.replace('%SCALE%', '%PATH%/' + this.scale);
		src = src.replace('%PATH%', this.path);
		if (typeof name == 'undefined')
			name = src2name(src);
		var asset = new Asset(name, src, w, h, f, l);
		this.items[name] = asset;
		return asset;
	}
	this.addObject = function (obj) {
		var asset = this.addAsset('%SCALE%/' + obj.image, obj.name, obj.width * this.scale, obj.height * this.scale, obj.frames, obj.layers);
		if (asset)
			asset.object = obj;
		return asset;
	}
	this.load = function (onload, onloadprogress) {
		this.onload = onload;
		this.onloadprogress = onloadprogress;
		var preloader = new ImagesPreloader();
		var data = [];
		for (var n in this.items)
			data.push(this.items[n]);
		preloader.load(data, self.onLoadHandler, self.onLoadProgressHandler);
	}
	this.onLoadProgressHandler = function (val) {
		if (typeof self.onloadprogress == 'function') {
			self.onloadprogress(val);
		}
	}
	this.onLoadHandler = function (data) {
		self.loaded = true;
		for (var n in data) {
			var bmp = data[n];
			var asset = self.items[n];
			asset.bitmap = bmp;
			asset.normalize(self.scale);
		}
		if (typeof self.onload == 'function') {
			self.onload(self.items);
		}
	}
	this.getAsset = function (name, checkLoad) {
		var asset = null;
		if ((typeof this.items[name] != 'undefined') && (this.items[name].bitmap)) {
			checkLoad = (typeof checkLoad == 'undefined') ? true : checkLoad;
			asset = (!checkLoad || this.items[name].ready) ? this.items[name] : null;
		}
		if (!asset) {
			throw new Error('Trying to get undefined asset "' + name + '"');
		}
		return asset;
	}
	this.getSprite = function (name, params) {
		var mc = null;
		try {
			var asset = this.getAsset(name, true);
			mc = new this.spriteClass(asset.bitmap, asset.width, asset.height, asset.frames, asset.layers);
		} catch (e) {
			mc = new this.spriteClass(null, 1, 1, 1, 1);
		}
		if (typeof params == 'object') {
			for (var prop in params)
				mc[prop] = params[prop];
		}
		return mc;
	}
	this.getBitmap = function (name) {
		try {
			var asset = this.getAsset(name, true);
			return asset.bitmap;
		} catch (e) {
			return null;
		}
	}
	this.init(path, scale);
	this.addAssets(assets);
}
if (typeof console == 'undefined') {
	console = {
		log : function () {}

	}
};
var ExternalAPI = {
	type : "Spilgames",
	init : function (callback) {
		if (typeof SpilGames == 'undefined') {
			if (typeof window.parent != 'undefined') {
				SpilGames = window.parent.SpilGames;
			}
		}
		if (ExternalAPI.check())
			SpilGames.Events.subscribe('gamecontainer.resize', Utils.fitLayoutToScreen);
		else {
			Utils.addFitLayoutListeners();
		}
	},
	check : function () {
		return (typeof SpilGames != 'undefined');
	},
	checkUserLoggedIn : function () {
		var state = SpilGames.Auth.getAuthState();
		if (state == "NOT_AUTHENTICATED")
			return false;
		return true;
	},
	getUserInfo : function () {},
	addChangeLocaleListener : function (callback) {
		SpilGames.Events.subscribe('game.language.change', callback);
	},
	showLoginForm : function (callback) {
		if (!callback)
			callback = function () {};
		SpilGames.Portal.forceAuthentication(callback);
	},
	showScoreboard : function (callback) {
		if (!callback)
			callback = function () {};
		SpilGames.Portal.showScoreboard(callback);
	},
	submitScores : function (val, callback) {
		if (!callback)
			callback = function () {};
		SpilGames.Highscores.insert({
			score : val
		}, callback);
	}
}
if (!ExternalAPI.check())
	var SpilGames; ;
function box2DCreateWorld(gravity) {
	var g,
	s;
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-1000, -1000);
	worldAABB.maxVertex.Set(1000, 1000);
	if (gravity)
		g = new b2Vec2(0, gravity);
	else
		g = new b2Vec2(0, 300);
	return new b2World(worldAABB, g, true);
}
function box2DCreateGround(world, restitution, y) {
	var groundSd = new b2BoxDef();
	groundSd.extents.Set(10000, 50);
	groundSd.restitution = restitution ? restitution : 0.2;
	var groundBd = new b2BodyDef();
	groundBd.AddShape(groundSd);
	groundBd.position.Set(-500, y ? y : 480);
	return world.CreateBody(groundBd);
}
function box2DCreateCircle(world, x, y, radius, rotation, fixed, density, restitution, friction) {
	if (typeof(fixed) == 'undefined')
		fixed = true;
	var ballSd = new b2CircleDef();
	if (!fixed) {
		ballSd.density = density ? density : 0.8;
		ballSd.restitution = restitution ? restitution : 0.1;
		ballSd.friction = friction ? friction : 3;
	}
	ballSd.radius = radius;
	var ballBd = new b2BodyDef();
	ballBd.rotation = rotation;
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x, y);
	return world.CreateBody(ballBd);
}
function box2DCreateBox(world, x, y, width, height, rotation, fixed, density, restitution, friction) {
	if (typeof(fixed) == 'undefined')
		fixed = true;
	var boxSd = new b2BoxDef();
	if (!fixed) {
		boxSd.density = density ? density : 1.0;
		boxSd.restitution = restitution ? restitution : 0.2;
		boxSd.friction = friction ? friction : 0.3;
	}
	boxSd.extents.Set(width, height);
	var boxBd = new b2BodyDef();
	boxBd.rotation = rotation;
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x, y);
	return world.CreateBody(boxBd);
}
function box2DCreatePoly(world, x, y, points, rotation, fixed, density, restitution, friction) {
	var polyBd = new b2BodyDef();
	polyBd.rotation = rotation;
	for (var n = 0; n < points.length; n++) {
		var p = points[n];
		var polySd = new b2PolyDef();
		if (!fixed) {
			polySd.density = density ? density : 1.0;
			polySd.restitution = restitution ? restitution : 0.2;
			polySd.friction = friction ? friction : 0.3;
		}
		polySd.vertexCount = p.length;
		for (var i = 0; i < p.length; i++) {
			polySd.vertices[i].Set(p[i][0], p[i][1]);
		}
		polyBd.AddShape(polySd);
	}
	polyBd.position.Set(x, y);
	return world.CreateBody(polyBd);
};
function box2DCreateRevoluteJoint(world, body1, body2, point, motor) {
	var jointDef = new b2RevoluteJointDef();
	jointDef.body1 = body1;
	jointDef.body2 = body2;
	jointDef.anchorPoint = point;
	jointDef.collideConnected = true;
	if (motor) {
		jointDef.motorSpeed = motor;
		jointDef.motorTorque = 500000000;
		jointDef.enableMotor = true;
	}
	return world.CreateJoint(jointDef);
};
function box2DCreateDistanceJoint(world, body1, body2, point1, point2) {
	var jointDef = new b2DistanceJointDef();
	jointDef.body1 = body1;
	jointDef.body2 = body2;
	jointDef.anchorPoint1 = point1;
	jointDef.anchorPoint2 = point2;
	jointDef.collideConnected = true;
	return world.CreateJoint(jointDef);
};
function box2DCreatePrismaticJoint(world, body1, body2, point, motor) {
	var jointDef = new b2PrismaticJointDef();
	jointDef.anchorPoint.Set(point.x, point.y);
	jointDef.body1 = body1;
	jointDef.body2 = body2;
	jointDef.axis.Set(0.0, 1.0);
	if (motor) {
		jointDef.motorSpeed = motor;
		jointDef.motorForce = 100000.0;
		jointDef.enableMotor = true;
	}
	return world.CreateJoint(jointDef);
};
var Prototype = {
	Version : '1.6.0.2',
	Browser : {
		IE : !!(window.attachEvent && !window.opera),
		Opera : !!window.opera,
		WebKit : navigator.userAgent.indexOf('AppleWebKit/') > -1,
		Gecko : navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1,
		MobileSafari : !!navigator.userAgent.match(/Apple.*Mobile.*Safari/)
	},
	BrowserFeatures : {
		XPath : !!document.evaluate,
		ElementExtensions : !!window.HTMLElement,
		SpecificElementExtensions : document.createElement('div').__proto__ && document.createElement('div').__proto__ !== document.createElement('form').__proto__
	},
	ScriptFragment : '<script[^>]*>([\\S\\s]*?)<\/script>',
	JSONFilter : /^\/\*-secure-([\s\S]*)\*\/\s*$/,
	emptyFunction : function () {},
	K : function (x) {
		return x
	}
};
if (Prototype.Browser.MobileSafari)
	Prototype.BrowserFeatures.SpecificElementExtensions = false;
var Class = {
	create : function () {
		var parent = null,
		properties = $A(arguments);
		if (Object.isFunction(properties[0]))
			parent = properties.shift();
		function klass() {
			this.initialize.apply(this, arguments);
		}
		Object.extend(klass, Class.Methods);
		klass.superclass = parent;
		klass.subclasses = [];
		if (parent) {
			var subclass = function () {};
			subclass.prototype = parent.prototype;
			klass.prototype = new subclass;
			parent.subclasses.push(klass);
		}
		for (var i = 0; i < properties.length; i++)
			klass.addMethods(properties[i]);
		if (!klass.prototype.initialize)
			klass.prototype.initialize = Prototype.emptyFunction;
		klass.prototype.constructor = klass;
		return klass;
	}
};
Class.Methods = {
	addMethods : function (source) {
		var ancestor = this.superclass && this.superclass.prototype;
		var properties = Object.keys(source);
		if (!Object.keys({
				toString : true
			}).length)
			properties.push("toString", "valueOf");
		for (var i = 0, length = properties.length; i < length; i++) {
			var property = properties[i],
			value = source[property];
			if (ancestor && Object.isFunction(value) && value.argumentNames().first() == "$super") {
				var method = value;
				value = Object.extend((function (m) {
							return function () {
								return ancestor[m].apply(this, arguments)
							};
						})(property).wrap(method), {
						valueOf : function () {
							return method
						},
						toString : function () {
							return method.toString()
						}
					});
			}
			this.prototype[property] = value;
		}
		return this;
	}
};
var Abstract = {};
Object.extend = function (destination, source) {
	for (var property in source)
		destination[property] = source[property];
	return destination;
};
Object.extend(Object, {
	inspect : function (object) {
		try {
			if (Object.isUndefined(object))
				return 'undefined';
			if (object === null)
				return 'null';
			return object.inspect ? object.inspect() : String(object);
		} catch (e) {
			if (e instanceof RangeError)
				return '...';
			throw e;
		}
	},
	toJSON : function (object) {
		var type = typeof object;
		switch (type) {
		case 'undefined':
		case 'function':
		case 'unknown':
			return;
		case 'boolean':
			return object.toString();
		}
		if (object === null)
			return 'null';
		if (object.toJSON)
			return object.toJSON();
		if (Object.isElement(object))
			return;
		var results = [];
		for (var property in object) {
			var value = Object.toJSON(object[property]);
			if (!Object.isUndefined(value))
				results.push(property.toJSON() + ': ' + value);
		}
		return '{' + results.join(', ') + '}';
	},
	toQueryString : function (object) {
		return $H(object).toQueryString();
	},
	toHTML : function (object) {
		return object && object.toHTML ? object.toHTML() : String.interpret(object);
	},
	keys : function (object) {
		var keys = [];
		for (var property in object)
			keys.push(property);
		return keys;
	},
	values : function (object) {
		var values = [];
		for (var property in object)
			values.push(object[property]);
		return values;
	},
	clone : function (object) {
		return Object.extend({}, object);
	},
	isElement : function (object) {
		return object && object.nodeType == 1;
	},
	isArray : function (object) {
		return object != null && typeof object == "object" && 'splice' in object && 'join' in object;
	},
	isHash : function (object) {
		return object instanceof Hash;
	},
	isFunction : function (object) {
		return typeof object == "function";
	},
	isString : function (object) {
		return typeof object == "string";
	},
	isNumber : function (object) {
		return typeof object == "number";
	},
	isUndefined : function (object) {
		return typeof object == "undefined";
	}
});
Object.extend(Function.prototype, {
	argumentNames : function () {
		var names = this.toString().match(/^[\s\(]*function[^(]*\((.*?)\)/)[1].split(",").invoke("strip");
		return names.length == 1 && !names[0] ? [] : names;
	},
	bind : function () {
		if (arguments.length < 2 && Object.isUndefined(arguments[0]))
			return this;
		var __method = this,
		args = $A(arguments),
		object = args.shift();
		return function () {
			return __method.apply(object, args.concat($A(arguments)));
		}
	},
	bindAsEventListener : function () {
		var __method = this,
		args = $A(arguments),
		object = args.shift();
		return function (event) {
			return __method.apply(object, [event || window.event].concat(args));
		}
	},
	curry : function () {
		if (!arguments.length)
			return this;
		var __method = this,
		args = $A(arguments);
		return function () {
			return __method.apply(this, args.concat($A(arguments)));
		}
	},
	delay : function () {
		var __method = this,
		args = $A(arguments),
		timeout = args.shift() * 1000;
		return window.setTimeout(function () {
			return __method.apply(__method, args);
		}, timeout);
	},
	wrap : function (wrapper) {
		var __method = this;
		return function () {
			return wrapper.apply(this, [__method.bind(this)].concat($A(arguments)));
		}
	},
	methodize : function () {
		if (this._methodized)
			return this._methodized;
		var __method = this;
		return this._methodized = function () {
			return __method.apply(null, [this].concat($A(arguments)));
		};
	}
});
Function.prototype.defer = Function.prototype.delay.curry(0.01);
Object.extend(String, {
	interpret : function (value) {
		return value == null ? '' : String(value);
	},
	specialChar : {
		'\b' : '\\b',
		'\t' : '\\t',
		'\n' : '\\n',
		'\f' : '\\f',
		'\r' : '\\r',
		'\\' : '\\\\'
	}
});
Object.extend(String.prototype, {
	gsub : function (pattern, replacement) {
		var result = '',
		source = this,
		match;
		replacement = arguments.callee.prepareReplacement(replacement);
		while (source.length > 0) {
			if (match = source.match(pattern)) {
				result += source.slice(0, match.index);
				result += String.interpret(replacement(match));
				source = source.slice(match.index + match[0].length);
			} else
				result += source, source = '';
		}
		return result;
	},
	sub : function (pattern, replacement, count) {
		replacement = this.gsub.prepareReplacement(replacement);
		count = Object.isUndefined(count) ? 1 : count;
		return this.gsub(pattern, function (match) {
			if (--count < 0)
				return match[0];
			return replacement(match);
		});
	},
	scan : function (pattern, iterator) {
		this.gsub(pattern, iterator);
		return String(this);
	},
	truncate : function (length, truncation) {
		length = length || 30;
		truncation = Object.isUndefined(truncation) ? '...' : truncation;
		return this.length > length ? this.slice(0, length - truncation.length) + truncation : String(this);
	},
	strip : function () {
		return this.replace(/^\s+/, '').replace(/\s+$/, '');
	},
	stripTags : function () {
		return this.replace(/<\/?[^>]+>/gi, '');
	},
	stripScripts : function () {
		return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
	},
	extractScripts : function () {
		var matchAll = new RegExp(Prototype.ScriptFragment, 'img');
		var matchOne = new RegExp(Prototype.ScriptFragment, 'im');
		return (this.match(matchAll) || []).map(function (scriptTag) {
			return (scriptTag.match(matchOne) || ['', ''])[1];
		});
	},
	evalScripts : function () {
		return this.extractScripts().map(function (script) {
			return eval(script)
		});
	},
	escapeHTML : function () {
		var self = arguments.callee;
		self.text.data = this;
		return self.div.innerHTML;
	},
	unescapeHTML : function () {
		var div = new Element('div');
		div.innerHTML = this.stripTags();
		return div.childNodes[0] ? (div.childNodes.length > 1 ? $A(div.childNodes).inject('', function (memo, node) {
				return memo + node.nodeValue
			}) : div.childNodes[0].nodeValue) : '';
	},
	toQueryParams : function (separator) {
		var match = this.strip().match(/([^?#]*)(#.*)?$/);
		if (!match)
			return {};
		return match[1].split(separator || '&').inject({}, function (hash, pair) {
			if ((pair = pair.split('='))[0]) {
				var key = decodeURIComponent(pair.shift());
				var value = pair.length > 1 ? pair.join('=') : pair[0];
				if (value != undefined)
					value = decodeURIComponent(value);
				if (key in hash) {
					if (!Object.isArray(hash[key]))
						hash[key] = [hash[key]];
					hash[key].push(value);
				} else
					hash[key] = value;
			}
			return hash;
		});
	},
	toArray : function () {
		return this.split('');
	},
	succ : function () {
		return this.slice(0, this.length - 1) + String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
	},
	times : function (count) {
		return count < 1 ? '' : new Array(count + 1).join(this);
	},
	camelize : function () {
		var parts = this.split('-'),
		len = parts.length;
		if (len == 1)
			return parts[0];
		var camelized = this.charAt(0) == '-' ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1) : parts[0];
		for (var i = 1; i < len; i++)
			camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);
		return camelized;
	},
	capitalize : function () {
		return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
	},
	underscore : function () {
		return this.gsub(/::/, '/').gsub(/([A-Z]+)([A-Z][a-z])/, '#{1}_#{2}').gsub(/([a-z\d])([A-Z])/, '#{1}_#{2}').gsub(/-/, '_').toLowerCase();
	},
	dasherize : function () {
		return this.gsub(/_/, '-');
	},
	inspect : function (useDoubleQuotes) {
		var escapedString = this.gsub(/[\x00-\x1f\\]/, function (match) {
				var character = String.specialChar[match[0]];
				return character ? character : '\\u00' + match[0].charCodeAt().toPaddedString(2, 16);
			});
		if (useDoubleQuotes)
			return '"' + escapedString.replace(/"/g, '\\"') + '"';
		return "'" + escapedString.replace(/'/g, '\\\'') + "'";
	},
	toJSON : function () {
		return this.inspect(true);
	},
	unfilterJSON : function (filter) {
		return this.sub(filter || Prototype.JSONFilter, '#{1}');
	},
	isJSON : function () {
		var str = this;
		if (str.blank())
			return false;
		str = this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	},
	evalJSON : function (sanitize) {
		var json = this.unfilterJSON();
		try {
			if (!sanitize || json.isJSON())
				return eval('(' + json + ')');
		} catch (e) {}
		throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
	},
	include : function (pattern) {
		return this.indexOf(pattern) > -1;
	},
	startsWith : function (pattern) {
		return this.indexOf(pattern) === 0;
	},
	endsWith : function (pattern) {
		var d = this.length - pattern.length;
		return d >= 0 && this.lastIndexOf(pattern) === d;
	},
	empty : function () {
		return this == '';
	},
	blank : function () {
		return /^\s*$/.test(this);
	},
	interpolate : function (object, pattern) {
		return new Template(this, pattern).evaluate(object);
	}
});
if (Prototype.Browser.WebKit || Prototype.Browser.IE)
	Object.extend(String.prototype, {
		escapeHTML : function () {
			return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		},
		unescapeHTML : function () {
			return this.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
		}
	});
String.prototype.gsub.prepareReplacement = function (replacement) {
	if (Object.isFunction(replacement))
		return replacement;
	var template = new Template(replacement);
	return function (match) {
		return template.evaluate(match)
	};
};
String.prototype.parseQuery = String.prototype.toQueryParams;
Object.extend(String.prototype.escapeHTML, {
	div : document.createElement('div'),
	text : document.createTextNode('')
});
with (String.prototype.escapeHTML)div.appendChild(text);
var Template = Class.create({
		initialize : function (template, pattern) {
			this.template = template.toString();
			this.pattern = pattern || Template.Pattern;
		},
		evaluate : function (object) {
			if (Object.isFunction(object.toTemplateReplacements))
				object = object.toTemplateReplacements();
			return this.template.gsub(this.pattern, function (match) {
				if (object == null)
					return '';
				var before = match[1] || '';
				if (before == '\\')
					return match[2];
				var ctx = object,
				expr = match[3];
				var pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
				match = pattern.exec(expr);
				if (match == null)
					return before;
				while (match != null) {
					var comp = match[1].startsWith('[') ? match[2].gsub('\\\\]', ']') : match[1];
					ctx = ctx[comp];
					if (null == ctx || '' == match[3])
						break;
					expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
					match = pattern.exec(expr);
				}
				return before + String.interpret(ctx);
			});
		}
	});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = {
	each : function (iterator, context) {
		var index = 0;
		iterator = iterator.bind(context);
		try {
			this._each(function (value) {
				iterator(value, index++);
			});
		} catch (e) {
			if (e != $break)
				throw e;
		}
		return this;
	},
	eachSlice : function (number, iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var index = -number,
		slices = [],
		array = this.toArray();
		while ((index += number) < array.length)
			slices.push(array.slice(index, index + number));
		return slices.collect(iterator, context);
	},
	all : function (iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var result = true;
		this.each(function (value, index) {
			result = result && !!iterator(value, index);
			if (!result)
				throw $break;
		});
		return result;
	},
	any : function (iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var result = false;
		this.each(function (value, index) {
			if (result = !!iterator(value, index))
				throw $break;
		});
		return result;
	},
	collect : function (iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var results = [];
		this.each(function (value, index) {
			results.push(iterator(value, index));
		});
		return results;
	},
	detect : function (iterator, context) {
		iterator = iterator.bind(context);
		var result;
		this.each(function (value, index) {
			if (iterator(value, index)) {
				result = value;
				throw $break;
			}
		});
		return result;
	},
	findAll : function (iterator, context) {
		iterator = iterator.bind(context);
		var results = [];
		this.each(function (value, index) {
			if (iterator(value, index))
				results.push(value);
		});
		return results;
	},
	grep : function (filter, iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var results = [];
		if (Object.isString(filter))
			filter = new RegExp(filter);
		this.each(function (value, index) {
			if (filter.match(value))
				results.push(iterator(value, index));
		});
		return results;
	},
	include : function (object) {
		if (Object.isFunction(this.indexOf))
			if (this.indexOf(object) != -1)
				return true;
		var found = false;
		this.each(function (value) {
			if (value == object) {
				found = true;
				throw $break;
			}
		});
		return found;
	},
	inGroupsOf : function (number, fillWith) {
		fillWith = Object.isUndefined(fillWith) ? null : fillWith;
		return this.eachSlice(number, function (slice) {
			while (slice.length < number)
				slice.push(fillWith);
			return slice;
		});
	},
	inject : function (memo, iterator, context) {
		iterator = iterator.bind(context);
		this.each(function (value, index) {
			memo = iterator(memo, value, index);
		});
		return memo;
	},
	invoke : function (method) {
		var args = $A(arguments).slice(1);
		return this.map(function (value) {
			return value[method].apply(value, args);
		});
	},
	max : function (iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var result;
		this.each(function (value, index) {
			value = iterator(value, index);
			if (result == null || value >= result)
				result = value;
		});
		return result;
	},
	min : function (iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var result;
		this.each(function (value, index) {
			value = iterator(value, index);
			if (result == null || value < result)
				result = value;
		});
		return result;
	},
	partition : function (iterator, context) {
		iterator = iterator ? iterator.bind(context) : Prototype.K;
		var trues = [],
		falses = [];
		this.each(function (value, index) {
			(iterator(value, index) ? trues : falses).push(value);
		});
		return [trues, falses];
	},
	pluck : function (property) {
		var results = [];
		this.each(function (value) {
			results.push(value[property]);
		});
		return results;
	},
	reject : function (iterator, context) {
		iterator = iterator.bind(context);
		var results = [];
		this.each(function (value, index) {
			if (!iterator(value, index))
				results.push(value);
		});
		return results;
	},
	sortBy : function (iterator, context) {
		iterator = iterator.bind(context);
		return this.map(function (value, index) {
			return {
				value : value,
				criteria : iterator(value, index)
			};
		}).sort(function (left, right) {
			var a = left.criteria,
			b = right.criteria;
			return a < b ? -1 : a > b ? 1 : 0;
		}).pluck('value');
	},
	toArray : function () {
		return this.map();
	},
	zip : function () {
		var iterator = Prototype.K,
		args = $A(arguments);
		if (Object.isFunction(args.last()))
			iterator = args.pop();
		var collections = [this].concat(args).map($A);
		return this.map(function (value, index) {
			return iterator(collections.pluck(index));
		});
	},
	size : function () {
		return this.toArray().length;
	},
	inspect : function () {
		return '#<Enumerable:' + this.toArray().inspect() + '>';
	}
};
Object.extend(Enumerable, {
	map : Enumerable.collect,
	find : Enumerable.detect,
	select : Enumerable.findAll,
	filter : Enumerable.findAll,
	member : Enumerable.include,
	entries : Enumerable.toArray,
	every : Enumerable.all,
	some : Enumerable.any
});
function $A(iterable) {
	if (!iterable)
		return [];
	if (iterable.toArray)
		return iterable.toArray();
	var length = iterable.length || 0,
	results = new Array(length);
	while (length--)
		results[length] = iterable[length];
	return results;
}
if (Prototype.Browser.WebKit) {
	$A = function (iterable) {
		if (!iterable)
			return [];
		if (!(Object.isFunction(iterable) && iterable == '[object NodeList]') && iterable.toArray)
			return iterable.toArray();
		var length = iterable.length || 0,
		results = new Array(length);
		while (length--)
			results[length] = iterable[length];
		return results;
	};
}
Array.from = $A;
Object.extend(Array.prototype, Enumerable);
if (!Array.prototype._reverse)
	Array.prototype._reverse = Array.prototype.reverse;
Object.extend(Array.prototype, {
	_each : function (iterator) {
		for (var i = 0, length = this.length; i < length; i++)
			iterator(this[i]);
	},
	clear : function () {
		this.length = 0;
		return this;
	},
	first : function () {
		return this[0];
	},
	last : function () {
		return this[this.length - 1];
	},
	compact : function () {
		return this.select(function (value) {
			return value != null;
		});
	},
	flatten : function () {
		return this.inject([], function (array, value) {
			return array.concat(Object.isArray(value) ? value.flatten() : [value]);
		});
	},
	without : function () {
		var values = $A(arguments);
		return this.select(function (value) {
			return !values.include(value);
		});
	},
	reverse : function (inline) {
		return (inline !== false ? this : this.toArray())._reverse();
	},
	reduce : function () {
		return this.length > 1 ? this : this[0];
	},
	uniq : function (sorted) {
		return this.inject([], function (array, value, index) {
			if (0 == index || (sorted ? array.last() != value : !array.include(value)))
				array.push(value);
			return array;
		});
	},
	intersect : function (array) {
		return this.uniq().findAll(function (item) {
			return array.detect(function (value) {
				return item === value
			});
		});
	},
	clone : function () {
		return [].concat(this);
	},
	size : function () {
		return this.length;
	},
	inspect : function () {
		return '[' + this.map(Object.inspect).join(', ') + ']';
	},
	toJSON : function () {
		var results = [];
		this.each(function (object) {
			var value = Object.toJSON(object);
			if (!Object.isUndefined(value))
				results.push(value);
		});
		return '[' + results.join(', ') + ']';
	}
});
if (Object.isFunction(Array.prototype.forEach))
	Array.prototype._each = Array.prototype.forEach;
if (!Array.prototype.indexOf)
	Array.prototype.indexOf = function (item, i) {
		i || (i = 0);
		var length = this.length;
		if (i < 0)
			i = length + i;
		for (; i < length; i++)
			if (this[i] === item)
				return i;
		return -1;
	};
if (!Array.prototype.lastIndexOf)
	Array.prototype.lastIndexOf = function (item, i) {
		i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
		var n = this.slice(0, i).reverse().indexOf(item);
		return (n < 0) ? n : i - n - 1;
	};
Array.prototype.toArray = Array.prototype.clone;
var b2Settings = Class.create();
b2Settings.prototype = {
	initialize : function () {}

}
b2Settings.USHRT_MAX = 0x0000ffff;
b2Settings.b2_pi = Math.PI;
b2Settings.b2_massUnitsPerKilogram = 1.0;
b2Settings.b2_timeUnitsPerSecond = 1.0;
b2Settings.b2_lengthUnitsPerMeter = 30.0;
b2Settings.b2_maxManifoldPoints = 2;
b2Settings.b2_maxShapesPerBody = 64;
b2Settings.b2_maxPolyVertices = 8;
b2Settings.b2_maxProxies = 1024;
b2Settings.b2_maxPairs = 8 * b2Settings.b2_maxProxies;
b2Settings.b2_linearSlop = 0.005 * b2Settings.b2_lengthUnitsPerMeter;
b2Settings.b2_angularSlop = 2.0 / 180.0 * b2Settings.b2_pi;
b2Settings.b2_velocityThreshold = 1.0 * b2Settings.b2_lengthUnitsPerMeter / b2Settings.b2_timeUnitsPerSecond;
b2Settings.b2_maxLinearCorrection = 0.2 * b2Settings.b2_lengthUnitsPerMeter;
b2Settings.b2_maxAngularCorrection = 8.0 / 180.0 * b2Settings.b2_pi;
b2Settings.b2_contactBaumgarte = 0.2;
b2Settings.b2_timeToSleep = 0.5 * b2Settings.b2_timeUnitsPerSecond;
b2Settings.b2_linearSleepTolerance = 0.01 * b2Settings.b2_lengthUnitsPerMeter / b2Settings.b2_timeUnitsPerSecond;
b2Settings.b2_angularSleepTolerance = 2.0 / 180.0 / b2Settings.b2_timeUnitsPerSecond;
b2Settings.b2Assert = function (a) {
	if (!a) {
		var nullVec;
		nullVec.x++;
	}
};
var b2Vec2 = Class.create();
b2Vec2.prototype = {
	initialize : function (x_, y_) {
		this.x = x_;
		this.y = y_;
	},
	SetZero : function () {
		this.x = 0.0;
		this.y = 0.0;
	},
	Set : function (x_, y_) {
		this.x = x_;
		this.y = y_;
	},
	SetV : function (v) {
		this.x = v.x;
		this.y = v.y;
	},
	Negative : function () {
		return new b2Vec2(-this.x, -this.y);
	},
	Copy : function () {
		return new b2Vec2(this.x, this.y);
	},
	Add : function (v) {
		this.x += v.x;
		this.y += v.y;
	},
	Subtract : function (v) {
		this.x -= v.x;
		this.y -= v.y;
	},
	Multiply : function (a) {
		this.x *= a;
		this.y *= a;
	},
	MulM : function (A) {
		var tX = this.x;
		this.x = A.col1.x * tX + A.col2.x * this.y;
		this.y = A.col1.y * tX + A.col2.y * this.y;
	},
	MulTM : function (A) {
		var tX = b2Math.b2Dot(this, A.col1);
		this.y = b2Math.b2Dot(this, A.col2);
		this.x = tX;
	},
	CrossVF : function (s) {
		var tX = this.x;
		this.x = s * this.y;
		this.y = -s * tX;
	},
	CrossFV : function (s) {
		var tX = this.x;
		this.x = -s * this.y;
		this.y = s * tX;
	},
	MinV : function (b) {
		this.x = this.x < b.x ? this.x : b.x;
		this.y = this.y < b.y ? this.y : b.y;
	},
	MaxV : function (b) {
		this.x = this.x > b.x ? this.x : b.x;
		this.y = this.y > b.y ? this.y : b.y;
	},
	Abs : function () {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);
	},
	Length : function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	Normalize : function () {
		var length = this.Length();
		if (length < Number.MIN_VALUE) {
			return 0.0;
		}
		var invLength = 1.0 / length;
		this.x *= invLength;
		this.y *= invLength;
		return length;
	},
	IsValid : function () {
		return b2Math.b2IsValid(this.x) && b2Math.b2IsValid(this.y);
	},
	x : null,
	y : null
};
b2Vec2.Make = function (x_, y_) {
	return new b2Vec2(x_, y_);
};
var b2Mat22 = Class.create();
b2Mat22.prototype = {
	initialize : function (angle, c1, c2) {
		if (angle == null)
			angle = 0;
		this.col1 = new b2Vec2();
		this.col2 = new b2Vec2();
		if (c1 != null && c2 != null) {
			this.col1.SetV(c1);
			this.col2.SetV(c2);
		} else {
			var c = Math.cos(angle);
			var s = Math.sin(angle);
			this.col1.x = c;
			this.col2.x = -s;
			this.col1.y = s;
			this.col2.y = c;
		}
	},
	Set : function (angle) {
		var c = Math.cos(angle);
		var s = Math.sin(angle);
		this.col1.x = c;
		this.col2.x = -s;
		this.col1.y = s;
		this.col2.y = c;
	},
	SetVV : function (c1, c2) {
		this.col1.SetV(c1);
		this.col2.SetV(c2);
	},
	Copy : function () {
		return new b2Mat22(0, this.col1, this.col2);
	},
	SetM : function (m) {
		this.col1.SetV(m.col1);
		this.col2.SetV(m.col2);
	},
	AddM : function (m) {
		this.col1.x += m.col1.x;
		this.col1.y += m.col1.y;
		this.col2.x += m.col2.x;
		this.col2.y += m.col2.y;
	},
	SetIdentity : function () {
		this.col1.x = 1.0;
		this.col2.x = 0.0;
		this.col1.y = 0.0;
		this.col2.y = 1.0;
	},
	SetZero : function () {
		this.col1.x = 0.0;
		this.col2.x = 0.0;
		this.col1.y = 0.0;
		this.col2.y = 0.0;
	},
	Invert : function (out) {
		var a = this.col1.x;
		var b = this.col2.x;
		var c = this.col1.y;
		var d = this.col2.y;
		var det = a * d - b * c;
		det = 1.0 / det;
		out.col1.x = det * d;
		out.col2.x = -det * b;
		out.col1.y = -det * c;
		out.col2.y = det * a;
		return out;
	},
	Solve : function (out, bX, bY) {
		var a11 = this.col1.x;
		var a12 = this.col2.x;
		var a21 = this.col1.y;
		var a22 = this.col2.y;
		var det = a11 * a22 - a12 * a21;
		det = 1.0 / det;
		out.x = det * (a22 * bX - a12 * bY);
		out.y = det * (a11 * bY - a21 * bX);
		return out;
	},
	Abs : function () {
		this.col1.Abs();
		this.col2.Abs();
	},
	col1 : new b2Vec2(),
	col2 : new b2Vec2()
};
var b2Math = Class.create();
b2Math.prototype = {
	initialize : function () {}

}
b2Math.b2IsValid = function (x) {
	return isFinite(x);
};
b2Math.b2Dot = function (a, b) {
	return a.x * b.x + a.y * b.y;
};
b2Math.b2CrossVV = function (a, b) {
	return a.x * b.y - a.y * b.x;
};
b2Math.b2CrossVF = function (a, s) {
	var v = new b2Vec2(s * a.y, -s * a.x);
	return v;
};
b2Math.b2CrossFV = function (s, a) {
	var v = new b2Vec2(-s * a.y, s * a.x);
	return v;
};
b2Math.b2MulMV = function (A, v) {
	var u = new b2Vec2(A.col1.x * v.x + A.col2.x * v.y, A.col1.y * v.x + A.col2.y * v.y);
	return u;
};
b2Math.b2MulTMV = function (A, v) {
	var u = new b2Vec2(b2Math.b2Dot(v, A.col1), b2Math.b2Dot(v, A.col2));
	return u;
};
b2Math.AddVV = function (a, b) {
	var v = new b2Vec2(a.x + b.x, a.y + b.y);
	return v;
};
b2Math.SubtractVV = function (a, b) {
	var v = new b2Vec2(a.x - b.x, a.y - b.y);
	return v;
};
b2Math.MulFV = function (s, a) {
	var v = new b2Vec2(s * a.x, s * a.y);
	return v;
};
b2Math.AddMM = function (A, B) {
	var C = new b2Mat22(0, b2Math.AddVV(A.col1, B.col1), b2Math.AddVV(A.col2, B.col2));
	return C;
};
b2Math.b2MulMM = function (A, B) {
	var C = new b2Mat22(0, b2Math.b2MulMV(A, B.col1), b2Math.b2MulMV(A, B.col2));
	return C;
};
b2Math.b2MulTMM = function (A, B) {
	var c1 = new b2Vec2(b2Math.b2Dot(A.col1, B.col1), b2Math.b2Dot(A.col2, B.col1));
	var c2 = new b2Vec2(b2Math.b2Dot(A.col1, B.col2), b2Math.b2Dot(A.col2, B.col2));
	var C = new b2Mat22(0, c1, c2);
	return C;
};
b2Math.b2Abs = function (a) {
	return a > 0.0 ? a : -a;
};
b2Math.b2AbsV = function (a) {
	var b = new b2Vec2(b2Math.b2Abs(a.x), b2Math.b2Abs(a.y));
	return b;
};
b2Math.b2AbsM = function (A) {
	var B = new b2Mat22(0, b2Math.b2AbsV(A.col1), b2Math.b2AbsV(A.col2));
	return B;
};
b2Math.b2Min = function (a, b) {
	return a < b ? a : b;
};
b2Math.b2MinV = function (a, b) {
	var c = new b2Vec2(b2Math.b2Min(a.x, b.x), b2Math.b2Min(a.y, b.y));
	return c;
};
b2Math.b2Max = function (a, b) {
	return a > b ? a : b;
};
b2Math.b2MaxV = function (a, b) {
	var c = new b2Vec2(b2Math.b2Max(a.x, b.x), b2Math.b2Max(a.y, b.y));
	return c;
};
b2Math.b2Clamp = function (a, low, high) {
	return b2Math.b2Max(low, b2Math.b2Min(a, high));
};
b2Math.b2ClampV = function (a, low, high) {
	return b2Math.b2MaxV(low, b2Math.b2MinV(a, high));
};
b2Math.b2Swap = function (a, b) {
	var tmp = a[0];
	a[0] = b[0];
	b[0] = tmp;
};
b2Math.b2Random = function () {
	return Math.random() * 2 - 1;
};
b2Math.b2NextPowerOfTwo = function (x) {
	x |= (x >> 1) & 0x7FFFFFFF;
	x |= (x >> 2) & 0x3FFFFFFF;
	x |= (x >> 4) & 0x0FFFFFFF;
	x |= (x >> 8) & 0x00FFFFFF;
	x |= (x >> 16) & 0x0000FFFF;
	return x + 1;
};
b2Math.b2IsPowerOfTwo = function (x) {
	var result = x > 0 && (x & (x - 1)) == 0;
	return result;
};
b2Math.tempVec2 = new b2Vec2();
b2Math.tempVec3 = new b2Vec2();
b2Math.tempVec4 = new b2Vec2();
b2Math.tempVec5 = new b2Vec2();
b2Math.tempMat = new b2Mat22();
var b2AABB = Class.create();
b2AABB.prototype = {
	IsValid : function () {
		var dX = this.maxVertex.x;
		var dY = this.maxVertex.y;
		dX = this.maxVertex.x;
		dY = this.maxVertex.y;
		dX -= this.minVertex.x;
		dY -= this.minVertex.y;
		var valid = dX >= 0.0 && dY >= 0.0;
		valid = valid && this.minVertex.IsValid() && this.maxVertex.IsValid();
		return valid;
	},
	minVertex : new b2Vec2(),
	maxVertex : new b2Vec2(),
	initialize : function () {
		this.minVertex = new b2Vec2();
		this.maxVertex = new b2Vec2();
	}
};
var b2Bound = Class.create();
b2Bound.prototype = {
	IsLower : function () {
		return (this.value & 1) == 0;
	},
	IsUpper : function () {
		return (this.value & 1) == 1;
	},
	Swap : function (b) {
		var tempValue = this.value;
		var tempProxyId = this.proxyId;
		var tempStabbingCount = this.stabbingCount;
		this.value = b.value;
		this.proxyId = b.proxyId;
		this.stabbingCount = b.stabbingCount;
		b.value = tempValue;
		b.proxyId = tempProxyId;
		b.stabbingCount = tempStabbingCount;
	},
	value : 0,
	proxyId : 0,
	stabbingCount : 0,
	initialize : function () {}

}
var b2BoundValues = Class.create();
b2BoundValues.prototype = {
	lowerValues : [0, 0],
	upperValues : [0, 0],
	initialize : function () {
		this.lowerValues = [0, 0];
		this.upperValues = [0, 0];
	}
}
var b2Pair = Class.create();
b2Pair.prototype = {
	SetBuffered : function () {
		this.status |= b2Pair.e_pairBuffered;
	},
	ClearBuffered : function () {
		this.status &= ~b2Pair.e_pairBuffered;
	},
	IsBuffered : function () {
		return (this.status & b2Pair.e_pairBuffered) == b2Pair.e_pairBuffered;
	},
	SetRemoved : function () {
		this.status |= b2Pair.e_pairRemoved;
	},
	ClearRemoved : function () {
		this.status &= ~b2Pair.e_pairRemoved;
	},
	IsRemoved : function () {
		return (this.status & b2Pair.e_pairRemoved) == b2Pair.e_pairRemoved;
	},
	SetFinal : function () {
		this.status |= b2Pair.e_pairFinal;
	},
	IsFinal : function () {
		return (this.status & b2Pair.e_pairFinal) == b2Pair.e_pairFinal;
	},
	userData : null,
	proxyId1 : 0,
	proxyId2 : 0,
	next : 0,
	status : 0,
	initialize : function () {}

};
b2Pair.b2_nullPair = b2Settings.USHRT_MAX;
b2Pair.b2_nullProxy = b2Settings.USHRT_MAX;
b2Pair.b2_tableCapacity = b2Settings.b2_maxPairs;
b2Pair.b2_tableMask = b2Pair.b2_tableCapacity - 1;
b2Pair.e_pairBuffered = 0x0001;
b2Pair.e_pairRemoved = 0x0002;
b2Pair.e_pairFinal = 0x0004;
var b2PairCallback = Class.create();
b2PairCallback.prototype = {
	PairAdded : function (proxyUserData1, proxyUserData2) {
		return null
	},
	PairRemoved : function (proxyUserData1, proxyUserData2, pairUserData) {},
	initialize : function () {}

};
var b2BufferedPair = Class.create();
b2BufferedPair.prototype = {
	proxyId1 : 0,
	proxyId2 : 0,
	initialize : function () {}

}
var b2PairManager = Class.create();
b2PairManager.prototype = {
	initialize : function () {
		var i = 0;
		this.m_hashTable = new Array(b2Pair.b2_tableCapacity);
		for (i = 0; i < b2Pair.b2_tableCapacity; ++i) {
			this.m_hashTable[i] = b2Pair.b2_nullPair;
		}
		this.m_pairs = new Array(b2Settings.b2_maxPairs);
		for (i = 0; i < b2Settings.b2_maxPairs; ++i) {
			this.m_pairs[i] = new b2Pair();
		}
		this.m_pairBuffer = new Array(b2Settings.b2_maxPairs);
		for (i = 0; i < b2Settings.b2_maxPairs; ++i) {
			this.m_pairBuffer[i] = new b2BufferedPair();
		}
		for (i = 0; i < b2Settings.b2_maxPairs; ++i) {
			this.m_pairs[i].proxyId1 = b2Pair.b2_nullProxy;
			this.m_pairs[i].proxyId2 = b2Pair.b2_nullProxy;
			this.m_pairs[i].userData = null;
			this.m_pairs[i].status = 0;
			this.m_pairs[i].next = (i + 1);
		}
		this.m_pairs[b2Settings.b2_maxPairs - 1].next = b2Pair.b2_nullPair;
		this.m_pairCount = 0;
	},
	Initialize : function (broadPhase, callback) {
		this.m_broadPhase = broadPhase;
		this.m_callback = callback;
	},
	AddBufferedPair : function (proxyId1, proxyId2) {
		var pair = this.AddPair(proxyId1, proxyId2);
		if (pair.IsBuffered() == false) {
			pair.SetBuffered();
			this.m_pairBuffer[this.m_pairBufferCount].proxyId1 = pair.proxyId1;
			this.m_pairBuffer[this.m_pairBufferCount].proxyId2 = pair.proxyId2;
			++this.m_pairBufferCount;
		}
		pair.ClearRemoved();
		if (b2BroadPhase.s_validate) {
			this.ValidateBuffer();
		}
	},
	RemoveBufferedPair : function (proxyId1, proxyId2) {
		var pair = this.Find(proxyId1, proxyId2);
		if (pair == null) {
			return;
		}
		if (pair.IsBuffered() == false) {
			pair.SetBuffered();
			this.m_pairBuffer[this.m_pairBufferCount].proxyId1 = pair.proxyId1;
			this.m_pairBuffer[this.m_pairBufferCount].proxyId2 = pair.proxyId2;
			++this.m_pairBufferCount;
		}
		pair.SetRemoved();
		if (b2BroadPhase.s_validate) {
			this.ValidateBuffer();
		}
	},
	Commit : function () {
		var i = 0;
		var removeCount = 0;
		var proxies = this.m_broadPhase.m_proxyPool;
		for (i = 0; i < this.m_pairBufferCount; ++i) {
			var pair = this.Find(this.m_pairBuffer[i].proxyId1, this.m_pairBuffer[i].proxyId2);
			pair.ClearBuffered();
			var proxy1 = proxies[pair.proxyId1];
			var proxy2 = proxies[pair.proxyId2];
			if (pair.IsRemoved()) {
				if (pair.IsFinal() == true) {
					this.m_callback.PairRemoved(proxy1.userData, proxy2.userData, pair.userData);
				}
				this.m_pairBuffer[removeCount].proxyId1 = pair.proxyId1;
				this.m_pairBuffer[removeCount].proxyId2 = pair.proxyId2;
				++removeCount;
			} else {
				if (pair.IsFinal() == false) {
					pair.userData = this.m_callback.PairAdded(proxy1.userData, proxy2.userData);
					pair.SetFinal();
				}
			}
		}
		for (i = 0; i < removeCount; ++i) {
			this.RemovePair(this.m_pairBuffer[i].proxyId1, this.m_pairBuffer[i].proxyId2);
		}
		this.m_pairBufferCount = 0;
		if (b2BroadPhase.s_validate) {
			this.ValidateTable();
		}
	},
	AddPair : function (proxyId1, proxyId2) {
		if (proxyId1 > proxyId2) {
			var temp = proxyId1;
			proxyId1 = proxyId2;
			proxyId2 = temp;
		}
		var hash = b2PairManager.Hash(proxyId1, proxyId2) & b2Pair.b2_tableMask;
		var pair = pair = this.FindHash(proxyId1, proxyId2, hash);
		if (pair != null) {
			return pair;
		}
		var pIndex = this.m_freePair;
		pair = this.m_pairs[pIndex];
		this.m_freePair = pair.next;
		pair.proxyId1 = proxyId1;
		pair.proxyId2 = proxyId2;
		pair.status = 0;
		pair.userData = null;
		pair.next = this.m_hashTable[hash];
		this.m_hashTable[hash] = pIndex;
		++this.m_pairCount;
		return pair;
	},
	RemovePair : function (proxyId1, proxyId2) {
		if (proxyId1 > proxyId2) {
			var temp = proxyId1;
			proxyId1 = proxyId2;
			proxyId2 = temp;
		}
		var hash = b2PairManager.Hash(proxyId1, proxyId2) & b2Pair.b2_tableMask;
		var node = this.m_hashTable[hash];
		var pNode = null;
		while (node != b2Pair.b2_nullPair) {
			if (b2PairManager.Equals(this.m_pairs[node], proxyId1, proxyId2)) {
				var index = node;
				if (pNode) {
					pNode.next = this.m_pairs[node].next;
				} else {
					this.m_hashTable[hash] = this.m_pairs[node].next;
				}
				var pair = this.m_pairs[index];
				var userData = pair.userData;
				pair.next = this.m_freePair;
				pair.proxyId1 = b2Pair.b2_nullProxy;
				pair.proxyId2 = b2Pair.b2_nullProxy;
				pair.userData = null;
				pair.status = 0;
				this.m_freePair = index;
				--this.m_pairCount;
				return userData;
			} else {
				pNode = this.m_pairs[node];
				node = pNode.next;
			}
		}
		return null;
	},
	Find : function (proxyId1, proxyId2) {
		if (proxyId1 > proxyId2) {
			var temp = proxyId1;
			proxyId1 = proxyId2;
			proxyId2 = temp;
		}
		var hash = b2PairManager.Hash(proxyId1, proxyId2) & b2Pair.b2_tableMask;
		return this.FindHash(proxyId1, proxyId2, hash);
	},
	FindHash : function (proxyId1, proxyId2, hash) {
		var index = this.m_hashTable[hash];
		while (index != b2Pair.b2_nullPair && b2PairManager.Equals(this.m_pairs[index], proxyId1, proxyId2) == false) {
			index = this.m_pairs[index].next;
		}
		if (index == b2Pair.b2_nullPair) {
			return null;
		}
		return this.m_pairs[index];
	},
	ValidateBuffer : function () {},
	ValidateTable : function () {},
	m_broadPhase : null,
	m_callback : null,
	m_pairs : null,
	m_freePair : 0,
	m_pairCount : 0,
	m_pairBuffer : null,
	m_pairBufferCount : 0,
	m_hashTable : null
};
b2PairManager.Hash = function (proxyId1, proxyId2) {
	var key = ((proxyId2 << 16) & 0xffff0000) | proxyId1;
	key = ~key + ((key << 15) & 0xFFFF8000);
	key = key^((key >> 12) & 0x000fffff);
	key = key + ((key << 2) & 0xFFFFFFFC);
	key = key^((key >> 4) & 0x0fffffff);
	key = key * 2057;
	key = key^((key >> 16) & 0x0000ffff);
	return key;
};
b2PairManager.Equals = function (pair, proxyId1, proxyId2) {
	return (pair.proxyId1 == proxyId1 && pair.proxyId2 == proxyId2);
};
b2PairManager.EqualsPair = function (pair1, pair2) {
	return pair1.proxyId1 == pair2.proxyId1 && pair1.proxyId2 == pair2.proxyId2;
};
var b2BroadPhase = Class.create();
b2BroadPhase.prototype = {
	initialize : function (worldAABB, callback) {
		this.m_pairManager = new b2PairManager();
		this.m_proxyPool = new Array(b2Settings.b2_maxPairs);
		this.m_bounds = new Array(2 * b2Settings.b2_maxProxies);
		this.m_queryResults = new Array(b2Settings.b2_maxProxies);
		this.m_quantizationFactor = new b2Vec2();
		var i = 0;
		this.m_pairManager.Initialize(this, callback);
		this.m_worldAABB = worldAABB;
		this.m_proxyCount = 0;
		for (i = 0; i < b2Settings.b2_maxProxies; i++) {
			this.m_queryResults[i] = 0;
		}
		this.m_bounds = new Array(2);
		for (i = 0; i < 2; i++) {
			this.m_bounds[i] = new Array(2 * b2Settings.b2_maxProxies);
			for (var j = 0; j < 2 * b2Settings.b2_maxProxies; j++) {
				this.m_bounds[i][j] = new b2Bound();
			}
		}
		var dX = worldAABB.maxVertex.x;
		var dY = worldAABB.maxVertex.y;
		dX -= worldAABB.minVertex.x;
		dY -= worldAABB.minVertex.y;
		this.m_quantizationFactor.x = b2Settings.USHRT_MAX / dX;
		this.m_quantizationFactor.y = b2Settings.USHRT_MAX / dY;
		var tProxy;
		for (i = 0; i < b2Settings.b2_maxProxies - 1; ++i) {
			tProxy = new b2Proxy();
			this.m_proxyPool[i] = tProxy;
			tProxy.SetNext(i + 1);
			tProxy.timeStamp = 0;
			tProxy.overlapCount = b2BroadPhase.b2_invalid;
			tProxy.userData = null;
		}
		tProxy = new b2Proxy();
		this.m_proxyPool[b2Settings.b2_maxProxies - 1] = tProxy;
		tProxy.SetNext(b2Pair.b2_nullProxy);
		tProxy.timeStamp = 0;
		tProxy.overlapCount = b2BroadPhase.b2_invalid;
		tProxy.userData = null;
		this.m_freeProxy = 0;
		this.m_timeStamp = 1;
		this.m_queryResultCount = 0;
	},
	InRange : function (aabb) {
		var dX;
		var dY;
		var d2X;
		var d2Y;
		dX = aabb.minVertex.x;
		dY = aabb.minVertex.y;
		dX -= this.m_worldAABB.maxVertex.x;
		dY -= this.m_worldAABB.maxVertex.y;
		d2X = this.m_worldAABB.minVertex.x;
		d2Y = this.m_worldAABB.minVertex.y;
		d2X -= aabb.maxVertex.x;
		d2Y -= aabb.maxVertex.y;
		dX = b2Math.b2Max(dX, d2X);
		dY = b2Math.b2Max(dY, d2Y);
		return b2Math.b2Max(dX, dY) < 0.0;
	},
	GetProxy : function (proxyId) {
		if (proxyId == b2Pair.b2_nullProxy || this.m_proxyPool[proxyId].IsValid() == false) {
			return null;
		}
		return this.m_proxyPool[proxyId];
	},
	CreateProxy : function (aabb, userData) {
		var index = 0;
		var proxy;
		var proxyId = this.m_freeProxy;
		proxy = this.m_proxyPool[proxyId];
		this.m_freeProxy = proxy.GetNext();
		proxy.overlapCount = 0;
		proxy.userData = userData;
		var boundCount = 2 * this.m_proxyCount;
		var lowerValues = new Array();
		var upperValues = new Array();
		this.ComputeBounds(lowerValues, upperValues, aabb);
		for (var axis = 0; axis < 2; ++axis) {
			var bounds = this.m_bounds[axis];
			var lowerIndex = 0;
			var upperIndex = 0;
			var lowerIndexOut = [lowerIndex];
			var upperIndexOut = [upperIndex];
			this.Query(lowerIndexOut, upperIndexOut, lowerValues[axis], upperValues[axis], bounds, boundCount, axis);
			lowerIndex = lowerIndexOut[0];
			upperIndex = upperIndexOut[0];
			var tArr = new Array();
			var j = 0;
			var tEnd = boundCount - upperIndex
				var tBound1;
			var tBound2;
			for (j = 0; j < tEnd; j++) {
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[upperIndex + j];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tEnd = tArr.length;
			var tIndex = upperIndex + 2;
			for (j = 0; j < tEnd; j++) {
				tBound2 = tArr[j];
				tBound1 = bounds[tIndex + j]
					tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tArr = new Array();
			tEnd = upperIndex - lowerIndex;
			for (j = 0; j < tEnd; j++) {
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[lowerIndex + j];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tEnd = tArr.length;
			tIndex = lowerIndex + 1;
			for (j = 0; j < tEnd; j++) {
				tBound2 = tArr[j];
				tBound1 = bounds[tIndex + j]
					tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			++upperIndex;
			bounds[lowerIndex].value = lowerValues[axis];
			bounds[lowerIndex].proxyId = proxyId;
			bounds[upperIndex].value = upperValues[axis];
			bounds[upperIndex].proxyId = proxyId;
			bounds[lowerIndex].stabbingCount = lowerIndex == 0 ? 0 : bounds[lowerIndex - 1].stabbingCount;
			bounds[upperIndex].stabbingCount = bounds[upperIndex - 1].stabbingCount;
			for (index = lowerIndex; index < upperIndex; ++index) {
				bounds[index].stabbingCount++;
			}
			for (index = lowerIndex; index < boundCount + 2; ++index) {
				var proxy2 = this.m_proxyPool[bounds[index].proxyId];
				if (bounds[index].IsLower()) {
					proxy2.lowerBounds[axis] = index;
				} else {
					proxy2.upperBounds[axis] = index;
				}
			}
		}
		++this.m_proxyCount;
		for (var i = 0; i < this.m_queryResultCount; ++i) {
			this.m_pairManager.AddBufferedPair(proxyId, this.m_queryResults[i]);
		}
		this.m_pairManager.Commit();
		this.m_queryResultCount = 0;
		this.IncrementTimeStamp();
		return proxyId;
	},
	DestroyProxy : function (proxyId) {
		var proxy = this.m_proxyPool[proxyId];
		var boundCount = 2 * this.m_proxyCount;
		for (var axis = 0; axis < 2; ++axis) {
			var bounds = this.m_bounds[axis];
			var lowerIndex = proxy.lowerBounds[axis];
			var upperIndex = proxy.upperBounds[axis];
			var lowerValue = bounds[lowerIndex].value;
			var upperValue = bounds[upperIndex].value;
			var tArr = new Array();
			var j = 0;
			var tEnd = upperIndex - lowerIndex - 1;
			var tBound1;
			var tBound2;
			for (j = 0; j < tEnd; j++) {
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[lowerIndex + 1 + j];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tEnd = tArr.length;
			var tIndex = lowerIndex;
			for (j = 0; j < tEnd; j++) {
				tBound2 = tArr[j];
				tBound1 = bounds[tIndex + j]
					tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tArr = new Array();
			tEnd = boundCount - upperIndex - 1;
			for (j = 0; j < tEnd; j++) {
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[upperIndex + 1 + j];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tEnd = tArr.length;
			tIndex = upperIndex - 1;
			for (j = 0; j < tEnd; j++) {
				tBound2 = tArr[j];
				tBound1 = bounds[tIndex + j]
					tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			tEnd = boundCount - 2;
			for (var index = lowerIndex; index < tEnd; ++index) {
				var proxy2 = this.m_proxyPool[bounds[index].proxyId];
				if (bounds[index].IsLower()) {
					proxy2.lowerBounds[axis] = index;
				} else {
					proxy2.upperBounds[axis] = index;
				}
			}
			tEnd = upperIndex - 1;
			for (var index2 = lowerIndex; index2 < tEnd; ++index2) {
				bounds[index2].stabbingCount--;
			}
			this.Query([0], [0], lowerValue, upperValue, bounds, boundCount - 2, axis);
		}
		for (var i = 0; i < this.m_queryResultCount; ++i) {
			this.m_pairManager.RemoveBufferedPair(proxyId, this.m_queryResults[i]);
		}
		this.m_pairManager.Commit();
		this.m_queryResultCount = 0;
		this.IncrementTimeStamp();
		proxy.userData = null;
		proxy.overlapCount = b2BroadPhase.b2_invalid;
		proxy.lowerBounds[0] = b2BroadPhase.b2_invalid;
		proxy.lowerBounds[1] = b2BroadPhase.b2_invalid;
		proxy.upperBounds[0] = b2BroadPhase.b2_invalid;
		proxy.upperBounds[1] = b2BroadPhase.b2_invalid;
		proxy.SetNext(this.m_freeProxy);
		this.m_freeProxy = proxyId;
		--this.m_proxyCount;
	},
	MoveProxy : function (proxyId, aabb) {
		var axis = 0;
		var index = 0;
		var bound;
		var prevBound
		var nextBound
		var nextProxyId = 0;
		var nextProxy;
		if (proxyId == b2Pair.b2_nullProxy || b2Settings.b2_maxProxies <= proxyId) {
			return;
		}
		if (aabb.IsValid() == false) {
			return;
		}
		var boundCount = 2 * this.m_proxyCount;
		var proxy = this.m_proxyPool[proxyId];
		var newValues = new b2BoundValues();
		this.ComputeBounds(newValues.lowerValues, newValues.upperValues, aabb);
		var oldValues = new b2BoundValues();
		for (axis = 0; axis < 2; ++axis) {
			oldValues.lowerValues[axis] = this.m_bounds[axis][proxy.lowerBounds[axis]].value;
			oldValues.upperValues[axis] = this.m_bounds[axis][proxy.upperBounds[axis]].value;
		}
		for (axis = 0; axis < 2; ++axis) {
			var bounds = this.m_bounds[axis];
			var lowerIndex = proxy.lowerBounds[axis];
			var upperIndex = proxy.upperBounds[axis];
			var lowerValue = newValues.lowerValues[axis];
			var upperValue = newValues.upperValues[axis];
			var deltaLower = lowerValue - bounds[lowerIndex].value;
			var deltaUpper = upperValue - bounds[upperIndex].value;
			bounds[lowerIndex].value = lowerValue;
			bounds[upperIndex].value = upperValue;
			if (deltaLower < 0) {
				index = lowerIndex;
				while (index > 0 && lowerValue < bounds[index - 1].value) {
					bound = bounds[index];
					prevBound = bounds[index - 1];
					var prevProxyId = prevBound.proxyId;
					var prevProxy = this.m_proxyPool[prevBound.proxyId];
					prevBound.stabbingCount++;
					if (prevBound.IsUpper() == true) {
						if (this.TestOverlap(newValues, prevProxy)) {
							this.m_pairManager.AddBufferedPair(proxyId, prevProxyId);
						}
						prevProxy.upperBounds[axis]++;
						bound.stabbingCount++;
					} else {
						prevProxy.lowerBounds[axis]++;
						bound.stabbingCount--;
					}
					proxy.lowerBounds[axis]--;
					bound.Swap(prevBound);
					--index;
				}
			}
			if (deltaUpper > 0) {
				index = upperIndex;
				while (index < boundCount - 1 && bounds[index + 1].value <= upperValue) {
					bound = bounds[index];
					nextBound = bounds[index + 1];
					nextProxyId = nextBound.proxyId;
					nextProxy = this.m_proxyPool[nextProxyId];
					nextBound.stabbingCount++;
					if (nextBound.IsLower() == true) {
						if (this.TestOverlap(newValues, nextProxy)) {
							this.m_pairManager.AddBufferedPair(proxyId, nextProxyId);
						}
						nextProxy.lowerBounds[axis]--;
						bound.stabbingCount++;
					} else {
						nextProxy.upperBounds[axis]--;
						bound.stabbingCount--;
					}
					proxy.upperBounds[axis]++;
					bound.Swap(nextBound);
					index++;
				}
			}
			if (deltaLower > 0) {
				index = lowerIndex;
				while (index < boundCount - 1 && bounds[index + 1].value <= lowerValue) {
					bound = bounds[index];
					nextBound = bounds[index + 1];
					nextProxyId = nextBound.proxyId;
					nextProxy = this.m_proxyPool[nextProxyId];
					nextBound.stabbingCount--;
					if (nextBound.IsUpper()) {
						if (this.TestOverlap(oldValues, nextProxy)) {
							this.m_pairManager.RemoveBufferedPair(proxyId, nextProxyId);
						}
						nextProxy.upperBounds[axis]--;
						bound.stabbingCount--;
					} else {
						nextProxy.lowerBounds[axis]--;
						bound.stabbingCount++;
					}
					proxy.lowerBounds[axis]++;
					bound.Swap(nextBound);
					index++;
				}
			}
			if (deltaUpper < 0) {
				index = upperIndex;
				while (index > 0 && upperValue < bounds[index - 1].value) {
					bound = bounds[index];
					prevBound = bounds[index - 1];
					prevProxyId = prevBound.proxyId;
					prevProxy = this.m_proxyPool[prevProxyId];
					prevBound.stabbingCount--;
					if (prevBound.IsLower() == true) {
						if (this.TestOverlap(oldValues, prevProxy)) {
							this.m_pairManager.RemoveBufferedPair(proxyId, prevProxyId);
						}
						prevProxy.lowerBounds[axis]++;
						bound.stabbingCount--;
					} else {
						prevProxy.upperBounds[axis]++;
						bound.stabbingCount++;
					}
					proxy.upperBounds[axis]--;
					bound.Swap(prevBound);
					index--;
				}
			}
		}
	},
	Commit : function () {
		this.m_pairManager.Commit();
	},
	QueryAABB : function (aabb, userData, maxCount) {
		var lowerValues = new Array();
		var upperValues = new Array();
		this.ComputeBounds(lowerValues, upperValues, aabb);
		var lowerIndex = 0;
		var upperIndex = 0;
		var lowerIndexOut = [lowerIndex];
		var upperIndexOut = [upperIndex];
		this.Query(lowerIndexOut, upperIndexOut, lowerValues[0], upperValues[0], this.m_bounds[0], 2 * this.m_proxyCount, 0);
		this.Query(lowerIndexOut, upperIndexOut, lowerValues[1], upperValues[1], this.m_bounds[1], 2 * this.m_proxyCount, 1);
		var count = 0;
		for (var i = 0; i < this.m_queryResultCount && count < maxCount; ++i, ++count) {
			var proxy = this.m_proxyPool[this.m_queryResults[i]];
			userData[i] = proxy.userData;
		}
		this.m_queryResultCount = 0;
		this.IncrementTimeStamp();
		return count;
	},
	Validate : function () {
		var pair;
		var proxy1;
		var proxy2;
		var overlap;
		for (var axis = 0; axis < 2; ++axis) {
			var bounds = this.m_bounds[axis];
			var boundCount = 2 * this.m_proxyCount;
			var stabbingCount = 0;
			for (var i = 0; i < boundCount; ++i) {
				var bound = bounds[i];
				if (bound.IsLower() == true) {
					stabbingCount++;
				} else {
					stabbingCount--;
				}
			}
		}
	},
	ComputeBounds : function (lowerValues, upperValues, aabb) {
		var minVertexX = aabb.minVertex.x;
		var minVertexY = aabb.minVertex.y;
		minVertexX = b2Math.b2Min(minVertexX, this.m_worldAABB.maxVertex.x);
		minVertexY = b2Math.b2Min(minVertexY, this.m_worldAABB.maxVertex.y);
		minVertexX = b2Math.b2Max(minVertexX, this.m_worldAABB.minVertex.x);
		minVertexY = b2Math.b2Max(minVertexY, this.m_worldAABB.minVertex.y);
		var maxVertexX = aabb.maxVertex.x;
		var maxVertexY = aabb.maxVertex.y;
		maxVertexX = b2Math.b2Min(maxVertexX, this.m_worldAABB.maxVertex.x);
		maxVertexY = b2Math.b2Min(maxVertexY, this.m_worldAABB.maxVertex.y);
		maxVertexX = b2Math.b2Max(maxVertexX, this.m_worldAABB.minVertex.x);
		maxVertexY = b2Math.b2Max(maxVertexY, this.m_worldAABB.minVertex.y);
		lowerValues[0] = (this.m_quantizationFactor.x * (minVertexX - this.m_worldAABB.minVertex.x)) & (b2Settings.USHRT_MAX - 1);
		upperValues[0] = ((this.m_quantizationFactor.x * (maxVertexX - this.m_worldAABB.minVertex.x)) & 0x0000ffff) | 1;
		lowerValues[1] = (this.m_quantizationFactor.y * (minVertexY - this.m_worldAABB.minVertex.y)) & (b2Settings.USHRT_MAX - 1);
		upperValues[1] = ((this.m_quantizationFactor.y * (maxVertexY - this.m_worldAABB.minVertex.y)) & 0x0000ffff) | 1;
	},
	TestOverlapValidate : function (p1, p2) {
		for (var axis = 0; axis < 2; ++axis) {
			var bounds = this.m_bounds[axis];
			if (bounds[p1.lowerBounds[axis]].value > bounds[p2.upperBounds[axis]].value)
				return false;
			if (bounds[p1.upperBounds[axis]].value < bounds[p2.lowerBounds[axis]].value)
				return false;
		}
		return true;
	},
	TestOverlap : function (b, p) {
		for (var axis = 0; axis < 2; ++axis) {
			var bounds = this.m_bounds[axis];
			if (b.lowerValues[axis] > bounds[p.upperBounds[axis]].value)
				return false;
			if (b.upperValues[axis] < bounds[p.lowerBounds[axis]].value)
				return false;
		}
		return true;
	},
	Query : function (lowerQueryOut, upperQueryOut, lowerValue, upperValue, bounds, boundCount, axis) {
		var lowerQuery = b2BroadPhase.BinarySearch(bounds, boundCount, lowerValue);
		var upperQuery = b2BroadPhase.BinarySearch(bounds, boundCount, upperValue);
		for (var j = lowerQuery; j < upperQuery; ++j) {
			if (bounds[j].IsLower()) {
				this.IncrementOverlapCount(bounds[j].proxyId);
			}
		}
		if (lowerQuery > 0) {
			var i = lowerQuery - 1;
			var s = bounds[i].stabbingCount;
			while (s) {
				if (bounds[i].IsLower()) {
					var proxy = this.m_proxyPool[bounds[i].proxyId];
					if (lowerQuery <= proxy.upperBounds[axis]) {
						this.IncrementOverlapCount(bounds[i].proxyId);
						--s;
					}
				}
				--i;
			}
		}
		lowerQueryOut[0] = lowerQuery;
		upperQueryOut[0] = upperQuery;
	},
	IncrementOverlapCount : function (proxyId) {
		var proxy = this.m_proxyPool[proxyId];
		if (proxy.timeStamp < this.m_timeStamp) {
			proxy.timeStamp = this.m_timeStamp;
			proxy.overlapCount = 1;
		} else {
			proxy.overlapCount = 2;
			this.m_queryResults[this.m_queryResultCount] = proxyId;
			++this.m_queryResultCount;
		}
	},
	IncrementTimeStamp : function () {
		if (this.m_timeStamp == b2Settings.USHRT_MAX) {
			for (var i = 0; i < b2Settings.b2_maxProxies; ++i) {
				this.m_proxyPool[i].timeStamp = 0;
			}
			this.m_timeStamp = 1;
		} else {
			++this.m_timeStamp;
		}
	},
	m_pairManager : new b2PairManager(),
	m_proxyPool : new Array(b2Settings.b2_maxPairs),
	m_freeProxy : 0,
	m_bounds : new Array(2 * b2Settings.b2_maxProxies),
	m_queryResults : new Array(b2Settings.b2_maxProxies),
	m_queryResultCount : 0,
	m_worldAABB : null,
	m_quantizationFactor : new b2Vec2(),
	m_proxyCount : 0,
	m_timeStamp : 0
};
b2BroadPhase.s_validate = false;
b2BroadPhase.b2_invalid = b2Settings.USHRT_MAX;
b2BroadPhase.b2_nullEdge = b2Settings.USHRT_MAX;
b2BroadPhase.BinarySearch = function (bounds, count, value) {
	var low = 0;
	var high = count - 1;
	while (low <= high) {
		var mid = Math.floor((low + high) / 2);
		if (bounds[mid].value > value) {
			high = mid - 1;
		} else if (bounds[mid].value < value) {
			low = mid + 1;
		} else {
			return (mid);
		}
	}
	return (low);
};
var b2Collision = Class.create();
b2Collision.prototype = {
	initialize : function () {}

}
b2Collision.b2_nullFeature = 0x000000ff;
b2Collision.ClipSegmentToLine = function (vOut, vIn, normal, offset) {
	var numOut = 0;
	var vIn0 = vIn[0].v;
	var vIn1 = vIn[1].v;
	var distance0 = b2Math.b2Dot(normal, vIn[0].v) - offset;
	var distance1 = b2Math.b2Dot(normal, vIn[1].v) - offset;
	if (distance0 <= 0.0)
		vOut[numOut++] = vIn[0];
	if (distance1 <= 0.0)
		vOut[numOut++] = vIn[1];
	if (distance0 * distance1 < 0.0) {
		var interp = distance0 / (distance0 - distance1);
		var tVec = vOut[numOut].v;
		tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
		tVec.y = vIn0.y + interp * (vIn1.y - vIn0.y);
		if (distance0 > 0.0) {
			vOut[numOut].id = vIn[0].id;
		} else {
			vOut[numOut].id = vIn[1].id;
		}
		++numOut;
	}
	return numOut;
};
b2Collision.EdgeSeparation = function (poly1, edge1, poly2) {
	var vert1s = poly1.m_vertices;
	var count2 = poly2.m_vertexCount;
	var vert2s = poly2.m_vertices;
	var normalX = poly1.m_normals[edge1].x;
	var normalY = poly1.m_normals[edge1].y;
	var tX = normalX;
	var tMat = poly1.m_R;
	normalX = tMat.col1.x * tX + tMat.col2.x * normalY;
	normalY = tMat.col1.y * tX + tMat.col2.y * normalY;
	var normalLocal2X = normalX;
	var normalLocal2Y = normalY;
	tMat = poly2.m_R;
	tX = normalLocal2X * tMat.col1.x + normalLocal2Y * tMat.col1.y;
	normalLocal2Y = normalLocal2X * tMat.col2.x + normalLocal2Y * tMat.col2.y;
	normalLocal2X = tX;
	var vertexIndex2 = 0;
	var minDot = Number.MAX_VALUE;
	for (var i = 0; i < count2; ++i) {
		var tVec = vert2s[i];
		var dot = tVec.x * normalLocal2X + tVec.y * normalLocal2Y;
		if (dot < minDot) {
			minDot = dot;
			vertexIndex2 = i;
		}
	}
	tMat = poly1.m_R;
	var v1X = poly1.m_position.x + (tMat.col1.x * vert1s[edge1].x + tMat.col2.x * vert1s[edge1].y)
		var v1Y = poly1.m_position.y + (tMat.col1.y * vert1s[edge1].x + tMat.col2.y * vert1s[edge1].y)
		tMat = poly2.m_R;
	var v2X = poly2.m_position.x + (tMat.col1.x * vert2s[vertexIndex2].x + tMat.col2.x * vert2s[vertexIndex2].y)
		var v2Y = poly2.m_position.y + (tMat.col1.y * vert2s[vertexIndex2].x + tMat.col2.y * vert2s[vertexIndex2].y)
		v2X -= v1X;
	v2Y -= v1Y;
	var separation = v2X * normalX + v2Y * normalY;
	return separation;
};
b2Collision.FindMaxSeparation = function (edgeIndex, poly1, poly2, conservative) {
	var count1 = poly1.m_vertexCount;
	var dX = poly2.m_position.x - poly1.m_position.x;
	var dY = poly2.m_position.y - poly1.m_position.y;
	var dLocal1X = (dX * poly1.m_R.col1.x + dY * poly1.m_R.col1.y);
	var dLocal1Y = (dX * poly1.m_R.col2.x + dY * poly1.m_R.col2.y);
	var edge = 0;
	var maxDot = -Number.MAX_VALUE;
	for (var i = 0; i < count1; ++i) {
		var dot = (poly1.m_normals[i].x * dLocal1X + poly1.m_normals[i].y * dLocal1Y);
		if (dot > maxDot) {
			maxDot = dot;
			edge = i;
		}
	}
	var s = b2Collision.EdgeSeparation(poly1, edge, poly2);
	if (s > 0.0 && conservative == false) {
		return s;
	}
	var prevEdge = edge - 1 >= 0 ? edge - 1 : count1 - 1;
	var sPrev = b2Collision.EdgeSeparation(poly1, prevEdge, poly2);
	if (sPrev > 0.0 && conservative == false) {
		return sPrev;
	}
	var nextEdge = edge + 1 < count1 ? edge + 1 : 0;
	var sNext = b2Collision.EdgeSeparation(poly1, nextEdge, poly2);
	if (sNext > 0.0 && conservative == false) {
		return sNext;
	}
	var bestEdge = 0;
	var bestSeparation;
	var increment = 0;
	if (sPrev > s && sPrev > sNext) {
		increment = -1;
		bestEdge = prevEdge;
		bestSeparation = sPrev;
	} else if (sNext > s) {
		increment = 1;
		bestEdge = nextEdge;
		bestSeparation = sNext;
	} else {
		edgeIndex[0] = edge;
		return s;
	}
	while (true) {
		if (increment == -1)
			edge = bestEdge - 1 >= 0 ? bestEdge - 1 : count1 - 1;
		else
			edge = bestEdge + 1 < count1 ? bestEdge + 1 : 0;
		s = b2Collision.EdgeSeparation(poly1, edge, poly2);
		if (s > 0.0 && conservative == false) {
			return s;
		}
		if (s > bestSeparation) {
			bestEdge = edge;
			bestSeparation = s;
		} else {
			break;
		}
	}
	edgeIndex[0] = bestEdge;
	return bestSeparation;
};
b2Collision.FindIncidentEdge = function (c, poly1, edge1, poly2) {
	var count1 = poly1.m_vertexCount;
	var vert1s = poly1.m_vertices;
	var count2 = poly2.m_vertexCount;
	var vert2s = poly2.m_vertices;
	var vertex11 = edge1;
	var vertex12 = edge1 + 1 == count1 ? 0 : edge1 + 1;
	var tVec = vert1s[vertex12];
	var normal1Local1X = tVec.x;
	var normal1Local1Y = tVec.y;
	tVec = vert1s[vertex11];
	normal1Local1X -= tVec.x;
	normal1Local1Y -= tVec.y;
	var tX = normal1Local1X;
	normal1Local1X = normal1Local1Y;
	normal1Local1Y = -tX;
	var invLength = 1.0 / Math.sqrt(normal1Local1X * normal1Local1X + normal1Local1Y * normal1Local1Y);
	normal1Local1X *= invLength;
	normal1Local1Y *= invLength;
	var normal1X = normal1Local1X;
	var normal1Y = normal1Local1Y;
	tX = normal1X;
	var tMat = poly1.m_R;
	normal1X = tMat.col1.x * tX + tMat.col2.x * normal1Y;
	normal1Y = tMat.col1.y * tX + tMat.col2.y * normal1Y;
	var normal1Local2X = normal1X;
	var normal1Local2Y = normal1Y;
	tMat = poly2.m_R;
	tX = normal1Local2X * tMat.col1.x + normal1Local2Y * tMat.col1.y;
	normal1Local2Y = normal1Local2X * tMat.col2.x + normal1Local2Y * tMat.col2.y;
	normal1Local2X = tX;
	var vertex21 = 0;
	var vertex22 = 0;
	var minDot = Number.MAX_VALUE;
	for (var i = 0; i < count2; ++i) {
		var i1 = i;
		var i2 = i + 1 < count2 ? i + 1 : 0;
		tVec = vert2s[i2];
		var normal2Local2X = tVec.x;
		var normal2Local2Y = tVec.y;
		tVec = vert2s[i1];
		normal2Local2X -= tVec.x;
		normal2Local2Y -= tVec.y;
		tX = normal2Local2X;
		normal2Local2X = normal2Local2Y;
		normal2Local2Y = -tX;
		invLength = 1.0 / Math.sqrt(normal2Local2X * normal2Local2X + normal2Local2Y * normal2Local2Y);
		normal2Local2X *= invLength;
		normal2Local2Y *= invLength;
		var dot = normal2Local2X * normal1Local2X + normal2Local2Y * normal1Local2Y;
		if (dot < minDot) {
			minDot = dot;
			vertex21 = i1;
			vertex22 = i2;
		}
	}
	var tClip;
	tClip = c[0];
	tVec = tClip.v;
	tVec.SetV(vert2s[vertex21]);
	tVec.MulM(poly2.m_R);
	tVec.Add(poly2.m_position);
	tClip.id.features.referenceFace = edge1;
	tClip.id.features.incidentEdge = vertex21;
	tClip.id.features.incidentVertex = vertex21;
	tClip = c[1];
	tVec = tClip.v;
	tVec.SetV(vert2s[vertex22]);
	tVec.MulM(poly2.m_R);
	tVec.Add(poly2.m_position);
	tClip.id.features.referenceFace = edge1;
	tClip.id.features.incidentEdge = vertex21;
	tClip.id.features.incidentVertex = vertex22;
};
b2Collision.b2CollidePolyTempVec = new b2Vec2();
b2Collision.b2CollidePoly = function (manifold, polyA, polyB, conservative) {
	manifold.pointCount = 0;
	var edgeA = 0;
	var edgeAOut = [edgeA];
	var separationA = b2Collision.FindMaxSeparation(edgeAOut, polyA, polyB, conservative);
	edgeA = edgeAOut[0];
	if (separationA > 0.0 && conservative == false)
		return;
	var edgeB = 0;
	var edgeBOut = [edgeB];
	var separationB = b2Collision.FindMaxSeparation(edgeBOut, polyB, polyA, conservative);
	edgeB = edgeBOut[0];
	if (separationB > 0.0 && conservative == false)
		return;
	var poly1;
	var poly2;
	var edge1 = 0;
	var flip = 0;
	var k_relativeTol = 0.98;
	var k_absoluteTol = 0.001;
	if (separationB > k_relativeTol * separationA + k_absoluteTol) {
		poly1 = polyB;
		poly2 = polyA;
		edge1 = edgeB;
		flip = 1;
	} else {
		poly1 = polyA;
		poly2 = polyB;
		edge1 = edgeA;
		flip = 0;
	}
	var incidentEdge = [new ClipVertex(), new ClipVertex()];
	b2Collision.FindIncidentEdge(incidentEdge, poly1, edge1, poly2);
	var count1 = poly1.m_vertexCount;
	var vert1s = poly1.m_vertices;
	var v11 = vert1s[edge1];
	var v12 = edge1 + 1 < count1 ? vert1s[edge1 + 1] : vert1s[0];
	var dvX = v12.x - v11.x;
	var dvY = v12.y - v11.y;
	var sideNormalX = v12.x - v11.x;
	var sideNormalY = v12.y - v11.y;
	var tX = sideNormalX;
	var tMat = poly1.m_R;
	sideNormalX = tMat.col1.x * tX + tMat.col2.x * sideNormalY;
	sideNormalY = tMat.col1.y * tX + tMat.col2.y * sideNormalY;
	var invLength = 1.0 / Math.sqrt(sideNormalX * sideNormalX + sideNormalY * sideNormalY);
	sideNormalX *= invLength;
	sideNormalY *= invLength;
	var frontNormalX = sideNormalX;
	var frontNormalY = sideNormalY;
	tX = frontNormalX;
	frontNormalX = frontNormalY;
	frontNormalY = -tX;
	var v11X = v11.x;
	var v11Y = v11.y;
	tX = v11X;
	tMat = poly1.m_R;
	v11X = tMat.col1.x * tX + tMat.col2.x * v11Y;
	v11Y = tMat.col1.y * tX + tMat.col2.y * v11Y;
	v11X += poly1.m_position.x;
	v11Y += poly1.m_position.y;
	var v12X = v12.x;
	var v12Y = v12.y;
	tX = v12X;
	tMat = poly1.m_R;
	v12X = tMat.col1.x * tX + tMat.col2.x * v12Y;
	v12Y = tMat.col1.y * tX + tMat.col2.y * v12Y;
	v12X += poly1.m_position.x;
	v12Y += poly1.m_position.y;
	var frontOffset = frontNormalX * v11X + frontNormalY * v11Y;
	var sideOffset1 =  - (sideNormalX * v11X + sideNormalY * v11Y);
	var sideOffset2 = sideNormalX * v12X + sideNormalY * v12Y;
	var clipPoints1 = [new ClipVertex(), new ClipVertex()];
	var clipPoints2 = [new ClipVertex(), new ClipVertex()];
	var np = 0;
	b2Collision.b2CollidePolyTempVec.Set(-sideNormalX, -sideNormalY);
	np = b2Collision.ClipSegmentToLine(clipPoints1, incidentEdge, b2Collision.b2CollidePolyTempVec, sideOffset1);
	if (np < 2)
		return;
	b2Collision.b2CollidePolyTempVec.Set(sideNormalX, sideNormalY);
	np = b2Collision.ClipSegmentToLine(clipPoints2, clipPoints1, b2Collision.b2CollidePolyTempVec, sideOffset2);
	if (np < 2)
		return;
	if (flip) {
		manifold.normal.Set(-frontNormalX, -frontNormalY);
	} else {
		manifold.normal.Set(frontNormalX, frontNormalY);
	}
	var pointCount = 0;
	for (var i = 0; i < b2Settings.b2_maxManifoldPoints; ++i) {
		var tVec = clipPoints2[i].v;
		var separation = (frontNormalX * tVec.x + frontNormalY * tVec.y) - frontOffset;
		if (separation <= 0.0 || conservative == true) {
			var cp = manifold.points[pointCount];
			cp.separation = separation;
			cp.position.SetV(clipPoints2[i].v);
			cp.id.Set(clipPoints2[i].id);
			cp.id.features.flip = flip;
			++pointCount;
		}
	}
	manifold.pointCount = pointCount;
};
b2Collision.b2CollideCircle = function (manifold, circle1, circle2, conservative) {
	manifold.pointCount = 0;
	var dX = circle2.m_position.x - circle1.m_position.x;
	var dY = circle2.m_position.y - circle1.m_position.y;
	var distSqr = dX * dX + dY * dY;
	var radiusSum = circle1.m_radius + circle2.m_radius;
	if (distSqr > radiusSum * radiusSum && conservative == false) {
		return;
	}
	var separation;
	if (distSqr < Number.MIN_VALUE) {
		separation = -radiusSum;
		manifold.normal.Set(0.0, 1.0);
	} else {
		var dist = Math.sqrt(distSqr);
		separation = dist - radiusSum;
		var a = 1.0 / dist;
		manifold.normal.x = a * dX;
		manifold.normal.y = a * dY;
	}
	manifold.pointCount = 1;
	var tPoint = manifold.points[0];
	tPoint.id.set_key(0);
	tPoint.separation = separation;
	tPoint.position.x = circle2.m_position.x - (circle2.m_radius * manifold.normal.x);
	tPoint.position.y = circle2.m_position.y - (circle2.m_radius * manifold.normal.y);
};
b2Collision.b2CollidePolyAndCircle = function (manifold, poly, circle, conservative) {
	manifold.pointCount = 0;
	var tPoint;
	var dX;
	var dY;
	var xLocalX = circle.m_position.x - poly.m_position.x;
	var xLocalY = circle.m_position.y - poly.m_position.y;
	var tMat = poly.m_R;
	var tX = xLocalX * tMat.col1.x + xLocalY * tMat.col1.y;
	xLocalY = xLocalX * tMat.col2.x + xLocalY * tMat.col2.y;
	xLocalX = tX;
	var dist;
	var normalIndex = 0;
	var separation = -Number.MAX_VALUE;
	var radius = circle.m_radius;
	for (var i = 0; i < poly.m_vertexCount; ++i) {
		var s = poly.m_normals[i].x * (xLocalX - poly.m_vertices[i].x) + poly.m_normals[i].y * (xLocalY - poly.m_vertices[i].y);
		if (s > radius) {
			return;
		}
		if (s > separation) {
			separation = s;
			normalIndex = i;
		}
	}
	if (separation < Number.MIN_VALUE) {
		manifold.pointCount = 1;
		var tVec = poly.m_normals[normalIndex];
		manifold.normal.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		manifold.normal.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tPoint = manifold.points[0];
		tPoint.id.features.incidentEdge = normalIndex;
		tPoint.id.features.incidentVertex = b2Collision.b2_nullFeature;
		tPoint.id.features.referenceFace = b2Collision.b2_nullFeature;
		tPoint.id.features.flip = 0;
		tPoint.position.x = circle.m_position.x - radius * manifold.normal.x;
		tPoint.position.y = circle.m_position.y - radius * manifold.normal.y;
		tPoint.separation = separation - radius;
		return;
	}
	var vertIndex1 = normalIndex;
	var vertIndex2 = vertIndex1 + 1 < poly.m_vertexCount ? vertIndex1 + 1 : 0;
	var eX = poly.m_vertices[vertIndex2].x - poly.m_vertices[vertIndex1].x;
	var eY = poly.m_vertices[vertIndex2].y - poly.m_vertices[vertIndex1].y;
	var length = Math.sqrt(eX * eX + eY * eY);
	eX /= length;
	eY /= length;
	if (length < Number.MIN_VALUE) {
		dX = xLocalX - poly.m_vertices[vertIndex1].x;
		dY = xLocalY - poly.m_vertices[vertIndex1].y;
		dist = Math.sqrt(dX * dX + dY * dY);
		dX /= dist;
		dY /= dist;
		if (dist > radius) {
			return;
		}
		manifold.pointCount = 1;
		manifold.normal.Set(tMat.col1.x * dX + tMat.col2.x * dY, tMat.col1.y * dX + tMat.col2.y * dY);
		tPoint = manifold.points[0];
		tPoint.id.features.incidentEdge = b2Collision.b2_nullFeature;
		tPoint.id.features.incidentVertex = vertIndex1;
		tPoint.id.features.referenceFace = b2Collision.b2_nullFeature;
		tPoint.id.features.flip = 0;
		tPoint.position.x = circle.m_position.x - radius * manifold.normal.x;
		tPoint.position.y = circle.m_position.y - radius * manifold.normal.y;
		tPoint.separation = dist - radius;
		return;
	}
	var u = (xLocalX - poly.m_vertices[vertIndex1].x) * eX + (xLocalY - poly.m_vertices[vertIndex1].y) * eY;
	tPoint = manifold.points[0];
	tPoint.id.features.incidentEdge = b2Collision.b2_nullFeature;
	tPoint.id.features.incidentVertex = b2Collision.b2_nullFeature;
	tPoint.id.features.referenceFace = b2Collision.b2_nullFeature;
	tPoint.id.features.flip = 0;
	var pX,
	pY;
	if (u <= 0.0) {
		pX = poly.m_vertices[vertIndex1].x;
		pY = poly.m_vertices[vertIndex1].y;
		tPoint.id.features.incidentVertex = vertIndex1;
	} else if (u >= length) {
		pX = poly.m_vertices[vertIndex2].x;
		pY = poly.m_vertices[vertIndex2].y;
		tPoint.id.features.incidentVertex = vertIndex2;
	} else {
		pX = eX * u + poly.m_vertices[vertIndex1].x;
		pY = eY * u + poly.m_vertices[vertIndex1].y;
		tPoint.id.features.incidentEdge = vertIndex1;
	}
	dX = xLocalX - pX;
	dY = xLocalY - pY;
	dist = Math.sqrt(dX * dX + dY * dY);
	dX /= dist;
	dY /= dist;
	if (dist > radius) {
		return;
	}
	manifold.pointCount = 1;
	manifold.normal.Set(tMat.col1.x * dX + tMat.col2.x * dY, tMat.col1.y * dX + tMat.col2.y * dY);
	tPoint.position.x = circle.m_position.x - radius * manifold.normal.x;
	tPoint.position.y = circle.m_position.y - radius * manifold.normal.y;
	tPoint.separation = dist - radius;
};
b2Collision.b2TestOverlap = function (a, b) {
	var t1 = b.minVertex;
	var t2 = a.maxVertex;
	var d1X = t1.x - t2.x;
	var d1Y = t1.y - t2.y;
	t1 = a.minVertex;
	t2 = b.maxVertex;
	var d2X = t1.x - t2.x;
	var d2Y = t1.y - t2.y;
	if (d1X > 0.0 || d1Y > 0.0)
		return false;
	if (d2X > 0.0 || d2Y > 0.0)
		return false;
	return true;
};
var Features = Class.create();
Features.prototype = {
	set_referenceFace : function (value) {
		this._referenceFace = value;
		this._m_id._key = (this._m_id._key & 0xffffff00) | (this._referenceFace & 0x000000ff)
	},
	get_referenceFace : function () {
		return this._referenceFace;
	},
	_referenceFace : 0,
	set_incidentEdge : function (value) {
		this._incidentEdge = value;
		this._m_id._key = (this._m_id._key & 0xffff00ff) | ((this._incidentEdge << 8) & 0x0000ff00)
	},
	get_incidentEdge : function () {
		return this._incidentEdge;
	},
	_incidentEdge : 0,
	set_incidentVertex : function (value) {
		this._incidentVertex = value;
		this._m_id._key = (this._m_id._key & 0xff00ffff) | ((this._incidentVertex << 16) & 0x00ff0000)
	},
	get_incidentVertex : function () {
		return this._incidentVertex;
	},
	_incidentVertex : 0,
	set_flip : function (value) {
		this._flip = value;
		this._m_id._key = (this._m_id._key & 0x00ffffff) | ((this._flip << 24) & 0xff000000)
	},
	get_flip : function () {
		return this._flip;
	},
	_flip : 0,
	_m_id : null,
	initialize : function () {}

};
var b2ContactID = Class.create();
b2ContactID.prototype = {
	initialize : function () {
		this.features = new Features();
		this.features._m_id = this;
	},
	Set : function (id) {
		this.set_key(id._key);
	},
	Copy : function () {
		var id = new b2ContactID();
		id.set_key(this._key);
		return id;
	},
	get_key : function () {
		return this._key;
	},
	set_key : function (value) {
		this._key = value;
		this.features._referenceFace = this._key & 0x000000ff;
		this.features._incidentEdge = ((this._key & 0x0000ff00) >> 8) & 0x000000ff;
		this.features._incidentVertex = ((this._key & 0x00ff0000) >> 16) & 0x000000ff;
		this.features._flip = ((this._key & 0xff000000) >> 24) & 0x000000ff;
	},
	features : new Features(),
	_key : 0
};
var b2ContactPoint = Class.create();
b2ContactPoint.prototype = {
	position : new b2Vec2(),
	separation : null,
	normalImpulse : null,
	tangentImpulse : null,
	id : new b2ContactID(),
	initialize : function () {
		this.position = new b2Vec2();
		this.id = new b2ContactID();
	}
};
var b2Distance = Class.create();
b2Distance.prototype = {
	initialize : function () {}

};
b2Distance.ProcessTwo = function (p1Out, p2Out, p1s, p2s, points) {
	var rX = -points[1].x;
	var rY = -points[1].y;
	var dX = points[0].x - points[1].x;
	var dY = points[0].y - points[1].y;
	var length = Math.sqrt(dX * dX + dY * dY);
	dX /= length;
	dY /= length;
	var lambda = rX * dX + rY * dY;
	if (lambda <= 0.0 || length < Number.MIN_VALUE) {
		p1Out.SetV(p1s[1]);
		p2Out.SetV(p2s[1]);
		p1s[0].SetV(p1s[1]);
		p2s[0].SetV(p2s[1]);
		points[0].SetV(points[1]);
		return 1;
	}
	lambda /= length;
	p1Out.x = p1s[1].x + lambda * (p1s[0].x - p1s[1].x);
	p1Out.y = p1s[1].y + lambda * (p1s[0].y - p1s[1].y);
	p2Out.x = p2s[1].x + lambda * (p2s[0].x - p2s[1].x);
	p2Out.y = p2s[1].y + lambda * (p2s[0].y - p2s[1].y);
	return 2;
};
b2Distance.ProcessThree = function (p1Out, p2Out, p1s, p2s, points) {
	var aX = points[0].x;
	var aY = points[0].y;
	var bX = points[1].x;
	var bY = points[1].y;
	var cX = points[2].x;
	var cY = points[2].y;
	var abX = bX - aX;
	var abY = bY - aY;
	var acX = cX - aX;
	var acY = cY - aY;
	var bcX = cX - bX;
	var bcY = cY - bY;
	var sn =  - (aX * abX + aY * abY);
	var sd = (bX * abX + bY * abY);
	var tn =  - (aX * acX + aY * acY);
	var td = (cX * acX + cY * acY);
	var un =  - (bX * bcX + bY * bcY);
	var ud = (cX * bcX + cY * bcY);
	if (td <= 0.0 && ud <= 0.0) {
		p1Out.SetV(p1s[2]);
		p2Out.SetV(p2s[2]);
		p1s[0].SetV(p1s[2]);
		p2s[0].SetV(p2s[2]);
		points[0].SetV(points[2]);
		return 1;
	}
	var n = abX * acY - abY * acX;
	var vc = n * (aX * bY - aY * bX);
	var va = n * (bX * cY - bY * cX);
	if (va <= 0.0 && un >= 0.0 && ud >= 0.0) {
		var lambda = un / (un + ud);
		p1Out.x = p1s[1].x + lambda * (p1s[2].x - p1s[1].x);
		p1Out.y = p1s[1].y + lambda * (p1s[2].y - p1s[1].y);
		p2Out.x = p2s[1].x + lambda * (p2s[2].x - p2s[1].x);
		p2Out.y = p2s[1].y + lambda * (p2s[2].y - p2s[1].y);
		p1s[0].SetV(p1s[2]);
		p2s[0].SetV(p2s[2]);
		points[0].SetV(points[2]);
		return 2;
	}
	var vb = n * (cX * aY - cY * aX);
	if (vb <= 0.0 && tn >= 0.0 && td >= 0.0) {
		var lambda = tn / (tn + td);
		p1Out.x = p1s[0].x + lambda * (p1s[2].x - p1s[0].x);
		p1Out.y = p1s[0].y + lambda * (p1s[2].y - p1s[0].y);
		p2Out.x = p2s[0].x + lambda * (p2s[2].x - p2s[0].x);
		p2Out.y = p2s[0].y + lambda * (p2s[2].y - p2s[0].y);
		p1s[1].SetV(p1s[2]);
		p2s[1].SetV(p2s[2]);
		points[1].SetV(points[2]);
		return 2;
	}
	var denom = va + vb + vc;
	denom = 1.0 / denom;
	var u = va * denom;
	var v = vb * denom;
	var w = 1.0 - u - v;
	p1Out.x = u * p1s[0].x + v * p1s[1].x + w * p1s[2].x;
	p1Out.y = u * p1s[0].y + v * p1s[1].y + w * p1s[2].y;
	p2Out.x = u * p2s[0].x + v * p2s[1].x + w * p2s[2].x;
	p2Out.y = u * p2s[0].y + v * p2s[1].y + w * p2s[2].y;
	return 3;
};
b2Distance.InPoinsts = function (w, points, pointCount) {
	for (var i = 0; i < pointCount; ++i) {
		if (w.x == points[i].x && w.y == points[i].y) {
			return true;
		}
	}
	return false;
};
b2Distance.Distance = function (p1Out, p2Out, shape1, shape2) {
	var p1s = new Array(3);
	var p2s = new Array(3);
	var points = new Array(3);
	var pointCount = 0;
	p1Out.SetV(shape1.m_position);
	p2Out.SetV(shape2.m_position);
	var vSqr = 0.0;
	var maxIterations = 20;
	for (var iter = 0; iter < maxIterations; ++iter) {
		var vX = p2Out.x - p1Out.x;
		var vY = p2Out.y - p1Out.y;
		var w1 = shape1.Support(vX, vY);
		var w2 = shape2.Support(-vX, -vY);
		vSqr = (vX * vX + vY * vY);
		var wX = w2.x - w1.x;
		var wY = w2.y - w1.y;
		var vw = (vX * wX + vY * wY);
		if (vSqr - b2Dot(vX * wX + vY * wY) <= 0.01 * vSqr) {
			if (pointCount == 0) {
				p1Out.SetV(w1);
				p2Out.SetV(w2);
			}
			b2Distance.g_GJK_Iterations = iter;
			return Math.sqrt(vSqr);
		}
		switch (pointCount) {
		case 0:
			p1s[0].SetV(w1);
			p2s[0].SetV(w2);
			points[0] = w;
			p1Out.SetV(p1s[0]);
			p2Out.SetV(p2s[0]);
			++pointCount;
			break;
		case 1:
			p1s[1].SetV(w1);
			p2s[1].SetV(w2);
			points[1].x = wX;
			points[1].y = wY;
			pointCount = b2Distance.ProcessTwo(p1Out, p2Out, p1s, p2s, points);
			break;
		case 2:
			p1s[2].SetV(w1);
			p2s[2].SetV(w2);
			points[2].x = wX;
			points[2].y = wY;
			pointCount = b2Distance.ProcessThree(p1Out, p2Out, p1s, p2s, points);
			break;
		}
		if (pointCount == 3) {
			b2Distance.g_GJK_Iterations = iter;
			return 0.0;
		}
		var maxSqr = -Number.MAX_VALUE;
		for (var i = 0; i < pointCount; ++i) {
			maxSqr = b2Math.b2Max(maxSqr, (points[i].x * points[i].x + points[i].y * points[i].y));
		}
		if (pointCount == 3 || vSqr <= 100.0 * Number.MIN_VALUE * maxSqr) {
			b2Distance.g_GJK_Iterations = iter;
			return Math.sqrt(vSqr);
		}
	}
	b2Distance.g_GJK_Iterations = maxIterations;
	return Math.sqrt(vSqr);
};
b2Distance.g_GJK_Iterations = 0;
var b2Manifold = Class.create();
b2Manifold.prototype = {
	initialize : function () {
		this.points = new Array(b2Settings.b2_maxManifoldPoints);
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
			this.points[i] = new b2ContactPoint();
		}
		this.normal = new b2Vec2();
	},
	points : null,
	normal : null,
	pointCount : 0
};
var b2OBB = Class.create();
b2OBB.prototype = {
	R : new b2Mat22(),
	center : new b2Vec2(),
	extents : new b2Vec2(),
	initialize : function () {
		this.R = new b2Mat22();
		this.center = new b2Vec2();
		this.extents = new b2Vec2();
	}
};
var b2Proxy = Class.create();
b2Proxy.prototype = {
	GetNext : function () {
		return this.lowerBounds[0];
	},
	SetNext : function (next) {
		this.lowerBounds[0] = next;
	},
	IsValid : function () {
		return this.overlapCount != b2BroadPhase.b2_invalid;
	},
	lowerBounds : [(0), (0)],
	upperBounds : [(0), (0)],
	overlapCount : 0,
	timeStamp : 0,
	userData : null,
	initialize : function () {
		this.lowerBounds = [(0), (0)];
		this.upperBounds = [(0), (0)];
	}
}
var ClipVertex = Class.create();
ClipVertex.prototype = {
	v : new b2Vec2(),
	id : new b2ContactID(),
	initialize : function () {
		this.v = new b2Vec2();
		this.id = new b2ContactID();
	}
};
var b2Shape = Class.create();
b2Shape.prototype = {
	TestPoint : function (p) {
		return false
	},
	GetUserData : function () {
		return this.m_userData;
	},
	GetType : function () {
		return this.m_type;
	},
	GetBody : function () {
		return this.m_body;
	},
	GetPosition : function () {
		return this.m_position;
	},
	GetRotationMatrix : function () {
		return this.m_R;
	},
	ResetProxy : function (broadPhase) {},
	GetNext : function () {
		return this.m_next;
	},
	initialize : function (def, body) {
		this.m_R = new b2Mat22();
		this.m_position = new b2Vec2();
		this.m_userData = def.userData;
		this.m_friction = def.friction;
		this.m_restitution = def.restitution;
		this.m_body = body;
		this.m_proxyId = b2Pair.b2_nullProxy;
		this.m_maxRadius = 0.0;
		this.m_categoryBits = def.categoryBits;
		this.m_maskBits = def.maskBits;
		this.m_groupIndex = def.groupIndex;
	},
	DestroyProxy : function () {
		if (this.m_proxyId != b2Pair.b2_nullProxy) {
			this.m_body.m_world.m_broadPhase.DestroyProxy(this.m_proxyId);
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
	},
	Synchronize : function (position1, R1, position2, R2) {},
	QuickSync : function (position, R) {},
	Support : function (dX, dY, out) {},
	GetMaxRadius : function () {
		return this.m_maxRadius;
	},
	m_next : null,
	m_R : new b2Mat22(),
	m_position : new b2Vec2(),
	m_type : 0,
	m_userData : null,
	m_body : null,
	m_friction : null,
	m_restitution : null,
	m_maxRadius : null,
	m_proxyId : 0,
	m_categoryBits : 0,
	m_maskBits : 0,
	m_groupIndex : 0
};
b2Shape.Create = function (def, body, center) {
	switch (def.type) {
	case b2Shape.e_circleShape: {
			return new b2CircleShape(def, body, center);
		}
	case b2Shape.e_boxShape:
	case b2Shape.e_polyShape: {
			return new b2PolyShape(def, body, center);
		}
	}
	return null;
};
b2Shape.Destroy = function (shape) {
	if (shape.m_proxyId != b2Pair.b2_nullProxy)
		shape.m_body.m_world.m_broadPhase.DestroyProxy(shape.m_proxyId);
};
b2Shape.e_unknownShape = -1;
b2Shape.e_circleShape = 0;
b2Shape.e_boxShape = 1;
b2Shape.e_polyShape = 2;
b2Shape.e_meshShape = 3;
b2Shape.e_shapeTypeCount = 4;
b2Shape.PolyMass = function (massData, vs, count, rho) {
	var center = new b2Vec2();
	center.SetZero();
	var area = 0.0;
	var I = 0.0;
	var pRef = new b2Vec2(0.0, 0.0);
	var inv3 = 1.0 / 3.0;
	for (var i = 0; i < count; ++i) {
		var p1 = pRef;
		var p2 = vs[i];
		var p3 = i + 1 < count ? vs[i + 1] : vs[0];
		var e1 = b2Math.SubtractVV(p2, p1);
		var e2 = b2Math.SubtractVV(p3, p1);
		var D = b2Math.b2CrossVV(e1, e2);
		var triangleArea = 0.5 * D;
		area += triangleArea;
		var tVec = new b2Vec2();
		tVec.SetV(p1);
		tVec.Add(p2);
		tVec.Add(p3);
		tVec.Multiply(inv3 * triangleArea);
		center.Add(tVec);
		var px = p1.x;
		var py = p1.y;
		var ex1 = e1.x;
		var ey1 = e1.y;
		var ex2 = e2.x;
		var ey2 = e2.y;
		var intx2 = inv3 * (0.25 * (ex1 * ex1 + ex2 * ex1 + ex2 * ex2) + (px * ex1 + px * ex2)) + 0.5 * px * px;
		var inty2 = inv3 * (0.25 * (ey1 * ey1 + ey2 * ey1 + ey2 * ey2) + (py * ey1 + py * ey2)) + 0.5 * py * py;
		I += D * (intx2 + inty2);
	}
	massData.mass = rho * area;
	center.Multiply(1.0 / area);
	massData.center = center;
	I = rho * (I - area * b2Math.b2Dot(center, center));
	massData.I = I;
};
b2Shape.PolyCentroid = function (vs, count, out) {
	var cX = 0.0;
	var cY = 0.0;
	var area = 0.0;
	var pRefX = 0.0;
	var pRefY = 0.0;
	var inv3 = 1.0 / 3.0;
	for (var i = 0; i < count; ++i) {
		var p1X = pRefX;
		var p1Y = pRefY;
		var p2X = vs[i].x;
		var p2Y = vs[i].y;
		var p3X = i + 1 < count ? vs[i + 1].x : vs[0].x;
		var p3Y = i + 1 < count ? vs[i + 1].y : vs[0].y;
		var e1X = p2X - p1X;
		var e1Y = p2Y - p1Y;
		var e2X = p3X - p1X;
		var e2Y = p3Y - p1Y;
		var D = (e1X * e2Y - e1Y * e2X);
		var triangleArea = 0.5 * D;
		area += triangleArea;
		cX += triangleArea * inv3 * (p1X + p2X + p3X);
		cY += triangleArea * inv3 * (p1Y + p2Y + p3Y);
	}
	cX *= 1.0 / area;
	cY *= 1.0 / area;
	out.Set(cX, cY);
};
var b2ShapeDef = Class.create();
b2ShapeDef.prototype = {
	initialize : function () {
		this.type = b2Shape.e_unknownShape;
		this.userData = null;
		this.localPosition = new b2Vec2(0.0, 0.0);
		this.localRotation = 0.0;
		this.friction = 0.2;
		this.restitution = 0.0;
		this.density = 0.0;
		this.categoryBits = 0x0001;
		this.maskBits = 0xFFFF;
		this.groupIndex = 0;
	},
	ComputeMass : function (massData) {
		massData.center = new b2Vec2(0.0, 0.0)
			if (this.density == 0.0) {
				massData.mass = 0.0;
				massData.center.Set(0.0, 0.0);
				massData.I = 0.0;
			};
		switch (this.type) {
		case b2Shape.e_circleShape: {
				var circle = this;
				massData.mass = this.density * b2Settings.b2_pi * circle.radius * circle.radius;
				massData.center.Set(0.0, 0.0);
				massData.I = 0.5 * (massData.mass) * circle.radius * circle.radius;
			}
			break;
		case b2Shape.e_boxShape: {
				var box = this;
				massData.mass = 4.0 * this.density * box.extents.x * box.extents.y;
				massData.center.Set(0.0, 0.0);
				massData.I = massData.mass / 3.0 * b2Math.b2Dot(box.extents, box.extents);
			}
			break;
		case b2Shape.e_polyShape: {
				var poly = this;
				b2Shape.PolyMass(massData, poly.vertices, poly.vertexCount, this.density);
			}
			break;
		default:
			massData.mass = 0.0;
			massData.center.Set(0.0, 0.0);
			massData.I = 0.0;
			break;
		}
	},
	type : 0,
	userData : null,
	localPosition : null,
	localRotation : null,
	friction : null,
	restitution : null,
	density : null,
	categoryBits : 0,
	maskBits : 0,
	groupIndex : 0
};
var b2BoxDef = Class.create();
Object.extend(b2BoxDef.prototype, b2ShapeDef.prototype);
Object.extend(b2BoxDef.prototype, {
	initialize : function () {
		this.type = b2Shape.e_unknownShape;
		this.userData = null;
		this.localPosition = new b2Vec2(0.0, 0.0);
		this.localRotation = 0.0;
		this.friction = 0.2;
		this.restitution = 0.0;
		this.density = 0.0;
		this.categoryBits = 0x0001;
		this.maskBits = 0xFFFF;
		this.groupIndex = 0;
		this.type = b2Shape.e_boxShape;
		this.extents = new b2Vec2(1.0, 1.0);
	},
	extents : null
});
var b2CircleDef = Class.create();
Object.extend(b2CircleDef.prototype, b2ShapeDef.prototype);
Object.extend(b2CircleDef.prototype, {
	initialize : function () {
		this.type = b2Shape.e_unknownShape;
		this.userData = null;
		this.localPosition = new b2Vec2(0.0, 0.0);
		this.localRotation = 0.0;
		this.friction = 0.2;
		this.restitution = 0.0;
		this.density = 0.0;
		this.categoryBits = 0x0001;
		this.maskBits = 0xFFFF;
		this.groupIndex = 0;
		this.type = b2Shape.e_circleShape;
		this.radius = 1.0;
	},
	radius : null
});
var b2CircleShape = Class.create();
Object.extend(b2CircleShape.prototype, b2Shape.prototype);
Object.extend(b2CircleShape.prototype, {
	TestPoint : function (p) {
		var d = new b2Vec2();
		d.SetV(p);
		d.Subtract(this.m_position);
		return b2Math.b2Dot(d, d) <= this.m_radius * this.m_radius;
	},
	initialize : function (def, body, localCenter) {
		this.m_R = new b2Mat22();
		this.m_position = new b2Vec2();
		this.m_userData = def.userData;
		this.m_friction = def.friction;
		this.m_restitution = def.restitution;
		this.m_body = body;
		this.m_proxyId = b2Pair.b2_nullProxy;
		this.m_maxRadius = 0.0;
		this.m_categoryBits = def.categoryBits;
		this.m_maskBits = def.maskBits;
		this.m_groupIndex = def.groupIndex;
		this.m_localPosition = new b2Vec2();
		var circle = def;
		this.m_localPosition.Set(def.localPosition.x - localCenter.x, def.localPosition.y - localCenter.y);
		this.m_type = b2Shape.e_circleShape;
		this.m_radius = circle.radius;
		this.m_R.SetM(this.m_body.m_R);
		var rX = this.m_R.col1.x * this.m_localPosition.x + this.m_R.col2.x * this.m_localPosition.y;
		var rY = this.m_R.col1.y * this.m_localPosition.x + this.m_R.col2.y * this.m_localPosition.y;
		this.m_position.x = this.m_body.m_position.x + rX;
		this.m_position.y = this.m_body.m_position.y + rY;
		this.m_maxRadius = Math.sqrt(rX * rX + rY * rY) + this.m_radius;
		var aabb = new b2AABB();
		aabb.minVertex.Set(this.m_position.x - this.m_radius, this.m_position.y - this.m_radius);
		aabb.maxVertex.Set(this.m_position.x + this.m_radius, this.m_position.y + this.m_radius);
		var broadPhase = this.m_body.m_world.m_broadPhase;
		if (broadPhase.InRange(aabb)) {
			this.m_proxyId = broadPhase.CreateProxy(aabb, this);
		} else {
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			this.m_body.Freeze();
		}
	},
	Synchronize : function (position1, R1, position2, R2) {
		this.m_R.SetM(R2);
		this.m_position.x = (R2.col1.x * this.m_localPosition.x + R2.col2.x * this.m_localPosition.y) + position2.x;
		this.m_position.y = (R2.col1.y * this.m_localPosition.x + R2.col2.y * this.m_localPosition.y) + position2.y;
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			return;
		}
		var p1X = position1.x + (R1.col1.x * this.m_localPosition.x + R1.col2.x * this.m_localPosition.y);
		var p1Y = position1.y + (R1.col1.y * this.m_localPosition.x + R1.col2.y * this.m_localPosition.y);
		var lowerX = Math.min(p1X, this.m_position.x);
		var lowerY = Math.min(p1Y, this.m_position.y);
		var upperX = Math.max(p1X, this.m_position.x);
		var upperY = Math.max(p1Y, this.m_position.y);
		var aabb = new b2AABB();
		aabb.minVertex.Set(lowerX - this.m_radius, lowerY - this.m_radius);
		aabb.maxVertex.Set(upperX + this.m_radius, upperY + this.m_radius);
		var broadPhase = this.m_body.m_world.m_broadPhase;
		if (broadPhase.InRange(aabb)) {
			broadPhase.MoveProxy(this.m_proxyId, aabb);
		} else {
			this.m_body.Freeze();
		}
	},
	QuickSync : function (position, R) {
		this.m_R.SetM(R);
		this.m_position.x = (R.col1.x * this.m_localPosition.x + R.col2.x * this.m_localPosition.y) + position.x;
		this.m_position.y = (R.col1.y * this.m_localPosition.x + R.col2.y * this.m_localPosition.y) + position.y;
	},
	ResetProxy : function (broadPhase) {
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			return;
		}
		var proxy = broadPhase.GetProxy(this.m_proxyId);
		broadPhase.DestroyProxy(this.m_proxyId);
		proxy = null;
		var aabb = new b2AABB();
		aabb.minVertex.Set(this.m_position.x - this.m_radius, this.m_position.y - this.m_radius);
		aabb.maxVertex.Set(this.m_position.x + this.m_radius, this.m_position.y + this.m_radius);
		if (broadPhase.InRange(aabb)) {
			this.m_proxyId = broadPhase.CreateProxy(aabb, this);
		} else {
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			this.m_body.Freeze();
		}
	},
	Support : function (dX, dY, out) {
		var len = Math.sqrt(dX * dX + dY * dY);
		dX /= len;
		dY /= len;
		out.Set(this.m_position.x + this.m_radius * dX, this.m_position.y + this.m_radius * dY);
	},
	m_localPosition : new b2Vec2(),
	m_radius : null
});
var b2MassData = Class.create();
b2MassData.prototype = {
	mass : 0.0,
	center : new b2Vec2(0, 0),
	I : 0.0,
	initialize : function () {
		this.center = new b2Vec2(0, 0);
	}
}
var b2PolyDef = Class.create();
Object.extend(b2PolyDef.prototype, b2ShapeDef.prototype);
Object.extend(b2PolyDef.prototype, {
	initialize : function () {
		this.type = b2Shape.e_unknownShape;
		this.userData = null;
		this.localPosition = new b2Vec2(0.0, 0.0);
		this.localRotation = 0.0;
		this.friction = 0.2;
		this.restitution = 0.0;
		this.density = 0.0;
		this.categoryBits = 0x0001;
		this.maskBits = 0xFFFF;
		this.groupIndex = 0;
		this.vertices = new Array(b2Settings.b2_maxPolyVertices);
		this.type = b2Shape.e_polyShape;
		this.vertexCount = 0;
		for (var i = 0; i < b2Settings.b2_maxPolyVertices; i++) {
			this.vertices[i] = new b2Vec2();
		}
	},
	vertices : new Array(b2Settings.b2_maxPolyVertices),
	vertexCount : 0
});
var b2PolyShape = Class.create();
Object.extend(b2PolyShape.prototype, b2Shape.prototype);
Object.extend(b2PolyShape.prototype, {
	TestPoint : function (p) {
		var pLocal = new b2Vec2();
		pLocal.SetV(p);
		pLocal.Subtract(this.m_position);
		pLocal.MulTM(this.m_R);
		for (var i = 0; i < this.m_vertexCount; ++i) {
			var tVec = new b2Vec2();
			tVec.SetV(pLocal);
			tVec.Subtract(this.m_vertices[i]);
			var dot = b2Math.b2Dot(this.m_normals[i], tVec);
			if (dot > 0.0) {
				return false;
			}
		}
		return true;
	},
	initialize : function (def, body, newOrigin) {
		this.m_R = new b2Mat22();
		this.m_position = new b2Vec2();
		this.m_userData = def.userData;
		this.m_friction = def.friction;
		this.m_restitution = def.restitution;
		this.m_body = body;
		this.m_proxyId = b2Pair.b2_nullProxy;
		this.m_maxRadius = 0.0;
		this.m_categoryBits = def.categoryBits;
		this.m_maskBits = def.maskBits;
		this.m_groupIndex = def.groupIndex;
		this.syncAABB = new b2AABB();
		this.syncMat = new b2Mat22();
		this.m_localCentroid = new b2Vec2();
		this.m_localOBB = new b2OBB();
		var i = 0;
		var hX;
		var hY;
		var tVec;
		var aabb = new b2AABB();
		this.m_vertices = new Array(b2Settings.b2_maxPolyVertices);
		this.m_coreVertices = new Array(b2Settings.b2_maxPolyVertices);
		this.m_normals = new Array(b2Settings.b2_maxPolyVertices);
		this.m_type = b2Shape.e_polyShape;
		var localR = new b2Mat22(def.localRotation);
		if (def.type == b2Shape.e_boxShape) {
			this.m_localCentroid.x = def.localPosition.x - newOrigin.x;
			this.m_localCentroid.y = def.localPosition.y - newOrigin.y;
			var box = def;
			this.m_vertexCount = 4;
			hX = box.extents.x;
			hY = box.extents.y;
			var hcX = Math.max(0.0, hX - 2.0 * b2Settings.b2_linearSlop);
			var hcY = Math.max(0.0, hY - 2.0 * b2Settings.b2_linearSlop);
			tVec = this.m_vertices[0] = new b2Vec2();
			tVec.x = localR.col1.x * hX + localR.col2.x * hY;
			tVec.y = localR.col1.y * hX + localR.col2.y * hY;
			tVec = this.m_vertices[1] = new b2Vec2();
			tVec.x = localR.col1.x * -hX + localR.col2.x * hY;
			tVec.y = localR.col1.y * -hX + localR.col2.y * hY;
			tVec = this.m_vertices[2] = new b2Vec2();
			tVec.x = localR.col1.x * -hX + localR.col2.x * -hY;
			tVec.y = localR.col1.y * -hX + localR.col2.y * -hY;
			tVec = this.m_vertices[3] = new b2Vec2();
			tVec.x = localR.col1.x * hX + localR.col2.x * -hY;
			tVec.y = localR.col1.y * hX + localR.col2.y * -hY;
			tVec = this.m_coreVertices[0] = new b2Vec2();
			tVec.x = localR.col1.x * hcX + localR.col2.x * hcY;
			tVec.y = localR.col1.y * hcX + localR.col2.y * hcY;
			tVec = this.m_coreVertices[1] = new b2Vec2();
			tVec.x = localR.col1.x * -hcX + localR.col2.x * hcY;
			tVec.y = localR.col1.y * -hcX + localR.col2.y * hcY;
			tVec = this.m_coreVertices[2] = new b2Vec2();
			tVec.x = localR.col1.x * -hcX + localR.col2.x * -hcY;
			tVec.y = localR.col1.y * -hcX + localR.col2.y * -hcY;
			tVec = this.m_coreVertices[3] = new b2Vec2();
			tVec.x = localR.col1.x * hcX + localR.col2.x * -hcY;
			tVec.y = localR.col1.y * hcX + localR.col2.y * -hcY;
		} else {
			var poly = def;
			this.m_vertexCount = poly.vertexCount;
			b2Shape.PolyCentroid(poly.vertices, poly.vertexCount, b2PolyShape.tempVec);
			var centroidX = b2PolyShape.tempVec.x;
			var centroidY = b2PolyShape.tempVec.y;
			this.m_localCentroid.x = def.localPosition.x + (localR.col1.x * centroidX + localR.col2.x * centroidY) - newOrigin.x;
			this.m_localCentroid.y = def.localPosition.y + (localR.col1.y * centroidX + localR.col2.y * centroidY) - newOrigin.y;
			for (i = 0; i < this.m_vertexCount; ++i) {
				this.m_vertices[i] = new b2Vec2();
				this.m_coreVertices[i] = new b2Vec2();
				hX = poly.vertices[i].x - centroidX;
				hY = poly.vertices[i].y - centroidY;
				this.m_vertices[i].x = localR.col1.x * hX + localR.col2.x * hY;
				this.m_vertices[i].y = localR.col1.y * hX + localR.col2.y * hY;
				var uX = this.m_vertices[i].x;
				var uY = this.m_vertices[i].y;
				var length = Math.sqrt(uX * uX + uY * uY);
				if (length > Number.MIN_VALUE) {
					uX *= 1.0 / length;
					uY *= 1.0 / length;
				}
				this.m_coreVertices[i].x = this.m_vertices[i].x - 2.0 * b2Settings.b2_linearSlop * uX;
				this.m_coreVertices[i].y = this.m_vertices[i].y - 2.0 * b2Settings.b2_linearSlop * uY;
			}
		}
		var minVertexX = Number.MAX_VALUE;
		var minVertexY = Number.MAX_VALUE;
		var maxVertexX = -Number.MAX_VALUE;
		var maxVertexY = -Number.MAX_VALUE;
		this.m_maxRadius = 0.0;
		for (i = 0; i < this.m_vertexCount; ++i) {
			var v = this.m_vertices[i];
			minVertexX = Math.min(minVertexX, v.x);
			minVertexY = Math.min(minVertexY, v.y);
			maxVertexX = Math.max(maxVertexX, v.x);
			maxVertexY = Math.max(maxVertexY, v.y);
			this.m_maxRadius = Math.max(this.m_maxRadius, v.Length());
		}
		this.m_localOBB.R.SetIdentity();
		this.m_localOBB.center.Set((minVertexX + maxVertexX) * 0.5, (minVertexY + maxVertexY) * 0.5);
		this.m_localOBB.extents.Set((maxVertexX - minVertexX) * 0.5, (maxVertexY - minVertexY) * 0.5);
		var i1 = 0;
		var i2 = 0;
		for (i = 0; i < this.m_vertexCount; ++i) {
			this.m_normals[i] = new b2Vec2();
			i1 = i;
			i2 = i + 1 < this.m_vertexCount ? i + 1 : 0;
			this.m_normals[i].x = this.m_vertices[i2].y - this.m_vertices[i1].y;
			this.m_normals[i].y =  - (this.m_vertices[i2].x - this.m_vertices[i1].x);
			this.m_normals[i].Normalize();
		}
		for (i = 0; i < this.m_vertexCount; ++i) {
			i1 = i;
			i2 = i + 1 < this.m_vertexCount ? i + 1 : 0;
		}
		this.m_R.SetM(this.m_body.m_R);
		this.m_position.x = this.m_body.m_position.x + (this.m_R.col1.x * this.m_localCentroid.x + this.m_R.col2.x * this.m_localCentroid.y);
		this.m_position.y = this.m_body.m_position.y + (this.m_R.col1.y * this.m_localCentroid.x + this.m_R.col2.y * this.m_localCentroid.y);
		b2PolyShape.tAbsR.col1.x = this.m_R.col1.x * this.m_localOBB.R.col1.x + this.m_R.col2.x * this.m_localOBB.R.col1.y;
		b2PolyShape.tAbsR.col1.y = this.m_R.col1.y * this.m_localOBB.R.col1.x + this.m_R.col2.y * this.m_localOBB.R.col1.y;
		b2PolyShape.tAbsR.col2.x = this.m_R.col1.x * this.m_localOBB.R.col2.x + this.m_R.col2.x * this.m_localOBB.R.col2.y;
		b2PolyShape.tAbsR.col2.y = this.m_R.col1.y * this.m_localOBB.R.col2.x + this.m_R.col2.y * this.m_localOBB.R.col2.y;
		b2PolyShape.tAbsR.Abs()
		hX = b2PolyShape.tAbsR.col1.x * this.m_localOBB.extents.x + b2PolyShape.tAbsR.col2.x * this.m_localOBB.extents.y;
		hY = b2PolyShape.tAbsR.col1.y * this.m_localOBB.extents.x + b2PolyShape.tAbsR.col2.y * this.m_localOBB.extents.y;
		var positionX = this.m_position.x + (this.m_R.col1.x * this.m_localOBB.center.x + this.m_R.col2.x * this.m_localOBB.center.y);
		var positionY = this.m_position.y + (this.m_R.col1.y * this.m_localOBB.center.x + this.m_R.col2.y * this.m_localOBB.center.y);
		aabb.minVertex.x = positionX - hX;
		aabb.minVertex.y = positionY - hY;
		aabb.maxVertex.x = positionX + hX;
		aabb.maxVertex.y = positionY + hY;
		var broadPhase = this.m_body.m_world.m_broadPhase;
		if (broadPhase.InRange(aabb)) {
			this.m_proxyId = broadPhase.CreateProxy(aabb, this);
		} else {
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			this.m_body.Freeze();
		}
	},
	syncAABB : new b2AABB(),
	syncMat : new b2Mat22(),
	Synchronize : function (position1, R1, position2, R2) {
		this.m_R.SetM(R2);
		this.m_position.x = this.m_body.m_position.x + (R2.col1.x * this.m_localCentroid.x + R2.col2.x * this.m_localCentroid.y);
		this.m_position.y = this.m_body.m_position.y + (R2.col1.y * this.m_localCentroid.x + R2.col2.y * this.m_localCentroid.y);
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			return;
		}
		var hX;
		var hY;
		var v1 = R1.col1;
		var v2 = R1.col2;
		var v3 = this.m_localOBB.R.col1;
		var v4 = this.m_localOBB.R.col2;
		this.syncMat.col1.x = v1.x * v3.x + v2.x * v3.y;
		this.syncMat.col1.y = v1.y * v3.x + v2.y * v3.y;
		this.syncMat.col2.x = v1.x * v4.x + v2.x * v4.y;
		this.syncMat.col2.y = v1.y * v4.x + v2.y * v4.y;
		this.syncMat.Abs();
		hX = this.m_localCentroid.x + this.m_localOBB.center.x;
		hY = this.m_localCentroid.y + this.m_localOBB.center.y;
		var centerX = position1.x + (R1.col1.x * hX + R1.col2.x * hY);
		var centerY = position1.y + (R1.col1.y * hX + R1.col2.y * hY);
		hX = this.syncMat.col1.x * this.m_localOBB.extents.x + this.syncMat.col2.x * this.m_localOBB.extents.y;
		hY = this.syncMat.col1.y * this.m_localOBB.extents.x + this.syncMat.col2.y * this.m_localOBB.extents.y;
		this.syncAABB.minVertex.x = centerX - hX;
		this.syncAABB.minVertex.y = centerY - hY;
		this.syncAABB.maxVertex.x = centerX + hX;
		this.syncAABB.maxVertex.y = centerY + hY;
		v1 = R2.col1;
		v2 = R2.col2;
		v3 = this.m_localOBB.R.col1;
		v4 = this.m_localOBB.R.col2;
		this.syncMat.col1.x = v1.x * v3.x + v2.x * v3.y;
		this.syncMat.col1.y = v1.y * v3.x + v2.y * v3.y;
		this.syncMat.col2.x = v1.x * v4.x + v2.x * v4.y;
		this.syncMat.col2.y = v1.y * v4.x + v2.y * v4.y;
		this.syncMat.Abs();
		hX = this.m_localCentroid.x + this.m_localOBB.center.x;
		hY = this.m_localCentroid.y + this.m_localOBB.center.y;
		centerX = position2.x + (R2.col1.x * hX + R2.col2.x * hY);
		centerY = position2.y + (R2.col1.y * hX + R2.col2.y * hY);
		hX = this.syncMat.col1.x * this.m_localOBB.extents.x + this.syncMat.col2.x * this.m_localOBB.extents.y;
		hY = this.syncMat.col1.y * this.m_localOBB.extents.x + this.syncMat.col2.y * this.m_localOBB.extents.y;
		this.syncAABB.minVertex.x = Math.min(this.syncAABB.minVertex.x, centerX - hX);
		this.syncAABB.minVertex.y = Math.min(this.syncAABB.minVertex.y, centerY - hY);
		this.syncAABB.maxVertex.x = Math.max(this.syncAABB.maxVertex.x, centerX + hX);
		this.syncAABB.maxVertex.y = Math.max(this.syncAABB.maxVertex.y, centerY + hY);
		var broadPhase = this.m_body.m_world.m_broadPhase;
		if (broadPhase.InRange(this.syncAABB)) {
			broadPhase.MoveProxy(this.m_proxyId, this.syncAABB);
		} else {
			this.m_body.Freeze();
		}
	},
	QuickSync : function (position, R) {
		this.m_R.SetM(R);
		this.m_position.x = position.x + (R.col1.x * this.m_localCentroid.x + R.col2.x * this.m_localCentroid.y);
		this.m_position.y = position.y + (R.col1.y * this.m_localCentroid.x + R.col2.y * this.m_localCentroid.y);
	},
	ResetProxy : function (broadPhase) {
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			return;
		}
		var proxy = broadPhase.GetProxy(this.m_proxyId);
		broadPhase.DestroyProxy(this.m_proxyId);
		proxy = null;
		var R = b2Math.b2MulMM(this.m_R, this.m_localOBB.R);
		var absR = b2Math.b2AbsM(R);
		var h = b2Math.b2MulMV(absR, this.m_localOBB.extents);
		var position = b2Math.b2MulMV(this.m_R, this.m_localOBB.center);
		position.Add(this.m_position);
		var aabb = new b2AABB();
		aabb.minVertex.SetV(position);
		aabb.minVertex.Subtract(h);
		aabb.maxVertex.SetV(position);
		aabb.maxVertex.Add(h);
		if (broadPhase.InRange(aabb)) {
			this.m_proxyId = broadPhase.CreateProxy(aabb, this);
		} else {
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		if (this.m_proxyId == b2Pair.b2_nullProxy) {
			this.m_body.Freeze();
		}
	},
	Support : function (dX, dY, out) {
		var dLocalX = (dX * this.m_R.col1.x + dY * this.m_R.col1.y);
		var dLocalY = (dX * this.m_R.col2.x + dY * this.m_R.col2.y);
		var bestIndex = 0;
		var bestValue = (this.m_coreVertices[0].x * dLocalX + this.m_coreVertices[0].y * dLocalY);
		for (var i = 1; i < this.m_vertexCount; ++i) {
			var value = (this.m_coreVertices[i].x * dLocalX + this.m_coreVertices[i].y * dLocalY);
			if (value > bestValue) {
				bestIndex = i;
				bestValue = value;
			}
		}
		out.Set(this.m_position.x + (this.m_R.col1.x * this.m_coreVertices[bestIndex].x + this.m_R.col2.x * this.m_coreVertices[bestIndex].y), this.m_position.y + (this.m_R.col1.y * this.m_coreVertices[bestIndex].x + this.m_R.col2.y * this.m_coreVertices[bestIndex].y));
	},
	m_localCentroid : new b2Vec2(),
	m_localOBB : new b2OBB(),
	m_vertices : null,
	m_coreVertices : null,
	m_vertexCount : 0,
	m_normals : null
});
b2PolyShape.tempVec = new b2Vec2();
b2PolyShape.tAbsR = new b2Mat22();
var b2Body = Class.create();
b2Body.prototype = {
	SetOriginPosition : function (position, rotation) {
		if (this.IsFrozen()) {
			return;
		}
		this.m_rotation = rotation;
		this.m_R.Set(this.m_rotation);
		this.m_position = b2Math.AddVV(position, b2Math.b2MulMV(this.m_R, this.m_center));
		this.m_position0.SetV(this.m_position);
		this.m_rotation0 = this.m_rotation;
		for (var s = this.m_shapeList; s != null; s = s.m_next) {
			s.Synchronize(this.m_position, this.m_R, this.m_position, this.m_R);
		}
		this.m_world.m_broadPhase.Commit();
	},
	GetOriginPosition : function () {
		return b2Math.SubtractVV(this.m_position, b2Math.b2MulMV(this.m_R, this.m_center));
	},
	SetCenterPosition : function (position, rotation) {
		if (this.IsFrozen()) {
			return;
		}
		this.m_rotation = rotation;
		this.m_R.Set(this.m_rotation);
		this.m_position.SetV(position);
		this.m_position0.SetV(this.m_position);
		this.m_rotation0 = this.m_rotation;
		for (var s = this.m_shapeList; s != null; s = s.m_next) {
			s.Synchronize(this.m_position, this.m_R, this.m_position, this.m_R);
		}
		this.m_world.m_broadPhase.Commit();
	},
	GetCenterPosition : function () {
		return this.m_position;
	},
	GetPosition : function () {
		var x,
		y;
		x = this.m_position.x;
		y = this.m_position.y;
		if ((this.m_center.x != 0 || this.m_center.y != 0)) {
			x -= this.m_center.x * Math.cos(-this.m_rotation) + this.m_center.y * Math.sin(-this.m_rotation);
			y -= this.m_center.x * -Math.sin(-this.m_rotation) + this.m_center.y * Math.cos(-this.m_rotation);
		}
		return new b2Vec2(x, y);
	},
	GetRotation : function () {
		return this.m_rotation;
	},
	GetRotationMatrix : function () {
		return this.m_R;
	},
	SetLinearVelocity : function (v) {
		this.m_linearVelocity.SetV(v);
	},
	GetLinearVelocity : function () {
		return this.m_linearVelocity;
	},
	SetAngularVelocity : function (w) {
		this.m_angularVelocity = w;
	},
	GetAngularVelocity : function () {
		return this.m_angularVelocity;
	},
	ApplyForce : function (force, point) {
		if (this.IsSleeping() == false) {
			this.m_force.Add(force);
			this.m_torque += b2Math.b2CrossVV(b2Math.SubtractVV(point, this.m_position), force);
		}
	},
	ApplyTorque : function (torque) {
		if (this.IsSleeping() == false) {
			this.m_torque += torque;
		}
	},
	ApplyImpulse : function (impulse, point) {
		if (this.IsSleeping() == false) {
			this.m_linearVelocity.Add(b2Math.MulFV(this.m_invMass, impulse));
			this.m_angularVelocity += (this.m_invI * b2Math.b2CrossVV(b2Math.SubtractVV(point, this.m_position), impulse));
		}
	},
	GetMass : function () {
		return this.m_mass;
	},
	GetInertia : function () {
		return this.m_I;
	},
	GetWorldPoint : function (localPoint) {
		return b2Math.AddVV(this.m_position, b2Math.b2MulMV(this.m_R, localPoint));
	},
	GetWorldVector : function (localVector) {
		return b2Math.b2MulMV(this.m_R, localVector);
	},
	GetLocalPoint : function (worldPoint) {
		return b2Math.b2MulTMV(this.m_R, b2Math.SubtractVV(worldPoint, this.m_position));
	},
	GetLocalVector : function (worldVector) {
		return b2Math.b2MulTMV(this.m_R, worldVector);
	},
	IsStatic : function () {
		return (this.m_flags & b2Body.e_staticFlag) == b2Body.e_staticFlag;
	},
	IsFrozen : function () {
		return (this.m_flags & b2Body.e_frozenFlag) == b2Body.e_frozenFlag;
	},
	IsSleeping : function () {
		return (this.m_flags & b2Body.e_sleepFlag) == b2Body.e_sleepFlag;
	},
	AllowSleeping : function (flag) {
		if (flag) {
			this.m_flags |= b2Body.e_allowSleepFlag;
		} else {
			this.m_flags &= ~b2Body.e_allowSleepFlag;
			this.WakeUp();
		}
	},
	WakeUp : function () {
		this.m_flags &= ~b2Body.e_sleepFlag;
		this.m_sleepTime = 0.0;
	},
	GoToSleep : function () {
		this.m_flags |= b2Body.e_sleepFlag;
		this.m_linearVelocity.SetZero();
		this.m_angularVelocity = 0.0;
	},
	GetShapeList : function () {
		return this.m_shapeList;
	},
	GetContactList : function () {
		return this.m_contactList;
	},
	GetJointList : function () {
		return this.m_jointList;
	},
	GetNext : function () {
		return this.m_next;
	},
	GetUserData : function () {
		return this.m_userData;
	},
	initialize : function (bd, world) {
		this.sMat0 = new b2Mat22();
		this.m_position = new b2Vec2();
		this.m_R = new b2Mat22(0);
		this.m_position0 = new b2Vec2();
		var i = 0;
		var sd;
		var massData;
		this.m_flags = 0;
		this.m_position.SetV(bd.position);
		this.m_rotation = bd.rotation;
		this.m_R.Set(this.m_rotation);
		this.m_position0.SetV(this.m_position);
		this.m_rotation0 = this.m_rotation;
		this.m_world = world;
		this.m_linearDamping = b2Math.b2Clamp(1.0 - bd.linearDamping, 0.0, 1.0);
		this.m_angularDamping = b2Math.b2Clamp(1.0 - bd.angularDamping, 0.0, 1.0);
		this.m_force = new b2Vec2(0.0, 0.0);
		this.m_torque = 0.0;
		this.m_mass = 0.0;
		var massDatas = new Array(b2Settings.b2_maxShapesPerBody);
		for (i = 0; i < b2Settings.b2_maxShapesPerBody; i++) {
			massDatas[i] = new b2MassData();
		}
		this.m_shapeCount = 0;
		this.m_center = new b2Vec2(0.0, 0.0);
		for (i = 0; i < b2Settings.b2_maxShapesPerBody; ++i) {
			sd = bd.shapes[i];
			if (sd == null)
				break;
			massData = massDatas[i];
			sd.ComputeMass(massData);
			this.m_mass += massData.mass;
			this.m_center.x += massData.mass * (sd.localPosition.x + massData.center.x);
			this.m_center.y += massData.mass * (sd.localPosition.y + massData.center.y);
			++this.m_shapeCount;
		}
		if (this.m_mass > 0.0) {
			this.m_center.Multiply(1.0 / this.m_mass);
			this.m_position.Add(b2Math.b2MulMV(this.m_R, this.m_center));
		} else {
			this.m_flags |= b2Body.e_staticFlag;
		}
		this.m_I = 0.0;
		for (i = 0; i < this.m_shapeCount; ++i) {
			sd = bd.shapes[i];
			massData = massDatas[i];
			this.m_I += massData.I;
			var r = b2Math.SubtractVV(b2Math.AddVV(sd.localPosition, massData.center), this.m_center);
			this.m_I += massData.mass * b2Math.b2Dot(r, r);
		}
		if (this.m_mass > 0.0) {
			this.m_invMass = 1.0 / this.m_mass;
		} else {
			this.m_invMass = 0.0;
		}
		if (this.m_I > 0.0 && bd.preventRotation == false) {
			this.m_invI = 1.0 / this.m_I;
		} else {
			this.m_I = 0.0;
			this.m_invI = 0.0;
		}
		this.m_linearVelocity = b2Math.AddVV(bd.linearVelocity, b2Math.b2CrossFV(bd.angularVelocity, this.m_center));
		this.m_angularVelocity = bd.angularVelocity;
		this.m_jointList = null;
		this.m_contactList = null;
		this.m_prev = null;
		this.m_next = null;
		this.m_shapeList = null;
		for (i = 0; i < this.m_shapeCount; ++i) {
			sd = bd.shapes[i];
			var shape = b2Shape.Create(sd, this, this.m_center);
			shape.m_next = this.m_shapeList;
			this.m_shapeList = shape;
		}
		this.m_sleepTime = 0.0;
		if (bd.allowSleep) {
			this.m_flags |= b2Body.e_allowSleepFlag;
		}
		if (bd.isSleeping) {
			this.m_flags |= b2Body.e_sleepFlag;
		}
		if ((this.m_flags & b2Body.e_sleepFlag) || this.m_invMass == 0.0) {
			this.m_linearVelocity.Set(0.0, 0.0);
			this.m_angularVelocity = 0.0;
		}
		this.m_userData = bd.userData;
	},
	Destroy : function () {
		var s = this.m_shapeList;
		while (s) {
			var s0 = s;
			s = s.m_next;
			b2Shape.Destroy(s0);
		}
	},
	sMat0 : new b2Mat22(),
	SynchronizeShapes : function () {
		this.sMat0.Set(this.m_rotation0);
		for (var s = this.m_shapeList; s != null; s = s.m_next) {
			s.Synchronize(this.m_position0, this.sMat0, this.m_position, this.m_R);
		}
	},
	QuickSyncShapes : function () {
		for (var s = this.m_shapeList; s != null; s = s.m_next) {
			s.QuickSync(this.m_position, this.m_R);
		}
	},
	IsConnected : function (other) {
		for (var jn = this.m_jointList; jn != null; jn = jn.next) {
			if (jn.other == other)
				return jn.joint.m_collideConnected == false;
		}
		return false;
	},
	Freeze : function () {
		this.m_flags |= b2Body.e_frozenFlag;
		this.m_linearVelocity.SetZero();
		this.m_angularVelocity = 0.0;
		for (var s = this.m_shapeList; s != null; s = s.m_next) {
			s.DestroyProxy();
		}
	},
	m_flags : 0,
	m_position : new b2Vec2(),
	m_rotation : null,
	m_R : new b2Mat22(0),
	m_position0 : new b2Vec2(),
	m_rotation0 : null,
	m_linearVelocity : null,
	m_angularVelocity : null,
	m_force : null,
	m_torque : null,
	m_center : null,
	m_world : null,
	m_prev : null,
	m_next : null,
	m_shapeList : null,
	m_shapeCount : 0,
	m_jointList : null,
	m_contactList : null,
	m_mass : null,
	m_invMass : null,
	m_I : null,
	m_invI : null,
	m_linearDamping : null,
	m_angularDamping : null,
	m_sleepTime : null,
	m_userData : null
};
b2Body.e_staticFlag = 0x0001;
b2Body.e_frozenFlag = 0x0002;
b2Body.e_islandFlag = 0x0004;
b2Body.e_sleepFlag = 0x0008;
b2Body.e_allowSleepFlag = 0x0010;
b2Body.e_destroyFlag = 0x0020;
var b2BodyDef = Class.create();
b2BodyDef.prototype = {
	initialize : function () {
		this.shapes = new Array();
		this.userData = null;
		for (var i = 0; i < b2Settings.b2_maxShapesPerBody; i++) {
			this.shapes[i] = null;
		}
		this.position = new b2Vec2(0.0, 0.0);
		this.rotation = 0.0;
		this.linearVelocity = new b2Vec2(0.0, 0.0);
		this.angularVelocity = 0.0;
		this.linearDamping = 0.0;
		this.angularDamping = 0.0;
		this.allowSleep = true;
		this.isSleeping = false;
		this.preventRotation = false;
	},
	userData : null,
	shapes : new Array(),
	position : null,
	rotation : null,
	linearVelocity : null,
	angularVelocity : null,
	linearDamping : null,
	angularDamping : null,
	allowSleep : null,
	isSleeping : null,
	preventRotation : null,
	AddShape : function (shape) {
		for (var i = 0; i < b2Settings.b2_maxShapesPerBody; ++i) {
			if (this.shapes[i] == null) {
				this.shapes[i] = shape;
				break;
			}
		}
	}
};
var b2CollisionFilter = Class.create();
b2CollisionFilter.prototype = {
	ShouldCollide : function (shape1, shape2) {
		if (shape1.m_groupIndex == shape2.m_groupIndex && shape1.m_groupIndex != 0) {
			return shape1.m_groupIndex > 0;
		}
		var collide = (shape1.m_maskBits & shape2.m_categoryBits) != 0 && (shape1.m_categoryBits & shape2.m_maskBits) != 0;
		return collide;
	},
	initialize : function () {}

};
b2CollisionFilter.b2_defaultFilter = new b2CollisionFilter;
var b2Island = Class.create();
b2Island.prototype = {
	initialize : function (bodyCapacity, contactCapacity, jointCapacity, allocator) {
		var i = 0;
		this.m_bodyCapacity = bodyCapacity;
		this.m_contactCapacity = contactCapacity;
		this.m_jointCapacity = jointCapacity;
		this.m_bodyCount = 0;
		this.m_contactCount = 0;
		this.m_jointCount = 0;
		this.m_bodies = new Array(bodyCapacity);
		for (i = 0; i < bodyCapacity; i++)
			this.m_bodies[i] = null;
		this.m_contacts = new Array(contactCapacity);
		for (i = 0; i < contactCapacity; i++)
			this.m_contacts[i] = null;
		this.m_joints = new Array(jointCapacity);
		for (i = 0; i < jointCapacity; i++)
			this.m_joints[i] = null;
		this.m_allocator = allocator;
	},
	Clear : function () {
		this.m_bodyCount = 0;
		this.m_contactCount = 0;
		this.m_jointCount = 0;
	},
	Solve : function (step, gravity) {
		var i = 0;
		var b;
		for (i = 0; i < this.m_bodyCount; ++i) {
			b = this.m_bodies[i];
			if (b.m_invMass == 0.0)
				continue;
			b.m_linearVelocity.Add(b2Math.MulFV(step.dt, b2Math.AddVV(gravity, b2Math.MulFV(b.m_invMass, b.m_force))));
			b.m_angularVelocity += step.dt * b.m_invI * b.m_torque;
			b.m_linearVelocity.Multiply(b.m_linearDamping);
			b.m_angularVelocity *= b.m_angularDamping;
			b.m_position0.SetV(b.m_position);
			b.m_rotation0 = b.m_rotation;
		}
		var contactSolver = new b2ContactSolver(this.m_contacts, this.m_contactCount, this.m_allocator);
		contactSolver.PreSolve();
		for (i = 0; i < this.m_jointCount; ++i) {
			this.m_joints[i].PrepareVelocitySolver();
		}
		for (i = 0; i < step.iterations; ++i) {
			contactSolver.SolveVelocityConstraints();
			for (var j = 0; j < this.m_jointCount; ++j) {
				this.m_joints[j].SolveVelocityConstraints(step);
			}
		}
		for (i = 0; i < this.m_bodyCount; ++i) {
			b = this.m_bodies[i];
			if (b.m_invMass == 0.0)
				continue;
			b.m_position.x += step.dt * b.m_linearVelocity.x;
			b.m_position.y += step.dt * b.m_linearVelocity.y;
			b.m_rotation += step.dt * b.m_angularVelocity;
			b.m_R.Set(b.m_rotation);
		}
		for (i = 0; i < this.m_jointCount; ++i) {
			this.m_joints[i].PreparePositionSolver();
		}
		if (b2World.s_enablePositionCorrection) {
			for (b2Island.m_positionIterationCount = 0; b2Island.m_positionIterationCount < step.iterations; ++b2Island.m_positionIterationCount) {
				var contactsOkay = contactSolver.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);
				var jointsOkay = true;
				for (i = 0; i < this.m_jointCount; ++i) {
					var jointOkay = this.m_joints[i].SolvePositionConstraints();
					jointsOkay = jointsOkay && jointOkay;
				}
				if (contactsOkay && jointsOkay) {
					break;
				}
			}
		}
		contactSolver.PostSolve();
		for (i = 0; i < this.m_bodyCount; ++i) {
			b = this.m_bodies[i];
			if (b.m_invMass == 0.0)
				continue;
			b.m_R.Set(b.m_rotation);
			b.SynchronizeShapes();
			b.m_force.Set(0.0, 0.0);
			b.m_torque = 0.0;
		}
	},
	UpdateSleep : function (dt) {
		var i = 0;
		var b;
		var minSleepTime = Number.MAX_VALUE;
		var linTolSqr = b2Settings.b2_linearSleepTolerance * b2Settings.b2_linearSleepTolerance;
		var angTolSqr = b2Settings.b2_angularSleepTolerance * b2Settings.b2_angularSleepTolerance;
		for (i = 0; i < this.m_bodyCount; ++i) {
			b = this.m_bodies[i];
			if (b.m_invMass == 0.0) {
				continue;
			}
			if ((b.m_flags & b2Body.e_allowSleepFlag) == 0) {
				b.m_sleepTime = 0.0;
				minSleepTime = 0.0;
			}
			if ((b.m_flags & b2Body.e_allowSleepFlag) == 0 || b.m_angularVelocity * b.m_angularVelocity > angTolSqr || b2Math.b2Dot(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr) {
				b.m_sleepTime = 0.0;
				minSleepTime = 0.0;
			} else {
				b.m_sleepTime += dt;
				minSleepTime = b2Math.b2Min(minSleepTime, b.m_sleepTime);
			}
		}
		if (minSleepTime >= b2Settings.b2_timeToSleep) {
			for (i = 0; i < this.m_bodyCount; ++i) {
				b = this.m_bodies[i];
				b.m_flags |= b2Body.e_sleepFlag;
				b.m_linearVelocity.SetZero();
				b.m_angularVelocity = 0.0;
			}
		}
	},
	AddBody : function (body) {
		this.m_bodies[this.m_bodyCount++] = body;
	},
	AddContact : function (contact) {
		this.m_contacts[this.m_contactCount++] = contact;
	},
	AddJoint : function (joint) {
		this.m_joints[this.m_jointCount++] = joint;
	},
	m_allocator : null,
	m_bodies : null,
	m_contacts : null,
	m_joints : null,
	m_bodyCount : 0,
	m_jointCount : 0,
	m_contactCount : 0,
	m_bodyCapacity : 0,
	m_contactCapacity : 0,
	m_jointCapacity : 0,
	m_positionError : null
};
b2Island.m_positionIterationCount = 0;
var b2TimeStep = Class.create();
b2TimeStep.prototype = {
	dt : null,
	inv_dt : null,
	iterations : 0,
	initialize : function () {}

};
var b2ContactNode = Class.create();
b2ContactNode.prototype = {
	other : null,
	contact : null,
	prev : null,
	next : null,
	initialize : function () {}

};
var b2Contact = Class.create();
b2Contact.prototype = {
	GetManifolds : function () {
		return null
	},
	GetManifoldCount : function () {
		return this.m_manifoldCount;
	},
	GetNext : function () {
		return this.m_next;
	},
	GetShape1 : function () {
		return this.m_shape1;
	},
	GetShape2 : function () {
		return this.m_shape2;
	},
	initialize : function (s1, s2) {
		this.m_node1 = new b2ContactNode();
		this.m_node2 = new b2ContactNode();
		this.m_flags = 0;
		if (!s1 || !s2) {
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}
		this.m_shape1 = s1;
		this.m_shape2 = s2;
		this.m_manifoldCount = 0;
		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
		this.m_prev = null;
		this.m_next = null;
		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;
		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
	},
	Evaluate : function () {},
	m_flags : 0,
	m_prev : null,
	m_next : null,
	m_node1 : new b2ContactNode(),
	m_node2 : new b2ContactNode(),
	m_shape1 : null,
	m_shape2 : null,
	m_manifoldCount : 0,
	m_friction : null,
	m_restitution : null
};
b2Contact.e_islandFlag = 0x0001;
b2Contact.e_destroyFlag = 0x0002;
b2Contact.AddType = function (createFcn, destroyFcn, type1, type2) {
	b2Contact.s_registers[type1][type2].createFcn = createFcn;
	b2Contact.s_registers[type1][type2].destroyFcn = destroyFcn;
	b2Contact.s_registers[type1][type2].primary = true;
	if (type1 != type2) {
		b2Contact.s_registers[type2][type1].createFcn = createFcn;
		b2Contact.s_registers[type2][type1].destroyFcn = destroyFcn;
		b2Contact.s_registers[type2][type1].primary = false;
	}
};
b2Contact.InitializeRegisters = function () {
	b2Contact.s_registers = new Array(b2Shape.e_shapeTypeCount);
	for (var i = 0; i < b2Shape.e_shapeTypeCount; i++) {
		b2Contact.s_registers[i] = new Array(b2Shape.e_shapeTypeCount);
		for (var j = 0; j < b2Shape.e_shapeTypeCount; j++) {
			b2Contact.s_registers[i][j] = new b2ContactRegister();
		}
	}
	b2Contact.AddType(b2CircleContact.Create, b2CircleContact.Destroy, b2Shape.e_circleShape, b2Shape.e_circleShape);
	b2Contact.AddType(b2PolyAndCircleContact.Create, b2PolyAndCircleContact.Destroy, b2Shape.e_polyShape, b2Shape.e_circleShape);
	b2Contact.AddType(b2PolyContact.Create, b2PolyContact.Destroy, b2Shape.e_polyShape, b2Shape.e_polyShape);
};
b2Contact.Create = function (shape1, shape2, allocator) {
	if (b2Contact.s_initialized == false) {
		b2Contact.InitializeRegisters();
		b2Contact.s_initialized = true;
	}
	var type1 = shape1.m_type;
	var type2 = shape2.m_type;
	var createFcn = b2Contact.s_registers[type1][type2].createFcn;
	if (createFcn) {
		if (b2Contact.s_registers[type1][type2].primary) {
			return createFcn(shape1, shape2, allocator);
		} else {
			var c = createFcn(shape2, shape1, allocator);
			for (var i = 0; i < c.GetManifoldCount(); ++i) {
				var m = c.GetManifolds()[i];
				m.normal = m.normal.Negative();
			}
			return c;
		}
	} else {
		return null;
	}
};
b2Contact.Destroy = function (contact, allocator) {
	if (contact.GetManifoldCount() > 0) {
		contact.m_shape1.m_body.WakeUp();
		contact.m_shape2.m_body.WakeUp();
	}
	var type1 = contact.m_shape1.m_type;
	var type2 = contact.m_shape2.m_type;
	var destroyFcn = b2Contact.s_registers[type1][type2].destroyFcn;
	destroyFcn(contact, allocator);
};
b2Contact.s_registers = null;
b2Contact.s_initialized = false;
var b2ContactConstraint = Class.create();
b2ContactConstraint.prototype = {
	initialize : function () {
		this.normal = new b2Vec2();
		this.points = new Array(b2Settings.b2_maxManifoldPoints);
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
			this.points[i] = new b2ContactConstraintPoint();
		}
	},
	points : null,
	normal : new b2Vec2(),
	manifold : null,
	body1 : null,
	body2 : null,
	friction : null,
	restitution : null,
	pointCount : 0
};
var b2ContactConstraintPoint = Class.create();
b2ContactConstraintPoint.prototype = {
	localAnchor1 : new b2Vec2(),
	localAnchor2 : new b2Vec2(),
	normalImpulse : null,
	tangentImpulse : null,
	positionImpulse : null,
	normalMass : null,
	tangentMass : null,
	separation : null,
	velocityBias : null,
	initialize : function () {
		this.localAnchor1 = new b2Vec2();
		this.localAnchor2 = new b2Vec2();
	}
};
var b2ContactRegister = Class.create();
b2ContactRegister.prototype = {
	createFcn : null,
	destroyFcn : null,
	primary : null,
	initialize : function () {}

};
var b2ContactSolver = Class.create();
b2ContactSolver.prototype = {
	initialize : function (contacts, contactCount, allocator) {
		this.m_constraints = new Array();
		this.m_allocator = allocator;
		var i = 0;
		var tVec;
		var tMat;
		this.m_constraintCount = 0;
		for (i = 0; i < contactCount; ++i) {
			this.m_constraintCount += contacts[i].GetManifoldCount();
		}
		for (i = 0; i < this.m_constraintCount; i++) {
			this.m_constraints[i] = new b2ContactConstraint();
		}
		var count = 0;
		for (i = 0; i < contactCount; ++i) {
			var contact = contacts[i];
			var b1 = contact.m_shape1.m_body;
			var b2 = contact.m_shape2.m_body;
			var manifoldCount = contact.GetManifoldCount();
			var manifolds = contact.GetManifolds();
			var friction = contact.m_friction;
			var restitution = contact.m_restitution;
			var v1X = b1.m_linearVelocity.x;
			var v1Y = b1.m_linearVelocity.y;
			var v2X = b2.m_linearVelocity.x;
			var v2Y = b2.m_linearVelocity.y;
			var w1 = b1.m_angularVelocity;
			var w2 = b2.m_angularVelocity;
			for (var j = 0; j < manifoldCount; ++j) {
				var manifold = manifolds[j];
				var normalX = manifold.normal.x;
				var normalY = manifold.normal.y;
				var c = this.m_constraints[count];
				c.body1 = b1;
				c.body2 = b2;
				c.manifold = manifold;
				c.normal.x = normalX;
				c.normal.y = normalY;
				c.pointCount = manifold.pointCount;
				c.friction = friction;
				c.restitution = restitution;
				for (var k = 0; k < c.pointCount; ++k) {
					var cp = manifold.points[k];
					var ccp = c.points[k];
					ccp.normalImpulse = cp.normalImpulse;
					ccp.tangentImpulse = cp.tangentImpulse;
					ccp.separation = cp.separation;
					var r1X = cp.position.x - b1.m_position.x;
					var r1Y = cp.position.y - b1.m_position.y;
					var r2X = cp.position.x - b2.m_position.x;
					var r2Y = cp.position.y - b2.m_position.y;
					tVec = ccp.localAnchor1;
					tMat = b1.m_R;
					tVec.x = r1X * tMat.col1.x + r1Y * tMat.col1.y;
					tVec.y = r1X * tMat.col2.x + r1Y * tMat.col2.y;
					tVec = ccp.localAnchor2;
					tMat = b2.m_R;
					tVec.x = r2X * tMat.col1.x + r2Y * tMat.col1.y;
					tVec.y = r2X * tMat.col2.x + r2Y * tMat.col2.y;
					var r1Sqr = r1X * r1X + r1Y * r1Y;
					var r2Sqr = r2X * r2X + r2Y * r2Y;
					var rn1 = r1X * normalX + r1Y * normalY;
					var rn2 = r2X * normalX + r2Y * normalY;
					var kNormal = b1.m_invMass + b2.m_invMass;
					kNormal += b1.m_invI * (r1Sqr - rn1 * rn1) + b2.m_invI * (r2Sqr - rn2 * rn2);
					ccp.normalMass = 1.0 / kNormal;
					var tangentX = normalY
						var tangentY = -normalX;
					var rt1 = r1X * tangentX + r1Y * tangentY;
					var rt2 = r2X * tangentX + r2Y * tangentY;
					var kTangent = b1.m_invMass + b2.m_invMass;
					kTangent += b1.m_invI * (r1Sqr - rt1 * rt1) + b2.m_invI * (r2Sqr - rt2 * rt2);
					ccp.tangentMass = 1.0 / kTangent;
					ccp.velocityBias = 0.0;
					if (ccp.separation > 0.0) {
						ccp.velocityBias = -60.0 * ccp.separation;
					}
					var tX = v2X + (-w2 * r2Y) - v1X - (-w1 * r1Y);
					var tY = v2Y + (w2 * r2X) - v1Y - (w1 * r1X);
					var vRel = c.normal.x * tX + c.normal.y * tY;
					if (vRel < -b2Settings.b2_velocityThreshold) {
						ccp.velocityBias += -c.restitution * vRel;
					}
				}
				++count;
			}
		}
	},
	PreSolve : function () {
		var tVec;
		var tVec2;
		var tMat;
		for (var i = 0; i < this.m_constraintCount; ++i) {
			var c = this.m_constraints[i];
			var b1 = c.body1;
			var b2 = c.body2;
			var invMass1 = b1.m_invMass;
			var invI1 = b1.m_invI;
			var invMass2 = b2.m_invMass;
			var invI2 = b2.m_invI;
			var normalX = c.normal.x;
			var normalY = c.normal.y;
			var tangentX = normalY;
			var tangentY = -normalX;
			var j = 0;
			var tCount = 0;
			if (b2World.s_enableWarmStarting) {
				tCount = c.pointCount;
				for (j = 0; j < tCount; ++j) {
					var ccp = c.points[j];
					var PX = ccp.normalImpulse * normalX + ccp.tangentImpulse * tangentX;
					var PY = ccp.normalImpulse * normalY + ccp.tangentImpulse * tangentY;
					tMat = b1.m_R;
					tVec = ccp.localAnchor1;
					var r1X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
					var r1Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
					tMat = b2.m_R;
					tVec = ccp.localAnchor2;
					var r2X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
					var r2Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
					b1.m_angularVelocity -= invI1 * (r1X * PY - r1Y * PX);
					b1.m_linearVelocity.x -= invMass1 * PX;
					b1.m_linearVelocity.y -= invMass1 * PY;
					b2.m_angularVelocity += invI2 * (r2X * PY - r2Y * PX);
					b2.m_linearVelocity.x += invMass2 * PX;
					b2.m_linearVelocity.y += invMass2 * PY;
					ccp.positionImpulse = 0.0;
				}
			} else {
				tCount = c.pointCount;
				for (j = 0; j < tCount; ++j) {
					var ccp2 = c.points[j];
					ccp2.normalImpulse = 0.0;
					ccp2.tangentImpulse = 0.0;
					ccp2.positionImpulse = 0.0;
				}
			}
		}
	},
	SolveVelocityConstraints : function () {
		var j = 0;
		var ccp;
		var r1X;
		var r1Y;
		var r2X;
		var r2Y;
		var dvX;
		var dvY;
		var lambda;
		var newImpulse;
		var PX;
		var PY;
		var tMat;
		var tVec;
		for (var i = 0; i < this.m_constraintCount; ++i) {
			var c = this.m_constraints[i];
			var b1 = c.body1;
			var b2 = c.body2;
			var b1_angularVelocity = b1.m_angularVelocity;
			var b1_linearVelocity = b1.m_linearVelocity;
			var b2_angularVelocity = b2.m_angularVelocity;
			var b2_linearVelocity = b2.m_linearVelocity;
			var invMass1 = b1.m_invMass;
			var invI1 = b1.m_invI;
			var invMass2 = b2.m_invMass;
			var invI2 = b2.m_invI;
			var normalX = c.normal.x;
			var normalY = c.normal.y;
			var tangentX = normalY;
			var tangentY = -normalX;
			var tCount = c.pointCount;
			for (j = 0; j < tCount; ++j) {
				ccp = c.points[j];
				tMat = b1.m_R;
				tVec = ccp.localAnchor1;
				r1X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y
					r1Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y
					tMat = b2.m_R;
				tVec = ccp.localAnchor2;
				r2X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y
					r2Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y
					dvX = b2_linearVelocity.x + (-b2_angularVelocity * r2Y) - b1_linearVelocity.x - (-b1_angularVelocity * r1Y);
				dvY = b2_linearVelocity.y + (b2_angularVelocity * r2X) - b1_linearVelocity.y - (b1_angularVelocity * r1X);
				var vn = dvX * normalX + dvY * normalY;
				lambda = -ccp.normalMass * (vn - ccp.velocityBias);
				newImpulse = b2Math.b2Max(ccp.normalImpulse + lambda, 0.0);
				lambda = newImpulse - ccp.normalImpulse;
				PX = lambda * normalX;
				PY = lambda * normalY;
				b1_linearVelocity.x -= invMass1 * PX;
				b1_linearVelocity.y -= invMass1 * PY;
				b1_angularVelocity -= invI1 * (r1X * PY - r1Y * PX);
				b2_linearVelocity.x += invMass2 * PX;
				b2_linearVelocity.y += invMass2 * PY;
				b2_angularVelocity += invI2 * (r2X * PY - r2Y * PX);
				ccp.normalImpulse = newImpulse;
				dvX = b2_linearVelocity.x + (-b2_angularVelocity * r2Y) - b1_linearVelocity.x - (-b1_angularVelocity * r1Y);
				dvY = b2_linearVelocity.y + (b2_angularVelocity * r2X) - b1_linearVelocity.y - (b1_angularVelocity * r1X);
				var vt = dvX * tangentX + dvY * tangentY;
				lambda = ccp.tangentMass * (-vt);
				var maxFriction = c.friction * ccp.normalImpulse;
				newImpulse = b2Math.b2Clamp(ccp.tangentImpulse + lambda, -maxFriction, maxFriction);
				lambda = newImpulse - ccp.tangentImpulse;
				PX = lambda * tangentX;
				PY = lambda * tangentY;
				b1_linearVelocity.x -= invMass1 * PX;
				b1_linearVelocity.y -= invMass1 * PY;
				b1_angularVelocity -= invI1 * (r1X * PY - r1Y * PX);
				b2_linearVelocity.x += invMass2 * PX;
				b2_linearVelocity.y += invMass2 * PY;
				b2_angularVelocity += invI2 * (r2X * PY - r2Y * PX);
				ccp.tangentImpulse = newImpulse;
			}
			b1.m_angularVelocity = b1_angularVelocity;
			b2.m_angularVelocity = b2_angularVelocity;
		}
	},
	SolvePositionConstraints : function (beta) {
		var minSeparation = 0.0;
		var tMat;
		var tVec;
		for (var i = 0; i < this.m_constraintCount; ++i) {
			var c = this.m_constraints[i];
			var b1 = c.body1;
			var b2 = c.body2;
			var b1_position = b1.m_position;
			var b1_rotation = b1.m_rotation;
			var b2_position = b2.m_position;
			var b2_rotation = b2.m_rotation;
			var invMass1 = b1.m_invMass;
			var invI1 = b1.m_invI;
			var invMass2 = b2.m_invMass;
			var invI2 = b2.m_invI;
			var normalX = c.normal.x;
			var normalY = c.normal.y;
			var tangentX = normalY;
			var tangentY = -normalX;
			var tCount = c.pointCount;
			for (var j = 0; j < tCount; ++j) {
				var ccp = c.points[j];
				tMat = b1.m_R;
				tVec = ccp.localAnchor1;
				var r1X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y
					var r1Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y
					tMat = b2.m_R;
				tVec = ccp.localAnchor2;
				var r2X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y
					var r2Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y
					var p1X = b1_position.x + r1X;
				var p1Y = b1_position.y + r1Y;
				var p2X = b2_position.x + r2X;
				var p2Y = b2_position.y + r2Y;
				var dpX = p2X - p1X;
				var dpY = p2Y - p1Y;
				var separation = (dpX * normalX + dpY * normalY) + ccp.separation;
				minSeparation = b2Math.b2Min(minSeparation, separation);
				var C = beta * b2Math.b2Clamp(separation + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
				var dImpulse = -ccp.normalMass * C;
				var impulse0 = ccp.positionImpulse;
				ccp.positionImpulse = b2Math.b2Max(impulse0 + dImpulse, 0.0);
				dImpulse = ccp.positionImpulse - impulse0;
				var impulseX = dImpulse * normalX;
				var impulseY = dImpulse * normalY;
				b1_position.x -= invMass1 * impulseX;
				b1_position.y -= invMass1 * impulseY;
				b1_rotation -= invI1 * (r1X * impulseY - r1Y * impulseX);
				b1.m_R.Set(b1_rotation);
				b2_position.x += invMass2 * impulseX;
				b2_position.y += invMass2 * impulseY;
				b2_rotation += invI2 * (r2X * impulseY - r2Y * impulseX);
				b2.m_R.Set(b2_rotation);
			}
			b1.m_rotation = b1_rotation;
			b2.m_rotation = b2_rotation;
		}
		return minSeparation >= -b2Settings.b2_linearSlop;
	},
	PostSolve : function () {
		for (var i = 0; i < this.m_constraintCount; ++i) {
			var c = this.m_constraints[i];
			var m = c.manifold;
			for (var j = 0; j < c.pointCount; ++j) {
				var mPoint = m.points[j];
				var cPoint = c.points[j];
				mPoint.normalImpulse = cPoint.normalImpulse;
				mPoint.tangentImpulse = cPoint.tangentImpulse;
			}
		}
	},
	m_allocator : null,
	m_constraints : new Array(),
	m_constraintCount : 0
};
var b2CircleContact = Class.create();
Object.extend(b2CircleContact.prototype, b2Contact.prototype);
Object.extend(b2CircleContact.prototype, {
	initialize : function (s1, s2) {
		this.m_node1 = new b2ContactNode();
		this.m_node2 = new b2ContactNode();
		this.m_flags = 0;
		if (!s1 || !s2) {
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}
		this.m_shape1 = s1;
		this.m_shape2 = s2;
		this.m_manifoldCount = 0;
		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
		this.m_prev = null;
		this.m_next = null;
		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;
		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
		this.m_manifold = [new b2Manifold()];
		this.m_manifold[0].pointCount = 0;
		this.m_manifold[0].points[0].normalImpulse = 0.0;
		this.m_manifold[0].points[0].tangentImpulse = 0.0;
	},
	Evaluate : function () {
		b2Collision.b2CollideCircle(this.m_manifold[0], this.m_shape1, this.m_shape2, false);
		if (this.m_manifold[0].pointCount > 0) {
			this.m_manifoldCount = 1;
		} else {
			this.m_manifoldCount = 0;
		}
	},
	GetManifolds : function () {
		return this.m_manifold;
	},
	m_manifold : [new b2Manifold()]
});
b2CircleContact.Create = function (shape1, shape2, allocator) {
	return new b2CircleContact(shape1, shape2);
};
b2CircleContact.Destroy = function (contact, allocator) {};
var b2Conservative = Class.create();
b2Conservative.prototype = {
	initialize : function () {}

}
b2Conservative.R1 = new b2Mat22();
b2Conservative.R2 = new b2Mat22();
b2Conservative.x1 = new b2Vec2();
b2Conservative.x2 = new b2Vec2();
b2Conservative.Conservative = function (shape1, shape2) {
	var body1 = shape1.GetBody();
	var body2 = shape2.GetBody();
	var v1X = body1.m_position.x - body1.m_position0.x;
	var v1Y = body1.m_position.y - body1.m_position0.y;
	var omega1 = body1.m_rotation - body1.m_rotation0;
	var v2X = body2.m_position.x - body2.m_position0.x;
	var v2Y = body2.m_position.y - body2.m_position0.y;
	var omega2 = body2.m_rotation - body2.m_rotation0;
	var r1 = shape1.GetMaxRadius();
	var r2 = shape2.GetMaxRadius();
	var p1StartX = body1.m_position0.x;
	var p1StartY = body1.m_position0.y;
	var a1Start = body1.m_rotation0;
	var p2StartX = body2.m_position0.x;
	var p2StartY = body2.m_position0.y;
	var a2Start = body2.m_rotation0;
	var p1X = p1StartX;
	var p1Y = p1StartY;
	var a1 = a1Start;
	var p2X = p2StartX;
	var p2Y = p2StartY;
	var a2 = a2Start;
	b2Conservative.R1.Set(a1);
	b2Conservative.R2.Set(a2);
	shape1.QuickSync(p1, b2Conservative.R1);
	shape2.QuickSync(p2, b2Conservative.R2);
	var s1 = 0.0;
	var maxIterations = 10;
	var dX;
	var dY;
	var invRelativeVelocity = 0.0;
	var hit = true;
	for (var iter = 0; iter < maxIterations; ++iter) {
		var distance = b2Distance.Distance(b2Conservative.x1, b2Conservative.x2, shape1, shape2);
		if (distance < b2Settings.b2_linearSlop) {
			if (iter == 0) {
				hit = false;
			} else {
				hit = true;
			}
			break;
		}
		if (iter == 0) {
			dX = b2Conservative.x2.x - b2Conservative.x1.x;
			dY = b2Conservative.x2.y - b2Conservative.x1.y;
			var dLen = Math.sqrt(dX * dX + dY * dY);
			var relativeVelocity = (dX * (v1X - v2X) + dY * (v1Y - v2Y)) + Math.abs(omega1) * r1 + Math.abs(omega2) * r2;
			if (Math.abs(relativeVelocity) < Number.MIN_VALUE) {
				hit = false;
				break;
			}
			invRelativeVelocity = 1.0 / relativeVelocity;
		}
		var ds = distance * invRelativeVelocity;
		var s2 = s1 + ds;
		if (s2 < 0.0 || 1.0 < s2) {
			hit = false;
			break;
		}
		if (s2 < (1.0 + 100.0 * Number.MIN_VALUE) * s1) {
			hit = true;
			break;
		}
		s1 = s2;
		p1X = p1StartX + s1 * v1.x;
		p1Y = p1StartY + s1 * v1.y;
		a1 = a1Start + s1 * omega1;
		p2X = p2StartX + s1 * v2.x;
		p2Y = p2StartY + s1 * v2.y;
		a2 = a2Start + s1 * omega2;
		b2Conservative.R1.Set(a1);
		b2Conservative.R2.Set(a2);
		shape1.QuickSync(p1, b2Conservative.R1);
		shape2.QuickSync(p2, b2Conservative.R2);
	}
	if (hit) {
		dX = b2Conservative.x2.x - b2Conservative.x1.x;
		dY = b2Conservative.x2.y - b2Conservative.x1.y;
		var length = Math.sqrt(dX * dX + dY * dY);
		if (length > FLT_EPSILON) {
			d *= b2_linearSlop / length;
		}
		if (body1.IsStatic()) {
			body1.m_position.x = p1X;
			body1.m_position.y = p1Y;
		} else {
			body1.m_position.x = p1X - dX;
			body1.m_position.y = p1Y - dY;
		}
		body1.m_rotation = a1;
		body1.m_R.Set(a1);
		body1.QuickSyncShapes();
		if (body2.IsStatic()) {
			body2.m_position.x = p2X;
			body2.m_position.y = p2Y;
		} else {
			body2.m_position.x = p2X + dX;
			body2.m_position.y = p2Y + dY;
		}
		body2.m_position.x = p2X + dX;
		body2.m_position.y = p2Y + dY;
		body2.m_rotation = a2;
		body2.m_R.Set(a2);
		body2.QuickSyncShapes();
		return true;
	}
	shape1.QuickSync(body1.m_position, body1.m_R);
	shape2.QuickSync(body2.m_position, body2.m_R);
	return false;
};
var b2NullContact = Class.create();
Object.extend(b2NullContact.prototype, b2Contact.prototype);
Object.extend(b2NullContact.prototype, {
	initialize : function (s1, s2) {
		this.m_node1 = new b2ContactNode();
		this.m_node2 = new b2ContactNode();
		this.m_flags = 0;
		if (!s1 || !s2) {
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}
		this.m_shape1 = s1;
		this.m_shape2 = s2;
		this.m_manifoldCount = 0;
		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
		this.m_prev = null;
		this.m_next = null;
		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;
		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
	},
	Evaluate : function () {},
	GetManifolds : function () {
		return null;
	}
});
var b2PolyAndCircleContact = Class.create();
Object.extend(b2PolyAndCircleContact.prototype, b2Contact.prototype);
Object.extend(b2PolyAndCircleContact.prototype, {
	initialize : function (s1, s2) {
		this.m_node1 = new b2ContactNode();
		this.m_node2 = new b2ContactNode();
		this.m_flags = 0;
		if (!s1 || !s2) {
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}
		this.m_shape1 = s1;
		this.m_shape2 = s2;
		this.m_manifoldCount = 0;
		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
		this.m_prev = null;
		this.m_next = null;
		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;
		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
		this.m_manifold = [new b2Manifold()];
		b2Settings.b2Assert(this.m_shape1.m_type == b2Shape.e_polyShape);
		b2Settings.b2Assert(this.m_shape2.m_type == b2Shape.e_circleShape);
		this.m_manifold[0].pointCount = 0;
		this.m_manifold[0].points[0].normalImpulse = 0.0;
		this.m_manifold[0].points[0].tangentImpulse = 0.0;
	},
	Evaluate : function () {
		b2Collision.b2CollidePolyAndCircle(this.m_manifold[0], this.m_shape1, this.m_shape2, false);
		if (this.m_manifold[0].pointCount > 0) {
			this.m_manifoldCount = 1;
		} else {
			this.m_manifoldCount = 0;
		}
	},
	GetManifolds : function () {
		return this.m_manifold;
	},
	m_manifold : [new b2Manifold()]
})
b2PolyAndCircleContact.Create = function (shape1, shape2, allocator) {
	return new b2PolyAndCircleContact(shape1, shape2);
};
b2PolyAndCircleContact.Destroy = function (contact, allocator) {};
var b2PolyContact = Class.create();
Object.extend(b2PolyContact.prototype, b2Contact.prototype);
Object.extend(b2PolyContact.prototype, {
	initialize : function (s1, s2) {
		this.m_node1 = new b2ContactNode();
		this.m_node2 = new b2ContactNode();
		this.m_flags = 0;
		if (!s1 || !s2) {
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}
		this.m_shape1 = s1;
		this.m_shape2 = s2;
		this.m_manifoldCount = 0;
		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
		this.m_prev = null;
		this.m_next = null;
		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;
		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
		this.m0 = new b2Manifold();
		this.m_manifold = [new b2Manifold()];
		this.m_manifold[0].pointCount = 0;
	},
	m0 : new b2Manifold(),
	Evaluate : function () {
		var tMani = this.m_manifold[0];
		var tPoints = this.m0.points;
		for (var k = 0; k < tMani.pointCount; k++) {
			var tPoint = tPoints[k];
			var tPoint0 = tMani.points[k];
			tPoint.normalImpulse = tPoint0.normalImpulse;
			tPoint.tangentImpulse = tPoint0.tangentImpulse;
			tPoint.id = tPoint0.id.Copy();
		}
		this.m0.pointCount = tMani.pointCount;
		b2Collision.b2CollidePoly(tMani, this.m_shape1, this.m_shape2, false);
		if (tMani.pointCount > 0) {
			var match = [false, false];
			for (var i = 0; i < tMani.pointCount; ++i) {
				var cp = tMani.points[i];
				cp.normalImpulse = 0.0;
				cp.tangentImpulse = 0.0;
				var idKey = cp.id.key;
				for (var j = 0; j < this.m0.pointCount; ++j) {
					if (match[j] == true)
						continue;
					var cp0 = this.m0.points[j];
					var id0 = cp0.id;
					if (id0.key == idKey) {
						match[j] = true;
						cp.normalImpulse = cp0.normalImpulse;
						cp.tangentImpulse = cp0.tangentImpulse;
						break;
					}
				}
			}
			this.m_manifoldCount = 1;
		} else {
			this.m_manifoldCount = 0;
		}
	},
	GetManifolds : function () {
		return this.m_manifold;
	},
	m_manifold : [new b2Manifold()]
});
b2PolyContact.Create = function (shape1, shape2, allocator) {
	return new b2PolyContact(shape1, shape2);
};
b2PolyContact.Destroy = function (contact, allocator) {};
var b2ContactManager = Class.create();
Object.extend(b2ContactManager.prototype, b2PairCallback.prototype);
Object.extend(b2ContactManager.prototype, {
	initialize : function () {
		this.m_nullContact = new b2NullContact();
		this.m_world = null;
		this.m_destroyImmediate = false;
	},
	PairAdded : function (proxyUserData1, proxyUserData2) {
		var shape1 = proxyUserData1;
		var shape2 = proxyUserData2;
		var body1 = shape1.m_body;
		var body2 = shape2.m_body;
		if (body1.IsStatic() && body2.IsStatic()) {
			return this.m_nullContact;
		}
		if (shape1.m_body == shape2.m_body) {
			return this.m_nullContact;
		}
		if (body2.IsConnected(body1)) {
			return this.m_nullContact;
		}
		if (this.m_world.m_filter != null && this.m_world.m_filter.ShouldCollide(shape1, shape2) == false) {
			return this.m_nullContact;
		}
		if (body2.m_invMass == 0.0) {
			var tempShape = shape1;
			shape1 = shape2;
			shape2 = tempShape;
			var tempBody = body1;
			body1 = body2;
			body2 = tempBody;
		}
		var contact = b2Contact.Create(shape1, shape2, this.m_world.m_blockAllocator);
		if (contact == null) {
			return this.m_nullContact;
		} else {
			contact.m_prev = null;
			contact.m_next = this.m_world.m_contactList;
			if (this.m_world.m_contactList != null) {
				this.m_world.m_contactList.m_prev = contact;
			}
			this.m_world.m_contactList = contact;
			this.m_world.m_contactCount++;
		}
		return contact;
	},
	PairRemoved : function (proxyUserData1, proxyUserData2, pairUserData) {
		if (pairUserData == null) {
			return;
		}
		var c = pairUserData;
		if (c != this.m_nullContact) {
			if (this.m_destroyImmediate == true) {
				this.DestroyContact(c);
				c = null;
			} else {
				c.m_flags |= b2Contact.e_destroyFlag;
			}
		}
	},
	DestroyContact : function (c) {
		if (c.m_prev) {
			c.m_prev.m_next = c.m_next;
		}
		if (c.m_next) {
			c.m_next.m_prev = c.m_prev;
		}
		if (c == this.m_world.m_contactList) {
			this.m_world.m_contactList = c.m_next;
		}
		if (c.GetManifoldCount() > 0) {
			var body1 = c.m_shape1.m_body;
			var body2 = c.m_shape2.m_body;
			var node1 = c.m_node1;
			var node2 = c.m_node2;
			body1.WakeUp();
			body2.WakeUp();
			if (node1.prev) {
				node1.prev.next = node1.next;
			}
			if (node1.next) {
				node1.next.prev = node1.prev;
			}
			if (node1 == body1.m_contactList) {
				body1.m_contactList = node1.next;
			}
			node1.prev = null;
			node1.next = null;
			if (node2.prev) {
				node2.prev.next = node2.next;
			}
			if (node2.next) {
				node2.next.prev = node2.prev;
			}
			if (node2 == body2.m_contactList) {
				body2.m_contactList = node2.next;
			}
			node2.prev = null;
			node2.next = null;
		}
		b2Contact.Destroy(c, this.m_world.m_blockAllocator);
		--this.m_world.m_contactCount;
	},
	CleanContactList : function () {
		var c = this.m_world.m_contactList;
		while (c != null) {
			var c0 = c;
			c = c.m_next;
			if (c0.m_flags & b2Contact.e_destroyFlag) {
				this.DestroyContact(c0);
				c0 = null;
			}
		}
	},
	Collide : function () {
		var body1;
		var body2;
		var node1;
		var node2;
		for (var c = this.m_world.m_contactList; c != null; c = c.m_next) {
			if (c.m_shape1.m_body.IsSleeping() && c.m_shape2.m_body.IsSleeping()) {
				continue;
			}
			var oldCount = c.GetManifoldCount();
			c.Evaluate();
			var newCount = c.GetManifoldCount();
			if (oldCount == 0 && newCount > 0) {
				body1 = c.m_shape1.m_body;
				body2 = c.m_shape2.m_body;
				node1 = c.m_node1;
				node2 = c.m_node2;
				node1.contact = c;
				node1.other = body2;
				node1.prev = null;
				node1.next = body1.m_contactList;
				if (node1.next != null) {
					node1.next.prev = c.m_node1;
				}
				body1.m_contactList = c.m_node1;
				node2.contact = c;
				node2.other = body1;
				node2.prev = null;
				node2.next = body2.m_contactList;
				if (node2.next != null) {
					node2.next.prev = node2;
				}
				body2.m_contactList = node2;
			} else if (oldCount > 0 && newCount == 0) {
				body1 = c.m_shape1.m_body;
				body2 = c.m_shape2.m_body;
				node1 = c.m_node1;
				node2 = c.m_node2;
				if (node1.prev) {
					node1.prev.next = node1.next;
				}
				if (node1.next) {
					node1.next.prev = node1.prev;
				}
				if (node1 == body1.m_contactList) {
					body1.m_contactList = node1.next;
				}
				node1.prev = null;
				node1.next = null;
				if (node2.prev) {
					node2.prev.next = node2.next;
				}
				if (node2.next) {
					node2.next.prev = node2.prev;
				}
				if (node2 == body2.m_contactList) {
					body2.m_contactList = node2.next;
				}
				node2.prev = null;
				node2.next = null;
			}
		}
	},
	m_world : null,
	m_nullContact : new b2NullContact(),
	m_destroyImmediate : null
});
var b2World = Class.create();
b2World.prototype = {
	initialize : function (worldAABB, gravity, doSleep) {
		this.step = new b2TimeStep();
		this.m_contactManager = new b2ContactManager();
		this.m_listener = null;
		this.m_filter = b2CollisionFilter.b2_defaultFilter;
		this.m_bodyList = null;
		this.m_contactList = null;
		this.m_jointList = null;
		this.m_bodyCount = 0;
		this.m_contactCount = 0;
		this.m_jointCount = 0;
		this.m_bodyDestroyList = null;
		this.m_allowSleep = doSleep;
		this.m_gravity = gravity;
		this.m_contactManager.m_world = this;
		this.m_broadPhase = new b2BroadPhase(worldAABB, this.m_contactManager);
		var bd = new b2BodyDef();
		this.m_groundBody = this.CreateBody(bd);
	},
	SetListener : function (listener) {
		this.m_listener = listener;
	},
	SetFilter : function (filter) {
		this.m_filter = filter;
	},
	CreateBody : function (def) {
		var b = new b2Body(def, this);
		b.m_prev = null;
		b.m_next = this.m_bodyList;
		if (this.m_bodyList) {
			this.m_bodyList.m_prev = b;
		}
		this.m_bodyList = b;
		++this.m_bodyCount;
		return b;
	},
	DestroyBody : function (b) {
		if (b.m_flags & b2Body.e_destroyFlag) {
			return;
		}
		if (b.m_prev) {
			b.m_prev.m_next = b.m_next;
		}
		if (b.m_next) {
			b.m_next.m_prev = b.m_prev;
		}
		if (b == this.m_bodyList) {
			this.m_bodyList = b.m_next;
		}
		b.m_flags |= b2Body.e_destroyFlag;
		--this.m_bodyCount;
		b.m_prev = null;
		b.m_next = this.m_bodyDestroyList;
		this.m_bodyDestroyList = b;
	},
	CleanBodyList : function () {
		this.m_contactManager.m_destroyImmediate = true;
		var b = this.m_bodyDestroyList;
		while (b) {
			var b0 = b;
			b = b.m_next;
			var jn = b0.m_jointList;
			while (jn) {
				var jn0 = jn;
				jn = jn.next;
				if (this.m_listener) {
					this.m_listener.NotifyJointDestroyed(jn0.joint);
				}
				this.DestroyJoint(jn0.joint);
			}
			b0.Destroy();
		}
		this.m_bodyDestroyList = null;
		this.m_contactManager.m_destroyImmediate = false;
	},
	CreateJoint : function (def) {
		var j = b2Joint.Create(def, this.m_blockAllocator);
		j.m_prev = null;
		j.m_next = this.m_jointList;
		if (this.m_jointList) {
			this.m_jointList.m_prev = j;
		}
		this.m_jointList = j;
		++this.m_jointCount;
		j.m_node1.joint = j;
		j.m_node1.other = j.m_body2;
		j.m_node1.prev = null;
		j.m_node1.next = j.m_body1.m_jointList;
		if (j.m_body1.m_jointList)
			j.m_body1.m_jointList.prev = j.m_node1;
		j.m_body1.m_jointList = j.m_node1;
		j.m_node2.joint = j;
		j.m_node2.other = j.m_body1;
		j.m_node2.prev = null;
		j.m_node2.next = j.m_body2.m_jointList;
		if (j.m_body2.m_jointList)
			j.m_body2.m_jointList.prev = j.m_node2;
		j.m_body2.m_jointList = j.m_node2;
		if (def.collideConnected == false) {
			var b = def.body1.m_shapeCount < def.body2.m_shapeCount ? def.body1 : def.body2;
			for (var s = b.m_shapeList; s; s = s.m_next) {
				s.ResetProxy(this.m_broadPhase);
			}
		}
		return j;
	},
	DestroyJoint : function (j) {
		var collideConnected = j.m_collideConnected;
		if (j.m_prev) {
			j.m_prev.m_next = j.m_next;
		}
		if (j.m_next) {
			j.m_next.m_prev = j.m_prev;
		}
		if (j == this.m_jointList) {
			this.m_jointList = j.m_next;
		}
		var body1 = j.m_body1;
		var body2 = j.m_body2;
		body1.WakeUp();
		body2.WakeUp();
		if (j.m_node1.prev) {
			j.m_node1.prev.next = j.m_node1.next;
		}
		if (j.m_node1.next) {
			j.m_node1.next.prev = j.m_node1.prev;
		}
		if (j.m_node1 == body1.m_jointList) {
			body1.m_jointList = j.m_node1.next;
		}
		j.m_node1.prev = null;
		j.m_node1.next = null;
		if (j.m_node2.prev) {
			j.m_node2.prev.next = j.m_node2.next;
		}
		if (j.m_node2.next) {
			j.m_node2.next.prev = j.m_node2.prev;
		}
		if (j.m_node2 == body2.m_jointList) {
			body2.m_jointList = j.m_node2.next;
		}
		j.m_node2.prev = null;
		j.m_node2.next = null;
		b2Joint.Destroy(j, this.m_blockAllocator);
		--this.m_jointCount;
		if (collideConnected == false) {
			var b = body1.m_shapeCount < body2.m_shapeCount ? body1 : body2;
			for (var s = b.m_shapeList; s; s = s.m_next) {
				s.ResetProxy(this.m_broadPhase);
			}
		}
	},
	GetGroundBody : function () {
		return this.m_groundBody;
	},
	step : new b2TimeStep(),
	Step : function (dt, iterations) {
		var b;
		var other;
		this.step.dt = dt;
		this.step.iterations = iterations;
		if (dt > 0.0) {
			this.step.inv_dt = 1.0 / dt;
		} else {
			this.step.inv_dt = 0.0;
		}
		this.m_positionIterationCount = 0;
		this.m_contactManager.CleanContactList();
		this.CleanBodyList();
		this.m_contactManager.Collide();
		var island = new b2Island(this.m_bodyCount, this.m_contactCount, this.m_jointCount, this.m_stackAllocator);
		for (b = this.m_bodyList; b != null; b = b.m_next) {
			b.m_flags &= ~b2Body.e_islandFlag;
		}
		for (var c = this.m_contactList; c != null; c = c.m_next) {
			c.m_flags &= ~b2Contact.e_islandFlag;
		}
		for (var j = this.m_jointList; j != null; j = j.m_next) {
			j.m_islandFlag = false;
		}
		var stackSize = this.m_bodyCount;
		var stack = new Array(this.m_bodyCount);
		for (var k = 0; k < this.m_bodyCount; k++)
			stack[k] = null;
		for (var seed = this.m_bodyList; seed != null; seed = seed.m_next) {
			if (seed.m_flags & (b2Body.e_staticFlag | b2Body.e_islandFlag | b2Body.e_sleepFlag | b2Body.e_frozenFlag)) {
				continue;
			}
			island.Clear();
			var stackCount = 0;
			stack[stackCount++] = seed;
			seed.m_flags |= b2Body.e_islandFlag; ;
			while (stackCount > 0) {
				b = stack[--stackCount];
				island.AddBody(b);
				b.m_flags &= ~b2Body.e_sleepFlag;
				if (b.m_flags & b2Body.e_staticFlag) {
					continue;
				}
				for (var cn = b.m_contactList; cn != null; cn = cn.next) {
					if (cn.contact.m_flags & b2Contact.e_islandFlag) {
						continue;
					}
					island.AddContact(cn.contact);
					cn.contact.m_flags |= b2Contact.e_islandFlag;
					other = cn.other;
					if (other.m_flags & b2Body.e_islandFlag) {
						continue;
					}
					stack[stackCount++] = other;
					other.m_flags |= b2Body.e_islandFlag;
				}
				for (var jn = b.m_jointList; jn != null; jn = jn.next) {
					if (jn.joint.m_islandFlag == true) {
						continue;
					}
					island.AddJoint(jn.joint);
					jn.joint.m_islandFlag = true;
					other = jn.other;
					if (other.m_flags & b2Body.e_islandFlag) {
						continue;
					}
					stack[stackCount++] = other;
					other.m_flags |= b2Body.e_islandFlag;
				}
			}
			island.Solve(this.step, this.m_gravity);
			this.m_positionIterationCount = b2Math.b2Max(this.m_positionIterationCount, b2Island.m_positionIterationCount);
			if (this.m_allowSleep) {
				island.UpdateSleep(dt);
			}
			for (var i = 0; i < island.m_bodyCount; ++i) {
				b = island.m_bodies[i];
				if (b.m_flags & b2Body.e_staticFlag) {
					b.m_flags &= ~b2Body.e_islandFlag;
				}
				if (b.IsFrozen() && this.m_listener) {
					var response = this.m_listener.NotifyBoundaryViolated(b);
					if (response == b2WorldListener.b2_destroyBody) {
						this.DestroyBody(b);
						b = null;
						island.m_bodies[i] = null;
					}
				}
			}
		}
		this.m_broadPhase.Commit();
	},
	Query : function (aabb, shapes, maxCount) {
		var results = new Array();
		var count = this.m_broadPhase.QueryAABB(aabb, results, maxCount);
		for (var i = 0; i < count; ++i) {
			shapes[i] = results[i];
		}
		return count;
	},
	GetBodyList : function () {
		return this.m_bodyList;
	},
	GetJointList : function () {
		return this.m_jointList;
	},
	GetContactList : function () {
		return this.m_contactList;
	},
	m_blockAllocator : null,
	m_stackAllocator : null,
	m_broadPhase : null,
	m_contactManager : new b2ContactManager(),
	m_bodyList : null,
	m_contactList : null,
	m_jointList : null,
	m_bodyCount : 0,
	m_contactCount : 0,
	m_jointCount : 0,
	m_bodyDestroyList : null,
	m_gravity : null,
	m_allowSleep : null,
	m_groundBody : null,
	m_listener : null,
	m_filter : null,
	m_positionIterationCount : 0
};
b2World.s_enablePositionCorrection = 1;
b2World.s_enableWarmStarting = 1;
var b2WorldListener = Class.create();
b2WorldListener.prototype = {
	NotifyJointDestroyed : function (joint) {},
	NotifyBoundaryViolated : function (body) {
		return b2WorldListener.b2_freezeBody;
	},
	initialize : function () {}

};
b2WorldListener.b2_freezeBody = 0;
b2WorldListener.b2_destroyBody = 1;
var b2JointNode = Class.create();
b2JointNode.prototype = {
	other : null,
	joint : null,
	prev : null,
	next : null,
	initialize : function () {}

}
var b2Joint = Class.create();
b2Joint.prototype = {
	GetType : function () {
		return this.m_type;
	},
	GetAnchor1 : function () {
		return null
	},
	GetAnchor2 : function () {
		return null
	},
	GetReactionForce : function (invTimeStep) {
		return null
	},
	GetReactionTorque : function (invTimeStep) {
		return 0.0
	},
	GetBody1 : function () {
		return this.m_body1;
	},
	GetBody2 : function () {
		return this.m_body2;
	},
	GetNext : function () {
		return this.m_next;
	},
	GetUserData : function () {
		return this.m_userData;
	},
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
	},
	PrepareVelocitySolver : function () {},
	SolveVelocityConstraints : function (step) {},
	PreparePositionSolver : function () {},
	SolvePositionConstraints : function () {
		return false
	},
	m_type : 0,
	m_prev : null,
	m_next : null,
	m_node1 : new b2JointNode(),
	m_node2 : new b2JointNode(),
	m_body1 : null,
	m_body2 : null,
	m_islandFlag : null,
	m_collideConnected : null,
	m_userData : null
};
b2Joint.Create = function (def, allocator) {
	var joint = null;
	switch (def.type) {
	case b2Joint.e_distanceJoint: {
			joint = new b2DistanceJoint(def);
		}
		break;
	case b2Joint.e_mouseJoint: {
			joint = new b2MouseJoint(def);
		}
		break;
	case b2Joint.e_prismaticJoint: {
			joint = new b2PrismaticJoint(def);
		}
		break;
	case b2Joint.e_revoluteJoint: {
			joint = new b2RevoluteJoint(def);
		}
		break;
	case b2Joint.e_pulleyJoint: {
			joint = new b2PulleyJoint(def);
		}
		break;
	case b2Joint.e_gearJoint: {
			joint = new b2GearJoint(def);
		}
		break;
	default:
		break;
	}
	return joint;
};
b2Joint.Destroy = function (joint, allocator) {};
b2Joint.e_unknownJoint = 0;
b2Joint.e_revoluteJoint = 1;
b2Joint.e_prismaticJoint = 2;
b2Joint.e_distanceJoint = 3;
b2Joint.e_pulleyJoint = 4;
b2Joint.e_mouseJoint = 5;
b2Joint.e_gearJoint = 6;
b2Joint.e_inactiveLimit = 0;
b2Joint.e_atLowerLimit = 1;
b2Joint.e_atUpperLimit = 2;
b2Joint.e_equalLimits = 3;
var b2JointDef = Class.create();
b2JointDef.prototype = {
	initialize : function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
	},
	type : 0,
	userData : null,
	body1 : null,
	body2 : null,
	collideConnected : null
}
var b2DistanceJoint = Class.create();
Object.extend(b2DistanceJoint.prototype, b2Joint.prototype);
Object.extend(b2DistanceJoint.prototype, {
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_u = new b2Vec2();
		var tMat;
		var tX;
		var tY;
		tMat = this.m_body1.m_R;
		tX = def.anchorPoint1.x - this.m_body1.m_position.x;
		tY = def.anchorPoint1.y - this.m_body1.m_position.y;
		this.m_localAnchor1.x = tX * tMat.col1.x + tY * tMat.col1.y;
		this.m_localAnchor1.y = tX * tMat.col2.x + tY * tMat.col2.y;
		tMat = this.m_body2.m_R;
		tX = def.anchorPoint2.x - this.m_body2.m_position.x;
		tY = def.anchorPoint2.y - this.m_body2.m_position.y;
		this.m_localAnchor2.x = tX * tMat.col1.x + tY * tMat.col1.y;
		this.m_localAnchor2.y = tX * tMat.col2.x + tY * tMat.col2.y;
		tX = def.anchorPoint2.x - def.anchorPoint1.x;
		tY = def.anchorPoint2.y - def.anchorPoint1.y;
		this.m_length = Math.sqrt(tX * tX + tY * tY);
		this.m_impulse = 0.0;
	},
	PrepareVelocitySolver : function () {
		var tMat;
		tMat = this.m_body1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = this.m_body2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		this.m_u.x = this.m_body2.m_position.x + r2X - this.m_body1.m_position.x - r1X;
		this.m_u.y = this.m_body2.m_position.y + r2Y - this.m_body1.m_position.y - r1Y;
		var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
		if (length > b2Settings.b2_linearSlop) {
			this.m_u.Multiply(1.0 / length);
		} else {
			this.m_u.SetZero();
		}
		var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
		var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
		this.m_mass = this.m_body1.m_invMass + this.m_body1.m_invI * cr1u * cr1u + this.m_body2.m_invMass + this.m_body2.m_invI * cr2u * cr2u;
		this.m_mass = 1.0 / this.m_mass;
		if (b2World.s_enableWarmStarting) {
			var PX = this.m_impulse * this.m_u.x;
			var PY = this.m_impulse * this.m_u.y;
			this.m_body1.m_linearVelocity.x -= this.m_body1.m_invMass * PX;
			this.m_body1.m_linearVelocity.y -= this.m_body1.m_invMass * PY;
			this.m_body1.m_angularVelocity -= this.m_body1.m_invI * (r1X * PY - r1Y * PX);
			this.m_body2.m_linearVelocity.x += this.m_body2.m_invMass * PX;
			this.m_body2.m_linearVelocity.y += this.m_body2.m_invMass * PY;
			this.m_body2.m_angularVelocity += this.m_body2.m_invI * (r2X * PY - r2Y * PX);
		} else {
			this.m_impulse = 0.0;
		}
	},
	SolveVelocityConstraints : function (step) {
		var tMat;
		tMat = this.m_body1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = this.m_body2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var v1X = this.m_body1.m_linearVelocity.x + (-this.m_body1.m_angularVelocity * r1Y);
		var v1Y = this.m_body1.m_linearVelocity.y + (this.m_body1.m_angularVelocity * r1X);
		var v2X = this.m_body2.m_linearVelocity.x + (-this.m_body2.m_angularVelocity * r2Y);
		var v2Y = this.m_body2.m_linearVelocity.y + (this.m_body2.m_angularVelocity * r2X);
		var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
		var impulse = -this.m_mass * Cdot;
		this.m_impulse += impulse;
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		this.m_body1.m_linearVelocity.x -= this.m_body1.m_invMass * PX;
		this.m_body1.m_linearVelocity.y -= this.m_body1.m_invMass * PY;
		this.m_body1.m_angularVelocity -= this.m_body1.m_invI * (r1X * PY - r1Y * PX);
		this.m_body2.m_linearVelocity.x += this.m_body2.m_invMass * PX;
		this.m_body2.m_linearVelocity.y += this.m_body2.m_invMass * PY;
		this.m_body2.m_angularVelocity += this.m_body2.m_invI * (r2X * PY - r2Y * PX);
	},
	SolvePositionConstraints : function () {
		var tMat;
		tMat = this.m_body1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = this.m_body2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var dX = this.m_body2.m_position.x + r2X - this.m_body1.m_position.x - r1X;
		var dY = this.m_body2.m_position.y + r2Y - this.m_body1.m_position.y - r1Y;
		var length = Math.sqrt(dX * dX + dY * dY);
		dX /= length;
		dY /= length;
		var C = length - this.m_length;
		C = b2Math.b2Clamp(C, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
		var impulse = -this.m_mass * C;
		this.m_u.Set(dX, dY);
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		this.m_body1.m_position.x -= this.m_body1.m_invMass * PX;
		this.m_body1.m_position.y -= this.m_body1.m_invMass * PY;
		this.m_body1.m_rotation -= this.m_body1.m_invI * (r1X * PY - r1Y * PX);
		this.m_body2.m_position.x += this.m_body2.m_invMass * PX;
		this.m_body2.m_position.y += this.m_body2.m_invMass * PY;
		this.m_body2.m_rotation += this.m_body2.m_invI * (r2X * PY - r2Y * PX);
		this.m_body1.m_R.Set(this.m_body1.m_rotation);
		this.m_body2.m_R.Set(this.m_body2.m_rotation);
		return b2Math.b2Abs(C) < b2Settings.b2_linearSlop;
	},
	GetAnchor1 : function () {
		return b2Math.AddVV(this.m_body1.m_position, b2Math.b2MulMV(this.m_body1.m_R, this.m_localAnchor1));
	},
	GetAnchor2 : function () {
		return b2Math.AddVV(this.m_body2.m_position, b2Math.b2MulMV(this.m_body2.m_R, this.m_localAnchor2));
	},
	GetReactionForce : function (invTimeStep) {
		var F = new b2Vec2();
		F.SetV(this.m_u);
		F.Multiply(this.m_impulse * invTimeStep);
		return F;
	},
	GetReactionTorque : function (invTimeStep) {
		return 0.0;
	},
	m_localAnchor1 : new b2Vec2(),
	m_localAnchor2 : new b2Vec2(),
	m_u : new b2Vec2(),
	m_impulse : null,
	m_mass : null,
	m_length : null
});
var b2DistanceJointDef = Class.create();
Object.extend(b2DistanceJointDef.prototype, b2JointDef.prototype);
Object.extend(b2DistanceJointDef.prototype, {
	initialize : function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
		this.anchorPoint1 = new b2Vec2();
		this.anchorPoint2 = new b2Vec2();
		this.type = b2Joint.e_distanceJoint;
	},
	anchorPoint1 : new b2Vec2(),
	anchorPoint2 : new b2Vec2()
});
var b2Jacobian = Class.create();
b2Jacobian.prototype = {
	linear1 : new b2Vec2(),
	angular1 : null,
	linear2 : new b2Vec2(),
	angular2 : null,
	SetZero : function () {
		this.linear1.SetZero();
		this.angular1 = 0.0;
		this.linear2.SetZero();
		this.angular2 = 0.0;
	},
	Set : function (x1, a1, x2, a2) {
		this.linear1.SetV(x1);
		this.angular1 = a1;
		this.linear2.SetV(x2);
		this.angular2 = a2;
	},
	Compute : function (x1, a1, x2, a2) {
		return (this.linear1.x * x1.x + this.linear1.y * x1.y) + this.angular1 * a1 + (this.linear2.x * x2.x + this.linear2.y * x2.y) + this.angular2 * a2;
	},
	initialize : function () {
		this.linear1 = new b2Vec2();
		this.linear2 = new b2Vec2();
	}
};
var b2GearJoint = Class.create();
Object.extend(b2GearJoint.prototype, b2Joint.prototype);
Object.extend(b2GearJoint.prototype, {
	GetAnchor1 : function () {
		var tMat = this.m_body1.m_R;
		return new b2Vec2(this.m_body1.m_position.x + (tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y), this.m_body1.m_position.y + (tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y));
	},
	GetAnchor2 : function () {
		var tMat = this.m_body2.m_R;
		return new b2Vec2(this.m_body2.m_position.x + (tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y), this.m_body2.m_position.y + (tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y));
	},
	GetReactionForce : function (invTimeStep) {
		return new b2Vec2();
	},
	GetReactionTorque : function (invTimeStep) {
		return 0.0;
	},
	GetRatio : function () {
		return this.m_ratio;
	},
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.m_groundAnchor1 = new b2Vec2();
		this.m_groundAnchor2 = new b2Vec2();
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_J = new b2Jacobian();
		this.m_revolute1 = null;
		this.m_prismatic1 = null;
		this.m_revolute2 = null;
		this.m_prismatic2 = null;
		var coordinate1;
		var coordinate2;
		this.m_ground1 = def.joint1.m_body1;
		this.m_body1 = def.joint1.m_body2;
		if (def.joint1.m_type == b2Joint.e_revoluteJoint) {
			this.m_revolute1 = def.joint1;
			this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);
			this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);
			coordinate1 = this.m_revolute1.GetJointAngle();
		} else {
			this.m_prismatic1 = def.joint1;
			this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);
			this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);
			coordinate1 = this.m_prismatic1.GetJointTranslation();
		}
		this.m_ground2 = def.joint2.m_body1;
		this.m_body2 = def.joint2.m_body2;
		if (def.joint2.m_type == b2Joint.e_revoluteJoint) {
			this.m_revolute2 = def.joint2;
			this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);
			this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);
			coordinate2 = this.m_revolute2.GetJointAngle();
		} else {
			this.m_prismatic2 = def.joint2;
			this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);
			this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);
			coordinate2 = this.m_prismatic2.GetJointTranslation();
		}
		this.m_ratio = def.ratio;
		this.m_constant = coordinate1 + this.m_ratio * coordinate2;
		this.m_impulse = 0.0;
	},
	PrepareVelocitySolver : function () {
		var g1 = this.m_ground1;
		var g2 = this.m_ground2;
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var ugX;
		var ugY;
		var rX;
		var rY;
		var tMat;
		var tVec;
		var crug;
		var K = 0.0;
		this.m_J.SetZero();
		if (this.m_revolute1) {
			this.m_J.angular1 = -1.0;
			K += b1.m_invI;
		} else {
			tMat = g1.m_R;
			tVec = this.m_prismatic1.m_localXAxis1;
			ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			tMat = b1.m_R;
			rX = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
			rY = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
			crug = rX * ugY - rY * ugX;
			this.m_J.linear1.Set(-ugX, -ugY);
			this.m_J.angular1 = -crug;
			K += b1.m_invMass + b1.m_invI * crug * crug;
		}
		if (this.m_revolute2) {
			this.m_J.angular2 = -this.m_ratio;
			K += this.m_ratio * this.m_ratio * b2.m_invI;
		} else {
			tMat = g2.m_R;
			tVec = this.m_prismatic2.m_localXAxis1;
			ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			tMat = b2.m_R;
			rX = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
			rY = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
			crug = rX * ugY - rY * ugX;
			this.m_J.linear2.Set(-this.m_ratio * ugX, -this.m_ratio * ugY);
			this.m_J.angular2 = -this.m_ratio * crug;
			K += this.m_ratio * this.m_ratio * (b2.m_invMass + b2.m_invI * crug * crug);
		}
		this.m_mass = 1.0 / K;
		b1.m_linearVelocity.x += b1.m_invMass * this.m_impulse * this.m_J.linear1.x;
		b1.m_linearVelocity.y += b1.m_invMass * this.m_impulse * this.m_J.linear1.y;
		b1.m_angularVelocity += b1.m_invI * this.m_impulse * this.m_J.angular1;
		b2.m_linearVelocity.x += b2.m_invMass * this.m_impulse * this.m_J.linear2.x;
		b2.m_linearVelocity.y += b2.m_invMass * this.m_impulse * this.m_J.linear2.y;
		b2.m_angularVelocity += b2.m_invI * this.m_impulse * this.m_J.angular2;
	},
	SolveVelocityConstraints : function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var Cdot = this.m_J.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity);
		var impulse = -this.m_mass * Cdot;
		this.m_impulse += impulse;
		b1.m_linearVelocity.x += b1.m_invMass * impulse * this.m_J.linear1.x;
		b1.m_linearVelocity.y += b1.m_invMass * impulse * this.m_J.linear1.y;
		b1.m_angularVelocity += b1.m_invI * impulse * this.m_J.angular1;
		b2.m_linearVelocity.x += b2.m_invMass * impulse * this.m_J.linear2.x;
		b2.m_linearVelocity.y += b2.m_invMass * impulse * this.m_J.linear2.y;
		b2.m_angularVelocity += b2.m_invI * impulse * this.m_J.angular2;
	},
	SolvePositionConstraints : function () {
		var linearError = 0.0;
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var coordinate1;
		var coordinate2;
		if (this.m_revolute1) {
			coordinate1 = this.m_revolute1.GetJointAngle();
		} else {
			coordinate1 = this.m_prismatic1.GetJointTranslation();
		}
		if (this.m_revolute2) {
			coordinate2 = this.m_revolute2.GetJointAngle();
		} else {
			coordinate2 = this.m_prismatic2.GetJointTranslation();
		}
		var C = this.m_constant - (coordinate1 + this.m_ratio * coordinate2);
		var impulse = -this.m_mass * C;
		b1.m_position.x += b1.m_invMass * impulse * this.m_J.linear1.x;
		b1.m_position.y += b1.m_invMass * impulse * this.m_J.linear1.y;
		b1.m_rotation += b1.m_invI * impulse * this.m_J.angular1;
		b2.m_position.x += b2.m_invMass * impulse * this.m_J.linear2.x;
		b2.m_position.y += b2.m_invMass * impulse * this.m_J.linear2.y;
		b2.m_rotation += b2.m_invI * impulse * this.m_J.angular2;
		b1.m_R.Set(b1.m_rotation);
		b2.m_R.Set(b2.m_rotation);
		return linearError < b2Settings.b2_linearSlop;
	},
	m_ground1 : null,
	m_ground2 : null,
	m_revolute1 : null,
	m_prismatic1 : null,
	m_revolute2 : null,
	m_prismatic2 : null,
	m_groundAnchor1 : new b2Vec2(),
	m_groundAnchor2 : new b2Vec2(),
	m_localAnchor1 : new b2Vec2(),
	m_localAnchor2 : new b2Vec2(),
	m_J : new b2Jacobian(),
	m_constant : null,
	m_ratio : null,
	m_mass : null,
	m_impulse : null
});
var b2GearJointDef = Class.create();
Object.extend(b2GearJointDef.prototype, b2JointDef.prototype);
Object.extend(b2GearJointDef.prototype, {
	initialize : function () {
		this.type = b2Joint.e_gearJoint;
		this.joint1 = null;
		this.joint2 = null;
		this.ratio = 1.0;
	},
	joint1 : null,
	joint2 : null,
	ratio : null
});
var b2MouseJoint = Class.create();
Object.extend(b2MouseJoint.prototype, b2Joint.prototype);
Object.extend(b2MouseJoint.prototype, {
	GetAnchor1 : function () {
		return this.m_target;
	},
	GetAnchor2 : function () {
		var tVec = b2Math.b2MulMV(this.m_body2.m_R, this.m_localAnchor);
		tVec.Add(this.m_body2.m_position);
		return tVec;
	},
	GetReactionForce : function (invTimeStep) {
		var F = new b2Vec2();
		F.SetV(this.m_impulse);
		F.Multiply(invTimeStep);
		return F;
	},
	GetReactionTorque : function (invTimeStep) {
		return 0.0;
	},
	SetTarget : function (target) {
		this.m_body2.WakeUp();
		this.m_target = target;
	},
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.K = new b2Mat22();
		this.K1 = new b2Mat22();
		this.K2 = new b2Mat22();
		this.m_localAnchor = new b2Vec2();
		this.m_target = new b2Vec2();
		this.m_impulse = new b2Vec2();
		this.m_ptpMass = new b2Mat22();
		this.m_C = new b2Vec2();
		this.m_target.SetV(def.target);
		var tX = this.m_target.x - this.m_body2.m_position.x;
		var tY = this.m_target.y - this.m_body2.m_position.y;
		this.m_localAnchor.x = (tX * this.m_body2.m_R.col1.x + tY * this.m_body2.m_R.col1.y);
		this.m_localAnchor.y = (tX * this.m_body2.m_R.col2.x + tY * this.m_body2.m_R.col2.y);
		this.m_maxForce = def.maxForce;
		this.m_impulse.SetZero();
		var mass = this.m_body2.m_mass;
		var omega = 2.0 * b2Settings.b2_pi * def.frequencyHz;
		var d = 2.0 * mass * def.dampingRatio * omega;
		var k = mass * omega * omega;
		this.m_gamma = 1.0 / (d + def.timeStep * k);
		this.m_beta = def.timeStep * k / (d + def.timeStep * k);
	},
	K : new b2Mat22(),
	K1 : new b2Mat22(),
	K2 : new b2Mat22(),
	PrepareVelocitySolver : function () {
		var b = this.m_body2;
		var tMat;
		tMat = b.m_R;
		var rX = tMat.col1.x * this.m_localAnchor.x + tMat.col2.x * this.m_localAnchor.y;
		var rY = tMat.col1.y * this.m_localAnchor.x + tMat.col2.y * this.m_localAnchor.y;
		var invMass = b.m_invMass;
		var invI = b.m_invI;
		this.K1.col1.x = invMass;
		this.K1.col2.x = 0.0;
		this.K1.col1.y = 0.0;
		this.K1.col2.y = invMass;
		this.K2.col1.x = invI * rY * rY;
		this.K2.col2.x = -invI * rX * rY;
		this.K2.col1.y = -invI * rX * rY;
		this.K2.col2.y = invI * rX * rX;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.col1.x += this.m_gamma;
		this.K.col2.y += this.m_gamma;
		this.K.Invert(this.m_ptpMass);
		this.m_C.x = b.m_position.x + rX - this.m_target.x;
		this.m_C.y = b.m_position.y + rY - this.m_target.y;
		b.m_angularVelocity *= 0.98;
		var PX = this.m_impulse.x;
		var PY = this.m_impulse.y;
		b.m_linearVelocity.x += invMass * PX;
		b.m_linearVelocity.y += invMass * PY;
		b.m_angularVelocity += invI * (rX * PY - rY * PX);
	},
	SolveVelocityConstraints : function (step) {
		var body = this.m_body2;
		var tMat;
		tMat = body.m_R;
		var rX = tMat.col1.x * this.m_localAnchor.x + tMat.col2.x * this.m_localAnchor.y;
		var rY = tMat.col1.y * this.m_localAnchor.x + tMat.col2.y * this.m_localAnchor.y;
		var CdotX = body.m_linearVelocity.x + (-body.m_angularVelocity * rY);
		var CdotY = body.m_linearVelocity.y + (body.m_angularVelocity * rX);
		tMat = this.m_ptpMass;
		var tX = CdotX + (this.m_beta * step.inv_dt) * this.m_C.x + this.m_gamma * this.m_impulse.x;
		var tY = CdotY + (this.m_beta * step.inv_dt) * this.m_C.y + this.m_gamma * this.m_impulse.y;
		var impulseX =  - (tMat.col1.x * tX + tMat.col2.x * tY);
		var impulseY =  - (tMat.col1.y * tX + tMat.col2.y * tY);
		var oldImpulseX = this.m_impulse.x;
		var oldImpulseY = this.m_impulse.y;
		this.m_impulse.x += impulseX;
		this.m_impulse.y += impulseY;
		var length = this.m_impulse.Length();
		if (length > step.dt * this.m_maxForce) {
			this.m_impulse.Multiply(step.dt * this.m_maxForce / length);
		}
		impulseX = this.m_impulse.x - oldImpulseX;
		impulseY = this.m_impulse.y - oldImpulseY;
		body.m_linearVelocity.x += body.m_invMass * impulseX;
		body.m_linearVelocity.y += body.m_invMass * impulseY;
		body.m_angularVelocity += body.m_invI * (rX * impulseY - rY * impulseX);
	},
	SolvePositionConstraints : function () {
		return true;
	},
	m_localAnchor : new b2Vec2(),
	m_target : new b2Vec2(),
	m_impulse : new b2Vec2(),
	m_ptpMass : new b2Mat22(),
	m_C : new b2Vec2(),
	m_maxForce : null,
	m_beta : null,
	m_gamma : null
});
var b2MouseJointDef = Class.create();
Object.extend(b2MouseJointDef.prototype, b2JointDef.prototype);
Object.extend(b2MouseJointDef.prototype, {
	initialize : function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
		this.target = new b2Vec2();
		this.type = b2Joint.e_mouseJoint;
		this.maxForce = 0.0;
		this.frequencyHz = 5.0;
		this.dampingRatio = 0.7;
		this.timeStep = 1.0 / 60.0;
	},
	target : new b2Vec2(),
	maxForce : null,
	frequencyHz : null,
	dampingRatio : null,
	timeStep : null
});
var b2PrismaticJoint = Class.create();
Object.extend(b2PrismaticJoint.prototype, b2Joint.prototype);
Object.extend(b2PrismaticJoint.prototype, {
	GetAnchor1 : function () {
		var b1 = this.m_body1;
		var tVec = new b2Vec2();
		tVec.SetV(this.m_localAnchor1);
		tVec.MulM(b1.m_R);
		tVec.Add(b1.m_position);
		return tVec;
	},
	GetAnchor2 : function () {
		var b2 = this.m_body2;
		var tVec = new b2Vec2();
		tVec.SetV(this.m_localAnchor2);
		tVec.MulM(b2.m_R);
		tVec.Add(b2.m_position);
		return tVec;
	},
	GetJointTranslation : function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var p1X = b1.m_position.x + r1X;
		var p1Y = b1.m_position.y + r1Y;
		var p2X = b2.m_position.x + r2X;
		var p2Y = b2.m_position.y + r2Y;
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		tMat = b1.m_R;
		var ax1X = tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y;
		var ax1Y = tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y;
		var translation = ax1X * dX + ax1Y * dY;
		return translation;
	},
	GetJointSpeed : function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var p1X = b1.m_position.x + r1X;
		var p1Y = b1.m_position.y + r1Y;
		var p2X = b2.m_position.x + r2X;
		var p2Y = b2.m_position.y + r2Y;
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		tMat = b1.m_R;
		var ax1X = tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y;
		var ax1Y = tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y;
		var v1 = b1.m_linearVelocity;
		var v2 = b2.m_linearVelocity;
		var w1 = b1.m_angularVelocity;
		var w2 = b2.m_angularVelocity;
		var speed = (dX * (-w1 * ax1Y) + dY * (w1 * ax1X)) + (ax1X * (((v2.x + (-w2 * r2Y)) - v1.x) - (-w1 * r1Y)) + ax1Y * (((v2.y + (w2 * r2X)) - v1.y) - (w1 * r1X)));
		return speed;
	},
	GetMotorForce : function (invTimeStep) {
		return invTimeStep * this.m_motorImpulse;
	},
	SetMotorSpeed : function (speed) {
		this.m_motorSpeed = speed;
	},
	SetMotorForce : function (force) {
		this.m_maxMotorForce = force;
	},
	GetReactionForce : function (invTimeStep) {
		var tImp = invTimeStep * this.m_limitImpulse;
		var tMat;
		tMat = this.m_body1.m_R;
		var ax1X = tImp * (tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y);
		var ax1Y = tImp * (tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y);
		var ay1X = tImp * (tMat.col1.x * this.m_localYAxis1.x + tMat.col2.x * this.m_localYAxis1.y);
		var ay1Y = tImp * (tMat.col1.y * this.m_localYAxis1.x + tMat.col2.y * this.m_localYAxis1.y);
		return new b2Vec2(ax1X + ay1X, ax1Y + ay1Y);
	},
	GetReactionTorque : function (invTimeStep) {
		return invTimeStep * this.m_angularImpulse;
	},
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_localXAxis1 = new b2Vec2();
		this.m_localYAxis1 = new b2Vec2();
		this.m_linearJacobian = new b2Jacobian();
		this.m_motorJacobian = new b2Jacobian();
		var tMat;
		var tX;
		var tY;
		tMat = this.m_body1.m_R;
		tX = (def.anchorPoint.x - this.m_body1.m_position.x);
		tY = (def.anchorPoint.y - this.m_body1.m_position.y);
		this.m_localAnchor1.Set((tX * tMat.col1.x + tY * tMat.col1.y), (tX * tMat.col2.x + tY * tMat.col2.y));
		tMat = this.m_body2.m_R;
		tX = (def.anchorPoint.x - this.m_body2.m_position.x);
		tY = (def.anchorPoint.y - this.m_body2.m_position.y);
		this.m_localAnchor2.Set((tX * tMat.col1.x + tY * tMat.col1.y), (tX * tMat.col2.x + tY * tMat.col2.y));
		tMat = this.m_body1.m_R;
		tX = def.axis.x;
		tY = def.axis.y;
		this.m_localXAxis1.Set((tX * tMat.col1.x + tY * tMat.col1.y), (tX * tMat.col2.x + tY * tMat.col2.y));
		this.m_localYAxis1.x = -this.m_localXAxis1.y;
		this.m_localYAxis1.y = this.m_localXAxis1.x;
		this.m_initialAngle = this.m_body2.m_rotation - this.m_body1.m_rotation;
		this.m_linearJacobian.SetZero();
		this.m_linearMass = 0.0;
		this.m_linearImpulse = 0.0;
		this.m_angularMass = 0.0;
		this.m_angularImpulse = 0.0;
		this.m_motorJacobian.SetZero();
		this.m_motorMass = 0.0;
		this.m_motorImpulse = 0.0;
		this.m_limitImpulse = 0.0;
		this.m_limitPositionImpulse = 0.0;
		this.m_lowerTranslation = def.lowerTranslation;
		this.m_upperTranslation = def.upperTranslation;
		this.m_maxMotorForce = def.motorForce;
		this.m_motorSpeed = def.motorSpeed;
		this.m_enableLimit = def.enableLimit;
		this.m_enableMotor = def.enableMotor;
	},
	PrepareVelocitySolver : function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		tMat = b1.m_R;
		var ay1X = tMat.col1.x * this.m_localYAxis1.x + tMat.col2.x * this.m_localYAxis1.y;
		var ay1Y = tMat.col1.y * this.m_localYAxis1.x + tMat.col2.y * this.m_localYAxis1.y;
		var eX = b2.m_position.x + r2X - b1.m_position.x;
		var eY = b2.m_position.y + r2Y - b1.m_position.y;
		this.m_linearJacobian.linear1.x = -ay1X;
		this.m_linearJacobian.linear1.y = -ay1Y;
		this.m_linearJacobian.linear2.x = ay1X;
		this.m_linearJacobian.linear2.y = ay1Y;
		this.m_linearJacobian.angular1 =  - (eX * ay1Y - eY * ay1X);
		this.m_linearJacobian.angular2 = r2X * ay1Y - r2Y * ay1X;
		this.m_linearMass = invMass1 + invI1 * this.m_linearJacobian.angular1 * this.m_linearJacobian.angular1 +
			invMass2 + invI2 * this.m_linearJacobian.angular2 * this.m_linearJacobian.angular2;
		this.m_linearMass = 1.0 / this.m_linearMass;
		this.m_angularMass = 1.0 / (invI1 + invI2);
		if (this.m_enableLimit || this.m_enableMotor) {
			tMat = b1.m_R;
			var ax1X = tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y;
			var ax1Y = tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y;
			this.m_motorJacobian.linear1.x = -ax1X;
			this.m_motorJacobian.linear1.y = -ax1Y;
			this.m_motorJacobian.linear2.x = ax1X;
			this.m_motorJacobian.linear2.y = ax1Y;
			this.m_motorJacobian.angular1 =  - (eX * ax1Y - eY * ax1X);
			this.m_motorJacobian.angular2 = r2X * ax1Y - r2Y * ax1X;
			this.m_motorMass = invMass1 + invI1 * this.m_motorJacobian.angular1 * this.m_motorJacobian.angular1 +
				invMass2 + invI2 * this.m_motorJacobian.angular2 * this.m_motorJacobian.angular2;
			this.m_motorMass = 1.0 / this.m_motorMass;
			if (this.m_enableLimit) {
				var dX = eX - r1X;
				var dY = eY - r1Y;
				var jointTranslation = ax1X * dX + ax1Y * dY;
				if (b2Math.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * b2Settings.b2_linearSlop) {
					this.m_limitState = b2Joint.e_equalLimits;
				} else if (jointTranslation <= this.m_lowerTranslation) {
					if (this.m_limitState != b2Joint.e_atLowerLimit) {
						this.m_limitImpulse = 0.0;
					}
					this.m_limitState = b2Joint.e_atLowerLimit;
				} else if (jointTranslation >= this.m_upperTranslation) {
					if (this.m_limitState != b2Joint.e_atUpperLimit) {
						this.m_limitImpulse = 0.0;
					}
					this.m_limitState = b2Joint.e_atUpperLimit;
				} else {
					this.m_limitState = b2Joint.e_inactiveLimit;
					this.m_limitImpulse = 0.0;
				}
			}
		}
		if (this.m_enableMotor == false) {
			this.m_motorImpulse = 0.0;
		}
		if (this.m_enableLimit == false) {
			this.m_limitImpulse = 0.0;
		}
		if (b2World.s_enableWarmStarting) {
			var P1X = this.m_linearImpulse * this.m_linearJacobian.linear1.x + (this.m_motorImpulse + this.m_limitImpulse) * this.m_motorJacobian.linear1.x;
			var P1Y = this.m_linearImpulse * this.m_linearJacobian.linear1.y + (this.m_motorImpulse + this.m_limitImpulse) * this.m_motorJacobian.linear1.y;
			var P2X = this.m_linearImpulse * this.m_linearJacobian.linear2.x + (this.m_motorImpulse + this.m_limitImpulse) * this.m_motorJacobian.linear2.x;
			var P2Y = this.m_linearImpulse * this.m_linearJacobian.linear2.y + (this.m_motorImpulse + this.m_limitImpulse) * this.m_motorJacobian.linear2.y;
			var L1 = this.m_linearImpulse * this.m_linearJacobian.angular1 - this.m_angularImpulse + (this.m_motorImpulse + this.m_limitImpulse) * this.m_motorJacobian.angular1;
			var L2 = this.m_linearImpulse * this.m_linearJacobian.angular2 + this.m_angularImpulse + (this.m_motorImpulse + this.m_limitImpulse) * this.m_motorJacobian.angular2;
			b1.m_linearVelocity.x += invMass1 * P1X;
			b1.m_linearVelocity.y += invMass1 * P1Y;
			b1.m_angularVelocity += invI1 * L1;
			b2.m_linearVelocity.x += invMass2 * P2X;
			b2.m_linearVelocity.y += invMass2 * P2Y;
			b2.m_angularVelocity += invI2 * L2;
		} else {
			this.m_linearImpulse = 0.0;
			this.m_angularImpulse = 0.0;
			this.m_limitImpulse = 0.0;
			this.m_motorImpulse = 0.0;
		}
		this.m_limitPositionImpulse = 0.0;
	},
	SolveVelocityConstraints : function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		var oldLimitImpulse;
		var linearCdot = this.m_linearJacobian.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity);
		var linearImpulse = -this.m_linearMass * linearCdot;
		this.m_linearImpulse += linearImpulse;
		b1.m_linearVelocity.x += (invMass1 * linearImpulse) * this.m_linearJacobian.linear1.x;
		b1.m_linearVelocity.y += (invMass1 * linearImpulse) * this.m_linearJacobian.linear1.y;
		b1.m_angularVelocity += invI1 * linearImpulse * this.m_linearJacobian.angular1;
		b2.m_linearVelocity.x += (invMass2 * linearImpulse) * this.m_linearJacobian.linear2.x;
		b2.m_linearVelocity.y += (invMass2 * linearImpulse) * this.m_linearJacobian.linear2.y;
		b2.m_angularVelocity += invI2 * linearImpulse * this.m_linearJacobian.angular2;
		var angularCdot = b2.m_angularVelocity - b1.m_angularVelocity;
		var angularImpulse = -this.m_angularMass * angularCdot;
		this.m_angularImpulse += angularImpulse;
		b1.m_angularVelocity -= invI1 * angularImpulse;
		b2.m_angularVelocity += invI2 * angularImpulse;
		if (this.m_enableMotor && this.m_limitState != b2Joint.e_equalLimits) {
			var motorCdot = this.m_motorJacobian.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity) - this.m_motorSpeed;
			var motorImpulse = -this.m_motorMass * motorCdot;
			var oldMotorImpulse = this.m_motorImpulse;
			this.m_motorImpulse = b2Math.b2Clamp(this.m_motorImpulse + motorImpulse, -step.dt * this.m_maxMotorForce, step.dt * this.m_maxMotorForce);
			motorImpulse = this.m_motorImpulse - oldMotorImpulse;
			b1.m_linearVelocity.x += (invMass1 * motorImpulse) * this.m_motorJacobian.linear1.x;
			b1.m_linearVelocity.y += (invMass1 * motorImpulse) * this.m_motorJacobian.linear1.y;
			b1.m_angularVelocity += invI1 * motorImpulse * this.m_motorJacobian.angular1;
			b2.m_linearVelocity.x += (invMass2 * motorImpulse) * this.m_motorJacobian.linear2.x;
			b2.m_linearVelocity.y += (invMass2 * motorImpulse) * this.m_motorJacobian.linear2.y;
			b2.m_angularVelocity += invI2 * motorImpulse * this.m_motorJacobian.angular2;
		}
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit) {
			var limitCdot = this.m_motorJacobian.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity);
			var limitImpulse = -this.m_motorMass * limitCdot;
			if (this.m_limitState == b2Joint.e_equalLimits) {
				this.m_limitImpulse += limitImpulse;
			} else if (this.m_limitState == b2Joint.e_atLowerLimit) {
				oldLimitImpulse = this.m_limitImpulse;
				this.m_limitImpulse = b2Math.b2Max(this.m_limitImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitImpulse - oldLimitImpulse;
			} else if (this.m_limitState == b2Joint.e_atUpperLimit) {
				oldLimitImpulse = this.m_limitImpulse;
				this.m_limitImpulse = b2Math.b2Min(this.m_limitImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitImpulse - oldLimitImpulse;
			}
			b1.m_linearVelocity.x += (invMass1 * limitImpulse) * this.m_motorJacobian.linear1.x;
			b1.m_linearVelocity.y += (invMass1 * limitImpulse) * this.m_motorJacobian.linear1.y;
			b1.m_angularVelocity += invI1 * limitImpulse * this.m_motorJacobian.angular1;
			b2.m_linearVelocity.x += (invMass2 * limitImpulse) * this.m_motorJacobian.linear2.x;
			b2.m_linearVelocity.y += (invMass2 * limitImpulse) * this.m_motorJacobian.linear2.y;
			b2.m_angularVelocity += invI2 * limitImpulse * this.m_motorJacobian.angular2;
		}
	},
	SolvePositionConstraints : function () {
		var limitC;
		var oldLimitImpulse;
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var p1X = b1.m_position.x + r1X;
		var p1Y = b1.m_position.y + r1Y;
		var p2X = b2.m_position.x + r2X;
		var p2Y = b2.m_position.y + r2Y;
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		tMat = b1.m_R;
		var ay1X = tMat.col1.x * this.m_localYAxis1.x + tMat.col2.x * this.m_localYAxis1.y;
		var ay1Y = tMat.col1.y * this.m_localYAxis1.x + tMat.col2.y * this.m_localYAxis1.y;
		var linearC = ay1X * dX + ay1Y * dY;
		linearC = b2Math.b2Clamp(linearC, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
		var linearImpulse = -this.m_linearMass * linearC;
		b1.m_position.x += (invMass1 * linearImpulse) * this.m_linearJacobian.linear1.x;
		b1.m_position.y += (invMass1 * linearImpulse) * this.m_linearJacobian.linear1.y;
		b1.m_rotation += invI1 * linearImpulse * this.m_linearJacobian.angular1;
		b2.m_position.x += (invMass2 * linearImpulse) * this.m_linearJacobian.linear2.x;
		b2.m_position.y += (invMass2 * linearImpulse) * this.m_linearJacobian.linear2.y;
		b2.m_rotation += invI2 * linearImpulse * this.m_linearJacobian.angular2;
		var positionError = b2Math.b2Abs(linearC);
		var angularC = b2.m_rotation - b1.m_rotation - this.m_initialAngle;
		angularC = b2Math.b2Clamp(angularC, -b2Settings.b2_maxAngularCorrection, b2Settings.b2_maxAngularCorrection);
		var angularImpulse = -this.m_angularMass * angularC;
		b1.m_rotation -= b1.m_invI * angularImpulse;
		b1.m_R.Set(b1.m_rotation);
		b2.m_rotation += b2.m_invI * angularImpulse;
		b2.m_R.Set(b2.m_rotation);
		var angularError = b2Math.b2Abs(angularC);
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit) {
			tMat = b1.m_R;
			r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
			r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
			tMat = b2.m_R;
			r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
			r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
			p1X = b1.m_position.x + r1X;
			p1Y = b1.m_position.y + r1Y;
			p2X = b2.m_position.x + r2X;
			p2Y = b2.m_position.y + r2Y;
			dX = p2X - p1X;
			dY = p2Y - p1Y;
			tMat = b1.m_R;
			var ax1X = tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y;
			var ax1Y = tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y;
			var translation = (ax1X * dX + ax1Y * dY);
			var limitImpulse = 0.0;
			if (this.m_limitState == b2Joint.e_equalLimits) {
				limitC = b2Math.b2Clamp(translation, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				positionError = b2Math.b2Max(positionError, b2Math.b2Abs(angularC));
			} else if (this.m_limitState == b2Joint.e_atLowerLimit) {
				limitC = translation - this.m_lowerTranslation;
				positionError = b2Math.b2Max(positionError, -limitC);
				limitC = b2Math.b2Clamp(limitC + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Max(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			} else if (this.m_limitState == b2Joint.e_atUpperLimit) {
				limitC = translation - this.m_upperTranslation;
				positionError = b2Math.b2Max(positionError, limitC);
				limitC = b2Math.b2Clamp(limitC - b2Settings.b2_linearSlop, 0.0, b2Settings.b2_maxLinearCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Min(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			}
			b1.m_position.x += (invMass1 * limitImpulse) * this.m_motorJacobian.linear1.x;
			b1.m_position.y += (invMass1 * limitImpulse) * this.m_motorJacobian.linear1.y;
			b1.m_rotation += invI1 * limitImpulse * this.m_motorJacobian.angular1;
			b1.m_R.Set(b1.m_rotation);
			b2.m_position.x += (invMass2 * limitImpulse) * this.m_motorJacobian.linear2.x;
			b2.m_position.y += (invMass2 * limitImpulse) * this.m_motorJacobian.linear2.y;
			b2.m_rotation += invI2 * limitImpulse * this.m_motorJacobian.angular2;
			b2.m_R.Set(b2.m_rotation);
		}
		return positionError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
	},
	m_localAnchor1 : new b2Vec2(),
	m_localAnchor2 : new b2Vec2(),
	m_localXAxis1 : new b2Vec2(),
	m_localYAxis1 : new b2Vec2(),
	m_initialAngle : null,
	m_linearJacobian : new b2Jacobian(),
	m_linearMass : null,
	m_linearImpulse : null,
	m_angularMass : null,
	m_angularImpulse : null,
	m_motorJacobian : new b2Jacobian(),
	m_motorMass : null,
	m_motorImpulse : null,
	m_limitImpulse : null,
	m_limitPositionImpulse : null,
	m_lowerTranslation : null,
	m_upperTranslation : null,
	m_maxMotorForce : null,
	m_motorSpeed : null,
	m_enableLimit : null,
	m_enableMotor : null,
	m_limitState : 0
});
var b2PrismaticJointDef = Class.create();
Object.extend(b2PrismaticJointDef.prototype, b2JointDef.prototype);
Object.extend(b2PrismaticJointDef.prototype, {
	initialize : function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
		this.type = b2Joint.e_prismaticJoint;
		this.anchorPoint = new b2Vec2(0.0, 0.0);
		this.axis = new b2Vec2(0.0, 0.0);
		this.lowerTranslation = 0.0;
		this.upperTranslation = 0.0;
		this.motorForce = 0.0;
		this.motorSpeed = 0.0;
		this.enableLimit = false;
		this.enableMotor = false;
	},
	anchorPoint : null,
	axis : null,
	lowerTranslation : null,
	upperTranslation : null,
	motorForce : null,
	motorSpeed : null,
	enableLimit : null,
	enableMotor : null
});
var b2PulleyJoint = Class.create();
Object.extend(b2PulleyJoint.prototype, b2Joint.prototype);
Object.extend(b2PulleyJoint.prototype, {
	GetAnchor1 : function () {
		var tMat = this.m_body1.m_R;
		return new b2Vec2(this.m_body1.m_position.x + (tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y), this.m_body1.m_position.y + (tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y));
	},
	GetAnchor2 : function () {
		var tMat = this.m_body2.m_R;
		return new b2Vec2(this.m_body2.m_position.x + (tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y), this.m_body2.m_position.y + (tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y));
	},
	GetGroundPoint1 : function () {
		return new b2Vec2(this.m_ground.m_position.x + this.m_groundAnchor1.x, this.m_ground.m_position.y + this.m_groundAnchor1.y);
	},
	GetGroundPoint2 : function () {
		return new b2Vec2(this.m_ground.m_position.x + this.m_groundAnchor2.x, this.m_ground.m_position.y + this.m_groundAnchor2.y);
	},
	GetReactionForce : function (invTimeStep) {
		return new b2Vec2();
	},
	GetReactionTorque : function (invTimeStep) {
		return 0.0;
	},
	GetLength1 : function () {
		var tMat;
		tMat = this.m_body1.m_R;
		var pX = this.m_body1.m_position.x + (tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y);
		var pY = this.m_body1.m_position.y + (tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y);
		var dX = pX - (this.m_ground.m_position.x + this.m_groundAnchor1.x);
		var dY = pY - (this.m_ground.m_position.y + this.m_groundAnchor1.y);
		return Math.sqrt(dX * dX + dY * dY);
	},
	GetLength2 : function () {
		var tMat;
		tMat = this.m_body2.m_R;
		var pX = this.m_body2.m_position.x + (tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y);
		var pY = this.m_body2.m_position.y + (tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y);
		var dX = pX - (this.m_ground.m_position.x + this.m_groundAnchor2.x);
		var dY = pY - (this.m_ground.m_position.y + this.m_groundAnchor2.y);
		return Math.sqrt(dX * dX + dY * dY);
	},
	GetRatio : function () {
		return this.m_ratio;
	},
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.m_groundAnchor1 = new b2Vec2();
		this.m_groundAnchor2 = new b2Vec2();
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_u1 = new b2Vec2();
		this.m_u2 = new b2Vec2();
		var tMat;
		var tX;
		var tY;
		this.m_ground = this.m_body1.m_world.m_groundBody;
		this.m_groundAnchor1.x = def.groundPoint1.x - this.m_ground.m_position.x;
		this.m_groundAnchor1.y = def.groundPoint1.y - this.m_ground.m_position.y;
		this.m_groundAnchor2.x = def.groundPoint2.x - this.m_ground.m_position.x;
		this.m_groundAnchor2.y = def.groundPoint2.y - this.m_ground.m_position.y;
		tMat = this.m_body1.m_R;
		tX = def.anchorPoint1.x - this.m_body1.m_position.x;
		tY = def.anchorPoint1.y - this.m_body1.m_position.y;
		this.m_localAnchor1.x = tX * tMat.col1.x + tY * tMat.col1.y;
		this.m_localAnchor1.y = tX * tMat.col2.x + tY * tMat.col2.y;
		tMat = this.m_body2.m_R;
		tX = def.anchorPoint2.x - this.m_body2.m_position.x;
		tY = def.anchorPoint2.y - this.m_body2.m_position.y;
		this.m_localAnchor2.x = tX * tMat.col1.x + tY * tMat.col1.y;
		this.m_localAnchor2.y = tX * tMat.col2.x + tY * tMat.col2.y;
		this.m_ratio = def.ratio;
		tX = def.groundPoint1.x - def.anchorPoint1.x;
		tY = def.groundPoint1.y - def.anchorPoint1.y;
		var d1Len = Math.sqrt(tX * tX + tY * tY);
		tX = def.groundPoint2.x - def.anchorPoint2.x;
		tY = def.groundPoint2.y - def.anchorPoint2.y;
		var d2Len = Math.sqrt(tX * tX + tY * tY);
		var length1 = b2Math.b2Max(0.5 * b2PulleyJoint.b2_minPulleyLength, d1Len);
		var length2 = b2Math.b2Max(0.5 * b2PulleyJoint.b2_minPulleyLength, d2Len);
		this.m_constant = length1 + this.m_ratio * length2;
		this.m_maxLength1 = b2Math.b2Clamp(def.maxLength1, length1, this.m_constant - this.m_ratio * b2PulleyJoint.b2_minPulleyLength);
		this.m_maxLength2 = b2Math.b2Clamp(def.maxLength2, length2, (this.m_constant - b2PulleyJoint.b2_minPulleyLength) / this.m_ratio);
		this.m_pulleyImpulse = 0.0;
		this.m_limitImpulse1 = 0.0;
		this.m_limitImpulse2 = 0.0;
	},
	PrepareVelocitySolver : function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var p1X = b1.m_position.x + r1X;
		var p1Y = b1.m_position.y + r1Y;
		var p2X = b2.m_position.x + r2X;
		var p2Y = b2.m_position.y + r2Y;
		var s1X = this.m_ground.m_position.x + this.m_groundAnchor1.x;
		var s1Y = this.m_ground.m_position.y + this.m_groundAnchor1.y;
		var s2X = this.m_ground.m_position.x + this.m_groundAnchor2.x;
		var s2Y = this.m_ground.m_position.y + this.m_groundAnchor2.y;
		this.m_u1.Set(p1X - s1X, p1Y - s1Y);
		this.m_u2.Set(p2X - s2X, p2Y - s2Y);
		var length1 = this.m_u1.Length();
		var length2 = this.m_u2.Length();
		if (length1 > b2Settings.b2_linearSlop) {
			this.m_u1.Multiply(1.0 / length1);
		} else {
			this.m_u1.SetZero();
		}
		if (length2 > b2Settings.b2_linearSlop) {
			this.m_u2.Multiply(1.0 / length2);
		} else {
			this.m_u2.SetZero();
		}
		if (length1 < this.m_maxLength1) {
			this.m_limitState1 = b2Joint.e_inactiveLimit;
			this.m_limitImpulse1 = 0.0;
		} else {
			this.m_limitState1 = b2Joint.e_atUpperLimit;
			this.m_limitPositionImpulse1 = 0.0;
		}
		if (length2 < this.m_maxLength2) {
			this.m_limitState2 = b2Joint.e_inactiveLimit;
			this.m_limitImpulse2 = 0.0;
		} else {
			this.m_limitState2 = b2Joint.e_atUpperLimit;
			this.m_limitPositionImpulse2 = 0.0;
		}
		var cr1u1 = r1X * this.m_u1.y - r1Y * this.m_u1.x;
		var cr2u2 = r2X * this.m_u2.y - r2Y * this.m_u2.x;
		this.m_limitMass1 = b1.m_invMass + b1.m_invI * cr1u1 * cr1u1;
		this.m_limitMass2 = b2.m_invMass + b2.m_invI * cr2u2 * cr2u2;
		this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
		this.m_limitMass1 = 1.0 / this.m_limitMass1;
		this.m_limitMass2 = 1.0 / this.m_limitMass2;
		this.m_pulleyMass = 1.0 / this.m_pulleyMass;
		var P1X = (-this.m_pulleyImpulse - this.m_limitImpulse1) * this.m_u1.x;
		var P1Y = (-this.m_pulleyImpulse - this.m_limitImpulse1) * this.m_u1.y;
		var P2X = (-this.m_ratio * this.m_pulleyImpulse - this.m_limitImpulse2) * this.m_u2.x;
		var P2Y = (-this.m_ratio * this.m_pulleyImpulse - this.m_limitImpulse2) * this.m_u2.y;
		b1.m_linearVelocity.x += b1.m_invMass * P1X;
		b1.m_linearVelocity.y += b1.m_invMass * P1Y;
		b1.m_angularVelocity += b1.m_invI * (r1X * P1Y - r1Y * P1X);
		b2.m_linearVelocity.x += b2.m_invMass * P2X;
		b2.m_linearVelocity.y += b2.m_invMass * P2Y;
		b2.m_angularVelocity += b2.m_invI * (r2X * P2Y - r2Y * P2X);
	},
	SolveVelocityConstraints : function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var v1X;
		var v1Y;
		var v2X;
		var v2Y;
		var P1X;
		var P1Y;
		var P2X;
		var P2Y;
		var Cdot;
		var impulse;
		var oldLimitImpulse;
		v1X = b1.m_linearVelocity.x + (-b1.m_angularVelocity * r1Y);
		v1Y = b1.m_linearVelocity.y + (b1.m_angularVelocity * r1X);
		v2X = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y);
		v2Y = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X);
		Cdot =  - (this.m_u1.x * v1X + this.m_u1.y * v1Y) - this.m_ratio * (this.m_u2.x * v2X + this.m_u2.y * v2Y);
		impulse = -this.m_pulleyMass * Cdot;
		this.m_pulleyImpulse += impulse;
		P1X = -impulse * this.m_u1.x;
		P1Y = -impulse * this.m_u1.y;
		P2X = -this.m_ratio * impulse * this.m_u2.x;
		P2Y = -this.m_ratio * impulse * this.m_u2.y;
		b1.m_linearVelocity.x += b1.m_invMass * P1X;
		b1.m_linearVelocity.y += b1.m_invMass * P1Y;
		b1.m_angularVelocity += b1.m_invI * (r1X * P1Y - r1Y * P1X);
		b2.m_linearVelocity.x += b2.m_invMass * P2X;
		b2.m_linearVelocity.y += b2.m_invMass * P2Y;
		b2.m_angularVelocity += b2.m_invI * (r2X * P2Y - r2Y * P2X);
		if (this.m_limitState1 == b2Joint.e_atUpperLimit) {
			v1X = b1.m_linearVelocity.x + (-b1.m_angularVelocity * r1Y);
			v1Y = b1.m_linearVelocity.y + (b1.m_angularVelocity * r1X);
			Cdot =  - (this.m_u1.x * v1X + this.m_u1.y * v1Y);
			impulse = -this.m_limitMass1 * Cdot;
			oldLimitImpulse = this.m_limitImpulse1;
			this.m_limitImpulse1 = b2Math.b2Max(0.0, this.m_limitImpulse1 + impulse);
			impulse = this.m_limitImpulse1 - oldLimitImpulse;
			P1X = -impulse * this.m_u1.x;
			P1Y = -impulse * this.m_u1.y;
			b1.m_linearVelocity.x += b1.m_invMass * P1X;
			b1.m_linearVelocity.y += b1.m_invMass * P1Y;
			b1.m_angularVelocity += b1.m_invI * (r1X * P1Y - r1Y * P1X);
		}
		if (this.m_limitState2 == b2Joint.e_atUpperLimit) {
			v2X = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y);
			v2Y = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X);
			Cdot =  - (this.m_u2.x * v2X + this.m_u2.y * v2Y);
			impulse = -this.m_limitMass2 * Cdot;
			oldLimitImpulse = this.m_limitImpulse2;
			this.m_limitImpulse2 = b2Math.b2Max(0.0, this.m_limitImpulse2 + impulse);
			impulse = this.m_limitImpulse2 - oldLimitImpulse;
			P2X = -impulse * this.m_u2.x;
			P2Y = -impulse * this.m_u2.y;
			b2.m_linearVelocity.x += b2.m_invMass * P2X;
			b2.m_linearVelocity.y += b2.m_invMass * P2Y;
			b2.m_angularVelocity += b2.m_invI * (r2X * P2Y - r2Y * P2X);
		}
	},
	SolvePositionConstraints : function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		var s1X = this.m_ground.m_position.x + this.m_groundAnchor1.x;
		var s1Y = this.m_ground.m_position.y + this.m_groundAnchor1.y;
		var s2X = this.m_ground.m_position.x + this.m_groundAnchor2.x;
		var s2Y = this.m_ground.m_position.y + this.m_groundAnchor2.y;
		var r1X;
		var r1Y;
		var r2X;
		var r2Y;
		var p1X;
		var p1Y;
		var p2X;
		var p2Y;
		var length1;
		var length2;
		var C;
		var impulse;
		var oldLimitPositionImpulse;
		var linearError = 0.0; {
			tMat = b1.m_R;
			r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
			r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
			tMat = b2.m_R;
			r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
			r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
			p1X = b1.m_position.x + r1X;
			p1Y = b1.m_position.y + r1Y;
			p2X = b2.m_position.x + r2X;
			p2Y = b2.m_position.y + r2Y;
			this.m_u1.Set(p1X - s1X, p1Y - s1Y);
			this.m_u2.Set(p2X - s2X, p2Y - s2Y);
			length1 = this.m_u1.Length();
			length2 = this.m_u2.Length();
			if (length1 > b2Settings.b2_linearSlop) {
				this.m_u1.Multiply(1.0 / length1);
			} else {
				this.m_u1.SetZero();
			}
			if (length2 > b2Settings.b2_linearSlop) {
				this.m_u2.Multiply(1.0 / length2);
			} else {
				this.m_u2.SetZero();
			}
			C = this.m_constant - length1 - this.m_ratio * length2;
			linearError = b2Math.b2Max(linearError, Math.abs(C));
			C = b2Math.b2Clamp(C, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
			impulse = -this.m_pulleyMass * C;
			p1X = -impulse * this.m_u1.x;
			p1Y = -impulse * this.m_u1.y;
			p2X = -this.m_ratio * impulse * this.m_u2.x;
			p2Y = -this.m_ratio * impulse * this.m_u2.y;
			b1.m_position.x += b1.m_invMass * p1X;
			b1.m_position.y += b1.m_invMass * p1Y;
			b1.m_rotation += b1.m_invI * (r1X * p1Y - r1Y * p1X);
			b2.m_position.x += b2.m_invMass * p2X;
			b2.m_position.y += b2.m_invMass * p2Y;
			b2.m_rotation += b2.m_invI * (r2X * p2Y - r2Y * p2X);
			b1.m_R.Set(b1.m_rotation);
			b2.m_R.Set(b2.m_rotation);
		}
		if (this.m_limitState1 == b2Joint.e_atUpperLimit) {
			tMat = b1.m_R;
			r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
			r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
			p1X = b1.m_position.x + r1X;
			p1Y = b1.m_position.y + r1Y;
			this.m_u1.Set(p1X - s1X, p1Y - s1Y);
			length1 = this.m_u1.Length();
			if (length1 > b2Settings.b2_linearSlop) {
				this.m_u1.x *= 1.0 / length1;
				this.m_u1.y *= 1.0 / length1;
			} else {
				this.m_u1.SetZero();
			}
			C = this.m_maxLength1 - length1;
			linearError = b2Math.b2Max(linearError, -C);
			C = b2Math.b2Clamp(C + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
			impulse = -this.m_limitMass1 * C;
			oldLimitPositionImpulse = this.m_limitPositionImpulse1;
			this.m_limitPositionImpulse1 = b2Math.b2Max(0.0, this.m_limitPositionImpulse1 + impulse);
			impulse = this.m_limitPositionImpulse1 - oldLimitPositionImpulse;
			p1X = -impulse * this.m_u1.x;
			p1Y = -impulse * this.m_u1.y;
			b1.m_position.x += b1.m_invMass * p1X;
			b1.m_position.y += b1.m_invMass * p1Y;
			b1.m_rotation += b1.m_invI * (r1X * p1Y - r1Y * p1X);
			b1.m_R.Set(b1.m_rotation);
		}
		if (this.m_limitState2 == b2Joint.e_atUpperLimit) {
			tMat = b2.m_R;
			r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
			r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
			p2X = b2.m_position.x + r2X;
			p2Y = b2.m_position.y + r2Y;
			this.m_u2.Set(p2X - s2X, p2Y - s2Y);
			length2 = this.m_u2.Length();
			if (length2 > b2Settings.b2_linearSlop) {
				this.m_u2.x *= 1.0 / length2;
				this.m_u2.y *= 1.0 / length2;
			} else {
				this.m_u2.SetZero();
			}
			C = this.m_maxLength2 - length2;
			linearError = b2Math.b2Max(linearError, -C);
			C = b2Math.b2Clamp(C + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
			impulse = -this.m_limitMass2 * C;
			oldLimitPositionImpulse = this.m_limitPositionImpulse2;
			this.m_limitPositionImpulse2 = b2Math.b2Max(0.0, this.m_limitPositionImpulse2 + impulse);
			impulse = this.m_limitPositionImpulse2 - oldLimitPositionImpulse;
			p2X = -impulse * this.m_u2.x;
			p2Y = -impulse * this.m_u2.y;
			b2.m_position.x += b2.m_invMass * p2X;
			b2.m_position.y += b2.m_invMass * p2Y;
			b2.m_rotation += b2.m_invI * (r2X * p2Y - r2Y * p2X);
			b2.m_R.Set(b2.m_rotation);
		}
		return linearError < b2Settings.b2_linearSlop;
	},
	m_ground : null,
	m_groundAnchor1 : new b2Vec2(),
	m_groundAnchor2 : new b2Vec2(),
	m_localAnchor1 : new b2Vec2(),
	m_localAnchor2 : new b2Vec2(),
	m_u1 : new b2Vec2(),
	m_u2 : new b2Vec2(),
	m_constant : null,
	m_ratio : null,
	m_maxLength1 : null,
	m_maxLength2 : null,
	m_pulleyMass : null,
	m_limitMass1 : null,
	m_limitMass2 : null,
	m_pulleyImpulse : null,
	m_limitImpulse1 : null,
	m_limitImpulse2 : null,
	m_limitPositionImpulse1 : null,
	m_limitPositionImpulse2 : null,
	m_limitState1 : 0,
	m_limitState2 : 0
});
b2PulleyJoint.b2_minPulleyLength = b2Settings.b2_lengthUnitsPerMeter;
var b2PulleyJointDef = Class.create();
Object.extend(b2PulleyJointDef.prototype, b2JointDef.prototype);
Object.extend(b2PulleyJointDef.prototype, {
	initialize : function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
		this.groundPoint1 = new b2Vec2();
		this.groundPoint2 = new b2Vec2();
		this.anchorPoint1 = new b2Vec2();
		this.anchorPoint2 = new b2Vec2();
		this.type = b2Joint.e_pulleyJoint;
		this.groundPoint1.Set(-1.0, 1.0);
		this.groundPoint2.Set(1.0, 1.0);
		this.anchorPoint1.Set(-1.0, 0.0);
		this.anchorPoint2.Set(1.0, 0.0);
		this.maxLength1 = 0.5 * b2PulleyJoint.b2_minPulleyLength;
		this.maxLength2 = 0.5 * b2PulleyJoint.b2_minPulleyLength;
		this.ratio = 1.0;
		this.collideConnected = true;
	},
	groundPoint1 : new b2Vec2(),
	groundPoint2 : new b2Vec2(),
	anchorPoint1 : new b2Vec2(),
	anchorPoint2 : new b2Vec2(),
	maxLength1 : null,
	maxLength2 : null,
	ratio : null
});
var b2RevoluteJoint = Class.create();
Object.extend(b2RevoluteJoint.prototype, b2Joint.prototype);
Object.extend(b2RevoluteJoint.prototype, {
	GetAnchor1 : function () {
		var tMat = this.m_body1.m_R;
		return new b2Vec2(this.m_body1.m_position.x + (tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y), this.m_body1.m_position.y + (tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y));
	},
	GetAnchor2 : function () {
		var tMat = this.m_body2.m_R;
		return new b2Vec2(this.m_body2.m_position.x + (tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y), this.m_body2.m_position.y + (tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y));
	},
	GetJointAngle : function () {
		return this.m_body2.m_rotation - this.m_body1.m_rotation;
	},
	GetJointSpeed : function () {
		return this.m_body2.m_angularVelocity - this.m_body1.m_angularVelocity;
	},
	GetMotorTorque : function (invTimeStep) {
		return invTimeStep * this.m_motorImpulse;
	},
	SetMotorSpeed : function (speed) {
		this.m_motorSpeed = speed;
	},
	SetMotorTorque : function (torque) {
		this.m_maxMotorTorque = torque;
	},
	GetReactionForce : function (invTimeStep) {
		var tVec = this.m_ptpImpulse.Copy();
		tVec.Multiply(invTimeStep);
		return tVec;
	},
	GetReactionTorque : function (invTimeStep) {
		return invTimeStep * this.m_limitImpulse;
	},
	initialize : function (def) {
		this.m_node1 = new b2JointNode();
		this.m_node2 = new b2JointNode();
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.K = new b2Mat22();
		this.K1 = new b2Mat22();
		this.K2 = new b2Mat22();
		this.K3 = new b2Mat22();
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_ptpImpulse = new b2Vec2();
		this.m_ptpMass = new b2Mat22();
		var tMat;
		var tX;
		var tY;
		tMat = this.m_body1.m_R;
		tX = def.anchorPoint.x - this.m_body1.m_position.x;
		tY = def.anchorPoint.y - this.m_body1.m_position.y;
		this.m_localAnchor1.x = tX * tMat.col1.x + tY * tMat.col1.y;
		this.m_localAnchor1.y = tX * tMat.col2.x + tY * tMat.col2.y;
		tMat = this.m_body2.m_R;
		tX = def.anchorPoint.x - this.m_body2.m_position.x;
		tY = def.anchorPoint.y - this.m_body2.m_position.y;
		this.m_localAnchor2.x = tX * tMat.col1.x + tY * tMat.col1.y;
		this.m_localAnchor2.y = tX * tMat.col2.x + tY * tMat.col2.y;
		this.m_intialAngle = this.m_body2.m_rotation - this.m_body1.m_rotation;
		this.m_ptpImpulse.Set(0.0, 0.0);
		this.m_motorImpulse = 0.0;
		this.m_limitImpulse = 0.0;
		this.m_limitPositionImpulse = 0.0;
		this.m_lowerAngle = def.lowerAngle;
		this.m_upperAngle = def.upperAngle;
		this.m_maxMotorTorque = def.motorTorque;
		this.m_motorSpeed = def.motorSpeed;
		this.m_enableLimit = def.enableLimit;
		this.m_enableMotor = def.enableMotor;
	},
	K : new b2Mat22(),
	K1 : new b2Mat22(),
	K2 : new b2Mat22(),
	K3 : new b2Mat22(),
	PrepareVelocitySolver : function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		this.K1.col1.x = invMass1 + invMass2;
		this.K1.col2.x = 0.0;
		this.K1.col1.y = 0.0;
		this.K1.col2.y = invMass1 + invMass2;
		this.K2.col1.x = invI1 * r1Y * r1Y;
		this.K2.col2.x = -invI1 * r1X * r1Y;
		this.K2.col1.y = -invI1 * r1X * r1Y;
		this.K2.col2.y = invI1 * r1X * r1X;
		this.K3.col1.x = invI2 * r2Y * r2Y;
		this.K3.col2.x = -invI2 * r2X * r2Y;
		this.K3.col1.y = -invI2 * r2X * r2Y;
		this.K3.col2.y = invI2 * r2X * r2X;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.AddM(this.K3);
		this.K.Invert(this.m_ptpMass);
		this.m_motorMass = 1.0 / (invI1 + invI2);
		if (this.m_enableMotor == false) {
			this.m_motorImpulse = 0.0;
		}
		if (this.m_enableLimit) {
			var jointAngle = b2.m_rotation - b1.m_rotation - this.m_intialAngle;
			if (b2Math.b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2.0 * b2Settings.b2_angularSlop) {
				this.m_limitState = b2Joint.e_equalLimits;
			} else if (jointAngle <= this.m_lowerAngle) {
				if (this.m_limitState != b2Joint.e_atLowerLimit) {
					this.m_limitImpulse = 0.0;
				}
				this.m_limitState = b2Joint.e_atLowerLimit;
			} else if (jointAngle >= this.m_upperAngle) {
				if (this.m_limitState != b2Joint.e_atUpperLimit) {
					this.m_limitImpulse = 0.0;
				}
				this.m_limitState = b2Joint.e_atUpperLimit;
			} else {
				this.m_limitState = b2Joint.e_inactiveLimit;
				this.m_limitImpulse = 0.0;
			}
		} else {
			this.m_limitImpulse = 0.0;
		}
		if (b2World.s_enableWarmStarting) {
			b1.m_linearVelocity.x -= invMass1 * this.m_ptpImpulse.x;
			b1.m_linearVelocity.y -= invMass1 * this.m_ptpImpulse.y;
			b1.m_angularVelocity -= invI1 * ((r1X * this.m_ptpImpulse.y - r1Y * this.m_ptpImpulse.x) + this.m_motorImpulse + this.m_limitImpulse);
			b2.m_linearVelocity.x += invMass2 * this.m_ptpImpulse.x;
			b2.m_linearVelocity.y += invMass2 * this.m_ptpImpulse.y;
			b2.m_angularVelocity += invI2 * ((r2X * this.m_ptpImpulse.y - r2Y * this.m_ptpImpulse.x) + this.m_motorImpulse + this.m_limitImpulse);
		} else {
			this.m_ptpImpulse.SetZero();
			this.m_motorImpulse = 0.0;
			this.m_limitImpulse = 0.0;
		}
		this.m_limitPositionImpulse = 0.0;
	},
	SolveVelocityConstraints : function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var oldLimitImpulse;
		var ptpCdotX = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y) - b1.m_linearVelocity.x - (-b1.m_angularVelocity * r1Y);
		var ptpCdotY = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X) - b1.m_linearVelocity.y - (b1.m_angularVelocity * r1X);
		var ptpImpulseX =  - (this.m_ptpMass.col1.x * ptpCdotX + this.m_ptpMass.col2.x * ptpCdotY);
		var ptpImpulseY =  - (this.m_ptpMass.col1.y * ptpCdotX + this.m_ptpMass.col2.y * ptpCdotY);
		this.m_ptpImpulse.x += ptpImpulseX;
		this.m_ptpImpulse.y += ptpImpulseY;
		b1.m_linearVelocity.x -= b1.m_invMass * ptpImpulseX;
		b1.m_linearVelocity.y -= b1.m_invMass * ptpImpulseY;
		b1.m_angularVelocity -= b1.m_invI * (r1X * ptpImpulseY - r1Y * ptpImpulseX);
		b2.m_linearVelocity.x += b2.m_invMass * ptpImpulseX;
		b2.m_linearVelocity.y += b2.m_invMass * ptpImpulseY;
		b2.m_angularVelocity += b2.m_invI * (r2X * ptpImpulseY - r2Y * ptpImpulseX);
		if (this.m_enableMotor && this.m_limitState != b2Joint.e_equalLimits) {
			var motorCdot = b2.m_angularVelocity - b1.m_angularVelocity - this.m_motorSpeed;
			var motorImpulse = -this.m_motorMass * motorCdot;
			var oldMotorImpulse = this.m_motorImpulse;
			this.m_motorImpulse = b2Math.b2Clamp(this.m_motorImpulse + motorImpulse, -step.dt * this.m_maxMotorTorque, step.dt * this.m_maxMotorTorque);
			motorImpulse = this.m_motorImpulse - oldMotorImpulse;
			b1.m_angularVelocity -= b1.m_invI * motorImpulse;
			b2.m_angularVelocity += b2.m_invI * motorImpulse;
		}
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit) {
			var limitCdot = b2.m_angularVelocity - b1.m_angularVelocity;
			var limitImpulse = -this.m_motorMass * limitCdot;
			if (this.m_limitState == b2Joint.e_equalLimits) {
				this.m_limitImpulse += limitImpulse;
			} else if (this.m_limitState == b2Joint.e_atLowerLimit) {
				oldLimitImpulse = this.m_limitImpulse;
				this.m_limitImpulse = b2Math.b2Max(this.m_limitImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitImpulse - oldLimitImpulse;
			} else if (this.m_limitState == b2Joint.e_atUpperLimit) {
				oldLimitImpulse = this.m_limitImpulse;
				this.m_limitImpulse = b2Math.b2Min(this.m_limitImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitImpulse - oldLimitImpulse;
			}
			b1.m_angularVelocity -= b1.m_invI * limitImpulse;
			b2.m_angularVelocity += b2.m_invI * limitImpulse;
		}
	},
	SolvePositionConstraints : function () {
		var oldLimitImpulse;
		var limitC;
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		var positionError = 0.0;
		var tMat;
		tMat = b1.m_R;
		var r1X = tMat.col1.x * this.m_localAnchor1.x + tMat.col2.x * this.m_localAnchor1.y;
		var r1Y = tMat.col1.y * this.m_localAnchor1.x + tMat.col2.y * this.m_localAnchor1.y;
		tMat = b2.m_R;
		var r2X = tMat.col1.x * this.m_localAnchor2.x + tMat.col2.x * this.m_localAnchor2.y;
		var r2Y = tMat.col1.y * this.m_localAnchor2.x + tMat.col2.y * this.m_localAnchor2.y;
		var p1X = b1.m_position.x + r1X;
		var p1Y = b1.m_position.y + r1Y;
		var p2X = b2.m_position.x + r2X;
		var p2Y = b2.m_position.y + r2Y;
		var ptpCX = p2X - p1X;
		var ptpCY = p2Y - p1Y;
		positionError = Math.sqrt(ptpCX * ptpCX + ptpCY * ptpCY);
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		this.K1.col1.x = invMass1 + invMass2;
		this.K1.col2.x = 0.0;
		this.K1.col1.y = 0.0;
		this.K1.col2.y = invMass1 + invMass2;
		this.K2.col1.x = invI1 * r1Y * r1Y;
		this.K2.col2.x = -invI1 * r1X * r1Y;
		this.K2.col1.y = -invI1 * r1X * r1Y;
		this.K2.col2.y = invI1 * r1X * r1X;
		this.K3.col1.x = invI2 * r2Y * r2Y;
		this.K3.col2.x = -invI2 * r2X * r2Y;
		this.K3.col1.y = -invI2 * r2X * r2Y;
		this.K3.col2.y = invI2 * r2X * r2X;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.AddM(this.K3);
		this.K.Solve(b2RevoluteJoint.tImpulse, -ptpCX, -ptpCY);
		var impulseX = b2RevoluteJoint.tImpulse.x;
		var impulseY = b2RevoluteJoint.tImpulse.y;
		b1.m_position.x -= b1.m_invMass * impulseX;
		b1.m_position.y -= b1.m_invMass * impulseY;
		b1.m_rotation -= b1.m_invI * (r1X * impulseY - r1Y * impulseX);
		b1.m_R.Set(b1.m_rotation);
		b2.m_position.x += b2.m_invMass * impulseX;
		b2.m_position.y += b2.m_invMass * impulseY;
		b2.m_rotation += b2.m_invI * (r2X * impulseY - r2Y * impulseX);
		b2.m_R.Set(b2.m_rotation);
		var angularError = 0.0;
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit) {
			var angle = b2.m_rotation - b1.m_rotation - this.m_intialAngle;
			var limitImpulse = 0.0;
			if (this.m_limitState == b2Joint.e_equalLimits) {
				limitC = b2Math.b2Clamp(angle, -b2Settings.b2_maxAngularCorrection, b2Settings.b2_maxAngularCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				angularError = b2Math.b2Abs(limitC);
			} else if (this.m_limitState == b2Joint.e_atLowerLimit) {
				limitC = angle - this.m_lowerAngle;
				angularError = b2Math.b2Max(0.0, -limitC);
				limitC = b2Math.b2Clamp(limitC + b2Settings.b2_angularSlop, -b2Settings.b2_maxAngularCorrection, 0.0);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Max(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			} else if (this.m_limitState == b2Joint.e_atUpperLimit) {
				limitC = angle - this.m_upperAngle;
				angularError = b2Math.b2Max(0.0, limitC);
				limitC = b2Math.b2Clamp(limitC - b2Settings.b2_angularSlop, 0.0, b2Settings.b2_maxAngularCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Min(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			}
			b1.m_rotation -= b1.m_invI * limitImpulse;
			b1.m_R.Set(b1.m_rotation);
			b2.m_rotation += b2.m_invI * limitImpulse;
			b2.m_R.Set(b2.m_rotation);
		}
		return positionError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
	},
	m_localAnchor1 : new b2Vec2(),
	m_localAnchor2 : new b2Vec2(),
	m_ptpImpulse : new b2Vec2(),
	m_motorImpulse : null,
	m_limitImpulse : null,
	m_limitPositionImpulse : null,
	m_ptpMass : new b2Mat22(),
	m_motorMass : null,
	m_intialAngle : null,
	m_lowerAngle : null,
	m_upperAngle : null,
	m_maxMotorTorque : null,
	m_motorSpeed : null,
	m_enableLimit : null,
	m_enableMotor : null,
	m_limitState : 0
});
b2RevoluteJoint.tImpulse = new b2Vec2();
var b2RevoluteJointDef = Class.create();
Object.extend(b2RevoluteJointDef.prototype, b2JointDef.prototype);
Object.extend(b2RevoluteJointDef.prototype, {
	initialize : function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
		this.type = b2Joint.e_revoluteJoint;
		this.anchorPoint = new b2Vec2(0.0, 0.0);
		this.lowerAngle = 0.0;
		this.upperAngle = 0.0;
		this.motorTorque = 0.0;
		this.motorSpeed = 0.0;
		this.enableLimit = false;
		this.enableMotor = false;
	},
	anchorPoint : null,
	lowerAngle : null,
	upperAngle : null,
	motorTorque : null,
	motorSpeed : null,
	enableLimit : null,
	enableMotor : null
});
function drawWorld(world, stage) {
	for (var j = world.m_jointList; j; j = j.m_next)
		drawJoint(j, stage);
	for (var b = world.m_bodyList; b; b = b.m_next) {
		for (var s = b.GetShapeList(); s != null; s = s.GetNext())
			drawShape(s, stage);
	}
}
function drawJoint(joint, stage, color) {
	var b1 = joint.m_body1;
	var b2 = joint.m_body2;
	var x1 = b1.m_position;
	var x2 = b2.m_position;
	var p1 = joint.GetAnchor1();
	var p2 = joint.GetAnchor2();
	if (!color)
		color = '#00f';
	switch (joint.m_type) {
	case b2Joint.e_distanceJoint:
		stage.drawLine(p1.x, p1.y, p2.x, p2.y, 1, color);
		break;
	case b2Joint.e_pulleyJoint:
		break;
	default:
		if (b1 == world.m_groundBody) {
			stage.drawLine(p1.x, p1.y, x2.x, x2.y, 1, color);
		} else if (b2 == world.m_groundBody) {
			stage.drawLine(p1.x, p1.y, x1.x, x1.y, 1, color);
		} else {
			stage.drawLine(x1.x, x1.y, p1.x, p1.y, 1, color);
			stage.drawLine(p1.x, p1.y, x2.x, x2.y, 1, color);
			stage.drawLine(x2.x, x2.y, p2.x, p2.y, 1, color);
		}
		break;
	}
}
function drawShape(shape, stage) {
	switch (shape.m_type) {
	case b2Shape.e_circleShape: {
			var color = "#33f";
			var circle = shape;
			var pos = circle.m_position;
			var r = circle.m_radius;
			var segments = 16.0;
			var theta = 0.0;
			var dtheta = 2.0 * Math.PI / segments;
			var x = pos.x + r;
			var y = pos.y;
			for (var i = 0; i < segments; i++) {
				var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
				var v = b2Math.AddVV(pos, d);
				stage.drawLine(x, y, v.x, v.y, 1, color);
				x = v.x;
				y = v.y;
				theta += dtheta;
			}
			stage.drawLine(x, y, pos.x + r, pos.y, 1, color);
			var ax = circle.m_R.col1;
			var pos2 = new b2Vec2(pos.x + r * ax.x, pos.y + r * ax.y);
			stage.drawLine(pos.x, pos.y, pos2.x, pos2.y, 1, color);
		}
		break;
	case b2Shape.e_polyShape: {
			var poly = shape;
			var tV = b2Math.AddVV(poly.m_position, b2Math.b2MulMV(poly.m_R, poly.m_vertices[0]));
			var x = tV.x;
			var y = tV.y;
			for (var i = 0; i < poly.m_vertexCount; i++) {
				var v = b2Math.AddVV(poly.m_position, b2Math.b2MulMV(poly.m_R, poly.m_vertices[i]));
				stage.drawLine(x, y, v.x, v.y, 1, "#fff");
				x = v.x;
				y = v.y;
			}
			stage.drawLine(x, y, tV.x, tV.y, 1, "#fff");
		}
		break;
	}
};
var stage;
var world;
var bitmaps;
var mc;
var check;
var gameState = 0;
var fps = 24;
var curLevel = 0;
var checkState = false;
var checkBallState = 0;
var STATE_LOGO = 1;
var STATE_MENU = 2;
var STATE_SELECT_LEVEL = 3;
var STATE_GAME = 4;
var STATE_LOOSE = 5;
var STATE_VICTORY = 6;
var STATE_PREPARE = 7;
var showDebugDraw = false;
var GET;
var data = [];
var gameScore = 100;
var gamePaused = false;
window.onload = function () {
	GET = Utils.parseGet();
	Utils.addMobileListeners();
	Utils.mobileCorrectPixelRatio();
	ExternalAPI.init();
	setTimeout(startLoad, 600);
};
function startLoad() {
	var resolution = Utils.getMobileScreenResolution(false);
	Utils.globalScale = resolution.scale;
	if (GET["debug"] == 1) {
		resolution.width = 320;
		resolution.height = 480;
		Utils.globalScale = 1;
	}
	Utils.createLayout(document.getElementById("main_container"), resolution, false);
	Utils.addEventListener("fitlayout", function () {
		if (stage) {
			stage.drawScene(document.getElementById("screen"));
			buildBackground();
		}
	});
	Utils.addEventListener("lockscreen", function () {
		if (stage && stage.started)
			stage.stop();
	});
	Utils.addEventListener("unlockscreen", function () {
		if (stage && !stage.started)
			stage.start();
	});
	Utils.mobileHideAddressBar();
	if (GET["debug"] != 1)
		Utils.checkOrientation(false);
	var path = "images/" + Utils.globalScale + "/";
	var preloader = new ImagesPreloader();
	for (var i = 0; i < objects.length; i++) {
		data.push({
			name : objects[i].name,
			src : path + objects[i].image
		});
	}
	data.push({
		name : "blank",
		src : "images/blank.gif"
	});
	data.push({
		name : "back",
		src : path + "back.jpg"
	});
	data.push({
		name : "back_select_level",
		src : path + "back_select_level.jpg"
	});
	data.push({
		name : "sl_enabled",
		src : path + "sl_enabled.png"
	});
	data.push({
		name : "sl_disabled",
		src : path + "sl_disabled.png"
	});
	data.push({
		name : "back_game",
		src : path + "back_game.jpg"
	});
	data.push({
		name : "button_play",
		src : path + "button_play.png"
	});
	data.push({
		name : "button_scores",
		src : path + "button_scores.png"
	});
	data.push({
		name : "button_next",
		src : path + "button_next.png"
	});
	data.push({
		name : "button_restart",
		src : path + "button_restart.png"
	});
	data.push({
		name : "button_menu",
		src : path + "button_menu.png"
	});
	data.push({
		name : "button_exit",
		src : path + "button_exit.png"
	});
	data.push({
		name : "button_play2",
		src : path + "button_play2.png"
	});
	data.push({
		name : "button_scores2",
		src : path + "button_scores2.png"
	});
	data.push({
		name : "button_continue2",
		src : path + "button_continue2.png"
	});
	data.push({
		name : "button_sl2",
		src : path + "button_sl2.png"
	});
	data.push({
		name : "button_mm2",
		src : path + "button_mm2.png"
	});
	data.push({
		name : "popup",
		src : path + "popup.png"
	});
	data.push({
		name : "check",
		src : path + "check.png"
	});
	data.push({
		name : "logo",
		src : path + "spilgames.jpg"
	});
	data.push({
		name : "hourglass",
		src : path + "hourglass.png"
	});
	data.push({
		name : "font1",
		src : path + "font1.png"
	});
	data.push({
		name : "text1",
		src : path + "text1.png"
	});
	data.push({
		name : "text2",
		src : path + "text2.png"
	});
	data.push({
		name : "text3",
		src : path + "text3.png"
	});
	data.push({
		name : "arrow",
		src : path + "arrow.png"
	});
	data.push({
		name : "help1",
		src : path + "help1.png"
	});
	data.push({
		name : "help2",
		src : path + "help2.png"
	});
	data.push({
		name : "help3",
		src : path + "help3.png"
	});
	data.push({
		name : "help4",
		src : path + "help4.png"
	});
	data.push({
		name : "help5",
		src : path + "help5.png"
	});
	preloader.load(data, loadImagesEnd, Utils.showLoadProgress);
}
function loadImagesEnd(data) {
	document.getElementById('progress_container').style.display = 'none';
	document.getElementById('screen_container').style.display = 'block';
	document.getElementById('screen_background_container').style.display = 'block';
	curLevel = 0;
	getLevelsScores();
	bitmaps = data;
	if (GET["debug"] != 1) {
		gameState = STATE_MENU;
		createScene();
	}
}
function getLevelsScores() {
	levelsScores = [];
	var s = Utils.getCookie('jf_levels_scores') + "";
	if (s != "null") {
		levelsScores = s.split(',');
	}
	for (var i = 0; i < 20; i++) {
		if (!levelsScores[i])
			levelsScores[i] = -1;
		levelsScores[i] *= 1;
	}
}
function saveLevelsScores() {
	var s = '';
	for (var i = 0; i < 20; i++) {
		s += levelsScores[i];
		if (i < 19)
			s += ',';
	}
	Utils.setCookie('jf_levels_scores', s);
}
function getTotalLevelsScores() {
	var sum = 0;
	for (var i = 0; i < 20; i++) {
		if (levelsScores[i] >= 0)
			sum += levelsScores[i];
	}
	return sum;
}
function createStage() {
	if (stage) {
		stage.destroy();
		stage.stop();
	}
	stage = new Stage('screen', 320, 480, false);
	stage.delay = 1000 / fps;
	stage.onpretick = mainLoop;
	stage.onposttick = debugDraw;
	stage.showFPS = false;
	stage.pixelMouseDownEvent = true;
}
function createScene() {
	createStage();
	if (gameState == STATE_LOGO) {
		stage.fillColor = '#000';
		mc = new Sprite(bitmaps.logo, 320, 480, 1);
		mc.opacity = 0;
		mc.x = 160;
		mc.y = 240;
		mc.onenterframe = showLogo;
		stage.addChild(mc);
	}
	if (gameState == STATE_MENU) {
		stage.fillColor = false;
		mc = new Sprite(bitmaps.back, 320, 480, 1);
		mc.x = 160;
		mc.y = 240;
		mc.static = true;
		stage.addChild(mc);
		mc = new Sprite(bitmaps.button_play2, 130, 49, 1);
		mc.x = 165;
		mc.y = 220;
		mc.onclick = showSelectLevel;
		stage.addChild(mc);
		mc = new Sprite(bitmaps.button_scores2, 130, 49, 1);
		mc.x = 165;
		mc.y = 280;
		mc.onclick = showHighscores;
		stage.addChild(mc);
	}
	if (gameState == STATE_SELECT_LEVEL) {
		mc = new Sprite(bitmaps.back_select_level, 320, 480, 1);
		mc.x = 160;
		mc.y = 240;
		mc.static = true;
		stage.addChild(mc);
		mc = new Sprite(bitmaps.button_exit, 101, 49, 1);
		mc.x = 165;
		mc.y = 360;
		mc.onclick = gotoMenu;
		stage.addChild(mc);
		var lastLevel = -1;
		for (var i = 0; i < 20; i++) {
			if (levelsScores[i] >= 0)
				lastLevel = i;
		}
		lastLevel++;
		var bm,
		dc;
		for (var i = 0; i < 20; i++) {
			if (i > lastLevel)
				bm = bitmaps.sl_disabled;
			else
				bm = bitmaps.sl_enabled;
			mc = new Sprite(bm, 53, 54, 1);
			var n = Math.floor(i / 5);
			mc.x = (i - n * 5) * 58 + 45;
			mc.y = n * 58 + 110;
			stage.addChild(mc);
			if (i <= lastLevel) {
				mc.levelId = i;
				mc.onclick = selectLevel;
			}
			if (i < lastLevel)
				drawText(levelsScores[i], mc.x + 1, mc.y, bitmaps.font1, 16);
		}
	}
	buildBackground();
	stage.start();
}
function selectLevel(e) {
	curLevel = e.target.levelId;
	if (curLevel > levels.length - 1)
		curLevel = levels.length - 1;
	prepareLevel(curLevel);
}
function drawText(text, x, y, font, size, leftAlign) {
	text += "";
	if (leftAlign) {}
	else
		x = x - (text.length - 1) / 2 * size;
	for (var i = 0; i < text.length; i++) {
		mc = new Sprite(font, size, size, 10);
		mc.gotoAndStop(text.substr(i, 1));
		mc.x = x + i * size;
		mc.y = y;
		stage.addChild(mc);
	}
}
function showHighscores() {
	/*if (ExternalAPI.check()) {
		ExternalAPI.showScoreboard(function () {});
	}*/
	window.location.href='http://blog.96xy.cn';
}
function submitScores() {
	if (ExternalAPI.check()) {
		if (ExternalAPI.checkUserLoggedIn())
			insertScores();
	}
}
function insertScores() {
	ExternalAPI.submitScores(getTotalLevelsScores(), function () {});
}
function showLogo(e) {
	if (e.target.opacity < 1)
		e.target.opacity += 0.05;
	if (gameState == STATE_LOGO && e.target.opacity >= 1) {
		gameState = STATE_MENU;
		setTimeout(createScene, 2000);
	}
}
function showSelectLevel() {
	gameState = STATE_SELECT_LEVEL;
	createScene();
}
function findObject(name) {
	for (var i = 0; i < objects.length; i++) {
		if (objects[i].name == name)
			return objects[i];
	}
	return false;
}
function prepareLevel(n) {
	if (gameState == STATE_PREPARE)
		return;
	gameState = STATE_PREPARE;
	if (stage) {
		mc = new Sprite(bitmaps.hourglass, 100, 150, 1);
		mc.x = 160;
		mc.y = 240;
		stage.addChild(mc);
	}
	setTimeout("startLevel(" + n + ")", (1000 / fps) * 3);
}
var scoresMc = [];
function startLevel(n, data) {
	world = box2DCreateWorld();
	b2Settings.b2_timeToSleep = 0.05;
	b2Settings.b2_linearSleepTolerance = 1;
	b2Settings.b2_angularSleepTolerance = 0.1;
	createStage();
	mc = new Sprite(bitmaps.back_game, 320, 480, 1);
	mc.x = 160;
	mc.y = 240;
	mc.static = true;
	stage.addChild(mc);
	mc = new Sprite(bitmaps.button_restart, 101, 49, 1);
	mc.x = 265;
	mc.y = 30;
	mc.onclick = restartLevel;
	stage.addChild(mc);
	mc.static = true;
	mc = new Sprite(bitmaps.button_menu, 101, 49, 1);
	mc.x = 55;
	mc.y = 30;
	mc.onclick = showSubMenu;
	stage.addChild(mc);
	mc.static = true;
	mc = new Sprite(bitmaps.text1, 81, 16, 1);
	mc.x = 160;
	mc.y = 14;
	stage.addChild(mc);
	mc.static = true;
	gameScore = 100;
	scoresMc = [];
	for (var i = 0; i < 3; i++) {
		mc = new Sprite(bitmaps.font1, 16, 16, 10);
		mc.stop();
		mc.visible = false;
		stage.addChild(mc);
		scoresMc.push(mc);
	}
	var levelObjs;
	if (data) {
		levelObjs = data.objects;
		levels = [data];
		gameState = STATE_GAME;
	} else
		levelObjs = levels[n].objects;
	if (!levels[n])
		return;
	curLevel = n;
	bases = [];
	var lo,
	ob,
	body,
	points,
	density,
	restitution,
	friction,
	x,
	y,
	width,
	height;
	for (var i = 0; i < levelObjs.length; i++) {
		lo = levelObjs[i];
		ob = findObject(lo.type);
		mc = new Sprite(bitmaps[ob.name], ob.width, ob.height, ob.frames);
		mc.x = lo.x;
		mc.y = lo.y;
		mc.rotation = lo.rotation;
		stage.addChild(mc);
		stage.setZIndex(mc, 10);
		if (ob.bodyType != NONE) {
			density = lo.density ? lo.density : ob.density;
			restitution = lo.restitution ? lo.restitution : ob.restitution;
			friction = lo.friction ? lo.friction : ob.friction;
			width = ob.bodyWidth ? ob.bodyWidth : ob.width;
			height = ob.bodyHeight ? ob.bodyHeight : ob.height;
			x = lo.x;
			y = lo.y;
			if (ob.bodyPosCorrect) {
				x += ob.bodyPosCorrect.x;
				y += ob.bodyPosCorrect.y;
				mc.syncX = ob.bodyPosCorrect.x;
				mc.syncY = ob.bodyPosCorrect.y;
				mc.onbox2dsync = spritesSync;
			}
			if (ob.bodyType == BOX)
				body = box2DCreateBox(world, x, y, width / 2, height / 2, lo.rotation, ob.fixed, density, restitution, friction);
			if (ob.bodyType == CIRCLE)
				body = box2DCreateCircle(world, x, y, width / 2, lo.rotation, ob.fixed, density, restitution, friction);
			if (ob.bodyType == POLY)
				body = box2DCreatePoly(world, x, y, ob.points, lo.rotation, ob.fixed, density, restitution, friction);
			if (ob.joints) {
				for (var n = 0; n < ob.joints.length; n++) {
					if (ob.joints[n].type == "pivot") {
						var point = new Vector(ob.joints[n].x, ob.joints[n].y);
						if (lo.rotation != 0)
							point.rotate(-lo.rotation);
						point.x += lo.x;
						point.y += lo.y;
						var pivot = box2DCreateCircle(world, point.x, point.y, 1, 0, true, 0.01, 0, 0);
						box2DCreateRevoluteJoint(world, pivot, body, pivot.GetCenterPosition());
					}
				}
			}
			body.sprite = mc;
			mc.box2dBody = body;
		}
		if (ob.remove) {
			mc.onmousedown = removeObject;
			mc.eventsWhenInvisible = true;
		}
		if (GET["debug"] != 1 && ob.fixed)
			mc.static = true;
		mc.obType = ob.type;
		if (mc.obType == COOLER_LEFT || mc.obType == COOLER_RIGHT) {
			mc.active = (lo.custom ? false : true);
			changeCoolerState({
				target : mc
			});
			mc.onclick = changeCoolerState;
			mc.onenterframe = coolerAnimationControl;
		}
		if (mc.obType == TELEPORT) {
			mc.active = (lo.custom ? false : true);
			changeTeleportState({
				target : mc
			});
			mc.onclick = changeTeleportState;
		}
		if (mc.obType == PERS || mc.obType == PLATFORM)
			stage.setZIndex(mc, 100);
		mc.grav = false;
	}
	if (GET["debug"] != 1) {
		if (curLevel == 0) {
			mc = new Sprite(bitmaps.help1, 194, 60, 1);
			mc.x = 180;
			mc.y = 120;
			mc.static = true;
			stage.addChild(mc);
			mc = new Sprite(bitmaps.arrow, 40, 50, 1);
			mc.x = 180;
			mc.y = 190;
			mc.static = true;
			stage.addChild(mc);
		}
		if (curLevel == 3) {
			mc = new Sprite(bitmaps.help2, 130, 32, 1);
			mc.x = 70;
			mc.y = 200;
			mc.static = true;
			stage.addChild(mc);
			mc = new Sprite(bitmaps.arrow, 40, 50, 1);
			mc.x = 55;
			mc.y = 155;
			mc.rotation = Math.PI;
			mc.static = true;
			stage.addChild(mc);
		}
		if (curLevel == 4) {
			mc = new Sprite(bitmaps.help3, 150, 60, 1);
			mc.x = 80;
			mc.y = 200;
			mc.static = true;
			stage.addChild(mc);
			mc = new Sprite(bitmaps.arrow, 40, 50, 1);
			mc.x = 148;
			mc.y = 145;
			mc.rotation = Math.PI;
			mc.static = true;
			stage.addChild(mc);
		}
		if (curLevel == 5) {
			mc = new Sprite(bitmaps.help4, 130, 34, 1);
			mc.x = 250;
			mc.y = 270;
			mc.static = true;
			stage.addChild(mc);
			mc = new Sprite(bitmaps.arrow, 40, 50, 1);
			mc.x = 250;
			mc.y = 315;
			mc.static = true;
			stage.addChild(mc);
		}
		if (curLevel == 6) {
			mc = new Sprite(bitmaps.help5, 130, 34, 1);
			mc.x = 150;
			mc.y = 250;
			mc.static = true;
			stage.addChild(mc);
			mc = new Sprite(bitmaps.arrow, 40, 50, 1);
			mc.x = 150;
			mc.y = 300;
			mc.static = true;
			stage.addChild(mc);
		}
	}
	checkState = false;
	checkBallState = 0;
	gameState = STATE_GAME;
	buildBackground();
	stage.start();
	drawScore();
	gamePaused = false;
}
var smItems = [];
function showSubMenu() {
	smItems = [];
	mc = new Sprite(bitmaps.back, 320, 480, 1);
	mc.x = 160;
	mc.y = 240;
	stage.addChild(mc);
	mc.onclick = function () {
		return false;
	}
	smItems.push(mc);
	mc = new Sprite(bitmaps.button_continue2, 130, 49, 1);
	mc.x = 165;
	mc.y = 220;
	mc.onclick = closeSubMenu;
	stage.addChild(mc);
	smItems.push(mc);
	mc = new Sprite(bitmaps.button_sl2, 130, 49, 1);
	mc.x = 165;
	mc.y = 280;
	mc.onclick = showSelectLevel;
	stage.addChild(mc);
	smItems.push(mc);
	mc = new Sprite(bitmaps.button_mm2, 130, 49, 1);
	mc.x = 165;
	mc.y = 340;
	mc.onclick = gotoMenu;
	stage.addChild(mc);
	smItems.push(mc);
	gamePaused = true;
}
function closeSubMenu() {
	for (var i = 0; i < smItems.length; i++) {
		stage.removeChild(smItems[i]);
	}
	smItems = [];
	gamePaused = false;
	drawScore();
}
var tmScore;
function drawScore() {
	if (gamePaused)
		return;
	clearTimeout(tmScore);
	if (gameState != STATE_GAME)
		return;
	gameScore--;
	if (gameScore < 0)
		gameScore = 0;
	var s = gameScore + "";
	var o;
	x = 160 - (s.length - 1) / 2 * 16;
	for (var i = 0; i < 3; i++)
		scoresMc[i].visible = false;
	for (var i = 0; i < s.length; i++) {
		o = scoresMc[i];
		o.gotoAndStop(s.substr(i, 1) * 1);
		o.x = x + i * 16;
		o.y = 36;
		o.visible = true;
	}
	tmScore = setTimeout(drawScore, 1000);
}
function changeCoolerState(e) {
	if (gameState != STATE_GAME && gameState != STATE_PREPARE)
		return;
	e.target.active = !e.target.active;
	if (e.target.active)
		e.target.gotoAndPlay(1);
	else
		e.target.gotoAndStop(0);
}
function coolerAnimationControl(e) {
	if (e.target.currentFrame == 4)
		e.target.currentFrame = 1;
}
function changeTeleportState(e) {
	if (gameState != STATE_GAME && gameState != STATE_PREPARE)
		return;
	e.target.active = !e.target.active;
	if (e.target.active)
		e.target.play();
	else
		e.target.stop();
}
function buildBackground() {
	if (world)
		stage.box2dSync(world);
	stage.drawScene(document.getElementById("screen_background"), true);
}
function gotoMenu() {
	gameState = STATE_MENU;
	createScene();
}
function removeObject(e) {
	if (checkState || gameState != STATE_GAME)
		return;
	deleteObject(e.target);
	addCheck();
	buildBackground();
}
function addCheck(ball) {
	if (!ball)
		checkState = true;
	check = new Sprite(bitmaps.check, 23, 23, 5);
	check.stop();
	check.x = 160;
	check.y = 240;
	check.ball = ball;
	stage.addChild(check);
	setTimeout(changeCheck, 200);
}
function changeCheck() {
	check.currentFrame++;
	if (check.currentFrame >= 5) {
		check.destroy = true;
		if (check.ball) {
			if (checkBallState == 1)
				checkBallState = 2;
		} else
			checkState = false;
	} else
		setTimeout(changeCheck, 250);
}
function showLoose() {
	clearTimeout(tmScore);
	gameState = STATE_LOOSE;
	mc = new Sprite(bitmaps.popup, 320, 480, 1);
	mc.x = 160;
	mc.y = 240;
	stage.addChild(mc);
	mc = new Sprite(bitmaps.text3, 130, 16, 1);
	mc.x = 170;
	mc.y = 180;
	stage.addChild(mc);
	mc = new Sprite(bitmaps.button_restart, 101, 49, 1);
	mc.x = 245;
	mc.y = 263;
	mc.onclick = restartLevel;
	stage.addChild(mc);
	mc = new Sprite(bitmaps.button_exit, 101, 49, 1);
	mc.x = 100;
	mc.y = 263;
	mc.onclick = gotoMenu;
	stage.addChild(mc);
}
function restartLevel() {
	prepareLevel(curLevel);
}
function showVictory() {
	clearTimeout(tmScore);
	gameState = STATE_VICTORY;
	mc = new Sprite(bitmaps.popup, 320, 480, 1);
	mc.x = 160;
	mc.y = 240;
	stage.addChild(mc);
	mc = new Sprite(bitmaps.text1, 81, 16, 1);
	mc.x = 135;
	mc.y = 170;
	stage.addChild(mc);
	mc = new Sprite(bitmaps.text2, 80, 16, 1);
	mc.x = 135;
	mc.y = 200;
	stage.addChild(mc);
	if (curLevel < 19) {
		mc = new Sprite(bitmaps.button_next, 101, 49, 1);
		mc.x = 245;
		mc.y = 263;
		mc.onclick = nextLevel;
		stage.addChild(mc);
	} else {
		mc = new Sprite(bitmaps.button_exit, 101, 49, 1);
		mc.x = 245;
		mc.y = 263;
		mc.onclick = gotoMenu;
		stage.addChild(mc);
	}
	mc = new Sprite(bitmaps.button_restart, 101, 49, 1);
	mc.x = 100;
	mc.y = 263;
	mc.onclick = restartLevel;
	stage.addChild(mc);
	if (levelsScores[curLevel] < gameScore) {
		levelsScores[curLevel] = gameScore;
		saveLevelsScores();
	}
	drawText(gameScore, 190, 170, bitmaps.font1, 16, true);
	drawText(getTotalLevelsScores(), 190, 200, bitmaps.font1, 16, true);
	submitScores();
}
function nextLevel() {
	curLevel++;
	if (curLevel > levels.length - 1)
		curLevel = 0;
	prepareLevel(curLevel);
}
function deleteObject(sprite) {
	sprite.destroy = true;
	if (sprite.box2dBody)
		sprite.box2dBody.destroy = true;
}
function mainLoop() {
	if (gameState != STATE_GAME)
		return;
	if (gamePaused)
		return;
	var perses = [];
	var platforms = [];
	var teleports = [];
	var coolers = [];
	var grav1 = [];
	var grav2 = [];
	var traps = [];
	world.Step(1 / 38, 1);
	world.Step(1 / 38, 1);
	stage.box2dSync(world);
	for (var i = 0; i < stage.objects.length; i++) {
		if (stage.objects[i].x < -200 || stage.objects[i].x > 560 || stage.objects[i].y > 620 || stage.objects[i].y < -100) {
			deleteObject(stage.objects[i]);
		}
		if (stage.objects[i].obType == PERS)
			perses.push(stage.objects[i]);
		if (stage.objects[i].obType == PLATFORM)
			platforms.push(stage.objects[i]);
		if (stage.objects[i].obType == TELEPORT && stage.objects[i].active)
			teleports.push(stage.objects[i]);
		if (stage.objects[i].obType == COOLER_LEFT || stage.objects[i].obType == COOLER_RIGHT)
			coolers.push(stage.objects[i]);
		if (stage.objects[i].obType == GRAV1)
			grav1.push(stage.objects[i]);
		if (stage.objects[i].obType == GRAV2)
			grav2.push(stage.objects[i]);
		if (stage.objects[i].obType == TRAP)
			traps.push(stage.objects[i]);
	}
	if (perses.length < 1 || platforms.length < 1) {
		showLoose();
		return;
	}
	var c;
	for (i = 0; i < coolers.length; i++) {
		var c = coolers[i];
		if (c.active) {
			for (var n = 0; n < perses.length; n++) {
				var p = perses[n];
				var r1 = new Rectangle((c.obType == COOLER_LEFT ? c.x - 320 : c.x + 320), c.y, 640, c.height, c.rotation);
				var r2 = new Rectangle(p.x, p.y, p.width, p.height, p.rotation);
				if (r1.hitTestRectangle(r2)) {
					var fv = p.box2dBody.GetCenterPosition().Copy();
					fv.Subtract(new b2Vec2(c.x, c.y));
					fv.Normalize();
					fv.Multiply(100000);
					p.box2dBody.WakeUp();
					p.box2dBody.ApplyForce(fv, p.box2dBody.GetCenterPosition());
				}
			}
		}
	}
	for (i = 0; i < perses.length; i++) {
		if (perses[i].grav == true) {
			perses[i].box2dBody.ApplyForce(new b2Vec2(0, -1000000), perses[i].box2dBody.GetCenterPosition());
		}
		for (var b = perses[i].box2dBody.GetContactList(); b; b = b.next) {
			for (var n = 0; n < platforms.length; n++) {
				if (b.other.sprite == platforms[n]) {
					showVictory();
					return;
				}
			}
			for (var n = 0; n < traps.length; n++) {
				if (b.other.sprite == traps[n]) {
					showLoose();
					return;
				}
			}
		}
		for (var n = 0; n < teleports.length; n++) {
			if (!teleports[n].isTeleported) {
				var aabb1 = {
					x1 : perses[i].x - 20,
					y1 : perses[i].y - 20,
					x2 : perses[i].x + 20,
					y2 : perses[i].y + 20
				};
				var aabb2 = {
					x1 : teleports[n].x - 5,
					y1 : teleports[n].y - 5,
					x2 : teleports[n].x + 5,
					y2 : teleports[n].y + 5
				};
				if (aabb1.x1 < aabb2.x1 && aabb1.x2 > aabb2.x2 && aabb1.y1 < aabb2.y1 && aabb1.y2 > aabb2.y2) {
					var posTeleported = [];
					for (var k = 0; k < teleports.length; k++) {
						if (k != n)
							posTeleported.push(teleports[k]);
					}
					if (posTeleported.length > 0) {
						var r = Math.floor(Math.random() * posTeleported.length);
						posTeleported[r].isTeleported = true;
						perses[i].box2dBody.m_position.x = posTeleported[r].x;
						perses[i].box2dBody.m_position.y = posTeleported[r].y;
					}
				}
			}
		}
		for (var n = 0; n < grav1.length; n++) {
			if (stage.hitTest(perses[i], grav1[n])) {
				grav1[n].destroy = true;
				perses[i].box2dBody.m_linearVelocity.SetZero();
				perses[i].box2dBody.m_angularVelocity = 0.0;
				perses[i].grav = true;
			}
		}
		for (var n = 0; n < grav2.length; n++) {
			if (stage.hitTest(perses[i], grav2[n])) {
				grav2[n].destroy = true;
				perses[i].box2dBody.m_linearVelocity.SetZero();
				perses[i].box2dBody.m_angularVelocity = 0.0;
				perses[i].grav = false;
			}
		}
	}
	for (var b = world.m_bodyList; b; b = b.m_next) {
		if (b.destroy)
			world.DestroyBody(b);
	}
}
function debugDraw() {
	if (!showDebugDraw)
		return;
	if (world)
		drawWorld(world, stage);
};
var NONE = 0;
var BOX = 1;
var CIRCLE = 2;
var POLY = 3;
var NORMAL = 0;
var PERS = 1;
var PLATFORM = 2;
var TELEPORT = 3;
var COOLER_LEFT = 4;
var COOLER_RIGHT = 5;
var TRAP = 6;
var GRAV1 = 7;
var GRAV2 = 8;
var objects = [{
		name : "pers",
		image : "pers.png",
		type : PERS,
		width : 44,
		height : 42,
		bodyWidth : 42,
		bodyHeight : 42,
		frames : 1,
		bodyType : CIRCLE,
		remove : false,
		fixed : false,
		density : 0.8,
		restitution : 0.2,
		friction : 0.8
	}, {
		name : "platform1",
		image : "platform1.png",
		type : PLATFORM,
		width : 41,
		height : 41,
		bodyWidth : 39,
		bodyHeight : 39,
		frames : 1,
		bodyType : CIRCLE,
		remove : false,
		fixed : false,
		density : 0.8,
		restitution : 0.2,
		friction : 0.8
	}, {
		name : "platform2",
		image : "platform2.png",
		type : PLATFORM,
		width : 44,
		height : 45,
		bodyWidth : 44,
		bodyHeight : 44,
		frames : 1,
		bodyType : CIRCLE,
		remove : false,
		fixed : false,
		density : 0.8,
		restitution : 0.2,
		friction : 0.8
	}, {
		name : "platform3",
		image : "platform3.png",
		type : PLATFORM,
		width : 42,
		height : 41,
		bodyWidth : 41,
		bodyHeight : 41,
		frames : 1,
		bodyType : CIRCLE,
		remove : false,
		fixed : false,
		density : 0.8,
		restitution : 0.2,
		friction : 0.8
	}, {
		name : "land1",
		image : "land1.png",
		type : NORMAL,
		width : 45,
		height : 38,
		bodyWidth : 35,
		bodyHeight : 15,
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land2",
		image : "land2.png",
		type : NORMAL,
		width : 45,
		height : 62,
		bodyWidth : 38,
		bodyHeight : 28,
		bodyPosCorrect : {
			x : 1,
			y : -6
		},
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land3",
		image : "land3.png",
		type : NORMAL,
		width : 32,
		height : 32,
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land4",
		image : "land4.png",
		type : NORMAL,
		width : 32,
		height : 32,
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land5",
		image : "land5.png",
		type : NORMAL,
		width : 45,
		height : 44,
		bodyWidth : 35,
		bodyHeight : 15,
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land6",
		image : "land6.png",
		type : NORMAL,
		width : 45,
		height : 44,
		bodyWidth : 35,
		bodyHeight : 15,
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land7",
		image : "land7.png",
		type : NORMAL,
		width : 45,
		height : 54,
		bodyWidth : 38,
		bodyHeight : 28,
		bodyPosCorrect : {
			x : 0,
			y : -4
		},
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land8",
		image : "land8.png",
		type : NORMAL,
		width : 42,
		height : 57,
		bodyWidth : 29,
		bodyHeight : 42,
		bodyPosCorrect : {
			x : -5,
			y : 5
		},
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land9",
		image : "land9.png",
		type : NORMAL,
		width : 44,
		height : 30,
		bodyWidth : 44,
		bodyHeight : 30,
		bodyPosCorrect : {
			x : -1,
			y : -6
		},
		frames : 1,
		bodyType : POLY,
		points : [[[-20, -8], [20, -4], [20, 8], [-20, 8]]],
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "land10",
		image : "land10.png",
		type : NORMAL,
		width : 44,
		height : 30,
		bodyWidth : 44,
		bodyHeight : 30,
		bodyPosCorrect : {
			x : 1,
			y : -6
		},
		frames : 1,
		bodyType : POLY,
		points : [[[-20, -4], [20, -8], [20, 8], [-20, 8]]],
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 0.9
	}, {
		name : "box1",
		image : "box1.png",
		type : NORMAL,
		width : 41,
		height : 41,
		bodyWidth : 41,
		bodyHeight : 41,
		frames : 1,
		bodyType : BOX,
		remove : true,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 3
	}, {
		name : "box2",
		image : "box2.png",
		type : NORMAL,
		width : 40,
		height : 42,
		bodyWidth : 40,
		bodyHeight : 42,
		frames : 1,
		bodyType : BOX,
		remove : true,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 3
	}, {
		name : "stone",
		image : "stone.png",
		type : NORMAL,
		width : 38,
		height : 38,
		bodyWidth : 38,
		bodyHeight : 38,
		frames : 1,
		bodyType : CIRCLE,
		remove : true,
		fixed : false,
		density : 2.0,
		restitution : 0,
		friction : 1
	}, {
		name : "trap",
		image : "trap.png",
		type : TRAP,
		width : 45,
		height : 54,
		bodyWidth : 38,
		bodyHeight : 15,
		bodyPosCorrect : {
			x : 0,
			y : 5
		},
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : true,
		density : 2.0,
		restitution : 0,
		friction : 1
	}, {
		name : "stick",
		image : "stick.png",
		type : NORMAL,
		width : 160,
		height : 16,
		bodyWidth : 160,
		bodyHeight : 16,
		frames : 1,
		bodyType : BOX,
		remove : true,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 1
	}, {
		name : "stick_statick",
		image : "stick_statick.png",
		type : NORMAL,
		width : 186,
		height : 17,
		bodyWidth : 186,
		bodyHeight : 8,
		frames : 1,
		bodyType : BOX,
		remove : false,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 1
	}, {
		name : "jstick1",
		image : "jstick1.png",
		type : NORMAL,
		width : 186,
		height : 17,
		bodyWidth : 186,
		bodyHeight : 8,
		frames : 1,
		bodyType : BOX,
		joints : [{
				type : "pivot",
				x : 0,
				y : 0
			}
		],
		remove : false,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 1
	}, {
		name : "jstick2",
		image : "jstick2.png",
		type : NORMAL,
		width : 182,
		height : 17,
		bodyWidth : 182,
		bodyHeight : 8,
		frames : 1,
		bodyType : BOX,
		joints : [{
				type : "pivot",
				x : -83,
				y : 0
			}
		],
		remove : false,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 1
	}, {
		name : "jstick3",
		image : "jstick3.png",
		type : NORMAL,
		width : 182,
		height : 17,
		bodyWidth : 182,
		bodyHeight : 8,
		frames : 1,
		bodyType : BOX,
		joints : [{
				type : "pivot",
				x : 83,
				y : 0
			}
		],
		remove : false,
		fixed : false,
		density : 1.0,
		restitution : 0,
		friction : 1
	}, {
		name : "grav1",
		image : "grav1.png",
		type : GRAV1,
		width : 26,
		height : 14,
		frames : 1,
		bodyType : NONE
	}, {
		name : "grav2",
		image : "grav2.png",
		type : GRAV2,
		width : 26,
		height : 14,
		frames : 1,
		bodyType : NONE
	}, {
		name : "teleport1",
		image : "teleport1.png",
		type : TELEPORT,
		width : 62,
		height : 76,
		frames : 6,
		bodyType : NONE
	}, {
		name : "teleport2",
		image : "teleport2.png",
		type : TELEPORT,
		width : 62,
		height : 76,
		frames : 6,
		bodyType : NONE
	}, {
		name : "cooler1",
		image : "cooler1.png",
		type : COOLER_LEFT,
		width : 38,
		height : 44,
		frames : 5,
		bodyType : NONE
	}, {
		name : "cooler2",
		image : "cooler2.png",
		type : COOLER_RIGHT,
		width : 38,
		height : 44,
		frames : 5,
		bodyType : NONE
	}, ];
function spritesSync(e, x, y) {
	var p = new Vector(-e.target.syncX, -e.target.syncY);
	p.rotate(-e.target.rotation);
	e.target.x += p.x;
	e.target.y += p.y;
};
var levels = [{
		objects : [{
				type : "land2",
				x : 140,
				y : 290,
				rotation : 0
			}, {
				type : "land6",
				x : 176,
				y : 275,
				rotation : 0
			}, {
				type : "land7",
				x : 212,
				y : 286,
				rotation : 0
			}, {
				type : "land6",
				x : 248,
				y : 276,
				rotation : 0
			}, {
				type : "land5",
				x : 284,
				y : 278,
				rotation : 0
			}, {
				type : "land1",
				x : 68,
				y : 275,
				rotation : 0
			}, {
				type : "land6",
				x : 104,
				y : 275,
				rotation : 0
			}, {
				type : "box1",
				x : 182,
				y : 246,
				rotation : 0
			}, {
				type : "pers",
				x : 118,
				y : 194,
				rotation : 0
			}, {
				type : "platform3",
				x : 282,
				y : 245,
				rotation : 0
			}, {
				type : "box1",
				x : 64,
				y : 245,
				rotation : 0
			}, {
				type : "stick",
				x : 124,
				y : 222,
				rotation : 0
			}, ]
	}, {
		objects : [{
				type : "land1",
				x : 41,
				y : 323,
				rotation : 0
			}, {
				type : "land2",
				x : 76,
				y : 336,
				rotation : 0
			}, {
				type : "land7",
				x : 150,
				y : 270,
				rotation : 0
			}, {
				type : "land6",
				x : 186,
				y : 259,
				rotation : 0
			}, {
				type : "land5",
				x : 222,
				y : 262,
				rotation : 0
			}, {
				type : "pers",
				x : 139,
				y : 226,
				rotation : 0
			}, {
				type : "land1",
				x : 64,
				y : 132,
				rotation : 0
			}, {
				type : "stone",
				x : 88,
				y : 100,
				rotation : 0
			}, {
				type : "land6",
				x : 96,
				y : 142,
				rotation : 0.6108652381980153
			}, {
				type : "land5",
				x : 153,
				y : 151,
				rotation : 0
			}, {
				type : "land7",
				x : 117,
				y : 158,
				rotation : 0
			}, {
				type : "box1",
				x : 126,
				y : 119,
				rotation : 0
			}, {
				type : "platform2",
				x : 68,
				y : 289,
				rotation : 0
			}, {
				type : "land5",
				x : 112,
				y : 324,
				rotation : 0
			}, {
				type : "land1",
				x : 114,
				y : 261,
				rotation : 0
			}, {
				type : "land10",
				x : 270,
				y : 180,
				rotation : -0.5235987755982988
			}, {
				type : "land10",
				x : 239,
				y : 203,
				rotation : -0.5235987755982988
			}, {
				type : "land10",
				x : 301,
				y : 165,
				rotation : 0
			}, ]
	}, {
		objects : [{
				type : "jstick2",
				x : 96,
				y : 184,
				rotation : 0
			}, {
				type : "land7",
				x : 134,
				y : 246,
				rotation : 0
			}, {
				type : "box1",
				x : 146,
				y : 207,
				rotation : 0
			}, {
				type : "land5",
				x : 170,
				y : 236,
				rotation : 0
			}, {
				type : "land1",
				x : 98,
				y : 238,
				rotation : 0
			}, {
				type : "pers",
				x : 76,
				y : 158,
				rotation : 0
			}, {
				type : "land7",
				x : 121,
				y : 370,
				rotation : 0
			}, {
				type : "platform2",
				x : 86,
				y : 330,
				rotation : 0
			}, {
				type : "jstick3",
				x : 230,
				y : 87,
				rotation : 0
			}, {
				type : "box2",
				x : 145,
				y : 156,
				rotation : 0
			}, {
				type : "box2",
				x : 144,
				y : 117,
				rotation : 0
			}, {
				type : "land8",
				x : 297,
				y : 201,
				rotation : 3.141592653589793
			}, {
				type : "land6",
				x : 157,
				y : 362,
				rotation : 0
			}, {
				type : "box2",
				x : 132,
				y : 329,
				rotation : 0
			}, {
				type : "land5",
				x : 240,
				y : 297,
				rotation : -0.7853981633974483
			}, {
				type : "land6",
				x : 215,
				y : 323,
				rotation : -0.7853981633974483
			}, {
				type : "land5",
				x : 193,
				y : 363,
				rotation : 0
			}, {
				type : "land1",
				x : 192,
				y : 350,
				rotation : -0.7853981633974483
			}, {
				type : "land6",
				x : 86,
				y : 360,
				rotation : 0
			}, {
				type : "land1",
				x : 50,
				y : 360,
				rotation : 0
			}, {
				type : "land8",
				x : 302,
				y : 165,
				rotation : 3.490658503988659
			}, {
				type : "land8",
				x : 319,
				y : 135,
				rotation : 3.839724354387525
			}, {
				type : "land8",
				x : 305,
				y : 237,
				rotation : 2.792526803190927
			}, {
				type : "land8",
				x : 322,
				y : 266,
				rotation : 2.443460952792061
			}, ]
	}, {
		objects : [{
				type : "land8",
				x : 263,
				y : 115,
				rotation : 0
			}, {
				type : "land8",
				x : 258,
				y : 154,
				rotation : 0.2617993877991494
			}, {
				type : "land8",
				x : 247,
				y : 193,
				rotation : 0.5235987755982988
			}, {
				type : "land8",
				x : 225,
				y : 227,
				rotation : 0.7853981633974483
			}, {
				type : "cooler2",
				x : 61,
				y : 89,
				rotation : 0
			}, {
				type : "pers",
				x : 106,
				y : 92,
				rotation : 0
			}, {
				type : "land5",
				x : 173,
				y : 124,
				rotation : 0
			}, {
				type : "land2",
				x : 137,
				y : 137,
				rotation : 0
			}, {
				type : "land7",
				x : 241,
				y : 384,
				rotation : 0
			}, {
				type : "platform3",
				x : 245,
				y : 341,
				rotation : 0
			}, {
				type : "land8",
				x : 197,
				y : 249,
				rotation : 1.0471975511965976
			}, {
				type : "land8",
				x : 161,
				y : 265,
				rotation : 1.3089969389957472
			}, {
				type : "land8",
				x : 124,
				y : 271,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 24,
				y : 245,
				rotation : 3.141592653589793
			}, {
				type : "land8",
				x : 31,
				y : 285,
				rotation : 2.8797932657906435
			}, {
				type : "land8",
				x : 46,
				y : 319,
				rotation : 2.6179938779914944
			}, {
				type : "land8",
				x : 72,
				y : 348,
				rotation : 2.356194490192345
			}, {
				type : "land8",
				x : 107,
				y : 368,
				rotation : 2.0943951023931953
			}, {
				type : "land8",
				x : 146,
				y : 379,
				rotation : 1.832595714594046
			}, {
				type : "land8",
				x : 185,
				y : 381,
				rotation : 1.5707963267948966
			}, {
				type : "land5",
				x : 277,
				y : 375,
				rotation : 0
			}, {
				type : "land1",
				x : 205,
				y : 376,
				rotation : 0
			}, {
				type : "land7",
				x : 101,
				y : 132,
				rotation : 0
			}, {
				type : "land1",
				x : 64,
				y : 124,
				rotation : 0
			}, ]
	}, {
		objects : [{
				type : "platform1",
				x : 151,
				y : 231,
				rotation : 0
			}, {
				type : "land5",
				x : 185,
				y : 374,
				rotation : 0
			}, {
				type : "land7",
				x : 149,
				y : 384,
				rotation : 0
			}, {
				type : "pers",
				x : 130,
				y : 345,
				rotation : 0
			}, {
				type : "land2",
				x : 114,
				y : 386,
				rotation : 0
			}, {
				type : "land1",
				x : 78,
				y : 371,
				rotation : 0
			}, {
				type : "cooler2",
				x : 82,
				y : 339,
				rotation : 0
			}, {
				type : "grav1",
				x : 273,
				y : 352,
				rotation : 0
			}, {
				type : "grav2",
				x : 148,
				y : 108,
				rotation : 0
			}, {
				type : "land8",
				x : 293,
				y : 137,
				rotation : -0.7853981633974483
			}, {
				type : "land8",
				x : 265,
				y : 111,
				rotation : -0.7853981633974483
			}, {
				type : "land8",
				x : 236,
				y : 85,
				rotation : -0.9599310885968813
			}, {
				type : "land8",
				x : 199,
				y : 77,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : 160,
				y : 79,
				rotation : -1.5707963267948966
			}, {
				type : "land1",
				x : 89,
				y : 257,
				rotation : 0
			}, {
				type : "land2",
				x : 125,
				y : 272,
				rotation : 0
			}, {
				type : "land5",
				x : 161,
				y : 258,
				rotation : 0
			}, {
				type : "land8",
				x : 319,
				y : 164,
				rotation : -0.7853981633974483
			}, ],
		joints : []
	}, {
		objects : [{
				type : "jstick2",
				x : 207,
				y : 223,
				rotation : 0
			}, {
				type : "land2",
				x : 68,
				y : 163,
				rotation : 0
			}, {
				type : "platform3",
				x : 156,
				y : 198,
				rotation : 0
			}, {
				type : "grav1",
				x : 200,
				y : 389,
				rotation : 0
			}, {
				type : "pers",
				x : 35,
				y : 359,
				rotation : 0
			}, {
				type : "land5",
				x : 36,
				y : 388,
				rotation : 0
			}, {
				type : "land1",
				x : -1,
				y : 390,
				rotation : 0
			}, {
				type : "teleport1",
				x : 21,
				y : 112,
				rotation : 0
			}, {
				type : "teleport2",
				x : 246,
				y : 365,
				rotation : 0
			}, {
				type : "cooler1",
				x : 117,
				y : 118,
				rotation : 0
			}, {
				type : "land6",
				x : 312,
				y : 235,
				rotation : 0
			}, {
				type : "land1",
				x : 275,
				y : 237,
				rotation : 0
			}, {
				type : "land10",
				x : 211,
				y : 422,
				rotation : 0
			}, {
				type : "land10",
				x : 173,
				y : 427,
				rotation : 0
			}, {
				type : "land10",
				x : 250,
				y : 416,
				rotation : 0
			}, {
				type : "land10",
				x : 287,
				y : 409,
				rotation : 0
			}, {
				type : "land10",
				x : 326,
				y : 403,
				rotation : 0
			}, {
				type : "land5",
				x : 104,
				y : 149,
				rotation : 0
			}, {
				type : "land1",
				x : 32,
				y : 150,
				rotation : 0
			}, {
				type : "pers",
				x : 75,
				y : 117,
				rotation : 0
			}, ]
	}, {
		objects : [{
				type : "jstick3",
				x : 227,
				y : 97,
				rotation : 0
			}, {
				type : "trap",
				x : 138,
				y : 348,
				rotation : 0
			}, {
				type : "trap",
				x : 173,
				y : 361,
				rotation : 0
			}, {
				type : "stone",
				x : 35,
				y : 153,
				rotation : 0
			}, {
				type : "stone",
				x : 297,
				y : 164,
				rotation : 0
			}, {
				type : "pers",
				x : 219,
				y : 70,
				rotation : 0
			}, {
				type : "platform2",
				x : 254,
				y : 307,
				rotation : 0
			}, {
				type : "land1",
				x : 219,
				y : 342,
				rotation : 0
			}, {
				type : "land2",
				x : 248,
				y : 235,
				rotation : 0
			}, {
				type : "land1",
				x : 211,
				y : 223,
				rotation : 0
			}, {
				type : "land6",
				x : 252,
				y : 341,
				rotation : 0
			}, {
				type : "land5",
				x : 288,
				y : 341,
				rotation : 0
			}, {
				type : "land5",
				x : 304,
				y : 202,
				rotation : -0.7853981633974483
			}, {
				type : "land7",
				x : 274,
				y : 233,
				rotation : 0
			}, {
				type : "land5",
				x : 310,
				y : 224,
				rotation : 0
			}, {
				type : "box1",
				x : 264,
				y : 188,
				rotation : 0
			}, {
				type : "box2",
				x : 160,
				y : 122,
				rotation : 0
			}, {
				type : "land2",
				x : 41,
				y : 212,
				rotation : 0
			}, {
				type : "land1",
				x : 21,
				y : 186,
				rotation : 0.7853981633974483
			}, {
				type : "land5",
				x : 76,
				y : 199,
				rotation : 0
			}, {
				type : "box1",
				x : 69,
				y : 168,
				rotation : 0
			}, {
				type : "land5",
				x : 99,
				y : 320,
				rotation : 0
			}, {
				type : "land1",
				x : 64,
				y : 321,
				rotation : 0
			}, {
				type : "land1",
				x : 138,
				y : 152,
				rotation : 0
			}, {
				type : "land5",
				x : 173,
				y : 151,
				rotation : 0
			}, {
				type : "trap",
				x : 101,
				y : 347,
				rotation : 0
			}, {
				type : "land8",
				x : 66,
				y : 359,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : 30,
				y : 362,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : -8,
				y : 364,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : 104,
				y : 364,
				rotation : -1.2217304763960306
			}, {
				type : "land8",
				x : 134,
				y : 369,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : 170,
				y : 375,
				rotation : -1.2217304763960306
			}, {
				type : "land8",
				x : 195,
				y : 376,
				rotation : -1.7453292519943295
			}, {
				type : "land8",
				x : 232,
				y : 372,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : 268,
				y : 371,
				rotation : -1.5707963267948966
			}, {
				type : "land8",
				x : 304,
				y : 371,
				rotation : -1.5707963267948966
			}, {
				type : "land3",
				x : -10,
				y : 144,
				rotation : 0
			}, ],
		joints : []
	}, {
		objects : [{
				type : "stick_statick",
				x : 239,
				y : 136,
				rotation : 0
			}, {
				type : "land7",
				x : 288,
				y : 200,
				rotation : 0
			}, {
				type : "box1",
				x : 183,
				y : 158,
				rotation : 0
			}, {
				type : "box1",
				x : 290,
				y : 161,
				rotation : 0
			}, {
				type : "pers",
				x : 227,
				y : 107,
				rotation : 0
			}, {
				type : "land1",
				x : 184,
				y : 364,
				rotation : 0
			}, {
				type : "land5",
				x : 255,
				y : 364,
				rotation : 0
			}, {
				type : "land2",
				x : 219,
				y : 376,
				rotation : 0
			}, {
				type : "platform3",
				x : 227,
				y : 328,
				rotation : 0
			}, {
				type : "land5",
				x : 119,
				y : 290,
				rotation : 0
			}, {
				type : "land6",
				x : 83,
				y : 290,
				rotation : 0
			}, {
				type : "land5",
				x : 213,
				y : 189,
				rotation : 0
			}, {
				type : "land1",
				x : 256,
				y : 195,
				rotation : 0
			}, {
				type : "land2",
				x : 47,
				y : 302,
				rotation : 0
			}, {
				type : "land6",
				x : 11,
				y : 290,
				rotation : 0
			}, {
				type : "box1",
				x : 44,
				y : 83,
				rotation : 0,
				density : 0.5
			}, {
				type : "land1",
				x : 178,
				y : 190,
				rotation : 0
			}, {
				type : "land5",
				x : 321,
				y : 192,
				rotation : 0
			}, {
				type : "land9",
				x : 90,
				y : 151,
				rotation : 0
			}, {
				type : "land10",
				x : -1,
				y : 152,
				rotation : 0
			}, {
				type : "box1",
				x : 45,
				y : 132,
				rotation : 0.7853981633974483
			}, ],
		joints : []
	}, {
		objects : [{
				type : "land1",
				x : 127,
				y : 350,
				rotation : 0
			}, {
				type : "land5",
				x : 164,
				y : 348,
				rotation : 0
			}, {
				type : "pers",
				x : 171,
				y : 321,
				rotation : 0
			}, {
				type : "grav1",
				x : 224,
				y : 388,
				rotation : 0
			}, {
				type : "land7",
				x : 47,
				y : 336,
				rotation : 0.4363323129985824
			}, {
				type : "platform2",
				x : 53,
				y : 192,
				rotation : 0
			}, {
				type : "jstick2",
				x : 181,
				y : 160,
				rotation : 0
			}, {
				type : "land8",
				x : 263,
				y : 180,
				rotation : 0
			}, {
				type : "stone",
				x : 76,
				y : 270,
				rotation : 0
			}, {
				type : "pers",
				x : 159,
				y : 126,
				rotation : 0
			}, {
				type : "land2",
				x : 57,
				y : 239,
				rotation : 0
			}, {
				type : "land8",
				x : 264,
				y : 220,
				rotation : 0
			}, {
				type : "land8",
				x : 268,
				y : 252,
				rotation : -0.4363323129985824
			}, {
				type : "land8",
				x : 287,
				y : 277,
				rotation : -0.8726646259971648
			}, {
				type : "land8",
				x : 316,
				y : 293,
				rotation : -1.3089969389957472
			}, {
				type : "box1",
				x : 64,
				y : 305,
				rotation : 0.4363323129985824
			}, {
				type : "box2",
				x : 112,
				y : 324,
				rotation : 0
			}, {
				type : "box2",
				x : 111,
				y : 283,
				rotation : 0
			}, {
				type : "land5",
				x : 77,
				y : 340,
				rotation : 0.2617993877991494
			}, {
				type : "land1",
				x : 20,
				y : 225,
				rotation : 0
			}, {
				type : "land5",
				x : 88,
				y : 226,
				rotation : 0
			}, {
				type : "land1",
				x : 22,
				y : 312,
				rotation : 0.6108652381980153
			}, ]
	}, {
		objects : [{
				type : "pers",
				x : 40,
				y : 70,
				rotation : 0
			}, {
				type : "teleport2",
				x : 180,
				y : 183,
				rotation : 0,
				custom : "1"
			}, {
				type : "stone",
				x : 227,
				y : 192,
				rotation : 0
			}, {
				type : "teleport1",
				x : 67,
				y : 303,
				rotation : 0,
				custom : "1"
			}, {
				type : "land5",
				x : 76,
				y : 116,
				rotation : 0
			}, {
				type : "platform1",
				x : 218,
				y : 300,
				rotation : 0
			}, {
				type : "land6",
				x : 189,
				y : 225,
				rotation : 0
			}, {
				type : "land2",
				x : 153,
				y : 237,
				rotation : 0
			}, {
				type : "land7",
				x : 117,
				y : 235,
				rotation : 0
			}, {
				type : "land2",
				x : 81,
				y : 237,
				rotation : 0
			}, {
				type : "land1",
				x : 45,
				y : 225,
				rotation : 0
			}, {
				type : "pers",
				x : 85,
				y : 191,
				rotation : 0
			}, {
				type : "cooler2",
				x : 41,
				y : 192,
				rotation : 0
			}, {
				type : "land5",
				x : 225,
				y : 226,
				rotation : 0
			}, {
				type : "land1",
				x : 277,
				y : 288,
				rotation : 0
			}, {
				type : "land7",
				x : 319,
				y : 269,
				rotation : 0
			}, {
				type : "land5",
				x : 297,
				y : 273,
				rotation : -0.7853981633974483
			}, {
				type : "land2",
				x : 39,
				y : 127,
				rotation : 0
			}, {
				type : "land1",
				x : 18,
				y : 96,
				rotation : 0.7853981633974483
			}, {
				type : "box1",
				x : 79,
				y : 80,
				rotation : 0
			}, {
				type : "land7",
				x : 138,
				y : 393,
				rotation : 0
			}, {
				type : "land5",
				x : 174,
				y : 383,
				rotation : 0
			}, {
				type : "land1",
				x : 109,
				y : 375,
				rotation : 0.4363323129985824
			}, {
				type : "land5",
				x : 213,
				y : 331,
				rotation : 0
			}, {
				type : "land1",
				x : 189,
				y : 345,
				rotation : -0.7853981633974483
			}, ]
	}, {
		objects : [{
				type : "teleport1",
				x : 76,
				y : 390,
				rotation : 0
			}, {
				type : "teleport2",
				x : 204,
				y : 96,
				rotation : 0
			}, {
				type : "jstick1",
				x : 190,
				y : 341,
				rotation : 0
			}, {
				type : "pers",
				x : 257,
				y : 319,
				rotation : 0
			}, {
				type : "platform3",
				x : 251,
				y : 144,
				rotation : 0
			}, {
				type : "stick",
				x : 122,
				y : 286,
				rotation : 0
			}, {
				type : "land8",
				x : 257,
				y : 178,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 217,
				y : 178,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 178,
				y : 178,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 138,
				y : 179,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 98,
				y : 177,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 292,
				y : 168,
				rotation : 1.1344640137963142
			}, {
				type : "land8",
				x : 318,
				y : 140,
				rotation : 0.6981317007977318
			}, {
				type : "land8",
				x : 59,
				y : 177,
				rotation : 1.5707963267948966
			}, {
				type : "cooler2",
				x : 15,
				y : 150,
				rotation : 0
			}, {
				type : "land8",
				x : 21,
				y : 177,
				rotation : 1.5707963267948966
			}, {
				type : "land10",
				x : 120,
				y : 403,
				rotation : 0
			}, {
				type : "land10",
				x : 157,
				y : 399,
				rotation : 0
			}, {
				type : "land10",
				x : 194,
				y : 394,
				rotation : 0
			}, {
				type : "land10",
				x : 228,
				y : 390,
				rotation : 0
			}, {
				type : "land10",
				x : 262,
				y : 388,
				rotation : 0
			}, {
				type : "box1",
				x : 263,
				y : 360,
				rotation : 0
			}, {
				type : "land5",
				x : 203,
				y : 300,
				rotation : -0.08726646259971647
			}, {
				type : "land1",
				x : 167,
				y : 303,
				rotation : 0
			}, {
				type : "land1",
				x : 20,
				y : 302,
				rotation : 0
			}, {
				type : "land5",
				x : 57,
				y : 300,
				rotation : 0
			}, {
				type : "land10",
				x : 300,
				y : 381,
				rotation : 0
			}, {
				type : "stone",
				x : 115,
				y : 264,
				rotation : 0
			}, ],
		joints : []
	}, {
		objects : [{
				type : "pers",
				x : 250,
				y : 136,
				rotation : 0
			}, {
				type : "land2",
				x : 291,
				y : 342,
				rotation : -0.7853981633974483
			}, {
				type : "land6",
				x : 307,
				y : 308,
				rotation : -0.7853981633974483
			}, {
				type : "trap",
				x : 216,
				y : 401,
				rotation : 0
			}, {
				type : "box1",
				x : 201,
				y : 216,
				rotation : 0
			}, {
				type : "platform2",
				x : 168,
				y : 134,
				rotation : 0
			}, {
				type : "stick",
				x : 232,
				y : 165,
				rotation : 0
			}, {
				type : "stick",
				x : 150,
				y : 245,
				rotation : 0,
				density : 5
			}, {
				type : "land7",
				x : 327,
				y : 191,
				rotation : 0
			}, {
				type : "trap",
				x : 181,
				y : 401,
				rotation : 0
			}, {
				type : "land1",
				x : 106,
				y : 371,
				rotation : 0
			}, {
				type : "teleport1",
				x : 60,
				y : 342,
				rotation : 0
			}, {
				type : "teleport2",
				x : 213,
				y : 96,
				rotation : 0
			}, {
				type : "land1",
				x : 132,
				y : 183,
				rotation : 0
			}, {
				type : "land1",
				x : 290,
				y : 183,
				rotation : 0
			}, {
				type : "land5",
				x : 167,
				y : 181,
				rotation : 0
			}, {
				type : "land3",
				x : 163,
				y : 269,
				rotation : 0
			}, {
				type : "land1",
				x : 260,
				y : 354,
				rotation : -0.7853981633974483
			}, {
				type : "land5",
				x : 141,
				y : 369,
				rotation : 0
			}, ],
		joints : []
	}, {
		objects : [{
				type : "land8",
				x : 73,
				y : 349,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 174,
				y : 349,
				rotation : 1.5707963267948966
			}, {
				type : "box2",
				x : 171,
				y : 315,
				rotation : 0
			}, {
				type : "box2",
				x : 169,
				y : 257,
				rotation : 0
			}, {
				type : "box2",
				x : 69,
				y : 316,
				rotation : 0
			}, {
				type : "box2",
				x : 69,
				y : 257,
				rotation : 0
			}, {
				type : "pers",
				x : 121,
				y : 210,
				rotation : 0
			}, {
				type : "land5",
				x : 263,
				y : 162,
				rotation : 0
			}, {
				type : "platform3",
				x : 265,
				y : 130,
				rotation : 0
			}, {
				type : "stick",
				x : 122,
				y : 286,
				rotation : 0
			}, {
				type : "stick",
				x : 122,
				y : 233,
				rotation : 0
			}, {
				type : "land8",
				x : 270,
				y : 345,
				rotation : 0
			}, {
				type : "teleport2",
				x : 220,
				y : 373,
				rotation : 0,
				custom : "1"
			}, {
				type : "teleport1",
				x : 164,
				y : 88,
				rotation : 0,
				custom : "1"
			}, {
				type : "stick_statick",
				x : 152,
				y : 72,
				rotation : 0
			}, {
				type : "land1",
				x : 227,
				y : 162,
				rotation : 0
			}, {
				type : "land1",
				x : 63,
				y : 160,
				rotation : 0
			}, {
				type : "land5",
				x : 98,
				y : 158,
				rotation : 0
			}, {
				type : "land8",
				x : 30,
				y : 224,
				rotation : 0
			}, {
				type : "box1",
				x : 97,
				y : 129,
				rotation : 0
			}, {
				type : "box1",
				x : 97,
				y : 94,
				rotation : 0
			}, {
				type : "box1",
				x : 221,
				y : 128,
				rotation : 0
			}, {
				type : "box1",
				x : 221,
				y : 93,
				rotation : 0
			}, {
				type : "land8",
				x : 26,
				y : 257,
				rotation : 0.3490658503988659
			}, {
				type : "land8",
				x : 10,
				y : 290,
				rotation : 0.6981317007977318
			}, {
				type : "land8",
				x : 21,
				y : 192,
				rotation : -0.3490658503988659
			}, {
				type : "land8",
				x : 2,
				y : 164,
				rotation : -0.6981317007977318
			}, ],
		joints : []
	}, {
		objects : [{
				type : "jstick1",
				x : 89,
				y : 257,
				rotation : 0
			}, {
				type : "stone",
				x : 231,
				y : 81,
				rotation : 0
			}, {
				type : "land7",
				x : 219,
				y : 136,
				rotation : 0
			}, {
				type : "land1",
				x : 189,
				y : 128,
				rotation : 0
			}, {
				type : "land5",
				x : 240,
				y : 114,
				rotation : -0.7853981633974483
			}, {
				type : "box1",
				x : 197,
				y : 93,
				rotation : 0
			}, {
				type : "land1",
				x : 185,
				y : 222,
				rotation : 0
			}, {
				type : "platform1",
				x : 172,
				y : 189,
				rotation : 0
			}, {
				type : "land6",
				x : 259,
				y : 393,
				rotation : 0
			}, {
				type : "pers",
				x : 146,
				y : 329,
				rotation : 0
			}, {
				type : "land5",
				x : 221,
				y : 230,
				rotation : 0.4363323129985824
			}, {
				type : "land1",
				x : 224,
				y : 393,
				rotation : 0
			}, {
				type : "land5",
				x : 295,
				y : 392,
				rotation : 0
			}, {
				type : "land8",
				x : 304,
				y : 357,
				rotation : 0
			}, {
				type : "land8",
				x : 311,
				y : 325,
				rotation : 0.4363323129985824
			}, {
				type : "cooler2",
				x : 58,
				y : 331,
				rotation : 0
			}, {
				type : "land7",
				x : 148,
				y : 373,
				rotation : 0
			}, {
				type : "land5",
				x : 179,
				y : 362,
				rotation : 0
			}, {
				type : "land8",
				x : 327,
				y : 294,
				rotation : 0.5235987755982988
			}, {
				type : "land2",
				x : 111,
				y : 378,
				rotation : 0
			}, {
				type : "land6",
				x : 74,
				y : 363,
				rotation : 0
			}, {
				type : "land1",
				x : 37,
				y : 365,
				rotation : 0
			}, ]
	}, {
		objects : [{
				type : "land8",
				x : 271,
				y : 190,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 178,
				y : 190,
				rotation : 1.5707963267948966
			}, {
				type : "pers",
				x : 252,
				y : 82,
				rotation : 0
			}, {
				type : "land2",
				x : 279,
				y : 359,
				rotation : 0
			}, {
				type : "platform1",
				x : 280,
				y : 312,
				rotation : 0
			}, {
				type : "stick",
				x : 220,
				y : 166,
				rotation : 0
			}, {
				type : "jstick3",
				x : 77,
				y : 258,
				rotation : -0.7853981633974483,
				density : 0.3
			}, {
				type : "box2",
				x : 49,
				y : 337,
				rotation : 0
			}, {
				type : "land6",
				x : 49,
				y : 367,
				rotation : 0
			}, {
				type : "land8",
				x : 255,
				y : 374,
				rotation : 1.2217304763960306
			}, {
				type : "land7",
				x : 40,
				y : 234,
				rotation : 0
			}, {
				type : "land5",
				x : 74,
				y : 226,
				rotation : 0
			}, {
				type : "box1",
				x : 68,
				y : 195,
				rotation : 0
			}, {
				type : "land1",
				x : 19,
				y : 213,
				rotation : 0.7853981633974483
			}, {
				type : "cooler1",
				x : 302,
				y : 85,
				rotation : 0
			}, {
				type : "land5",
				x : 286,
				y : 114,
				rotation : 0
			}, {
				type : "land5",
				x : 315,
				y : 346,
				rotation : 0
			}, {
				type : "land9",
				x : 145,
				y : 388,
				rotation : 0
			}, {
				type : "land9",
				x : 181,
				y : 393,
				rotation : 0
			}, {
				type : "land9",
				x : 218,
				y : 397,
				rotation : 0
			}, {
				type : "stone",
				x : 31,
				y : 180,
				rotation : 0
			}, {
				type : "land5",
				x : 170,
				y : 97,
				rotation : 0
			}, {
				type : "land1",
				x : 135,
				y : 99,
				rotation : 0
			}, {
				type : "land1",
				x : 250,
				y : 115,
				rotation : 0
			}, ],
		joints : []
	}, {
		objects : [{
				type : "platform1",
				x : 80,
				y : 336,
				rotation : 0
			}, {
				type : "pers",
				x : 82,
				y : 142,
				rotation : 0
			}, {
				type : "jstick3",
				x : 255,
				y : 113,
				rotation : 0
			}, {
				type : "land8",
				x : 75,
				y : 260,
				rotation : 1.5707963267948966
			}, {
				type : "cooler2",
				x : 39,
				y : 140,
				rotation : 0
			}, {
				type : "stone",
				x : 18,
				y : 194,
				rotation : 0
			}, {
				type : "land8",
				x : 6,
				y : 233,
				rotation : 2.356194490192345
			}, {
				type : "land8",
				x : 39,
				y : 255,
				rotation : 2.0943951023931953
			}, {
				type : "land8",
				x : 115,
				y : 260,
				rotation : 1.5707963267948966
			}, {
				type : "box2",
				x : 47,
				y : 219,
				rotation : 0
			}, {
				type : "box1",
				x : 157,
				y : 141,
				rotation : 0
			}, {
				type : "land8",
				x : 154,
				y : 260,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 191,
				y : 260,
				rotation : 1.5707963267948966
			}, {
				type : "stone",
				x : 116,
				y : 225,
				rotation : 0
			}, {
				type : "land8",
				x : 79,
				y : 376,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 221,
				y : 365,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 295,
				y : 365,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 140,
				y : 365,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 181,
				y : 400,
				rotation : 1.5707963267948966
			}, {
				type : "land4",
				x : 304,
				y : 223,
				rotation : 0
			}, {
				type : "land1",
				x : 49,
				y : 176,
				rotation : 0
			}, {
				type : "land6",
				x : 85,
				y : 173,
				rotation : 0
			}, {
				type : "land5",
				x : 152,
				y : 176,
				rotation : 0
			}, {
				type : "land2",
				x : 116,
				y : 189,
				rotation : 0
			}, ],
		joints : []
	}, {
		objects : [{
				type : "pers",
				x : 253,
				y : 166,
				rotation : 0
			}, {
				type : "jstick1",
				x : 183,
				y : 255,
				rotation : 1.5707963267948966
			}, {
				type : "land7",
				x : 257,
				y : 205,
				rotation : 0
			}, {
				type : "land1",
				x : 220,
				y : 197,
				rotation : 0
			}, {
				type : "land1",
				x : 211,
				y : 360,
				rotation : 0
			}, {
				type : "platform3",
				x : 83,
				y : 93,
				rotation : 0
			}, {
				type : "cooler1",
				x : 301,
				y : 163,
				rotation : 0
			}, {
				type : "teleport2",
				x : 281,
				y : 331,
				rotation : 0
			}, {
				type : "land5",
				x : 248,
				y : 359,
				rotation : 0
			}, {
				type : "teleport1",
				x : 46,
				y : 313,
				rotation : 0
			}, {
				type : "grav1",
				x : 94,
				y : 363,
				rotation : 0
			}, {
				type : "pers",
				x : 211,
				y : 327,
				rotation : 0
			}, {
				type : "land5",
				x : 22,
				y : 140,
				rotation : 0
			}, {
				type : "land1",
				x : 155,
				y : 140,
				rotation : 0
			}, {
				type : "stick",
				x : 97,
				y : 121,
				rotation : 0
			}, {
				type : "land5",
				x : 293,
				y : 195,
				rotation : 0
			}, {
				type : "land5",
				x : 189,
				y : 140,
				rotation : 0
			}, {
				type : "land1",
				x : -13,
				y : 142,
				rotation : 0
			}, ],
		joints : []
	}, {
		objects : [{
				type : "jstick1",
				x : 158,
				y : 245,
				rotation : 0
			}, {
				type : "stone",
				x : 293,
				y : 100,
				rotation : 0
			}, {
				type : "pers",
				x : 148,
				y : 139,
				rotation : 0
			}, {
				type : "platform3",
				x : 106,
				y : 329,
				rotation : 0
			}, {
				type : "land7",
				x : 176,
				y : 300,
				rotation : 0
			}, {
				type : "land7",
				x : 107,
				y : 300,
				rotation : 0
			}, {
				type : "cooler1",
				x : 138,
				y : 68,
				rotation : 0
			}, {
				type : "pers",
				x : 92,
				y : 67,
				rotation : 0
			}, {
				type : "cooler1",
				x : 189,
				y : 138,
				rotation : 0
			}, {
				type : "land7",
				x : 73,
				y : 300,
				rotation : 0
			}, {
				type : "land6",
				x : 140,
				y : 289,
				rotation : 0
			}, {
				type : "land5",
				x : 212,
				y : 289,
				rotation : 0
			}, {
				type : "land1",
				x : 258,
				y : 146,
				rotation : 0
			}, {
				type : "land5",
				x : 305,
				y : 127,
				rotation : -0.7853981633974483
			}, {
				type : "land2",
				x : 283,
				y : 155,
				rotation : 0
			}, {
				type : "box1",
				x : 256,
				y : 113,
				rotation : 0
			}, {
				type : "land8",
				x : 309,
				y : 256,
				rotation : 0
			}, {
				type : "land8",
				x : 309,
				y : 296,
				rotation : 0
			}, {
				type : "land8",
				x : 304,
				y : 335,
				rotation : 0.4363323129985824
			}, {
				type : "land8",
				x : 288,
				y : 366,
				rotation : 0.8726646259971648
			}, {
				type : "land8",
				x : 255,
				y : 386,
				rotation : 1.3089969389957472
			}, {
				type : "land8",
				x : 218,
				y : 390,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 181,
				y : 390,
				rotation : 1.5707963267948966
			}, {
				type : "land7",
				x : 64,
				y : 372,
				rotation : 0
			}, {
				type : "land5",
				x : 100,
				y : 362,
				rotation : 0
			}, {
				type : "land1",
				x : 12,
				y : 341,
				rotation : 0.7853981633974483
			}, {
				type : "land1",
				x : 81,
				y : 114,
				rotation : -1.5707963267948966
			}, {
				type : "stone",
				x : 24,
				y : 299,
				rotation : 0
			}, {
				type : "box2",
				x : 59,
				y : 326,
				rotation : 0
			}, {
				type : "land7",
				x : 29,
				y : 372,
				rotation : 0
			}, {
				type : "land1",
				x : 6,
				y : 366,
				rotation : 0
			}, {
				type : "land5",
				x : 132,
				y : 102,
				rotation : 0
			}, {
				type : "land2",
				x : 96,
				y : 115,
				rotation : 0
			}, {
				type : "land1",
				x : 147,
				y : 172,
				rotation : 0
			}, {
				type : "land5",
				x : 182,
				y : 170,
				rotation : 0
			}, {
				type : "land9",
				x : 41,
				y : 274,
				rotation : 0.3490658503988659
			}, {
				type : "land9",
				x : 9,
				y : 257,
				rotation : 0.3490658503988659
			}, ]
	}, {
		objects : [{
				type : "land8",
				x : 234,
				y : 375,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 273,
				y : 375,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 311,
				y : 375,
				rotation : 1.5707963267948966
			}, {
				type : "cooler1",
				x : 296,
				y : 339,
				rotation : 0
			}, {
				type : "pers",
				x : 246,
				y : 334,
				rotation : 0
			}, {
				type : "land8",
				x : 197,
				y : 375,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 158,
				y : 375,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 162,
				y : 285,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 196,
				y : 276,
				rotation : 1.3089969389957472
			}, {
				type : "land8",
				x : 227,
				y : 253,
				rotation : 0.8726646259971648
			}, {
				type : "land8",
				x : 248,
				y : 220,
				rotation : 0.4363323129985824
			}, {
				type : "land8",
				x : 251,
				y : 181,
				rotation : 0
			}, {
				type : "platform1",
				x : 158,
				y : 76,
				rotation : 0
			}, {
				type : "land8",
				x : 154,
				y : 195,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 119,
				y : 190,
				rotation : 2.007128639793479
			}, {
				type : "land8",
				x : 90,
				y : 171,
				rotation : 2.443460952792061
			}, {
				type : "land8",
				x : 72,
				y : 138,
				rotation : 2.8797932657906435
			}, {
				type : "land8",
				x : 66,
				y : 100,
				rotation : 3.141592653589793
			}, {
				type : "land8",
				x : 158,
				y : 119,
				rotation : 1.3089969389957472
			}, {
				type : "land8",
				x : 195,
				y : 108,
				rotation : 1.3089969389957472
			}, {
				type : "land8",
				x : 122,
				y : 376,
				rotation : 1.5707963267948966
			}, ]
	}, {
		objects : [{
				type : "jstick3",
				x : 242,
				y : 306,
				rotation : 0,
				density : 0.5
			}, {
				type : "jstick2",
				x : 90,
				y : 255,
				rotation : 0,
				density : 0.5
			}, {
				type : "box2",
				x : 245,
				y : 326,
				rotation : 0
			}, {
				type : "box1",
				x : 77,
				y : 276,
				rotation : 0
			}, {
				type : "land8",
				x : 240,
				y : 151,
				rotation : 1.5707963267948966
			}, {
				type : "platform1",
				x : 243,
				y : 114,
				rotation : 0
			}, {
				type : "pers",
				x : 159,
				y : 363,
				rotation : 0
			}, {
				type : "land8",
				x : 201,
				y : 151,
				rotation : 1.5707963267948966
			}, {
				type : "land8",
				x : 163,
				y : 151,
				rotation : 1.5707963267948966
			}, {
				type : "cooler1",
				x : 200,
				y : 368,
				rotation : 0
			}, {
				type : "land8",
				x : 318,
				y : 119,
				rotation : 0
			}, {
				type : "grav1",
				x : 109,
				y : 369,
				rotation : 0
			}, {
				type : "grav2",
				x : 219,
				y : 180,
				rotation : 0
			}, {
				type : "land8",
				x : 323,
				y : 148,
				rotation : -0.5235987755982988
			}, {
				type : "land8",
				x : 327,
				y : 92,
				rotation : 0.5235987755982988
			}, {
				type : "land8",
				x : 129,
				y : 148,
				rotation : 1.7453292519943295
			}, {
				type : "land8",
				x : 93,
				y : 137,
				rotation : 2.0943951023931953
			}, {
				type : "land8",
				x : 61,
				y : 116,
				rotation : 2.443460952792061
			}, {
				type : "stone",
				x : 80,
				y : 80,
				rotation : 0
			}, {
				type : "box1",
				x : 112,
				y : 103,
				rotation : 0.3490658503988659
			}, {
				type : "land1",
				x : 32,
				y : 112,
				rotation : 0
			}, {
				type : "land5",
				x : 87,
				y : 305,
				rotation : 0
			}, {
				type : "land1",
				x : 52,
				y : 307,
				rotation : 0
			}, {
				type : "land5",
				x : 267,
				y : 355,
				rotation : 0
			}, {
				type : "land1",
				x : 231,
				y : 358,
				rotation : 0
			}, {
				type : "land1",
				x : 154,
				y : 397,
				rotation : 0
			}, {
				type : "land5",
				x : 190,
				y : 396,
				rotation : 0
			}, ]
	}
]; ;
