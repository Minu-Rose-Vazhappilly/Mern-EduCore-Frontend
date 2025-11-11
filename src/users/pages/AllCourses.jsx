import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { getAllCoursesAPI } from '../../services/allAPI'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { searchCourseContext } from '../../contextAPI/ContextShare'

function AllCourses() {
  const [course,setCourse] = useState([])
  const [token,setToken] = useState("")
  const [allCategories,setAllCategories] = useState([])
  const [tempCourse,setTempCourses] = useState([])
  const [listStatus,setListstatus] = useState(false)
  const {searchKey,setSearchKey} = useContext(searchCourseContext) 

  console.log(course);
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken  = sessionStorage.getItem("token")
      setToken(userToken)
      getAllCourses(userToken)
    }
  },[searchKey])

  const getAllCourses = async (userToken)=>{

    const reqHeader = {
      "Authorization" : `Bearer ${userToken}`
    }
    try{

      const result = await getAllCoursesAPI(searchKey,reqHeader)
      if(result.status == 200){
        setCourse(result.data)
        setTempCourses(result.data)
        const tempCategory = result.data.map(item=>item.courseType)
        const tempArray = [...new Set(tempCategory)]
        setAllCategories(tempArray)

      }else{
        console.log(result);
        toast.warning(result.response.data)

        
      }

    }catch(err){
      console.log(err);
      
    }
  }

  const filterBooks = (category)=>{
    if(category == "No-Filter"){
       setCourse(tempCourse)

    }else{
      setCourse(tempCourse.filter(item=>item.courseType.toLowerCase() == category.toLowerCase()))

    }
  }

  

  return (
    <div>
      <Header/>
      { token?
        <div>
        <div className='text-center'>AllCourses</div>
        <div className='flex justify-center md:items-center flex-col ' >
          <div className='mt-9 relative '>
            <input value={searchKey} type="text" className='bg-[#DED6B5] text-white p-2 rounded-full md:w-100 w-full focus:outline-0 ' onChange={e=>setSearchKey(e.target.value)} placeholder='Search Courses here...' />
            <button
  
              className="absolute right-3 top-1/2 -translate-y-1/2  "
            >
              <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className='p-10 md:grid grid-cols-4 gap-3 '>
            <div className="col-span-1">
         <div className='flex justify-between '>  
            <h1 className='text-xl font-semibold'>Filter</h1>
            <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
         </div>
          <div className={listStatus?'block':'md:block hidden'}>
            {
              allCategories?.length>0 && 
                allCategories?.map((category,index)=>(
                  <div key={index} className='mt-3'>
              <input type="radio" id={category} name='filter' onClick={()=>filterBooks(category)}/>
              <label className='ms-3' htmlFor={category}>{category}</label>
            </div>
                ))
            }
            
            <div className='mt-3'>
              <input type="radio" id='No-Filter' name='filter' onClick={()=>filterBooks("No-Filter")}/>
              <label className='ms-3' htmlFor="No-Filter">No-Filter</label>
            </div>
            
          </div>
        </div>
  
           <div className='col-span-3'>
             <div className='md:grid grid-cols-4 gap-6'>
                {
                  course?.length>0 ?
                  course?.map(item =>(
                    <Link
        key={item?._id}
        to={`/${item?._id}/viewcourse`}
        onClick={() => viewCourse(item?._id)}
        className="block rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-[rgba(212,204,182,0.41)] hover:bg-[#DED6B5] cursor-pointer md:w-full w-60 md:mt-0 mt-3"
      >
        <div className="flex flex-col justify-center items-center p-3 ">
          <img
            src={`${SERVERURL}/${item?.thumbnail}`}
            alt={item?.courseTitle}
            className="w-full  h-35 object-cover rounded-xl"
          />
          <p className="font-bold text-xl mt-3 text-center">{item?.courseTitle}</p>
          <p className="text-sm text-gray-700">⭐️ 4.7 · 50 reviews</p>
          <p className="text-sm text-gray-700">Intermediate Course · 1–3 Months</p>
        </div>
      </Link>
                  ))
                  :
                  <p>No Books</p>
                  }
             </div>
           </div>
           
  
          </div>
        </div>
      </div>
    :
     <div className='my-10 flex justify-center items-center flex-col min-h-100vh'>

      <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" height={"200px"} width={"200px"} alt="lock" />
      <p className="font-semibold text-lg">Please <Link to={'/login'} className='text-blue-500'>Login</Link> to Explore More</p>
    </div> 
    }
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

export default AllCourses