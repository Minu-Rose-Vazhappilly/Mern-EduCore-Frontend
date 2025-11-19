import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='flex justify-center items-center'><img src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif" alt="" /> <button className='ms-2' ><Link className='bg-blue-400 rounded p-3 text-white font-bold' to={'/'}
    >Back to Home</Link></button></div>
  )
}

export default Pnf