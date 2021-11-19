import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Container, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {

  const {user, logout} = useAuth()

    const theme = useTheme()

    const useStyle = makeStyles({
        navItem: {
            color: '#263238',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm !important')] : {
                display:'none'
              }
        },
        navItemContainer:{
            [theme.breakpoints.down('sm')] : {
                display:'none'
              }
        },
        mobileNavItem: {
            color: '#263238',
            textDecoration: 'none'
        },
    })
    const {navItem, navIcon, navItemContainer, mobileNavItem} = useStyle()

    const [state, setState] = React.useState(false);

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: 'white', color: 'black'}} position="static">
        <Container>
        <Toolbar>
          <IconButton
            className={navIcon}
            onClick={()=> setState(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home">
            <img width="200" src="https://cdn.shopify.com/s/files/1/0350/5401/t/311/assets/sr-r.svg?v=17082883067768633821" alt="" />
            </Link>
          </Typography>
          <Box className={navItemContainer}>
              <Link className={navItem} to="/home"> <Button color="inherit">Home</Button></Link>
              {
                user?.email ? 
                <Link className={navItem} to="/login"> <Button onClick={logout} color="inherit">Logout</Button></Link>
                :
                <Link className={navItem} to="/login"> <Button color="inherit">Login</Button></Link>
              }
              { 
                user?.email ?
                <Link className={navItem} to="/dashboard"> <Button className=" btn text-white bg-danger" >Dashboard</Button></Link> :
                <Link className={navItem} to="/explore"> <Button color="inherit">Explore</Button></Link>
                
                }
              <button style={{fontWeight: 900}} className=" btn text-danger">{user.displayName}</button> 
          </Box>
        </Toolbar>
            </Container>
      </AppBar>
    </Box>
    <div>
      
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=> setState(false)}
          >
             <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
              <ListItem button>
                <ListItemText>
                   <button style={{fontWeight: 900}} className=" btn text-danger">{user.displayName}</button> 
                </ListItemText>
              </ListItem>
                <Divider />
              <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/home">
                        Home
                   </Link>
                </ListItemText>
              </ListItem>
                <Divider />
              {
                user?.email ?
              <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/dashboard">
                        Dashborad
                   </Link>
                </ListItemText>
              </ListItem>
              :
                <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/explore">
                        Explore
                   </Link>
                </ListItemText>
              </ListItem>
              }
                <Divider />
                <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/explore">
                        Explore
                   </Link>
                </ListItemText>
              </ListItem>
                {/* <Divider />
              <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/myorders">
                        My Orders
                   </Link>
                </ListItemText>
              </ListItem>
                <Divider />
              <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/myreviews">
                        Reviews
                   </Link>
                </ListItemText>
              </ListItem>
                <Divider />
              <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/payment">
                        Pay Now
                   </Link>
                </ListItemText>
              </ListItem>
                <Divider /> */}
              {
                user?.email ? 
                <ListItem button>
                <ListItemText>
                   <Link onClick={logout} className={mobileNavItem} to="/logout">
                        Logout
                   </Link>
                </ListItemText>
              </ListItem> 
              :
              <ListItem button>
                <ListItemText>
                   <Link className={mobileNavItem} to="/login">
                        Login
                   </Link>
                </ListItemText>
              </ListItem>
              }
                <Divider />

          </List>
          
        </Box>
          </Drawer>
        </React.Fragment>
    </div>
        </>
    );
};

export default Navigation;