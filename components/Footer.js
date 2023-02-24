import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-center space-x-2 px-5'>
          <Link href={"/privacy-policy"}>
            privacy and policy
          </Link>
          <Link href={"/contact"}>
            contact
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <span>powered by</span>
          <Image
            src={"/robot.png"}
            width={20}
            height={20}
            alt="menu"
          />
          <span>aicodebuddy.com</span></div>

      </div>
    </footer>
  )
}

export default Footer