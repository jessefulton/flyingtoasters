window._LOADED = false;
window._PAUSED = true;
window.playCanvasStatus = function(s) {
	if (s >= 100) {
		_LOADED = true;
	}
}

$(function() {
	var nayGl = function() {
		$(document.body).addClass("nogl");
	}
	
	var initDesktop = function() {
		$("#about-icon").on('click', function() {
			$("#about").show();
		});
		$("#about .OK, #about .close").on('click', function() {
			$("#about").hide();
		});
		$(document.body).addClass("loaded");
		screenSave();
	}

	var screenSave = function() {
	
		//vars	
		var state, counterID;	
		var waitTime = 3000; // miliseconds
	
		//constants
		var states = {
			'untouched': 1,
			'active': 2,
			'idle': 3
		};
		
		//TODO: we may want to limit the mousemove event (using setTimeout)
		var interactionEvents = [
			'mousemove',
			'mousedown',
			//'mouseup',
			'keydown'
		];
	
	
	
		var init = function() {
			state = states.untouched;
	
			// register event listeners
			interactionEvents.forEach( function (eventName) {
				$(document.body).on(eventName, interact); // ???
			});
			startCounter();
		}
	
		var interact = function() {
			if ( state == states.untouched ) {
				startCounter();
			} else if ( state == states.active ) {
				resetCounter();
			} else if ( state == states.idle ) {
				endScreenSaver();
			}
			state = states.active;
		};
	
		var startCounter = function(t) {
			counterID = setTimeout(startScreenSaver, t ? t : waitTime);
		}
	
		var resetCounter = function() {
			stopCounter();
			startCounter();
		}
		
		var stopCounter = function() {
			clearTimeout(counterID);
		}
	
		var startScreenSaver = function () {
			//console.log("STARTING SCREENSAVER");
			state = states.idle;
			stopCounter();
			window._PAUSED = false;
			window.setTimeout(function() {$("#application-container").fadeIn(800)}, 200);
			//load bootstrap.js
		}
	
		var endScreenSaver = function () {
			//console.log("STOPPING SCREENSAVER");
			startCounter();
			window._PAUSED = true;
			window.setTimeout(function() {$("#application-container").fadeOut(200)}, 200);
		}
	
		init();
	}

	var loadScene = function(cb) {
		jQuery.getScript("/bootstrap.js");
		var boot = window.setInterval(function() {
			if (_LOADED) {
				window.clearInterval(boot);
				$("#application-container").hide();
				cb();
				console.log('\n');
				console.log('**************************');
				console.log('loaded');
				console.log('**************************');
				console.log('\n');
			}
		}, 250);
	}
	
	var yayGl = function() {
		$(document.body).addClass("webgl");	
		//loadScene(initDesktop);
		window.setTimeout(function() {loadScene(initDesktop);}, 1000);
	}


	//Feature test WebGL
	//via https://github.com/senchalabs/philogl/blob/master/src/webgl.js#L384-395			
	try {
		var canvas = document.createElement('canvas');
		var hasGl = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
		if (hasGl) { yayGl(); }
		else { nayGl(); }
	} catch(e) {
		nayGl();
	}

});