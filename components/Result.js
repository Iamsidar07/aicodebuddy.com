import React from 'react'
import { ToastContainer } from 'react-toastify'
import copyToClipboard from '../copyToClipboard'
import { FiCopy } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
const Result = ({result}) => {
  return (
    <Fade bottom>
      <div className={"w-full  md:max-w-7xl mx-auto p-2 md:p-4 bg-gray-900 mb-6 relative rounded-lg"}>
          <FiCopy color='white' size={20} className="absolute top-2 right-2 cursor-pointer" onClick={(e) => copyToClipboard(result)} />
          <ToastContainer />
          <p className='mr-7 md:mr-10 break-words'>{result}</p>
      </div>
    </Fade>
  )
}

export default Result