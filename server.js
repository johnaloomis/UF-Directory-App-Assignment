var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  var u = parsedUrl.path;
  if(u === '/listings')
  {
	  response.writeHead(200);
	  response.write(JSON.stringify(listingData));
	  response.end();
  }
  else{
	  response.writeHead(404);
	  response.write("Bad gateway error");
	  response.end();
  }
  
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};


fs.readFile('listings.json', 'utf8', function(err, data) {
	
	var server = http.createServer(requestHandler);
	server.listen(port, function() {
		console.log('Server listening on: http://127.0.0.1:' + port);
		});
	var fs = require("fs");
	var contents = fs.readFileSync("listings.json");
	listingData = JSON.parse(contents);
	
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
