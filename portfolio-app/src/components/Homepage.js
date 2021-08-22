import React from 'react'

import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
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
            <section id="skills">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
                <img src={bootstrap} alt="" />
                <img src={react} alt="" />
                <img src={redux2} alt="" />
                <img src={node} alt="" />
                <img src={postgresql} alt="" />
                <img src={express} alt="" />
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

            </section>
            <footer>

            </footer>
        </section>
    )
}

export default Homepage