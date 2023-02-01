import React from 'react'
import { Link } from 'react-router-dom';
import resim from '../images/13192.jpg';


const Content = () => {
  return (
    <div>
      <img src={resim} alt=""  className='w-[50rem] h-[35rem] float-right' />
      <div className='ml-10 pt-32  '>
      <p1 className=" text-7xl font-extralight text-sky-700">Kolay ve anlaşılır  Diş Hekimliği portalı için</p1>
      
      <Link to={"/Login"} className='text-center text-2xl bg-sky-700 text-white font-extralight  w-[8rem] h-[4rem] float-right mt-11 mr-44 pt-3.5 rounded-lg transition-all hover:bg-white hover:text-sky-700 hover:border-2 hover:border-sky-700'>BAŞLA</Link>
      </div>
      
      
    </div>
  )
}

export default Content