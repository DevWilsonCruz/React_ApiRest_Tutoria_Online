
import {postData} from "../../../services/AxiosCrud/Post"

const handleUserLogin = async (data,toastRef) =>{
  try{
    const response = await postData("login",data,toastRef)
    if (response.status === 200){
    const message= response.data.profileComplete === false ? "Complete su perfil":  "Bienvenido"

    toastRef.current.show({ 
      severity: 'success', 
      summary: 'Autenticación correcta', 
      detail: message, 
      life: 3000 
    });
  }
    return response.data
  }
  catch (error) {
  }
}
export default handleUserLogin;