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