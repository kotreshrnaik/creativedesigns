import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";
import Logo from "../../Images/logo2.png";

const TopMenuBar = () => {
  return (
    <div>
      <div className="sticky-top">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          id="navbar"
        >
          <Container>
            <Navbar.Brand href="/">
              <Image src={Logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/about">ABOUT US</Nav.Link>
                <Nav.Link href="/services">SERVICES</Nav.Link>
                <Navbar.Brand href="/">
                  <Image src={Logo} className="img-fluid" alt="Logo" />
                </Navbar.Brand>
                <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
                <Nav.Link href="/portfolio">PRICING</Nav.Link>
                <Nav.Link href="/portfolio">CONTACT US</Nav.Link>
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
    </div>
  );
};

export default TopMenuBar;
