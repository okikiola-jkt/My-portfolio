import React from 'react'
import Portfolio from '../assets/portfolio.png'
import Wip from '../assets/wip.png'

const work = () => {
  return (
    <div name = 'projects' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 sm:mt-[10rem]'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#DFAF67]'>Projects</p>
            <p className='py-8'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 

            <div style={{backgroundImage: `url(${Portfolio})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text 2xl font-bold text-white tracking-wider'>
                        My Portfolio
                    </span>
                    <div className='pt-8 text-center content-div hover:bg-gradient-to-r from-[rgba(112, 157, 255, 0.8)] to-[hsla(242, 74%, 61%, 0.8)]'>
                        <a target='_blank' href="https://www.okikiola.dev">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a target='_blank' href="https://github.com/okikiola-jkt/My-portfolio">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Wip})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text 2xl font-bold text-white tracking-wider'>
                        Coming soon
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div><div style={{backgroundImage: `url(${Wip})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text 2xl font-bold text-white tracking-wider'>
                        Coming soon
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div><div style={{backgroundImage: `url(${Wip})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text 2xl font-bold text-white tracking-wider'>
                        Coming soon
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div><div style={{backgroundImage: `url(${Wip})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text 2xl font-bold text-white tracking-wider'>
                        Coming soon
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div><div style={{backgroundImage: `url(${Wip})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text 2xl font-bold text-white tracking-wider'>
                        Coming soon
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default work
