import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className={` bg-[#0D1117] sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20] bg-opacity-95`}>
      <div className="max-w-7xl mx-auto p-2">
        <div className="flex  items-center justify-between px-1 ">

          <div className="z-[50] py-4 px-1 ">

            <Link href={"/"} >
              <div className="flex items-center">
                <Image
                  src={"/logo.png"}
                  width={50}
                  height={50}
                  alt="logo"
                />
                <span className="font-bold">AiCodeBuddy.com</span></div>
            </Link>


          </div>
          <div className="flex gap-1">
            <Link href="https://instagram.com/iamsidar07" target={"_blank"}>
              <div className="gradient rounded-lg p-1">
                <Image
                  src={"/Instagram-1.png"}
                  width={35}
                  height={35}
                  alt="logo"
                  className="object-contain w-full h-auto"
                />

              </div>
            </Link>
            <Link href="https://twitter.com/iamsidar07" target={"_blank"}>
              <div className="gradient rounded-lg p-1">
                <Image
                  src={"/Twitter-1.png"}
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
