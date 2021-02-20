import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
// import './Menu.scss';

function MenuDropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div>
        <Button onClick={handleClick}> 
            <FiberManualRecordTwoToneIcon  style={{ fontSize: 40 }} />
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ theme: 'black' }}
        >  
        {/* <Switch> */}
            <Link to='/about' style={{ textDecoration: 'none', color:'black' }}>
            <MenuItem onClick={handleClose} >About</MenuItem>
           </Link> 
           <Link to='/projects' style={{ textDecoration: 'none', color:'black' }}>
            <MenuItem onClick={handleClose}>Work</MenuItem> 
            </Link>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
        {/* </Switch> */}
           
        </Menu>
    </div>
)}

export default MenuDropdown;
