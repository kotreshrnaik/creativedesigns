import React from "react";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/logo-1.png";

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
                <Nav.Link as={Link} to="/creativedesigns">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  ABOUT US
                </Nav.Link>
                <NavDropdown title="SERVICES" id="services">
                  <NavDropdown.Item as={Link} to="/interior-design">
                    Interior Design
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/constructions">
                    Constructions
                  </NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand
                  as={Link}
                  to="/"
                  className="d-none d-sm-none d-md-block text-center m-0"
                >
                  <div className="text-center">
                    <Image src={Logo} className="img-fluid" alt="Logo" />
                  </div>
                </Navbar.Brand>
                <Nav.Link as={Link} to="/portfolio">
                  PORTFOLIO
                </Nav.Link>
                <Nav.Link as={Link} to="/pricing">
                  PRICING
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  CONTACT US
                </Nav.Link>
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
