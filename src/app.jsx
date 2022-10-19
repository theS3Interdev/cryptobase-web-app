import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/theme-context';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Account from './pages/account';
import CoinPage from './pages/coin-page';

const App = () => {
	const [coins, setCoins] = useState([]);

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

	useEffect(() => {
		axios.get(url).then((res) => {
			setCoins(res.data);
		});
	}, [url]);

	return (
		<ThemeProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home coins={coins} />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/account" element={<Account />} />
				<Route path="/coin/:coinId" element={<CoinPage />}>
					<Route path=":coinId" />
				</Route>
			</Routes>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
