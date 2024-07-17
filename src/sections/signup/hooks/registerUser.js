import React, { useEffect, useState } from "react"
import {postData} from "../../../services/AxiosCrud/Post"
const registerUser = async (data,toastRef) =>{
  try{
    const response = await postData("users",data,toastRef)
    if (response.status === 201){
        toastRef.current.show({ 
        severity: 'success', 
        summary: 'Registro Exitoso', 
        detail: "Inicia Sesión", 
        life: 3000 
      });
    }
  }
  catch (error) {
  }
}
export default registerUser