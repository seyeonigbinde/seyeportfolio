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
                    <a href="#porfolio" alt=""> Projects</a>
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
                <img src={html} alt=""/>
                <img src={css} alt=""/>
                <img src={javascript} alt=""/>
                <img src={bootstrap} alt=""/>
                <img src={react} alt=""/>
                <img src={redux2} alt=""/>
                <img src={node} alt=""/>
                <img src={postgresql} alt=""/>
                <img src={express} alt=""/>
            </section>
            <section id="portfolio">

            </section>
            <section id="contact">

            </section>
            <footer>

            </footer>
        </section>
    )
}

export default Homepage