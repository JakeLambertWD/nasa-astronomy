import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Button, CardMedia, Alert } from '@mui/material';
import { atom, useRecoilState } from 'recoil';

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
	picture: {
		width: '300px',
		height: '300px'
	},
	button: {
		marginTop: '20px !important'
	}
}));

// recoil state management
export const userPhotosState = atom({
	key: 'usersPhotos',
	default: []
});

const Astronomy = () => {
	const [marsPhotos, setMarsPhotos] = useState([]);
	const [displayPhoto, setDisplayPhoto] = useState('');
	const [usersPhotos, setUsersPhotos] = useRecoilState(userPhotosState);

	const classes = useStyles();

	const api_key = 'pbaCt8foC44gOOMqgBeKOq6q0MBvINVbvaBHgCIj';
	useEffect(() => {
		fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`)
			.then(res => res.json())
			.then(resData => {
				const { photos } = resData;
				setDisplayPhoto(photos[0].img_src);
				setMarsPhotos(photos);
			});
	}, []);

	const handleNextPhoto = () => setDisplayPhoto(marsPhotos[Math.floor(Math.random() * marsPhotos.length)].img_src); // get random photo

	// save photo
	const photosArray = [];
	const handleSave = () => {
		photosArray.push(displayPhoto); // add new photo to array
		setUsersPhotos(usersPhotos.concat(photosArray)); // set array to state
	};

	return (
		<>
			<Card className={classes.container} raised={true} sx={{ maxWidth: 500 }}>
				<CardContent className={classes.contentContainer}>
					<CardMedia component='img' height='350' width='250' image={displayPhoto} alt='Picture' />
					<Button onClick={handleNextPhoto} className={classes.button} variant='contained' color='primary'>
						Next
					</Button>
					<Button onClick={handleSave} className={classes.button} variant='contained' color='secondary'>
						Save
					</Button>
				</CardContent>
			</Card>
		</>
	);
};
export default Astronomy;
