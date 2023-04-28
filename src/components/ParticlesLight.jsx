import { useState, useEffect, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfigLight from '../config/particlesConfigLight'
import particlesConfigLightSmallScreens from '../config/particlesConfigLightSmallScreens'

const ParticlesBackgroundLight = () => {
  const [options, setOptions] = useState(particlesConfigLight)

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setOptions(particlesConfigLightSmallScreens)
      } else {
        setOptions(particlesConfigLight)
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
export default ParticlesBackgroundLight
