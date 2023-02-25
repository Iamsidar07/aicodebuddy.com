import React from 'react'
import Button from './Button'
import Input from './Input'
import Select from './Select'

const Form = ({value,onSubmit,setValueHook,btnText,btnTextIfLoading="loading...",name,loading,isSelectInput=false,language,setLanguage}) => {
  return (
      <form onSubmit={onSubmit} className="w-full text-center flex flex-col  md:flex-row max-w-4xl mx-auto space-y-4 md:space-x-2 md:space-y-0 my-14 ">    
          <Input value={value} setValueHook={setValueHook}/>
          {
            isSelectInput && <Select language={language} setLanguage={setLanguage}/>
          }
          <Button btnText={btnText} btnTextIfLoading={btnTextIfLoading} loading={loading}/>
      </form>
  )
}

export default Form