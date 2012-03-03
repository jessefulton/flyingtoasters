var sio = require('socket.io')
	, express = require('express');

var app = express.createServer();

/**
 * GET serve when already rasterized.
 */

app.get('/', function(req,res) {
	res.end("hello world");
});


require('./routes').init(app);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    var addr = app.address();
	console.log('	 app listening on http://' + addr.address + ':' + addr.port);
    console.log('	NODE_ENV = ' + process.env.NODE_ENV);
});

