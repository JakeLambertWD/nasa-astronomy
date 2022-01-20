import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Button, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

// custom classes
const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em'
	},
	buttonContainer: {
		padding: '0'
	},
	logo: {
		height: '6em'
	},
	tab: {
		...theme.typography.customFont
	}
}));

const Header = () => {
	const classes = useStyles();

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue); // render selected page
	};

	return (
		<>
			<AppBar>
				<Toolbar position='fixed' disableGutters>
					<Button component={Link} to='/' className={classes.buttonContainer}>
						<img
							className={classes.logo}
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'
							alt='Nasa Logo'
						/>
					</Button>
					<Tabs value={value} onChange={handleChange} indicatorColor='secondary'>
						<Tab className={classes.tab} component={Link} to='/' label='Home' />
						<Tab className={classes.tab} component={Link} to='/favourites' label='Favourites' />
					</Tabs>
				</Toolbar>
			</AppBar>
			{/* Add a margin below the Toolbar */}
			<div className={classes.toolbarMargin} />
		</>
	);
};
export default Header;
