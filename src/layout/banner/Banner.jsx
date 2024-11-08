import { Row, Col, Container } from "react-bootstrap";
import { Countdown } from "./Countdown";

export const Banner = () => {
  return (
    <div className="banner-container position-relative ">
      <img
        src="../../images/eclipsel.png"
        className="eclipse-circle left"
        alt="banner-eclipse"
      />
      <Container>
        <Row className="align-items-center">
          <Col lg={4} md={3} className="z-index-1">
            <p className="text-white"> Black Friday</p>
            <p className="banner-text-blue"> Cyber Monday</p>
          </Col>
          <Col lg={4} md={6}>
            <div className="countdown d-none d-md-block">
              <p className="countdown-title">sale up to 60% off</p>
              <Countdown duration={7 * 24 * 60 * 60 * 1000} />
            </div>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-md-end z-index-1 "
          >
            <button className="banner-button"> Shop Now</button>
          </Col>
        </Row>
      </Container>
      <div></div>
      <img
        src="../../images/icon_close.png"
        className="icon-close"
        alt="close"
      />
      <img
        src="../../images/eclipser.png"
        className="eclipse-circle right"
        alt="banner-eclipse"
      />
    </div>
  );
};
