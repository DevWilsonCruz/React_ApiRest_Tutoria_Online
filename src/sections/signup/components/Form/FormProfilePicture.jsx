import React ,{useState}from "react";
import ImageUploading from "react-images-uploading";
import { Button , Card,Image,Row,Col } from "react-bootstrap";

const FormUploadImageProfile=({handleData})=> {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
  <>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="mb-5" >
            
            <Card  className="border-0" >
            {
              imageList.length !==0 
                ? (<>
                    <Card.Body className="d-flex flex-column ">
                      <Row lg={2}>
                        <Col>
                          <Image src={imageList[0]['data_url']} width="400"/>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center gap-2">
                          <Button onClick={() => onImageUpdate(imageList[0])}>Update</Button>
                          <Button onClick={() => onImageRemove(imageList[0])}>Remove</Button>
                          <Button onClick={() => handleData({["Image"]:imageList[0]['data_url']},100/1.5)}>Guardar</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                    
                  </>)
                :(<>
                  
                  <Card.Body as={Button} variant="outline-dark" onClick={onImageUpload} {...dragProps} className={`d-flex flex-column align-items-center border-2 ${isDragging ? "bg-primary-subtle text-primary border-5 border-opacity-50" : ""}`} style={{cursor:"pointer"}}>
                    <i className="bi bi-image-fill" style={{ fontSize: "20vh"}}></i>
                    <Card.Title>Click o Arrastre la imagen aquí</Card.Title>
                  </Card.Body>
                </>)
            }
            </Card>
          </div>
        )}
      </ImageUploading>
      </>
  );
}

export default FormUploadImageProfile;