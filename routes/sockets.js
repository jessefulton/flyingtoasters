/**
 * This handles the connection and dropping of websocket connections
 */
 
exports.init = function(app) {
    var io = require('socket.io').listen(app);
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
    
    var users = [];
    var generateId = (function (){
        var counter = 1;
        return function () { return counter++;};
    });
    
    var disconnecting = [];
    var timeToReconnect = 3000; // milliseconds
    
    io.sockets.on('connection', function (socket) {
       console.log("connection " + socket.id);
       
       var id = generateId();
        
        var join = function(claimId, data) {            
            var user = data;
            
            // listen and guard reconnects
            if ((claimId != id) && (disconnecting[claimId])) { //new socket, old user, (reconnecting), ensure?
                id = claimId;
                clearTimeout(user.disconnecting);
                delete disconnecting[id] == undefined;
                return;
            }            
            
            user.id = id;
            users[id] = user;            
            socket.broadcast.emit('arrivalNotification', user);
            
            console.log('user #' + id + ' has joined');
        }
        
        socket.emit('acknowledgeConnection', {'users':users, 'id': id}, join);        
        
        socket.on('disconnect', function() {
            console.log("disconnect " + socket.id);
            
            // dont tell everyone right away, give them a second to reconnect
            disconnecting[id] = setTimeout(timeToReconnect, function () {                
                socket.broadcast.emit('departureNotification', users[id]);
                delete users[id];
            });
        });
        
    });
}; 
