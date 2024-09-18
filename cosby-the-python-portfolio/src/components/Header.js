import { NavLink } from 'react-router-dom';
import './Header.css';  // Optional: for adding custom styles

function Header() {
  return (
    <header className="container">
      <nav id="header">
        <div className='nav-logo'>
            <p className="nav-name">CosbyThePython!</p>
        </div>

        <div className="nav-menu" id="myNavMenu">
          <ul className='nav_menu_list'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav_list active-link' : 'nav_list'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className='nav_list'>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='nav_list'>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='nav_list'>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* dark mode */}
        <div className="mode">
            <div className="moon-sun" id="toggle-switch">
                <i className="fa fa-moon" id="moon"></i>
                <i className="fa fa-sun" id="sun"></i>
            </div>
        </div>

        <div className='nav-menu-btn'>
            <i className='uil uil-bars' ></i>
        </div>

      </nav>
    </header>
  );
}

export default Header;
