import React from "react";
import  LogInSection from "../sections/login/LogInSection";
const LogIn =({handleLogin, loginToast})=>{
  return(
    <>
      <LogInSection handleLogin={handleLogin} loginToast={loginToast}/>
    </>
  )
}
export default LogIn;