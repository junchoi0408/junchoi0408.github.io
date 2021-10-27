import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc'
import './Projects.css'



const Project = ({ title, image, description, improvements, tech, link, github}) => {
    return (
        <>
            <div className="project__container">
                <a className="project__img" href={link}><img src={image} alt="project image"/></a>
                <div className="project__content">
                    <h3 style={{marginTop: 0}}><a href={github}>{title}</a></h3>
                    <h4>Project Description</h4>
                    <p>{description}</p>
                    <h4>Project Improvements</h4>
                    <p>{improvements}</p>
                    <h4>Built With</h4>
                    <div className="project__technologies">
                        {Object.keys(tech).map((technology, index)=> {
                            return <span key={index}><a href={tech[technology]}>{technology.charAt(0).toUpperCase() + technology.slice(1)}</a></span>
                        })}
                    </div>
                    <div className="icon__container">
                        <a style={{fontSize: '1.75em', marginRight: "1em"}} href={github} target="_blank" rel="noreferrer"><VscGithubAlt /></a>
                        <a style={{fontSize: '1.75em'}} href={link} target="_blank" rel="noreferrer"><BiLinkExternal /></a>
                    </div>  
                </div>                
            </div>
        </>
    )
}

export default Project;
