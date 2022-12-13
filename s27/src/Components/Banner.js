import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Banner(){
    return(

        <div className='container-fluid mt-2'>
            <div className='row justify-content-center'>
                <Card>
                    <Card.Header>Welcome to React-Booking Application</Card.Header>
                    <Card.Body>
                    <Card.Title>Opportunities for everyone and everywhere!</Card.Title>
                    <Card.Text>
                        Lorem Ipsum
                    </Card.Text>
                    <Button variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    );
}