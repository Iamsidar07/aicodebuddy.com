import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='w-full flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0'>
        <div className='flex items-center flex-col  md:flex-row space-y-2 md:space-x-2 md:space-y-0 px-5 '>
          <Link href={"/privacy-policy"}>
            <p className='text-xs'>privacy and policy</p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-xs">contact</p>
          </Link>
          <p className="text-xs">All Rights Reserved &#169; {new Date().getFullYear()} </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className='text-xs'>powered by</span>
          <Image
            src={"/robot.png"}
            width={20}
            height={20}
            alt="menu"
          />
          <span className='text-xs'>aicodebuddy.com</span></div>

      </div>
    </footer>
  )
}

export default Footer