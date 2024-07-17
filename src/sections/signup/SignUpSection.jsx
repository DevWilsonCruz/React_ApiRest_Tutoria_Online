import React from "react";
import { Card ,Container,Row} from "react-bootstrap";
import ProgressTabNav from "./components/ProgresTab/ProgressTabNav"
const SignUpSection=({signUpToast})=>{
  
  return(
    <>
    <Container className="pt-5 ">
      <Row>
        <Card className="shadow-lg p-3" >
          <Card.Body>
            <Card.Title className="text-center fs-2 mb-3">Formulario Registro</Card.Title>
            <ProgressTabNav signUpToast={signUpToast}/>
          </Card.Body>
        </Card>
      </Row>
    </Container>
    
    </>
  )
}
export default SignUpSection;