import * as React from 'react';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Switch } from '@mui/material';
import { MuiNavbar } from './modules/components/MuiNavbar';
import { GridMain } from './modules/components/GridMain'
import { Chart } from './modules/components/Chart'
import { BgImage } from './modules/components/Bgimage'
import './App.css'




const rawTheme = createTheme({
    palette: {
        primary: {
            light : '#EEF1EF',
            main: '#EEF1EF',
            dark : '#1C2321'
        },
        secondary: {
            light : '#A9B4C2',
            main:  '#A9B4C2',
            dark: '#5E6572',
        },
        warning: {
            main: '#f8ba62',
            dark: '#f8ba62',
        },
        error: {
            light: '#f95959',
            main: '#fb3737',
            dark: '#fb3737',
        },
        success: {
            light: '#48f357',
            main: '#2df33e',
            dark: '#20dc31',
        },
    },
    typography: {
        fontFamily: "'Segoe UI'",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700.
    },
});

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={rawTheme}>
				<MuiNavbar />
				<BgImage />
				<GridMain />
				<Chart />
			</ThemeProvider>
			
		</React.Fragment>
	)
}

export default App;
