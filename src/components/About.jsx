import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#DFAF67]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div className='sm:first-line:text-right text-4xl font-bold'>
            <p>Hi. i am Okiki, welcome to my page. Please take a look around</p>
          </div>
          <div>
            <p>
            My unwavering passion lies in crafting exceptional user-interactive software solutions that elevate efficiency. 
            I specialize in developing software catering to a diverse clientele, spanning individuals, small businesses, and large enterprises. 
            Bolstered by my five years project management experience, I grasp client requirements and seamlessly transform them into functional solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
