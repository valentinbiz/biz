import React from 'react';
import Canvas from '../Homepage/Canvas';

import ProfileCard from '../../Components/ProfileCard/ProfileCard';

import './About.scss';

function About() {
    

    return (
        <div>
        <div className='main-container'> Henlo 2 
        <ProfileCard />
        <Canvas leftColor= '#699' />
        </div>
        {/* <canvas className='canvas-about'></canvas> */}
        </div>
    )
};

export default About;
