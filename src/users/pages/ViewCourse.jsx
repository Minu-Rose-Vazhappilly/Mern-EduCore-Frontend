import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function ViewCourse() {
  return (
    <div>
      <Header/>
      <div className='md:grid grid-cols-3 gap-3 p-4'>
          <div className='col-span-2'>
            <h1 className='text-2xl mb-3'>Flutter & Dart - Complete App Development Course Specialization</h1>
            <button className='p-2 bg-blue-400 rounded-lg text-white'>Enroll</button>
          </div>
          <div className='col-span-1 md:block hidden'>
            <img src="/flutter.png" alt="" />
          </div>
      </div>
      <div className='w-full bg-[#EDE7D7] p-8'>
        <div className='shadow-lg rounded-lg p-3 bg-[#DED6B5] text-[#6D6444] font-bold'>
          <h1 className='mb-2'>Course details</h1>
          <p className='mb-2'><p>What you'll learn</p>
<p>Set up Flutter and Visual Studio Code to start building mobile apps</p>
<p>Develop mobile apps using stateful and stateless widgets in Flutter</p>
<p>Integrate SQLite databases and Firebase for data persistence and real-time sync</p>
<p>Master Dart programming concepts, including OOP principles and async operations</p></p>

<p className='mb-2'><p>4 weeks to complete</p>
<p>at 10 hours a week</p></p>

<p><p>Intermediate level</p>
<p>Recommended experience</p>
</p>

        </div>

      </div>
      <div className='p-4' style={{ backgroundColor: "rgba(237, 231, 215, 0.41)" }}>

          <h1 className='text-center font-bold text-[#6D6444] text-xl'>What Our Learners Say</h1>
          <div className='md:grid grid-cols-3 gap-6 p-5 md:mx-20 text-[#6D6444]'>
            <div className='rounded-xl md:mt-0 mt-3 h-60 w-60 bg-white flex justify-center items-center flex-col shadow-lg p-2'>
              <img src="/p1.png" alt="" style={{ height: "80px", width: "80px" }} />
              <h1 className='font-bold text-xl '>Lucy Jacob</h1>
              <p className='text-sm text-center'>"I gained new skills that boosted my confidence and opened up career opportunities I didn’t think were possible."</p>
            </div>
            <div className='rounded-xl md:mt-0 mt-3 shadow-lg h-60 w-60 bg-white flex justify-center items-center flex-col p-2'>
              <img src="/p2.png" alt="" style={{ height: "80px", width: "80px" }} />
              <h1 className='font-bold text-xl'>John Job</h1>
              <p className='text-sm text-center'>"EduCore has completely changed the way I learn. The courses are practical, easy to follow, and I can apply the skills directly at work."</p>
            </div>
            <div className='rounded-xl md:mt-0 mt-3 shadow-lg h-60 w-60 bg-white flex  items-center flex-col p-2'>
              <img src="/p3.png" alt="" style={{ height: "80px", width: "80px" }} />
              <h1 className='font-bold text-xl'>Lee Jen
              </h1>
              <p className='text-sm text-center'>“EduCore turned my free time into growth time.”</p>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ViewCourse