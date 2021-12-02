import React from "react"

import intro_img from "../images/intro_img.jpeg"

import html2 from "../images/html2.png"
import css3 from "../images/css3.jpeg"
import javascript1 from "../images/javascript1.png"
import typescript from "../images/typescript.png"
import bootstrap from "../images/bootstrap.png"
import react from "../images/react.png"
import redux2 from "../images/redux2.png"
import node from "../images/node.png"
import postgresql from "../images/postgresql.png"
import express from "../images/express.png"
import mongodb from "../images/mongodb.png"
import material from "../images/material_ui.png"

import altrest_app from "../images/altrest_app.png"
import altrest_web from "../images/altrest_web.png"
import easybank from "../images/easybank.png"
import ariya from "../images/ariya.png"
import todoapp2 from "../images/todoapp2.png"
import calculator from "../images/calculator.png"
import imani from "../images/imani.png"
import oluseun from "../images/oluseun.png"
import vicky from "../images/vicky_stores.png"
import lovingsitter from "../images/lovingsitter.png"

import footer_img2 from "../images/footer_img2.jpeg"
import Header from "./Header"

const Homepage = () => {
  return (
    <section>
      <Header />
      <section id='profile'>
        <div className='intro_text'>
          <h4>Hi, I'm Seye Onigbinde,</h4>
          <h1>I CODE FOR THE WEB. </h1>
          <p>
            I'm a Web Developer who builds creative and efficient web
            applications
          </p>
          <div className='intro_socials'>
            <a href='https://twitter.com/SeyeOni_Codes'>
              <i class='fab fa-twitter fa-2x'></i>
            </a>
            <a href='https://www.linkedin.com/in/onigbindeseye/'>
              <i class='fab fa-linkedin fa-2x'></i>
            </a>
            <a href='https://github.com/seyeonigbinde'>
              <i class='fab fa-github fa-2x'></i>
            </a>
            <a href='mailto:seyeonigbinde@gmail.com'>
              <i class='fas fa-envelope-square fa-2x'></i>
            </a>
          </div>
        </div>
        <div
          className='intro_img'
          data-aos='fade-up-left'
          data-aos-duration='3000'
        >
          <img src={intro_img} alt='' />
        </div>
      </section>
      <section id='about'>
        <div className='about_left'>
          <h2>About Me</h2>
          <hr />
          <p>
            I am a Web Developer trained at Lambda School with years of
            experience in Finance, Accounting, Financial Modelling, Financial
            Reporting and Treasury Management. My passion to create, innovate
            and solve problems made me developed interest in Web Development.
            Before joining Lambda School, I have worked in the financial
            services industry as a Financial Controller where I and my team
            managed the financials and cashflows of the bank efficiently and
            profitably.
          </p>
          <div className='about_learn'>
            <p>
              🌱 I’m currently learning TailWindCSS and Next.js.
              <br />
              👯 I’m looking to collaborate on Web Development projects.
            </p>
          </div>
        </div>
        <div className='about_right'></div>
      </section>
      <section id='skills' data-aos='zoom-in-down' data-aos-duration='3000'>
        <h2>My Skill Sets</h2>
        <hr />
        <section className='skills_container'>
          <div className='tooltip'>
            <img src={html2} alt='HTML' />
            <p className='tooltiptext'> HTML</p>
          </div>
          <div className='tooltip'>
            <img src={css3} alt='CSS' />
            <p className='tooltiptext'> CSS</p>
          </div>
          <div className='tooltip'>
            <img src={javascript1} alt='JavaScript' />
            <p className='tooltiptext'> JavaScript</p>
          </div>
          <div className='tooltip'>
            <img src={typescript} alt='TypeScript' />
            <p className='tooltiptext'> TypeScript</p>
          </div>
          <div className='tooltip'>
            <img src={react} alt='React' />
            <p className='tooltiptext'> React</p>
          </div>
          <div className='tooltip'>
            <img src={bootstrap} alt='Bootstrap' />
            <p className='tooltiptext'> Bootstrap</p>
          </div>
          <div className='tooltip'>
            <img src={material} alt='Material UI' />
            <p className='tooltiptext'> Material UI</p>
          </div>
          <div className='tooltip'>
            <img src={redux2} alt='Redux' />
            <p className='tooltiptext'> Redux</p>
          </div>
          <div className='tooltip'>
            <img src={node} alt='Nodejs' />
            <p className='tooltiptext'> Nodejs</p>
          </div>
          <div className='tooltip'>
            <img src={postgresql} alt='PostgreSQL' />
            <p className='tooltiptext'> PostgreSQL</p>
          </div>
          <div className='tooltip'>
            <img src={mongodb} alt='Mongo DB' />
            <p className='tooltiptext'> Mongo DB</p>
          </div>
          <div className='tooltip'>
            <img src={express} alt='Expressjs' />
            <p className='tooltiptext'> Expressjs</p>
          </div>
        </section>
      </section>
      <section id='portfolio' data-aos='fade-up-right' data-aos-duration='3000'>
        <h2>My Portfolios</h2>
        <hr />
        <section className='portfolio_container'>
          <div className='container'>
            <img src={altrest_app} alt='Altrest' />
            <div className='middle'>
              <div className='text'>
                <p>
                  ALTREST is a tenant management platform for submission of
                  maintenance requests and communication
                </p>
                <p>
                  React || JavaScript || Nodejs || Express || CSS3 || Bootstrap
                </p>
                <div>
                  <a href='https://altrest-tenant-management-app.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/Altrest-Tenant-App-FrontEnd-2'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={vicky} alt='' />
            <div className='middle'>
              <div className='text'>
                <p>Vicky Stores is an e-commerce site using FakeStoreAPI</p>
                <p> React || JavaScript || FakeStoreAPI || Material-UI </p>
                <div>
                  <a href='https://vicky-stores.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/vicky-stores'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={lovingsitter} alt='' />
            <div className='middle'>
              <div className='text'>
                <p>
                  LovingSitter is an ongoing web application that makes it
                  easier for dog owners to find a dog sitter especially in
                  real-time.
                </p>
                <p> React || TypeScript || MongoDB || Material-UI || Node </p>
                <div>
                  <a href='https://github.com/hatchways/team-bruschetta'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={todoapp2} alt='Todo App' />
            <div className='middle'>
              <div className='text'>
                <p>
                  A CRUD Todo App for activity management with JWT
                  authentication
                </p>
                <p> React || JavaScript || CSS 3 || Nodejs || Express</p>
                <div>
                  <a href='https://my-todolist-apps.herokuapp.com/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/TodoList'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={calculator} alt='' />
            <div className='middle'>
              <div className='text'>
                <p>
                  A Simple React Single-Digit Calculator Created Using Reducer
                  Patterns
                </p>
                <p> React || JavaScript || BootStrap </p>
                <div>
                  <a href='https://calculator-app-psi.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/Calculator-App'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={ariya} alt='Ariya' />
            <div className='middle'>
              <div className='text'>
                <p>
                  ARIYA is an online marketplace, specifically designed for the
                  event industry (Frontend Only)
                </p>
                <p> React || CSS 3 || Nodejs || Express</p>
                <div>
                  <a href='https://ariya.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/ariya'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={easybank} alt='EasyBank' />
            <div className='middle'>
              <div className='text'>
                <p>EasyBank is a Frontend Mentor Challenge (Frontend Only) </p>
                <p> HTML 5 || CSS 3</p>
                <div>
                  <a href='https://easybank-landing-page-lyart-alpha.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/Easybank-Landing-Page-Challenge'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={imani} alt='Imani-Faith' />
            <div className='middle'>
              <div className='text'>
                <p>The portfolio app for Imani-Faith </p>
                <p> HTML 5 || CSS 3</p>
                <div>
                  <a href='https://imani-portfolio.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/imani-portfolio/imani-portfolio'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={oluseun} alt='Oluseun Onigbinde' />
            <div className='middle'>
              <div className='text'>
                <p>The personal website of Oluseun Onigbinde </p>
                <p> HTML 5 || CSS 3</p>
                <div>
                  <a href='https://oluseunonigbinde.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/oluseun-onigbinde'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <img src={altrest_web} alt='Altrest' />
            <div className='middle'>
              <div className='text'>
                <p>ALTREST is a tenant management platform (Frontend Only) </p>
                <p> React || CSS 3 || BootStrap</p>
                <div>
                  <a href='https://altrest-seyeonigbinde.vercel.app/'>
                    <button>View</button>
                  </a>
                  <a href='https://github.com/seyeonigbinde/Altrest-Tenant-App-FrontEnd-1'>
                    <i class='fab fa-github fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='contact'>
          <div
            className='contact_text'
            data-aos='fade-down'
            data-aos-duration='3000'
          >
            <h2>Get in Touch</h2>
            <p>
              Send me a message at
              <a href='mailto:seyeonigbinde@gmail.com' alt=''>
                seyeonigbinde@gmail.com
              </a>
              or fill the form below:
            </p>
            <form action='mailto:seyeonigbinde@gmail.com'>
              <input className='input_area' type='text' placeholder='Name' />
              <input className='input_area' type='text' placeholder='Email' />
              <input className='input_area' type='text' placeholder='Message' />
              <input className='submitButton' type='submit' />
            </form>
          </div>
          <div
            className='footer_img'
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <img src={footer_img2} alt='contact_image' />
          </div>
        </section>
      </section>
      <footer>
        <hr />
        <div className='footer_socials'>
          <a href='https://twitter.com/SeyeOni_Codes'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.linkedin.com/in/onigbindeseye/'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/seyeonigbinde'>
            <i className='fab fa-github'></i>
          </a>
          <a href='mailto:seyeonigbinde@gmail.com'>
            <i className='fas fa-envelope-square'></i>
          </a>
        </div>
        <p>Copyright &copy; 2021 || Designed by Seye Onigbinde</p>
      </footer>
    </section>
  )
}

export default Homepage
