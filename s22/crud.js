const http = require('http');
const PORT = 4000;

//create a mock data - array
let directory = [

    {
        name: "Jann Dave Apohin",
        email: "jann@mail.com"
    },

    {
        name: "Ralph Ocba",
        email: "ralph@mail.com"
    }

];

http.createServer( (req, res) => {

    //endpoint - /users
    //method: "GET"
    //response should return data from the mock data
    if(req.url == '/users' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(directory));
        //converts into string
        res.end();
    }

    //endpoint - /users
    //method: "POST"
    //response is to return the data that is being inserted in our mock data array
    //however, we must insert the data first in the mock array

    if(req.url == '/users' && req.method == 'POST')
    {
        let reqBody = "";
        //this is where we will declare our inputs in the postman

        req.on("data", (data) => {
            reqBody += data
        });

        req.on("end", () => {
            //parse reqBody to JavaScript object so that we can insert it to the mock database
            reqBody = JSON.parse(reqBody);

            //we will insert object in our array of objects in our mock data
            directory.push(reqBody);

            //now that we successfully added our object into the array we woll not send a response back to the client.
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(JSON.stringify(directory));
            res.end();
        });
    }
}).listen(PORT, () => console.log(`Server running at port ${PORT}`));
