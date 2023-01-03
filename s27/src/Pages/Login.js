import {useState, useEffect, useContext} from 'react';

import Swal from 'sweetalert2'

import {redirect} from 'react-router-dom'

import {Container, Row, Col, Form, Button} from 'react-bootstrap'

import UserContext from '../UserContext'
//useContext - used to unpack the data from the userContext

export default function Login() {

    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    const [isActive, setIsActive] = useState(false)

    useEffect ( () => {
        if (email !== "" && password !== "")
        {
            setIsDisabled(false)
        }else {
            setIsDisabled(true)
        }
    }, [email,password])

    function loginUser(e) {
        e.preventDefault()

        fetch('http://localhost:4000/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        })
        .then (response => response.json())
        .then (data => {
            if (typeof data !== "undefined")
            {
                //store data in the local storage
                localStorage.setItem("token", data.access)

                //invoke the function to retrieve user details
                userDetails(data.access)

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to Course Booking!"
                })
            } else {
                Swal.fire({
                    title: "Authentication Failed",
                    icon: "error",
                    text: "Check your login details and try again"
                })
            }
        })

        setEmail("")
        setPassword("")
    }

    // useEffect( () => {
    //     if (email !== "" && password !== "")
    //     {
    //         setIsActive(true)
    //     }
    // }, [email, password])

    const userDetails = (token) => {
        //send the request to the server
        fetch ('http://localhost:4000/api/users/details', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then (response => response.json())
        .then (data => {
            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            })
        })
    }

    return (
        
        (user.id !== null) ?
        <redirect to="/courses" />
        :
        <Container className = "my-5">
            <Row className="justify-content-center">
                <Col xs={10} md={6}>
                    <Form
                        className="border p-3"
                        onSubmit = {(e) => loginUser(e)}
                    >
                        {/*email*/}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange= {(e) => {
                                setEmail(e.target.value)
                            }} />
                        </Form.Group>

                        {/*password*/}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" 
                            value={password} onChange= {(e) => {
                                setPassword(e.target.value)
                            }} />
                        </Form.Group>

                        {/*submit button using ternary operator*/}
                        {
                            isActive?
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                            :
                            <Button
                                variant="primary"
                                type="submit"
                                disabled
                            >
                                Submit
                            </Button>
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}