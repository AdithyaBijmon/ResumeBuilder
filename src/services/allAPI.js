import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

// addResumeAPI - POST
export const addResumeAPI = async(resume) => {
    return await commonAPI("POST", `${BASEURL}/allResumes`, resume)
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
