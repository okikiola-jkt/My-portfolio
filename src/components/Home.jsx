import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#DFAF67] text-2xl'>Hey there! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Okiki Ojikutu</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I excel in creating user-friendly and seamless web interfaces as a front-end developer, 
                    and I have a track record of bringing conceptual ideas to life through my development skills. 
                    When I am not working on web projects, I enjoy spending my free time playing golf.
                </p>
                <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DFAF67] hover:border-[#DFAF67]'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className="ml-3" /> 
                    </span>
                </button>
                </div>

            </div>

        </div>
    )
}

export default Home