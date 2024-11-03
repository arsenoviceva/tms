import { useState } from "react";
import { Dropdown } from "./dropdown/Dropdown";
import { Row, Col, Container } from "react-bootstrap";

const headerItems = [
  {
    id: 1,
    name: "Features",
    isDropdown: false,
  },
  {
    id: 2,
    name: "Demos",
    isDropdown: false,
  },
  {
    id: 3,
    name: "Who's it for",
    isDropdown: true,
  },
  {
    id: 4,
    name: "Resources",
    isDropdown: false,
  },
  {
    id: 5,
    name: "About us",
    isDropdown: false,
  },
  {
    id: 6,
    name: "Pricing",
    isDropdown: false,
  },
];

export const Header = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="header-container">
      <Container className="bg-primary py-3 gap-3">
        <Row>
          <Col
            md={6}
            lg={12}
            className="d-none d-xl-flex justify-content-end mb-3"
          >
            <a href="#" className="header-cta-button me-2">
              Login
            </a>
            <a href="#" className="header-cta-button ">
              Sign up
            </a>
          </Col>
          <div className="col-6 col-lg-2 d-flex align-items-center">
            <img src="../../images/logoeclipse.png" />
            <img
              src="../../images/oasis.png"
              className="d-none d-md-inline-block"
            />
          </div>
          <Col
            xs={6}
            className="d-lg-none d-flex justify-content-end align-items-center"
          >
            <a href="#" className="header-cta-button me-2">
              Login
            </a>
            <img
              src="/images/burger-menu.png"
              alt="burger icon"
              onClick={() => setIsHamburgerClicked((prev) => !prev)}
            />
            {isHamburgerClicked && (
              <div className="hamburger-wrapper">
                <div className="bg-primary">
                  <div className="container d-flex align-items-center justify-content-between py-3">
                    <img src="../../images/logoeclipse.png" />

                    <img
                      src="images/menu+signup.png"
                      className="text-white"
                      onClick={() => setIsHamburgerClicked(false)}
                    />
                  </div>
                </div>
                <div className="container">
                  <ul className="header-items mobile mb-0">
                    {headerItems?.map((navItem) => {
                      return (
                        <li
                          className="header-item mobile"
                          key={navItem?.id}
                          onClick={() =>
                            navItem?.isDropdown && dropdownHandler()
                          }
                        >
                          {navItem?.name}
                          {navItem?.isDropdown && (
                            <img src="../../images/icon.png" />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="footer-hamburger">
                  <button className="btn-signup my-2"> Sign up</button>
                  <button className="btn btn-secondary w-100 fw-bold">
                    Book a Demo
                  </button>
                </div>
              </div>
            )}
          </Col>
          <Col
            lg={8}
            className="d-none d-lg-flex align-items-center justify-content-end"
          >
            <ul className="header-items mb-0">
              {headerItems?.map((navItem) => {
                return (
                  <li
                    className="header-item"
                    key={navItem?.id}
                    onClick={() => navItem?.isDropdown && dropdownHandler()}
                  >
                    {navItem?.name}

                    {navItem?.isDropdown && (
                      <img src="../../images/arrow-down.png" />
                    )}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={2} className="d-none d-lg-flex">
            <button className="btn btn-secondary w-100 fw-bold">
              {" "}
              Book a Demo
            </button>
          </Col>
        </Row>
        {openDropdown ? <Dropdown /> : ""}
      </Container>
      {/*  */}
    </div>
  );
};

// <div className="header-container">
//         <div className="up-menu">
//           <p className="text-white cursor-pointer"> Log In</p>
//           <p className="text-white cursor-pointer"> Sign out</p>
//         </div>
//         <Row className="navbar">
//           <Col lg={2} className="gap-10">
//             <img src="../../images/logoeclipse.png" />
//             <img src="../../images/oasis.png" />
//           </Col>
//           <Col
//             lg={8}
//             className="d-flex align-items-center justify-content-end gap-12"
//           >
//             <ul>
//               <li className="nav-link">Features</li>
//               <li className="nav-link" onClick={dropdownHandler}>
//                 Who's it for?
//                 <img src="../../images/arrow-down.png" />
//               </li>
//               <li className="nav-link">Features</li>
//             </ul>
//             {/*
//             <nav className="nav-link"> Demos </nav>
//             <div className="nav-link-arrow">
//               <nav className="nav-link"> Who's it for?</nav>
//               <img src="../../images/arrow-down.png" />
//             </div>
//             <div className="nav-link-arrow">
//               <nav className="nav-link"> Resources</nav>
//             </div>
//             <nav className="nav-link"> About us</nav>
//             <nav className="nav-link"> Pricing</nav> */}
//           </Col>
//           <Col lg={2}>
//             <button className="navbar-button"> Book a Demo</button>
//           </Col>
//         </Row>
//       </div>
//       {openDropdown ? <Dropdown /> : ""}
