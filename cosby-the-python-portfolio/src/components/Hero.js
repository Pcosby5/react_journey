import React from 'react';
import './Hero.css';  // Optional for styling

function Hero() {
  return (
    <main className="wrapper">
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hello">
            <p>Heya, I'm</p>
          </div>

          <div className="hero-name">
            <span className="typedText">Prince Eugene Ofosu</span> {/* Temporary placeholder */}
          </div>

          <div className="hero-text-info">
            <p>A web developer with 2+ years of experience</p>
            <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </div>

          <div className="hero-text-btn">
            <button className="btn">Explore My Work</button>
            <button className="btn">My Resume <i className="uil uil-file"></i></button>
          </div>

          <div className="social_icons">
            <div className="icon_circle"></div>
            <div className="icon"><i className="uil uil-instagram"></i></div>
            <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
            <div className="icon"><i className="uil uil-github-alt"></i></div>
            <div className="icon"><i className="uil uil-twitter-alt"></i></div>
          </div>

          <div className="hero-image">
            <div className="image">
              <img src="../assets/image/upwork.jpg" alt="hero-logo"></img>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
