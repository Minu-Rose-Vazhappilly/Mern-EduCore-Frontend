import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'

function Course() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <Header/>

        <div className="md:grid grid-cols-3">
            <div className='col-span-1'>
                    <div className="p-6">
      <div className="border p-4 rounded shadow">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-semibold">Module 1</h2>
          <span className="text-xl">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {isOpen && (
          <p className="mt-3 text-gray-700">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam, veniam aperiam eveniet harum error, dolore in illo amet, maxime corporis delectus molestiae enim nam natus necessitatibus! Assumenda, explicabo recusandae.
          </p>
        )}
      </div>
    </div>
    
            </div>
            <div className='col-span-2'>
               <div className='w-full  p-4'> <iframe width="590" height="315" src="https://www.youtube.com/embed/kf6yyxMck8Y?si=slEa5UUb5gpF807t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </div>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Course