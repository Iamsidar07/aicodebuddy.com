import React from 'react'
import copyToClipboard from '../copyToClipboard'
import { FiCopy } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
const Result = ({result}) => {
  return (
    <Fade bottom>
      <div className={"w-full  md:max-w-7xl mx-auto p-2 md:p-6 bg-[#1E272C] mb-6 relative rounded-md"}>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className=" w-3 h-3 rounded-full bg-red-600"></div>
          <div className=" w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className=" w-3 h-3 rounded-full bg-green-500"></div>
        </div>
          <FiCopy color='white' size={20} className="absolute top-3 right-3 cursor-pointer" onClick={(e) => copyToClipboard(result)} />
          <div
          className="mr-1 break-words"
          dangerouslySetInnerHTML={{__html:result}}
          />
      </div>
    </Fade>
  )
}

export default Result