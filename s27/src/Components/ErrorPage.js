import {Container,Row,Col, Card} from 'react-bootstrap';

export default function ErrorPage() {
    <Container className = "my-5">
        <Row className = "justify-content-center">
            <Col xs={10} md={8}>
                <Card>
                    <Card.Body>The page you are looking for cannot be found.</Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
}