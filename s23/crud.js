const express = require('express');
const app = express();
const PORT = 4000;

//create the middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ROUTES
    //endpoints
    //request listener
    //http methods

app.get("/", (req,res) => res.send("Welcome to my homepage"));
app.post("/login", (req,res) => {
    let name = req.body.name;
    res.send(`${name} successfully logged in!`)
});

/*
    Create a users mock database that is an empty array.
    If username and password are not empty string, push the documents in the array and return a response `User <name> successfully registered!`
    If username and password are empty string, return a response `Please fill out the complete information.`
    Endpoint is "/signup"

    CLUE: use post method

*/

let users = [];

//user sign up

app.post("/signup", (req,res) => {
    let username = req.body.username;
    let pw = req.body.password;

    if(username !== "" && pw !== "")
    {
        users.push(req.body);
        res.send(`User ${username} is successfully registered`);
    }else{
        res.send("Please fill out the complete information")
    }
});

//update password  - put method
app.put("/change-password",(req,res) => {
    let message = "";

    for (let i = 0; i < users.length; i++)
    {
        if(req.body.username == users[i].username){
            users[i].password = req.body.password;
            message = `User ${req.body.username}'s has been updated`;
        }
        else 
        {
            message = "User doesn't exist";
        }
    }
    console.log(users)
    res.send(message);   
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));