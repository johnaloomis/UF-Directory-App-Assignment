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
	  fs.readFile;
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
// a server is created, but not started
var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 3000
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});
console.log('Is the server started?');

fs.readFile('listings.json', 'utf8', function(err, data) {
	
	var fs = require("fs");
	var contents = fs.readFileSync("listings.json");
	listingData = JSON.parse(contents);
	
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
