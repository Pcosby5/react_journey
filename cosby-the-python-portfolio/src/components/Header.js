import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';  // Import useState and useEffect
import './Header.css';  // Import your custom styles

function Header() {
  // State to track menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for the saved theme preference
    return localStorage.getItem('theme') === 'dark' ? true : false;
  });

  // Toggle menu open/close
  const myMenuFunction = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark or light theme class to the body based on state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="container">
      <nav id="header">
        <div className='nav-logo'>
          <p className="nav-name">CosbyThePython!</p>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="myNavMenu">
          <ul className='nav_menu_list'>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav_list active-link' : 'nav_list'}>Home</NavLink>
            </li>
            <li><NavLink to="/projects" className='nav_list'>Projects</NavLink></li>
            <li><NavLink to="/about" className='nav_list'>About</NavLink></li>
            <li><NavLink to="/contact" className='nav_list'>Contact</NavLink></li>
          </ul>
        </div>

        {/* dark mode switch */}
        <div className="mode">
          <div className="moon-sun" id="toggle-switch" onClick={toggleDarkMode}>
            <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} id={isDarkMode ? 'sun' : 'moon'}></i>
          </div>
        </div>

        <div className='nav-menu-btn'>
          <i className='uil uil-bars' onClick={myMenuFunction}></i>
        </div>

      </nav>
    </header>
  );
}

export default Header;
