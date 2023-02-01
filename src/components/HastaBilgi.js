import React from 'react'
import Diş from "../Diş.json"
import Modall from "./Modall"


const HastaBilgi = ({product}) => {
		

  return (
    <div className='bg-green-100 h-screen'>
    <div className='flex flex-wrap  w-[40rem] h-[10rem] text-center items-center justify-center mx-auto '>
        {Diş.map(product=> 
       <Modall product={product}  />
        )}
      
    </div>
 
    </div>
  )
}

export default HastaBilgi