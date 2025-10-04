import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function AllCourses() {
  return (
    <div>
      <Header/>
      <div>
        <div className='text-center'>AllCourses</div>
        <div className='flex justify-center md:items-center flex-col ' >
          <div className='mt-9 relative '>
            <input type="text" className='bg-[#DED6B5] text-white p-2 rounded-full md:w-100 w-full focus:outline-0 ' placeholder='Search Courses here...' />
            <button
  
              className="absolute right-3 top-1/2 -translate-y-1/2  "
            >
              <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className='p-10 md:grid grid-cols-4 gap-6 '>
  
            <div className='rounded-xl h-70 w-50 p-2 flex justify-center md:mt-0 mt-2  flex-col' style={{ backgroundColor: "rgba(212, 204, 182, 0.41)" }} >
              <img src="/flutter.png" alt="" height={"20px"} className='w-full' />
              <p className='font-bold text-xl'>Developing mobile apps with flutter</p>
              <p> ⭐️ 4.7  . 50 reviews</p>
              <p>Intermediate Course     1-3 Months</p>
            </div>
            <div className='rounded-xl h-70 w-50 p-2 flex justify-center md:mt-0 mt-2  flex-col' style={{ backgroundColor: "rgba(212, 204, 182, 0.41)" }} >
              <img src="/flutter.png" alt="" height={"20px"} className='w-full' />
              <p className='font-bold text-xl'>Developing mobile apps with flutter</p>
              <p> ⭐️ 4.7  . 50 reviews</p>
              <p>Intermediate Course     1-3 Months</p>
            </div>
            <div className='rounded-xl h-70 w-50 p-2 flex justify-center md:mt-0 mt-2  flex-col' style={{ backgroundColor: "rgba(212, 204, 182, 0.41)" }} >
              <img src="/flutter.png" alt="" height={"20px"} className='w-full' />
              <p className='font-bold text-xl'>Developing mobile apps with flutter</p>
              <p> ⭐️ 4.7  . 50 reviews</p>
              <p>Intermediate Course     1-3 Months</p>
            </div>
            <div className='rounded-xl h-70 w-50 p-2 flex justify-center md:mt-0 mt-2  flex-col' style={{ backgroundColor: "rgba(212, 204, 182, 0.41)" }} >
              <img src="/flutter.png" alt="" height={"20px"} className='w-full' />
              <p className='font-bold text-xl'>Developing mobile apps with flutter</p>
              <p> ⭐️ 4.7  . 50 reviews</p>
              <p>Intermediate Course     1-3 Months</p>
            </div>
            
  
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default AllCourses