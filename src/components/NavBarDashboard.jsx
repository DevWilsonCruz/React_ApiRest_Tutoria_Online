import React, { useState } from "react";
import { Navbar,Nav,Button,ListGroup,CloseButton } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const NabBarDashboard=({handleNavBar,handleLogOut})=>{
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const [navBarStatus, setNabBarStatus]= useState(true)
  const handleActiveButtonClick=(buttonName)=>{
    setActiveButton(buttonName);
    navigate(buttonName)
  }
  return(
    <>
      <Navbar fixed="top" data-bs-theme="dark" bg="primary"  className={`m-0 p-0 rounded-start rounded-3 ${navBarStatus?"nav-bar-active":"nav-bar-inactive"}`} >
        <div className="container-menu pt-3">
          <Nav  className="flex-column nav-active" >
            <Nav lg={1} className="d-flex nav" >
              {
                navBarStatus? 
                <Button 
                className="ps-2 py-1"
                variant="outline-light border-0 rounded-2"
                onClick={()=>{setNabBarStatus(false);handleNavBar(false);}}>
                  <i className="bi bi-filter-right fs-3"></i>
              </Button>:
              <Button 
                className=" px-2 py-1"
                variant="outline-light border-0 rounded-2"
                onClick={()=>{setNabBarStatus(true);handleNavBar(true);}} >
                  <i className="bi bi-list fs-3"></i>
              </Button>
              }

            </Nav>
            <ListGroup className="list-group-flush user-menu" >
              <Button active={activeButton == ""}
              onClick={() => handleActiveButtonClick('')} variant="outline-light  text-start border-0 rounded-2">
                <i className="bi bi-grid fs-5 fst-normal"> <span className={navBarStatus?"":"d-none"}>Inicio</span></i></Button>
              <Button active={activeButton == "buscar-tutor"} 
              onClick={() => handleActiveButtonClick('buscar-tutor')}variant="outline-light  text-start border-0 rounded-2">
                <i className="bi bi-search fs-5 fst-normal"> <span className={navBarStatus?"":"d-none"}>Buscar Tutores</span></i></Button>
              <Button active={activeButton == "tutorías"}
              onClick={() => handleActiveButtonClick('tutorías')} variant="outline-light  text-start border-0 rounded-2">
                <i className="bi bi-card-checklist fs-5 fst-normal"> <span className={navBarStatus?"":"d-none"}>Tutorías</span></i> </Button>
              <Button active={activeButton == "ajustes"}
              onClick={() => handleActiveButtonClick('ajustes')} variant="outline-light  text-start border-0 rounded-2">
                <i className="bi bi-gear fs-5 fst-normal"> <span className={navBarStatus?"":"d-none"}>Ajustes</span></i> </Button>
            </ListGroup>
          </Nav>
          <Nav  className="flex-column nav-active" >
            <ListGroup className="list-group-flush user-menu" >
            <Button
              onClick={()=>handleLogOut({auth:false,role:null,userid:null})} variant="outline-light  text-start border-0 rounded-2">
              <i className="bi bi-box-arrow-left fs-5 fst-normal"> <span className={navBarStatus?"":"d-none"}>Cerrar Sesión</span></i></Button>
            </ListGroup>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}
export default NabBarDashboard;