import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { TiChevronRight } from "react-icons/ti";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jobs from './job';
import './Experience.css'

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
});

const Experience = () => {
    const [id, setId] = useState(0);
    const { title, dates, duties, company, link } = jobs[id];

    const handleChange = (event, id) => {
        setId(id);
    };

    return (
        <>
            <div className="experience container">
                <div className="hr__container" id="experience">
                    <hr className="gradient__hr"/>
                </div>
                <h2 className="title">Experience</h2>
                <h4 className="about__description" style={{marginBottom: '1em', color: "#7D8597"}}>My mission is to pursue lifelong learning and growth and to share my experience and knowledge with others.</h4>
                <div className="job__small">
                    <ThemeProvider theme={theme}> 
                        <Box style={{ marginBottom: '3em' }}>
                            <Tabs
                                value={id}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                textColor="inherit"
                                indicatorColor="inherit"
                                aria-label="list of companies"
                            >
                                {jobs.map(({company, id})=>{
                                    return (
                                        <Tab key={id} label={company} />
                                    )
                                })}
                            </Tabs>
                        </Box>
                    </ThemeProvider>
                    
                    <div className="job__container">
                        <h3 style={{marginTop: 0, fontWeight: 500, marginBottom: 0}}>{title} <span className="company__link">@<a href={link}>{company}</a></span></h3>
                        <p style={{marginTop: '0.5em', color: '#979DAC', fontSize: '14px', marginBottom: "2em"}}>{dates}</p>
                        {duties.map((duty, index)=>
                        {
                            return(
                                <div className="job-desc" key={index}>
                                    <TiChevronRight className="right" style={{color:"#92b3ec"}}/>
                                    <p className="job" style={{color: '#7D8597', lineHeight: "1.45", fontSize: '15px'}}>{duty}</p>
                                </div>
                        )})}
                    </div>
                </div>
                <div className="job__big">
                    <Box style={{marginBottom: '3em'}}>
                        <Tabs
                            orientation="vertical"
                            value={id}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons={false}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="list of companies"
                        >
                            {jobs.map(({company, id})=>{
                                return (
                                    <Tab key={id} label={company} />
                                )
                            })}
                        </Tabs>
                    </Box>
                    <div className="job__container">
                        <h3 style={{marginTop: 0, fontWeight: 500, marginBottom: 0}}>{title} <span className="company__link">@<a href={link}>{company}</a></span></h3>
                        <p style={{marginTop: '0.5em', color: '#979DAC', fontSize: '14px', marginBottom: "2em"}}>{dates}</p>
                        {duties.map((duty, index)=>
                        {
                            return(
                                <div className="job-desc" key={index}>
                                    <TiChevronRight className="right" style={{color:"#92b3ec"}}/>
                                    <p className="job" style={{color: '#7D8597', lineHeight: "1.45", fontSize: '15px'}}>{duty}</p>
                                </div>
                        )})}
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Experience;
