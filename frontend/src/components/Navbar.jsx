import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import logo from './images/LOGO_ICTAK.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{ color: '#352f44', backgroundColor: '#009B81', height: '70px' }}>
      <Toolbar>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'BricolageGrotesque' }}>
          <Box display="flex" alignItems="center">
            <img src={logo} alt="Logo" style={{ padding:"10px", height: '75px', marginRight: '10px' }} />
            {/* Employee Dashboard */}
          </Box>
        </Typography>
        {isMobile ? (
          // Render a mobile-friendly menu for small screens
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link href="#" color="inherit" underline="none">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" color="inherit" underline="none">About Us</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" color="inherit" underline="none">Contact Us</Link>
            </MenuItem>
          </Menu>
        ) : (
          // Render normal buttons for larger screens
          <>
            <Button variant='contained' color="primary" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={''} style={{ textDecoration: "none", color: 'white' }}> HOME</Link>
            </Button>
            <Button variant='contained' color="inherit" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={"/"} style={{ textDecoration: "none", color: 'white' }}>EVENTS</Link>
            </Button>
            <Button variant='contained' color="inherit" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={""} style={{ textDecoration: "none", color: 'white' }}>ABOUT us</Link>
            </Button>
            <Button variant='contained' color="inherit" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={"/"} style={{ textDecoration: "none", color: 'white' }}>CONTACT US</Link>
            </Button>

          </>
        )}
      </Toolbar>
    </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;






