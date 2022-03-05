import React from 'react';
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import PermMediaIcon from '@material-ui/icons/PermMedia';
const Navbar = () => {
    return(
      <AppBar position="static" style={{width: '100%'}}>
          <Toolbar>
             <PermMediaIcon style={{fontSize:"30px"}}/> 
             <Typography variant="h3" style={{marginLeft:15}}>Image Finder</Typography>
          </Toolbar>
      </AppBar>
    )
}
export default Navbar;