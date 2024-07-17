import React, { useCallback, useEffect } from "react";
import SearchTutor from "./components/SearchTutor";
import { Card ,Container, Row ,Col} from "react-bootstrap";
import TutorResultView from "./components/TutorsResult";
import handleSearchTutor from "./hooks/handleSearchTutor";

const SearchTutorSection =({searchToast})=>{
  const [tutors, setTutors] = React.useState([]);
  const handleDataTutor = useCallback((data)=>{
    setTutors(data)
    console.log(data)
  },[])
  useEffect(()=>{
    const getTutors = async()=>{
      const res = await handleSearchTutor({nameOrsubject:""},searchToast)
      setTutors(res)
    }
    getTutors()
  },[])
  return(
    <>
    <Container className="ps-4 pt-5">
        <Row className="flex-column gap-3">
          <Card className="border-0">
          <Card.Header className="fs-3 p-0 fw-semibold border-0">Buscar Tutor</Card.Header>
            <Row lg={1}>
              <Col >
                <SearchTutor handleDataTutor={handleDataTutor} searchToast={searchToast}/>
              </Col>
            </Row>
            <Row lg={1}>
              <Col >
                <TutorResultView dataTutor={tutors} />
              </Col>
            </Row>
          </Card>
        </Row>
        
        
      </Container>
    </>
  )
}
export default SearchTutorSection;