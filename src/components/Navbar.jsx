import React, {useState}from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  return (
    <div className= 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '135px'}}/>
      </div>
        <ul className='hidden md:flex'>
          <li className='hover:scale-110 duration-500'>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className='hover:scale-110 duration-500'>
            <Link to="about">
                About
            </Link>
          </li>
          <li className='hover:scale-110 duration-500'>
          <Link to="skills">
                Skills
          </Link>
          </li>
          <li className='hover:scale-110 duration-500'>
            <Link to="projects">
              Projects
            </Link>
          </li>
          <li className='hover:scale-110 duration-500'>
          <Link to="contact">
              Contact Me
          </Link>
          </li>
        </ul>
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '135px'}}/>
      </div>
          <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="/">
              Home
            </Link></li>
          <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="about">
                About
            </Link></li>
          <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="skills">
                Skills
          </Link></li>
          <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="projects">
              Projects
            </Link></li>
          <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="contact">
              Contact Me
          </Link></li>
        </ul>
        
         {/* Social media Icons */}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                  <a className='flex justify-between items-center w-full text-gray-300'
                  href="https://www.linkedin.com/in/okikiojikutu/" target='_blank'>
                    Linkedin <FaLinkedin size={30}/>
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                  <a className='flex justify-between items-center w-full text-gray-300'
                  href="https://github.com/okikiola-jkt" target='_blank'>
                    Github <FaGithub size={30}/>
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ffff]'>
                  <a className='flex justify-between items-center w-full text-gray-900'
                  href="/contact">
                    Mail <HiOutlineMail size={30}/>
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                  <a className='flex justify-between items-center w-full text-gray-300'
                  href="/">
                    Resume <BsFillPersonLinesFill size={30}/>
                  </a>
                </li>
                
              </ul>
         </div>
    </div>
  )
}

export default Navbar
