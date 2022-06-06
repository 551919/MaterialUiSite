import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Switch } from '@mui/material';
import { MuiNavbar } from './modules/components/MuiNavbar';
import './App.css'

function App() {
	return (
		<div className='App'>
			<MuiNavbar />
		</div>
	)
}

export default App;
