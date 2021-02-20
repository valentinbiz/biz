import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftLogo} from './Work.svg'
import { ReactComponent as RightLogo} from './good.svg'
import Canvas from './Canvas';


import './Homepage.scss';

function Homepage () {
    return (
        <div>
            <div className='homepage-container'>
                <h1> Hello there. </h1>
                <h2> My name is Valentin and I'm a self-taught full stackstack developer. <br />
                    Click anywhere... </h2>
                <Link to='/projects' style={{ textDecoration: 'none', color:'black' }}>
                <div className='left-side'>
                    <LeftLogo className='logo'/>
                    <h3> on this side to check some of my work</h3>
                    
                </div>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none', color:'black' }}>
                <div className='right-side' >
                    <RightLogo className='logo' />
                    <h3> or this side to find out more about myself.</h3>
                </div>
                </Link>
            </div>
            <Canvas /> 
            </div>

        )
};

export default Homepage;