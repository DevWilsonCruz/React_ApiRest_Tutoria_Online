import React from "react";
import { Card } from "react-bootstrap";
const CardForm =({title,children})=>{
  return(
    <Card className="border-0 p-3">
      <Card.Title className="text-center">{title}</Card.Title>
      <Card.Body>{children}</Card.Body>
    </Card>
  )
}
export default CardForm;