import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { Link } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'


function SettingAdmin() {

  return (
    <div>
      <AdminHeader />
      <div className='md:flex'>
        <div className='col-span-1'><AdminSideBar /></div>

        <div className='col-span-3 p-8 flex items-center justify-center flex-col'>
          <h1 className='text-3xl text-center font-bold '>Settings</h1>

          <div>

            <div className='md:grid grid-cols-2 mt-5 gap-6'>
              <div className=''>
                <h1 className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis odit eius saepe cumque, debitis repellendus tempora perspiciatis deleniti eos magni alias fugiat recusandae, numquam illo vel amet. Dignissimos, ducimus nostrum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum obcaecati maiores aliquam, impedit possimus? Quo voluptas velit nisi, nesciunt fugit optio voluptate sequi obcaecati, veniam animi nemo eligendi? Corporis.</h1>
                <br />
                <br />
                <h1 className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, vitae nobis porro dolorem at odit sit, tempore molestias exercitationem neque iure sunt sint corporis eos adipisci provident omnis dicta in.</h1>
              </div>
              <div>
                <div className="bg-[#CFCDB6] md:mt-0 mt-5 rounded-lg flex flex-col justify-center items-center py-5  w-full max-w-[350px] aspect-[5/4] mx-auto " >
                  <div className="relative inline-block">
                    <label htmlFor="adminPic">
                      {/* User Icon Circle */}
                      <div
                        className="bg-gray-400 mb-4 rounded-full text-white flex justify-center items-center text-3xl"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </div>

                      {/* Pen Icon Overlay */}
                      <FontAwesomeIcon
                        icon={faPen}
                        className="absolute bottom-4 right-1 bg-white text-yellow-400 rounded-full p-2 text-sm shadow"
                      />
                    </label>

                    {/* Hidden File Input */}
                    <input type="file" id="adminPic" className="hidden" />
                  </div>

                  <form action="" className="w-full px-5  ">
                    <input
                      type="text"
                      className="w-full bg-white p-1  rounded"
                      placeholder="Username"
                    />
                    <input
                      type="text"
                      className="w-full bg-white p-1 mt-1 rounded"
                      placeholder="Password"
                    />
                    <input
                      type="text"
                      className="w-full bg-white p-1 mt-1 rounded"
                      placeholder="Confirm Password"
                    />

                  </form>
                  <div className='grid grid-cols-2 gap-3 w-full px-5'>
                    <button className="bg-orange-400 text-white   text-center  px-3 py-1 mt-3 rounded-lg">Reset</button>
                    <button className="bg-green-600 text-white   text-center  px-3 py-1 mt-3 rounded-lg">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SettingAdmin