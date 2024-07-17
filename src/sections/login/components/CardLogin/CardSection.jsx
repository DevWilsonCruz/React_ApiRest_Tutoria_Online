import React from "react";
import { Card ,Image,Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardSectionLogin =({icon,children})=>{
  return(
    
      <Card  className="bg-dark bg-opacity-75 rounded-4" style={{maxWidth:"25rem"}}>
        <Card.Body className="flex-column align-items-center text-center ">
          <Image src={icon}  width={100} rounded />
          {children}
          <Card.Subtitle className="text-light"><small>¿No tienes cuenta? <Link to={"/"}className="link-light link-underline link-underline-opacity-0 link-opacity-50-hover">¡Regístrate aquí!</Link></small> </Card.Subtitle>
        </Card.Body>
      </Card>
    
  )
}
export default CardSectionLogin;