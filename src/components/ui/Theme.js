import { createTheme } from '@mui/material/styles';

const customBlue = '#002052';
const customRed = '#ff1923';

export default createTheme({
	palette: {
		common: {
			red: `${customRed}`,
			blue: `${customBlue}`
		},
		primary: {
			main: `${customBlue}`
		},
		secondary: {
			main: `${customRed}`
		}
	},
	typography: {
		customFont: {
			fontFamily: 'Raleway',
			fontWeight: '700',
			textTransform: 'none',
			fontSize: '1rem',
			color: 'white !important'
		}
	}
});
