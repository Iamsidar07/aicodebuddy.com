import React from 'react'
import Fade from 'react-reveal/Fade';
import FeaturesTag from './FeaturesTag';

const Intro = ({ tagline = "Add comments into your code." }) => {
    return (
        <Fade bottom>
        <div>
            <h1 className="text-4xl md:text-6xl text-center mt-10 md:mt-16 font-bold">
                Welcome to <span className='text-blue-600'>aiCodeBuddy.com</span>
            </h1>
            <p className="text-center mt-5 text-2xl md:text-3xl">
                {tagline}
            </p>
            <FeaturesTag/>
                
        </div>
        </Fade>
    )
}

export default Intro