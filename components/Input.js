import React from 'react'

const Input = ({value,setValueHook}) => {
  return (
      <input
          type="text"
          name="code"
          placeholder="Paste your code here..."
          value={value.code}
          onChange={(e) => setValueHook({...value,code:e.target.value})}
      className="text-base leading-6 px-4  py-6 flex-1 rounded-xl sm:rounded-r-none  outline-none bg-[#1c162b] text-[#8e8b95]"
      />
  )
}

export default Input