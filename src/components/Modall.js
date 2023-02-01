import React from 'react'

import Modal from 'react-modal';
import {AiOutlineCloseCircle} from "react-icons/ai";

Modal.setAppElement('#root');
const Modall = ({product}) => {
  function openModal() {
    setIsOpen(true);
    
  }

  function afterOpenModal() {
    
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  
    
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className=''>
        <button className=' bg-pink-500 rounded-xl ' onClick={openModal}  >
        <img className=" h-[2.5rem]  " src={product.image} /> 
        <h1 className='text-slate-500 text-xs'>{product.id}</h1>
        </button>
        
        <Modal className="  bg-white h-[30rem]  border-2 rounded-lg border-sky-700 mx-20 mt-10"
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
    >
      <button className="text-sky-700 float-right text-4xl mt-5 mr-5 " onClick={closeModal} ><AiOutlineCloseCircle/></button>
      <div className='text-center mt-5 text-sky-700 font-bold text-2xl'>{product.id} NUMARALI DİŞ İŞLEM</div>
      <form>
        <input />
      </form>
    </Modal>
        
    </div>
    
  )
}

export default Modall
