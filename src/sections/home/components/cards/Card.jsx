import React from "react";
import { Card } from "react-bootstrap";

const CardBody = ({title,body})=>{
  return (
    <>
    <Card.Body >
      <Card.Title>{title}</Card.Title>
      <Card.Text >{body}</Card.Text>
    </Card.Body>
    </>
  )
}
export default CardBody;