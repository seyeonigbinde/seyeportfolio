import React from 'react'

import html from '../images/html.png'
import css3 from '../images/css3.jpeg'
import javascript1 from '../images/javascript1.png'
import bootstrap from '../images/bootstrap.png'
import react from '../images/react.png'
import redux2 from '../images/redux2.png'
import node from '../images/node.png'
import postgresql from '../images/postgresql.png'
import express from '../images/express.png'

import altrest_app from '../images/altrest_app.png'
import altrest_web from '../images/altrest_web.png'
import easybank from '../images/easybank.png'
import ariya from '../images/ariya.png'
import todoapp from '../images/todoapp.png'

const Homepage = () => {


    return (
        <section>
            <header>
                <div className="logo">
                    Logo
                </div>
                <nav>
                    <a href="#about" alt=""> Profile</a>
                    <a href="#skills" alt=""> Skills</a>
                    <a href="#portfolio" alt=""> Projects</a>
                    <a href="#contact" alt=""> Contact</a>
                    <a href="https://docs.google.com/document/d/1dF4Tr9AeX-J-smiCSztGF8n7i6Sh5N40ZeIKpW0eonM/edit?usp=sharing"> <button> Resume</button></a>
                </nav>
            </header>
            <section className="introduction">
                <div className="intro_text">
                    <h5>Hi I'm Seye Onigbinde</h5>
                    <h1>I CODE THINGS FOR THE WEB. </h1>
                    <p> I'm a Full-Stack Web Developer who builds creative and efficient web applications</p>
                </div>
                <div>

                </div>
            </section>
            <section id="about">
                <h2>About Me</h2>
                <h5>
                    I am a Web Developer trained at Lambda School with years of experience in Finance, Accounting, Financial Modelling, Financial Reporting and Treasury Management. My passion to create, innovate and solve problems made me developed interest in Web Development. Before joining Lambda School, I have worked in the financial services industry as a Financial Controller where I and my team managed the financials and cashflows of the bank efficiently and profitably.
                </h5>
            </section>
            <section id="offer">

            </section>
            <section  id="skills"> 
            <h3>Tech I Use</h3>
            <section class="skills_container">
                <div className="tooltip">
                    <img src={html} alt="" />
                    <p className="tooltiptext"> HTML</p>
                </div>
                <div className="tooltip">
                    <img src={css3} alt="" />
                    <p className="tooltiptext"> CSS</p>
                </div>
                <div className="tooltip">
                    <img src={javascript1} alt="" />
                    <p className="tooltiptext"> JavaScript</p>
                </div>
                <div className="tooltip">
                    <img src={react} alt="" />
                    <p className="tooltiptext"> React</p>
                </div>
                <div className="tooltip">
                    <img src={bootstrap} alt="" />
                    <p className="tooltiptext"> Bootstrap</p>
                </div>
                <div className="tooltip">
                    <img src={redux2} alt="" />
                    <p className="tooltiptext"> Redux</p>
                </div>
                <div className="tooltip">
                    <img src={node} alt="" />
                    <p className="tooltiptext"> Nodejs</p>
                </div>
                <div className="tooltip">
                    <img src={postgresql} alt="" />
                    <p className="tooltiptext"> PostgreSQL</p>
                </div>
                <div className="tooltip">
                    <img src={express} alt="" />
                    <p className="tooltiptext"> Expressjs</p>
                </div>
            </section>
            </section>
            <h3>My Portfolios</h3>
            <section id="portfolio">
                <div className="container">
                    <img src={altrest_app} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>ALTREST is a tenant management platform </p>
                            <p> React || Nodejs || Express || Bootstrap</p>
                            <div>
                            <a href="https://altrest-tenant-management-app.vercel.app/"><button>View</button></a>
                            <a href="https://github.com/seyeonigbinde/Altrest-Tenant-App-FrontEnd-2"> <i class="fab fa-github fa-2x"></i> </a>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <img src={ariya} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>ARIYA is an online marketplace, specifically designed for the event industry </p>
                            <p> React || Nodejs || Express</p>
                            <div>
                            <a href="#1"><button>View</button></a>
                            <a href="https://github.com/seyeonigbinde/ariya"> <i class="fab fa-github fa-2x"></i> </a>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <img src={easybank} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>EasyBank is Frontend Mentor Challenge </p>
                            <p> HTML 5 ||CSS 3</p>
                            <div>
                            <a href="#1"><button>View</button></a>
                            <a href="https://github.com/seyeonigbinde/Easybank-Landing-Page-Challenge"> <i class="fab fa-github fa-2x"></i> </a>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <img src={todoapp} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>Todo App for activity management </p>
                            <p> React || Nodejs || Express</p>
                            <div>
                            <a href="https://my-todolist-apps.herokuapp.com/"><button>View</button></a>
                            <a href="https://github.com/seyeonigbinde/TodoList"> <i class="fab fa-github fa-2x"></i> </a>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <img src={altrest_web} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>ALTREST is a tenant management platform </p>
                            <p> React || CSS 3 || Bootstrap</p>
                            <div>
                            <a href="https://altrest-seyeonigbinde.vercel.app/"><button>View</button></a>
                            <a href="https://github.com/seyeonigbinde/Altrest-Tenant-App-FrontEnd-1"> <i class="fab fa-github fa-2x"></i> </a>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <img src={easybank} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>EasyBank is Frontend Mentor Challenge </p>
                            <p> HTML 5 ||CSS 3</p>
                            <div>
                            <a href="#1"><button>View</button></a>
                            <a href="https://github.com/seyeonigbinde"> <i class="fab fa-github fa-2x"></i> </a>
                            </div>
                            </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contact_text">
                    <h3>Get in Touch</h3>
                    <p>Send me a message at <a href="#1" alt=""> seyeonigbinde@gmail.com </a>or fill the form bellow:</p>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Message" />
                        <button>Submit</button>
                    </form>
                </div>
                <div className="container">
                    <img src={ariya} alt="" />
                </div>
            </section>
            <footer>
                <div className="footer_socials">
                <a href="https://twitter.com/SStephen_Coding"> <i class="fab fa-twitter"></i> </a> 
                <a href="https://www.linkedin.com/in/onigbindeseye/"><i class="fab fa-linkedin"></i>  </a>
                <a href="https://github.com/seyeonigbinde"> <i class="fab fa-github"></i> </a>
                <a href="mailto:seyeonigbinde@gmail.com"><i class="fas fa-envelope-square"></i></a>

                </div>
                <p>Copyright &copy; 2021 || Designed by Stevens Design Tech.</p>
            </footer>
        </section>
    )
}

export default Homepage