import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';

export default function Home() {

  return (
    <div className="p-3 md:px-8">
      <main className=" py-4 flex flex-1 flex-col justify-center items-center max-w-7xl mx-auto">
        <div className="h-[80vh] flex flex-col items-center justify-center mb-12">
          <Fade bottom>
            <div className=' max-w-7xl mx-auto flex flex-col items-center justify-center'>
              <h1 className="text-6xl sm:text-8xl  mt-4  font-bold text-white  text-center">
                Revamp your 
              </h1>
              <h1 className="text-6xl sm:text-8xl  mt-4  font-bold text-white  text-center">
                <span className='text-gradient'>{`{coding}`}</span> Skill
              </h1>
              <p className="mt-12 text-2xl text-[#D0DFFF] max-w-4xl text-center capitalize">
                comments, fixes bugs, explains codes, refractor code
              </p>
              <Link href={"/explore"}>
                <p className=' text-white btn border-none rounded-full text-center cursor-pointer px-12 py-6 max-w-[400px] mt-9  hover:-rotate-2 transition-colors duration-200 ease-in'>Start Exploring Now </p>
              </Link>

            </div>
          </Fade>

        </div>
          <Image
            src={"/texture_bg.png"}
            width={1920}
            height={720}
            alt="texture_bg"
            quality={100}
            className='bg-cover absolute top-12 w-full z-[-1] '
          />
        <Features />
        
      </main>
    </div>
  )
}
