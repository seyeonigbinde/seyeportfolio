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
                <div>
                    Logo
                </div>
                <div>
                    <a href="#about" alt=""> Profile</a>
                    <a href="#skills" alt=""> Skills</a>
                    <a href="#portfolio" alt=""> Projects</a>
                    <a href="#contact" alt=""> Contact</a>
                </div>
            </header>
            <section id="about">
                <h2>About Me</h2>
                <h5>
                    I am a Web Developer trained at Lambda School with years of experience in Finance, Accounting, Financial Modelling, Financial Reporting and Treasury Management. My passion to create, innovate and solve problems made me developed interest in Web Development. Before joining Lambda School, I have worked in the financial services industry as a Financial Controller where I and my team managed the financials and cashflows of the bank efficiently and profitably.
                </h5>
            </section>
            <section id="offer">

            </section>
            <h3>Tech I Use</h3>
            <section id="skills">
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
            <h3>My Portfolios</h3>
            <section id="portfolio">
                <div className="container">
                    <img src={altrest_app} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>ALTREST is a tenant management platform </p>
                            <p> React || Nodejs || Express || Bootstrap</p>
                            <button>View</button></div>
                    </div>
                </div>
                <div className="container">
                    <img src={ariya} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>ARIYA is an online marketplace, specifically designed for the event industry </p>
                            <p> React || Nodejs || Express</p>
                            <button>View</button></div>
                    </div>
                </div>
                <div className="container">
                    <img src={easybank} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>EasyBank is Frontend Mentor Challenge </p>
                            <p> HTML 5 ||CSS 3</p>
                            <button>View</button></div>
                    </div>
                </div>
                <div className="container">
                    <img src={todoapp} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>Todo App for activity management </p>
                            <p> React || Nodejs || Express</p>
                            <button>View</button></div>
                    </div>
                </div>
                <div className="container">
                    <img src={altrest_web} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>ALTREST is a tenant management platform </p>
                            <p> React || CSS 3 || Bootstrap</p>
                            <button>View</button></div>
                    </div>
                </div>
                <div className="container">
                    <img src={easybank} alt="" />
                    <div className="middle">
                        <div className="text">
                            <p>EasyBank is Frontend Mentor Challenge </p>
                            <p> HTML 5 ||CSS 3</p>
                            <button>View</button></div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div>
                    <h3>Get in Touch</h3>
                    <p>send me a message at seyeonigbinde@gmail.com or fill the form bellow:</p>
                    <form>
                        
                    </form>
                </div>
                <div>

                </div>
            </section>
            <footer>

            </footer>
        </section>
    )
}

export default Homepage