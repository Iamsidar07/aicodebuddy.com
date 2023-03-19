import React from 'react'
import Fade from 'react-reveal/Fade';
import FeaturesTag from './FeaturesTag';

const Intro = ({ tagline = "Add comments into your code." }) => {
    return (
        <Fade bottom>
        <div className='max-w-7xl mx-auto'>
                <h1 className=" text-gradient text-3xl md:text-7xl text-center mt-10 md:mt-16 font-extrabold">
                    Revamp Your Coding Skills with Aicodebuddy
            </h1>
                <p className="text-center mt-5 text-lg md:text-3xl text-[#D0DFFF]">
                {tagline.toLocaleLowerCase()}
            </p>
            <FeaturesTag/>
                
        </div>
        </Fade>
    )
}

export default Intro
