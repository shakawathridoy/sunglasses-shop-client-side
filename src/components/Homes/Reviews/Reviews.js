import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { infoData } from '../../../data/data';

const Reviews = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    infoData.map(({Icon, title, description, background}) => <Grid key={title} item xs={12} sm={12} md={4} >
                    <Paper variant="outlined" sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: background, color: 'white', p: 5, borderRadius: 3}}>
                        <Icon sx={{fontSize: 60}} />
                        <Typography variant="body1">
                            {title}
                        </Typography>
                       
                        <Typography variant="subtitle">
                            {description}
                        </Typography>
                    </Paper>

                </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;