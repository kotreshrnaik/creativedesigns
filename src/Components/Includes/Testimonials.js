import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const Testimonials = () => {
  const Testimonials = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      client: "name",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      client: "name",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      client: "name",
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div>
      <Container>
        <OwlCarousel options={options}>
          {Testimonials.map((item) => (
            <Row key={item.id} className="justify-content-center">
              <Col md={10}>
                <div className="text-center">
                  <i className="fas fa-microphone p-2 border border-danger rounded-circle"></i>
                  <figure>
                    <blockquote className="blockquote">
                      <p>{item.content}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <cite title="Source Title">{item.client}</cite>
                    </figcaption>
                  </figure>
                </div>
              </Col>
            </Row>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default Testimonials;
