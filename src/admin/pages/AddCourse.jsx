import React from 'react'
import Header from '../../users/components/Header'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

function AddCourse() {
  return (
    <div><Header/>
    <div className="md:grid grid-cols-3">
        <div className='col-span-1'>
            <AdminSideBar/>
        </div>
        <div className='col-span-2 p-5'>
            <form action="">
                <div>
                    <label htmlFor="">Course Type</label><br />
                    <input type="text" className='border border-gray-300 rounded-lg md:w-100 w-full p-1' placeholder='type here...'/>
                </div>
                <div>
                    <label htmlFor="">Course Headings</label><br />
                    <input type="text" className='border border-gray-300 rounded-lg md:w-100 w-full p-1' placeholder='type here...'/>
                </div>
                <div>
                    <label htmlFor="">Course Descriprition</label><br />
                    <textarea type="text" cols={5} rows={5} className='border border-gray-300 rounded-lg md:w-100 w-full p-1' placeholder='type here...'/>
                </div>
                <div className='md:flex  ' >
                    <div>
                        <label htmlFor="">Price</label><br />
                        <input type="text" className='border border-gray-300 rounded-lg md:w-40 w-full p-1' placeholder='0'/>
                    </div> 
                    <div className=''>
                        <label htmlFor="thumbnail">Thumbnail
                            <FontAwesomeIcon icon={faUpload}/>
                        </label>
                        <input type="file" id='thumbnail'  className='hidden' />
                    </div>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AddCourse