import React from 'react'

const Intro = ({ tagline = "Add comments into your code." }) => {
    return (
        <div>
            <h1 className="text-4xl md:text-6xl text-center mt-10 md:mt-16 ">
                Welcome to <span className='text-blue-600'>aicodebuddy.com!</span>
            </h1>
            <p className="text-center mt-5 text-2xl md:text-3xl">
                {tagline}
            </p>
        </div>
    )
}

export default Intro