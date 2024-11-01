import { Row, Col, Container } from "react-bootstrap";
import { SocialRatingIcons } from "./SocialRaitingIcons";

export const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="align-items-center justify-content-between">
        <Col lg={3} className="icon-col">
          <div className="icon-rectangle">
            <img src="../../images/icon_vector.png" />
          </div>
          <div className="icon-col-text">
            <p className="m-0 d-flex align-items-center justify-content-center">
              1500 +
            </p>
            <p className="small-text m-0 d-flex align-items-center justify-content-center">
              GLOBAL AGENCIES
            </p>
          </div>
        </Col>
        <Col className="social-icons-col">
          <SocialRatingIcons
            logo={"../../images/Group1238.png"}
            icon={"../../images/Vector.png"}
            title={"Rating on Captera"}
            rating={"5.0"}
          />
          <SocialRatingIcons
            logo={"../../images/Ratinglogos.png"}
            icon={"../../images/Star1.png"}
            title={"Rating on G2"}
            rating={"4.6"}
          />
          <SocialRatingIcons
            logo={"../../images/Ratinglogos(1).png"}
            icon={"../../images/Group1240.png"}
            title={"on Trustpilot"}
            rating={"Excellent"}
          />
          <SocialRatingIcons
            logo={"../../images/Ratinglogos(2).png"}
            icon={"../../images/Vector.png"}
            title={"Rating on GetApp"}
            rating={"5/5"}
          />
        </Col>
      </Row>
    </Container>
  );
};
