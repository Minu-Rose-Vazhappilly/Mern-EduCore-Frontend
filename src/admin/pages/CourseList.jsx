import React from 'react'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../../admin/components/AdminHeader'
import { useEffect } from 'react'
import { useState } from 'react'
import { enrolledStatsAPI } from '../../services/allAPI'

function CourseList() {
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
        const result = await enrolledStatsAPI(reqHeader)
        if(result.status == 200){
          setEnrolled(result.data)
        }else{
  
        }
      }catch(err){
        console.log(err);
        
      }
    }
  return (
    <div className=''  style={{backgroundImage:`url("https://cdn.wallpapersafari.com/9/77/1UDgMj.jpg")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
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
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">All Courses</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Earnings</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Students</th>
    </tr>
  </thead>
  <tbody>
    {enrolled?.length>0 ?
    enrolled?.map((item,index)=>(<tr>
      <td class="border border-gray-500 px-4 py-2 font-bold">{index+1}</td>
      <td class="border border-gray-500 px-4 py-2 font-bold">{item.courseTitle}</td>
      <td class="border border-gray-500 px-4 py-2 font-bold">{item.totalEarnings}</td>
      <td class="border border-gray-500 px-4 py-2 font-bold">{item.totalStudents}</td>
    </tr>))
    :
    <p>No Data</p>
      }
    
  </tbody>
</table>


            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default CourseList