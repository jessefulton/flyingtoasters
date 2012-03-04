var express = require('express');

var app = express.createServer();

/**
 * App configuration.
 */
app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.favicon());
	app.use(app.router);
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
});



require('./routes').init(app);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    var addr = app.address();
	console.log('	 app listening on http://' + addr.address + ':' + addr.port);
    console.log('	NODE_ENV = ' + process.env.NODE_ENV);
});

