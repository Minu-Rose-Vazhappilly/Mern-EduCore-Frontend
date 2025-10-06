import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../../components/Footer';

function MyEnrollments() {
    const [myCourses,setMyCourses] = useState(true)
      const [completedStatus,setCompletedStatus] = useState(false)
    
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
  <div className='p-10 my-20 shadow rounded'  style={{ backgroundColor: "rgba(237, 231, 215, 0.41)"}} >
    <div className="p-5 rounded mt-4 bg-[#6D6444]">
      <div className="md:grid grid-cols-[3fr_1fr] text-white">
        <div className='px-4'>
          <h1 className="text-2xl">Flutter Development</h1>
          <h2 className='text-lg'>Instructor: John Doe</h2>
          <h3 className="text-lg text-white">Progress: 60%</h3>
          <p className='text-justify'>
           Developing mobile apps with flutter
          </p>
          <div className='mt-3'>
            <progress value="60" max="100" className="w-full"></progress>
          </div>

          {/* Status Button */}
          <div className="mt-4">
            <Link
              to={'/:id/course'}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              On Going
            </Link>
          </div>
        </div>

        <div className=' mt-4 md:mt-0'>
           <img src="/flutter.png" alt="" height={"60px"} className='w-full' />
          
        </div>
      </div>
    </div>
  </div>
}

        {/* Completed Courses */}
        {completedStatus &&
          <div className='p-10 my-20 shadow rounded' style={{ backgroundColor: "rgba(237, 231, 215, 0.41)"}}>
            <div className="p-5 rounded mt-4 bg-[#6D6444]">
              <div className="md:grid grid-cols-[3fr_1fr] text-white">
                <div className='px-4'>
                  <h1 className="text-2xl">Advanced JavaScript</h1>
                  <h2 className='text-lg'>Instructor: Jane Smith</h2>
                  <h3 className="text-lg text-green-400">Completed</h3>
                  <p className='text-justify'>
                    Master advanced concepts of JavaScript including closures, async/await, and ES6 features.
                  </p>
                  <div className='flex mt-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width={"100px"} alt="certificate" />
                    <p className='ms-3 mt-6 font-bold'>Certificate Available</p>
                  </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                  <img className='w-full' src="https://pluralsight.imgix.net/course-images/javascript-advanced-course.jpg" alt="course" />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
        <Footer/>
    </div>
  )
}

export default MyEnrollments