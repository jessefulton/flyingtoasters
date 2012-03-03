var url = require('url');
var http = require('http');
	
exports.init = function(app) {
	app.get('/proxy/:image_url(*)', function(req, res, next){	  
	  var image_url = req.params.image_url;
	
	  var image_host_name = url.parse(image_url).hostname
	  var filename = url.parse(image_url).pathname.split("/").pop()
	
	  var http_client = http.createClient(80, image_host_name);
	  var image_get_request = http_client.request('GET', image_url, {"host": image_host_name});
	  image_get_request.addListener('response', function(proxy_response){
		var current_byte_index = 0;
		var response_content_length = parseInt(proxy_response.header("Content-Length"));
		var response_body = new Buffer(response_content_length);
	   
		proxy_response.setEncoding('binary');
		proxy_response.addListener('data', function(chunk){
		  response_body.write(chunk, current_byte_index, "binary");
		  current_byte_index += chunk.length;
		});
		proxy_response.addListener('end', function(){
		  res.contentType(filename);
		  res.send(response_body);
		});
	  });
	  image_get_request.end();
	});
};