import Header from './ui/Header';
import Astronomy from './ui/Astronomy';
import Favourites from './ui/Favourites';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Astronomy />} />
					<Route exact path='/favourites' element={<Favourites />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
