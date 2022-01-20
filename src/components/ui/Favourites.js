import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia } from '@mui/material';
import { userPhotosState as userPhotosAtom } from './Astronomy';
import { useRecoilState } from 'recoil';

// custom classes
const useStyles = makeStyles(theme => ({
	container: {
		margin: '0 auto'
	},
	contentContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	marginBottom: {
		marginBottom: '10px'
	}
}));

const Favourites = () => {
	const [usersPhotos, setUsersPhotos] = useRecoilState(userPhotosAtom);

	const classes = useStyles();

	return (
		<>
			{usersPhotos.length > 0 ? (
				<Card className={classes.container} raised={true} sx={{ maxWidth: 500 }}>
					<CardContent className={classes.contentContainer}>
						{usersPhotos.map(photo => (
							<CardMedia className={classes.marginBottom} component='img' height='250' width='150' image={photo} alt='Picture' />
						))}
					</CardContent>
				</Card>
			) : null}
		</>
	);
};

export default Favourites;
