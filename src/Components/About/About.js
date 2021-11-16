import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slide1 from "../Images/about/about.png";

const About = () => {
  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">About</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8} className="align-self-center">
              <h3 className="text-center text-secondary">
                AT CREATIVE INTERIORS we are a team of Architects and Designers
                working holistically on design and execution.
              </h3>
              <p>
                Our focus is on creating timeless, classic spaces paying close
                attention to evolving our work with our client’s needs. We have
                three main areas in our practice, interior design, furniture and
                turnkey projects. Creative Interiors works sustainably with the
                best materials and craftsman to deliver our signature eclectic
                style locally from our workshop in Bangalore.
              </p>
              <p>
                Combining a talent for design with a sharp mind, Mr. Harish and
                his team of designers, are drawn to a contemporary style
                combining the best of old and new with a meticulous eye for
                detail, color and texture, creating comfortable, distinctive
                designs ranging from fresh and simple, to smart and stylish.
              </p>
              <p>
                The Creative Interior’s Design Group combines extraordinary
                talent and global experiences to create spaces, nationally and
                worldwide, that can be as “cutting edge” or “timeless” as the
                exceptionality of each of its Clients.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-secondary">Our Mision</h2>
                {/* <div className="text-center text-secondary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">
                  Develop interior and exterior design experiences that are
                  distinctive, compelling and of superb quality and
                  individuality.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-secondary">
                  Commitment Level
                </h2>
                {/* <div className="text-center text-secondary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">
                  Creative Interiors is committed to achieving the highest level
                  of design with a “turn-key” approach through the services
                  offered.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
