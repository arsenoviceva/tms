import { Row, Col, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { VideoPlayer } from "./VideoPlayes";

export const Hero = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xl={6} className="hero-text ">
          <div className="badge-container">
            <Badge className="badge-hero ">
              White label booking software for agencies
            </Badge>
          </div>
          <p className="headline">
            Sell Oasis’s
            <span className="bg-orange"> brandable scheduling platform </span>
            as your own
          </p>
          <p className="hero-plain-text">
            Oasis White Label is the perfect solution for digital agencies and
            web developers working with clients who need a powerful booking
            system for their operation.
          </p>
          <Row>
            <Col lg={6}>
              <button className="hero-btn "> Get started for free</button>
              <p className="btn-info d-none d-lg-flex align-items-center justify-content-center">
                No credit card required
              </p>
              <p className="btn-info d-lg-none d-flex align-items-center justify-content-center m-0 py-1">
                ✓ No credit card required
              </p>
            </Col>
            <Col lg={6}>
              <button className="hero-btn-outline"> Book a demo</button>
            </Col>
          </Row>
        </Col>
        <Col
          xl={6}
          className="d-flex align-items-center justify-content-center"
        >
          <VideoPlayer videoSrc={"../../images/video.mp4"} />
        </Col>
      </Row>
    </Container>
  );
};
