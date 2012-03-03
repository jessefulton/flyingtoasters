exports.init = function(app) {
	require('./proxy').init(app);
	require('./sockets').init(app);
	
};