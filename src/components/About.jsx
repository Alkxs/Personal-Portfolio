import profile from '../assets/profile.png'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  return (
    <section name='about' className='pt-32'>
      <h2 className='title'>About</h2>
      <div className='container'>
        <div className='about-card bg-white w-full flex flex-col lg:flex-row justify-center items-center py-6 pb-8 sm:py-8 md:py-10 gap-10 lg:gap-10 xl:gap-0 lg:p-10 xl:py-16 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-6xl border rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black dark:border-cyan-500 dark:bg-dark-main dark:hover:shadow-white  '>
          <div className='flex justify-center items-center w-full px-6 lg:px-0 md:px-10 lg:w-2/5'>
            <img className='rounded-lg h-full w-full' src={profile}></img>
          </div>
          <div className='w-full lg:w-3/5 dark:text-gray-200 flex flex-col justify-start items-center text-xs sm:text-sm md:text-lg xl:text-md px-8 sm:px-12 lg:px-0 xl:pl-10 gap-4 sm:gap-6 lg:gap-3 xl:gap-2'>
            <div className='w-full text-left flex justify-start'>
              <div>👋</div>
              <div className='pl-4 font-normal'>Hi! I am Alex, a Full Stack Web Developer from Italy </div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🌐</div>
              <div className='pl-4 font-normal'>Proficient in the MERN stack, with a focus on Front End Development</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>👨‍💻</div>
              <div className='pl-4 font-normal'>Passionate about technologies and keeping up with industry trends</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🖥️</div>
              <div className='pl-4 font-normal'>Proudly designed and developed my own portfolio from scratch</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🌍</div>
              <div className='pl-4 font-normal'>Skilled at working with diverse teams in multicultural environments</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>💡</div>
              <div className='pl-4 font-normal'>Excited to bring creative solutions to your web development needs</div>
            </div>
          </div>

          <div className='flex md:hidden justify-center items-center'>
            <a href='../../pdfs/Alex Lauri CV.pdf' target='_blank'>
              <button className='text-[#0a192f] text-xs dark:bg-dark-main dark:text-white border border-[#0a192f] hover:border-cyan-500 dark:border dark:border-cyan-500 hover:text-white hover:bg-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 px-6 lg:px-8 py-3 mt-4 :mt-10 mx-auto flex items-center justify-around gap-2 rounded-md'>
                <div>Download CV</div>
                <div>
                  <FiDownload />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
