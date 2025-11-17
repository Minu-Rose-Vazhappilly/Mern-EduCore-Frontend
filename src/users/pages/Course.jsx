import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import { getSingleEnrolledCourseAPI, updatedSingleEnrolledCourseAPI } from '../../services/allAPI';
import { useEffect } from 'react';
import SERVERURL from '../../services/serverURL';

function Course() {
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const [course,setCourse] = useState([])
    const [openIndex, setOpenIndex] = useState(null);
    console.log(course);
    
    useEffect(()=>{
        viewCourseDetails()
      },[])
     const viewCourseDetails = async ()=>{
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "Authorization":`Bearer ${token}`
          }
          try{
            const result = await getSingleEnrolledCourseAPI(id,reqHeader)
            if(result.status == 200){
              setCourse(result.data)
    
            }
            else{
              console.log(result);
              
            }
    
          }catch{
            console.log(err);
            
          }
        }
      }
      const updateCourse = async()=>{
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "Authorization":`Bearer ${token}`
          }
        try{
          const result = await updatedSingleEnrolledCourseAPI(course,reqHeader);
          setCourse(result.data)
          viewCourseDetails()

        }catch(err){
          console.log(err);
          
        }
      }
    }
      const toggle = (i) => {
  setOpenIndex(openIndex === i ? null : i);
};
  return (
    <div>
        <Header/>

        <div>
          { 
           <div key={course?.courseId?._id}>
              <h1 className='font-bold text-3xl'>{course?.courseId?.courseTitle}</h1>
            <h1 className='font-bold text-xl'>{course?.courseId?.
courseDescription
}</h1>
           </div>
          
           
            }
          <div className="md:grid grid-cols-3">
              <div className='col-span-1'>
                      { course?.courseId?.modules?.length>0 ?
                       course?.courseId?.modules?.map((item, index) => (
    <div className="p-6" key={index}>
      <div className="border p-4 rounded shadow">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle(index)}
        >
          <h2 className="text-lg font-semibold">Module {index+1}</h2>
          <span className="text-xl">
            {openIndex === index ? "−" : "+"}
          </span>
        </div>
  
        {openIndex === index && (
          <div className="mt-3">
            <p className="font-semibold">{item?.moduleTitle}</p>
            <p className="text-gray-600">{item?.moduleDescription}</p>
  
            {item?.pdfs?.map((pdf, i) => (
              <p>
                <a
                  key={i}
                  href={`${SERVERURL}/${pdf.fileUrl}`}
                  target="_blank"
                  className="text-blue-600 underline block mt-2"
                >
                  📄 Download {pdf.pdfName}
                </a>
                <p>{pdf.pdftitle}</p>
              </p>
            ))}
          </div>
        )
}
      </div>
    </div>
  ))
  
                       
                       :
                       <p>No Modules</p>
                        }
      
              </div>
              <div className='col-span-2'>
                {openIndex === null && (
    <img
      src={`${SERVERURL}/${course?.courseId?.thumbnail}`}
      alt=""
      className="w-full rounded-lg"
    />
  )}
                 {course?.courseId?.modules?.length>0 ?
                 course?.courseId?.modules?.map((item,index)=>(<div key={index} onClick={() => toggle(index)} className='w-full  p-4'>
                  {openIndex === index &&
                  
                    (
                      <div>
                    <video width="590" height="315" src={`${SERVERURL}/${item.videos[0].videoUrl}`} referrerpolicy="strict-origin-when-cross-origin" allowfullscreen controls></video>
                    <p className='font-bold'>{item?.videos[0]?.videotitle}</p>
                    </div>
                   
                    
  
                      )
                      
                      
                    }
                    </div>))
                 :
                  <p>No data</p>
                  }
              </div>
          </div>
          {course?.status === "ongoing" && (
  <div className="p-2">
    <button
      onClick={updateCourse}
      className="bg-blue-400 rounded text-white p-3 mb-2"
    >
      Mark it as completed
    </button>
  </div>
)}
        </div>
        <Footer/>
        
    </div>
  )
}

export default Course