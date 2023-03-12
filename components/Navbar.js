import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Navbar = () => {
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
          <div className="flex gap-1">
            <Link href="https://instagram.com/iamsidar07" target={"_blank"}>

              <AiOutlineInstagram size={24} color="white" />
            </Link>
            <Link href="https://twitter.com/iamsidar07" target={"_blank"}>

              <AiOutlineTwitter size={24} color="white" />
            </Link>

          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
