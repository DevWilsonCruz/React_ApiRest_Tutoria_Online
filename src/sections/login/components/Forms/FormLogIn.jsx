import {React,useEffect,useRef,useState} from "react";
import { Form,FloatingLabel ,Button,Row } from "react-bootstrap";
import handleUserLogin from  "../../hooks/handleUserLogin"
import { Toast } from 'primereact/toast';

const FormLogIn =({handleLogin ,loginToast}) =>{
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const {elements} = event.currentTarget;
    const [email] =  Array.from(elements).filter(item => item.id === "EmailLogin")
    const [password] =  Array.from(elements).filter(item => item.id === "PasswordLogin")
    const response =  await handleUserLogin({emailOrUsername:email.value,password:password.value},loginToast)
    if(response){
      handleLogin({auth:response.auth,role:response.role,userId:response.userid})
    }
  }
  
  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Row className="m-3 gap-4">
      <FloatingLabel className="px-0" controlId="EmailLogin" label="Nombre de usuario ó correo">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="px-0"controlId="PasswordLogin" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      <Button type="submit">Ingresar</Button>
      </Row>
    </Form>
    </>
  )
}
export default FormLogIn;