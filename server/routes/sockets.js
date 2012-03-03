//var ObjectId = require('mongoose').Types.ObjectId; 
//var async = require('async');

exports.init = function(app) {

	app.get('/socket', function(req,res) {
		res.end("fubar");
	});

	console.log("INSIDE SOCKETS");
}; 
