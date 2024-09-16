import React from 'react';
import './Hero.css';  // Optional for styling

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to CosbyThePython's Portfolio</h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <button className="hero-btn">Explore My Work</button>
         <button className="hero-cv">My resume<i className="uil uil-file"></i>
         </button>
      </div>

      <div className="social_icons">
        <div className="icon"><i className="uil uil-instagram"></i></div>
        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
        <div className="icon"><i className="uil uil-github-alt"></i></div>
        <div className="icon"><i className="uil uil-twitter-alt"></i></div>
        <div className="icon"></div>
      </div>

      <div className="hero-image">
        <div className="image">
            <img src="" alt=""></img>
        </div>

      </div>
    </section>
  );
}

export default Hero;
