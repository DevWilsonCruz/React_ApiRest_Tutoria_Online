import {React,useEffect,useState} from "react";
import { Form,FloatingLabel ,Button,Row } from "react-bootstrap";

const FormLogIn =() =>{
  const [data,setData]= useState({});
  const handleSubmit = (event)=>{
    event.preventDefault();
    const {elements} = event.currentTarget;
    const [email] = Array.from(elements).filter(item => item.id === "EmailLogin")
    const [password] = Array.from(elements).filter(item => item.id === "PasswordLogin")
    setData({email:email.value,password:password.value})
  }
  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Row className="m-3 gap-4">
      <FloatingLabel className="px-0" controlId="EmailLogin" label="Email address">
        <Form.Control type="email" placeholder="name@example.com" />
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