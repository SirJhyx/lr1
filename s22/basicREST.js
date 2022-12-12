const http = require ('http');
const PORT = 4000;

http.createServer( (request, response) => {
    console.log("Hello");

    if (request.url == '/profile' && request.method == 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Welcome to my page!');
    }
    //Create an endpoint called “/profile”. Use HTTP method “POST”.

    else if (request.url == '/profile' && request.method == 'POST') {
        //Create a response with a statement “Data to be send to the database”
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end("Data to be send to the database");
    }
    //For the endpoint doesn’t exist, send a response “Request Cannot Be Completed”
    else {
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.end("Request Cannot Be Completed");
    }

    
}).listen(PORT);

console.log(`Server is connected at localhost: ${PORT}`);

//Exercise:
/*
    Use the existing code discussion.
    Create an endpoint called “/profile”.
    Use HTTP method “POST”.
    Create a response with a statement “Data to be send to the database”
    For the endpoint doesn’t exist, send a response “Request Cannot Be Completed”.
    Ensure that the endpoint is running on PostMan.
*/