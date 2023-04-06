import React from 'react'
import copyToClipboard from '../copyToClipboard'
import { FiCopy } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
const Result = ({result}) => {

  
  return (
    <Fade bottom>
      <div className='min-h-96 z-[-1]'>
        <div className="absolute top-0 left-0 flex items-center gap-1">
          <div className=" w-3 h-3 rounded-full bg-[#FF6059]" />
          <div className=" w-3 h-3 rounded-full bg-[#FABF2F]" />
          <div className=" w-3 h-3 rounded-full bg-[#28C941]" />
        </div>

          <FiCopy color='white' size={20} className="absolute top-0 right-0 cursor-pointer" onClick={(e) => copyToClipboard(result)} />
          <div
          className="mr-1 mt-2 break-words "
          dangerouslySetInnerHTML={{ __html: result.replaceAll('\n', '<br/>') }}
          />
      </div>
    </Fade>
  )
}


export default Result
