import { useState, useEffect, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfigDark from '../config/particlesConfigDark'
import particlesConfigDarkSmallScreens from '../config/particlesConfigDarkSmallScreens'


const ParticlesBackgroundDark = () => {
  const [options, setOptions] = useState(particlesConfigDark)

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setOptions(particlesConfigDarkSmallScreens)
      } else {
        setOptions(particlesConfigDark)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() 

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={options} />
}
export default ParticlesBackgroundDark
