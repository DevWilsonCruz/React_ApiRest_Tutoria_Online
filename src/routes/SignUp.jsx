import React from "react";
import SignUpSection from "../sections/signup/SignUpSection"

const SignUp =({signUpToast}) =>{
  return(
    <>
      <SignUpSection signUpToast={signUpToast}/>
    </>
  )
}
export default SignUp;