import React from 'react';
import { Link } from 'react-router-dom';

import MenuDropdown from '../MenuDropdown/Menu';
import {ReactComponent as Logo} from './vb.svg'


import './Header.scss';
import { Button } from '@material-ui/core';

function Header () {

        return(
            <div className='header-container'>
            <Button>
            <Link to='/'>
            <Logo className='logo'/>
            </Link>
            </Button>
            <MenuDropdown />
            </div>
        )
}

export default Header;