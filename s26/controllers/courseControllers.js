const { ModalTitle } = require('react-bootstrap');
const Course = require('../models/Course');

module.exports.createCourse = (reqBody) => {
    let newCourse = new Course({
        courseName: reqBody.courseName,
        description: reqBody.description,
        price: reqBody.price
    })

    return newCourse.save().then((result,error) => {
        if (error)
        {
            return false
        }
        else {
            return true
        }
    })
}

module.exports.getAllCourses = () => {

    return Course.find().then ((result, error) => {
        if (error) {
            return false
        }else {
            return result
        }
    })
    
}

module.exports.getActiveCourses = () => {

    return Course.find({isActive:true}).then((result, err) => {
        if (err)
        {
            return false
        } else {
            return result
        }
    })
}

//get specific course
module.exports.getSpecificCourse = (reqBody) => {
    //look for the matching document in the database
    return Course.findOne({courseName:reqBody}).then((result, error) => {
        
        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }
    })
}

module.exports.getCourseById = (params) => {
    //look for matching filter
    return Course.findById(params).then((result, error) => {
        //if matching document not found, return course not exisiting
        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }
    })
}

module.exports.archiveCourse = (reqBody) => {

    let courseStatus = {
        isActive: true
    }

    return Course.findOneAndUpdate({courseName:reqBody}, courseStatus).then((result,error) => {
        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }
    })
}

module.exports.unarchiveCourse = (reqBody) => {
    let courseStatus = {
        isActive: true
    }

    return Course.findOneAndUpdate({courseName:reqBody}, courseStatus).then((result,error) => {
        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }
    })
}

module.exports.archiveCourseById = (params) => {
    
    return Course.findByIdAndUpdate(params, {isActive:false}).then((result, error) => {
        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }
    })
}

module.exports.unarchiveCourseById = (params) => {

    return Course.findByIdAndUpdate (params, {isActive: true}).then((result, error) => {

        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }

    })
}

module.exports.deleteCourse = (name) => {
    //look for matching document in the database and delete the matching document

    return Course.findOneAndDelete({courseName:name}).then((result, error) => {

        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }

    })
}

module.exports.deleteCourseById = (id) => {
    
    return Course.findByIdAndDelete(id).then((result,error) => {

        if (result == null)
        {
            return 'Course not existing'
        }
        else {
            if (result) {
                return result
            } else {
                return error
            }
        }

    })
}

module.exports.editCourse = (id, reqBody) => {
    
    const {courseName, description, price} = reqBody

    let updatedCourse = {

        courseName: courseName,
        description: description,
        price:price

    }

    return Course.findByIdAndUpdate(id, updatedCourse, {new:true}).then((result, error) => {
        
        if (error){
            return error
        } else {
            return result
        }
    })
}