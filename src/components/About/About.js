import React from 'react';
import BgAnimation from '../BackgroundAnimation/BackgroundAnimation';
import './About.css';

const About = () => {
    return (
        <>
            <div className="about container" id="about">
                <h1 className="title">Hi, I'm Junwon. Welcome to my personal website!</h1>
                <h4 className="about__description">I'm a class 2020 undergraduate majored in Information Sciences and Technology and Risk Management at The Pennsylvania State University. <br/> Outside of work and studying, I like to cook and play volleyball!</h4>
                <div className="BgAnimation">
                    <BgAnimation className="BgAnimation__svg"/>
                </div>
                <div className="btn__container">
                    <a className="gradient__btn btn">Download Resume</a>
                </div>
            </div>
        </>
    )
}

export default About;
