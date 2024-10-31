import { Row, Col, Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';


export const Hero = () => {
    return (
        <Container fluid className="hero-container">
            <Row> 
                <Col lg={6} className="hero-text">
                <Badge className="badge-hero"> White label booking software for agencies</Badge>
                <p className="headline">
                Sell Oasis’s <span className="bg-orange"> brandable scheduling platform </span> as your own
                </p>
                <p className="hero-plain-text"> Oasis White Label is the perfect solution for digital agencies and web developers working with clients who need a powerful booking system for their operation. </p>
                <Row> 
                    <Col lg={6}>
                        <button className="hero-btn "> Get started for free</button>
                    </Col> 
                    <Col lg={6}>
                        <button className="hero-btn-outline"> Book a demo</button>
                    </Col>
                </Row>              
                </Col>
                <Col lg={6}>
                b
                </Col>
            </Row>
        </Container>
    )
}