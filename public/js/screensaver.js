( function ($) {

    //vars	
	var state, counterID;	
	var waitTime = 3000; // miliseconds

	//constants
	var states = {
		'untouched': 1,
		'active': 2,
		'idle': 3
	];
	var interactionEvents = [
		'mouseMove',
		'mouseDown',
		'mouseUp',
		'keyDown'
	];



	var init = function() {
		state = states.untouched;

		// register event listeners
		interactionEvents.forEach( function (eventName) {
			$.on(eventName, interact); // ???
		});
	}

	var interact = function() {
		if ( state == states.untouched ) {
			state = states.active;
			startCounter();
		} else if ( state == states.active ) {
			resetCounter();
		} else if ( state == states.idle ) {
			endScreenSaver();
		}
	};

	var startCounter = function() {
		counterID = setTimeout(startScreenSaver, waitTime);
	}

	var resetCounter = function() {
		clearTimeout(counterId);
		startCounter();
	}

	var startScreenSaver = function () {
		//load bootstrap.js
	}

	var endScreenSaver = function () {
	}

	init();
})($);