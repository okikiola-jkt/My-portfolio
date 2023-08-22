import React, {useState} from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import work from "./work";
import {Link} from 'react-scroll'

const Home = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#DFAF67] text-2xl'>Hey there! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Okiki Ojikutu</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Transforming Ideas into Intuitive Web Experiences: Front-End Developer with a Flair for Innovation
                </p>

                <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DFAF67] hover:border-[#DFAF67]'>
                    <Link onClick={handleClick} to="projects">
                        Projects
                    </Link>
                    <span href={{work}} className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className="ml-3" /> 
                    </span>
                </button>
                </div>
              

            </div>

        </div>
    )
}

export default Home