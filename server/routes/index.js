exports.init = function(app) {
	require('./proxy').init(app);
	require('./sockets').init(app);
	
	app.get('/', function(req, res){	  
		res.render('index', { 
			layout: false
			, locals: { 
				"bodyClasses": "index"
				, "socketConnectUrl": app.set('siteUrl')
			}
		
		});
	});
};