import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

export const registerAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const googleloginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}

//upload single book
export const addCourseAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/add-course`,reqBody,reqHeader)
}

//home cours api
export const getHomeCoursesAPI = async ()=>{
  return await  commonAPI("GET",`${SERVERURL}/home-courses`)
}
export const getAllJobAPI = async (searchKey)=>{
  return await  commonAPI("GET",`${SERVERURL}/get-allJobs?search=${searchKey}`,{})
}
export const getAllCoursesAPI = async (search,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-courses?search=${search}`,{},reqHeader)

}

export const getSingleCourseAPI = async (courseId,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/courses/${courseId}/view`,{},reqHeader)
}
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}
 export const addApplicationAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/application/add`,reqBody,reqHeader)
}

//add-Job
export const addJobAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/admin/addJob`,reqBody,reqHeader)
}

export const removeJobAPI = async (jobId,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVERURL}/job/${jobId}/remove`,{},reqHeader)
}

//list applications - called by admin career component
export const getAllApplicationAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all-application`,{},reqHeader)
}

export const makePaymentAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/make-payment`,reqBody,reqHeader)
}
export const verifyPaymentAPI = async (session_id,reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/verify-payment?session_id=${session_id}`,{},reqHeader)
}
export const enrolledAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/get-enrolled-details`,{},reqHeader)
}
export const enrolledStatsAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/get-enrolled-stats`,{},reqHeader)
}
export const enrolledCourseAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/user-enrolled`,{},reqHeader)
}
export const updateAdminProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}

export const getSingleEnrolledCourseAPI = async (courseId,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/user-acourse-enrolled/${courseId}`,{},reqHeader)
}
export const updatedSingleEnrolledCourseAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/user-updated-course-enrolled`,reqBody,reqHeader)
}
