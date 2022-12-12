//jsonwebtoken - purely used for authentication
//authentication process:
    //sign
    //verify 
    //decode

/*
    JSON Web Token (JWT) - it is a standard that defines a compact and self-contained way for secure
    transmission of information as a JSON object.

    - it can be signed using a secret, public or provate key pair.

*/
//import the dependencies
const jwt = require('jsonwebtoken');

const secret = 'CourseBookingAPI';

//signing process
module.exports.createAccessToken =(user) => {
    const data = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    }

    return jwt.sign(data, secret, {});
}

//verify process
module.exports.verify = (req,res,next) => {
    //get the token in the header's authorization
    let token = req.header.authorization

    if(typeof token !== "undefined")
    {
        token = token.slice(7, token.length);
        //tells the server what routes, services, and resources the user is allowed to access.

        //syntax: jwt.verify (token, secret, cb(error, data))
        return jwt.verify(token,secret, (err,data) => {
            if (err){
                return res.send({auth:'failed'})
            } else {
                next();
            }
        })
    }
}

//decoding process
module.exports.decode = (token) => {
    if (typeof token != 'undefined')
    {
        token = token.slice(7, token.length)

        return jwt.verify(token, secret, (err,data) => {
            if (err){
                return null
            } else {
                return jwt.decode(token, {complete: true}).payload
            }
        })
    }
}