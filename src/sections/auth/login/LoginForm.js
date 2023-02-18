import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import Iconify from '../../../components/iconify';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigate('/dashboard', { replace: true });
    })
    .catch(error => alert(error.message))
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField 
          name="email" 
          placeholder="Email" 
          onChange={event => setEmail(event.target.value)}/>
        <TextField
          name="password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={event => setPassword(event.target.value)}          
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover" sx={{color:'black'}} >
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleLogin} sx={{backgroundColor:'#2A6049',}} >
        Login
      </LoadingButton>
    </>
  );
}
