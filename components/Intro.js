import React from 'react'
import Fade from 'react-reveal/Fade';
import FeaturesTag from './FeaturesTag';

const Intro = ({ tagline = "Add comments into your code." }) => {
    return (
        <Fade bottom>
        <div>
            <h1 className="text-5xl md:text-7xl text-center mt-10 md:mt-16 font-extrabold">
                    Welcome to <span className='text-gradient'>AiCodeBuddy.com</span>
            </h1>
                <p className="text-center mt-5 text-lg md:text-3xl text-[#D0DFFF]">
                {tagline}
            </p>
            <FeaturesTag/>
                
        </div>
        </Fade>
    )
}

export default Intro
