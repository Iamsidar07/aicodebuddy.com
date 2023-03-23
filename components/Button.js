import React from 'react'

const Button = ({ btnText, btnTextIfLoading = "loading", loading }) => {
  return (
    <input type="submit" value={`${loading ? btnTextIfLoading : btnText}`} className=' text-white btn border-none rounded-lg text-center cursor-pointer px-10 py-4 font-semibold' />
  )
}

export default Button