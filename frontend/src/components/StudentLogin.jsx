import React from 'react';
import Typography from '@mui/material/Typography';
import '../CSS/studentLogin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import loginImage from '../images/login.png'

const StudentLogin = () => {
  return (

    <div className='studentlog'>
      <div className='login-form'>
        <br />
        <img src={loginImage} alt="" className='logimage'/>
      <Typography variant="h4" gutterBottom style={{color:'#006D5B',fontFamily:'TimesNewRoman'}}>
            Student Login
      </Typography>
       <br />
      <TextField id="outlined-basic" label="Email " variant="outlined"  className='input'  InputLabelProps={{ className: 'green-label' }}  /> 
   
      <br /><br />
      <TextField id="outlined-basic" label="Password" variant="outlined"  type='password' className='input' InputLabelProps={{ className: 'green-label' }} />
      <br /><br />
     
      <Button variant="contained" style={{backgroundColor:'#006D5B', width: '50%', padding: '7px',borderRadius:'50px'}}>Login</Button>
     
      <h5 style={{color:'black',fontFamily:'TimesNewRoman',fontWeight:'lighter'}}>Not a Student?
     
          <Link style={{color:'#006D5B', textDecoration:'none',fontFamily:'TimesNewRoman',fontWeight:'bold'}}> AdminLogin</Link> 
       </h5>
       </div>

    </div>

  )
}

export default StudentLogin

