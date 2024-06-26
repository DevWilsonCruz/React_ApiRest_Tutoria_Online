import React from 'react';
import {Carousel,Image} from 'react-bootstrap';
import img1 from '../../assets/Img1-1400x500.png';
import img2 from '../../assets/Img2-1400x500.png';

function IndividualIntervalsExample() {
  return (
    <> 
      <Carousel controls={false} data-bs-theme="dark">
        <Carousel.Item interval={3000}>
          <Image src={img1} fluid />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <Image src={img2} fluid />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;