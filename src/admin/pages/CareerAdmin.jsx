import React, { useContext, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { Link } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddJob from '../components/AddJob'
import { getAllApplicationAPI, getAllJobAPI, removeJobAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import { jobContext } from '../../contextAPI/ContextShare'
import SEVERURL from '../../services/serverURL'


function CareerAdmin() {
  const {addJobResponse,setAddJobResponse} = useContext(jobContext)
  const [canvas,setCanvas] =  useState(false)
  const [jobListStatus,setJobListStatus] = useState(true)
  const [listApplicationStatus,setApplicationStatus] = useState(false)
  const [allJobs,setAllJobs] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const [deleteJobResponse,setDeleteJobResponse] = useState({})
  const [application,setApplication] = useState([])
   console.log(application);
   

  console.log(allJobs);
  

  useEffect(()=>{
    if(jobListStatus == true){
      getAllJobs()
    }else if(listApplicationStatus == true){
      getApplication()
    }
  },[searchKey,deleteJobResponse,addJobResponse,listApplicationStatus])

  const getApplication = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
                "Authorization":`Bearer ${token}`
              }
              const result = await getAllApplicationAPI(reqHeader)
              if(result.status == 200){
                setApplication(result.data)
              }else{
                console.log(result);
                
              }
            }

  }

  const getAllJobs  = async ()=>{
    try{
      const result = await getAllJobAPI(searchKey)
      if(result.status == 200){
        setAllJobs(result.data)
      }

    }catch(err){

    }
  }

  const removeJob = async (id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
                "Authorization":`Bearer ${token}`
              }

          try{
              const result = await removeJobAPI(id,reqHeader)
              if(result.status == 200){
                setDeleteJobResponse(result.data)
              }else{
                console.log(result);
                
              }
          }
          catch(err){
            console.log(err);
            

          }
    }
  }
  return (

     <div>
      <AdminHeader />
      <div className='md:grid grid-cols-4'>
        <div className='col-span-1'><AdminSideBar /></div>

        <div className='col-span-3 p-8 '>
        <div>
      

      <div className="col-span-3  ">
        <div className="p-10">
          <h1 className="text-3xl text-center font-bold">Careers</h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center border-b">
          <p
            onClick={() => {
              setJobListStatus(true);
              setApplicationStatus(false);
            }}
            className={`p-4 cursor-pointer ${
              jobListStatus
                ? "text-blue-500 border-t border-l border-r border-gray-200"
                : "text-gray-600"
            }`}
          >
            Job Post
          </p>

          <p
            onClick={() => {
              setJobListStatus(false);
              setApplicationStatus(true);
            }}
            className={`p-4 cursor-pointer ${
              listApplicationStatus
                ? "text-blue-500 border-t border-l border-r border-gray-200"
                : "text-gray-600"
            }`}
          >
            View Applicant
          </p>
        </div>

        {/* Content */}
        <div >
          {
          jobListStatus && 
          <div>
            <div className='md:flex justify-between items-center my-5'>
            
              <div className='flex'>
                <input onChange={e=>setSearchKey(e.target.value)} type="text" className='round-l border border-gray-300 p-2 focus-outline:none' placeholder='Job title' />
              <button className='bg-green-500 p-2 round-r'>Search</button>
              </div>
           
            
              <div>
              <AddJob/>
            </div>
            </div>
            <div>
               {
                allJobs?.length>0?
                allJobs.map(job=>(
                <div key={job?._id} className="w-full md:max-w-[800px]  shadow p-4 mt-4">
                          <div className='flex justify-between'><h1>  {job?.title}</h1>
                            <button onClick={() => removeJob(job?._id)} className='bg-red-500 rounded px-3 py-2 text-white'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                          </div>
                          <div><hr className='border border-gray-300' /></div>
                          <h1><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC", }} /> {job?.location}</h1>
                          <h1>Job Type:{job?.jobType}</h1>
                          <h1>Qualification:{job?.qualification}</h1>
                          <h1>Salary:{job?.salary}</h1>
                          <h1>Experience:{job?.experience}</h1>
                          <h1>Description: {job?.description}</h1>
                        </div>))
                        :
                        <p>No Job Openings...</p>
                
                }
            </div>
          </div>
            }
          {listApplicationStatus && <div className='p-10 overflow-x-auto'>
            <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>SLNO</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>E-mail</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  { application?.length>0?
                  application?.map((item,index)=>(
                     <tr key={item?._id}>
                    <td className='border border-gray-500 p-3 text-center'>{index+1}</td>
                    <td className='border border-gray-500 p-3 text-center'>{item?.jobTitle}</td>
                    <td className='border border-gray-500 p-3 text-center'>{item?.fullname}</td>
                    <td className='border border-gray-500 p-3 text-center'>{item?.qualification}</td>
                    <td className='border border-gray-500 p-3 text-center'>{item?.email}</td>
                    <td className='border border-gray-500 p-3 text-center'>{item?.phone}</td>
                    <td className='border border-gray-500 p-3 text-center'>{item?.coverLetter}</td>
                    <td className='border border-gray-500 p-3 text-center'><Link to={`${SEVERURL}/pdf/${item?.resume}`} className='text-blue-600 underline'>Resume</Link></td>
                  </tr>
                  ))
                  :
                  <p>No Applications available</p> 
                   }
                </tbody>
            </table>
            </div>}
        </div>
      </div>
    </div>

          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareerAdmin