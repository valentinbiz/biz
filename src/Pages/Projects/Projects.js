import React from 'react';
import ProjectCard from '../../Components/Card/Card';
import './Projects.scss';

function Projects() {
    return(
        <div>
            <div className='container-projects'> 
                <div className='intro'> Introduction</div>
                <div className='card'>
                    <ProjectCard  />
                </div>
            </div>
           <canvas className='canvas-projects'></canvas>
        </div>

    )
};

export default Projects;