import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../utils/logo.jpg'



const Navbar = () => 
   (
    <Stack
    direction="row"
    alignItems = "center" 
    p={2}
    sx={{ background: "#127e3521" , top:0 , justifyContent: "space-between"}}
    >
      <Link to="/" style={{ display: "flex", alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      AllMoviesNomo

    
      
    </Stack>
    
  )


export default Navbar;