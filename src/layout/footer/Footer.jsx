import { Row, Col, Container } from "react-bootstrap";
import { SocialRatingIcons } from "./SocialRaitingIcons";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row className="align-items-center justify-content-center g-3">
          <Col xl={3}>
            <div className="d-none d-xl-flex icon-col">
              <div className="icon-rectangle">
                <img src="../../images/icon_vector.png" alt="icon" />
              </div>
              <div className="icon-col-text">
                <p className="m-0 d-flex align-items-center justify-content-center">
                  1500 +
                </p>
                <p className="small-text m-0 d-flex align-items-center justify-content-center">
                  GLOBAL AGENCIES
                </p>
              </div>
            </div>
            <div className="d-xl-none">
              <h5 className="text-center m-0 fw-bold">
                OVER 15, 000 GLOBAL CUSTOMERS
              </h5>
            </div>
          </Col>
          <Col xl={9}>
            <Row className="g-3 pb-3">
              <Col md={6} xl={3}>
                <SocialRatingIcons
                  logo={"../../images/Group1238.png"}
                  icon={"../../images/Vector.png"}
                  title={"Rating on Captera"}
                  rating={"5.0"}
                />
              </Col>
              <Col md={6} xl={3}>
                <SocialRatingIcons
                  logo={"../../images/Ratinglogos.png"}
                  icon={"../../images/Star1.png"}
                  title={"Rating on G2"}
                  rating={"4.6"}
                />
              </Col>

              <Col md={6} xl={3}>
                <SocialRatingIcons
                  logo={"../../images/Ratinglogos(1).png"}
                  icon={"../../images/Group1240.png"}
                  title={"on Trustpilot"}
                  rating={"Excellent"}
                />
              </Col>
              <Col md={6} xl={3}>
                <SocialRatingIcons
                  logo={"../../images/Ratinglogos(2).png"}
                  icon={"../../images/Vector.png"}
                  title={"Rating on GetApp"}
                  rating={"5/5"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
