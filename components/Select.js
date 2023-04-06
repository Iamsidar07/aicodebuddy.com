import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
const languages = ["Python", "JavaScript", "C", "C++", "Java", "TypeScript", "Swift", "Dart", "Go", "Kotlin", "Ruby", "PHP"];

const Select = ({ language, setLanguage }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log({language,setLanguage})
    return (
        <>
            {/* <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="p-4 outline-none  bg-[#161b23] rounded-lg">
                {
                    languages.map((lang, i) => <option value={lang} key={i} >{lang}</option>)
                }
            </select> */}
            <div className='relative bg-[#161b23] z-10'>
                <div className='flex items-center justify-between space-x-2 px-4 py-6 ' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <p>{language.convertToLanguage || "Python"}</p>
                    <AiOutlineDown size={18} color="gray" />
                </div>
                {
                    isDropdownOpen && <div className='rounded-b-2xl space-y-2 absolute top-15 shadow overflow-x-hidden overflow-y-scroll gradient w-40 h-52'>
                        {
                            languages.map((item, i) => <p key={i} className='hover:bg-[#161b23] cursor-pointer text-left px-4 py-2' onClick={() => {
                                setLanguage({ ...language, convertToLanguage: item });
                                setIsDropdownOpen(false);
                            }}>{item}</p>)
                        }

                    </div>
                }
            </div>
        </>
    )
}

export default Select