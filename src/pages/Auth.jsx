import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { googleloginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";


function Auth({register}) {
  const [viewPasswordStatus,setViewPasswordStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({username:"",email:"",password:""})
  const navigate = useNavigate()

  const handleRegister = async()=>{
    console.log("Inside handleRegister");
    const {username,email,password} = userDetails
    if(!username || !email || !password){
      toast.info("Please fill the form completely")
    }else{
      try{
        const result = await registerAPI(userDetails)
        console.log(result);
        if(result.status == 200){
          toast.success("Registered successfully!!! Please Login ....")
          setUserDetails({username:"",email:"",password:""})
          navigate('/login')
        }else if(result.status == 409){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})
          navigate('/login')
        }else{
          console.log(result);
          
        }
        
      }catch(err){
        console.log(err);
        
      }
    }
    
  }

  const handleLogin = async()=>{
    const {email,password} = userDetails
    if(!email || !password){
      toast.info("Please fill the form completely")
    }else{
      //toast.success("Proceed to API CALL")
      try{
        const result = await loginAPI(userDetails)
        console.log(result);
        if(result.status == 200){
          toast.success("Login successful")
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setTimeout(()=>{
            if(result.data.user.role == 'admin'){
              navigate('/admin-dashboard')
            }else{
              navigate('/')
            }
          },2500)          
        }else if(result.status == 401){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})
          
        }else if(result.status == 404){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})
          
        }
        else{
          toast.error("Something went wrong")
           setUserDetails({username:"",email:"",password:""})
          
        }
        
      }catch(err){
        console.log(err);
        
      }
    } 
  }

  const handleGoogleLogin = async (credentialResponse)=>{
    console.log("Inside handleGoogleLogin");
    const credential = credentialResponse.credential
    const details = jwtDecode(credential)
    console.log(details);
    
    try{
      const result = await googleloginAPI({username:details.name,email:details.email,password:"googlepassword",profile:details.picture})
      console.log(result);
      if(result.status == 200){
        toast.success('Login Successful')
        sessionStorage.setItem("user",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)
          setTimeout(()=>{
              if(result.data.user.role == "admin"){
                navigate('/admin-dashboard')
              }else{
                navigate('/')
              }
          },2500)
      }else{
         toast.error("Something went wrong !!!")
      }
      

    }catch(err){

    }
    
    
  }
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("/bgauth.png")] bg-cover bg-center '>
          <div className='p-10'>
            <h1 className='text-3xl font-bold text-white'>EduCore</h1>
          </div>
          <div  className='w-[90%] sm:w-[400px] md:w-[500px] bg-[rgba(30,41,57,0.4)] text-white p-5  my-5 flex justify-center items-center flex-col rounded'>
            <div style={{width:"100px",height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='text-3xl' />
            </div>
            <h1 className='text-2xl'>{register?"Register":"Login"}</h1>
            {
              register && 
               <form className='my-3 w-full'>
                <input type="text" value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} placeholder='User Name' className='w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
             </form>
            }
            <form className='my-3 w-full'>
                <input type="text" placeholder='Email ID' value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} className='w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
            </form>
            <form className='my-3 w-full flex items-center'>
                <input type={viewPasswordStatus?"text":"password"} placeholder='Password' value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}  className=' w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
                { !viewPasswordStatus ?
                    <FontAwesomeIcon style={{marginLeft:"-30px"}} icon={faEye} onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-500 cursor-pointer'/>
                    :
                <FontAwesomeIcon style={{marginLeft:"-30px"}} icon={faEyeSlash} onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-500 cursor-pointer'/>
                }
                
            </form>
            <div className='flex justify-between p-4 w-full'>
                  <p className='md:text-sm text-[9px] text-orange-300'>Never share your password with others</p>
                  <button className='md:text-sm text-[9px] underline'> Forget Password</button>
            </div>
            <div className='text-center w-full'>
              {
                register ?
                  <button className='bg-green-700 p-2 w-full rounded' onClick={handleRegister}>Register</button>
                  :
                  <button className='bg-green-700 p-2 w-full rounded' onClick={handleLogin}>Login</button>
              }
            </div>
            <div className=' my-5 text-center'>
              { !register && <p>-----------------------------or-----------------------------</p>

              }
              {
                !register && 
                <div className='my-5 flex justify-center w-full'>
                  <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      handleGoogleLogin(credentialResponse)
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
                </div>
              }
            </div>
            <div>
              {
              register?
              <p className='text-blue-600 text-sm'>Are You a Alraedy a User?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
              :
              <p className='text-blue-600 text-sm'>Are you a  New User? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
            }
            </div>
          </div>
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

export default Auth