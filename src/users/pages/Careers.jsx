import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import Footer from '../../components/Footer'


function Careers() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <div>
      <Header/>
      <div className='w-full  bg-[url("/bgcareer1.png")]'>
      <div className='h-[400px]  w-full flex justify-center flex-col text-white'style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className='p-10'>
            <h1 className='font-bold text-4xl'>Build the Future of Learning with Us</h1>
            <p>Join EduCore and help learners across the <br /> 
world unlock their potential</p>
          </div>
      </div>
      </div>
      <div className='p-10'>
        <div className='flex justify-center md:items-center flex-col '>
          <div className='flex '>
            <input type="text" className='round-l border border-gray-300 p-2 focus-outline:none' placeholder='Job title' />
            <button className='bg-green-500 p-2 round-r'>Search</button>
          </div>
          <div className="w-full md:max-w-[800px] md:mx-40 shadow p-4 mt-4">
            <div className='flex justify-between'><h1>  Job Title</h1>
              <button onClick={() => setModalStatus(true)} className='bg-blue-500 rounded px-3 py-2 text-white'>APPLY <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </div>
            <div><hr className='border border-gray-300' /></div>
            <h1><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC", }} /> Location</h1>
            <h1>Job Type:Senior Level</h1>
            <h1>Qualification:Mtech/Btech/BCA/MCA</h1>
            <h1>Experience:5-7</h1>
            <h1>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus reprehenderit ipsam corrupti iure, fugiat molestias doloremque magnam architecto placeat atque vero asperiores sapiente perspiciatis incidunt, nemo pariatur nam fugit?</h1>
          </div>
        </div>
      </div>
      <div className='w-full  bg-[url("/bgcareer2.png")]'>
      <div className='h-[400px]  w-full flex flex-col justify-center'style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
        <div className='p-10 text-white '>
          <h1 className='font-bold text-4xl' >Why Work With Us?</h1>
          <p className='mt-6'> <p>Growth Opportunities</p>
<p>Work from Anywhere</p>
<p>Free Access to Courses</p>
<p>Collaborative Team</p></p>
          

        </div>
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
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Qualification"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Email Id"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3 col-span-2 '><textarea placeholder='coverLetter' name="" className=' w-full p-2 border rounded placeholder-gray-600 text-black' id=""></textarea>
                    </div>
                    <div className='mb-3 col-span-2 flex flex-col text-gray-600'>
                      <label htmlFor="">Resume</label>
                      <input
                        type="file"
                        
                        className="w-full  border rounded file:bg-gray-400 file:p-2 file:text-white "
                      />
                    </div>
                  </div>
                  
                </div>
                {/* modal footer */}
                <div className='bg-gray-250 p-2 w-full flex justify-end'>
                      <button className='py-2 px-3 rounded bg-black text-white'>Reset</button>
                      <button className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }
      <Footer/>

    </div>
  )
}

export default Careers