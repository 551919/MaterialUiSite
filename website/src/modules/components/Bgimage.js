import * as React from "react";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Background from '../../Icons/sitebg.jpg'
import Grid from '@mui/material/Grid'
import { Typography} from "@mui/material";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


const styles = {
    paperContainer: {
        height: '100vh',
        backgroundImage: `url(${Background})`
    }
};

export const BgImage = () => {
    return (
        <Paper elevation={5} style={styles.paperContainer}>
            <Grid container padding={20} xs={11} justifyContent="flex-end">
                <Typography color='primary' variant='h1' sx={{ fontWeight : 'Bold'}}>Meet ORMI</Typography>
            </Grid>
            <Grid container xs={11} spacing={3} justifyContent="flex-end">
                <CurrencyBitcoinIcon color='primary' sx={{ display: {fontSize: 500}, mr: 100 }} />
                <Paper sx={{backgroundColor: '#1C2321', width: '60vh'}}>
                    <Typography color='primary' variant='h3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>
                </Paper>
            </Grid>
        </Paper>
    );
}