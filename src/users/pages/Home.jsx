import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import { getHomeCoursesAPI } from '../../services/allAPI';
import SERVERURL from '../../services/serverURL';
import { Link, useNavigate } from 'react-router-dom';
import { searchCourseContext } from '../../contextAPI/ContextShare';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer,toast } from 'react-toastify'

function Home() {

  const [homeCourses,setHomeCourses] = useState([])
  const {searchKey,setSearchKey} = useContext(searchCourseContext)

  const navigate = useNavigate()


  const faqs = [
    {
      question: "What is EduCore?",
      answer:
        "EduCore is an interactive learning platform designed to help you unlock your core potential with personalized learning paths.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by signing up on our platform, selecting a course, and following the checkout process.",
    },
    {
      question: "Are there free courses available?",
      answer:
        "Yes! EduCore offers a selection of free courses to get you started on your learning journey.",
    },
    {
      question: "Can I access courses on mobile devices?",
      answer:
        "Absolutely! EduCore is fully responsive and can be accessed on both smartphones and tablets.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(()=>{
    getHomeCourses()
  },[])

  console.log(homeCourses);
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const searchCourse = ()=>{
  if(!searchKey){
    toast.warning("Please provide a book title here!!!")
  }else if(!sessionStorage.getItem("token")){
    toast.warning("Please Login to search books")
    setTimeout(()=>{
      navigate('/login')
    },2500);
  }else if(sessionStorage.getItem('token') && searchKey){
    navigate('/all-courses')
  }else{
    toast.error("Something went wrong")
  }
}

  const getHomeCourses = async ()=>{
    try{
      const result = await getHomeCoursesAPI()
      if(result.status == 200){
        setHomeCourses(result.data)
      }

    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <>

      <Header />
      <div>

        <div className='md:grid grid-cols-2 gap-6 '>
          <div className='flex justify-center items-center p-10 '>
            <p className='md:text-6xl text-5xl font-bold  ' style={{ color: "rgba(109, 100, 68, 1)" }}>Unlock Your Core Potential with EduCore</p>
          </div>
          <div className='hidden md:block'>
            <img src="/WorkingWomen.png"  alt="" />
          </div>
        </div>
        <div className="w-full mx-auto p-4" style={{ backgroundColor: "rgba(237, 231, 215, 0.41)" }}>
          <h1 className='font-bold text-2xl text-center' style={{ color: "rgba(109, 100, 68, 1)" }}>Our Trusted Partners</h1>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4} // default for mobile
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 }, // from 640px (sm)
              768: { slidesPerView: 2 }, // from 768px (md)
              1024: { slidesPerView: 4 }, // from 1024px (lg)
            }}
            className="w-full"
          >
            <SwiperSlide>
              <img
                src="/c1-google.png"
                alt="Google"
                className="w-full h-[200px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/c2-amazon.png"
                alt="Amazon"
                className="w-full h-[200px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/c3-IBM.png"
                alt="IBM"
                className="w-full h-[200px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/c4-JPMorgan.png"
                alt="JPMorgan"
                className="w-full h-[200px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/c5-zoho.png"
                alt="Zoho"
                className="w-full h-[200px] object-contain"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='p-3 w-full text-[#6D6444] flex flex-col justify-center items-center' >
          <div className='mt-9 relative md:w-100 w-full' >
              <input type="text" onChange={e=>setSearchKey(e.target.value)} className=' text-gray-500 p-2 rounded-full w-100 focus:outline-0 ' placeholder='Search Books'  />
              <button

                className="absolute right-3 top-1/2 -translate-y-1/2  text-blue-400"
              >
                <FontAwesomeIcon onClick={searchCourse} icon={faMagnifyingGlass} />
              </button>
            </div>
          <h1 className='text-center font-bold text-2xl mt-4' style={{ color: "rgba(109, 100, 68, 1)" }}>Popular Courses</h1>
          <div className='p-10 md:grid grid-cols-4 gap-6 '>

            { homeCourses?.length>0 ?
                homeCourses.map((items)=>(
                  <div key={items?._id} className=' shadow-xl/30 rounded-xl h-80 w-50 p-2 flex justify-center md:mt-0 mt-2  flex-col' style={{ backgroundColor: "rgba(212, 204, 182, 0.41)" }} >
              <img src={`${SERVERURL}/${items?.thumbnail}`} alt="" height={"30px"} className='w-full h-48 object-cover rounded-xl' />
              <p className='font-bold text-xl mt-3'>{items?.courseTitle
}</p>
              <p> ⭐️ 4.7  . 50 reviews</p>
              <p>Intermediate Course     1-3 Months</p>
            </div>
                ))
              
            
          :
          <p>No Course have added</p>
          }

          
            
          </div>
          <div className='text-center my-5 w-full flex justify-center items-center '>
          <Link to='/all-courses' className='bg-blue-600 p-3 text-white  shadow-xl/30'>Explore More...</Link>
        </div>
        </div>
        
        <div className='p-4 ' style={{ backgroundColor: "rgba(237, 231, 215, 0.41)" }}>

          <h1 className='text-center font-bold text-[#6D6444] text-xl'>What Our Learners Say</h1>
          <div className='md:grid grid-cols-3 gap-6 p-5 md:mx-20 text-[#6D6444]'>
            <div className='rounded-xl md:mt-0 mt-3 h-60 w-60 bg-white flex justify-center items-center flex-col  shadow-xl/30 p-2'>
              <img src="/p1.png" alt="" style={{ height: "80px", width: "80px" }} />
              <h1 className='font-bold text-xl '>Lucy Jacob</h1>
              <p className='text-sm text-center'>"I gained new skills that boosted my confidence and opened up career opportunities I didn’t think were possible."</p>
            </div>
            <div className='rounded-xl md:mt-0 mt-3  h-60 w-60 bg-white flex justify-center items-center flex-col p-2  shadow-xl/30'>
              <img src="/p2.png" alt="" style={{ height: "80px", width: "80px" }} />
              <h1 className='font-bold text-xl'>John Job</h1>
              <p className='text-sm text-center'>"EduCore has completely changed the way I learn. The courses are practical, easy to follow, and I can apply the skills directly at work."</p>
            </div>
            <div className='rounded-xl md:mt-0 mt-3  h-60 w-60 bg-white flex  items-center flex-col p-2  shadow-xl/30'>
              <img src="/p3.png" alt="" style={{ height: "80px", width: "80px" }} />
              <h1 className='font-bold text-xl'>Lee Jen
              </h1>
              <p className='text-sm text-center'>“EduCore turned my free time into growth time.”</p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#6D6444]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden  shadow-xl/30"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#ede7d7] hover:bg-[#e0d9b5] transition-colors"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-6 py-4 text-gray-700 transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-96" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      <Footer />
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
    </>
  )
}

export default Home