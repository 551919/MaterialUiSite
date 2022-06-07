import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import {Card3}  from './Card3';


export const GridMain = () => {
    return (
        < Grid container direction="row" justifyContent="space-evenly" padding={10}>
            <Grid item xs={12} sm={4} md={3}>
                <Card1/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Card1/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Card1/>
            </Grid>
        </Grid>
    );
}
