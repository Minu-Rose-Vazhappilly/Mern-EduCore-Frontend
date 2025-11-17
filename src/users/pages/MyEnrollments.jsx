import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { enrolledCourseAPI } from '../../services/allAPI';
import { useEffect } from 'react';
import SERVERURL from '../../services/serverURL';

function MyEnrollments() {
    const [myCourses,setMyCourses] = useState(true)
      const [completedStatus,setCompletedStatus] = useState(false)
      const [enrolled,setEnrolled] = useState([])
          console.log(enrolled);
          
        
          useEffect(()=>{
            enrolledDetails()
          },[])
        
          const enrolledDetails = async()=>{
             const token = sessionStorage.getItem("token");
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        };
            try{
              const result = await enrolledCourseAPI(reqHeader)
              if(result.status == 200){
                setEnrolled(result.data)
              }else{
        
              }
            }catch(err){
              console.log(err);
              
            }
          }
          
    
  return (

    <div className=''>
        <Header/>
        <h1 className='text-center font-bold text-3xl text-[#6D6444] p-4'>My Enrollments</h1>

        <div className='md:px-40'>
        <div className="flex justify-center items-center my-5">
          
          <p onClick={()=>{setCompletedStatus(false);setMyCourses(true)}} 
             className={myCourses?'text-blue-500 p-4 border-gray-200 border-t border-l border-r cursor-pointer':'p-4 border-gray-200 cursor-pointer border-b'}>
             My Courses
          </p>
          <p onClick={()=>{setCompletedStatus(true);setMyCourses(false)}} 
             className={completedStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r cursor-pointer':'p-4 border-gray-200 cursor-pointer border-b'}>
             Completed Courses
          </p>
        </div>

        {/* Enroll Course */}
        

        {/* My Courses */}
        {myCourses &&
  <div>
    
      <div className="p-4">
    {enrolled?.length > 0 ? (
      enrolled.map((item) => (
        <div
          key={item?._id}
          className="w-full max-w-3xl mx-auto  p-4 mt-5 flex items-center justify-between gap-4"
        >
          {/* Left: Course Info */}
          <div className="flex-1">
            <h1 className="font-bold text-xl md:text-2xl">{item?.courseTitle}</h1>
          </div>
  
          {/* Middle: Image */}
          <div className="w-32 h-20 flex items-center justify-center">
            <img
              src={`${SERVERURL}/${item?.courseId?.thumbnail}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
  
          {/* Right: Button */}
          <div>
            <Link
              to={`/${item?._id}/course`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View
            </Link>
          </div>
          <div>
            {item?.status === "completed" && (
                <img
                  src="https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd.gif"
                  alt="completed"
                  width="100px"
                  className="mt-2"
                />
              )}
          </div>
        </div>
      ))
    ) : (
      <p className="text-center mt-5 text-gray-600">No Enrolled Courses</p>
    )}
  </div>
  </div>

}

        {/* Completed Courses */}
        {completedStatus &&
         <p>
            {
             enrolled?.length>0 ?
             enrolled?.filter((item) => item.status === "completed").map((item,index)=>(
              <div className='p-10 my-20 shadow rounded' style={{ backgroundColor: "rgba(237, 231, 215, 0.41)"}}>
              <div className="p-5 rounded mt-4 bg-[#6D6444]">
                <div className="md:grid grid-cols-[3fr_1fr] text-white">
                  <div className='px-4'>
                    <h1 className="text-2xl">{item?.courseTitle}</h1>
                    <h2 className='text-lg'>Instructor: Jane Smith</h2>
                    <h3 className="text-lg text-green-400">Completed</h3>
                    <p className='text-justify'>
                      {item?.courseId?.courseDescription}
                    </p>
                    <div className='flex mt-3'>
                      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width={"100px"} alt="certificate" />
                      <p className='ms-3 mt-6 font-bold'>Certificate Available</p>
                    </div>
                  </div>
                  <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-full' src={`${SERVERURL}/${item?.courseId?.thumbnail}`} alt="course" />
                  </div>
                </div>
              </div>
            </div>
             ))
             :
             <p>No Courses Completed yet...</p>
              }
         </p>
        }
      </div>
        <Footer/>
    </div>
  )
}

export default MyEnrollments