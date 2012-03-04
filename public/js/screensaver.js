$(function() {

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
			console.log(eventName);
			$(document.body).on(eventName, interact); // ???
		});
		startCounter();
	}

	var interact = function() {
		console.log(state);
		if ( state == states.untouched ) {
			startCounter();
		} else if ( state == states.active ) {
			resetCounter();
		} else if ( state == states.idle ) {
			endScreenSaver();
		}
		state = states.active;
	};

	var startCounter = function() {
		counterID = setTimeout(startScreenSaver, waitTime);
	}

	var resetCounter = function() {
		stopCounter();
		startCounter();
	}
	
	var stopCounter = function() {
		clearTimeout(counterID);
	}

	var startScreenSaver = function () {
		console.log("STARTING SCREENSAVER");
		state = states.idle;
		stopCounter();
		$("#application-container").show();
		//load bootstrap.js
	}

	var endScreenSaver = function () {
		console.log("STOPPING SCREENSAVER");
		startCounter();
		$("#application-container").hide();
	}

	init();
});