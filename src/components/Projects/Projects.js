import React from 'react';
import Project from './Project';
import babyBear from './img/baby-bear-ecommerce.PNG'
import './Projects.css';

const PastProjects = [
    {
        id: 0,
        title: 'Baby Bear BB Ecommerce App',
        image: babyBear,
        description: 'The Baby Bear BB Ecommerce App is an E-commerce app that provides high quality, comfortable, and adorable baby clothes. The project began with reducing costs and adding more flexibility to the existing E-commerce website powered by shopify.',
        improvements: {
            'API Calls': 'I would like to add caching methods to optimize the performance as the current project calls commerce.js API each time the project component renders',
            'Backend': 'Currently, we are using commerce.js to store and fetch list of products which costs about 3% per transaction. If we develop and manage backend ourselves, we can further reduce the cost.',
        },
        tech: { 
            "react": "https://reactjs.org/",
            "node.js": "https://nodejs.org/",
            "firebase": "https://firebase.google.com/",
            "commerce.js": "https://commercejs.com/",
            "stripe.js": "https://stripe.com/",
            "gsap": "https://greensock.com/gsap/",
        },
        link: 'https://junchoi0408.github.io/baby-bear-bb-ecommerce-app',
        github: 'https://github.com/junchoi0408/baby-bear-bb-ecommerce-app'
    },
]

const Projects = () => {
    return (
        <> 
            <div className="projects container">
                <div className="hr__container" id="projects">
                    <hr className="gradient__hr"/>
                </div>
                <h2 className="title">Projects</h2>
                <div className="projects__container">
                    {PastProjects.map((project) => {
                        return <Project key={project.id} {...project} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects;
