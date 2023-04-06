import React from 'react'

const Button = ({ btnText, btnTextIfLoading = "loading", loading }) => {
  return (
    <button type="submit" className=' text-white btn border-none rounded sm:rounded-full sm:rounded-l-none text-center cursor-pointer px-10 py-4 font-semibold hover:bg-blue-600'>{loading ? btnTextIfLoading : btnText}</button>
  )
}

export default Button