import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slide1 from "../Images/interior/kitchen-design.png";
import Slide2 from "../Images/interior/hall-design.png";
import Slide3 from "../Images/interior/bed-room.png";
import Slide4 from "../Images/interior/office-design.png";

const InteriorDetails = () => {
  const Interiors = [
    {
      id: 1,
      imgURL: Slide1,
      alt: "Image",
      title: "Kitchen Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 2,
        imgURL: Slide2,
        alt: "Image",
        title: "Hall Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 3,
        imgURL: Slide3,
        alt: "Image",
        title: "Bed Room Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 4,
        imgURL: Slide4,
        alt: "Image",
        title: "Office Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
  ];
  return (
    <Container>
      <Row>
        {Interiors.map((item) => (
          <Col md={3} key={item.id}>
            <div className="text-center">
              <Image src={item.imgURL} alt={item.alt} className="img-fluid" />
            </div>
            <div className="bg-light p-3">
              <h4 className="text-dark fw-bold">{item.title}</h4>
              <p className="text-dark">{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InteriorDetails;
