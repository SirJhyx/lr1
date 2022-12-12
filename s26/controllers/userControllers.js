//import the models
const User = require('./../models/User');
const Course = require('./../models/Course');

const bcrypt = require('bcrypt');
const auth = require('../auth');

module.exports.checkEmail = (reqBody) => {

    const {email} = reqBody;

    return User.findOne({email:email}).then((result, error) => {
        if (result != null)
        {
            return 'Email already exists'
        }
        else {
            if (result == null)
            {
                return 'Email not existing'
            }
            else {
                return error
            }
        }
    })
}

module.exports.register = (reqBody) => {

    let newUser = new User({
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        email: reqBody.email,
        password: bcrypt.hashSync(reqBody.password, 10),
        mobileNo: reqBody.mobileNo
    });

    //save()
    return newUser.save().then((result,error) => {
        if (result){
            return true
        } else {
            return error
        }
    })
}

module.exports.getAllUsers = () => {

    return User.find().then((result, error) => {

        if (result){
            return result
        } else {
            return error
        }

    })
}

module.exports.login = (reqBody) => {
    const {email, password} = reqBody;

    return User.findOne({email:email}).then((result, error) => {

        if (result == null){
            return false
        }
        else {
            //what if we found an existing email but the pw is incorrect?
            //check the code below

            let isPasswordCorrect = bcrypt.compareSync(password, result.password);

            if(isPasswordCorrect == true)
            {
                return {access:auth.createAccessToken(result)}
            }

            else {
                return false
            }
        }
    })
}

module.exports.getProfile = (data) => {
    const {id} = data;

    return User.findById(id).then((result, err) => {
        if (result != null)
        {
            result.password = "";
            return result
        } else {
            return false
        }
    })
}

module.exports.enroll = async (data) => {
    const {userId, courseId} = data;

    //to look for matching documents of the user
    const userEnroll = await User.findById(userId).then((result, err) => {
        if (err){
            return err
        }
        else {
            result.enrollments.push({courseId: courseId})
            return result.save().then(result => {
                return true
            })
        }
    })

    //look for matching courses
    const courseEnroll = await Course.findById(courseId).then ((result, error) => {
        if (error){
            return error
        }
        else {
            result.enrollees.push({userId: userId})
            return result.save().then (result => {
                return true
            })
        }
    })

    //to return only one value for the function enroll
    if (userEnroll && courseEnroll){
        return true
    }
    else {
        return false
    }
}

module.exports.newEnroll = (data) => {
    const {userId, courseId} = data;

    return User.findById(userId).then((result, err)=> {
        result.enrollments.push({courseId:courseId})

        if (result){
            console.log(result.enrollments.length);

            if (result.enrollments.length != 0){
                return result.enrollments.find( element => {
                    if (element.courseId == courseId){
                        console.log("if code block")
                        return false
                    } else {
                        return result.save().then(result => {
                            return true
                        })
                    }
                })
            }
        }

        else {
            return error
        }
    })
}