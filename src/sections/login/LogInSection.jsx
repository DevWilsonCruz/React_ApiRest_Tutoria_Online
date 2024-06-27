import React from "react";
import FormLogIn from "./components/Forms/FormLogIn";
import {CardLeftImage,CardSectionLogin} from "./components/CardLogin/index";
import ImgBgLogin from"./assets/Img-Login-bg.webp"
import IconLogin from "../../assets/logo_tutoria_100.svg"
import "./css/login.css"
const LogInSection =()=>{
  return(
    <>  
    
      <CardLeftImage image={ImgBgLogin}>
          <CardSectionLogin icon={IconLogin}>
            <FormLogIn></FormLogIn>
          </CardSectionLogin>
      </CardLeftImage>
    
    </>
  )
}
export default LogInSection;