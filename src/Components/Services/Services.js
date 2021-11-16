import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Services</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="service-content" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <p className="text-center p-3">
                Creative Interiors, provides turn-key services for all of its
                projects commencing at concept and continuing beyond the
                project’s final punch list.  Below are some examples of services
                for the various potential requirements for an interior or
                exterior commercial design project
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
