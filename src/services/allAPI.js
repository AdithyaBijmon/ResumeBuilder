import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

// addResumeAPI - POST
const addResumeAPI = (resume)=>{
  
 return commonAPI("POST",`${BASEURL}/allResumes`,resume)
}