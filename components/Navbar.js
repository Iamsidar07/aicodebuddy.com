import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={` bg-transparent backdrop-blur  transition-all duration-250 ease-in z-[20] bg-opacity-95 `}>
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex  items-center justify-between ">

          <div className="z-[50] py-1.5 px-1 ">

            <Link href={"/"} >
              <div className="flex items-center group ">
                <Image
                  src={"/logo.png"}
                  width={50}
                  height={50}
                  alt="logo"
                  className="group-hover:animate-bounce cursor-pointer"
                />
                <span className="font-bold">AiCodeBuddy.com</span></div>
            </Link>


          </div>
          <div className="flex gap-1">
            <Link href="https://github.com/iamsidar07" target={"_blank"}>
              <div className="btn rounded-full p-0.5">
                <Image
                  src={"/github.png"}
                  width={35}
                  height={35}
                  alt="logo"
                  className="object-contain w-full h-auto"
                />

              </div>
            </Link>
            

          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
