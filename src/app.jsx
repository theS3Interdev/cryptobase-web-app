import { ThemeProvider } from './context/theme-context';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Account from './pages/account';
import CoinPage from './pages/coin-page';

const App = () => {
	return (
		<ThemeProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/account" element={<Account />} />
				<Route path="/coin/:coinId" element={<CoinPage />}>
					<Route path=":coinId" />
				</Route>
			</Routes>
		</ThemeProvider>
	);
};

export default App;
