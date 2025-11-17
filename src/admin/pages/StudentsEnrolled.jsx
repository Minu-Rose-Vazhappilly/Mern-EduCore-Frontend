import React from 'react'
import AdminHeader from '../../admin/components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { useState } from 'react'
import { enrolledAPI } from '../../services/allAPI'
import { ToastContainer,toast } from 'react-toastify'
import { useEffect } from 'react'

function StudentsEnrolled() {
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
      const result = await enrolledAPI(reqHeader)
      if(result.status == 200){
        setEnrolled(result.data)
      }else{

      }
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className='font-bold'  style={{backgroundImage:`url("https://cdn.wallpapersafari.com/9/77/1UDgMj.jpg")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <AdminHeader/>
        <div className="md:grid grid-cols-3">
            <div className='col-span-1'>
                <AdminSideBar/>
            </div>
            <div className='col-span-2 md:p-6 md:my-0 my-3 overflow-x-auto'>
                <table class="table-auto border-collapse border border-gray-500 w-full ">
  <thead>
    <tr>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">#</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Student Name</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Course Title</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Date</th>
    </tr>
  </thead>
  <tbody>
    {enrolled?.length>0 ?
     enrolled?.map((item,index)=>(<tr>
      <td class="border border-gray-500 px-4 py-2">{index+1}</td>
      <td class="border border-gray-500 px-4 py-2">{item.userId.username}</td>
      <td class="border border-gray-500 px-4 py-2">{item.courseTitle}</td>
      <td class="border border-gray-500 px-4 py-2">{item.enrolledAt}</td>
    </tr>))
    :
    <p>No Students Enrolled</p>
    }
   
  </tbody>
</table>


            </div>
        </div>
        <Footer/>
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
        </div>
  )
}

export default StudentsEnrolled