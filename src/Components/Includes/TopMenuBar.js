import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";
import Logo from "../Images/logo.png";

const TopMenuBar = () => {
  return (
    <>
      <div className="sticky-top shadow" id="navbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          id="navbar"
        >
          <Container>
            <Navbar.Brand className="d-block d-md-none">
              <Image src={Logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/about">ABOUT US</Nav.Link>
                <Nav.Link href="/services">SERVICES</Nav.Link>
                <Navbar.Brand href="/">
                  <Image src={Logo} className="img-fluid" alt="Logo" />
                </Navbar.Brand>
                <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
                <Nav.Link href="/pricing">PRICING</Nav.Link>
                <Nav.Link href="/contact">CONTACT US</Nav.Link>
              </Nav>
              {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default TopMenuBar;
