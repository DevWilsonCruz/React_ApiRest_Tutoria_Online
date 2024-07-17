import {postData} from "../../../../services/AxiosCrud/Post"

const handleSearchTutor = async (nameOrSubject,toastRef) =>{
  try{
    const response = await postData("searchTutor",nameOrSubject,toastRef)
    return response.data
  }
  catch (error) {
  }
}
export default handleSearchTutor;