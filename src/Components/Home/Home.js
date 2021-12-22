import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSlider from "../../Components/Includes/MainSlider";
import InteriorDetails from "../Includes/InteriorDetails";
import RecentWorks from './../Includes/RecentWorks';
import Testimonials from './../Includes/Testimonials';

const Home = () => {
  return (
    <div>
      <MainSlider />
      <section className="pt-2 pb-2 pt-md-5 pb-md-5 bg-secondary" id="">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h4 className="text-center text-white fw-bold">
                At THE CREATIVE DESIGNS we are a team of architects and
                designers working holistically on design and execution.
              </h4>
              <p className="text-center text-white">
                Our focus is on creating timeless, classic spaces paying close
                attention to evolving our work with our client’s needs. We have
                three main areas in our practice, interior design, furniture and
                turnkey projects. Creative Design works sustainably with the
                best materials and craftsman to deliver our signature eclectic
                style locally from our workshop in Bangalore.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <InteriorDetails />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="">
        <RecentWorks />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light" id="">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
