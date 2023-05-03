import React from 'react'

let Links = [
    { name: "Explain Code", tagline:"Explain The Code Like A Kid.", link: "/explain-code", id: 1,},
    { name: "Refactor your Code",tagline:"Refactor your code within seconds.", link: "/refactor-code", id: 2, },
    { name: "Optimise your code",tagline:"Optimise your code instantly.", link: "/optimise-code", id: 3,},
    { name: "Fix bugs", link: "/fix-bug",tagline:"Fix bugs in your code in one click.", id: 4,},
    { name: "Convert to multiple Language",tagline:"Convert code to another language.", link: "/convert-language", id: 5,},
    { name: "Find bug", link: "/why-code-is-not-working",tagline:"Find bugs in your code.", id: 6,},
    { name: "Add comments in your code",tagline:"Add comments into your codebase.", link: "/add-comment", id: 7,},
];


const FeaturesTag = ({queryInfo,setQueryInfo}) => {
    return (
        <div className={"w-full  max-w-3xl mx-auto p-1 mt-2 "}>
            <ul className="flex items-center justify-center  flex-wrap">
                {Links.map((link) => (
                    <li
                        key={link.id}
                        onClick={() => setQueryInfo({...queryInfo,endpoint:link.link,tagline:link.tagline})}
                        className={` group whitespace-nowrap  text-left py-3.5 px-5 rounded-xl transition-all ease-in duration-100 cursor-pointer  my-1 mr-1  ${queryInfo.endpoint === link.link ? "featureTagBg" : "bg-[#3e394b]"}`}
                    >
                        {link.name.toLowerCase()}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturesTag
