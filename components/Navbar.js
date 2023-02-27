import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import  {IoReorderThreeOutline}  from 'react-icons/io5';


const Navbar = () => {
  let Links = [
    { name: "Explain Code", link: "/explain-code", id: 2 },
    { name: "Refactor Code", link: "/refactor-code", id: 3 },
    { name: "Opimise code", link: "/optimise-code", id: 7, },
    { name: "Fix bugs", link: "/fix-bug", id: 4, },
    { name: "Convert Language", link: "/convert-language", id: 5, },
    { name: "Find bug", link: "/why-code-is-not-working", id: 6, },
  ];
  const [open, setOpen] = useState(false);

  const path=useRouter();



  return (
    <nav className={` bg-[#121212] shadow-sm sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20]   `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center justify-between  ">
          <div className="z-[50] py-4 px-3 ">

            <Link href={"/"} >
              <div className="flex items-center">
                <Image
                  src={"/robot.png"}
                  width={30}
                  height={30}
                  alt="logo"
                />
                
                <span className="text-lg md:text-2xl">aicodebuddy.com</span></div>
            </Link>

            <div
              onClick={() => setOpen(!open)}
              className="  absolute right-5 top-3 cursor-pointer md:hidden"
            >
              {/* <Image
                src={"/menu.jpg"}
                width={20}
                height={20}
                alt="menu"
              /> */}
              <IoReorderThreeOutline color={"white"} size={30}/>

            </div>
          </div>

          <ul
            className={` md:h-fit flex flex-col items-center space-x-1 md:flex-row  border-gray-100  md:border-none  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] right-0 w-[90%] pt-8 md:pt-0 md:w-auto md:pl-0 p-2 text-center transition-all duration-250 ease-in ${open ? " top-12 bg-[#121212]   h-[95vh] " : "top-[-76vh] "
              }`}
          >
            {Links.map((link) => (
              <li
                key={link.id}
                className={` group whitespace-nowrap  md:my-0 text-left p-3 md:hover:text-[#0082FF] ${path.asPath === link.link && "text-[#0082FF]"}  rounded-full transition-all ease-in duration-100 cursor-pointer `}
              >
                <Link href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}

            <Link href="https://instagram.com/iamsidar07" target={"_blank"}>
              <button className="px-12  rounded-full py-4   border-none shadow-lg  bg-blue-600 text-white md:hover:bg-[#0084ffd6]  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider ">
                follow</button>
            </Link>
          </ul>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
