    var userID = null;
    var serverURL = window.location;
    console.log(serverURL);
    var socket = io.connect(serverURL, {
      'reconnect': true,
      'reconnection delay': 500,
      'max reconnection attempts': 10
    });
    
    console.log("Socket Connected");
    // handle events from server
    
    
    socket.on('acknowledgeConnection', function (user, respond) {

    	//TODO: check if user.id already present
    	respond(user.id, {});
         //window.dataBridge.messageToasterManager("joinRequest", givenId, respond);
    });
    
    socket.on('arrivalNotification', function (user) {
        // a user has joined the flock
        // add them to the scene
        //console.log(user.id);
        console.log('arrival notification');
        //window.dataBridge.joinListener(); //messageToasterManager("someoneJoined", user);
        var toaster = application.context.root.findByName('Toaster');
        application.context.systems.script.message(toaster, 'network_events', 'join');
    });
    
    socket.on('departureNotification', function (user) {
        // user is who left, and their info
        // nix their toaster from the scene
        console.log('departure notification');
        window.dataBridge.leaveListener(); //messageToasterManager("someoneJoined", user);
    });
    
    /*
    socket.on('userID', function(userID) {
        //only set userID once
        if (!userID) {
            userID = userID;
        }
    });
    
    //socket.on('otherJoined', function(msg) { alert(msg); });
    
    */

	//the listeners are durrrrrtay...
    window.dataBridge = {
        'messageToasterManager': function() {},
        'joinListener': function() {},
        'leaveListener': function() {},
        'registerMessageToasterManagerListener': function(fn) {
            window.dataBridge.messageToasterManager = fn;
        },
        'registerJoinListener': function(fn) {
            window.dataBridge.joinListener = fn;
        },
        'registerLeaveListener': function(fn) {
            window.dataBridge.leaveListener = fn;
        },
        'messageServer': function(message, data, cb) {
            console.log("messaging server " + message);
            socket.emit(message, data, cb);   
        }
    };
