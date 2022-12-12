const express = require('express');
const router = express.Router();

//require userController
const courseController = require('../controllers/courseControllers');

//required an authentication
const auth = require('../auth');

//methods creation

//1. Create a Course
router.post('/create-course', auth.verify, (req, res) => {
    courseController.createCourse(req.body).then(result => res.send(result));
})

//2. Retrieve all courses
router.get('/', (req, res) => {
    courseController.getAllCourses().then(result => res.send(result))
})

//3. Retrieve active course
router.get('/active-courses', auth.verify, (res) => {
    courseController.getActiveCourses().then(result => res.send(result))
})

//4. retrieve a specific course using findOne()
router.get('/specific-course', auth.verify, (req, res) => {
    courseController.getSpecificCourse(req.body.courseName).then(result => res.send(result))
})

//5. retrieve a specific course using findById()
router.get('/:courseId', auth.verify, (req, res) => {
    let paramsId = req.params.courseId
    courseController.getCourseById(paramsId).then(result => res.send(result));
})

//update isActive status of the course using findOneAndUpdate
//update isActive status to false
router.put('/archive', auth.verify, (req, res) => {
    courseController.archiveCourse(req.body.courseName).then(result => res.send(result))
})

//exercise
//update isActive status to true
//method unarchive

router.put('/unarchive', auth.verify, (req, res) => {
    courseController.unarchiveCourse(req.body.courseName).then (result => res.send(result))
})

//update isActive status using findByIdAndUpdate()
//set isActive status into false
router.put('/:courseId/archive', auth.verify, (req, res) => {
    courseController.archiveByCourseId(req.params.courseId).then(result => res.send(result))
})

//unarchive course by id
router.put('/:courseID/unarchive', auth.verify, (req,res) => {
    courseController.unarchiveCourseById(req.params.courseID).then(result => res.send(result))
})

//edit the course using course id
router.put('/:courseId/edit', auth.verify, (req,res) => {
    courseController.editCourse(req.params.courseId, req.body).then(result => res.send(result))
})

//delete course using findOneAndDelete()
router.delete('/delete-course', auth.verify, (req,res) => {
    courseController.deleteCourse(req.body.courseName).then (result => res.send(result))
})

//delete course using findByIDAndDelete()
router.delete('/:courseID/delete-course', auth.verify,  (req, res) => {
    courseController.deleteCourseById(req.params.courseID).then(result => res.send(result))
})


module.exports = router;