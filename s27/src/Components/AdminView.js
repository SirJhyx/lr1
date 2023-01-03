//Admin Account - establishes CRUD Operations

import {useState, Fragment, useEffect} from 'react';

import {Container,Button, Row, Col, Table, Modal, Form} from 'react-bootstrap';

import Swal from 'sweetalert2';

export default function AdminView(props){
    const {courseData, fetchData} = props
    //it composed of array courses received by an admin view component from parent course component

    //set the default values
    const [name, setName] = useState("")
    const [description, setDescription] = ("")
    const [price, setPrice] = useState(0)
    const [courseId, setCourseId] = useState("")
    const [courses, setCourses] = useState("")

    //add course button state
    const [showAdd, setShowAdd] = useState(false)

    //function to open and close button
    const openAdd = () => setShowAdd(true)

    const closeAdd = () => setShowAdd(false)

    useEffect( () =>{
        const courseArr = courseData.map (course => {
            return (
                <tr>
                    <td>{course.courseName}</td>
                    <td>{course.description}</td>
                    <td>{course.price}</td>
                    <td>
                        {
                            (course.isActive === true) ? <span>Available</span>
                            :
                            <span>Unavailable</span>
                        }
                    </td>
                    <td>
                        <Button
                            onClick={() => openEdit(course.id)}
                        >
                            Update
                        </Button>

                        {
                            (course.isActive) ?
                            
                                <Fragment>
                                    <Button 
                                        variant="danger"
                                        onClick={() => archiveCourse(course.id, course.isActive)}
                                    >
                                        Disable
                                    </Button>
                                    <Button variant="secondary">Delete</Button>
                                </Fragment>
                            :

                            <Fragment>
                                <Button variant="success">Enable</Button>
                                <Button variant="secondary">Disable</Button>
                            </Fragment>
                        }

                    </td>
                </tr>
            )
        })
        setCourses(courseArr)
    }, [courseData])

    //creation of subfunctions
    /*
        add course function to be invoked when onSubmit event takes place
    */

        const addCourse = (e) => {
            e.preventDefault()

            fetch("http://localhost:4000/api/courses/create-course", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    courseName:name,
                    description:description,
                    price:price
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data === true) {
                    Swal.fire({
                        title:"Success",
                        icon: "success",
                        text: "Course successfully added"
                    })

                    //set back to original state (set to default) after successfully added the course
                    setName("")
                    setDescription("")
                    setPrice(0)

                    //close the modal after the alert.
                    closeAdd();

                    //function that will pass from courses page component to retrieve all courses
                    fetchData() 

                } else {
                    Swal.fire({
                        title: "Something went wrong",
                        icon: "error",
                        text: "Please try again"
                    })

                    fetchData()
                }
            })
        }

        //create a function to populate data in the form upon clicking the Update button

        const openEdit = () => {
            fetch("http://localhost:4000/api/courses/${courseId}", {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setName(data.courseName)
                setDescription(data.description)
                setPrice(data.price)
            })

            setShowAdd(true)
        }

        //edit course function to be invoked when onSubmit event takes place
        const editCourse = (e) => {
            e.preventDefault()

            fetch("http://localhost:4000/api/courses/${courseId}/edit", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    courseName: name,
                    description: description,
                    price:price
                })
            })
            .then(response => response.json())
            .then(data => {
                if (typeof data !== "undefined")
                {
                    fetchData()

                    Swal.fire({
                        title: "Success",
                        icon: "success",
                        text: "Course successfully updated."
                    })

                    closeAdd()
                } else {
                    Swal.fire({
                        title: "Something went wrong",
                        icon: "error",
                        text: "Please try again"
                    })

                    fetchData()
                }
            })
        }

        //archive course
        const archiveCourse = (courseId, isActive) => {
            fetch(`http://localhost:4000/api/courses/${courseId}/archive`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem("token")}` 
                },
                body: JSON.stringify({
                    isActive:!isActive
                })
            })
            .then(response => response.json())
            .then (data => {
                if (data === true) {
                    fetchData()

                    Swal.fire({
                        title: "Success",
                        icon: "success",
                        text: "Course disabled."
                    })
                }else {
                    fetchData()

                    Swal.fire({
                        title: "Something went wrong",
                        icon: "error",
                        text: "Please try again"
                    })

                }
            })
        }

        //layout for admin dashboard
        return (
            <Container>
                <h2 className="text-center">Admin Dashboard</h2>
                <Row className="justify-content-center">
                    <Col>
                        <div className="text-right">
                            <Button onClick={openAdd}>Add New Course</Button>
                        </div>
                    </Col>
                </Row>

                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Descrption</th>
                            <th>Price</th>
                            <th>Availability</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {courses}
                    </tbody>
                </Table>

                {/*Add course using a modal*/}
                <Modal show = {showAdd} onHide={closeAdd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Course</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={(e) => addCourse(e)}>
                            <Form.Group controlId='courseName'>
                                <Form.Label>Course Name:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='courseDescription'>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='coursePrice'>
                                <Form.Label>Price:</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>

                            <Button type="submit" variant="success">Submit</Button>
                            <Button type="submit" variant="secondary" onClick={closeAdd}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/*Edit course using a modal*/}
                <Modal show={showAdd} onHide={closeAdd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit = {(e) => editCourse(e,courseId)}>
                            <Form.Group controlId='courseName'>
                            <Form.Label>Course Name:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='courseDescription'>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='coursePrice'>
                                <Form.Label>Price:</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>
                            
                            <Button type="submit" variant="success">Submit</Button>
                            <Button type="submit" variant="secondary" onClick={closeAdd}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        )

}