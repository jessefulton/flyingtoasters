var http = require('http')
	, sys = require('sys')
	, url = require('url')
	, express = require('express');

var app = express.createServer();

/**
 * GET serve when already rasterized.
 */

app.get('/', function(req,res) {
	res.end("hello world");
});

app.get('/2', function(req,res) {
	res.end("hello world2");
});


app.get('/proxy/:image_url(*)', function(req, res, next){
//app.get('/proxied_image/:image_url', function(request_from_client, response_to_client){
  sys.puts("Starting proxy");
  
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


var port = process.env.PORT || 3000;
app.listen(port, function () {
    var addr = app.address();
	console.log('	 app listening on http://' + addr.address + ':' + addr.port);
    console.log('	NODE_ENV = ' + process.env.NODE_ENV);
});

