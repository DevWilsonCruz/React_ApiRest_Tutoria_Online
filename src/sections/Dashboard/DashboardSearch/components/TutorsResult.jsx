
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Card,Row } from 'react-bootstrap';


const TutorResultView=({dataTutor}) =>{
    const [tutors, setTutors] = useState([]);
    const [layout, setLayout] = useState('grid');
    useEffect(()=>{
      setTutors(dataTutor);
    },[dataTutor])
    const listItem = (tutor, index) => {

        return (
            <Card key={index} border="primary my-2 me-3 w-75" >
              <Card.Body>
                <Card.Title>{tutor.firstname} {tutor.lastname}</Card.Title>
                <Card.Subtitle>{tutor.country}</Card.Subtitle>
                <Card.Subtitle>{tutor.city}</Card.Subtitle>
                <Card.Subtitle>{tutor.Subjects==0?"":tutor.Subjects[0].subjectname}</Card.Subtitle>
              </Card.Body>
            </Card>
        );
    };

    const gridItem = (tutor,index) => {
        return (
            <Card key={index} border="primary my-3 mx-2" style={{width:"15rem"}}>
              <Card.Body>
                <Card.Title>{tutor.firstname} {tutor.lastname}</Card.Title>
                <Card.Subtitle>{tutor.country}</Card.Subtitle>
                <Card.Subtitle>{tutor.city}</Card.Subtitle>
                <Card.Subtitle>{tutor.Subjects==0?"":tutor.Subjects[0].subjectname}</Card.Subtitle>
              </Card.Body>
            </Card>
        );
    };

    const itemTemplate = (tutor, layout, index) => {
        if (!tutor) {
            return;
        }

        if (layout === 'list') return listItem(tutor, index);
        else if (layout === 'grid') return gridItem(tutor,index);
    };

    const listTemplate = (tutors, layout) => {
        return <Row lg={5} md={2}  className={`d-flex  ${layout === "list"?"flex-column align-items-center":"justify-content-center"}  `}>
            {tutors.map((tutor, index) => itemTemplate(tutor, layout, index))}
            </Row>;
    };

    const header = () => {
        return (
            <div className="d-flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <Card className='border-0'>
            <DataView value={tutors} listTemplate={listTemplate} layout={layout} header={header()} />
        </Card>
    )
}

export default TutorResultView;

        