import project1 from '../../public/project-images/therafit.png'
import project2Light from '../../public/project-images/portfolio-light.png'
import project2Dark from '../../public/project-images/portfolio-dark.png'
import project3 from '../../public/project-images/quizzle.png'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <section name='projects'>
      <h2 className='title'>Projects</h2>
      <div className='container'>
        <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl flex flex-col justify-center items-center gap-10 md:gap-20'>
          {/* Project 1 */}
          <div className='project-card flex justify-center items-center flex-col w-full lg:flex-row lg:h-[500px] transition-shadow duration-300 cursor-pointer bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl rounded-lg shadow-2xl hover:shadow-2xl hover:shadow-black dark:hover:shadow-white'>
            <div className='image-container flex justify-center items-center w-full lg:h-full lg:w-2/3 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none'>
              <img
                className='rounded-t-lg lg:rounded-l-lg lg:rounded-r-none h-full w-full object-cover lg:border-r border-grey-100 dark:border dark:border-cyan-500'
                src={project1}
              ></img>
            </div>

            <div className='card-text lg:h-full lg:w-1/3 dark:text-gray-200 dark:bg-dark-main flex flex-col w-full justify-around items-center gap-6 sm:gap-12 lg:gap-8 py-8 sm:py-12 px-8 sm:px-14 md:px-6 rounded-b-lg lg:rounded-l-none lg:rounded-r-lg dark:border dark:border-cyan-500'>
              <h3 className='text-3xl md:text-4xl font-bold mb-2'>TheraFit</h3>
              <div className='w-full flex justify-center items-center flex-wrap gap-4'>
                <SiHtml5 size={30} className='hover:scale-125 duration-300 text-[#E44D26]' />
                <SiCss3 size={30} className='hover:scale-125 duration-300 text-[#1572B6]' />
                <SiJavascript size={30} className='hover:scale-125 duration-300 text-[#F7DF1E]' />
                <SiReact size={30} className='hover:scale-125 duration-300 text-[#61DAFB]' />
                <SiNodedotjs size={30} className='hover:scale-125 duration-300 text-[#68A063]' />
                <SiExpress size={30} className='hover:scale-125 duration-300 text-[#000000 ]' />
                <SiMongodb size={30} className='hover:scale-125 duration-300 text-[#4DB33D]' />
              </div>
              <p className='w-full text-sm sm:text-lg'>A customizable web app that allows users to create and track their workouts and exercises.</p>

              <div className='buttons-container w-full flex justify-center items-center gap-8 flex-wrap'>
                <a href='https://github.com/Alkxs/TheraFit' target='_blank'>
                  <button className=' text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-cyan-500 border px-2 sm:px-3 md:px-5 xl:px-8 py-1 sm:py-2 xl:py-3 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                    Code
                  </button>
                </a>
                <a href='https://demo.com/' target='_blank'>
                  <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-cyan-500 border px-3 sm:px-4 md:px-6 xl:px-9 py-1 sm:py-2 xl:py-3 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className='project-card flex justify-center items-center flex-col w-full lg:flex-row lg:h-[500px] transition-shadow duration-300 cursor-pointer bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl rounded-lg shadow-2xl hover:shadow-2xl hover:shadow-black dark:hover:shadow-white'>
            <div className='image-container flex justify-center items-center w-full lg:h-full lg:w-2/3 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none'>
              <img
                className='rounded-t-lg lg:rounded-l-lg lg:rounded-r-none h-full w-full object-cover lg:object-fill lg:border-r border-grey-100 dark:border dark:border-cyan-500'
                src={theme === 'dark' ? project2Light : project2Dark}
              ></img>
            </div>

            <div className='card-text lg:h-full lg:w-1/3 dark:text-gray-200 dark:bg-dark-main flex flex-col w-full justify-around items-center gap-6 sm:gap-12 lg:gap-8 py-8 sm:py-12 px-8 sm:px-14 md:px-6 rounded-b-lg lg:rounded-l-none lg:rounded-r-lg dark:border dark:border-cyan-500'>
              <h3 className='text-3xl md:text-4xl font-bold mb-2'> Portfolio</h3>
              <div className='w-full flex justify-center items-center flex-wrap gap-4'>
                <SiHtml5 size={30} className='hover:scale-125 duration-300 text-[#E44D26]' />
                <SiCss3 size={30} className='hover:scale-125 duration-300 text-[#1572B6]' />
                <SiTailwindcss size={30} className='hover:scale-125 duration-300 text-[#06B6D4]' />
                <SiJavascript size={30} className='hover:scale-125 duration-300 text-[#F7DF1E]' />
                <SiReact size={30} className='hover:scale-125 duration-300 text-[#61DAFB]' />
              </div>
              <p className='w-full text-sm sm:text-lg'>My portfolio project built from scratch using the latest technologies and modern libraries.</p>

              <div className='buttons-container w-full flex justify-center items-center gap-8 flex-wrap'>
                <a href='https://github.com/Alkxs/Portfolio-projects/tree/main/portfolio' target='_blank'>
                  <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-cyan-500 border px-2 sm:px-3 md:px-5 xl:px-8 py-1 sm:py-2 xl:py-3 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                    Code
                  </button>
                </a>

                <a href='https://demo.com/' target='_blank'>
                  <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-cyan-500 border px-3 sm:px-4 md:px-6 xl:px-9 py-1 sm:py-2 xl:py-3 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className='project-card flex justify-center items-center flex-col w-full lg:flex-row lg:h-[500px] transition-shadow duration-300 cursor-pointer bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl rounded-lg shadow-2xl hover:shadow-2xl hover:shadow-black dark:hover:shadow-white'>
            <div className='image-container flex justify-center items-center w-full lg:h-full lg:w-2/3 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none'>
              <img
                className='rounded-t-lg lg:rounded-l-lg lg:rounded-r-none h-full w-full object-cover lg:border-r border-grey-100 dark:border dark:border-cyan-500'
                src={project3}
              ></img>
            </div>

            <div className='card-text lg:h-full lg:w-1/3 dark:text-gray-200 dark:bg-dark-main flex flex-col w-full justify-around items-center gap-6 sm:gap-12 lg:gap-8 py-8 sm:py-12 px-8 sm:px-14 md:px-6 rounded-b-lg lg:rounded-l-none lg:rounded-r-lg dark:border dark:border-cyan-500'>
              <h3 className='text-3xl md:text-4xl font-bold mb-2'>Quizzle</h3>
              <div className='w-full flex justify-center items-center flex-wrap gap-4'>
                <SiHtml5 size={30} className='hover:scale-125 duration-300 text-[#E44D26]' />
                <SiCss3 size={30} className='hover:scale-125 duration-300 text-[#1572B6]' />
                <SiJavascript size={30} className='hover:scale-125 duration-300 text-[#F7DF1E]' />
                <SiReact size={30} className='hover:scale-125 duration-300 text-[#61DAFB]' />
              </div>
              <p className='w-full text-sm sm:text-lg'>An engaging quiz app offering a personalized knowledge-testing challenge</p>

              <div className='buttons-container w-full flex justify-center items-center gap-8'>
                <a href='https://github.com/Alkxs/TheraFit' target='_blank'>
                  <button className=' text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-cyan-500 border px-2 sm:px-3 md:px-5 xl:px-8 py-1 sm:py-2 xl:py-3 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                    Code
                  </button>
                </a>
                <a href='https://demo.com/' target='_blank'>
                  <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-cyan-500 border px-3 sm:px-4 md:px-6 xl:px-9 py-1 sm:py-2 xl:py-3 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <button className='text-[#0a192f] dark:bg-dark-main dark:text-white border border-[#0a192f] hover:border-cyan-500 dark:border dark:border-cyan-500 hover:text-white hover:bg-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 duration- md:px-53xl px-6 lg:px-8 py-3 xl:py-3 mt-4 :mt-10 mx-auto flex items-center rounded-md'>
              See all projects
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Projects