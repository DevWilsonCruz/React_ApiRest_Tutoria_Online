import api from "../AxiosApi";

export const postData = async (endpoint,data,toastRef)=>{
  try {
    const response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    if (error.response.status === 400){
      toastRef.current.show({ 
        severity: 'error', 
        summary: 'Error', 
        detail: error.response.data.message || "There was a problem with your request.", 
        life: 3000 
      });
    }else{
      throw error
    }
    
  }
}
