var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib');

var app = express.createServer();

/**
 * App configuration.
 */
app.configure(function () {
	app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }))
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(express.favicon());

	// "app.router" positions our routes 
	// above the middleware defined below,
	// this means that Express will attempt
	// to match & call routes _before_ continuing
	// on, at which point we assume it's a 404 because
	// no route has handled the request.
	
	app.use(app.router);

	app.set('views', __dirname+"/views");

	app.set('view engine', 'jade');

	function compile (str, path) {
		return stylus(str)
			.set('filename', path)
			.use(nib());
	};
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

