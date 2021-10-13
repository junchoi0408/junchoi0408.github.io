import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc'
import GitHubIcon from '@mui/icons-material/GitHub';
import project from './project-management-I.jpg'
import './Projects.css'

const Project = () => {
    return (
        <>
            <div className="project__container">
                <a className="project__img" src=""><img src={project} alt="img"/></a>
                <div className="project__content">
                    <h3 style={{marginTop: 0}}><a href="">Project Name</a></h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className="project__technologies">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Firebase</span>
                        <span>Commerce.js API</span>
                    </div>
                    <div className="icon__container">
                        <a style={{fontSize: '1.75em', marginRight: "1em"}}><VscGithubAlt /></a>
                        <a style={{fontSize: '1.75em'}}><BiLinkExternal /></a>
                    </div>  
                </div>                
            </div>
        </>
    )
}

export default Project;
