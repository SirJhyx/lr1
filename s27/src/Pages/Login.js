import {useState, useEffect} from 'react';

import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isActive, setIsActive] = useState(false)

    function loginUser(e) {
        e.preventDefault()

        alert("Login Successfully")
    }

    useEffect( () => {
        if (email !== "" && password !== "")
        {
            setIsActive(true)
        }
    }, [email, password])

    return (
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