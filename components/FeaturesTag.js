import Link from 'next/link';
import React from 'react'

let Links = [
    { name: "Explain Code", link: "/explain-code", id: 1, bg:"bg-red-500"},
    { name: "Refactor Code", link: "/refactor-code", id: 2, bg:"bg-yellow-500"},
    { name: "Optimise code", link: "/optimise-code", id: 3, bg:"bg-green-500"},
    { name: "Fix bugs", link: "/fix-bug", id: 4,bg:"bg-gray-500" },
    { name: "Convert Language", link: "/convert-language", id: 5, bg:"bg-blue-500"},
    { name: "Find bug", link: "/why-code-is-not-working", id: 6,bg:"bg-purple-500" },
    { name: "Add comments",link: "/", id: 7,bg:"bg-violet-500" },
];

const FeaturesTag = () => {

    return (
        <div className={"w-full  max-w-5xl mx-auto p-2   mt-2 "}>
            <ul className="flex items-center justify-center  flex-wrap">
                {Links.map((link) => (
                    <li
                        key={link.id}
                        className={` group whitespace-nowrap  text-left py-1.5 px-4 rounded-full transition-all ease-in duration-100 cursor-pointer text-sm m-1 ${link.bg} `}
                    >
                        <Link href={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturesTag