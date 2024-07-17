import React from "react";
import { Card ,Row,Col} from "react-bootstrap";
const StatusTutoring =()=>{
  return(
    <Card className="text-center gap-4" border="primary">
      <Card.Header className="fs-4 fw-semibold border-0">Estado Tutorías</Card.Header>
      <Row lg={5}  className="gap-2 justify-content-around mb-4">
        <Col >
          <Card className="border-0">
            <Card.Body className="text-bg-primary rounded-4">
              <Card.Title>Activo: <span>1</span></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col   >
          <Card className="border-0">
            <Card.Body className="text-bg-primary rounded-4">
              <Card.Title>Finalizados: <span>1</span></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col  >
          <Card className="border-0">
            <Card.Body className="text-bg-primary rounded-4">
              <Card.Title>Cancelados: <span>1</span></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col  >
          <Card className="border-0">
            <Card.Body className="text-bg-primary rounded-4">
              <Card.Title>Pendiente: <span>1</span></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Card>
  )
}
export default StatusTutoring;