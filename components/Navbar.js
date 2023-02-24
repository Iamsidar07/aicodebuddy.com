import React, {  useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  let Links = [
    { name: "Explain Code", link: "/explain-code", id: 2 },
    { name: "Refactor Code", link: "refactor-code", id: 3 },
    { name: "Fix bugs", link: "/fix-bug", id: 4, },
    { name: "Convert Language", link: "/convert-language", id: 5, },
    { name: "Code is not working ?", link: "/why-code-is-not-working", id: 6, },
  ];
  const [open, setOpen] = useState(false);


  return (
    <nav className={` bg-black shadow-sm sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20]  `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center justify-between  ">
          <div className="z-[50] py-4 px-3 ">

            <Link href={"/"} >
              <div className="flex items-center">              
                <Image
                src={"/robot.png"}
                width={30}
                height={30}
                alt="menu"
              />
                <span>aicodebuddy.com</span></div>
            </Link>

            <div
              onClick={() => setOpen(!open)}
              className="  absolute right-2 top-3 cursor-pointer md:hidden"
            >
              <Image
                src={"/menu.jpg"}
                width={20}
                height={20}
                alt="menu"
              />

            </div>
          </div>

          <ul
            className={` md:h-fit flex flex-col items-center space-x-1 md:flex-row  border-gray-100  md:border-none  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] right-0 w-[80%] md:w-auto md:pl-0 p-2 text-center transition-all duration-250 ease-in ${open ? " top-12 bg-black  h-[95vh] " : "top-[-76vh] "
              }`}
          >
            {Links.map((link) => (
              <li
                key={link.id}
                className={` group whitespace-nowrap  md:my-0 text-left p-3 md:hover:text-[#0082FF]  rounded-full transition-all ease-in duration-100 cursor-pointer `}
              >

                <Link href={link.link}>
                  {link.name}
                </Link>

                <small className="hidden pl-1 md:inline-block opacity-0 md:group-hover:opacity-100 md:group-hover:animate-bounce">
                  {link.icon}
                </small>
              </li>
            ))}

            <Link href="https://instagram.com/iamsidar07" target={"_blank"}>
              <button className="px-5  rounded-full py-2   border-none shadow-lg  bg-blue-600 text-white md:hover:bg-[#0084ffd6]  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider ">
                follow              </button>
            </Link>
          </ul>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
