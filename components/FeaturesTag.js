import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

let Links = [
    { name: "Explain Code", link: "/explain-code", id: 1, bg:"bg-red-600"},
    { name: "Refactor your Code", link: "/refactor-code", id: 2, bg:"bg-yellow-500"},
    { name: "Optimise your code", link: "/optimise-code", id: 3, bg:"bg-green-500"},
    { name: "Fix bugs", link: "/fix-bug", id: 4,bg:"bg-sky-500" },
    { name: "Convert to multiple Language", link: "/convert-language", id: 5, bg:"bg-blue-500"},
    { name: "Find bug", link: "/why-code-is-not-working", id: 6,bg:"bg-purple-500" },
    { name: "Add comments in your code",link: "/add-comments", id: 7,bg:"bg-violet-500" },
];


const FeaturesTag = () => {
    const router=useRouter();


    return (
        <div className={"w-full  max-w-7xl mx-auto p-1 mt-2 "}>
            <ul className="flex items-center justify-center  flex-wrap">
                {Links.map((link) => (
                    <li
                        key={link.id}
                        className={` group whitespace-nowrap  text-left py-2.5 px-4 rounded-lg transition-all ease-in duration-100 cursor-pointer text-xs sm:text-sm my-1 mr-1 font-semibold  ${router.pathname === link.link ? link.bg :"gradient"}`}
                    >
                        <Link href={link.link}>
                            #{link.name.toLowerCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturesTag
