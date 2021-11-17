import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    socialIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})
const Footer = () => {
    const { socialIcon } = useStyle();
    return (
        <footer style={{ backgroundColor: 'black', color: 'white'}}>
            <Container >
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>Washingto DC - 465454 Logan</ListItemText>
                            <ListItemText>heno</ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <Typography>Call Now</Typography>
                        +08644546545
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>CUSTOMER SERVICE</ListItemText>
                            <ListItemText >Help center</ListItemText>
                            <ListItemText>Returns and Exchanges</ListItemText>
                            <ListItemText>Protection Programs</ListItemText>
                            <ListItemText>Replacements & Warranty Center</ListItemText>
                            <ListItemText>Contact Us</ListItemText>
                            <ListItemText>Live Chat</ListItemText>
                            <ListItemText>Live Call</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>SHOP</ListItemText>
                            <ListItemText>Sunglasses</ListItemText>
                            <ListItemText>Blue Light</ListItemText>
                            <ListItemText>Snow Goggles</ListItemText>
                            <ListItemText>Readers</ListItemText>
                            <ListItemText>Safety Rated</ListItemText>
                            <ListItemText>UV Protection Shirts</ListItemText>
                            <ListItemText>Accessories</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText>Our Story</ListItemText>
                            <ListItemText>Behind The Brand - Blog</ListItemText>
                            <ListItemText>Customer Reviews</ListItemText>
                            <ListItemText>Accessibility For All</ListItemText>
                            <ListItemText>Non-Polarized</ListItemText>
                            
                        </List>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} <a className="text-white" href="https://www.shakawathridoy.com">Shakawat Hridoy</a> All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;