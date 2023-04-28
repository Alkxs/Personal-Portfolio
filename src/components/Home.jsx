
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'


const Home = () => {
  

  return (
    <>
      <section name='home' className='h-screen'>

        <div className='container mt-10'>
            <p className='text-cyan-500 text-2xl tracking-wide font-semibold'>Hey, I am </p>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold tracking-widest text-[#0a192f] dark:text-white z-0'>Alex Lauri</h1>
          <h2 className='text-2xl sm:text-3xl font-normal text-gray-500 dark:text-gray-300'>
            <Typewriter
              options={{
                strings: ['Web Developer', 'Front-End Developer', 'Full-stack Developer'],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </h2>
          <div>
            <Link to='projects' smooth={true} duration={500}>
              <button className='text-[#0a192f] dark:text-white group border-[#0a192f] dark:border-white border px-4 sm:px-6 py-3 my-2 text-sm sm:text-md flex items-center hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-4' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
