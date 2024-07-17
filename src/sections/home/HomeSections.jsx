import React from "react";
import CarouselContainer from "./components/carousels/carousel"
import dataCarouselAuto from "./data/data-carousel.json"
import dataCarouselCards from "./data/data-carousel-cards.json"
import dataQualities from "./data/data-qualities.json"
import { Card, Col,Row } from "react-bootstrap";
import CardBody from "./components/cards/Card";

const HomeSections =()=>{ 
  return(
    <>
      <CarouselContainer controls={false} dataImages={dataCarouselAuto} fade={true}/>
      <Row lg={1} className="m-5 text-center">
          <Row lg={3} md={2} sm={1} >
            {dataQualities.map((quality, index) => (
              <Col key={quality.id}><Card className="rounded-0 border-0">
                <CardBody title={quality.title} body={quality.description}/>
              </Card></Col>
            ))}
          </Row>
          <CarouselContainer controls={true} dataImages={dataCarouselCards} fade={false}/>
      </Row>
      
    </>
  )
}
export default HomeSections;