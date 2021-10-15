import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { TiChevronRight } from "react-icons/ti";
import jobs from './job';
import './Experience.css'

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
                    <Box style={{ marginBottom: '2.5em' }}>
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
                                    <Tab disableRipple key={id} label={company} />
                                )
                            })}
                        </Tabs>
                    </Box>
                    <div className="job__container .container">
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
                    <Box style={{ marginBottom: '2.5em' }}>
                        <Tabs
                            value={id}
                            onChange={handleChange}
                            orientation="vertical"
                            variant="scrollable"
                            scrollButtons={false}
                            textColor="inherit"
                            indicatorColor="inherit"
                            aria-label="list of companies"
                        >
                            {jobs.map(({company, id})=>{
                                return (
                                    <Tab disableRipple key={id} label={company} />
                                )
                            })}
                        </Tabs>
                    </Box>
                    <div className="job__container .container">
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
