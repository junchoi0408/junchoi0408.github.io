import React from 'react';
import { Cloud, GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo__container">
                <Cloud id="cloud" style={{margin:'0 0.5em'}}/>
                <h2 className="logo">JC</h2>
            </div>
            <div className="navbar__links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="social__container">
                <a href="https://github.com/junchoi0408" target="_blank"><GitHub className="social__icons"/></a>
                <a href="https://www.linkedin.com/in/junwon-choi-487917139/" target="_blank"><LinkedIn className="social__icons"/></a>
                <a href="https://www.instagram.com/junchoi_0408/" target="_blank"><Instagram className="social__icons"/></a>
            </div>
        </div>
    )
}

export default Navbar;
