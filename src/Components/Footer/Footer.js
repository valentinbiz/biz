import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.scss';

function Footer() {
    return (
        <div className='footer-container'> 
            <div className='icons'>
            <GitHubIcon style={{ fontSize: 17,  }}/>
            <InstagramIcon style={{ fontSize: 17, paddingRight: 10, paddingLeft: 10}} />
            <LinkedInIcon  style={{ fontSize: 17 }} />
            </div>
            <span className='bottom-text'> Made with ❤️ by Valentin</span>
            
        </div>

    )
}

export default Footer;