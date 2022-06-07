import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Switch } from '@mui/material';
import { MuiNavbar } from './modules/components/MuiNavbar';
import { GridMain } from './modules/components/GridMain'
import { Chart } from './modules/components/Chart'
import { BgImage } from './modules/components/Bgimage'
import './App.css'



function App() {
	return (
		<div className='App'>
			<MuiNavbar />
			<BgImage />
			<GridMain />
			<Chart />
		</div>
	)
}

export default App;
