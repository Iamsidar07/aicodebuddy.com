import React from 'react'

const Select = ({language,setLanguage}) => {
    const languages = ["Python", "JavaScript", "C", "C++", "Java", "TypeScript", "Swift", "Dart", "Go", "Kotlin", "Ruby", "PHP"];
  return (
      <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="p-3 outline-none rounded-lg">
          {
              languages.map((lang, i) => <option value={lang} key={i} >{lang}</option>)
          }
      </select>
  )
}

export default Select