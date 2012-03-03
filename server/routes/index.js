exports.init = function(app) {
	require('./proxy').init(app);
	require('./sockets').init(app);
	
	app.get('/', function(req, res){	  
		res.render('index', { layout: true, locals: { "bodyClasses": "index", "hideNav": true} });
	});
};