import React, { useState } from 'react';
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
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';

const theme = createTheme();
export const Singup = () => {
  const [loginData, setLoginData] = useState({});

  const { user, singUp, isLoading, singInWithGoogle, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleSingupSubmit = e => {
      if (loginData.password !== loginData.password2) {
          alert('Your password did not match');
          return
      }
      singUp(loginData.email, loginData.password, location, history);
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
            Sign up
          </Typography>
          {!isLoading &&
            <Box component="form" noValidate onSubmit={handleSingupSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={handleOnChange}
            
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={handleOnChange}
                  label="Password"
                  type="password"
                  id="password"
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Re-write Password"
                  onChange={handleOnChange}
                  type="password"
                  id="password"
                
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {authError && <Alert variant="filled" severity="error">
             {authError}
           </Alert>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/login" variant="body2">
                  Already have an account? Login
                </NavLink>
              </Grid>
            </Grid>
          </Box>
          }
          {isLoading && <CircularProgress />}
          {user?.email && <Alert variant="filled" severity="success">
          Create User Succesfully!
        </Alert>}
        </Box>
        <p>------------------------------------------------------------------------</p>
      <Button onClick={handleGoogleSingIn} fullWidth style={{backgroundColor: '#19D3AE', color: '#9C27B0', fontWeight: 600}} variant="contained">SingIn with Google</Button>
      </Container>
    </ThemeProvider>
    );
};

export default Singup;