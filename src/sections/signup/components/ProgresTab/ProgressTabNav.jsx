import React,{useCallback, useEffect, useRef, useState} from "react";
import {Tab,Col,Row,Nav,Button,ProgressBar } from "react-bootstrap";
import {FormPersonalData, FormUploadImageProfile,FormSelectUserRol} from "../Form/index"
import {handleData,registerUser} from "../../hooks/index";
import { Link , useNavigate } from "react-router-dom";
const ProgressTabNab = ({signUpToast}) =>{
  const [progressBarNow, setProgressBar]=useState(0);
  const [active, setActive]=useState("1");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleProgressData = useCallback((data,newBarProgress)=>{
    handleData(data,setData,newBarProgress,setProgressBar)
  },[])
  
  const handleRegisterUser = async (data)=>{
      await registerUser(data,signUpToast)
      navigate("/login")
  }
  
  
  return(
    <Tab.Container defaultActiveKey={active} activeKey={active}>
      <Row className="d-flex flex-column align-items-center">
        <Col lg={5} sm={5} xs={5} md={5}>
          <ProgressBar now={progressBarNow} className="p-0" />
          <p className="text-center form-text">{active=== "1"?"Paso 1 de 3 verifica tu identidad":(active ==="2"? "Paso 2 de 3 Añade foto de perfil": "Paso 3 de 3 Selecciona tu rol")}</p>
        </Col>
        <Col className="gap-2">
          <Tab.Content>
            <Tab.Pane eventKey="1"><FormPersonalData handleData={handleProgressData}/></Tab.Pane>
            <Tab.Pane eventKey="2">
                  <Row >
                    <Col className="d-flex justify-content-end mb-3">
                      <Button variant="link" onClick={() => {handleProgressData({["image"]:""},100/1.5);setActive("3")}}>omitir</Button>
                    </Col>
                  </Row>
              <FormUploadImageProfile handleData={handleProgressData}/>
            </Tab.Pane>
            <Tab.Pane eventKey="3"><FormSelectUserRol handleData={handleProgressData}/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      <Row lg={2}>
        <Col className="d-flex justify-content-center gap-2">
         <Button  as={Link} to={"/"} onClick={()=>{setData({});setProgressBar(0)}}>Cancelar</Button>
        </Col>
        <Col className="d-flex justify-content-center gap-2">
            <Button  onClick={()=>{setActive(active>1 ? `${parseInt(active)-1}`: "1")}} disabled={active ==="1"}>Anterior</Button>
            {
              active ==="1"?(<Button onClick={()=>{setActive("2")}} disabled={progressBarNow!==100/3}>Siguiente</Button>)
              :(active==="2"?(<Button onClick={()=>{setActive("3")}} disabled={progressBarNow!==100/1.5} >Siguiente</Button>)
               :(<Button onClick={()=>handleRegisterUser(data)} disabled={progressBarNow!==100}>Finalizar</Button>)
              )
            }

        </Col>
       
      </Row>
    </Tab.Container>
  )
}
export default ProgressTabNab;
