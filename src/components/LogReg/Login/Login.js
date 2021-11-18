import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../Hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';

const theme = createTheme();



    const Login = () => {
      
      const [loginData, setLoginData] = useState({});
      const { user, loginUser, singInWithGoogle, isLoading, authError } = useAuth();
  
      const location = useLocation();
      const history = useHistory();
  
      const handleOnChange = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
      }
      const handleLoginSubmit = e => {
          loginUser(loginData?.email, loginData?.password, location, history);
          e.preventDefault();
      }
      const handleGoogleSingIn = (e) => {
        singInWithGoogle(location, history)
        e.preventDefault();
      }

    return (
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {!isLoading && 
          <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleOnChange}
            type="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handleOnChange}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <NavLink to="/singup" variant="body2">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
          }
          {isLoading && <CircularProgress />}
          {user?.email && <Alert variant="filled" severity="success">
          Create User Succesfully!
        </Alert>}
           {authError && <Alert variant="filled" severity="error">
             {authError}
           </Alert>}
        </Box>
        <p>------------------------------------------------------------------------</p>
      <Button onClick={handleGoogleSingIn} fullWidth style={{backgroundColor: '#19D3AE', color: '#9C27B0', fontWeight: 600}} variant="contained">SingIn with Google</Button>
      </Container>
    </ThemeProvider>
    );
};

export default Login;