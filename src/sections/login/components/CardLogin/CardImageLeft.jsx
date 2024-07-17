import React from "react";
import { Card,Image,Row,Col } from "react-bootstrap";
const CardLeftImage = ({image,children})=>{
  return(
    <Card className="border-0">
      <Image src={image} className=" Img-Icon" alt="Card image" fluid />
      <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
        {children}
      </Card.ImgOverlay>
    </Card>
  )
}
export default CardLeftImage;