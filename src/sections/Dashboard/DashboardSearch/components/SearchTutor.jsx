import React,{useState} from "react";
import { Row,Card,Col,Form,InputGroup} from "react-bootstrap";
import { Calendar } from 'primereact/calendar'; 
import { Button } from 'primereact/button'; 
import handleSearchTutor from "../hooks/handleSearchTutor";
const SearchTutor =({handleDataTutor,searchToast})=>{
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;
  const [date, setDate] = useState("");
  let minDate = new Date();
  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);
  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);
  const handleSubmit= async(event)=>{
    event.preventDefault();
    const {elements} = event.currentTarget;
    const [nameOrSubjects] =  Array.from(elements).filter(item => item.id === "searchTutor")
    const res = await handleSearchTutor({nameOrsubject:nameOrSubjects.value},searchToast)
    handleDataTutor(res);
  }
  return(
    <>
    <Card className="border-0">
      <Card.Body className="p-0 m-0">
        <Form onSubmit={handleSubmit}>
          <Row sm={1} md={2}>
            <Col >
              <Calendar className="w-100" value={date} onChange={(e) => setDate(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput showIcon />
            </Col>
            <Col className="align-items-center">
              <InputGroup>
                <Form.Control placeholder="Buscar Tutor o materia" id="searchTutor" aria-label="Search tutor"/>
                <Button type="submit" label="Buscar" />
              </InputGroup>
            </Col>
            
          </Row>
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}
export default SearchTutor;