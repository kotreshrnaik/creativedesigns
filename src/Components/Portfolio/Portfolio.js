import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../Images/recentworks/image-1.png";
import Image2 from "../Images/recentworks/image-2.png";
import Image3 from "../Images/recentworks/image-3.png";

const Portfolio = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "one" },
    { id: 2, imgName: Image2, alt: "", tag: "two" },
    { id: 3, imgName: Image3, alt: "", tag: "three" },
    { id: 4, imgName: Image1, alt: "", tag: "one" },
    { id: 5, imgName: Image2, alt: "", tag: "two" },
    { id: 6, imgName: Image3, alt: "", tag: "three" },
  ];

  const [tag, setTag] = useState("one");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Portfolio</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="portfolio" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <div
            className="p-2 text-center d-flex flex-row justify-content-center"
            
          >
            <div className="m-1">
              <TagButton name="all" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="one" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="two" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="three" handlesettag={setTag} />
            </div>
          </div>
          <SRLWrapper>
            <Row>
              {filteredImages.map((item) => (
                <Col md={4} key={item.id}>
                  <div className="m-1 text-center">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </Container>
      </div>
    </div>
  );
};

const TagButton = ({ name, handlesettag }) => {
  return (
    <div>
      <Button
        onClick={() => handlesettag(name)}
        className="btn btn-secondary text-white text-uppercase"
      >
        {name}
      </Button>
    </div>
  );
};

export default Portfolio;
