import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import  {IoReorderThreeOutline}  from 'react-icons/io5';


const Navbar = () => {
  let Links = [
    // { name: "Explain Code", link: "/explain-code", id: 2 },
    // { name: "Refactor Code", link: "/refactor-code", id: 3 },
    // { name: "Opimise code", link: "/optimise-code", id: 7, },
    // { name: "Fix bugs", link: "/fix-bug", id: 4, },
    // { name: "Convert Language", link: "/convert-language", id: 5, },
    // { name: "Find bug", link: "/why-code-is-not-working", id: 6, },
  ];
  const [open, setOpen] = useState(false);

  const path=useRouter();



  return (
    <nav className={` bg-[#121212] sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20] border-b-[1px] border-b-[#2b2a2a] shadow-lg`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center justify-between px-1 ">

          <div className="z-[50] py-4 px-1 ">

            <Link href={"/"} >
              <div className="flex items-center">
                <Image
                  src={"/robot.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
                
                <span>AiCodeBuddy.com</span></div>
            </Link>

            
          </div>
          <Link href="https://instagram.com/iamsidar07" target={"_blank"}>
            <button className=" px-7 sm:px-12  my-2 rounded-full py-3   border-none shadow-lg  bg-blue-600 text-white md:hover:bg-[#0084ffd6]  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider ">
              follow</button>
          </Link>

        </div>
      </div>


    </nav>
  );
};

export default Navbar;
