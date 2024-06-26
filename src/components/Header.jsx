import React from "react";
import { Navbar,Container,Image,Nav,Button } from "react-bootstrap";
import Logo from "../assets/Logo-text-tutoria-50.svg"
import { Link } from "react-router-dom";

const Header =()=>{
  return(
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand >
            <Image src={Logo} alt="Logo_tutoria" fluid />
          </Navbar.Brand>
          <Navbar.Toggle className="border-0"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="gap-1">
              <Button as={Link} to={"/"} variant="link" className="link-primary link-offset-3 link-underline link-underline-opacity-0"><i className="bi bi-house-fill fst-normal fw-semibold fs-6 align-baseline"> Home</i></Button>
              <Button as={Link} to={"/login"} variant="link" className="link-primary link-offset-3 link-underline link-underline-opacity-0"><i className="bi bi-box-arrow-in-right fst-normal fw-semibold fs-6 align-baseline"> Ingresar</i></Button>
              <Button as={Link} to={"/"} variant="outline-primary"><i className="bi bi-person-fill-add fw-semibold fst-normal fs-6 align-baseline"> Registrarse</i></Button>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;