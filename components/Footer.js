import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} border-t-[1px] border-t-[#181b21] ` }>
      <div className='w-full h-fit flex flex-col sm:flex-row items-center justify-center space-y-2 md:space-y-0  '>
        <div className='flex items-center flex-col  md:flex-row space-y-2 md:space-x-2 md:space-y-0 px-5 '>
          <Link href={"/privacy-policy"}>
            <p className='text-sm'>privacy and policy</p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-sm">contact</p>
          </Link>
          <p className="text-sm">All Rights Reserved &#169; {new Date().getFullYear()} </p>
        </div>

        <div className="flex items-center space-x-1">
          <span className='text-sm'>powered by</span>
          <Image
            src={"/logo.png"}
            width={30}
            height={20}
            alt="logo"
          />
          <span className='text-sm'>aicodebuddy.com</span></div>

      </div>
    </footer>
  )
}

export default Footer