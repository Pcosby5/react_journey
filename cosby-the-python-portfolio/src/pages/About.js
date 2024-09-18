export default function About() {
  return (

      <main className="wrapper">
        <section className="section" id="about">
          <div className="top-header">
            <h1>About me</h1>
          </div>

          <div className="row">
            <div className="col">
              <div className="about-info">
                <figure className="about-me">
                  <figcaption>
                    <img src="" alt="" className="profile"></img>
                    <h1>Web developer</h1>
                    <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
                  </figcaption>
                </figure>
                <button className="about-me-btn">Hire Me</button>
              </div>
            </div>
          </div>

          <div className="skils">
            <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar ">
                <span className="skill-per html">
                  <span className="tool-tip">90%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">PYTHON</span>
              <div className="skill-bar">
                <span className="skill-per python">
                  <span className="tool-tip">85%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">JAVASCRIPT</span>
              <div className="skill-bar">
                <span className="skill-per JS">
                  <span className="tool-tip">80%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">CSS</span>
              <div className="skill-bar ">
                <span className="skill-per CSS">
                  <span className="tool-tip">75%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">GIT</span>
              <div className="skill-bar ">
                <span className="skill-per git">
                  <span className="tool-tip">95%</span>
                </span>
              </div>
            </div>

          </div>
        </section>
    </main>
  )
}
