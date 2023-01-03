import  {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default function Banner({data}){
    const {title, content, destination, label} = data;

    return(

        <div className='container-fluid mt-2'>
            <div className='row justify-content-center'>
                <Card>
                    <Card.Header>Welcome to React-Booking Application</Card.Header>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Link to={destination}>{label}</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    );
}