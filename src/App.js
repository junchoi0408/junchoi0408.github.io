import React, { useState } from 'react';
import { Navbar, About, Experience, Projects, Contact } from './components';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const onEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  }

  const onBodyChange = (e) => {
    const { value } = e.target;
    setBody(value);
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
      <footer className="footer container" style={{color: "#33415C"}}>
          <Box
          component="form"
          noValidate
          autoComplete="off"
        >
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={onEmailChange}
            />
            <TextField
              required
              id="outlined-textarea"
              label="Message"
              multiline
              rows={6}
              onChange={onBodyChange}
            />
          </Box>
          <div className="email__container">
            <a href="mailto:junchoi0408@gmail.com" className="gradient__btn email">Send Email</a>
          </div>
        <div className="social__container" style={{color: '#fff'}}>
          <a href="https://github.com/junchoi0408" target="_blank"><GitHub className="social__icons"/></a>
          <a href="https://www.linkedin.com/in/junwon-choi-487917139/" target="_blank"><LinkedIn className="social__icons"/></a>
          <a href="https://www.instagram.com/junchoi_0408/" target="_blank"><Instagram className="social__icons"/></a>
        </div>
        <p style={{marginLeft: '0.5em'}}> &copy; Junwon Choi {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
