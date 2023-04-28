import { Link } from 'react-scroll'
import {FaArrowUp} from 'react-icons/fa'
import { useState, useEffect } from 'react'

 const ScrollTop = () => {
  const [up, setUp] = useState()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setUp(true) : setUp(false)
    })
  }, [])

  return (
    <>
      {up && (
        <div className='hidden sm:block fixed bottom-10 right-10 text-lg bg-transparent border-none cursor-pointer text-black hover:text-violet-600 dark:text-white z-20 dark:hover:text-violet-600'>
          <Link to='home' smooth={true} duration={500}>
            <FaArrowUp size={30} />
          </Link>
        </div>
      )}
    </>
  )
}

export default ScrollTop