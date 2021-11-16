import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import Slide1 from "../../Images/slider/slide1.png";
import Slide2 from "../../Images/slider/slide2.png";
import Slide3 from "../../Images/slider/slide3.png";

const MainSlider = () => {
  const slides = [
    {
      id: 1,
      imgURL: Slide1,
      alt: "Director",
      h3: "Director",
      p: "Kotresh R. Naik, M.Tech",
    },
    {
      id: 2,
      imgURL: Slide2,
      alt: "Director-class1",
      h3: "Director-class1",
      p: "Class in Bellary",
    },
    {
      id: 3,
      imgURL: Slide3,
      alt: "Director-class2",
      h3: "Director-class2",
      p: "Class in Bellary at SG PU College",
    },
  ];
  return (
    <div>
      <Carousel>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} interval={1000}>
            <Image
              className="d-block w-100"
              src={slide.imgURL}
              alt={slide.alt}
              
            />
            <Carousel.Caption>
              <h3>{slide.h3}</h3>
              <p>{slide.p}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;
