import React from 'react';
import {Carousel,Row,Card} from 'react-bootstrap';
import LoadImages from "../../hooks/LoadImages"
import CardBody from '../cards/Card';

const CarouselContainer=({controls=true,dataImages,fade}) =>{
  return(
    <>
      <Carousel controls={controls} fade={fade} variant='dark'>
        {
          dataImages.map((item,index)=>(
            <Carousel.Item key={index} interval={3000} as={Card} className="rounded-0 border-0">
              <LoadImages item={item}/>
              <Card.ImgOverlay className={`d-flex align-items-center mx-5 px-5`}>
               <CardBody title={item.title} body={item.text}/>
             </Card.ImgOverlay>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  )
}

export default CarouselContainer;