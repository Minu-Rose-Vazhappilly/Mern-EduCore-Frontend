// import { faUser } from '@fortawesome/free-regular-svg-icons'
// import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'



// function AdminSideBar() {
//   const [listStatus,setListstatus] = useState(false)
//   return (
//    <div className='p-10'>
//       <div className='bg-[#CFCDB6] border border-4 rounded-4xl text-[#514D3E] font-bold flex justify-center items-center flex-col px-25 py-30 md:min-h-screen'>
//        <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{width:"70px",height:"70px"}}>
//         <FontAwesomeIcon icon={faUser} />
//        </div>
//        <p className='mt-2 text-xl '>Username</p>
//        <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden '><FontAwesomeIcon icon={faBars} style={{color:"blue"}}/></button>
//        <div className={listStatus ? 'block mt-2 text-sm  w-40 ' : 'md:block hidden mt-2 text-sm  w-40'}>
//           <div className="mt-3 flex items-center gap-x-2">
//             <Link to={'/admin-dashboard'}>
//                 <FontAwesomeIcon icon={faBook} />
//                 Home
//               </Link>
//           </div>
  
//           <div className="mt-3 flex items-center gap-x-2  " >
//             <Link to={'/add-course'}>
//                 <FontAwesomeIcon icon={faBook} />
//                 Add Courses
//               </Link>
//           </div>
//           <div className="mt-3 flex items-center gap-x-2">
//             <Link to={'/course-list'}>
//                 <FontAwesomeIcon icon={faBook} />
//                 My Courses
//               </Link>
//           </div>
//           <div className="mt-3 flex items-center gap-x-2">
//             <Link to={'/students-enrolled'}>
//                 <FontAwesomeIcon icon={faBook} />
//                Students Enrolled
//               </Link>
//           </div>
  
//           <div className="mt-3 flex items-center gap-x-2">
//             <Link to={'/admin-career'}>
//                 <FontAwesomeIcon icon={faBagShopping} />
//                 Careers
//               </Link>
//           </div>
  
//           <div className="mt-3 flex items-center gap-x-2">
//             <Link to={'/admin-settings'}>
//                 <FontAwesomeIcon icon={faScrewdriverWrench} />
//                 Settings
//               </Link>
//           </div>
  
//         </div>
//       </div>
//    </div>
//   )
// }

// export default AdminSideBar



import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'
import { useContext } from 'react'
import { useEffect } from 'react'

function AdminSideBar() {
  const [listStatus, setListstatus] = useState(false)
  const {adminEditResponse,setAdminEditResponse} = useContext(adminUpdateContext)
  const [dp,setDp] = useState("")
  const [adminName,setAdminName] = useState("")

   useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.profile)
      setAdminName(user.username)
    }
  },[adminEditResponse])


  return (
    <div className='p-8 '>
      <div className='bg-[#CFCDB6]  border border-4 rounded-full text-[#514D3E] font-bold flex justify-center items-center flex-col px-10 py-10 md:min-h-screen'>

        {/* Profile section */}
       <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{width:"70px",height:"70px"}}>
      {/* <FontAwesomeIcon icon={faUser} /> */}
      <img style={{width:"70px",height:'70px',borderRadius:'50%'}} src={dp==""?"https://www.pngmart.com/files/23/Profile-PNG-Photo.png":`${SERVERURL}/uploads/${dp}`} alt="" />
     </div>

        <p className='mt-2 text-xl text-center'>{adminName}</p>

        {/* Mobile toggle */}
        <button onClick={() => setListstatus(!listStatus)} className='text-2xl md:hidden mt-2'>
          <FontAwesomeIcon icon={faBars} style={{ color: "blue" }} />
        </button>

        {/* Sidebar menu */}
        <div className={listStatus ? 'block mt-4 text-sm w-40' : 'md:block hidden mt-4 text-sm w-40'}>
          
          {/* MENU ITEM - TEMPLATE */}
          {/* hover:bg-[#b8b6a4]  hover:text-black hover:scale-[1.03] */}
          
          <div className="mt-3">
            <Link
              to={'/admin-dashboard'}
              className="flex items-center gap-x-2 px-3 py-2 rounded-lg 
                        hover:bg-[#b8b6a4] hover:text-black hover:scale-[1.03] 
                        transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBook} className="transition-all duration-300 group-hover:text-[#2d2a21]" />
              Home
            </Link>
          </div>

          <div className="mt-3">
            <Link
              to={'/add-course'}
              className="flex items-center gap-x-2 px-3 py-2 rounded-lg 
                        hover:bg-[#b8b6a4] hover:text-black hover:scale-[1.03] 
                        transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBook} />
              Add Courses
            </Link>
          </div>

          <div className="mt-3">
            <Link
              to={'/course-list'}
              className="flex items-center gap-x-2 px-3 py-2 rounded-lg 
                        hover:bg-[#b8b6a4] hover:text-black hover:scale-[1.03] 
                        transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBook} />
              My Courses
            </Link>
          </div>

          <div className="mt-3">
            <Link
              to={'/students-enrolled'}
              className="flex items-center gap-x-2 px-3 py-2 rounded-lg 
                        hover:bg-[#b8b6a4] hover:text-black hover:scale-[1.03] 
                        transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBook} />
              Students Enrolled
            </Link>
          </div>

          <div className="mt-3">
            <Link
              to={'/admin-career'}
              className="flex items-center gap-x-2 px-3 py-2 rounded-lg 
                        hover:bg-[#b8b6a4] hover:text-black hover:scale-[1.03] 
                        transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBagShopping} />
              Careers
            </Link>
          </div>

          <div className="mt-3">
            <Link
              to={'/admin-settings'}
              className="flex items-center gap-x-2 px-3 py-2 rounded-lg 
                        hover:bg-[#b8b6a4] hover:text-black hover:scale-[1.03] 
                        transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar

