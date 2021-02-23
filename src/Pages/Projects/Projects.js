import React, { useState } from 'react';
import ProjectCard from '../../Components/Card/Card';
import './Projects.scss';

function Projects() {
    const [projectList] = useState([
        {
          id: 1,
          name: 'YouLoop',
          type: 'FRONT-END PROJECT',
          tech: 'Javascript, HTML, CSS, API',
          picture: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96e8c52b31b6e86b4abf5a20d9845793&auto=format&fit=crop&w=1050&q=80',
          description: 'A Web App that allows the users to search, research and book a .socially conscious travel adventure.',
          live: '',
          github: '',
        },
        {
          id: 2,
          name: 'Face Recognition',
          type: 'MOBILE FIRST PROJECT',
          tech: 'Javascript, HTML, CSS, Node, Express Handlebars, MySQL, Sequelize, Passport',
          picture: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8b5a4a4c3548fbfc1f753ec805eca60&auto=format&fit=crop&w=1050&q=80',
          description: 'A Waste managment system that allows user to search items from a mySQL database and tells the user how to dispose of it.',
          live: '',
          github: '',
        },
        {
          id: 3,
          name: 'KanBan Board',
          type: 'FULLSTACK PROJECT',
          tech: 'Javascript, React, Node.js, MongoDB, Mongoose.js, Express.js, Passport,js',
          picture: 'https://images.unsplash.com/photo-1534322904425-1bca0e9211e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13eca4d401fd7b5fac7239fb81671147&auto=format&fit=crop&w=965&q=80',
          description: '"In their own Voices" aims to allow users to easlier follow their MPP social presence and ',
          live: '',
          github: '',
        },
        {
            id: 4,
            name: 'Sorting Visualizer',
            type: 'FULLSTACK PROJECT',
            tech: 'Javascript, React, Node.js, MongoDB, Mongoose.js, Express.js, Passport,js',
            picture: 'https://images.unsplash.com/photo-1534322904425-1bca0e9211e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13eca4d401fd7b5fac7239fb81671147&auto=format&fit=crop&w=965&q=80',
            description: '"In their own Voices" aims to allow users to easlier follow their MPP social presence and ',
            live: '',
            github: '',
          },
          {
            id: 5,
            name: 'Cycland',
            type: 'FULLSTACK PROJECT',
            tech: 'Javascript, React, Node.js, MongoDB, Mongoose.js, Express.js, Passport,js',
            picture: 'https://images.unsplash.com/photo-1534322904425-1bca0e9211e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13eca4d401fd7b5fac7239fb81671147&auto=format&fit=crop&w=965&q=80',
            description: '"In their own Voices" aims to allow users to easlier follow their MPP social presence and ',
            live: '',
            github: '',
          },
          {
            id: 6,
            name: 'Pomodoro Timer',
            type: 'MOBILE FIRST PROJECT',
            tech: 'Javascript, HTML, CSS, Node, Express Handlebars, MySQL, Sequelize, Passport',
            picture: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8b5a4a4c3548fbfc1f753ec805eca60&auto=format&fit=crop&w=1050&q=80',
            description: 'A Waste managment system that allows user to search items from a mySQL database and tells the user how to dispose of it.',
            live: '',
            github: '',
          }
      ]);
    return(
        <div>
            <div className='container-projects'> 
                <div className='intro'> Introduction</div>
                <div className='cardProjects'>
                    <ProjectCard projectList={projectList}/>
                </div>
            </div>
           <canvas className='canvas-projects'></canvas>
        </div>

    )
};

export default Projects;