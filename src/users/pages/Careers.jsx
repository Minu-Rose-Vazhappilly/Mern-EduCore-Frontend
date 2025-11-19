import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationAPI, getAllJobAPI } from '../../services/allAPI'
import { ToastContainer,toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



function Careers() {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs,setAllJobs] = useState([])
  const [searchKey,setSearchKey] = useState('')
  const [applicationDetails,setApplicationDetails] = useState({
    fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
  })
  const [fileKey,setFileKey] = useState(Date.now())
  const [jobTitle,setJobTitle] = useState("")
  const [jobId,setJobId] = useState("")
  console.log(applicationDetails);
  const navigate = useNavigate()

  useEffect(()=>{
    getAllJobs()
  },[searchKey])

  const handleReset = ()=>{
    setApplicationDetails({
      fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
    })
    setFileKey(Date.now())
  }
  const  getAllJobs = async()=>{
    try{
      const result = await getAllJobAPI(searchKey)
      if(result.status == 200){
        setAllJobs(result.data)
      }else{
        console.log(result);
        
      }
    }
    catch(err){
      console.log(err);
      
    }
  }

  const handleApplyJob = (job)=>{

    setJobId(job._id)
    setJobTitle(job.title)
    setModalStatus(true)
  }
  const handleSubmitApplication = async ()=>{
    
    const token = sessionStorage.getItem("token")
    const {fullname,email,qualification,phone,coverLetter,resume} = applicationDetails
    if(!token){
      toast.info("Please Login to apply job")
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }else if(!fullname || !email || !qualification || !phone || !coverLetter || !resume || !jobId || !jobTitle){

      toast.info("Please fill the form completely")

    }else{
      const reqHeader = {
                "Authorization":`Bearer ${token}`
              }
              const reqBody = new FormData()
              for(let key in applicationDetails){
                reqBody.append(key,applicationDetails[key])
              }
              reqBody.append("jobTitle",jobTitle)
              reqBody.append("jobId",jobId)
              const result = await addApplicationAPI(reqBody,reqHeader)
              console.log(result);
              if(result.status == 200){
                toast.success("Application submitted successfully")
                handleReset()
                setModalStatus(false)
              }else if(result.status == 409){
                toast.warning(result.response.data)
                handleReset()
              }else{
                toast.error("Something went wrong")
                handleReset()
                setModalStatus(false)
              } 
              
    }


  }

  return (
    <>
      <Header />
      <div className='' >
        <div className='flex justify-center h-75  flex-col  p-5 w-full' style={{backgroundImage:`url("https://img.freepik.com/premium-photo/atmosphere-around-office-blurred-background_875825-137867.jpg")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <h1 className='text-xl text-center text-white font-bold '>Careers</h1>
          <p className='md:text-center md:mx-40 text-justify text-white font-bold'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio nesciunt commodi soluta ipsum, asperiores doloremque excepturi quasi delectus! Harum repudiandae assumenda provident, placeat unde nemo ad rerum quidem dolor.
          </p>
          

        </div>

        <div className='flex justify-center md:items-center flex-col p-3 '>
          <p className='md:mx-25 mt-5 mb-3'>Current Opennings</p>
          <div className='flex '>
            <input onChange={e=>setSearchKey(e.target.value)} type="text" className='round-l border border-gray-300 p-2 focus-outline:none' placeholder='Job title' />
            <button className='bg-green-500 p-2 round-r'>Search</button>
          </div>
         { allJobs?.length>0?
          allJobs?.map(job=>(
            <div key={job?._id} className="w-full md:max-w-[800px] md:mx-40 shadow p-4 mt-4">
            <div className='flex justify-between'><h1>  {job?.title}</h1>
              <button onClick={() => handleApplyJob(job)} className='bg-blue-500 rounded px-3 py-2 text-white'>APPLY <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </div>
            <div><hr className='border border-gray-300' /></div>
            <h1><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC", }} /> {job?.location}</h1>
            <h1>Job Type:{job?.jobType}</h1>
                          <h1>Qualification:{job?.qualification}</h1>
                          <h1>Salary:{job?.salary}</h1>
                          <h1>Experience:{job?.experience}</h1>
                          <h1>Description: {job?.description}</h1>
          </div>
          ))
          :
          <p>No Job Openings</p>
          }
        </div>


      </div>
      {
        modalStatus &&
        <div className='relative z-10 ' >
          <div className='bg-gray-500/75 fixed inset-0 transition-opacity'>
            <div className="flex justify-center items-center min-h-screen">
              <div className='bg-white rounded md:w-150 w-100'>
                {/* modal header */}
                <div className='bg-black text-white flex justify-between items-center rounded'>
                  <h3>Application form</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                </div>
                {/* modal body */}
                <div className="relative p-5">
                  <div className="md:grid grid-cols-2 gap-3 ">
                    <div className='mb-3'>
                      <input
                      value={applicationDetails.fullname}
                      onChange={e=>setApplicationDetails({...applicationDetails,fullname:e.target.value})}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                      value={applicationDetails.qualification}
                      onChange={e=>setApplicationDetails({...applicationDetails,qualification:e.target.value})}
                        type="text"
                        placeholder="Qualification"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                      value={applicationDetails.email}
                      onChange={e=>setApplicationDetails({...applicationDetails,email:e.target.value})}
                        type="text"
                        placeholder="Email Id"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                      value={applicationDetails.phone}
                      onChange={e=>setApplicationDetails({...applicationDetails,phone:e.target.value})}
                        type="text"
                        placeholder="Phone"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3 col-span-2 '><textarea
                    value={applicationDetails.coverLetter}
                      onChange={e=>setApplicationDetails({...applicationDetails,coverLetter:e.target.value})} 
                    placeholder='coverLetter' name="" className=' w-full p-2 border rounded placeholder-gray-600 text-black' id=""></textarea>
                    </div>
                    <div className='mb-3 col-span-2 flex flex-col text-gray-600'>
                      <label htmlFor="">Resume</label>
                      <input key={fileKey}
                     
                      onChange={e=>setApplicationDetails({...applicationDetails,resume:e.target.files[0]})}
                        type="file"
                        
                        className="w-full  border rounded file:bg-gray-400 file:p-2 file:text-white "
                      />
                    </div>
                  </div>
                  
                </div>
                {/* modal footer */}
                <div className='bg-gray-250 p-2 w-full flex justify-end'>
                      <button onClick={handleReset} className='py-2 px-3 rounded bg-black text-white'>Reset</button>
                      <button onClick={handleSubmitApplication} className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }
      <div className='flex justify-center h-75  flex-col  p-5 w-full' style={{backgroundImage:`url("https://tse2.mm.bing.net/th/id/OIP.4Z7QgVK0YHWgQa93Jw1f5QHaEP?pid=Api&P=0&h=180")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <ul className='text-white font-bold'>
  <li>Friendly and collaborative work culture</li>
  <li>Standard office timings: 9:30 AM – 6:00 PM</li>
  <li>Focus on learning and continuous improvement</li>
  <li>Supportive team and leadership</li>
  <li>Opportunity to work with modern technologies</li>
</ul>
          

        </div>


      <Footer />
      <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  
                  />
    </>
  )
}

export default Careers