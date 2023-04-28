import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaHome, FaRegUser, FaImage, FaClipboardList, FaRegEnvelope } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Switcher from './Switcher'


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)


  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  } 

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset
    setScrollPosition(currentScrollPosition)
  }
  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
const navBackground = scrollPosition > 600 ? 'bg-white dark:bg-[#0a192f]' : 'bg-transparent'

  return (
    <div className={`${navBackground} text-[#0a192f] dark:text-gray-200 fixed w-full py-8 flex items-center px-6 sm:px-12 md:px-20 justify-between z-50`}>
      <div>
        <h1 className=' font-[Birthstone] tracking-wide text-3xl sm:text-5xl font-light text-cyan-500'>{'<Alex Lauri />'}</h1>
      </div>
      {/* darkModeToggleIcon */}
      <div className='lg:fixed lg:top-1/2 lg:right-10 lg:transform lg:-translate-y-1/2'>
        <Switcher />
      </div>
      {/* Menu */}
      <ul className='hidden lg:flex'>
        <li className='hover:text-cyan-500 text-lg'>
          <Link to='home' smooth={true} duration={500} className='flex m-1'>
            <div className='flex justify-center items-center'>
              <FaHome size={20} className='mr-2' />
            </div>
            Home
          </Link>
        </li>
        <li className='hover:text-cyan-500 text-lg'>
          <Link to='about' smooth={true} duration={500} className='flex m-1'>
            <div className='flex justify-center items-center'>
              <FaRegUser size={20} className='mr-2' />
            </div>
            About
          </Link>
        </li>
        <li className='hover:text-cyan-500 text-lg'>
          <Link to='projects' smooth={true} duration={500} className='flex m-1'>
            <div className='flex justify-center items-center'>
              <FaImage size={20} className='mr-2' />
            </div>
            Projects
          </Link>
        </li>
        <li className='hover:text-cyan-500 text-lg'>
          <Link to='skills' smooth={true} duration={500} className='flex m-1'>
            <div className='flex justify-center items-center'>
              <FaClipboardList size={20} className='mr-2' />
            </div>
            Skills
          </Link>
        </li>
        <li className='hover:text-cyan-500 text-lg'>
          <Link to='contact' smooth={true} duration={500} className='flex m-1'>
            <div className='flex justify-center items-center'>
              <FaRegEnvelope size={20} className='mr-2' />
            </div>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className='lg:hidden cursor-pointer z-10' onClick={handleMobileMenuToggle}>
        {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          showMobileMenu
            ? 'mobile menu absolute top-0 left-0 w-full h-screen bg-white-200 bg-gray-400 dark:bg-dark-main flex flex-col justify-center items-center opacity-100'
            : 'hidden'
        }
      >
        <li className='py-6 text-4xl '>
          <Link className='text-[#0a192f] dark:text-gray-200' onClick={handleMobileMenuToggle} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link className='text-[#0a192f] dark:text-gray-200' onClick={handleMobileMenuToggle} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link className='text-[#0a192f] dark:text-gray-200' onClick={handleMobileMenuToggle} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link className='text-[#0a192f] dark:text-gray-200' onClick={handleMobileMenuToggle} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link className='text-[#0a192f] dark:text-gray-200' onClick={handleMobileMenuToggle} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-1/2 left-0 transform -translate-y-1/2'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:p-6 duration-300 bg-[#0A66C2] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-9 duration-300 bg-[#333333] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-9 duration-300 bg-[#00ACEE] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-10 duration-300 bg-[#DB4437] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-14 duration-300 bg-[#15c915aa] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
