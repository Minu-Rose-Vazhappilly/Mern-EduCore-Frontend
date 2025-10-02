import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Preloader from './components/Preloader'
import Auth from './pages/Auth'
import AllCourses from './users/pages/AllCourses'
import ViewCourse from './users/pages/ViewCourse'
import Profile from './users/pages/Profile'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import DashboardAdmin from './admin/pages/DashboardAdmin'
import ResourceAdmin from './admin/pages/ResourceAdmin'
import SettingAdmin from './admin/pages/SettingAdmin'
import CareerAdmin from './admin/pages/CareerAdmin'
import Pnf from './pages/Pnf'



function App() {
 
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },7000)
  },[])
  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Preloader/>:<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register={true}/>}/>
      <Route path='/all-courses' element={<AllCourses/>} />
      <Route path='/:id/viewcourse' element={<ViewCourse/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/admin-dashboard' element={loading?<Preloader/>:<DashboardAdmin/>}/>
      <Route path='/admin-resources' element={<ResourceAdmin/>} />
      <Route path='/admin-settings' element={<SettingAdmin/>} />
      <Route path='/admin-career' element={<CareerAdmin/>} />



      <Route path='/*' element={<Pnf/>} />
    </Routes>
    </>
  )
}

export default App
