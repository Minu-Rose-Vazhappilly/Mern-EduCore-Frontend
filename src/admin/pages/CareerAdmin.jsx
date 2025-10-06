import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { Link } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


function CareerAdmin() {
  const [jobListStatus,setJobListStatus] = useState(true)
  const [listApplicationStatus,setApplicationStatus] = useState(false)
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
            Job Status
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
            Application Status
          </p>
        </div>

        {/* Content */}
        <div >
          {
          jobListStatus && 
          <div>
            <div className='md:flex justify-between items-center my-5'>
            <div className='flex'>
              <input type="text" className='round-l border border-gray-300 p-2 focus-outline:none' placeholder='Job title' />
            <button className='bg-green-500 p-2 round-r'>Search</button>
            </div>
            <div>
              Add
            </div>
            </div>
            <div>
               <div className="w-full md:max-w-[800px]  shadow p-4 mt-4">
                          <div className='flex justify-between'><h1>  Hr Assistant</h1>
                            <button onClick={() => setModalStatus(true)} className='bg-red-500 rounded px-3 py-2 text-white'>Delete <FontAwesomeIcon icon={faTrash} /></button>
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
            }
          {listApplicationStatus && <div className='p-10 overflow-x-hidden'>
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
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>Front end DEveleper</td>
                    <td className='border border-gray-500 p-3 text-center'>Max Miller</td>
                    <td className='border border-gray-500 p-3 text-center'>BCA</td>
                    <td className='border border-gray-500 p-3 text-center'>max@gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>6282693587</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, asperiores culpa amet laudantium sint nulla aut suscipit voluptatem, ipsa itaque vitae enim officiis maxime minima repellat, aliquam nobis consequuntur ullam?</td>
                    <td className='border border-gray-500 p-3 text-center'><Link className='text-blue-600 underline'>Resume</Link></td>
                  </tr>
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