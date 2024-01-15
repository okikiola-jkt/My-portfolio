import React, {useState} from "react";
import {Link} from 'react-scroll'

const Home = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div name='home' className='w-full h-screen bg-[#000000]'>

            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#DFAF67] text-2xl'>Hey there! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Okiki Ojikutu</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full-Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Transforming Ideas into Intuitive Web Experiences.
                </p>

                <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DFAF67] hover:border-[#DFAF67]'>
                    <Link onClick={handleClick} to="projects">
                        Projects
                    </Link>
                </button>
                </div>
              

            </div>

        </div>
    )
}

export default Home