import React,{useState} from "react";
import { Form , Row,Col, FloatingLabel,Button} from "react-bootstrap";
import CardForm from "../Cards/CardForms";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const FormPersonalData=({handleData})=>{
  const [location, setLocation] = useState({Country:"",Region:""});
  const [save , setSave]= useState(true);
  const handleSubmit = (event)=>{
    event.preventDefault();
    const {elements} = event.currentTarget;
    const inputs = Array.from(elements).filter(item => item.tagName === 'INPUT');
    const inputData = inputs.reduce((acc, item) => {
      if(item.id!=="RepeatPassword")acc[item.id] = item.value;
      return acc;
    }, {});
    const combinedData = { ...inputData,IdentificationType:elements.IdentificationType.value ,...location};
    handleData(combinedData,100/3)
    setSave(false)
  }
  return(
    <>
        <Form className="d-flex flex-column mb-3" onSubmit={handleSubmit} >
          <CardForm title="Datos Principales">
          <p className="text-center">La información marcada con ( <span className="text-danger">{"*"}</span> ) es obligatoria.</p>
          <Row lg={2}>
              <FloatingLabel className="ps-0 mb-2 text-secondary" controlId="FirstName"  label={<>Nombres<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="FirstName" required disabled={!save}/>
              </FloatingLabel>
              <FloatingLabel className="ps-0 mb-2 text-secondary"controlId="LastName"  label={<>Apellidos<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="LastName" required disabled={!save}/>
              </FloatingLabel>
            </Row>
            <Row lg={2}>
            <FloatingLabel className="ps-0 mb-2 text-secondary" controlId="IdentificationType"   label={<>Seleccione tipo identificación<span className="text-danger">*</span></>} >
                <Form.Select disabled={!save}>
                  <option >Seleccione una opción</option>
                  <option >Cédula</option>
                  <option >Nit</option>
                  <option >Pasaporte</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel className="ps-0 mb-2 text-secondary"controlId="IdentificationNumber" label={<>No Identificación<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="IdentificationNumber" required disabled={!save}/>
              </FloatingLabel>
            </Row>
            
          </CardForm>
          <CardForm title="Datos de Localización">
          <p className="text-center">La información marcada con ( <span className="text-danger">{"*"}</span> ) es obligatoria.</p>
            <Row lg={2}>
              <FloatingLabel className="ps-0 mb-2 text-secondary" controlId="Country"  label={<>País<span className="text-danger">*</span></>}>
                <CountryDropdown className="form-select" disabled={!save} 
                value={location.Country}
                onChange={(val) => setLocation({...location, Country:val})} />
              </FloatingLabel>
              <FloatingLabel className="ps-0 mb-2 text-secondary"controlId="Department" label={<>Departamento<span className="text-danger">*</span></>}>
                <RegionDropdown className="form-select" disabled={!save} disableWhenEmpty={true} 
                country={location.Country}
                value={location.Region}
                onChange={(val) => setLocation({...location, Region:val})} />
              </FloatingLabel>
            </Row>
            <Row lg={2}>
              <FloatingLabel className="ps-0 mb-2 text-secondary"controlId="City" label={<>Ciudad<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="City" required disabled={!save}/>
              </FloatingLabel>
              <FloatingLabel className="ps-0 mb-2 text-secondary" controlId="Phone" label={<>Teléfono<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="Phone" required disabled={!save}/>
              </FloatingLabel>
              
            </Row>
    
          </CardForm>
          <CardForm title="Credenciales de acceso">
          <p className="text-center">La información marcada con ( <span className="text-danger">{"*"}</span> ) es obligatoria.</p>
            <Row lg={2}>
              <FloatingLabel className="ps-0 mb-2 text-secondary" controlId="Username" label={<>Nombre de usuario<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="username" required disabled={!save}/>
              </FloatingLabel>
              <FloatingLabel className="ps-0 mb-2 text-secondary"controlId="Email" label={<>Email<span className="text-danger">*</span></>}>
                <Form.Control type="text" placeholder="Email" required disabled={!save}/>
              </FloatingLabel>
            </Row>
            <Row lg={2}>
              <FloatingLabel className="ps-0 mb-2 text-secondary" controlId="Password" label={<>Contraseña<span className="text-danger">*</span></>}>
                <Form.Control type="password" placeholder="Password" required disabled={!save}/>
              </FloatingLabel>
              <FloatingLabel className="ps-0 mb-2 text-secondary"controlId="RepeatPassword" label={<>Repetir Contraseña<span className="text-danger">*</span></>}>
                <Form.Control type="password" placeholder="RepeatPassword" required disabled={!save}/>
              </FloatingLabel>
            </Row>
          </CardForm>
          <Row lg={1} >
            <Col className="d-flex justify-content-center gap-2">
              <Button disabled={save} onClick={()=>{setSave(true)}}>Edit</Button>
              <Button type="submit" disabled={!save}>Guardar</Button>
            </Col>
            
          </Row>
                  

        </Form>
      
    </>
  )
}
export default FormPersonalData;