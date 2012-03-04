(function (window) {
    var serverURL = 'http://yourmom.com';
    var socket = io.connect(serverURL);

    // handle events from server
    socket.on('join', function (user) {
        // a user has joined the flock
        // add them to the scene
    });
    socket.on('leave', function (user) {
        // user is who left, and their info
        // nix their toaster from the scene
    });


    window.dataBridge = {
        'join': function(data) {
            socket.emit('join', data);   
        },
        'leave': function() {
            // screw it, no leaving without disconecting
        }    
    };
})(window);