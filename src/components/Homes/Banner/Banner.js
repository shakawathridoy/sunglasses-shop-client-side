import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item className="">
    <img
      className="d-block w-100 h-600"
      src="https://i.ibb.co/G3C64PN/Screenshot-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src= "https://i.ibb.co/ydrLCzH/Screenshot-7.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/b10wdQ5/Screenshot-9.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
    );
};

export default Banner;