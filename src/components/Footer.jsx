import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='bg-gray-200 dark:bg-[#112b52] dark:text-gray-200'>
      <div className='w-full h-full flex justify-around items-center gap-6 md:gap-0 py-6 md:py-10 flex-col-reverse md:flex-row'>
        <h3>&copy; {new Date().getFullYear()} Alex Lauri </h3>
        <div className='flex'>
          <a href='https://github.com/Alkxs' target='_blank' rel='noopener noreferrer' className='github px-2 sm:px-5 text-black dark:text-gray-200'>
            <FaGithub className='hover:text-[#333333]' size={30} />
          </a>
          <a href='https://www.linkedin.com/in/alexlauri/' target='_blank' rel='noopener noreferrer' className='linkedin px-2 sm:px-5 dark:text-gray-200'>
            <FaLinkedin className='hover:text-[#006599]' size={30} />
          </a>
          <a href='https://twitter.com/AlksLau' target='_blank' rel='noopener noreferrer' className='twitter px-2 sm:px-5 dark:text-gray-200'>
            <FaTwitter className='hover:text-[#2daae4]' size={30} />
          </a>
          <a href='mailto:alex.mav.80@gmail.com' target='_blank' rel='noopener noreferrer' className='gmail px-2 sm:px-5 dark:text-gray-200'>
            <FaEnvelope className='hover:text-[#f14436]' size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
