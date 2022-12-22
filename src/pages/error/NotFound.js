import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AuthContext from 'store/auth-context';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const authCtx = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleBack = () =>{
    if(loggedIn){
        navigate('/user')
        return;
    }
    navigate('/')
  }

  useEffect(()=>{
    setLoggedIn(authCtx.isLoggedIn);
  },[])
    return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: "#FFE6E0",
      }}
    >
      <Typography variant="h1" style={{ color: '#b30c2e' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: '#b30c2e' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={handleBack}>Back Home</Button>
    </Box>
  );
}