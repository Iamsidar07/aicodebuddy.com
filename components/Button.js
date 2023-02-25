import React from 'react'

const Button = ({btnText,btnTextIfLoading="loading",loading}) => {
  return (
      <input type="submit" value={`${loading ? btnTextIfLoading : btnText}`} className=' textwh bg-blue-600 border-none rounded-lg text-center cursor-pointer px-10 py-3 ' />
  )
}

export default Button