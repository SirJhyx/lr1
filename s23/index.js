const express = require('express');
const app = express();
const PORT = 4000;

/*Create the middleware */
app.use(express.json());
    //allows the server to handle data from the request
    //it parses incoming request with JSON payload and is based on body parser

app.use(express.urlencoded({extended:true}));
    //allows the server to handle data from requests coming forms and tables
    //it parses incoming request with JSON payload and is based on body parser


/*Establish routes*/
//server.method("endpoint", () => {})
app.get("/", (req,res) => res.send("Haller"));

/*
Exercise:
Create a route with the following details:
- endpoint is /hello
- method is get
- response: Hello from the /hello endpoint

*/
app.get("/hello", (req,res) => res.send("Hello from the /hello endpoint"));

app.post("/greeting", (req, res) => {
    console.log(req.body);
    res.send(`Hello there!, ${req.body.name}`)
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

