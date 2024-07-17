import React, { useState } from "react";
import { Accordion,Button, Row,Col} from "react-bootstrap";

const FormSelectUserRol = ({handleData}) =>{
  const [rol,setRol] = useState({student:true,tutor:false})
  return(
    <>
      <Accordion defaultActiveKey="0" className="my-4">
        <Accordion.Item eventKey="0" onClick={()=>setRol({student:true,tutor:false})}>
          <Accordion.Header >Estudiante</Accordion.Header>
          <Accordion.Body>
          <p>El rol de estudiante implica solicitar tutorías personalizadas, asistir a sesiones con tutores. Los estudiantes son responsables de su propio progreso académico y deben aprovechar al máximo el tiempo con sus tutores.</p>
          <Row >
              <Col className="d-flex justify-content-end">
                <Button onClick={()=>{handleData({...rol},100)}}>Seleccionar</Button>
              </Col>
            </Row>
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" onClick={()=>{setRol({student:false,tutor:true})}}>
          <Accordion.Header>Tutor</Accordion.Header>
          <Accordion.Body>
            <p>El rol de tutor implica guiar y apoyar a los estudiantes en su proceso de aprendizaje. Los tutores proporcionan ayuda adicional, responden preguntas, y ofrecen asesoramiento académico y personal. Los tutores ayudan a los estudiantes a alcanzar sus objetivos académicos y a superar cualquier desafío que puedan encontrar.</p>
            <Row >
              <Col className="d-flex justify-content-end">
                <Button onClick={()=>{handleData({...rol},100)}}>Seleccionar</Button>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" onClick={()=>{setRol({student:true,tutor:true})}}>
          <Accordion.Header>Estudiante y tutor</Accordion.Header>
          <Accordion.Body>
          <p>El rol combinado de estudiante y tutor implica equilibrar las responsabilidades de ambos roles. Como estudiante, se participa activamente en el aprendizaje y, como tutor, se proporciona apoyo a otros estudiantes. Este rol requiere habilidades de gestión del tiempo y un fuerte compromiso con el desarrollo personal y académico.</p>
            <Row >
              <Col className="d-flex justify-content-end">
                <Button onClick={()=>{handleData({...rol},100)}}>Seleccionar</Button>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
export default FormSelectUserRol;