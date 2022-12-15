import {useState, useEffect} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}){
    //courseProp - is an object 

    //destructure an object
    const {name, description, price} = courseProp
    
    /*
        Syntax: 
        const [getter,setter] = useState(initialGetterValue)
    */

    const [count,setCount] = useState(0); //this is the initial value for the number of seats in the booking system.
    const [seats,setSeats] = useState(0); //this is the inital value on the number of seats left

    const [isDisabled, setIsDisabled] = useState(false); //this will serve as a default state. Once the number of seats reached out, the button will be disabled.

    //perform the number of seats inside the function.
    function enroll() {
        if (seats > 0) {
            setCount(count + 1);
            console.log('Enrollees: ' + count)

            setSeats(seats - 1)
            console.log('Seats: ' + seats)
        } else {
            alert ("No more seats available")
        }
    }

    /*
        syntax:
        useEffect( cb(), [])
    */

        //consequence where no more seats left

    useEffect(() => {
        if (seats === 0) {
            setIsDisabled(true)
        }
    }, [seats])

    return (
        <Container fluid className="mb-5 mt-5">
            <Row className='justify-content-center'>
                <Col xs={10} md={8}>
                    <Card className='p-4'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Body>
                            <Card.Text>Description:</Card.Text>
                            <Card.Text>{description}</Card.Text>
                            <Card.Text>Price:</Card.Text>
                            <Card.Text>{price}</Card.Text>
                            <Card.Text>Enrollees {count}</Card.Text>
                            <Card.Text>Seats {seats}</Card.Text>

                            <Button variant="primary" onClick={enroll} disabled={isDisabled}>Enroll</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>  
    )
}

//Check if the CourseCard is getting the correct prop types

//Proptypes are used for validating information passed to a component and is a tool normally used to help the developers ensure that the correct information is passed from one component to another.

CourseCard.propTypes = {
    //shape method is used to check id a prop object conforms to a specific shape.
    courseProp: PropTypes.shape({
        //define the properties and their expected types
        name:PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price:PropTypes.number.isRequired
    })
}

