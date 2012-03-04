/**
 * This handles the connection and dropping of websocket connections
 */
 
exports.init = function(app) {
    var io = require('socket.io').listen(app);
    var User = require('../user.js');
	io.set('log level', 1);
	if (process.env.NODE_ENV == "production") {
		io.configure(function () { 
		  io.set("transports", ["xhr-polling"]); 
		  io.set("polling duration", 10); 
		});
	}
	else {
		io.set('transports', [
			'websocket'
			, 'flashsocket'
			, 'htmlfile'
			, 'xhr-polling'
			, 'jsonp-polling'
		]);
	}	
	
    var socketPool = [];
    
    function fanOut(message, args) {
        socketPool.forEach( function (user, i, arr) {
            user.socket(message, args);
        });
    }
    
	io.sockets.on('connection', function (socket) {    
        var user; // assosciate a user with each socket connetion
        console.log("connected " + socket.id);

		socket.emit('join');
		//socket.broadcast.emit('otherJoined', "a new person joined");

		socket.on('connectedUsers', function(data, cb) {
			console.log('received call "connectedUsers"');
			cb();
		});

        socket.on('join', function (userData) {            
            if (user) return; // already joined

            user = new User(userData);          
            socketPool[user.id] = user;
            fanOut('join', user);
        });
        
		socket.on('leave', function (user) {
            delete socketPool[user.id];
			fanOut('left', user);
		});
    });
}; 
