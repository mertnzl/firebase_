import React from 'react'
import { Link } from 'react-router-dom';
import { useProductsListener } from '../firebase';


const HastaKayit = () => {
  useProductsListener()

  return (
    
    <div className='bg-green-100 h-screen'>
    <div className='grid text-center  text-sky-700 font-extralight text-3xl '>

      <h1 className='mt-6'>Hasta Kayıt</h1>
    </div>
    <div className='flex justify-center items-center mt-5 '> 
    <div className= 'rounded-lg border-2 border-sky-700 w-[45rem] h-[25rem]'>
    <form  className='grid  grid-cols-2 text-2xl ml-5 mt-8 gap-3 text-sky-700'>
  <label >Hasta Adı:</label>
  <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="text " placeholder='Mert' />
  <label >Hasta Soyadı:</label>
  <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="text" placeholder='Nazlı'/>
  <label >Doğum tarihi:</label>
  <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="text" placeholder='**.**.****'/>
  <label >Telefon Numarası:</label>
  <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="text " placeholder='(***) *** ** **' />
  <label >TC Numarası: </label>
  <input className='border-2 rounded-lg border-sky-300 w-[18rem] focus:outline-none' type="text " placeholder='88888888888' />
  <Link to={"/Login/HastaKayit/HastaBilgi"} className='mt-10 text-center w-[8rem] h-[4rem]  pt-3.5 text-2xl  font-extralight  bg-sky-700 text-white  rounded-lg transition-all hover:bg-white hover:text-sky-700 hover:border-2 hover:border-sky-700'>Ekle</Link>
    </form>
    
    </div>
    </div>
    </div> 
  )
}

export default HastaKayit