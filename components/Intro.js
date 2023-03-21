import React from 'react'
import Fade from 'react-reveal/Fade';
import FeaturesTag from './FeaturesTag';

const Intro = ({ tagline }) => {
    return (
        <Fade bottom>
            <div className='max-w-7xl mx-auto flex items-center justify-center flex-col'>
                <h1 className="text-gradient text-4xl md:text-6xl text-center  mt-4 md:mt-10 mb-4 font-bold">
                    {tagline}
                </h1>
                <FeaturesTag />

            </div>
        </Fade>
    )
}

export default Intro
