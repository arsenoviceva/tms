import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "./dropdown/Dropdown";

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <>
      <div className="header-container">
        <div className="up-menu">
          <p className="text-white cursor-pointer"> Log In</p>
          <p className="text-white cursor-pointer"> Sign out</p>
        </div>
        <Row className="navbar">
          <Col lg={2} className="gap-10">
            <img src="../../images/logoeclipse.png" />
            <img src="../../images/oasis.png" />
          </Col>
          <Col
            lg={8}
            className="d-flex align-items-center justify-content-end gap-12"
          >
            <div className="nav-link-arrow">
              <nav className="nav-link"> Features</nav>
              <img src="../../images/arrow-down.png" />
            </div>
            <nav className="nav-link"> Demos </nav>
            <div className="nav-link-arrow" onClick={dropdownHandler}>
              <nav className="nav-link"> Who's it for?</nav>
              <img src="../../images/arrow-down.png" />
            </div>
            <div className="nav-link-arrow">
              <nav className="nav-link"> Resources</nav>
              <img src="../../images/arrow-down.png" />
            </div>
            <nav className="nav-link"> About us</nav>
            <nav className="nav-link"> Pricing</nav>
          </Col>
          <Col lg={2}>
            <button className="navbar-button"> Book a Demo</button>
          </Col>
        </Row>
      </div>
      {openDropdown ? <Dropdown /> : ""}
    </>
  );
};
