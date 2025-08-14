import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5"
import { motion } from "motion/react"

const Card = ({data, reference}) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.5}}
      dragElastic={0.1}
      dragTransition={{bounceStiffness:100, bounceDamping:2}}
      className='relative flex-shrink-0 w-60 h-70 rounded-[45px] px-8 py-10 bg-zinc-600 text-amber-50 p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight '>{data.desc}</p>
      <div className='fotter absolute bottom-0 w-full left-0'>
        <div className='flex justify-between items-center px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff'/>}            
          </span>          
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'> {data.tag.tagTitle} </h3>
          </div>
        )}
        
      </div>
    </motion.div>
  )
}

export default Card
