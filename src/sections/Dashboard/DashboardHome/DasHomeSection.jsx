import React from "react";
import { Card ,Container, Row ,Col} from "react-bootstrap";
import StatusTutoring from "./components/StatusTutoring";
import StatusActualTutoring from "./components/NextTutoring";
import LastReviews from "./components/LastReviews";
const DashboardSectionHome =()=>{
  return(
    <>
      <Container className="ps-4 pt-5">
        <Row className="flex-column gap-3">
          <Row lg={1}>
            <Col><StatusTutoring/></Col>
          </Row>
          <Row lg={2}>
            <Col ><StatusActualTutoring/></Col>
            <Col ><LastReviews/></Col>
          </Row>
        </Row>
        
        
      </Container>
    </>
  )
}
export default DashboardSectionHome;