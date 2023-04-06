import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';

export default function Home() {

  return (
    <div className="p-3 md:px-8">
      <main className="h-full py-4 flex flex-1 flex-col justify-center items-center max-w-7xl mx-auto">
        <Fade bottom>
          <div className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
            <h1 className="text-6xl  mt-4  font-bold text-white capitalize text-center">
              Revamp Your <span className='text-gradient'>{`{coding}`}</span> Skill.
            </h1>
            <p className="mt-5 text-lg text-[#D0DFFF] max-w-4xl text-center capitalize font-semibold">
              Upgrade your coding skills with our aicodebuddy.com. Our platform enables you<span className='orangegradient'> To comment on code, fix bugs, convert to multiple languages, and refactor existing code</span>.
            </p>
            <Link href={"/explore"}>
              <p className=' text-white btn border-none rounded-full text-center cursor-pointer px-8 py-4 max-w-[400px] my-8 font-semibold hover:bg-blue-600 transition-colors duration-200 ease-in'>Start Exploring Now </p>
            </Link>

          </div>
        </Fade>

        <Image
          src={"/texture_bg.png"}
          width={1920}
          height={720}
          alt="texture_bg"
          quality={100}
          className='bg-cover absolute top-0 w-full z-[-1] '
        />
        <Features />
        <div className=" ">
          <h2 className="text-white text-center text-4xl font-bold my-8">
            Follow @
          </h2>
          <div className="flex flex-row items-center justify-center gap-5">
            <Link href={"https://www.twitter.com/iamsidar07"} target="_blank" className="p-2 rounded-full bg-[#161b22] hover:animate-bounce">
              <Image
                src={"/Twitter-1.png"}
                width={100}
                height={100}
                alt="twitter"
              />

            </Link>
            <Link href={"https://www.instagram.com/iamsidar07"} target="_blank" className="p-2 rounded-full bg-[#161b22] hover:animate-bounce">
              <Image
                src={"/Instagram-1.png"}
                width={100}
                height={100}
                alt="insta"
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/manoj-kumar-72aa54222/"} target="_blank" className="p-2 rounded-full bg-[#161b22] hover:animate-bounce">
              <Image
                src={"/LinkedIn.png"}
                width={100}
                height={100}
                alt="linkedin"
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/manoj-kumar-72aa54222/"} target="_blank" className="p-2 rounded-full bg-[#161b22] hover:animate-bounce">
              <Image
                src={"/Discord.png"}
                width={100}
                height={100}
                alt="Discord"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
