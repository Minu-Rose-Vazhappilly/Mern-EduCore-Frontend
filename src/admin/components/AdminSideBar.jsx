import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function AdminSideBar() {
  const [listStatus,setListstatus] = useState(false)
  return (
    <div className='bg-[#CFCDB6] text-[#514D3E] font-bold flex justify-center items-center flex-col px-25 py-30 md:min-h-screen'>
     <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{width:"70px",height:"70px"}}>
      <FontAwesomeIcon icon={faUser} />
     </div>
     <p className='mt-2 text-xl '>Username</p>
     <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden '><FontAwesomeIcon icon={faBars} style={{color:"blue"}}/></button>
     <div className={listStatus ? 'block mt-2 text-sm  w-40 ' : 'md:block hidden mt-2 text-sm  w-40'}>
        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-dashboard'}>
              <FontAwesomeIcon icon={faBook} />
              Home
            </Link>
        </div>

        <div className="mt-3 flex items-center gap-x-2  " >
          <Link to={''}>
              <FontAwesomeIcon icon={faBook} />
              Add Courses
            </Link>
        </div>
        <div className="mt-3 flex items-center gap-x-2">
          <Link to={''}>
              <FontAwesomeIcon icon={faBook} />
              My Courses
            </Link>
        </div>
        <div className="mt-3 flex items-center gap-x-2">
          <Link to={''}>
              <FontAwesomeIcon icon={faBook} />
             Students Enrolled
            </Link>
        </div>

        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-career'}>
              <FontAwesomeIcon icon={faBagShopping} />
              Careers
            </Link>
        </div>

        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-settings'}>
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Settings
            </Link>
        </div>

      </div>
    </div>
  )
}

export default AdminSideBar