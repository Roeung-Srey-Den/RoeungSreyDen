import 'animate.css';
import './Style.css';
import { useEffect } from "react";
import { javascript } from "./javascript";
function App() {
    useEffect(() => {
    javascript();
  }, []);
  return (
    <>
    <div className="all">
  {/* start header */}
  <header>
    <h1>ROEUNG SREY DEN</h1>
    <ul>
      <div className="h-middle">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <a href="https://www.facebook.com/sreyden.roeung?mibextid=LQQJ4d&mibextid=LQQJ4d">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/roeungsreyden?igsh=MzJjNjRyeDhhZ2Zi&utm_source=qr">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://github.com/Roeung-Srey-Den">
          <i className="fa-brands fa-github" />
        </a>
      </div>
      <div className="bar">
        <button id="menuBtn" onclick="clicks()" className="menu-btn">
          ☰ Menu
        </button>
        <nav id="sidebar" className="sidebar">
          <button className="close-btn" onclick="closes()" id="closeBtn">
            × Close
          </button>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </ul>
  </header>
  {/* end header */}
  <section>
    {/* welcome */}
    <div className="intro">
      <div className="intro01">
        <div className="welcome">
          <p>Welcome to my Portfolio!</p>
        </div>
        <p>
          My name is <span>Roeung Srey Den </span>,<br />I am a student at
          beltei international university <br />
          as a software Engineering Student .<br />I study in years 4 Semester2.
        </p>
        {/* <p>
          I want to be a <span>front end developer.</span>
        </p> */}
        <a
          href="/assets/image/header/CURRICULUM VITAE_Roeungsreyden_por.pdf"
          download=""
          className="btn btn2"
        >
          Download CV
        </a>
      </div>
      <div className="pro2">
        <img src="/assets/image/header/pro2.png" alt="" />
      </div>
    </div>
    {/* end welcome */}
    <div id="about">
      {/* about */}
      <div>
        <h1>About Me</h1>
        <div className="line" />
        <div>
          <div className="bo">
            <div className="services-grid">
              <div className="service-box">
                <div className="left-side" />
                <div className="service-content">
                  <div className="hh2">Personal Data</div>
                  <p>Nationality :Cambodia | Gender :Female </p>
                  <p>Marital Status :Single | Birthdate :July 28, 2005</p>
                  <p>
                    Birthplace :Trapeang Chak Village, Phnom Kong Commune,
                    Angkor Chey District, Kampot Province.
                  </p>
                  <p>Health : Good | Weight Hight : 1.55 cm</p>
                </div>
              </div>
              <div className="service-box">
                <div className="left-side" />
                <div className="service-content">
                  <div className="hh2">Education</div>
                  <p>
                    2023 -Present : Study at BELTEI university (Software
                    Engineering )
                  </p>
                  <p>
                    2020 - 2023 : Study at Samdech Chea Sim Angkor Chey High
                    School graduated 2023
                  </p>
                  <p>
                    2017 - 2020 : Study at Samdech Hun Sen Sangkor Chey
                    Secondary School graduated 2020
                  </p>
                  <p>
                    2017 – 2011 : Study at Rolaing Primary School graduated 2011
                  </p>
                </div>
              </div>
              <div className="service-box">
                <div className="left-side" />
                <div className="service-content">
                  <div className="hh2">Special Skills</div>
                  <p>MS Office (Word/Excel/PowerPoint),Figma</p>
                  <p>Coding Language: HTML ,CSS ,JAVASCRIPT ,PHP,PYTHON</p>
                  <p>Framework: Laravel ,React ,Vue, Nuxt</p>
                  <p>Library: Bootstrap ,Tailwind</p>
                  <p>Database : SQL Server ,Oracle ,MySql, Postgresql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bo">
          <div className="services-grid">
            <div className="service-box">
              <div className="left-side" />
              <div className="service-content">
                <div className="hh2">Hobbies</div>
                <p>Read Book</p>
                <p>Play Sport</p>
                <p>Self Study</p>
                <p>Communication &amp; relationship</p>
                <p>Research documents &amp; others</p>
              </div>
            </div>
            <div className="service-box">
              <div className="left-side" />
              <div className="service-content">
                <div className="hh2">Experience</div>
                <p>
                  English-Teacher At THE CAM-BRIDGE CENTER FOR EDUCATION(CCE)
                  for 6 month
                </p>
                <p>Cambodian Red Cross Youth : High-School to University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about */}
  {/* slide project */}
  <div className="all">
    <div id="blog">
      <div className="slide">
        <h2>My project</h2>
        <div className="carousel">
          <div className="card" data-link="/project1.html">
            <img src="/assets/image/project/works.png" alt="" />
          </div>
          <div className="card active" data-link="/project2.html">
            <img src="/assets/image/project/work2.png" alt="" />
          </div>
          <div className="card" data-link="/project3.html">
            <img src="/assets/image/project/work3.png" alt="" />
          </div>
          <div className="card" data-link="/project4.html">
            <img src="/assets/image/project/work04.png" alt="" />
          </div>
        </div>
        <div>
          <button className="prev">BACK</button>
          <button className="next">NEXT</button>
        </div>
      </div>
      {/* end slide project */}
    </div>
    {/* contact */}
    <div className="con">
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-tittle">Contact Me</h1>
              <p>
                <i className="fa-solid fa-paper-plane" />
                roeungseryden.biu@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-phone" />
                0962255063
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/sreyden.roeung?mibextid=LQQJ4d&mibextid=LQQJ4d">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="">
                  <i className="fa-brands fa-twitter-square" />
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
              <a href="/assets/image/header/CURRICULUM VITAE_Roeungsreyden_por.pdf" download="" className="btn btn2">
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form id="contactForm">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
                <textarea
                  name="Message"
                  id="message"
                  rows={6}
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="fot">
          <div className="nofoot">
            <div className="foot">
              <i className="fa-brands fa-square-facebook" />
              <i className="fa-brands fa-facebook-messenger" />
              <i className="fa-brands fa-github" />
              <i className="fa-brands fa-instagram" />
              <a href="@roeungsreyden">
                <i className="fa-solid fa-paper-plane" />
              </a>
            </div>
            <h3>Follow me</h3>
            <div className="add">
              <i className="fa-solid fa-location-dot" />
              #217, Songkat Teuk Thla, Khan Sensok, Phnom Penh, Cambodia
              <i className="fa-solid fa-envelope" />
              roeungsreydenbiu@gmail.com
              <i className="fa-solid fa-phone" />
              096 225 506 3
            </div>
          </div>
          <h2>
            Thank You
            <i className="fa-solid fa-heart" />
          </h2>
          <h5>copyright@2025.Den</h5>
        </div>
        <div className="mapfot">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.8070615293577!2d104.87459877505361!3d11.56568488863518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzU2LjUiTiAxMDTCsDUyJzM3LjgiRQ!5e0!3m2!1sen!2skh!4v1763246765118!5m2!1sen!2skh"
            width={400}
            height={300}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </footer>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
