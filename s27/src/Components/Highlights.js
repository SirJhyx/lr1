import {Container,Row,Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return (
        <Container fluid ClassName="mb-4">
            <Row>
                {/*card 1*/}
                <Col xs={12} md={4}>
                    <Card className="cardHighlights p-3">
                        <Card.Body>
                            <Card.Title>Learn From Home</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/*card 2*/}
                <Col xs={12} md={4}>
                    <Card className="cardHighlights p-3">
                        <Card.Body>
                            <Card.Title>Study Now, Pay Later</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/*card 3*/}
                <Col xs={12} md={4}>
                    <Card className="cardHighlights p-3">
                        <Card.Body>
                            <Card.Title>Be Part of Our Community</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}