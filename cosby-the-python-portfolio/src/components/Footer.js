import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-social-icons">
        <div className="icon"><i className="uil uil-instagram"></i></div>
        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
        <div className="icon"><i className="uil uil-github-alt"></i></div>
        <div className="icon"><i className="uil uil-twitter-alt"></i></div>
      </div>

      <div className="bottom-footer">
        <p>
          Copyright &copy; <a href="#home" style={{ textDecoration: 'none' }}>
            CosbyThePython
          </a> - all rights reserved 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
