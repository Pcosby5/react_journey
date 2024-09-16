import { Link } from 'react-router-dom';
import './Header.css';  // Optional: for adding custom styles

function Header() {
  return (
    <header>
      <nav>
        <div className='nav_logo'>
            <p>CosbyThePython!</p>
        </div>
        <ul className='nav_menu_list'>
          <li>
            <Link to="/" className='nav_list'>Home</Link>
          </li>
          <li>
            <Link to="/projects" className='nav_list'>Projects</Link>
          </li>
          <li>
            <Link to="/about" className='nav_list'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='nav_list'>Contact</Link>
          </li>
        </ul>

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
