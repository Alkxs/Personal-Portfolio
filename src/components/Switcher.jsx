import {DarkModeSwitch} from 'react-toggle-dark-mode'
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const Switcher = () => {
   const { theme, toggleTheme } = useContext(ThemeContext)
   const darkMode = theme === 'light'

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return (
    <div className='transform scale-75 md:scale-100'>
      <DarkModeSwitch 
      checked={darkMode} 
      onChange={toggleTheme} 
      size={30} 
      moonColor='black' 
      sunColor='white' />
    </div>
  )
}
export default Switcher
