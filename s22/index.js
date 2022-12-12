console.log("connected");
//Step 1: NodeJS and Postman Installation.
//link: https://nodejs.org/en
//it is recommended to use LTS (Long Time Support) because the software release is maintained for extended period of time.

//link for PostMan: https//www.postman.com/downloads/

//Step 2: Create a require() function
//similar to <script></script> tag
let http = require('http');

//Step 3: use createServer() method
//we can create HTTP server that listens to request on a specfied port and gives back response for the client.
http.createServer( function (request, response){
    //request - messages sent by the client
    //response - answer that was sent by the server
    //clients (FE) and servers (NodeJS, expressJS application) communicate by exchanging individual messages.

    //Step 4: create a writeHead
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //writeHead() - sets the status code for the response 200 (which means success/ok)
    //set the content type as a plain text messafe

    response.end('Hello Joey');
    //response.end() - terminates the response process
}).listen(4000);//the server will be assigned to port via the method listen

//how to run the NodeJS file? - use nodemon index.js and node index.js
//when we apply changes nodemon server will run
