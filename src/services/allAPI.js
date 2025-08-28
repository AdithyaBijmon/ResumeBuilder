import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

// addResumeAPI - POST
export const addResumeAPI = async(resume) => {
    return await commonAPI("POST", `${BASEURL}/allResumes`, resume)
}

// editResumeAPI - PUT (edit component when clicks update button)
export const editResumeAPI = async(id,resume) => {
    return await commonAPI("PUT", `${BASEURL}/allResumes/${id}`, resume)
}

//addHistoryAPI - POST
export const addDownloadHistoryAPI = async(resume) => {
    return await commonAPI("POST", `${BASEURL}/history`, resume)
}

//getHistoryAPI - GET (useEffect)
export const getHistoryAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/history`, {})
}

// deleteHistoryAPI - DELETE
export const deleteHistoryAPI = async(id) => {
    return await commonAPI("DELETE", `${BASEURL}/history/${id}`, {})
}

//getResumeAPI - GET called by edit component when it opens in the browser(useEffect)
export const getResumeAPI = async(id) => {
    return await commonAPI("GET", `${BASEURL}/allResumes/${id}`, {})
}


