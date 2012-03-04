
    var serverURL = window.location;
    console.log(serverURL);
    var socket = io.connect(serverURL);
	console.log("Socket Connected");
    // handle events from server
    socket.on('join', function (user) {
        // a user has joined the flock
        // add them to the scene
        window.dataBridge.messageToasterManager("join", {"userid": "foo"});
    });
    socket.on('leave', function (user) {
        // user is who left, and their info
        // nix their toaster from the scene
    });


    window.dataBridge = {
    	'messageToasterManager': function() {},
    	'registerMessageToasterManagerListener': function(fn) {
    		window.dataBridge.messageToasterManager = fn;
    	},
    	'messageServer': function(message, data, cb) {
    		console.log("messaging server " + message);
            socket.emit(message, data, cb);   
        },
        'join': function(data) {
            socket.emit('join', data);   
        },
        'leave': function() {
            // screw it, no leaving without disconecting
        }    
    };