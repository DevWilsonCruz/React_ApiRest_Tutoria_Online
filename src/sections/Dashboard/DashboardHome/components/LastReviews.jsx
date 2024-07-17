import React from "react";
import { Card } from "react-bootstrap";

const LastReviews =()=>{
  return(
    <>
      <Card className="text-center " border="primary">
        <Card.Header className="fs-4 fw-semibold border-primary">Últimos Comentarios</Card.Header>
        <Card.Body className="overflow-y-auto" style={{height:"12rem"}} >
        <Card border="primary" >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Card.Body>
      </Card>
    </>
  )
}
export default LastReviews;