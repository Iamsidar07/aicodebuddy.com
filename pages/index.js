import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';
import FeaturesTag from '../components/FeaturesTag';
import SvgBg from '../components/SvgBg';

export default function Home() {

  return (
    <div className="p-3 md:px-8">
      <main className="h-full py-4 flex flex-1 flex-col justify-center items-center ">
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center  '>
          <Fade left>
            <div className='max-w-xl'>
              <h1 className="text-5xl md:text-7xl  mt-4 md:mt-16 font-bold">
                Revamp Your <span className='text-gradient'>Coding Skills</span> <br /> with us
              </h1>
              <p className="mt-5  text-[#D0DFFF] max-w-lg">
                Upgrade your coding skills with our aicodebuddy.com Our platform enables you to comment on code, fix bugs, convert to multiple languages, and refactor existing code.
              </p>
              <FeaturesTag />
              <Link href={"/explain-code"}>
                <p className=' text-white btn border-none rounded-full text-center cursor-pointer px-8 py-4 max-w-[200px] my-4'>Explain Code</p>
              </Link>
            </div>
          </Fade>
          <div>
            <Fade right>
              <Image
                src={"/herobg.webp"}
                alt="herobg"
                className='w-full h-full object-contain'
                width={1920}
                height={1080}

              />
            </Fade>
          </div>

        </div>
        <SvgBg />
        <Features />
      </main>
    </div>
  )
}
