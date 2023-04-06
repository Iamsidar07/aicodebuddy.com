import React from 'react'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import Fade from 'react-reveal/Fade';
const Form = ({ value, onSubmit, setValueHook, btnText, btnTextIfLoading = "loading...", name, loading, isSelectInput = false, language, setLanguage }) => {
console.log({isSelectInput})
  return (
    <>
      <Fade bottom>
        <form onSubmit={onSubmit} className="w-full  flex flex-col  md:flex-row max-w-4xl mx-auto space-y-4 md:space-y-0 mt-5">
              <Input value={value} setValueHook={setValueHook} />
              {
                isSelectInput && <Select language={language} setLanguage={setLanguage} />
              }
          <Button btnText={btnText} btnTextIfLoading={btnTextIfLoading} loading={loading} />
        </form>
      </Fade>
    </>
  )
}

export default Form