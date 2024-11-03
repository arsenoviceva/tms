import { Container, Row, Col } from "react-bootstrap";
import { Service } from "./Servise";

export const Dropdown = () => {
  return (
    <Container className="dropdown-container">
      <Row>
        <Col lg={8} className="p-24 gap-12 ">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="flex-column">
              <p> PROFESSIONAL SERVICES</p>
              <Service
                icon={"../../images/industryicons.png"}
                title={"Government & Administration"}
              />
              <Service
                icon={"../../images/industryicons1.png"}
                title={"Digital Businesses"}
              />
              <Service
                icon={"../../images/industryicons2.png"}
                title={"B2B sales"}
              />
              <Service
                icon={"../../images/industryicons3.png"}
                title={"HR & Recruitment"}
              />
              <Service icon={"../../images/reatailicon.png"} title={"Retail"} />
              <p> BEAUTY AND HAIR</p>
              <Service
                icon={"../../images/industryicons4.png"}
                title={"Salons"}
              />
              <Service
                icon={"../../images/industryicons5.png"}
                title={"Barbershop"}
              />
            </Col>
            <Col lg={6} className="flex-column">
              <p> PROFESSIONAL SERVICES</p>
              <Service
                icon={"../../images/industryicons6.png"}
                title={"Individual business owners"}
              />
              <Service
                icon={"../../images/industryicons7.png"}
                title={"Home services"}
              />
              <Service
                icon={"../../images/industryicons8.png"}
                title={"Cleaning services"}
              />
              <Service
                icon={"../../images/industryicons9.png"}
                title={"Automotive services"}
              />
              <p> EDUCATION AND COACHING</p>
              <Service
                icon={"../../images/industryicons10.png"}
                title={"Digital businesses"}
              />
              <Service
                icon={"../../images/industryicons11.png"}
                title={"Education & Teaching"}
              />
              <Service
                icon={"../../images/industryicons12.png"}
                title={"Fitness & Sports"}
              />
            </Col>
            <Col
              lg={12}
              className="bg-info d-flex align-items-center justify-content-between p-12 rounded-12"
            >
              <div>
                <p> Can't find your industry?</p>
                <p className="  fw-normal  ">
                  Book a demo to see if we're match!
                </p>
              </div>
              <button className="dropdown-button">BOOK A DEMO</button>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="bg-info p-24 gap-12 ">
          <p> WHITE LABEL SOLUTIONS</p>
          <Service
            icon={"../../images/industryicons10.png"}
            title={"For Agencies"}
          />
        </Col>
      </Row>
    </Container>
  );
};
