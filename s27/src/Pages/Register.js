import {useState, useEffect} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'

export default function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cp, setCp] = useState("")

    const [isActive, setIsActive] = useState(true)

    function registerUser(e) {
        e.preventDefault()

        setEmail("")
        setPassword("")
        setCp("")
        alert("Thank you for registering to our Enrollment System")
    }

    //using useEffect, we will disable the button to prevent submitting while it is empty.
    //allow the button to submit if input fields are not empty and passwords should match

    useEffect( () => {
        if ((email !== "" && password !== "") && (password === cp)){
            setIsActive(false)
        }
    }, [email, password, cp])

        return (
            <Container className="my-5">
                <Row className = "justify-content-center">
                    <Col xs={10} md={6}>
                        <Form
                            className = "border p-3"
                            onSubmit = {(e) => registerUser(e)}
                        >
                            {/*email*/}
                            <Form.Group className = "mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                    type="email"
                                    placeholder = "Enter your email address"
                                    value={email}
                                    onChange = {(e) => {
                                        setEmail (e.target.value)
                                    }}
                                />
                            </Form.Group>

                            {/*password*/}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}} />
                            </Form.Group>

                            {/*confirm password*/}
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Retype Password"
                                    value={cp}
                                    onChange={(e)=>{setCp(e.target.value)}} />
                            </Form.Group>

                            {/*confirm password*/}
                            <Button 
                                variant="primary" 
                                type="submit"
                                disabled={isActive}>

                                    Submit
                            </Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
}