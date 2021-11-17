import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FooterLogo from "../Images/footer-logo.png";



const Footer = () => {
  return (
    <div>
      <div id="footer" className="pt-2 pb-2 pt-md-2 pb-md-2 bg-dark text-light">
        <Container>
          <Row>
            <Col md={3} className="align-self-center">
              <div className="text-center">
                <Image src={FooterLogo} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h2 className="pt-2 pb-2">Quick Links</h2>
                <ul>
                  <li>
                    <a href="/">Latest Events</a>
                  </li>
                  <li>
                    <a href="/">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Career</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pt-2">Latest Posts</h2>
              <ul>
                <li>
                  <a href="/"></a>Lorem Ipsum
                </li>
                <li>
                  <a href="/"></a>Lorem Ipsum
                </li>
                <li>
                  <a href="/"></a>Lorem Ipsum
                </li>
                
              </ul>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pb-2 text-center text-md-start">
                Recent News
              </h2>
              <ul>
                <li>
                  <a href="/"></a>Lorem Ipsum
                </li>
                <li>
                  <a href="/"></a>Lorem Ipsum
                </li>
                <li>
                  <a href="/"></a>Lorem Ipsum
                </li>
                
              </ul>
            </Col>
          </Row>
          <div className="border-top border-light">
            <Row>
              <Col md={12}>
                <p className="text-center text-light m-0 pt-2 pb-1">
                  Copy Rights reserved by Creative Desgns. Developed by{" "}
                  <a href="http://shanthaswebz.com" target="_blank">
                    LDCB.
                  </a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
