import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Switch } from '@mui/material';

const App = () => {
	return(
		<div>
			<Typography variant="hi">ratio</Typography>
			<AppBar position='relative'>
				<Toolbar>
					<Typography variant="h6">
						ratio2
					</Typography>

				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>Hello</Typography>
					</Container>
					<Grid contaner justify="flex-end">
						<Switch >Ratio</Switch>
					</Grid>
					
				</div>
			</main>
		</div>
	)
}

export default App;
