import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  const navigate = useNavigate();
  
  useEffect(() => {
    if(auth.currentUser != null)
    {
        navigate('/dashboard', { replace: true });
        console.log("Exucute useEffect");
    }
  });



  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot sx={{color:'#2A6049'}} >
            <img style={{            
              position: 'fixed',
              width:'auto',
              height:'25%',
              marginTop:'18%',
              marginLeft:'5%'
            }}
            src="/assets/images/FYP-Logo-White.png" alt="login" />

        {mdUp && (
          <StyledSection sx={{backgroundColor:'#2A6049'}}>
            {/* <Typography variant="h3" sx={{ px: 5, mt: 15, mb: 0, color:'#2A6049' }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" /> */}
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h2" gutterBottom textAlign='center' >
              Login
            </Typography>
            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
