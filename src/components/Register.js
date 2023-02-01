import React from 'react'
import { register } from '../firebase'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const Register = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit = async e =>{
        e.preventDefault()
        const {user} = await register(email,password);
           
        }

  return (
    <div className='bg-green-100 h-screen'>
      <Toaster position='top-right'/>
    <div className='flex justify-center items-center  '> 
    <div className= 'flex justify-center items-center mt-32 '>
    <div className=' rounded-lg border-2 border-sky-700 w-[25rem] h-[25rem]'>
        <form  className='grid text-2xl ml-5 mt-8 gap-2 text-sky-700' onSubmit={handleSubmit}>
        <label >E-posta</label>
        <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="text" placeholder='abc123@gmail.com' value={email} onChange={e=>setEmail(e.target.value)}/><br/>
        <label >Parola</label>
        <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="password" placeholder='******' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <button disabled={!email || !password} className='text-center w-[8rem] h-[4rem] text-2xl disabled:opacity-30 font-extralight  bg-sky-700 text-white  rounded-lg' >Kayıt ol</button>
        </form>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Register