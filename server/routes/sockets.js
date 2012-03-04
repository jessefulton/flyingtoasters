/**
 * This handles the connection and dropping of websocket connections
 */
exports.init = function(app) {
	var io = require('socket.io').listen(app)
	io.set('log level', 1);
	
	
	io.set('transports', [
		'websocket'
		, 'flashsocket'
		, 'htmlfile'
		, 'xhr-polling'
		, 'jsonp-polling'
	]);
	

	io.sockets.on('connection', function (socket) {
		socket.emit('foo');
		console.log("connection " + socket.id);
		socket.on('disconnect', function () {
			console.log('disconnect');
			//let's wait 2 seconds to see if player reconnects
			/*
			setTimeout(function(){
				console.log("Still disconnected? " + socket.connected + " " + socket.connecting);
				if (!socket.connected && !socket.connecting) {
					if (socket.partner) {
						socket.partner.emit("game:end", PARTNER_DISCONNECT);
					}
					//disconnectPlayer(socket);
				}
			}, 2000);
			*/
		});
		

	});
}; 
