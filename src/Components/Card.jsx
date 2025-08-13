import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div className='relative w-60 h-70 rounded-[45px] px-8 py-10 bg-zinc-600 text-amber-50 p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight '>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className='fotter absolute bottom-0 w-full left-0'>
        <div className='flex justify-between items-center px-8 py-3 mb-3'>
          <h5>.4mb</h5>
          <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
            <LuDownload size=".7em" color='#fff'/>
          </span>          
        </div>
        <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
          <h3 className='text-sm font-semibold'>Download Now</h3>
        </div>
      </div>
    </div> 
  )
}

export default Card
